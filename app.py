from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from transformers import pipeline
import random
import os
import PyPDF2
import docx2txt  # Change from 'from docx import Document'

# Initialize Flask app
app = Flask(__name__)

# Configure upload folder
UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'uploads')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max upload size
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'docx'}

# Download necessary NLTK resources
@app.before_first_request
def download_nltk_resources():
    nltk.download('punkt')
    nltk.download('stopwords')
    nltk.download('wordnet')

# Initialize transformers pipelines
summarizer = pipeline("summarization")
qa_pipeline = pipeline("question-answering")

# Helper function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Function to extract text from different file types
def extract_text_from_file(file):
    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)
    
    file_extension = filename.rsplit('.', 1)[1].lower()
    text = ""
    
    try:
        if file_extension == 'txt':
            with open(file_path, 'r', encoding='utf-8') as f:
                text = f.read()
        elif file_extension == 'pdf':
            # Updated PDF processing code
            with open(file_path, 'rb') as pdf_file:
                pdf_reader = PyPDF2.PdfReader(pdf_file)
                for page_num in range(len(pdf_reader.pages)):
                    text += pdf_reader.pages[page_num].extract_text()
        elif file_extension == 'docx':
            # Using docx2txt
            text = docx2txt.process(file_path)
    except Exception as e:
        print(f"Error extracting text: {e}")
        import traceback
        traceback.print_exc()
    finally:
        # Clean up the uploaded file
        if os.path.exists(file_path):
            os.remove(file_path)
    
    return text

# Function to generate flashcards from text
def generate_flashcards(text, num_cards=5):
    sentences = sent_tokenize(text)
    stop_words = set(stopwords.words('english'))
    lemmatizer = WordNetLemmatizer()
    
    # Process text to find important terms
    word_freq = {}
    for sentence in sentences:
        words = word_tokenize(sentence.lower())
        for word in words:
            if word.isalnum() and word not in stop_words:
                lemma = lemmatizer.lemmatize(word)
                if lemma in word_freq:
                    word_freq[lemma] += 1
                else:
                    word_freq[lemma] = 1
    
    # Find important sentences with key terms
    important_sentences = []
    for sentence in sentences:
        score = 0
        words = word_tokenize(sentence.lower())
        for word in words:
            lemma = lemmatizer.lemmatize(word.lower())
            if lemma in word_freq:
                score += word_freq[lemma]
        important_sentences.append((sentence, score))
    
    # Sort sentences by importance score
    important_sentences.sort(key=lambda x: x[1], reverse=True)
    
    # Generate flashcards from important sentences
    flashcards = []
    for sentence, _ in important_sentences[:num_cards]:
        # Create a question by masking key terms
        words = word_tokenize(sentence)
        if len(words) > 5:  # Only create cards for substantial sentences
            # Find a key term to mask
            candidates = [w for w in words if lemmatizer.lemmatize(w.lower()) in word_freq 
                         and word_freq[lemmatizer.lemmatize(w.lower())] > 1 
                         and w.isalnum() and w.lower() not in stop_words]
            
            if candidates:
                term_to_mask = random.choice(candidates)
                question = sentence.replace(term_to_mask, "_______")
                flashcards.append({"question": question, "answer": term_to_mask})
    
    # If we couldn't generate enough flashcards, add some generic ones
    while len(flashcards) < min(num_cards, len(sentences) // 3):
        if len(important_sentences) > len(flashcards):
            sentence, _ = important_sentences[len(flashcards)]
            flashcards.append({"question": f"Explain the concept: {sentence}", "answer": sentence})
        else:
            break
            
    return flashcards

# Function to generate quiz questions
def generate_quiz(text, num_questions=5):
    # Use the QA pipeline to generate questions
    sentences = sent_tokenize(text)
    quiz_questions = []
    
    # Select important sentences for questions
    if len(sentences) > num_questions * 2:
        selected_sentences = random.sample(sentences, min(num_questions * 2, len(sentences)))
    else:
        selected_sentences = sentences
    
    for sentence in selected_sentences:
        if len(quiz_questions) >= num_questions:
            break
            
        # Skip short sentences
        if len(word_tokenize(sentence)) < 6:
            continue
            
        # Generate a question from the sentence
        try:
            # For multiple choice questions
            words = word_tokenize(sentence.lower())
            stop_words = set(stopwords.words('english'))
            content_words = [w for w in words if w.isalnum() and w not in stop_words]
            
            if len(content_words) > 3:
                key_word = random.choice(content_words)
                question = sentence.replace(key_word, "_______")
                
                # Generate options (including the correct answer)
                options = [key_word]
                other_content_words = [w for w in content_words if w != key_word]
                if len(other_content_words) >= 3:
                    options.extend(random.sample(other_content_words, 3))
                else:
                    # If not enough words in this sentence, get some from other sentences
                    all_words = []
                    for s in sentences:
                        if s != sentence:
                            all_words.extend([w for w in word_tokenize(s.lower()) 
                                             if w.isalnum() and w not in stop_words])
                    
                    if all_words:
                        options.extend(random.sample(all_words, min(3, len(all_words))))
                
                # Shuffle options
                random.shuffle(options)
                
                quiz_questions.append({
                    "question": f"Fill in the blank: {question}",
                    "options": options,
                    "answer": key_word
                })
        except Exception as e:
            # If question generation fails, try a different approach
            continue
    
    return quiz_questions

# Routes
# Add CORS configuration to ensure frontend can communicate with backend
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Configure upload folder
UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'uploads')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max upload size
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'docx'}

# Download necessary NLTK resources
@app.before_first_request
def download_nltk_resources():
    nltk.download('punkt')
    nltk.download('stopwords')
    nltk.download('wordnet')

# Initialize transformers pipelines
summarizer = pipeline("summarization")
qa_pipeline = pipeline("question-answering")

# Helper function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Function to extract text from different file types
def extract_text_from_file(file):
    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)
    
    file_extension = filename.rsplit('.', 1)[1].lower()
    text = ""
    
    try:
        if file_extension == 'txt':
            with open(file_path, 'r', encoding='utf-8') as f:
                text = f.read()
        elif file_extension == 'pdf':
            # Updated PDF processing code
            with open(file_path, 'rb') as pdf_file:
                pdf_reader = PyPDF2.PdfReader(pdf_file)
                for page_num in range(len(pdf_reader.pages)):
                    text += pdf_reader.pages[page_num].extract_text()
        elif file_extension == 'docx':
            # Using docx2txt
            text = docx2txt.process(file_path)
    except Exception as e:
        print(f"Error extracting text: {e}")
        import traceback
        traceback.print_exc()
    finally:
        # Clean up the uploaded file
        if os.path.exists(file_path):
            os.remove(file_path)
    
    return text

# Function to generate flashcards from text
def generate_flashcards(text, num_cards=5):
    sentences = sent_tokenize(text)
    stop_words = set(stopwords.words('english'))
    lemmatizer = WordNetLemmatizer()
    
    # Process text to find important terms
    word_freq = {}
    for sentence in sentences:
        words = word_tokenize(sentence.lower())
        for word in words:
            if word.isalnum() and word not in stop_words:
                lemma = lemmatizer.lemmatize(word)
                if lemma in word_freq:
                    word_freq[lemma] += 1
                else:
                    word_freq[lemma] = 1
    
    # Find important sentences with key terms
    important_sentences = []
    for sentence in sentences:
        score = 0
        words = word_tokenize(sentence.lower())
        for word in words:
            lemma = lemmatizer.lemmatize(word.lower())
            if lemma in word_freq:
                score += word_freq[lemma]
        important_sentences.append((sentence, score))
    
    # Sort sentences by importance score
    important_sentences.sort(key=lambda x: x[1], reverse=True)
    
    # Generate flashcards from important sentences
    flashcards = []
    for sentence, _ in important_sentences[:num_cards]:
        # Create a question by masking key terms
        words = word_tokenize(sentence)
        if len(words) > 5:  # Only create cards for substantial sentences
            # Find a key term to mask
            candidates = [w for w in words if lemmatizer.lemmatize(w.lower()) in word_freq 
                         and word_freq[lemmatizer.lemmatize(w.lower())] > 1 
                         and w.isalnum() and w.lower() not in stop_words]
            
            if candidates:
                term_to_mask = random.choice(candidates)
                question = sentence.replace(term_to_mask, "_______")
                flashcards.append({"question": question, "answer": term_to_mask})
    
    # If we couldn't generate enough flashcards, add some generic ones
    while len(flashcards) < min(num_cards, len(sentences) // 3):
        if len(important_sentences) > len(flashcards):
            sentence, _ = important_sentences[len(flashcards)]
            flashcards.append({"question": f"Explain the concept: {sentence}", "answer": sentence})
        else:
            break
            
    return flashcards

# Function to generate quiz questions
def generate_quiz(text, num_questions=5):
    # Use the QA pipeline to generate questions
    sentences = sent_tokenize(text)
    quiz_questions = []
    
    # Select important sentences for questions
    if len(sentences) > num_questions * 2:
        selected_sentences = random.sample(sentences, min(num_questions * 2, len(sentences)))
    else:
        selected_sentences = sentences
    
    for sentence in selected_sentences:
        if len(quiz_questions) >= num_questions:
            break
            
        # Skip short sentences
        if len(word_tokenize(sentence)) < 6:
            continue
            
        # Generate a question from the sentence
        try:
            # For multiple choice questions
            words = word_tokenize(sentence.lower())
            stop_words = set(stopwords.words('english'))
            content_words = [w for w in words if w.isalnum() and w not in stop_words]
            
            if len(content_words) > 3:
                key_word = random.choice(content_words)
                question = sentence.replace(key_word, "_______")
                
                # Generate options (including the correct answer)
                options = [key_word]
                other_content_words = [w for w in content_words if w != key_word]
                if len(other_content_words) >= 3:
                    options.extend(random.sample(other_content_words, 3))
                else:
                    # If not enough words in this sentence, get some from other sentences
                    all_words = []
                    for s in sentences:
                        if s != sentence:
                            all_words.extend([w for w in word_tokenize(s.lower()) 
                                             if w.isalnum() and w not in stop_words])
                    
                    if all_words:
                        options.extend(random.sample(all_words, min(3, len(all_words))))
                
                # Shuffle options
                random.shuffle(options)
                
                quiz_questions.append({
                    "question": f"Fill in the blank: {question}",
                    "options": options,
                    "answer": key_word
                })
        except Exception as e:
            # If question generation fails, try a different approach
            continue
    
    return quiz_questions

# Routes
@app.route('/')
def index():
    return render_template('index.html')

# Update the routes to serve as API endpoints
@app.route('/api/process', methods=['POST'])
def process_text():
    data = request.json
    text = data.get('text', '')
    
    if not text:
        return jsonify({"error": "No text provided"}), 400
    
    # Generate summary
    summary = ""
    if len(text) > 100:  # Only summarize substantial text
        try:
            summary_output = summarizer(text, max_length=150, min_length=30, do_sample=False)
            summary = summary_output[0]['summary_text']
        except Exception as e:
            summary = "Could not generate summary. The text might be too short or complex."
    else:
        summary = text
    
    # Generate flashcards
    flashcards = generate_flashcards(text)
    
    # Generate quiz
    quiz = generate_quiz(text)
    
    return jsonify({
        "summary": summary,
        "flashcards": flashcards,
        "quiz": quiz
    })

@app.route('/api/upload', methods=['POST'])
def upload_file():
    # Check if the post request has the file part
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    
    # If user does not select file, browser also
    # submit an empty part without filename
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    if file and allowed_file(file.filename):
        # Extract text from the file
        text = extract_text_from_file(file)
        
        if not text:
            return jsonify({"error": "Could not extract text from file"}), 400
        
        # Process the extracted text
        summary = ""
        if len(text) > 100:
            try:
                summary_output = summarizer(text, max_length=150, min_length=30, do_sample=False)
                summary = summary_output[0]['summary_text']
            except Exception as e:
                summary = "Could not generate summary. The text might be too short or complex."
        else:
            summary = text
        
        # Generate flashcards and quiz
        flashcards = generate_flashcards(text)
        quiz = generate_quiz(text)
        
        return jsonify({
            "summary": summary,
            "flashcards": flashcards,
            "quiz": quiz
        })
    
    return jsonify({"error": "File type not allowed"}), 400

# Add a new endpoint for AI assistant queries
# Update the model imports and initialization
from transformers import pipeline, AutoModelForSeq2SeqLM, AutoTokenizer
from sentence_transformers import SentenceTransformer
import torch
import os
import json
import random

# Initialize better models with caching
os.makedirs('model_cache', exist_ok=True)

# Better summarization model
summarizer_name = "facebook/bart-large-cnn"
try:
    summarizer_model = AutoModelForSeq2SeqLM.from_pretrained(summarizer_name, cache_dir='model_cache')
    summarizer_tokenizer = AutoTokenizer.from_pretrained(summarizer_name, cache_dir='model_cache')
    summarizer = pipeline("summarization", model=summarizer_model, tokenizer=summarizer_tokenizer)
except Exception as e:
    print(f"Error loading summarizer model: {e}")
    # Fallback to default model
    summarizer = pipeline("summarization")

# Better QA model
qa_model_name = "deepset/roberta-base-squad2"
try:
    qa_pipeline = pipeline("question-answering", model=qa_model_name, cache_dir='model_cache')
except Exception as e:
    print(f"Error loading QA model: {e}")
    # Fallback to default model
    qa_pipeline = pipeline("question-answering")

# Sentence embeddings for semantic search
try:
    sentence_model = SentenceTransformer('all-MiniLM-L6-v2', cache_folder='model_cache')
except Exception as e:
    print(f"Error loading sentence transformer: {e}")
    sentence_model = None

# Create a knowledge base from educational content
knowledge_base = {
    "computer_science": [
        "Virtual memory is a memory management technique that provides an idealized abstraction of the storage resources.",
        "Arrays use contiguous memory allocation while linked lists use non-contiguous memory allocation.",
        "The RSA algorithm is an asymmetric cryptographic algorithm used for secure data transmission.",
        "A transistor is a semiconductor device used to amplify or switch electronic signals."
    ],
    "mathematics": [
        "Calculus is the mathematical study of continuous change.",
        "Linear algebra is the branch of mathematics concerning linear equations and linear maps.",
        "Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data."
    ],
    "physics": [
        "Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles.",
        "Thermodynamics is the branch of physics that deals with heat and temperature, and their relation to energy, work, radiation, and properties of matter."
    ]
}

# Function to find relevant context from knowledge base
def get_relevant_context(query, top_k=3):
    if not sentence_model:
        # Return random entries if model not available
        all_texts = [text for category in knowledge_base.values() for text in category]
        return " ".join(random.sample(all_texts, min(top_k, len(all_texts))))
    
    # Encode the query
    query_embedding = sentence_model.encode(query)
    
    # Flatten the knowledge base and encode all texts
    texts = [text for category in knowledge_base.values() for text in category]
    text_embeddings = sentence_model.encode(texts)
    
    # Calculate similarities
    similarities = []
    for i, text_embedding in enumerate(text_embeddings):
        similarity = torch.nn.functional.cosine_similarity(
            torch.tensor(query_embedding).unsqueeze(0),
            torch.tensor(text_embedding).unsqueeze(0)
        )
        similarities.append((similarity.item(), texts[i]))
    
    # Sort by similarity and get top_k
    similarities.sort(reverse=True)
    top_contexts = [text for _, text in similarities[:top_k]]
    
    return " ".join(top_contexts)

# Update the ask_question endpoint with better error handling
@app.route('/api/ask', methods=['POST'])
def ask_question():
    data = request.json
    query = data.get('query', '')
    
    if not query:
        return jsonify({"error": "No question provided", "response": "Please provide a question."}), 400
    
    try:
        # Get relevant context from knowledge base
        context = get_relevant_context(query)
        
        # Use the QA pipeline with the relevant context
        response = qa_pipeline(question=query, context=context)
        answer = response['answer']
        
        # If the answer is too short or low confidence, enhance it
        if len(answer) < 30 or response.get('score', 1.0) < 0.5:
            try:
                # Use the summarizer to generate a more detailed response
                enhanced_prompt = f"Question: {query}\nContext: {context}\nDetailed answer:"
                enhanced = summarizer(enhanced_prompt, max_length=150, min_length=50, do_sample=True)
                enhanced_answer = enhanced[0]['summary_text']
                
                # Combine the answers if they're different
                if answer.lower() not in enhanced_answer.lower():
                    answer = f"{answer}\n\nAdditional information: {enhanced_answer}"
                else:
                    answer = enhanced_answer
            except Exception as e:
                print(f"Error enhancing answer: {e}")
        
        return jsonify({"response": answer})
    except Exception as e:
        print(f"Error processing question: {e}")
        import traceback
        traceback.print_exc()
        
        # Fallback to mock responses from AIAssistantPage.tsx
        query_lower = query.lower()
        if "virtual memory" in query_lower:
            answer = "Virtual memory is a memory management technique that provides an 'idealized abstraction of the storage resources that are actually available on a given machine' which 'creates the illusion to users of a very large (main) memory.'\n\nKey points about virtual memory:\n\n1. It uses both hardware and software to enable a computer to compensate for physical memory shortages by temporarily transferring data from RAM to disk storage.\n\n2. Virtual memory is implemented using demand paging or demand segmentation."
        elif "arrays" in query_lower and "linked lists" in query_lower:
            answer = "Arrays and linked lists are both linear data structures, but they differ in several key ways:\n\n1. Memory allocation:\n   - Arrays: Contiguous memory allocation\n   - Linked Lists: Non-contiguous memory allocation\n\n2. Size flexibility:\n   - Arrays: Fixed size (in most languages)\n   - Linked Lists: Dynamic size\n\n3. Access time:\n   - Arrays: O(1) for random access\n   - Linked Lists: O(n) for random access\n\n4. Insertion/Deletion:\n   - Arrays: O(n) for arbitrary insertion/deletion\n   - Linked Lists: O(1) for insertion/deletion with a pointer"
        elif "rsa" in query_lower:
            answer = "The RSA (Rivest–Shamir–Adleman) algorithm is an asymmetric cryptographic algorithm used for secure data transmission. Here's how it works:\n\n1. Key Generation:\n   - Choose two large prime numbers p and q\n   - Compute n = p × q\n   - Calculate φ(n) = (p-1) × (q-1)\n   - Choose an integer e such that 1 < e < φ(n) and gcd(e, φ(n)) = 1\n   - Compute d such that (d × e) mod φ(n) = 1\n   - Public key: (e, n), Private key: (d, n)\n\n2. Encryption:\n   - C = M^e mod n (where M is the message)\n\n3. Decryption:\n   - M = C^d mod n"
        elif "transistor" in query_lower:
            answer = "A transistor is a semiconductor device used to amplify or switch electronic signals. It consists of three layers of semiconductor material, each capable of carrying a current.\n\nBasic operation:\n\n1. In a bipolar junction transistor (BJT), there are three terminals: emitter, base, and collector.\n\n2. When a small current flows between the base and emitter, it controls a much larger current between the collector and emitter.\n\n3. This allows the transistor to act as an amplifier or a switch.\n\nTransistors are the fundamental building blocks of modern electronic devices and integrated circuits."
        else:
            answer = "I don't have specific information about that topic in my knowledge base. Please try asking about virtual memory, arrays vs. linked lists, RSA algorithm, or transistors."
        
        return jsonify({"response": answer})

# Serve the React app
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    # For API routes, let the above handlers take precedence
    if path.startswith('api/'):
        return jsonify({"error": "Not found"}), 404
    
    # For all other routes, serve the React app
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
@echo off
echo Setting up Smart Study Buddy...

echo Installing Python dependencies...
pip install -r requirements.txt

echo Creating model cache directory...
mkdir model_cache

echo Downloading and caching models (this may take a few minutes)...
python -c "from transformers import AutoModelForSeq2SeqLM, AutoTokenizer; AutoModelForSeq2SeqLM.from_pretrained('facebook/bart-large-cnn', cache_dir='model_cache'); AutoTokenizer.from_pretrained('facebook/bart-large-cnn', cache_dir='model_cache')"
python -c "from transformers import pipeline; pipeline('question-answering', model='deepset/roberta-base-squad2', cache_dir='model_cache')"
python -c "from sentence_transformers import SentenceTransformer; SentenceTransformer('all-MiniLM-L6-v2', cache_folder='model_cache')"

echo Creating uploads directory...
mkdir uploads

echo Building React frontend...
cd project
npm install
npm run build

echo Copying built files to Flask static folder...
xcopy /E /I /Y build\static\js ..\static\js
xcopy /E /I /Y build\static\css ..\static\css
if exist build\static\media xcopy /E /I /Y build\static\media ..\static\media

echo Copying index.html to templates...
copy /Y build\index.html ..\templates\index.html

cd ..
echo Setup complete! Run the application with: python app.py
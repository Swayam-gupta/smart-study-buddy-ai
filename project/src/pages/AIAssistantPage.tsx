import React, { useState } from 'react';
import { Send, HelpCircle, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';

const sampleQueries = [
  "Explain the concept of virtual memory in operating systems",
  "What are the key differences between arrays and linked lists?",
  "How does the RSA algorithm work?",
  "Explain the working of a transistor"
];

const AIAssistantPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    
    try {
      // Make API call to backend
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      setResponse(data.response);
    } catch (err) {
      console.error('Error fetching AI response:', err);
      setError('Failed to get response. Using fallback responses...');
      
      // Fallback to hardcoded responses if API fails
      let aiResponse = '';
      
      if (query.toLowerCase().includes('virtual memory')) {
        aiResponse = `Virtual memory is a memory management technique that provides an "idealized abstraction of the storage resources that are actually available on a given machine" which "creates the illusion to users of a very large (main) memory."\n\nKey points about virtual memory:\n\n1. It uses both hardware and software to enable a computer to compensate for physical memory shortages by temporarily transferring data from RAM to disk storage.\n\n2. Virtual memory is implemented using demand paging or demand segmentation.`;
      } else if (query.toLowerCase().includes('arrays') && query.toLowerCase().includes('linked lists')) {
        aiResponse = `Arrays and linked lists are both linear data structures, but they differ in several key ways:\n\n1. Memory allocation:\n   - Arrays: Contiguous memory allocation\n   - Linked Lists: Non-contiguous memory allocation\n\n2. Size flexibility:\n   - Arrays: Fixed size (in most languages)\n   - Linked Lists: Dynamic size\n\n3. Access time:\n   - Arrays: O(1) for random access\n   - Linked Lists: O(n) for random access\n\n4. Insertion/Deletion:\n   - Arrays: O(n) for arbitrary insertion/deletion\n   - Linked Lists: O(1) for insertion/deletion with a pointer`;
      } else if (query.toLowerCase().includes('rsa')) {
        aiResponse = `The RSA (Rivest–Shamir–Adleman) algorithm is an asymmetric cryptographic algorithm used for secure data transmission. Here's how it works:\n\n1. Key Generation:\n   - Choose two large prime numbers p and q\n   - Compute n = p × q\n   - Calculate φ(n) = (p-1) × (q-1)\n   - Choose an integer e such that 1 < e < φ(n) and gcd(e, φ(n)) = 1\n   - Compute d such that (d × e) mod φ(n) = 1\n   - Public key: (e, n), Private key: (d, n)\n\n2. Encryption:\n   - C = M^e mod n (where M is the message)\n\n3. Decryption:\n   - M = C^d mod n`;
      } else if (query.toLowerCase().includes('transistor')) {
        aiResponse = `A transistor is a semiconductor device used to amplify or switch electronic signals. It consists of three layers of semiconductor material, each capable of carrying a current.\n\nBasic operation:\n\n1. In a bipolar junction transistor (BJT), there are three terminals: emitter, base, and collector.\n\n2. When a small current flows between the base and emitter, it controls a much larger current between the collector and emitter.\n\n3. This allows the transistor to act as an amplifier or a switch.\n\nTransistors are the fundamental building blocks of modern electronic devices and integrated circuits.`;
      } else {
        aiResponse = `I don't have specific information about that topic in my knowledge base. Please try asking about virtual memory, arrays vs. linked lists, RSA algorithm, or transistors.`;
      }
      
      setResponse(aiResponse);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSampleQuery = (sample: string) => {
    setQuery(sample);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-white mb-2">
            AI Study Assistant
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Ask any study-related question and get instant answers from our AI assistant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Sample Questions */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <HelpCircle className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                    Sample Questions
                  </h3>
                </div>
                <div className="space-y-3">
                  {sampleQueries.map((sample, index) => (
                    <button
                      key={index}
                      onClick={() => handleSampleQuery(sample)}
                      className="w-full text-left p-3 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {sample}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-500 ml-auto" />
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Query Input and Response */}
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label 
                      htmlFor="query" 
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Ask your question
                    </label>
                    <div className="flex">
                      <input
                        id="query"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-grow rounded-l-md border border-r-0 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your question here..."
                      />
                      <Button
                        type="submit"
                        className="rounded-l-none"
                        isLoading={isLoading}
                        rightIcon={!isLoading ? <Send size={16} /> : undefined}
                      >
                        Ask
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {(response || isLoading || error) && (
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                    AI Response
                  </h3>
                  {error && (
                    <div className="p-2 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-md dark:bg-yellow-900/30 dark:text-yellow-400">
                      {error}
                    </div>
                  )}
                  {isLoading ? (
                    <div className="animate-pulse flex flex-col space-y-2 p-4">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    </div>
                  ) : (
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-md">
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                        {response}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;
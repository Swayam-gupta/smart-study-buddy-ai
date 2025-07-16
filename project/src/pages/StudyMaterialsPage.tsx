import React, { useState } from 'react';
import { Upload, FileType, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import Tabs from '../components/ui/Tabs';
import { studyMaterials } from '../data/mockData';
import { Branch } from '../types';

const branches: { id: Branch; label: string }[] = [
  { id: 'AIML', label: 'Artificial Intelligence & Machine Learning' },
  { id: 'CSE', label: 'Computer Science' },
  { id: 'IT', label: 'Information Technology' },
  { id: 'ECE', label: 'Electronics & Communication' },
  { id: 'EE', label: 'Electrical Engineering' },
  { id: 'ME', label: 'Mechanical Engineering' },
  { id: 'CE', label: 'Civil Engineering' }
];

const StudyMaterialsPage: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch>('CSE');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [uploadedText, setUploadedText] = useState<string>('');
  const navigate = useNavigate();

  const handleBranchChange = (branchId: string) => {
    setSelectedBranch(branchId as Branch);
    setSelectedYear(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedText(event.target.result as string);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleProcessText = () => {
    navigate('/summary/new');
  };

  const filteredMaterials = studyMaterials.filter(material => material.branch === selectedBranch);
  // Define all four years statically
  const years = [1, 2, 3, 4];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-white mb-2">
            Study Materials
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Access and manage your study materials by branch and year. Upload your own materials to generate summaries, flashcards, and quizzes.
          </p>
        </div>

        {/* Branch Tabs */}
        <div className="mb-8">
          <Tabs 
            tabs={branches.map(branch => ({ id: branch.id, label: branch.label }))} 
            defaultTab="CSE"
            onChange={(tabId) => handleBranchChange(tabId)}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Years and Materials */}
          <div className="lg:col-span-2">
            {/* Year Selection */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                  className={`
                    p-4 rounded-lg text-center transition-all duration-200
                    ${selectedYear === year 
                      ? 'bg-primary-600 text-white shadow-md' 
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:shadow border border-gray-200 dark:border-gray-700'
                    }
                  `}
                >
                  <h3 className="text-lg font-medium">Year {year}</h3>
                </button>
              ))}
            </div>

            {/* Materials List */}
            <div className="space-y-4">
              <h2 className="text-xl font-heading font-semibold text-gray-800 dark:text-white mb-4">
                {selectedYear ? `Year ${selectedYear} Materials` : 'All Materials'}
              </h2>

              {filteredMaterials
                .filter(material => !selectedYear || material.year === selectedYear)
                .map(material => (
                  <motion.div
                    key={material.id}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card interactive onClick={() => navigate(`/summary/${material.id}`)}>
                      <CardContent className="flex items-center">
                        <div className="mr-4 p-2 bg-primary-50 dark:bg-primary-900/20 rounded-md">
                          <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                            {material.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Year {material.year}, Semester {material.semester}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

              {filteredMaterials.filter(material => !selectedYear || material.year === selectedYear).length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">
                    No materials found for the selected criteria. Upload your own or select a different filter.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Upload */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Upload Study Material</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Upload Text File (.txt)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <input
                      type="file"
                      accept=".txt"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        Only .txt files are supported
                      </p>
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label 
                    htmlFor="text-input" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Or Enter Text Directly
                  </label>
                  <textarea
                    id="text-input"
                    rows={5}
                    value={uploadedText}
                    onChange={(e) => setUploadedText(e.target.value)}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your study material content here..."
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  fullWidth 
                  disabled={!uploadedText.trim()} 
                  onClick={handleProcessText}
                  rightIcon={<FileType size={16} />}
                >
                  Process Material
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialsPage;
import React, { useState } from 'react';
import { Download, Filter, FileText } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { previousPapers } from '../data/mockData';
import { Branch, PreviousPaper } from '../types';

const PreviousPapersPage: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch | 'all'>('all');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedSemester, setSelectedSemester] = useState<number | 'all'>('all');

  const branches: { value: Branch | 'all'; label: string }[] = [
    { value: 'all', label: 'All Branches' },
    { value: 'AIML', label: 'Artificial Intelligence and Machine Learning' },
    { value: 'CSE', label: 'Computer Science' },
    { value: 'IT', label: 'Information Technology' },
    { value: 'ECE', label: 'Electronics & Communication' },
    { value: 'EE', label: 'Electrical Engineering' },
    { value: 'ME', label: 'Mechanical Engineering' },
    { value: 'CE', label: 'Civil Engineering' }
  ];

  // Get unique years from the data
  const years = ['all', ...new Set(previousPapers.map(paper => paper.year))].sort();
  
  // Get unique semesters from the data
  const semesters = ['all', ...new Set(previousPapers.map(paper => paper.semester))].sort();

  // Filter papers based on selected filters
  const filteredPapers = previousPapers.filter(paper => 
    (selectedBranch === 'all' || paper.branch === selectedBranch) &&
    (selectedYear === 'all' || paper.year === selectedYear) &&
    (selectedSemester === 'all' || paper.semester === selectedSemester)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-white mb-2">
            Previous Year Papers
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Access previous year examination papers to better prepare for your exams.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                Filter Papers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Branch Filter */}
                <div>
                  <label htmlFor="branch-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Branch
                  </label>
                  <select
                    id="branch-filter"
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value as Branch | 'all')}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {branches.map(branch => (
                      <option key={branch.value} value={branch.value}>
                        {branch.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Year Filter */}
                <div>
                  <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Year
                  </label>
                  <select
                    id="year-filter"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Years</option>
                    {years.filter(year => year !== 'all').map(year => (
                      <option key={year} value={year}>
                        Year {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Semester Filter */}
                <div>
                  <label htmlFor="semester-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Semester
                  </label>
                  <select
                    id="semester-filter"
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Semesters</option>
                    {semesters.filter(semester => semester !== 'all').map(semester => (
                      <option key={semester} value={semester}>
                        Semester {semester}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Papers Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Subject Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Branch
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Year
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Semester
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Exam Year
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  {filteredPapers.length > 0 ? (
                    filteredPapers.map((paper, index) => (
                      <PaperRow key={paper.id} paper={paper} isEven={index % 2 === 0} />
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                        No papers found for the selected filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

interface PaperRowProps {
  paper: PreviousPaper;
  isEven: boolean;
}

const PaperRow: React.FC<PaperRowProps> = ({ paper, isEven }) => {
  const rowClass = isEven 
    ? 'bg-white dark:bg-gray-900' 
    : 'bg-gray-50 dark:bg-gray-800/50';

  return (
    <tr className={`hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${rowClass}`}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
        <div className="flex items-center">
          <FileText className="h-4 w-4 mr-2 text-primary-600 dark:text-primary-400" />
          {paper.subjectName}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
        {paper.branch}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
        Year {paper.year}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
        Semester {paper.semester}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
        {paper.examYear}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a 
          href={paper.downloadUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
        >
          <Button variant="ghost" size="sm" rightIcon={<Download size={16} />}>
            Download
          </Button>
        </a>
      </td>
    </tr>
  );
};

export default PreviousPapersPage;
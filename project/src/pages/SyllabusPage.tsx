import React, { useState } from "react";
import { ChevronDown, FileDown, BookOpen } from "lucide-react";
import Card, { CardContent } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Branch } from "../types";

interface SyllabusItem {
  id: string;
  title: string;
  branch: Branch;
  year: number;
  semester: number;
  downloadUrl: string;
}
CardContent
// Mock syllabus data
const syllabusList: SyllabusItem[] = [
   // AIML branch
{ id: "41", title: "Artificial Intelligence & Machine Learning - Year 1", branch: "AIML", year: 1, semester: 1, downloadUrl: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/1130919100717.pdf" },
{ id: "42", title: "Artificial Intelligence & Machine Learning - Year 1", branch: "AIML", year: 1, semester: 2, downloadUrl: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/replace160919125511.pdf" },
{ id: "43", title: "Artificial Intelligence & Machine Learning - Year 2", branch: "AIML", year: 2, semester: 3, downloadUrl: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/AI_and_Machine_Learning170921041538.pdf" },
{ id: "44", title: "Artificial Intelligence & Machine Learning - Year 2", branch: "AIML", year: 2, semester: 4, downloadUrl: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/IV_sem_BTech_AIML230222083345.pdf" },
{ id: "45", title: "Artificial Intelligence & Machine Learning - Year 3", branch: "AIML", year: 3, semester: 5, downloadUrl: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/B%20Tech%20V%20sem%20CSE%20AIML%20syllabus010223052406.pdf" },
{ id: "46", title: "Artificial Intelligence & Machine Learning - Year 3", branch: "AIML", year: 3, semester: 6, downloadUrl: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/VI_Sem_AIML_SY170123114104.pdf" },
{ id: "47", title: "Artificial Intelligence & Machine Learning - Year 4", branch: "AIML", year: 4, semester: 7, downloadUrl: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/CSE-AIML%20VII%20sem%20syllabus090823122849.pdf" },
{ id: "48", title: "Artificial Intelligence & Machine Learning - Year 4", branch: "AIML", year: 4, semester: 8, downloadUrl: "https://www.rgpv.ac.in/UC/frm_download_file.aspx?Filepath=CDN/PubContent/Scheme/AIML%20VIII%20sem%20Syllabus%201070224045203.pdf" },


  { id: "1", title: "Computer Science Engineering - Year 1", branch: "CSE", year: 1, semester: 1, downloadUrl: "/syllabus/cse_year1_sem1.pdf" },
  { id: "2", title: "Computer Science Engineering - Year 1", branch: "CSE", year: 1, semester: 2, downloadUrl: "/syllabus/cse_year1_sem2.pdf" },

  // Year 2
  { id: "3", title: "Computer Science Engineering - Year 2", branch: "CSE", year: 2, semester: 3, downloadUrl: "/syllabus/cse_year2_sem3.pdf" },
  { id: "4", title: "Computer Science Engineering - Year 2", branch: "CSE", year: 2, semester: 4, downloadUrl: "/syllabus/cse_year2_sem4.pdf" },

  // Year 3
  { id: "5", title: "Computer Science Engineering - Year 3", branch: "CSE", year: 3, semester: 5, downloadUrl: "/syllabus/cse_year3_sem5.pdf" },
  { id: "6", title: "Computer Science Engineering - Year 3", branch: "CSE", year: 3, semester: 6, downloadUrl: "/syllabus/cse_year3_sem6.pdf" },

  // Year 4
  { id: "7", title: "Computer Science Engineering - Year 4", branch: "CSE", year: 4, semester: 7, downloadUrl: "/syllabus/cse_year4_sem7.pdf" },
  { id: "8", title: "Computer Science Engineering - Year 4", branch: "CSE", year: 4, semester: 8, downloadUrl: "/syllabus/cse_year4_sem8.pdf" },

  // IT branch
  // Year 1
  { id: "9", title: "Information Technology - Year 1", branch: "IT", year: 1, semester: 1, downloadUrl: "/syllabus/it_year1_sem1.pdf" },
  { id: "10", title: "Information Technology - Year 1", branch: "IT", year: 1, semester: 2, downloadUrl: "/syllabus/it_year1_sem2.pdf" },

  // Year 2
  { id: "11", title: "Information Technology - Year 2", branch: "IT", year: 2, semester: 3, downloadUrl: "/syllabus/it_year2_sem3.pdf" },
  { id: "12", title: "Information Technology - Year 2", branch: "IT", year: 2, semester: 4, downloadUrl: "/syllabus/it_year2_sem4.pdf" },

  // Year 3
  { id: "13", title: "Information Technology - Year 3", branch: "IT", year: 3, semester: 5, downloadUrl: "/syllabus/it_year3_sem5.pdf" },
  { id: "14", title: "Information Technology - Year 3", branch: "IT", year: 3, semester: 6, downloadUrl: "/syllabus/it_year3_sem6.pdf" },

  // Year 4
  { id: "15", title: "Information Technology - Year 4", branch: "IT", year: 4, semester: 7, downloadUrl: "/syllabus/it_year4_sem7.pdf" },
  { id: "16", title: "Information Technology - Year 4", branch: "IT", year: 4, semester: 8, downloadUrl: "/syllabus/it_year4_sem8.pdf" },

  // ECE branch
  // Year 1
  { id: "17", title: "Electronics and Communication Engineering - Year 1", branch: "ECE", year: 1, semester: 1, downloadUrl: "/syllabus/ece_year1_sem1.pdf" },
  { id: "18", title: "Electronics and Communication Engineering - Year 1", branch: "ECE", year: 1, semester: 2, downloadUrl: "/syllabus/ece_year1_sem2.pdf" },

  // Year 2
  { id: "19", title: "Electronics and Communication Engineering - Year 2", branch: "ECE", year: 2, semester: 3, downloadUrl: "/syllabus/ece_year2_sem3.pdf" },
  { id: "20", title: "Electronics and Communication Engineering - Year 2", branch: "ECE", year: 2, semester: 4, downloadUrl: "/syllabus/ece_year2_sem4.pdf" },

  // Year 3
  { id: "21", title: "Electronics and Communication Engineering - Year 3", branch: "ECE", year: 3, semester: 5, downloadUrl: "/syllabus/ece_year3_sem5.pdf" },
  { id: "22", title: "Electronics and Communication Engineering - Year 3", branch: "ECE", year: 3, semester: 6, downloadUrl: "/syllabus/ece_year3_sem6.pdf" },

  // Year 4
  { id: "23", title: "Electronics and Communication Engineering - Year 4", branch: "ECE", year: 4, semester: 7, downloadUrl: "/syllabus/ece_year4_sem7.pdf" },
  { id: "24", title: "Electronics and Communication Engineering - Year 4", branch: "ECE", year: 4, semester: 8, downloadUrl: "/syllabus/ece_year4_sem8.pdf" },

  // EEE branch
  // Year 1
  { id: "25", title: "Electrical and Electronics Engineering - Year 1", branch: "CE", year: 1, semester: 1, downloadUrl: "/syllabus/eee_year1_sem1.pdf" },
  { id: "26", title: "Electrical and Electronics Engineering - Year 1", branch: "CE", year: 1, semester: 2, downloadUrl: "/syllabus/eee_year1_sem2.pdf" },

  // Year 2
  { id: "27", title: "Electrical and Electronics Engineering - Year 2", branch: "CE", year: 2, semester: 3, downloadUrl: "/syllabus/eee_year2_sem3.pdf" },
  { id: "28", title: "Electrical and Electronics Engineering - Year 2", branch: "CE", year: 2, semester: 4, downloadUrl: "/syllabus/eee_year2_sem4.pdf" },

  // Year 3
  { id: "29", title: "Electrical and Electronics Engineering - Year 3", branch: "CE", year: 3, semester: 5, downloadUrl: "/syllabus/eee_year3_sem5.pdf" },
  { id: "30", title: "Electrical and Electronics Engineering - Year 3", branch: "CE", year: 3, semester: 6, downloadUrl: "/syllabus/eee_year3_sem6.pdf" },

  // Year 4
  { id: "31", title: "Electrical and Electronics Engineering - Year 4", branch: "CE", year: 4, semester: 7, downloadUrl: "/syllabus/eee_year4_sem7.pdf" },
  { id: "32", title: "Electrical and Electronics Engineering - Year 4", branch: "CE", year: 4, semester: 8, downloadUrl: "/syllabus/eee_year4_sem8.pdf" },

  // ME branch
  // Year 1
  { id: "33", title: "Mechanical Engineering - Year 1", branch: "ME", year: 1, semester: 1, downloadUrl: "/syllabus/me_year1_sem1.pdf" },
  { id: "34", title: "Mechanical Engineering - Year 1", branch: "ME", year: 1, semester: 2, downloadUrl: "/syllabus/me_year1_sem2.pdf" },

  // Year 2
  { id: "35", title: "Mechanical Engineering - Year 2", branch: "ME", year: 2, semester: 3, downloadUrl: "/syllabus/me_year2_sem3.pdf" },
  { id: "36", title: "Mechanical Engineering - Year 2", branch: "ME", year: 2, semester: 4, downloadUrl: "/syllabus/me_year2_sem4.pdf" },

  // Year 3
  { id: "37", title: "Mechanical Engineering - Year 3", branch: "ME", year: 3, semester: 5, downloadUrl: "/syllabus/me_year3_sem5.pdf" },
  { id: "38", title: "Mechanical Engineering - Year 3", branch: "ME", year: 3, semester: 6, downloadUrl: "/syllabus/me_year3_sem6.pdf" },

  // Year 4
  { id: "39", title: "Mechanical Engineering - Year 4", branch: "ME", year: 4, semester: 7, downloadUrl: "/syllabus/me_year4_sem7.pdf" },
  { id: "40", title: "Mechanical Engineering - Year 4", branch: "ME", year: 4, semester: 8, downloadUrl: "/syllabus/me_year4_sem8.pdf" },
  

];

// Group syllabus items by branch and year
const groupedSyllabus = syllabusList.reduce((acc, item) => {
  const branchKey = item.branch;
  const yearKey = `Year ${item.year}`;

  if (!acc[branchKey]) {
    acc[branchKey] = {};
  }

  if (!acc[branchKey][yearKey]) {
    acc[branchKey][yearKey] = [];
  }

  acc[branchKey][yearKey].push(item);

  return acc;
}, {} as Record<string, Record<string, SyllabusItem[]>>);

const branchNames: Record<Branch, string> = {
  CSE: "Computer Science Engineering",
  AIML: "Artifical intelligence and Machine Learning",
  IT: "Information Technology",
  ECE: "Electronics & Communication Engineering",
  EE: "Electrical Engineering",
  ME: "Mechanical Engineering",
  CE: "Civil Engineering",
};

const SyllabusPage: React.FC = () => {
  const [expandedBranch, setExpandedBranch] = useState<string | null>("CSE");
  const [expandedYear, setExpandedYear] = useState<
    Record<string, string | null>
  >({
    CSE: "Year 1",
  });

  const toggleBranch = (branch: string) => {
    setExpandedBranch(expandedBranch === branch ? null : branch);
  };

  const toggleYear = (branch: string, year: string) => {
    setExpandedYear((prev) => ({
      ...prev,
      [branch]: prev[branch] === year ? null : year,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-white mb-2">
            Syllabus
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Find and download the latest syllabus for all branches and years.
          </p>
        </div>

        <div className="space-y-4">
          {Object.keys(groupedSyllabus).map((branch) => (
            <Card key={branch} className="overflow-hidden">
              <div
                className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700"
                onClick={() => toggleBranch(branch)}
              >
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                    {branchNames[branch as Branch] || branch}
                  </h3>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${
                    expandedBranch === branch ? "transform rotate-180" : ""
                  }`}
                />
              </div>

              {expandedBranch === branch && (
                <div className="p-4">
                  <div className="space-y-3">
                    {Object.keys(groupedSyllabus[branch]).map((year) => (
                      <div
                        key={year}
                        className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden"
                      >
                        <div
                          className="flex items-center justify-between p-3 cursor-pointer bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                          onClick={() => toggleYear(branch, year)}
                        >
                          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300">
                            {year}
                          </h4>
                          <ChevronDown
                            className={`h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform ${
                              expandedYear[branch] === year
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </div>

                        {expandedYear[branch] === year && (
                          <div className="p-3 bg-gray-50 dark:bg-gray-800/30 border-t border-gray-200 dark:border-gray-700">
                            <ul className="space-y-2">
                              {groupedSyllabus[branch][year].map((item) => (
                                <li
                                  key={item.id}
                                  className="flex items-center justify-between"
                                >
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    Semester {item.semester}
                                  </span>
                                  <a
                                    href={item.downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm"
                                  >
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      rightIcon={<FileDown size={14} />}
                                    >
                                      Download PDF
                                    </Button>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;

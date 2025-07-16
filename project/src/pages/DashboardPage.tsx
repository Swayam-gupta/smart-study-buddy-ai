import React from 'react';
import { Ban as Bar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card, { CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { userProfile, quizzes, studyMaterials } from '../data/mockData';

const DashboardPage: React.FC = () => {
  // Calculate progress percentage
  const totalMaterials = studyMaterials.filter(material => 
    material.branch === userProfile.branch
  ).length;
  
  const materialsViewedCount = userProfile.progress.materialsViewed.length;
  const progressPercentage = totalMaterials > 0 
    ? Math.round((materialsViewedCount / totalMaterials) * 100)
    : 0;

  // Calculate average quiz score
  const quizScores = userProfile.progress.quizzesTaken.map(quiz => quiz.score);
  const averageScore = quizScores.length > 0
    ? Math.round(quizScores.reduce((acc, score) => acc + score, 0) / quizScores.length)
    : 0;

  // Get recently viewed materials
  const recentlyViewedMaterials = userProfile.progress.materialsViewed
    .map(id => studyMaterials.find(material => material.id === id))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-white mb-2">
            Your Study Progress
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track your learning journey and study progress.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle>Materials Covered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="relative h-24 w-24 mb-4">
                  <svg className="h-full w-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                      className="dark:stroke-gray-700"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3"
                      strokeDasharray={`${progressPercentage}, 100`}
                      className="dark:stroke-primary-500"
                    />
                    <text
                      x="18"
                      y="20.5"
                      textAnchor="middle"
                      fontSize="9"
                      fill="#111827"
                      className="dark:fill-white font-medium"
                    >
                      {progressPercentage}%
                    </text>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {materialsViewedCount} / {totalMaterials}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Study materials viewed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quiz Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle>Quiz Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="flex items-end space-x-2 h-24">
                    {quizScores.length > 0 ? (
                      quizScores.map((score, index) => (
                        <div
                          key={index}
                          className="w-8 bg-secondary-500 dark:bg-secondary-600 rounded-t-md"
                          style={{ height: `${score}%` }}
                        ></div>
                      ))
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-gray-400 dark:text-gray-600">
                        <Bar className="h-8 w-8" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {averageScore}%
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Average quiz score
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Study Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle>Study Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {materialsViewedCount}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Materials
                  </p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {userProfile.progress.quizzesTaken.length}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Quizzes
                  </p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {userProfile.progress.flashcardsStudied.length}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Flashcards
                  </p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-2xl font-semibold text-primary-600 dark:text-primary-400">
                    B+
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Grade
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Recently Viewed */}
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Recently Viewed Materials</CardTitle>
              </CardHeader>
              <CardContent>
                {recentlyViewedMaterials.length > 0 ? (
                  <div className="space-y-4">
                    {recentlyViewedMaterials.map(material => material && (
                      <div 
                        key={material.id}
                        className="flex items-start p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
                      >
                        <div className="flex-grow">
                          <h4 className="text-base font-medium text-gray-800 dark:text-white mb-1">
                            {material.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <span className="mr-2">{material.branch}</span>
                            <span>Year {material.year}, Semester {material.semester}</span>
                          </div>
                        </div>
                        <Link to={`/summary/${material.id}`}>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-500 dark:text-gray-400">
                    <p>No materials viewed yet.</p>
                    <Link to="/study-materials" className="text-primary-600 dark:text-primary-400 hover:underline mt-2 inline-block">
                      Browse study materials
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/study-materials">
                    <Button fullWidth variant="outline" className="justify-start">
                      Browse Study Materials
                    </Button>
                  </Link>
                  <Link to="/ai-assistant">
                    <Button fullWidth variant="outline" className="justify-start">
                      Ask AI Assistant
                    </Button>
                  </Link>
                  <Link to="/previous-papers">
                    <Button fullWidth variant="outline" className="justify-start">
                      Download Previous Papers
                    </Button>
                  </Link>
                  <Link to="/profile">
                    <Button fullWidth variant="outline" className="justify-start">
                      Update Profile
                    </Button>
                  </Link>
                  <a href="#" className="block">
                    <Button fullWidth className="justify-start">
                      Download Progress Report
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
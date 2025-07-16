import React, { useState } from 'react';
import { User, Mail, BookOpen, Calendar, MapPin, Edit, Save, X } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { userProfile } from '../data/mockData';
import { Branch } from '../types';

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userProfile.name,
    email: userProfile.email,
    branch: userProfile.branch,
    year: userProfile.year,
    semester: userProfile.semester
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'year' || name === 'semester' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update the profile in a database
    setIsEditing(false);
  };

  const branches: { value: Branch; label: string }[] = [
    { value: 'CSE', label: 'Computer Science Engineering' },
    { value: 'IT', label: 'Information Technology' },
    { value: 'ECE', label: 'Electronics & Communication Engineering' },
    { value: 'EE', label: 'Electrical Engineering' },
    { value: 'ME', label: 'Mechanical Engineering' },
    { value: 'CE', label: 'Civil Engineering' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-white mb-2">
            Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your personal information and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Profile Summary */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h2 className="text-xl font-heading font-semibold text-gray-800 dark:text-white mb-1">
                    {userProfile.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {userProfile.branch} - Year {userProfile.year}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                    leftIcon={isEditing ? <X size={16} /> : <Edit size={16} />}
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Materials Viewed:</span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {userProfile.progress.materialsViewed.length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Quizzes Taken:</span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {userProfile.progress.quizzesTaken.length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Flashcards Studied:</span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {userProfile.progress.flashcardsStudied.length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Member Since:</span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{isEditing ? 'Edit Profile' : 'Profile Details'}</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Branch
                        </label>
                        <select
                          name="branch"
                          value={formData.branch}
                          onChange={handleChange}
                          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          {branches.map(branch => (
                            <option key={branch.value} value={branch.value}>
                              {branch.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Year
                        </label>
                        <select
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value={1}>Year 1</option>
                          <option value={2}>Year 2</option>
                          <option value={3}>Year 3</option>
                          <option value={4}>Year 4</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Semester
                        </label>
                        <select
                          name="semester"
                          value={formData.semester}
                          onChange={handleChange}
                          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value={1}>Semester 1</option>
                          <option value={2}>Semester 2</option>
                          <option value={3}>Semester 3</option>
                          <option value={4}>Semester 4</option>
                          <option value={5}>Semester 5</option>
                          <option value={6}>Semester 6</option>
                          <option value={7}>Semester 7</option>
                          <option value={8}>Semester 8</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button type="submit" leftIcon={<Save size={16} />}>
                        Save Changes
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                      <div className="flex items-start">
                        <User className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Full Name
                          </h3>
                          <p className="text-base text-gray-800 dark:text-white">
                            {userProfile.name}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Email
                          </h3>
                          <p className="text-base text-gray-800 dark:text-white">
                            {userProfile.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <BookOpen className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Branch
                          </h3>
                          <p className="text-base text-gray-800 dark:text-white">
                            {branches.find(b => b.value === userProfile.branch)?.label}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Year & Semester
                          </h3>
                          <p className="text-base text-gray-800 dark:text-white">
                            Year {userProfile.year}, Semester {userProfile.semester}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5" />
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Institution
                          </h3>
                          <p className="text-base text-gray-800 dark:text-white">
                            RGPV, Bhopal
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30">
                <div className="w-full text-right">
                  <Button variant="outline" onClick={() => window.location.href = '/dashboard'}>
                    View Progress Dashboard
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
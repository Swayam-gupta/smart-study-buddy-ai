import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 mt-auto transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              <span className="text-lg font-heading font-bold text-gray-800 dark:text-white">
                Smart Study Buddy
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              A comprehensive educational platform for B.Tech students to enhance their learning journey.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-md font-heading font-semibold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/study-materials', label: 'Study Materials' },
                { to: '/previous-papers', label: 'Previous Papers' },
                { to: '/syllabus', label: 'Syllabus' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-md font-heading font-semibold text-gray-800 dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/ai-assistant', label: 'AI Assistant' },
                { to: '/dashboard', label: 'Dashboard' },
                { to: '/profile', label: 'Profile' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-md font-heading font-semibold text-gray-800 dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  contact@smartstudybuddy.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  +91 8989864478
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Oriental Institute of Science and Technology, Bhopal, Madhya Pradesh, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-300 text-xs">
            &copy; {new Date().getFullYear()} Smart Study Buddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
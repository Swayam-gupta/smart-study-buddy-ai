import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-6xl md:text-8xl font-bold text-gray-200 dark:text-gray-800">404</h1>
      <h2 className="mt-4 text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-white">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="mt-8">
        <Button leftIcon={<Home size={18} />}>
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
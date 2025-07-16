import React from 'react';
import { ChevronRight, BookOpen, FileText, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Welcome to Smart Study Buddy
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Your ultimate companion for B.Tech studies at RGPV. Access study materials, previous papers, and AI assistance to excel in your academic journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/study-materials">
                <Button size="lg" rightIcon={<ChevronRight size={18} />}>
                  Get Started
                </Button>
              </Link>
              <Link to="/ai-assistant">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Try AI Assistant
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Features to Enhance Your Learning
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Smart Study Buddy offers a comprehensive set of tools designed to help B.Tech students excel in their studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-primary-600" />}
              title="Study Materials"
              description="Access comprehensive study materials organized by branch, year, and semester. Create summaries, flashcards, and quizzes."
              link="/study-materials"
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8 text-primary-600" />}
              title="Previous Papers"
              description="Browse through a vast collection of previous year exam papers to better prepare for your exams."
              link="/previous-papers"
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-primary-600" />}
              title="AI Assistant"
              description="Get instant answers to your academic questions with our intelligent AI assistant."
              link="/ai-assistant"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Ready to Boost Your Academic Performance?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of students who have transformed their learning experience with Smart Study Buddy.
            </p>
            <Link to="/dashboard">
              <Button size="lg">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card interactive className="h-full">
        <CardContent>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-full">
              {icon}
            </div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {description}
            </p>
            <Link to={link} className="mt-auto">
              <Button variant="outline" rightIcon={<ChevronRight size={16} />}>
                Explore
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default HomePage;
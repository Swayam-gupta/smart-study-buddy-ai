import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  interactive = false,
  onClick,
  animate = false
}) => {
  const baseClasses = "bg-white dark:bg-gray-800 rounded-lg shadow transition-all duration-200";
  const interactiveClasses = interactive 
    ? "hover:shadow-card-hover cursor-pointer transform hover:-translate-y-1" 
    : "";

  const content = (
    <div 
      className={clsx(baseClasses, interactiveClasses, className)}
      onClick={interactive ? onClick : undefined}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={clsx("px-6 py-4 border-b border-gray-200 dark:border-gray-700", className)}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className = '', 
  children 
}) => {
  return (
    <h3 className={clsx("text-lg font-heading font-semibold text-gray-800 dark:text-white", className)}>
      {children}
    </h3>
  );
};

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={clsx("px-6 py-4", className)}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={clsx("px-6 py-4 border-t border-gray-200 dark:border-gray-700", className)}>
      {children}
    </div>
  );
};

export default Card;
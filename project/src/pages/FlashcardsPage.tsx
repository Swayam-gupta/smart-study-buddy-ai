import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { flashcards, studyMaterials } from '../data/mockData';

const FlashcardsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState(0);
  
  const materialFlashcards = id ? flashcards.filter(flashcard => flashcard.materialId === id) : [];
  const material = id ? studyMaterials.find(material => material.id === id) : null;

  const handleNext = () => {
    if (currentIndex < materialFlashcards.length - 1) {
      setDirection(1);
      setFlipped(false);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 200);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setFlipped(false);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
      }, 200);
    }
  };

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === ' ') {
        toggleFlip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, materialFlashcards.length, flipped]);

  if (!material || materialFlashcards.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-heading font-bold text-gray-800 dark:text-white mb-4">
            No Flashcards Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            There are no flashcards available for this study material.
          </p>
          <Button variant="outline" leftIcon={<ChevronLeft size={16} />} onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const currentFlashcard = materialFlashcards[currentIndex];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" leftIcon={<ChevronLeft size={16} />} onClick={() => navigate(-1)}>
            Back to {material.title}
          </Button>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-white mt-4">
            Flashcards: {material.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Click on the card to flip it or use the arrow keys to navigate. Space bar to flip.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Flashcard */}
          <div 
            className="w-full max-w-2xl h-64 md:h-80 mb-8 perspective"
            onClick={toggleFlip}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ 
                  opacity: 0,
                  x: direction * 100
                }}
                animate={{ 
                  opacity: 1,
                  x: 0
                }}
                exit={{ 
                  opacity: 0,
                  x: direction * -100
                }}
                transition={{
                  opacity: { duration: 0.2 },
                  x: { type: "spring", stiffness: 300, damping: 30 }
                }}
                className="w-full h-full"
              >
                <div 
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    flipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front of card */}
                  <Card 
                    className={`absolute w-full h-full flex items-center justify-center p-6 backface-hidden ${
                      flipped ? 'rotate-y-180' : ''
                    }`}
                  >
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-white mb-2">
                        Question
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        {currentFlashcard.front}
                      </p>
                    </div>
                  </Card>

                  {/* Back of card */}
                  <Card 
                    className={`absolute w-full h-full flex items-center justify-center p-6 bg-primary-50 dark:bg-primary-900/20 backface-hidden rotate-y-180 ${
                      flipped ? '' : 'rotate-y-180'
                    }`}
                  >
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-white mb-2">
                        Answer
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        {currentFlashcard.back}
                      </p>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between w-full max-w-lg">
            <Button 
              variant="outline" 
              leftIcon={<ArrowLeft size={16} />}
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </Button>

            <div className="text-center">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {currentIndex + 1} of {materialFlashcards.length}
              </span>
            </div>

            <Button 
              variant="outline" 
              rightIcon={<ArrowRight size={16} />}
              onClick={handleNext}
              disabled={currentIndex === materialFlashcards.length - 1}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardsPage;
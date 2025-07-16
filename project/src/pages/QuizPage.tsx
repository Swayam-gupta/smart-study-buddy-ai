import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle, XCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardContent, CardFooter } from '../components/ui/Card';
import { quizzes, studyMaterials } from '../data/mockData';
import { QuizQuestion } from '../types';

const QuizPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const quiz = id ? quizzes.find(quiz => quiz.materialId === id) : null;
  const material = id ? studyMaterials.find(material => material.id === id) : null;

  useEffect(() => {
    if (quiz) {
      setAnswers(new Array(quiz.questions.length).fill(-1));
    }
  }, [quiz]);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (!quiz) return;
    
    let correctCount = 0;
    answers.forEach((answer, index) => {
      if (answer === quiz.questions[index].correctAnswer) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setSubmitted(true);
  };

  const calculatePercentage = () => {
    if (!quiz) return 0;
    return Math.round((score / quiz.questions.length) * 100);
  };

  if (!quiz || !material) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-heading font-bold text-gray-800 dark:text-white mb-4">
            Quiz Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            There is no quiz available for this study material.
          </p>
          <Button variant="outline" leftIcon={<ChevronLeft size={16} />} onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" leftIcon={<ChevronLeft size={16} />} onClick={() => navigate(-1)}>
            Back to {material.title}
          </Button>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-white mt-4">
            Quiz: {quiz.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Test your knowledge by answering the following questions.
          </p>
        </div>

        {submitted && (
          <Card className="mb-8">
            <CardContent>
              <div className="text-center py-4">
                <h2 className="text-xl font-heading font-bold text-gray-800 dark:text-white mb-2">
                  Quiz Results
                </h2>
                <div className="text-6xl font-bold mb-2">
                  {calculatePercentage()}%
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  You scored {score} out of {quiz.questions.length} questions correctly.
                </p>
                <div className="mt-6">
                  <Button onClick={() => setSubmitted(false)}>
                    Review Answers
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-6">
          {quiz.questions.map((question, questionIndex) => (
            <QuestionCard
              key={question.id}
              question={question}
              questionNumber={questionIndex + 1}
              selectedOption={answers[questionIndex]}
              onSelectOption={(optionIndex) => handleAnswer(questionIndex, optionIndex)}
              submitted={submitted}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          {!submitted ? (
            <Button 
              size="lg"
              onClick={handleSubmit}
              disabled={answers.some(answer => answer === -1)}
            >
              Submit Answers
            </Button>
          ) : (
            <Button 
              variant="outline"
              size="lg"
              onClick={() => navigate(-1)}
            >
              Return to Study Material
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  selectedOption: number;
  onSelectOption: (optionIndex: number) => void;
  submitted: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  questionNumber,
  selectedOption, 
  onSelectOption,
  submitted 
}) => {
  return (
    <Card>
      <CardContent>
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
          Question {questionNumber}: {question.question}
        </h3>
        <div className="space-y-2">
          {question.options.map((option, optionIndex) => (
            <div 
              key={optionIndex}
              onClick={() => onSelectOption(optionIndex)}
              className={`p-3 rounded-md border cursor-pointer transition-colors ${
                selectedOption === optionIndex 
                  ? submitted
                    ? optionIndex === question.correctAnswer
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                    : 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800'
                  : submitted && optionIndex === question.correctAnswer
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <div className="flex-grow">
                  {option}
                </div>
                {submitted && (
                  <div className="ml-2">
                    {optionIndex === question.correctAnswer ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : selectedOption === optionIndex ? (
                      <XCircle className="h-5 w-5 text-red-500" />
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      {submitted && (
        <CardFooter className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="w-full">
            <p className="text-sm font-medium text-gray-800 dark:text-white mb-1">
              Correct Answer: {question.options[question.correctAnswer]}
            </p>
            {selectedOption === question.correctAnswer ? (
              <p className="text-sm text-green-600 dark:text-green-400 flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" /> Correct
              </p>
            ) : (
              <p className="text-sm text-red-600 dark:text-red-400 flex items-center">
                <XCircle className="h-4 w-4 mr-1" /> Incorrect
                {selectedOption !== -1 && (
                  <span className="ml-1">
                    - You selected: {question.options[selectedOption]}
                  </span>
                )}
              </p>
            )}
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default QuizPage;
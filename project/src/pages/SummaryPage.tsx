import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Bookmark, Clock, Book, FileText, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';
import { studyMaterials } from '../data/mockData';

const SummaryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const material = id !== 'new' && id 
    ? studyMaterials.find(material => material.id === id) 
    : null;
  
  const isNew = id === 'new';

  const summaryContent = isNew 
    ? `# Introduction to Data Structures and Algorithms

## Key Concepts

Data structures are specialized formats for organizing and storing data, while algorithms are step-by-step procedures for solving problems. Together, they form the foundation of computer science and efficient programming.

## Common Data Structures

1. **Arrays**: Fixed-size sequential collection of elements, allowing O(1) access time.
2. **Linked Lists**: Sequence of elements connected via references, allowing dynamic size but O(n) access time.
3. **Stacks**: LIFO (Last In, First Out) abstract data type with two main operations: push and pop.
4. **Queues**: FIFO (First In, First Out) abstract data type with main operations: enqueue and dequeue.
5. **Trees**: Hierarchical structures with a root node and child nodes.
6. **Graphs**: Collection of nodes (vertices) connected by edges.
7. **Hash Tables**: Data structure that implements an associative array using a hash function.

## Algorithm Analysis

Algorithm efficiency is measured in terms of:
- **Time Complexity**: How runtime grows with input size
- **Space Complexity**: How memory usage grows with input size

Big O notation is used to classify algorithms according to how their runtime or space requirements grow as the input size grows.

## Common Algorithms

1. **Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort
2. **Search Algorithms**: Linear Search, Binary Search
3. **Graph Algorithms**: Breadth-First Search, Depth-First Search, Dijkstra's Algorithm

## Conclusion

Understanding data structures and algorithms is crucial for writing efficient code and solving complex computational problems.`
    : material?.content || 'No content available for this material.';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" leftIcon={<ChevronLeft size={16} />} onClick={() => navigate(-1)}>
            Back to Study Materials
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-white mb-2">
            {isNew ? 'Generated Summary' : material?.title}
          </h1>
          {!isNew && material && (
            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-x-4 gap-y-2">
              <div className="flex items-center">
                <Book className="h-4 w-4 mr-1" />
                <span>{material.branch}</span>
              </div>
              <div className="flex items-center">
                <Bookmark className="h-4 w-4 mr-1" />
                <span>Year {material.year}, Semester {material.semester}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Added on {new Date(material.dateAdded).toLocaleDateString()}</span>
              </div>
            </div>
          )}
        </div>

        {/* Summary Content */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="prose dark:prose-invert max-w-none">
              <div className="whitespace-pre-line">{summaryContent}</div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link to={`/flashcards/${isNew ? '1' : material?.id}`}>
            <Button leftIcon={<FileText size={18} />}>
              Study Flashcards
            </Button>
          </Link>
          <Link to={`/quiz/${isNew ? '1' : material?.id}`}>
            <Button variant="secondary" leftIcon={<Sparkles size={18} />}>
              Take Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
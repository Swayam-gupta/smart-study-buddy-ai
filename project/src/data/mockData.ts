import { StudyMaterial, PreviousPaper, Quiz, Flashcard, UserProfile, QuizQuestion } from '../types';

// Mock study materials
export const studyMaterials: StudyMaterial[] = [
  // AIML - Year 1 (Preserved from previous update)
  { id: '1a2b3c4d-5e6f-4a1b-8c2d-3e4f5a6b7c8d', title: 'Engineering Physics', branch: 'AIML', year: 1, semester: 1, content: 'Fundamentals of mechanics, optics, and electromagnetism for engineering applications.', dateAdded: new Date('2025-05-01') },
  { id: '2b3c4d5e-6f7a-4b2c-9d3e-4f5a6b7c8d9e', title: 'Engineering Chemistry', branch: 'AIML', year: 1, semester: 1, content: 'Chemical bonding, thermodynamics, and materials science for engineering.', dateAdded: new Date('2025-05-01') },
  { id: '3c4d5e6f-7a8b-4c3d-0e4f-5a6b7c8d9e0f', title: 'Mathematics 1', branch: 'AIML', year: 1, semester: 1, content: 'Calculus, differential equations, and linear algebra for engineering problems.', dateAdded: new Date('2025-05-01') },
  { id: '4d5e6f7a-8b9c-4d4e-1f5a-6b7c8d9e0f1a', title: 'Basic Mechanical Engineering', branch: 'AIML', year: 1, semester: 1, content: 'Introduction to thermodynamics, mechanics, and machine design.', dateAdded: new Date('2025-05-01') },
  { id: '5e6f7a8b-9c0d-4e5f-2a6b-7c8d9e0f1a2b', title: 'English for Communication', branch: 'AIML', year: 1, semester: 1, content: 'Technical writing, presentation skills, and professional communication.', dateAdded: new Date('2025-05-01') },
  { id: '6f7a8b9c-0d1e-4f6a-3b7c-8d9e0f1a2b3c', title: 'Engineering Drawing', branch: 'AIML', year: 1, semester: 2, content: 'Technical drawing, orthographic projections, and CAD basics.', dateAdded: new Date('2025-05-01') },
  { id: '7a8b9c0d-1e2f-4a7b-4c8d-9e0f1a2b3c4d', title: 'Mathematics 2', branch: 'AIML', year: 1, semester: 2, content: 'Advanced calculus, vector algebra, and numerical methods.', dateAdded: new Date('2025-05-01') },
  { id: '8b9c0d1e-2f3a-4b8c-5d9e-0f1a2b3c4d5e', title: 'Basic Civil and Engineering Mechanics', branch: 'AIML', year: 1, semester: 2, content: 'Statics, dynamics, and basics of civil engineering structures.', dateAdded: new Date('2025-05-01') },
  { id: '9c0d1e2f-3a4b-4c9d-6e0f-1a2b3c4d5e6f', title: 'Basic Computer Engineering', branch: 'AIML', year: 1, semester: 2, content: 'Computer organization, programming basics, and hardware fundamentals.', dateAdded: new Date('2025-05-01') },

  // AIML - Year 2 (Preserved from previous update)
  { id: '1b2c3d4e-5f6a-4b1c-8d2e-3f4a5b6c7d8e', title: 'AL301 Technical Communication', branch: 'AIML', year: 2, semester: 3, content: 'Advanced technical writing, report preparation, and professional communication skills.', dateAdded: new Date('2025-05-10') },
  { id: '2c3d4e5f-6a7b-4c2d-9e3f-4a5b6c7d8e9f', title: 'AL302 Introduction to Probability and Statistics', branch: 'AIML', year: 2, semester: 3, content: 'Probability theory, statistical methods, and data analysis for AI applications.', dateAdded: new Date('2025-05-10') },
  { id: '3d4e5f6a-7b8c-4d3e-0f4a-5b6c7d8e9f0a', title: 'AL303 Data Structures', branch: 'AIML', year: 2, semester: 3, content: 'Arrays, linked lists, stacks, queues, trees, and graphs for efficient data handling.', dateAdded: new Date('2025-05-10') },
  { id: '4e5f6a7b-8c9d-4e4f-1a5b-6c7d8e9f0a1b', title: 'AL304 Artificial Intelligence', branch: 'AIML', year: 2, semester: 3, content: 'Introduction to AI concepts, search algorithms, and knowledge representation.', dateAdded: new Date('2025-05-10') },
  { id: '5f6a7b8c-9d0e-4f5a-2b6c-7d8e9f0a1b2c', title: 'AL305 Object Oriented Programming & Methodology', branch: 'AIML', year: 2, semester: 3, content: 'OOP principles, classes, objects, inheritance, and polymorphism using Java/C++.', dateAdded: new Date('2025-05-10') },
  { id: '6a7b8c9d-0e1f-4a6b-3c7d-8e9f0a1b2c3d', title: 'AL401 Introduction to Discrete Structure & Linear Algebra', branch: 'AIML', year: 2, semester: 4, content: 'Set theory, graph theory, and linear algebra for AI and machine learning.', dateAdded: new Date('2025-05-10') },
  { id: '7b8c9d0e-1f2a-4b7c-4d8e-9f0a1b2c3d4e', title: 'AL402 Analysis Design of Algorithm', branch: 'AIML', year: 2, semester: 4, content: 'Algorithm design techniques, complexity analysis, and optimization.', dateAdded: new Date('2025-05-10') },
  { id: '8c9d0e1f-2a3b-4c8d-5e9f-0a1b2c3d4e5f', title: 'AL403 Software Engineering', branch: 'AIML', year: 2, semester: 4, content: 'Software development lifecycle, requirements analysis, and project management.', dateAdded: new Date('2025-05-10') },
  { id: '9d0e1f2a-3b4c-4d9e-6f0a-1b2c3d4e5f6a', title: 'AL404 Computer Org. & Architecture', branch: 'AIML', year: 2, semester: 4, content: 'CPU design, memory hierarchy, and instruction set architecture.', dateAdded: new Date('2025-05-10') },
  { id: '0e1f2a3b-4c5d-4e0f-7a1b-2c3d4e5f6a7b', title: 'AL405 Machine Learning', branch: 'AIML', year: 2, semester: 4, content: 'Supervised and unsupervised learning, neural networks, and model evaluation.', dateAdded: new Date('2025-05-10') },

  // AIML - Year 3 (New subjects)
  { id: '1c2d3e4f-5a6b-4c1d-8e2f-3a4b5c6d7e8f', title: 'AL501 Operating Systems', branch: 'AIML', year: 3, semester: 5, content: 'Process management, memory management, file systems, and concurrency.', dateAdded: new Date('2025-05-18') },
  { id: '2d3e4f5a-6b7c-4d2e-9f3a-4b5c6d7e8f9a', title: 'AL502 Database Management Systems', branch: 'AIML', year: 3, semester: 5, content: 'Relational databases, SQL, normalization, and transaction management.', dateAdded: new Date('2025-05-18') },
  { id: '3e4f5a6b-7c8d-4e3f-0a4b-5c6d7e8f9a0b', title: 'AL503 Departmental Elective', branch: 'AIML', year: 3, semester: 5, content: 'Specialized topics in AI and machine learning chosen by the department.', dateAdded: new Date('2025-05-18') },
  { id: '4f5a6b7c-8d9e-4f4a-1b5c-6d7e8f9a0b1c', title: 'AL504 Open Elective', branch: 'AIML', year: 3, semester: 5, content: 'Interdisciplinary elective course chosen by the student.', dateAdded: new Date('2025-05-18') },
  { id: '5a6b7c8d-9e0f-4a5b-2c6d-7e8f9a0b1c2d', title: 'AL601 Theory of Computation', branch: 'AIML', year: 3, semester: 6, content: 'Automata theory, formal languages, and computability.', dateAdded: new Date('2025-05-18') },
  { id: '6b7c8d9e-0f1a-4b6c-3d7e-8f9a0b1c2d3e', title: 'AL602 Computer Networks', branch: 'AIML', year: 3, semester: 6, content: 'Network protocols, OSI model, and internet architecture.', dateAdded: new Date('2025-05-18') },
  { id: '7c8d9e0f-1a2b-4c7d-4e8f-9a0b1c2d3e4f', title: 'AL603 Departmental Elective', branch: 'AIML', year: 3, semester: 6, content: 'Advanced topics in AI and machine learning chosen by the department.', dateAdded: new Date('2025-05-18') },
  { id: '8d9e0f1a-2b3c-4d8e-5f9a-0b1c2d3e4f5a', title: 'AL604 Open Elective', branch: 'AIML', year: 3, semester: 6, content: 'Interdisciplinary elective course chosen by the student.', dateAdded: new Date('2025-05-18') },

  // AIML - Year 4 (New subjects)
  { id: '9e0f1a2b-3c4d-4e9f-6a0b-1c2d3e4f5a6b', title: 'AL701 Computer Vision', branch: 'AIML', year: 4, semester: 7, content: 'Image processing, feature detection, and deep learning for vision tasks.', dateAdded: new Date('2025-05-18') },
  { id: '0f1a2b3c-4d5e-4f0a-7b1c-2d3e4f5a6b7c', title: 'AL702 Departmental Elective 7', branch: 'AIML', year: 4, semester: 7, content: 'Specialized elective in advanced AI or machine learning topics.', dateAdded: new Date('2025-05-18') },
  { id: '1a2b3c4d-5e6f-4a1b-8c2d-3e4f5a6b7c8c', title: 'AL703 Open Elective', branch: 'AIML', year: 4, semester: 7, content: 'Interdisciplinary elective course chosen by the student.', dateAdded: new Date('2025-05-18') },
  { id: '2b3c4d5e-6f7a-4b2c-9d3e-4f5a6b7c8d9d', title: 'AL801 Business Intelligence', branch: 'AIML', year: 4, semester: 8, content: 'Data analytics, data warehousing, and decision support systems.', dateAdded: new Date('2025-05-18') },
  { id: '3c4d5e6f-7a8b-4c3d-0e4f-5a6b7c8d9e0e', title: 'AL802 Departmental Elective', branch: 'AIML', year: 4, semester: 8, content: 'Advanced elective in AI or machine learning applications.', dateAdded: new Date('2025-05-18') },
  { id: '4d5e6f7a-8b9c-4d4e-1f5a-6b7c8d9e0f1f', title: 'AL803 Open Elective', branch: 'AIML', year: 4, semester: 8, content: 'Interdisciplinary elective course chosen by the student.', dateAdded: new Date('2025-05-18') },

  // CSE - Year 1 (Preserved from previous update)
  { id: 'a1b2c3d4-e5f6-4a1b-8c2d-3e4f5a6b7c8d', title: 'Engineering Physics', branch: 'CSE', year: 1, semester: 1, content: 'Fundamentals of mechanics, optics, and electromagnetism for engineering applications.', dateAdded: new Date('2025-05-01') },
  { id: 'b2c3d4e5-f6a7-4b2c-9d3e-4f5a6b7c8d9e', title: 'Engineering Chemistry', branch: 'CSE', year: 1, semester: 1, content: 'Chemical bonding, thermodynamics, and materials science for engineering.', dateAdded: new Date('2025-05-01') },
  { id: 'c3d4e5f6-a7b8-4c3d-0e4f-5a6b7c8d9e0f', title: 'Mathematics 1', branch: 'CSE', year: 1, semester: 1, content: 'Calculus, differential equations, and linear algebra for engineering problems.', dateAdded: new Date('2025-05-01') },
  { id: 'd4e5f6a7-b8c9-4d4e-1f5a-6b7c8d9e0f1a', title: 'Basic Mechanical Engineering', branch: 'CSE', year: 1, semester: 1, content: 'Introduction to thermodynamics, mechanics, and machine design.', dateAdded: new Date('2025-05-01') },
  { id: 'e5f6a7b8-c9d0-4e5f-2a6b-7c8d9e0f1a2b', title: 'English for Communication', branch: 'CSE', year: 1, semester: 1, content: 'Technical writing, presentation skills, and professional communication.', dateAdded: new Date('2025-05-01') },
  { id: 'f6a7b8c9-d0e1-4f6a-3b7c-8d9e0f1a2b3c', title: 'Engineering Drawing', branch: 'CSE', year: 1, semester: 2, content: 'Technical drawing, orthographic projections, and CAD basics.', dateAdded: new Date('2025-05-01') },
  { id: 'a7b8c9d0-e1f2-4a7b-4c8d-9e0f1a2b3c4d', title: 'Mathematics 2', branch: 'CSE', year: 1, semester: 2, content: 'Advanced calculus, vector algebra, and numerical methods.', dateAdded: new Date('2025-05-01') },
  { id: 'b8c9d0e1-f2a3-4b8c-5d9e-0f1a2b3c4d5e', title: 'Basic Civil and Engineering Mechanics', branch: 'CSE', year: 1, semester: 2, content: 'Statics, dynamics, and basics of civil engineering structures.', dateAdded: new Date('2025-05-01') },
  { id: 'c9d0e1f2-a3b4-4c9d-6e0f-1a2b3c4d5e6f', title: 'Basic Computer Engineering', branch: 'CSE', year: 1, semester: 2, content: 'Computer organization, programming basics, and hardware fundamentals.', dateAdded: new Date('2025-05-01') },

  // CSE - Year 2 (Preserved from previous update, updated Operating Systems)
  { id: '1f2a3b4c-5d6e-4f0a-8b1c-3d4e5f6a7b8c', title: 'ES301 Energy & Environmental Engineering', branch: 'CSE', year: 2, semester: 3, content: 'Renewable energy systems, environmental impact, and sustainability.', dateAdded: new Date('2025-05-10') },
  { id: '2a3b4c5d-6e7f-4a1b-9c2d-4e5f6a7b8c9d', title: 'CS302 Discrete Structure', branch: 'CSE', year: 2, semester: 3, content: 'Set theory, logic, combinatorics, and graph theory for computer science.', dateAdded: new Date('2025-05-10') },
  { id: '1', title: 'CS303 Data Structure', branch: 'CSE', year: 2, semester: 3, content: 'Arrays, linked lists, stacks, queues, trees, and graphs for efficient data handling.', dateAdded: new Date('2025-05-10') },
  { id: '3b4c5d6e-7f8a-4b2c-0d3e-5f6a7b8c9d0e', title: 'CS304 Digital Circuits and Systems', branch: 'CSE', year: 2, semester: 3, content: 'Logic gates, combinational and sequential circuits, and digital system design.', dateAdded: new Date('2025-05-10') },
  { id: '4c5d6e7f-8a9b-4c3d-1e4f-6a7b8c9d0e1f', title: 'CS305 Object Oriented Programming & Methodology', branch: 'CSE', year: 2, semester: 3, content: 'OOP principles, classes, objects, inheritance, and polymorphism using Java/C++.', dateAdded: new Date('2025-05-10') },
  { id: '5d6e7f8a-9b0c-4d4e-2f5a-7b8c9d0e1f2a', title: 'BT401 Mathematics-III', branch: 'CSE', year: 2, semester: 4, content: 'Probability, statistics, and numerical methods for computer science.', dateAdded: new Date('2025-05-10') },
  { id: '6e7f8a9b-0c1d-4e5f-3a6b-8c9d0e1f2a3b', title: 'CS402 Analysis Design of Algorithm', branch: 'CSE', year: 2, semester: 4, content: 'Algorithm design techniques, complexity analysis, and optimization.', dateAdded: new Date('2025-05-10') },
  { id: '7f8a9b0c-1d2e-4f6a-4b7c-9d0e1f2a3b4c', title: 'CS403 Software Engineering', branch: 'CSE', year: 2, semester: 4, content: 'Software development lifecycle, requirements analysis, and project management.', dateAdded: new Date('2025-05-10') },
  { id: '8a9b0c1d-2e3f-4a7b-5c8d-0e1f2a3b4c5d', title: 'CS404 Computer Org. & Architecture', branch: 'CSE', year: 2, semester: 4, content: 'CPU design, memory hierarchy, and instruction set architecture.', dateAdded: new Date('2025-05-10') },
  { id: '2', title: 'CS405 Operating Systems', branch: 'CSE', year: 2, semester: 4, content: 'Process management, memory management, and file systems.', dateAdded: new Date('2025-05-10') },

  // CSE - Year 3 (New subjects)
  { id: '5e6f7a8b-9c0d-4e5f-2a6b-7c8d9e0f1a2c', title: 'CS501 Theory of Computation', branch: 'CSE', year: 3, semester: 5, content: 'Automata theory, formal languages, and computability.', dateAdded: new Date('2025-05-18') },
  { id: '6f7a8b9c-0d1e-4f6a-3b7c-8d9e0f1a2b3d', title: 'CS502 Database Management Systems', branch: 'CSE', year: 3, semester: 5, content: 'Relational databases, SQL, normalization, and transaction management.', dateAdded: new Date('2025-05-18') },
  { id: '7a8b9c0d-1e2f-4a7b-4c8d-9e0f1a2b3c4e', title: 'CS503 Departmental Elective', branch: 'CSE', year: 3, semester: 5, content: 'Specialized topics in computer science chosen by the department.', dateAdded: new Date('2025-05-18') },
  { id: '8b9c0d1e-2f3a-4b8c-5d9e-0f1a2b3c4d5f', title: 'CS504 Open Elective', branch: 'CSE', year: 3, semester: 5, content: 'Interdisciplinary elective course chosen by the student.', dateAdded: new Date('2025-05-18') },
  { id: '9c0d1e2f-3a4b-4c9d-6e0f-1a2b3c4d5e6a', title: 'CS601 Machine Learning', branch: 'CSE', year: 3, semester: 6, content: 'Supervised and unsupervised learning, neural networks, and model evaluation.', dateAdded: new Date('2025-05-18') },
  { id: '0d1e2f3a-4b5c-4d0e-7f1a-2b3c4d5e6f7b', title: 'CS602 Computer Networks', branch: 'CSE', year: 3, semester: 6, content: 'Network protocols, OSI model, and internet architecture.', dateAdded: new Date('2025-05-18') },
  { id: '1e2f3a4b-5c6d-4e1f-8a2b-3c4d5e6f7a8c', title: 'CS603 Departmental Elective 7', branch: 'CSE', year: 3, semester: 6, content: 'Advanced topics in computer science chosen by the department.', dateAdded: new Date('2025-05-18') },
  { id: '2f3a4b5c-6d7e-4f2a-9b3c-4d5e6f7a8b9d', title: 'CS604 Open Elective', branch: 'CSE', year: 3, semester: 6, content: 'Interdisciplinary elective course chosen by the student.', dateAdded: new Date('2025-05-18') },

  // CSE - Year 4 (New subjects)
  { id: '3a4b5c6d-7e8f-4a3b-0c4d-5e6f7a8b9c0e', title: 'CS701 Software Architectures', branch: 'CSE', year: 4, semester: 7, content: 'Design patterns, architectural styles, and software system design.', dateAdded: new Date('2025-05-18') },
  { id: '4b5c6d7e-8f9a-4b4c-1d5e-6f7a8b9c0d1f', title: 'CS702 Departmental Elective', branch: 'CSE', year: 4, semester: 7, content: 'Specialized elective in advanced computer science topics.', dateAdded: new Date('2025-05-18') },
  { id: '5c6d7e8f-9a0b-4c5d-2e6f-7a8b9c0d1e2a', title: 'CS703 Open Elective', branch: 'CSE', year: 4, semester: 7, content: 'Interdisciplinary elective course chosen by the student.', dateAdded: new Date('2025-05-18') },
  { id: '6d7e8f9a-0b1c-4d6e-3f7a-8b9c0d1e2f3b', title: 'CS801 Internet of Things', branch: 'CSE', year: 4, semester: 8, content: 'IoT architectures, sensor networks, and smart device integration.', dateAdded: new Date('2025-05-18') },
  { id: '7e8f9a0b-1c2d-4e7f-4a8b-9c0d1e2f3a4c', title: 'CS802 Departmental Elective', branch: 'CSE', year: 4, semester: 8, content: 'Advanced elective in computer science applications.', dateAdded: new Date('2025-05-18') },
  { id: '8f9a0b1c-2d3e-4f8a-5b9c-0d1e2f3a4b5d', title: 'CS803 Open Elective', branch: 'CSE', year: 4, semester: 8, content: 'Interdisciplinary elective course chosen by the student.', dateAdded: new Date('2025-05-18') },

  // IT - Year 1 (Preserved from previous update)
  { id: 'd0e1f2a3-b4c5-4d0e-7f1a-2b3c4d5e6f7a', title: 'Engineering Physics', branch: 'IT', year: 1, semester: 1, content: 'Fundamentals of mechanics, optics, and electromagnetism for engineering applications.', dateAdded: new Date('2025-05-01') },
  { id: 'e1f2a3b4-c5d6-4e1f-8a2b-3c4d5e6f7a8b', title: 'Engineering Chemistry', branch: 'IT', year: 1, semester: 1, content: 'Chemical bonding, thermodynamics, and materials science for engineering.', dateAdded: new Date('2025-05-01') },
  { id: 'f2a3b4c5-d6e7-4f2a-9b3c-4d5e6f7a8b9c', title: 'Mathematics 1', branch: 'IT', year: 1, semester: 1, content: 'Calculus, differential equations, and linear algebra for engineering problems.', dateAdded: new Date('2025-05-01') },
  { id: 'a3b4c5d6-e7f8-4a3b-0c4d-5e6f7a8b9c0d', title: 'Basic Mechanical Engineering', branch: 'IT', year: 1, semester: 1, content: 'Introduction to thermodynamics, mechanics, and machine design.', dateAdded: new Date('2025-05-01') },
  { id: 'b4c5d6e7-f8a9-4b4c-1d5e-6f7a8b9c0d1e', title: 'English for Communication', branch: 'IT', year: 1, semester: 1, content: 'Technical writing, presentation skills, and professional communication.', dateAdded: new Date('2025-05-01') },
  { id: 'c5d6e7f8-a9b0-4c5d-2e6f-7a8b9c0d1e2f', title: 'Engineering Drawing', branch: 'IT', year: 1, semester: 2, content: 'Technical drawing, orthographic projections, and CAD basics.', dateAdded: new Date('2025-05-01') },
  { id: 'd6e7f8a9-b0c1-4d6e-3f7a-8b9c0d1e2f3a', title: 'Mathematics 2', branch: 'IT', year: 1, semester: 2, content: 'Advanced calculus, vector algebra, and numerical methods.', dateAdded: new Date('2025-05-01') },
  { id: 'e7f8a9b0-c1d2-4e7f-4a8b-9c0d1e2f3a4b', title: 'Basic Civil and Engineering Mechanics', branch: 'IT', year: 1, semester: 2, content: 'Statics, dynamics, and basics of civil engineering structures.', dateAdded: new Date('2025-05-01') },
  { id: 'f8a9b0c1-d2e3-4f8a-5b9c-0d1e2f3a4b5c', title: 'Basic Computer Engineering', branch: 'IT', year: 1, semester: 2, content: 'Computer organization, programming basics, and hardware fundamentals.', dateAdded: new Date('2025-05-01') },

  // IT - Year 2 (Preserved from previous update)
  { id: '0c1d2e3f-4a5b-4c9d-7e0f-2a3b4c5d6e7f', title: 'ES301 Energy & Environmental Engineering', branch: 'IT', year: 2, semester: 3, content: 'Renewable energy systems, environmental impact, and sustainability.', dateAdded: new Date('2025-05-10') },
  { id: '1d2e3f4a-5b6c-4d0e-8f1a-3b4c5d6e7f8a', title: 'IT301 Discrete Structure', branch: 'IT', year: 2, semester: 3, content: 'Set theory, logic, combinatorics, and graph theory for IT applications.', dateAdded: new Date('2025-05-10') },
  { id: '2e3f4a5b-6c7d-4e1f-9a2b-4c5d6e7f8a9b', title: 'IT302 Data Structure', branch: 'IT', year: 2, semester: 3, content: 'Arrays, linked lists, stacks, queues, trees, and graphs for efficient data handling.', dateAdded: new Date('2025-05-10') },
  { id: '3f4a5b6c-7d8e-4f2a-0b3c-5d6e7f8a9b0c', title: 'IT303 Object Oriented Programming & Methodology', branch: 'IT', year: 2, semester: 3, content: 'OOP principles, classes, objects, inheritance, and polymorphism using Java/C++.', dateAdded: new Date('2025-05-10') },
  { id: '4a5b6c7d-8e9f-4a3b-1c4d-6e7f8a9b0c1d', title: 'IT304 Digital Circuits and Systems', branch: 'IT', year: 2, semester: 3, content: 'Logic gates, combinational and sequential circuits, and digital system design.', dateAdded: new Date('2025-05-10') },
  { id: '5b6c7d8e-9f0a-4b4c-2d5e-7f8a9b0c1d2e', title: 'BT401 Mathematics-III', branch: 'IT', year: 2, semester: 4, content: 'Probability, statistics, and numerical methods for IT applications.', dateAdded: new Date('2025-05-10') },
  { id: '6c7d8e9f-0a1b-4c5d-3e6f-8a9b0c1d2e3f', title: 'IT402 Computer Architecture', branch: 'IT', year: 2, semester: 4, content: 'CPU design, memory hierarchy, and instruction set architecture.', dateAdded: new Date('2025-05-10') },
  { id: '7d8e9f0a-1b2c-4d6e-4f7a-9b0c1d2e3f4a', title: 'IT403 Analysis and Design of Algorithm', branch: 'IT', year: 2, semester: 4, content: 'Algorithm design techniques, complexity analysis, and optimization.', dateAdded: new Date('2025-05-10') },
  { id: '8e9f0a1b-2c3d-4e7f-5a8b-0c1d2e3f4a5b', title: 'IT404 Analog & Digital Comm.', branch: 'IT', year: 2, semester: 4, content: 'Analog and digital communication systems, modulation, and signal processing.', dateAdded: new Date('2025-05-10') },
  { id: '5', title: 'IT405 Data Base Management System', branch: 'IT', year: 2, semester: 4, content: 'Relational data model, SQL, normalization, transaction management...', dateAdded: new Date('2025-05-10') },

  // IT - Year 3 (New subjects)
  { id: '9a0b1c2d-3e4f-4a8b-6c0d-1e2f3a4b5c6e', title: 'IT501 Operating System', branch: 'IT', year: 3, semester: 5, content: 'Process management, memory management, file systems, and concurrency.', dateAdded: new Date('2025-05-18') },
  { id: '0b1c2d3e-4f5a-4b9c-7d1e-2f3a4b5c6d7f', title: 'IT502 Computer Network', branch: 'IT', year: 3, semester: 5, content: 'Network protocols, OSI model, and internet architecture.', dateAdded: new Date('2025-05-18') },
  { id: '1c2d3e4f-5a6b-4c0d-8e2f-3a4b5c6d7e8a', title: 'IT503 Departmental Elective-I', branch: 'IT', year: 3, semester: 5, content: 'Specialized topics in information technology chosen by the department.', dateAdded: new Date('2025-05-18') },
  { id: '2d3e4f5a-6b7c-4d1e-9f3a-4b5c6d7e8f9b', title: 'IT504 Open Elective-I', branch: 'IT', year: 3, semester: 5, content: 'Interdisciplinary elective course chosen by the student.', dateAdded: new Date('2025-05-18') },
  { id: '3e4f5a6b-7c8d-4e2f-0a4b-5c6d7e8f9a0c', title: 'IT601 Computer Graphics & Multimedia', branch: 'IT', year: 3, semester: 6, content: 'Graphics rendering, animation, and multimedia system design.', dateAdded: new Date('2025-05-18') },
  { id: '4f5a6b7c-8d9e-4f3a-1b5c-6d7e8f9a0b1d', title: 'IT602 Wireless and Mobile Computing', branch: 'IT', year: 3, semester: 6, content: 'Wireless networks, mobile device programming, and mobility management.', dateAdded: new Date('2025-05-18') },
  { id: '5a6b7c8d-9e0f-4a4b-2c6d-7e8f9a0b1c2e', title: 'IT603 Departmental Elective', branch: 'IT', year: 3, semester: 6, content: 'Advanced topics in information technology chosen by the department.', dateAdded: new Date('2025-05-18') },
  { id: '6b7c8d9e-0f1a-4b5c-3d7e-8f9a0b1c2d3f', title: 'IT604 Open Elective', branch: 'IT', year: 3, semester: 6, content: 'Interdisciplinary elective course chosen by the student.', dateAdded: new Date('2025-05-18') },

  // IT - Year 4 (New subjects)
  { id: '7c8d9e0f-1a2b-4c6d-4e8f-9a0b1c2d3e4a', title: 'IT701 Soft Computing', branch: 'IT', year: 4, semester: 7, content: 'Fuzzy logic, neural networks, and genetic algorithms for complex problems.', dateAdded: new Date('2025-05-18') },
  { id: '8d9e0f1a-2b3c-4d7e-5f9a-0b1c2d3e4f5b', title: 'IT702 Departmental Elective', branch: 'IT', year: 4, semester: 7, content: 'Specialized elective in advanced IT topics.', dateAdded: new Date('2025-05-18') },
  { id: '9e0f1a2b-3c4d-4e8f-6a0b-1c2d3e4f5a6c', title: 'IT703 Open Elective', branch: 'IT', year: 4, semester: 7, content: 'Interdisciplinary elective course chosen by the student.', dateAdded: new Date('2025-05-18') },
  { id: '0f1a2b3c-4d5e-4f9a-7b1c-2d3e4f5a6b7d', title: 'IT801 Information Security', branch: 'IT', year: 4, semester: 8, content: 'Cryptography, network security, and secure system design.', dateAdded: new Date('2025-05-18') },
  { id: '1a2b3c4d-5e6f-4a0b-8c2d-3e4f5a6b7c8e', title: 'IT802 Departmental Elective IV', branch: 'IT', year: 4, semester: 8, content: 'Advanced elective in IT applications.', dateAdded: new Date('2025-05-18') },
  { id: '2b3c4d5e-6f7a-4b1c-9d3e-4f5a6b7c8d9f', title: 'IT803 Open Elective IV', branch: 'IT', year: 4, semester: 8, content: 'Interdisciplinary elective course chosen by the student.', dateAdded: new Date('2025-05-18') },

  // ECE - Year 1 (Preserved from previous update)
  { id: 'a9b0c1d2-e3f4-4a9b-6c0d-1e2f3a4b5c6d', title: 'Engineering Physics', branch: 'ECE', year: 1, semester: 1, content: 'Fundamentals of mechanics, optics, and electromagnetism for engineering applications.', dateAdded: new Date('2025-05-01') },
  { id: 'b0c1d2e3-f4a5-4b0c-7d1e-2f3a4b5c6d7e', title: 'Engineering Chemistry', branch: 'ECE', year: 1, semester: 1, content: 'Chemical bonding, thermodynamics, and materials science for engineering.', dateAdded: new Date('2025-05-01') },
  { id: 'c1d2e3f4-a5b6-4c1d-8e2f-3a4b5c6d7e8f', title: 'Mathematics 1', branch: 'ECE', year: 1, semester: 1, content: 'Calculus, differential equations, and linear algebra for engineering problems.', dateAdded: new Date('2025-05-01') },
  { id: 'd2e3f4a5-b6c7-4d2e-9f3a-4b5c6d7e8f9a', title: 'Basic Mechanical Engineering', branch: 'ECE', year: 1, semester: 1, content: 'Introduction to thermodynamics, mechanics, and machine design.', dateAdded: new Date('2025-05-01') },
  { id: 'e3f4a5b6-c7d8-4e3f-0a4b-5c6d7e8f9a0b', title: 'English for Communication', branch: 'ECE', year: 1, semester: 1, content: 'Technical writing, presentation skills, and professional communication.', dateAdded: new Date('2025-05-01') },
  { id: 'f4a5b6c7-d8e9-4f4a-1b5c-6d7e8f9a0b1c', title: 'Engineering Drawing', branch: 'ECE', year: 1, semester: 2, content: 'Technical drawing, orthographic projections, and CAD basics.', dateAdded: new Date('2025-05-01') },
  { id: 'a5b6c7d8-e9f0-4a5b-2c6d-7e8f9a0b1c2d', title: 'Mathematics 2', branch: 'ECE', year: 1, semester: 2, content: 'Advanced calculus, vector algebra, and numerical methods.', dateAdded: new Date('2025-05-01') },
  { id: 'b6c7d8e9-f0a1-4b6c-3d7e-8f9a0b1c2d3e', title: 'Basic Civil and Engineering Mechanics', branch: 'ECE', year: 1, semester: 2, content: 'Statics, dynamics, and basics of civil engineering structures.', dateAdded: new Date('2025-05-01') },
  { id: 'c7d8e9f0-a1b2-4c7d-4e8f-9a0b1c2d3e4f', title: 'Basic Computer Engineering', branch: 'ECE', year: 1, semester: 2, content: 'Computer organization, programming basics, and hardware fundamentals.', dateAdded: new Date('2025-05-01') },

  // ECE - Year 2 (Preserved existing material)
  { id: '3', title: 'Digital Electronics', branch: 'ECE', year: 2, semester: 3, content: 'Boolean algebra, combinational and sequential circuits, digital logic design...', dateAdded: new Date('2024-01-20') },

  // EE - Year 1 (Preserved from previous update)
  { id: 'd8e9f0a1-b2c3-4d8e-5f9a-0b1c2d3e4f5a', title: 'Engineering Physics', branch: 'EE', year: 1, semester: 1, content: 'Fundamentals of mechanics, optics, and electromagnetism for engineering applications.', dateAdded: new Date('2025-05-01') },
  { id: 'e9f0a1b2-c3d4-4e9f-6a0b-1c2d3e4f5a6b', title: 'Engineering Chemistry', branch: 'EE', year: 1, semester: 1, content: 'Chemical bonding, thermodynamics, and materials science for engineering.', dateAdded: new Date('2025-05-01') },
  { id: 'f0a1b2c3-d4e5-4f0a-7b1c-2d3e4f5a6b7c', title: 'Mathematics 1', branch: 'EE', year: 1, semester: 1, content: 'Calculus, differential equations, and linear algebra for engineering problems.', dateAdded: new Date('2025-05-01') },
  { id: 'a1b2c3d4-e5f6-4a1b-8c2d-3e4f5a6b7c8e', title: 'Basic Mechanical Engineering', branch: 'EE', year: 1, semester: 1, content: 'Introduction to thermodynamics, mechanics, and machine design.', dateAdded: new Date('2025-05-01') },
  { id: 'b2c3d4e5-f6a7-4b2c-9d3e-4f5a6b7c8d9f', title: 'English for Communication', branch: 'EE', year: 1, semester: 1, content: 'Technical writing, presentation skills, and professional communication.', dateAdded: new Date('2025-05-01') },
  { id: 'c3d4e5f6-a7b8-4c3d-0e4f-5a6b7c8d9e0a', title: 'Engineering Drawing', branch: 'EE', year: 1, semester: 2, content: 'Technical drawing, orthographic projections, and CAD basics.', dateAdded: new Date('2025-05-01') },
  { id: 'd4e5f6a7-b8c9-4d4e-1f5a-6b7c8d9e0f1b', title: 'Mathematics 2', branch: 'EE', year: 1, semester: 2, content: 'Advanced calculus, vector algebra, and numerical methods.', dateAdded: new Date('2025-05-01') },
  { id: 'e5f6a7b8-c9d0-4e5f-2a6b-7c8d9e0f1a2c', title: 'Basic Civil and Engineering Mechanics', branch: 'EE', year: 1, semester: 2, content: 'Statics, dynamics, and basics of civil engineering structures.', dateAdded: new Date('2025-05-01') },
  { id: 'f6a7b8c9-d0e1-4f6a-3b7c-8d9e0f1a2b3d', title: 'Basic Computer Engineering', branch: 'EE', year: 1, semester: 2, content: 'Computer organization, programming basics, and hardware fundamentals.', dateAdded: new Date('2025-05-01') },

  // ME - Year 1 (Preserved from previous update)
  { id: 'a7b8c9d0-e1f2-4a7b-4c8d-9e0f1a2b3c4e', title: 'Engineering Physics', branch: 'ME', year: 1, semester: 1, content: 'Fundamentals of mechanics, optics, and electromagnetism for engineering applications.', dateAdded: new Date('2025-05-01') },
  { id: 'b8c9d0e1-f2a3-4b8c-5d9e-0f1a2b3c4d5f', title: 'Engineering Chemistry', branch: 'ME', year: 1, semester: 1, content: 'Chemical bonding, thermodynamics, and materials science for engineering.', dateAdded: new Date('2025-05-01') },
  { id: 'c9d0e1f2-a3b4-4c9d-6e0f-1a2b3c4d5e6a', title: 'Mathematics 1', branch: 'ME', year: 1, semester: 1, content: 'Calculus, differential equations, and linear algebra for engineering problems.', dateAdded: new Date('2025-05-01') },
  { id: 'd0e1f2a3-b4c5-4d0e-7f1a-2b3c4d5e6f7b', title: 'Basic Mechanical Engineering', branch: 'ME', year: 1, semester: 1, content: 'Introduction to thermodynamics, mechanics, and machine design.', dateAdded: new Date('2025-05-01') },
  { id: 'e1f2a3b4-c5d6-4e1f-8a2b-3c4d5e6f7a8c', title: 'English for Communication', branch: 'ME', year: 1, semester: 1, content: 'Technical writing, presentation skills, and professional communication.', dateAdded: new Date('2025-05-01') },
  { id: 'f2a3b4c5-d6e7-4f2a-9b3c-4d5e6f7a8b9d', title: 'Engineering Drawing', branch: 'ME', year: 1, semester: 2, content: 'Technical drawing, orthographic projections, and CAD basics.', dateAdded: new Date('2025-05-01') },
  { id: 'a3b4c5d6-e7f8-4a3b-0c4d-5e6f7a8b9c0e', title: 'Mathematics 2', branch: 'ME', year: 1, semester: 2, content: 'Advanced calculus, vector algebra, and numerical methods.', dateAdded: new Date('2025-05-01') },
  { id: 'b4c5d6e7-f8a9-4b4c-1d5e-6f7a8b9c0d1f', title: 'Basic Civil and Engineering Mechanics', branch: 'ME', year: 1, semester: 2, content: 'Statics, dynamics, and basics of civil engineering structures.', dateAdded: new Date('2025-05-01') },
  { id: 'c5d6e7f8-a9b0-4c5d-2e6f-7a8b9c0d1e2a', title: 'Basic Computer Engineering', branch: 'ME', year: 1, semester: 2, content: 'Computer organization, programming basics, and hardware fundamentals.', dateAdded: new Date('2025-05-01') },

  // ME - Year 2 (Preserved existing material)
  { id: '4', title: 'Strength of Materials', branch: 'ME', year: 2, semester: 4, content: 'Stress and strain, mechanical properties of materials, torsion, bending...', dateAdded: new Date('2024-02-05') },

  // CE - Year 1 (Preserved from previous update)
  { id: 'd6e7f8a9-b0c1-4d6e-3f7a-8b9c0d1e2f3b', title: 'Engineering Physics', branch: 'CE', year: 1, semester: 1, content: 'Fundamentals of mechanics, optics, and electromagnetism for engineering applications.', dateAdded: new Date('2025-05-01') },
  { id: 'e7f8a9b0-c1d2-4e7f-4a8b-9c0d1e2f3a4c', title: 'Engineering Chemistry', branch: 'CE', year: 1, semester: 1, content: 'Chemical bonding, thermodynamics, and materials science for engineering.', dateAdded: new Date('2025-05-01') },
  { id: 'f8a9b0c1-d2e3-4f8a-5b9c-0d1e2f3a4b5d', title: 'Mathematics 1', branch: 'CE', year: 1, semester: 1, content: 'Calculus, differential equations, and linear algebra for engineering problems.', dateAdded: new Date('2025-05-01') },
  { id: 'a9b0c1d2-e3f4-4a9b-6c0d-1e2f3a4b5c6e', title: 'Basic Mechanical Engineering', branch: 'CE', year: 1, semester: 1, content: 'Introduction to thermodynamics, mechanics, and machine design.', dateAdded: new Date('2025-05-01') },
  { id: 'b0c1d2e3-f4a5-4b0c-7d1e-2f3a4b5c6d7f', title: 'English for Communication', branch: 'CE', year: 1, semester: 1, content: 'Technical writing, presentation skills, and professional communication.', dateAdded: new Date('2025-05-01') },
  { id: 'c1d2e3f4-a5b6-4c1d-8e2f-3a4b5c6d7e8a', title: 'Engineering Drawing', branch: 'CE', year: 1, semester: 2, content: 'Technical drawing, orthographic projections, and CAD basics.', dateAdded: new Date('2025-05-01') },
  { id: 'd2e3f4a5-b6c7-4d2e-9f3a-4b5c6d7e8f9b', title: 'Mathematics 2', branch: 'CE', year: 1, semester: 2, content: 'Advanced calculus, vector algebra, and numerical methods.', dateAdded: new Date('2025-05-01') },
  { id: 'e3f4a5b6-c7d8-4e3f-0a4b-5c6d7e8f9a0c', title: 'Basic Civil and Engineering Mechanics', branch: 'CE', year: 1, semester: 2, content: 'Statics, dynamics, and basics of civil engineering structures.', dateAdded: new Date('2025-05-01') },
  { id: 'f4a5b6c7-d8e9-4f4a-1b5c-6d7e8f9a0b1e', title: 'Basic Computer Engineering', branch: 'CE', year: 1, semester: 2, content: 'Computer organization, programming basics, and hardware fundamentals.', dateAdded: new Date('2025-05-01') },
];

// Mock previous papers
export const previousPapers: PreviousPaper[] = [
  // Updated entries
  {
    id: '1',
    subjectName: 'CS303 Data Structure',
    branch: 'CSE',
    year: 2,
    semester: 3,
    examYear: 2023,
    downloadUrl: 'https://www.rgpvonline.com/be/ad-ag-al-cd-cy-io-is-303-data-structure-dec-2024.pdf'
  },
    {
    id: '17',
    subjectName: 'AL405 OOPM',
    branch: 'AIML',
    year: 3,
    semester: 6,
    examYear: 2023,
    downloadUrl: 'https://www.rgpvonline.com/be/ad-al-cd-cy-is-305-object-oriented-programming-and-methodology-dec-2023.pdf'
  },
  {
    id: '11',
    subjectName: 'AL601 TOC',
    branch: 'AIML',
    year: 3,
    semester: 6,
    examYear: 2023,
    downloadUrl: 'https://www.rgpvonline.com/be/al-601-theory-of-computation-dec-2024.pdf'
  },
  {
    id: '2',
    subjectName: 'CS405 Operating Systems',
    branch: 'CSE',
    year: 2,
    semester: 4,
    examYear: 2023,
    downloadUrl: 'https://www.rgpvonline.com/be/al-501-operating-systems-nov-2023.pdf'
  },
  {
    id: '3',
    subjectName: 'Computer Networks',
    branch: 'AIML',
    year: 3,
    semester: 6,
    examYear: 2023,
    downloadUrl: 'https://www.rgpvonline.com/be/al-602-computer-networks-may-2024.pdf'
  },
  {
    id: '4',
    subjectName: 'Strength of Materials',
    branch: 'ME',
    year: 2,
    semester: 4,
    examYear: 2023,
    downloadUrl: '/papers/som_2023.pdf'
  },
  {
    id: '5',
    subjectName: 'IT405 Data Base Management System',
    branch: 'IT',
    year: 2,
    semester: 4,
    examYear: 2023,
    downloadUrl: '/papers/it405_2023.pdf'
  },
  {
    id: '6',
    subjectName: 'CS303 Data Structure',
    branch: 'CSE',
    year: 2,
    semester: 3,
    examYear: 2022,
    downloadUrl: '/papers/cs303_2022.pdf'
  },
  {
    id: '7',
    subjectName: 'CS405 Operating Systems',
    branch: 'CSE',
    year: 2,
    semester: 4,
    examYear: 2022,
    downloadUrl: '/papers/cs405_2022.pdf'
  },
  {
    id: '8',
    subjectName: 'Digital Electronics',
    branch: 'ECE',
    year: 2,
    semester: 3,
    examYear: 2022,
    downloadUrl: '/papers/de_2022.pdf'
  },
  // New entries (sample for each branch, year, and semester)
  // AIML Year 2
  {
    id: '9a0b1c2d-3e4f-4a8b-6c0d-1e2f3a4b5c6f',
    subjectName: 'AL301 Technical Communication',
    branch: 'AIML',
    year: 2,
    semester: 3,
    examYear: 2020,
    downloadUrl: '/papers/al301_2020.pdf'
  },
  {
    id: '0b1c2d3e-4f5a-4b9c-7d1e-2f3a4b5c6d7a',
    subjectName: 'AL301 Technical Communication',
    branch: 'AIML',
    year: 2,
    semester: 3,
    examYear: 2023,
    downloadUrl: '/papers/al301_2023.pdf'
  },
  {
    id: '1c2d3e4f-5a6b-4c0d-8e2f-3a4b5c6d7e8b',
    subjectName: 'AL301 Technical Communication',
    branch: 'AIML',
    year: 2,
    semester: 3,
    examYear: 2024,
    downloadUrl: '/papers/al301_2024.pdf'
  },
  {
    id: '2d3e4f5a-6b7c-4d1e-9f3a-4b5c6d7e8f9c',
    subjectName: 'AL401 Introduction to Discrete Structure & Linear Algebra',
    branch: 'AIML',
    year: 2,
    semester: 4,
    examYear: 2020,
    downloadUrl: '/papers/al401_2020.pdf'
  },
  {
    id: '3e4f5a6b-7c8d-4e2f-0a4b-5c6d7e8f9a0d',
    subjectName: 'AL401 Introduction to Discrete Structure & Linear Algebra',
    branch: 'AIML',
    year: 2,
    semester: 4,
    examYear: 2023,
    downloadUrl: '/papers/al401_2023.pdf'
  },
  {
    id: '4f5a6b7c-8d9e-4f3a-1b5c-6d7e8f9a0b1e',
    subjectName: 'AL401 Introduction to Discrete Structure & Linear Algebra',
    branch: 'AIML',
    year: 2,
    semester: 4,
    examYear: 2024,
    downloadUrl: '/papers/al401_2024.pdf'
  },
  // AIML Year 3
  {
    id: '5a6b7c8d-9e0f-4a4b-2c6d-7e8f9a0b1c2f',
    subjectName: 'AL501 Operating Systems',
    branch: 'AIML',
    year: 3,
    semester: 5,
    examYear: 2020,
    downloadUrl: '/papers/al501_2020.pdf'
  },
  {
    id: '6b7c8d9e-0f1a-4b5c-3d7e-8f9a0b1c2d3a',
    subjectName: 'AL501 Operating Systems',
    branch: 'AIML',
    year: 3,
    semester: 5,
    examYear: 2023,
    downloadUrl: '/papers/al501_2023.pdf'
  },
  {
    id: '7c8d9e0f-1a2b-4c6d-4e8f-9a0b1c2d3e4b',
    subjectName: 'AL501 Operating Systems',
    branch: 'AIML',
    year: 3,
    semester: 5,
    examYear: 2024,
    downloadUrl: '/papers/al501_2024.pdf'
  },
  {
    id: '8d9e0f1a-2b3c-4d7e-5f9a-0b1c2d3e4f5c',
    subjectName: 'AL601 Theory of Computation',
    branch: 'AIML',
    year: 3,
    semester: 6,
    examYear: 2020,
    downloadUrl: '/papers/al601_2020.pdf'
  },
  {
    id: '9e0f1a2b-3c4d-4e8f-6a0b-1c2d3e4f5a6d',
    subjectName: 'AL601 Theory of Computation',
    branch: 'AIML',
    year: 3,
    semester: 6,
    examYear: 2023,
    downloadUrl: '/papers/al601_2023.pdf'
  },
  {
    id: '0f1a2b3c-4d5e-4f9a-7b1c-2d3e4f5a6b7e',
    subjectName: 'AL601 Theory of Computation',
    branch: 'AIML',
    year: 3,
    semester: 6,
    examYear: 2024,
    downloadUrl: '/papers/al601_2024.pdf'
  },
  // AIML Year 4
  {
    id: '1a2b3c4d-5e6f-4a0b-8c2d-3e4f5a6b7c8f',
    subjectName: 'AL701 Computer Vision',
    branch: 'AIML',
    year: 4,
    semester: 7,
    examYear: 2020,
    downloadUrl: '/papers/al701_2020.pdf'
  },
  {
    id: '2b3c4d5e-6f7a-4b1c-9d3e-4f5a6b7c8d9a',
    subjectName: 'AL701 Computer Vision',
    branch: 'AIML',
    year: 4,
    semester: 7,
    examYear: 2023,
    downloadUrl: '/papers/al701_2023.pdf'
  },
  {
    id: '3c4d5e6f-7a8b-4b2c-0e4f-5a6b7c8d9e0b',
    subjectName: 'AL701 Computer Vision',
    branch: 'AIML',
    year: 4,
    semester: 7,
    examYear: 2024,
    downloadUrl: '/papers/al701_2024.pdf'
  },
  {
    id: '4d5e6f7a-8b9c-4b3d-1f5a-6b7c8d9e0f1c',
    subjectName: 'AL801 Business Intelligence',
    branch: 'AIML',
    year: 4,
    semester: 8,
    examYear: 2020,
    downloadUrl: '/papers/al801_2020.pdf'
  },
  {
    id: '5e6f7a8b-9c0d-4b4e-2a6b-7c8d9e0f1a2d',
    subjectName: 'AL801 Business Intelligence',
    branch: 'AIML',
    year: 4,
    semester: 8,
    examYear: 2023,
    downloadUrl: '/papers/al801_2023.pdf'
  },
  {
    id: '6f7a8b9c-0d1e-4b5f-3b7c-8d9e0f1a2b3e',
    subjectName: 'AL801 Business Intelligence',
    branch: 'AIML',
    year: 4,
    semester: 8,
    examYear: 2024,
    downloadUrl: '/papers/al801_2024.pdf'
  },
  // CSE Year 2
  {
    id: '7a8b9c0d-1e2f-4b6a-4c8d-9e0f1a2b3c4f',
    subjectName: 'ES301 Energy & Environmental Engineering',
    branch: 'CSE',
    year: 2,
    semester: 3,
    examYear: 2020,
    downloadUrl: '/papers/es301_2020.pdf'
  },
  {
    id: '8b9c0d1e-2f3a-4b7b-5d9e-0f1a2b3c4d5a',
    subjectName: 'ES301 Energy & Environmental Engineering',
    branch: 'CSE',
    year: 2,
    semester: 3,
    examYear: 2023,
    downloadUrl: '/papers/es301_2023.pdf'
  },
  {
    id: '9c0d1e2f-3a4b-4b8c-6e0f-1a2b3c4d5e6b',
    subjectName: 'ES301 Energy & Environmental Engineering',
    branch: 'CSE',
    year: 2,
    semester: 3,
    examYear: 2024,
    downloadUrl: '/papers/es301_2024.pdf'
  },
  {
    id: '0d1e2f3a-4b5c-4b9d-7f1a-2b3c4d5e6f7c',
    subjectName: 'BT401 Mathematics-III',
    branch: 'CSE',
    year: 2,
    semester: 4,
    examYear: 2020,
    downloadUrl: '/papers/bt401_2020.pdf'
  },
  {
    id: '1e2f3a4b-5c6d-4c0e-8a2b-3c4d5e6f7a8d',
    subjectName: 'BT401 Mathematics-III',
    branch: 'CSE',
    year: 2,
    semester: 4,
    examYear: 2023,
    downloadUrl: '/papers/bt401_2023.pdf'
  },
  {
    id: '2f3a4b5c-6d7e-4c1f-9b3c-4d5e6f7a8b9e',
    subjectName: 'BT401 Mathematics-III',
    branch: 'CSE',
    year: 2,
    semester: 4,
    examYear: 2024,
    downloadUrl: '/papers/bt401_2024.pdf'
  },
  // CSE Year 3
  {
    id: '3a4b5c6d-7e8f-4c2a-0c4d-5e6f7a8b9c0f',
    subjectName: 'CS501 Theory of Computation',
    branch: 'CSE',
    year: 3,
    semester: 5,
    examYear: 2020,
    downloadUrl: '/papers/cs501_2020.pdf'
  },
  {
    id: '4b5c6d7e-8f9a-4c3b-1d5e-6f7a8b9c0d1a',
    subjectName: 'CS501 Theory of Computation',
    branch: 'CSE',
    year: 3,
    semester: 5,
    examYear: 2023,
    downloadUrl: '/papers/cs501_2023.pdf'
  },
  {
    id: '5c6d7e8f-9a0b-4c4c-2e6f-7a8b9c0d1e2b',
    subjectName: 'CS501 Theory of Computation',
    branch: 'CSE',
    year: 3,
    semester: 5,
    examYear: 2024,
    downloadUrl: '/papers/cs501_2023.pdf'
  },
  {
    id: '6d7e8f9a-0b1c-4c5d-3f7a-8b9c0d1e2f3c',
    subjectName: 'CS601 Machine Learning',
    branch: 'CSE',
    year: 3,
    semester: 6,
    examYear: 2020,
    downloadUrl: '/papers/cs601_2020.pdf'
  },
  {
    id: '7e8f9a0b-1c2d-4c6e-4a8b-9c0d1e2f3a4d',
    subjectName: 'CS601 Machine Learning',
    branch: 'CSE',
    year: 3,
    semester: 6,
    examYear: 2023,
    downloadUrl: '/papers/cs601_2023.pdf'
  },
  {
    id: '8f9a0b1c-2d3e-4c7f-5b9c-0d1e2f3a4b5e',
    subjectName: 'CS601 Machine Learning',
    branch: 'CSE',
    year: 3,
    semester: 6,
    examYear: 2024,
    downloadUrl: '/papers/cs601_2024.pdf'
  },
  // CSE Year 4
  {
    id: '9a0b1c2d-3e4f-4c8a-6c0d-1e2f3a4b5c6a',
    subjectName: 'CS701 Software Architectures',
    branch: 'CSE',
    year: 4,
    semester: 7,
    examYear: 2020,
    downloadUrl: '/papers/cs701_2020.pdf'
  },
  {
    id: '0b1c2d3e-4f5a-4c9b-7d1e-2f3a4b5c6d7b',
    subjectName: 'CS701 Software Architectures',
    branch: 'CSE',
    year: 4,
    semester: 7,
    examYear: 2023,
    downloadUrl: '/papers/cs701_2023.pdf'
  },
  {
    id: '1c2d3e4f-5a6b-4c0c-8e2f-3a4b5c6d7e8c',
    subjectName: 'CS701 Software Architectures',
    branch: 'CSE',
    year: 4,
    semester: 7,
    examYear: 2024,
    downloadUrl: '/papers/cs701_2024.pdf'
  },
  {
    id: '2d3e4f5a-6b7c-4c1d-9f3a-4b5c6d7e8f9d',
    subjectName: 'CS801 Internet of Things',
    branch: 'CSE',
    year: 4,
    semester: 8,
    examYear: 2020,
    downloadUrl: '/papers/cs801_2020.pdf'
  },
  {
    id: '3e4f5a6b-7c8d-4c2e-0a4b-5c6d7e8f9a0e',
    subjectName: 'CS801 Internet of Things',
    branch: 'CSE',
    year: 4,
    semester: 8,
    examYear: 2023,
    downloadUrl: '/papers/cs801_2023.pdf'
  },
  {
    id: '4f5a6b7c-8d9e-4c3f-1b5c-6d7e8f9a0b1f',
    subjectName: 'CS801 Internet of Things',
    branch: 'CSE',
    year: 4,
    semester: 8,
    examYear: 2024,
    downloadUrl: '/papers/cs801_2024.pdf'
  },
  // IT Year 2
  {
    id: '5a6b7c8d-9e0f-4c4a-2c6d-7e8f9a0b1c2a',
    subjectName: 'ES301 Energy & Environmental Engineering',
    branch: 'IT',
    year: 2,
    semester: 3,
    examYear: 2020,
    downloadUrl: '/papers/es301_2020.pdf'
  },
  {
    id: '6b7c8d9e-0f1a-4c5b-3d7e-8f9a0b1c2d3b',
    subjectName: 'ES301 Energy & Environmental Engineering',
    branch: 'IT',
    year: 2,
    semester: 3,
    examYear: 2023,
    downloadUrl: '/papers/es301_2023.pdf'
  },
  {
    id: '7c8d9e0f-1a2b-4c6c-4e8f-9a0b1c2d3e4c',
    subjectName: 'ES301 Energy & Environmental Engineering',
    branch: 'IT',
    year: 2,
    semester: 3,
    examYear: 2024,
    downloadUrl: '/papers/es301_2024.pdf'
  },
  {
    id: '8d9e0f1a-2b3c-4c7d-5f9a-0b1c2d3e4f5d',
    subjectName: 'BT401 Mathematics-III',
    branch: 'IT',
    year: 2,
    semester: 4,
    examYear: 2020,
    downloadUrl: '/papers/bt401_2020.pdf'
  },
  {
    id: '9e0f1a2b-3c4d-4c8e-6a0b-1c2d3e4f5a6e',
    subjectName: 'BT401 Mathematics-III',
    branch: 'IT',
    year: 2,
    semester: 4,
    examYear: 2023,
    downloadUrl: '/papers/bt401_2023.pdf'
  },
  {
    id: '0f1a2b3c-4d5e-4c9f-7b1c-2d3e4f5a6b7a',
    subjectName: 'BT401 Mathematics-III',
    branch: 'IT',
    year: 2,
    semester: 4,
    examYear: 2024,
    downloadUrl: '/papers/bt401_2024.pdf'
  },
  // IT Year 3
  {
    id: '1a2b3c4d-5e6f-4c0a-8c2d-3e4f5a6b7c8b',
    subjectName: 'IT501 Operating System',
    branch: 'IT',
    year: 3,
    semester: 5,
    examYear: 2020,
    downloadUrl: '/papers/it501_2020.pdf'
  },
  {
    id: '2b3c4d5e-6f7a-4c1b-9d3e-4f5a6b7c8d9c',
    subjectName: 'IT501 Operating System',
    branch: 'IT',
    year: 3,
    semester: 5,
    examYear: 2023,
    downloadUrl: '/papers/it501_2023.pdf'
  },
  {
    id: '3c4d5e6f-7a8b-4c2c-0e4f-5a6b7c8d9e0d',
    subjectName: 'IT501 Operating System',
    branch: 'IT',
    year: 3,
    semester: 5,
    examYear: 2024,
    downloadUrl: '/papers/it501_2024.pdf'
  },
  {
    id: '4d5e6f7a-8b9c-4c3d-1f5a-6b7c8d9e0f1e',
    subjectName: 'IT601 Computer Graphics & Multimedia',
    branch: 'IT',
    year: 3,
    semester: 6,
    examYear: 2020,
    downloadUrl: '/papers/it601_2020.pdf'
  },
  {
    id: '5e6f7a8b-9c0d-4c4e-2a6b-7c8d9e0f1a2f',
    subjectName: 'IT601 Computer Graphics & Multimedia',
    branch: 'IT',
    year: 3,
    semester: 6,
    examYear: 2023,
    downloadUrl: '/papers/it601_2023.pdf'
  },
  {
    id: '6f7a8b9c-0d1e-4c5f-3b7c-8d9e0f1a2b3a',
    subjectName: 'IT601 Computer Graphics & Multimedia',
    branch: 'IT',
    year: 3,
    semester: 6,
    examYear: 2024,
    downloadUrl: '/papers/it601_2024.pdf'
  },
  // IT Year 4
  {
    id: '7a8b9c0d-1e2f-4c6a-4c8d-9e0f1a2b3c4b',
    subjectName: 'IT701 Soft Computing',
    branch: 'IT',
    year: 4,
    semester: 7,
    examYear: 2020,
    downloadUrl: '/papers/it701_2020.pdf'
  },
  {
    id: '8b9c0d1e-2f3a-4c7b-5d9e-0f1a2b3c4d5c',
    subjectName: 'IT701 Soft Computing',
    branch: 'IT',
    year: 4,
    semester: 7,
    examYear: 2023,
    downloadUrl: '/papers/it701_2023.pdf'
  },
  {
    id: '9c0d1e2f-3a4b-4c8c-6e0f-1a2b3c4d5e6d',
    subjectName: 'IT701 Soft Computing',
    branch: 'IT',
    year: 4,
    semester: 7,
    examYear: 2024,
    downloadUrl: '/papers/it701_2024.pdf'
  },
  {
    id: '0d1e2f3a-4b5c-4c9d-7f1a-2b3c4d5e6f7e',
    subjectName: 'IT801 Information Security',
    branch: 'IT',
    year: 4,
    semester: 8,
    examYear: 2020,
    downloadUrl: '/papers/it801_2020.pdf'
  },
  {
    id: '1e2f3a4b-5c6d-4c0e-8a2b-3c4d5e6f7a8f',
    subjectName: 'IT801 Information Security',
    branch: 'IT',
    year: 4,
    semester: 8,
    examYear: 2023,
    downloadUrl: '/papers/it801_2023.pdf'
  },
  {
    id: '2f3a4b5c-6d7e-4c1f-9b3c-4d5e6f7a8b9a',
    subjectName: 'IT801 Information Security',
    branch: 'IT',
    year: 4,
    semester: 8,
    examYear: 2024,
    downloadUrl: '/papers/it801_2024.pdf'
  }
  // Note: This is a sample. The pattern continues for all 72 subjects (AL301–AL803, ES301–CS803, ES301–IT803, excluding CS303, CS405, IT405 as they are updated above) for exam years 2020, 2023, and 2024, totaling 215 entries.
];

// Mock quiz questions
const dsaQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'Which data structure follows the LIFO principle?',
    options: ['Queue', 'Stack', 'Linked List', 'Tree'],
    correctAnswer: 1
  },
  {
    id: '2',
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
    correctAnswer: 1
  },
  {
    id: '3',
    question: 'Which of the following is not a linear data structure?',
    options: ['Array', 'Linked List', 'Queue', 'Tree'],
    correctAnswer: 3
  }
];

const osQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'What is a deadlock in an operating system?',
    options: [
      'When a process is waiting for some event to occur',
      'When two or more processes are unable to proceed because each is waiting for resources held by others',
      'When a process is terminated unexpectedly',
      'When the CPU is idle'
    ],
    correctAnswer: 1
  },
  {
    id: '2',
    question: 'Which scheduling algorithm assigns the CPU to the process with the shortest expected processing time?',
    options: ['FCFS', 'Round Robin', 'SJF', 'Priority Scheduling'],
    correctAnswer: 2
  },
  {
    id: '3',
    question: 'What is paging in memory management?',
    options: [
      'A memory management scheme that eliminates external fragmentation',
      'A technique where processes are swapped to disk temporarily',
      'A method to allocate contiguous memory to processes',
      'The process of converting logical addresses to physical addresses'
    ],
    correctAnswer: 0
  }
];

// Mock quizzes
export const quizzes: Quiz[] = [
  {
    id: '1',
    title: 'Data Structures Quiz',
    questions: dsaQuestions,
    materialId: '1'
  },
  {
    id: '2',
    title: 'Operating Systems Quiz',
    questions: osQuestions,
    materialId: '2'
  }
];

// Mock flashcards
export const flashcards: Flashcard[] = [
  {
    id: '1',
    front: 'What is a stack?',
    back: 'A stack is a linear data structure that follows the LIFO (Last In, First Out) principle.',
    materialId: '1'
  },
  {
    id: '2',
    front: 'What is a queue?',
    back: 'A queue is a linear data structure that follows the FIFO (First In, First Out) principle.',
    materialId: '1'
  },
  {
    id: '3',
    front: 'What is a deadlock?',
    back: 'A deadlock is a situation where two or more processes are unable to proceed because each is waiting for resources held by the others.',
    materialId: '2'
  },
  {
    id: '4',
    front: 'What is paging?',
    back: 'Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory.',
    materialId: '2'
  }
];

// Mock user profile
export const userProfile: UserProfile = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  branch: 'CSE',
  year: 3,
  semester: 5,
  progress: {
    materialsViewed: ['1', '2'],
    quizzesTaken: [
      {
        quizId: '1',
        score: 80,
        dateTaken: new Date('2024-02-20')
      }
    ],
    flashcardsStudied: ['1', '2']
  }
};
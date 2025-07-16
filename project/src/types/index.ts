export interface StudyMaterial {
  id: string;
  title: string;
  branch: Branch;
  year: number;
  semester: number;
  content: string;
  dateAdded: Date;
  lastAccessed?: Date;
}

export interface PreviousPaper {
  id: string;
  subjectName: string;
  branch: Branch;
  year: number;
  semester: number;
  examYear: number;
  downloadUrl: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  materialId: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  materialId: string;
}

export interface UserProgress {
  materialsViewed: string[];
  quizzesTaken: {
    quizId: string;
    score: number;
    dateTaken: Date;
  }[];
  flashcardsStudied: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  branch: Branch;
  year: number;
  semester: number;
  progress: UserProgress;
}

export type Branch = 'CSE'|'AIML' | 'IT' | 'ECE' | 'EE' | 'ME' | 'CE';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import StudyMaterialsPage from './pages/StudyMaterialsPage';
import PreviousPapersPage from './pages/PreviousPapersPage';
import SyllabusPage from './pages/SyllabusPage';
import AIAssistantPage from './pages/AIAssistantPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import SummaryPage from './pages/SummaryPage';
import FlashcardsPage from './pages/FlashcardsPage';
import QuizPage from './pages/QuizPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/study-materials" element={<StudyMaterialsPage />} />
            <Route path="/previous-papers" element={<PreviousPapersPage />} />
            <Route path="/syllabus" element={<SyllabusPage />} />
            <Route path="/ai-assistant" element={<AIAssistantPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/summary/:id" element={<SummaryPage />} />
            <Route path="/flashcards/:id" element={<FlashcardsPage />} />
            <Route path="/quiz/:id" element={<QuizPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BrowsePapersPage from './pages/BrowsePapersPage';
import PaperDetailPage from './pages/PaperDetailPage';
import SubmitPaperPage from './pages/SubmitPaperPage';
import EditorialBoardPage from './pages/EditorialBoardPage';
import ContactPage from './pages/ContactPage';
import AuthorGuidelinesPage from './pages/AuthorGuidelinesPage';
import ReviewerGuidelinesPage from './pages/ReviewerGuidelinesPage';
import EthicsPage from './pages/EthicsPage';
import FaqPage from './pages/FaqPage';
import ArchivesPage from './pages/ArchivesPage';
import MembershipPage from './pages/MembershipPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/browse" element={<BrowsePapersPage />} />
          <Route path="/paper/:id" element={<PaperDetailPage />} />
          <Route path="/submit" element={<SubmitPaperPage />} />
          <Route path="/editorial-board" element={<EditorialBoardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/author-guidelines" element={<AuthorGuidelinesPage />} />
          <Route path="/reviewer-guidelines" element={<ReviewerGuidelinesPage />} />
          <Route path="/ethics" element={<EthicsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
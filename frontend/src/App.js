import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/shared/ScrollToTop';
import HomePage from './pages/HomePage';
import SystemPage from './pages/SystemPage';
import ExperiencePage from './pages/ExperiencePage';
import ParcoursPage from './pages/ParcoursPage';
import ExpertisesPage from './pages/ExpertisesPage';
import ExpertiseDetailPage from './pages/ExpertiseDetailPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/systeme" element={<SystemPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/parcours" element={<ParcoursPage />} />
            <Route path="/expertises" element={<ExpertisesPage />} />
            <Route path="/expertises/:slug" element={<ExpertiseDetailPage />} />
            <Route path="/partenaires" element={<PartnersPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/confidentialite" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontFamily: 'DM Sans, sans-serif',
              borderRadius: '2px',
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

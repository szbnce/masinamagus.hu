import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stage1Tuning from './pages/Stage1Tuning';
import EcoTuning from './pages/EcoTuning';
import AdBlueFix from './pages/AdBlueFix';
import DpfEgrFix from './pages/DpfEgrFix';
import VagHotStartFix from './pages/VagHotStartFix';
import BmwAudiCoding from './pages/BmwAudiCoding';
import NavigationUpdate from './pages/NavigationUpdate';
import BlogHub from './pages/BlogHub';
import BlogPost from './pages/BlogPost';
import OfficialPage from './pages/OfficialPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Intersection Observer for scroll animations (Global)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll('.slide-up:not(.visible), .fade-in:not(.visible)');
      elements.forEach(el => observer.observe(el));
    };

    // Initial observe and setup mutation observer to catch dynamically added elements (routes)
    observeElements();
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chiptuning-stage-1" element={<Stage1Tuning />} />
              <Route path="/eco-tuning-fogyasztascsokkentes" element={<EcoTuning />} />
              <Route path="/adblue-szoftveres-javitas" element={<AdBlueFix />} />
              <Route path="/egr-dpf-szoftveres-megoldasok" element={<DpfEgrFix />} />
              <Route path="/vag-meleginditas-javitas" element={<VagHotStartFix />} />
              <Route path="/bmw-audi-rejtett-funkciok-kodolas" element={<BmwAudiCoding />} />
              <Route path="/navigacio-terkep-frissites" element={<NavigationUpdate />} />
              <Route path="/blog" element={<BlogHub />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/dokumentum/:docSlug" element={<OfficialPage />} />
              {/* Other routes will be added here */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

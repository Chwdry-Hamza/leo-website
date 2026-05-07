import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/heroSection';
import ControlSection from './components/ControlSection';
import PaymentSection from './components/PaymentSection';
import TransferSection from './components/TransferSection';
import LinkedAccountsSection from './components/linkedAccountsSection';
import CryptoSection from './components/CryptoSection';
import EarnSection from './components/EarnSection';
import FeaturesGrid from './components/FeaturesGrid';
import JoinUsSection from './components/JoinUsSection';
import CollaborationsSection from './components/CollaborationsSection';
import CryptoTicker from './components/CryptoTicker';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import CookieConsent from './components/CookieConsent';
import AboutPage from './app/about/page';
import CardTermsPage from './app/card-terms/page';
import PrivacyPolicyPage from './app/privacy-policy/page';
import ProhibitedActivitiesPage from './app/prohibited-activities/page';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RevealOnScroll: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = (el: Element) => {
      if (
        el.classList?.contains('leo-reveal') &&
        !el.classList.contains('is-in')
      ) {
        io.observe(el);
      }
    };

    document
      .querySelectorAll('.leo-reveal:not(.is-in)')
      .forEach((el) => io.observe(el));

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          observe(node);
          node
            .querySelectorAll?.('.leo-reveal:not(.is-in)')
            .forEach(observe);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const fallback = window.setTimeout(() => {
      document
        .querySelectorAll('.leo-reveal:not(.is-in)')
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          const inView =
            rect.top < window.innerHeight && rect.bottom > 0;
          if (inView) el.classList.add('is-in');
        });
    }, 1500);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);
  return null;
};

const Landing: React.FC = () => (
  <>
    <NavBar />
    <HeroSection />
    <ControlSection />
    <PaymentSection />
    <CryptoTicker />
    <TransferSection />
    <LinkedAccountsSection />
    <CryptoSection />
    <EarnSection />
    <FeaturesGrid />
    <JoinUsSection />
    <CollaborationsSection />
    <Footer />
    <BottomNav />
  </>
);

function App() {
  return (
    <div className="App leo-scope">
      <ScrollToTop />
      <RevealOnScroll />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/card-terms" element={<CardTermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/prohibited-activities" element={<ProhibitedActivitiesPage />} />
      </Routes>
      <CookieConsent />
    </div>
  );
}

export default App;

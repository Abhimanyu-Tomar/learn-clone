import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LanguageModal from './components/LanguageModal';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import InvestorCharter from './pages/InvestorCharter';
import AnnexureA from './pages/AnnexureA';
import AnnexureB from './pages/AnnexureB';
import ControlPolicy from './pages/ControlPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CodeOfConduct from './pages/CodeOfConduct';
import GrievanceRedressal from './pages/GrievanceRedressal';
import TermsConditions from './pages/TermsConditions';
import AllDisclaimers from './pages/AllDisclaimers';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <LanguageModal />
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/investor-charter" element={<InvestorCharter />} />
              <Route path="/annexure-a" element={<AnnexureA />} />
              <Route path="/annexure-b" element={<AnnexureB />} />
              <Route path="/control-policy" element={<ControlPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/code-of-conduct" element={<CodeOfConduct />} />
              <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/all-disclaimers" element={<AllDisclaimers />} />
              <Route path="/hindi" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

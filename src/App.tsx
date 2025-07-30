import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
      <Header />
        <Routes>
          <Route path="/" element={
            <div>
              <Hero />
              <Services />
              <About />
              <Contact />
            </div>}
          />
          <Route path='/privacy_policy' element={
            <div>
              <PrivacyPolicy />
            </div>}
          />
          <Route path='/terms_of_service' element={
            <div>
              <TermsOfService />
            </div>}
          />
          <Route path='/cookie_policy' element={
            <div>
              <CookiePolicy />
            </div>}
          />

        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import WebsiteService from "./pages/WebsiteService";
import AppService from "./pages/AppService";
import ComboService from "./pages/ComboService";
import Projects from "./pages/Projects";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import { AnimatePresence, motion } from "framer-motion";
import Privacy from "./pages/Privacy";
import AboutUs from "./pages/AboutUs";
import Terms from "./pages/Terms";

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }
  }, [loading]);

  const handleLoaderComplete = () => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "";
    setLoading(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShowContent(true);
      });
    });
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ScrollToTop />
          <div className="min-h-screen w-full bg-black">
            <Navbar />
            <main className="w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/website" element={<WebsiteService />} />
                <Route path="/services/app" element={<AppService />} />
                <Route path="/services/combo" element={<ComboService />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/community" element={<Community />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/about-us" element={<AboutUs />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </motion.div>
      )}
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";
import Home from "./pages/Home";
import WebsiteService from "./pages/WebsiteService";
import AppService from "./pages/AppService";
import ComboService from "./pages/ComboService";
import Projects from "./pages/Projects";
import Community from "./pages/Community";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/website" element={<WebsiteService />} />
          <Route path="/services/app" element={<AppService />} />
          <Route path="/services/combo" element={<ComboService />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

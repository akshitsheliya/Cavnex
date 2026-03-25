import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";
import ScrollToTop from "./components/layout/ScrollToTop";
// import SmoothScroll from "./components/layout/SmoothScroll";
import Home from "./pages/Home";
import Services from "./pages/Services";
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

  return (
    <Router>
      {/* <SmoothScroll> */}
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
          </Routes>
        </main>
        <Footer />
      </div>
      {/* </SmoothScroll> */}
    </Router>
  );
}

export default App;

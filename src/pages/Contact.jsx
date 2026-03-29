import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import emailIcon from "../assets/contact/mail.svg";
import phoneIcon from "../assets/contact/phone.svg";
import mapIcon from "../assets/contact/map.svg";
import msgIcon from "../assets/contact/msg.svg";
import bgvideo from "../assets/bg.mp4";
import instagram from "../assets/contact/insta.svg";
import github from "../assets/contact/git.svg";
import linkedin from "../assets/contact/in.svg";
import CustomDropdown from "../components/common/CustomDropdown";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://cavnex-admin.onrender.com/api";
const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY ||
  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Typically 2-4 weeks depending on complexity and requirements. We ensure timely delivery without compromising quality.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use React, Next.js, Node.js, Flutter, MongoDB, PostgreSQL, AWS and more depending on your project needs.",
  },
  {
    question: "Do you provide hosting services?",
    answer:
      "Yes, we offer SaaS hosting, self-hosted, and cloud solutions tailored to your business requirements.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Absolutely! We integrate a CMS so you can manage content easily without any technical knowledge.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes, we provide maintenance packages ranging from 1 to 12 months post-launch support.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a transparent refund policy. Please contact us for detailed terms based on your project stage.",
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    details: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const recaptchaRef = useRef(null);
  const formRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // 0.05 seconds before end, smoothly restart
      if (video.duration - video.currentTime < 0.05) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (error) setError("");
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    if (error && error.includes("reCAPTCHA")) setError("");
  };

  const handleRecaptchaExpiry = () => {
    setRecaptchaToken(null);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (formData.details && formData.details.length > 2000) {
      errors.details = "Message cannot exceed 2000 characters";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!validateForm()) return;

    if (!recaptchaToken && import.meta.env.MODE !== "development") {
      setError("Please complete the reCAPTCHA verification");
      return;
    }

    setLoading(true);

    try {
      const projectTypeLabels = {
        website: "Website Development",
        app: "App Development",
        combo: "Website + App Combo",
        other: "Other",
      };

      const budgetLabels = {
        "8k-15k": "₹8,000 - ₹15,000",
        "15k-30k": "₹15,000 - ₹30,000",
        "30k-70k": "₹30,000 - ₹70,000",
        "70k+": "₹70,000+",
      };

      const message = `
Project Type: ${projectTypeLabels[formData.projectType] || "Not specified"}
Budget Range: ${budgetLabels[formData.budget] || "Not specified"}

Project Details:
${formData.details || "No additional details provided"}
      `.trim();

      const response = await fetch(`${API_BASE_URL}/public/contact-lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          message: message,
          recaptchaToken: recaptchaToken,
          website: formData.website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          const serverErrors = {};
          data.errors.forEach((err) => {
            serverErrors[err.field] = err.message;
          });
          setFieldErrors(serverErrors);
          throw new Error("Please fix the errors above");
        }
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        details: "",
        website: "",
      });

      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setRecaptchaToken(null);

      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setError(err.message || "Failed to submit. Please try again.");

      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setRecaptchaToken(null);
    } finally {
      setLoading(false);
    }
  };

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 xs:px-5 sm:px-4 md:px-6 lg:px-8 pt-8 xs:pt-10 sm:pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 xs:mb-8 sm:mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8 mb-3 xs:mb-4">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light whitespace-nowrap mb-3 xs:mb-4 sm:mb-6 flex-shrink-0"
            >
              Get In Touch
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden sm:block flex-1 origin-left mt-2"
            >
              <div className="h-px bg-gray-700 w-full mt-3" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-sm xs:text-base sm:text-lg"
          >
            Have a project in mind? Let's discuss how we can help you
          </motion.p>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden min-h-[600px] xs:min-h-[580px] sm:min-h-[350px] md:min-h-[420px] lg:min-h-[420px]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            willChange: "transform",
          }}
        >
          <source src={bgvideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,255,200,0.02) 2px, rgba(0,255,200,0.02) 4px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 xs:px-5 sm:px-4 md:px-6 lg:px-8 py-6 xs:py-8 sm:py-14">
          <div className="flex flex-col lg:flex-row gap-5 xs:gap-6 sm:gap-8">
            <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4 lg:w-[340px] xl:w-[380px] flex-shrink-0">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-2 xs:gap-3 sm:gap-4">
                {[
                  {
                    icon: (
                      <img
                        src={emailIcon}
                        alt="email"
                        className="w-full h-full"
                      />
                    ),
                    label: "Email",
                    value: "connect@cavnex.in",
                    link: "mailto:connect@cavnex.in",
                  },
                  {
                    icon: (
                      <img
                        src={phoneIcon}
                        alt="phone"
                        className="w-full h-full"
                      />
                    ),
                    label: "Phone",
                    value: "+919157500298",
                    link: "tel:+919157500298",
                  },
                  {
                    icon: (
                      <img
                        src={msgIcon}
                        alt="whatsapp"
                        className="w-full h-full"
                      />
                    ),
                    label: "WhatsApp",
                    value: "Chat with us",
                    link: "https://wa.me/919157500298?text=Hello%20Cavnex!",
                  },
                  {
                    icon: (
                      <img
                        src={mapIcon}
                        alt="location"
                        className="w-full h-full"
                      />
                    ),
                    label: "Location",
                    value: "Mumbai, India",
                  },
                ].map((item, i) => {
                  const Wrapper = item.link ? motion.a : motion.div;
                  return (
                    <Wrapper
                      key={i}
                      {...(item.link && {
                        href: item.link,
                        target: item.link.startsWith("http")
                          ? "_blank"
                          : "_self",
                        rel: "noopener noreferrer",
                      })}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-2 xs:gap-3 sm:gap-4 rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 sm:py-4 backdrop-blur-[23px] cursor-default hover:bg-white/5 transition-all"
                    >
                      <div className="w-7 h-7 xs:w-9 xs:h-9 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-400 text-[9px] xs:text-[10px] sm:text-xs">
                          {item.label}
                        </p>
                        <p className="text-white text-[10px] xs:text-xs sm:text-sm font-medium truncate cursor-pointer">
                          {item.value}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="mt-1 xs:mt-2 sm:mt-3"
              >
                <p className="text-white font-semibold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 xs:mb-3">
                  Follow Us
                </p>
                <div className="flex items-center gap-3 xs:gap-4">
                  {[
                    {
                      icon: (
                        <img
                          src={instagram}
                          alt="Instagram"
                          className="w-full h-full"
                        />
                      ),
                      link: "https://www.instagram.com/cavnex",
                    },
                    {
                      icon: (
                        <img
                          src={linkedin}
                          alt="LinkedIn"
                          className="w-full h-full"
                        />
                      ),
                      link: "https://www.linkedin.com/in/cavnex",
                    },
                    {
                      icon: (
                        <img
                          src={github}
                          alt="GitHub"
                          className="w-full h-full"
                        />
                      ),
                      link: "https://github.com/Cavnex-info-Tech",
                    },
                  ].map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.link || "#"}
                      target={s.link ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white rounded-full p-1.5 xs:p-2 w-7 h-7 xs:w-8 xs:h-8 bg-[#00000070] hover:bg-white/10 transition-colors"
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex-1 rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 backdrop-blur-[23px]"
            >
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-start gap-3"
                >
                  <svg
                    className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-green-400 font-semibold text-sm sm:text-base">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-green-300/80 text-xs sm:text-sm mt-1">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3"
                >
                  <svg
                    className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-red-400 font-semibold text-sm sm:text-base">
                      Error
                    </h4>
                    <p className="text-red-300/80 text-xs sm:text-sm mt-1">
                      {error}
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 xs:gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[10px] xs:text-xs sm:text-sm text-gray-300 mb-1 xs:mb-1.5">
                      Your Name <span className="text-white">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-5 text-white text-[10px] xs:text-xs sm:text-sm outline-none transition-colors bg-[#000000B8] ${
                        fieldErrors.name
                          ? "border border-red-500/50"
                          : "focus:border-purple-500"
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="mt-1 text-xs text-red-400">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] xs:text-xs sm:text-sm text-gray-300 mb-1 xs:mb-1.5">
                      Email Address <span className="text-white">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-5 text-white text-[10px] xs:text-xs sm:text-sm outline-none transition-colors bg-[#000000B8] ${
                        fieldErrors.email
                          ? "border border-red-500/50"
                          : "focus:border-purple-500"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-xs text-red-400">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] xs:text-xs sm:text-sm text-gray-300 mb-1 xs:mb-1.5">
                      Phone Number <span className="text-white">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-2.5 xs:left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[10px] xs:text-xs sm:text-sm">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        disabled={loading}
                        className={`w-full pl-9 xs:pl-11 sm:pl-14 pr-2.5 xs:pr-3 sm:pr-4 py-2 xs:py-2.5 sm:py-5 text-white text-[10px] xs:text-xs sm:text-sm outline-none transition-colors bg-[#000000B8] ${
                          fieldErrors.phone
                            ? "border border-red-500/50"
                            : "focus:border-purple-500"
                        }`}
                      />
                    </div>
                    {fieldErrors.phone && (
                      <p className="mt-1 text-xs text-red-400">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] xs:text-xs sm:text-sm text-gray-300 mb-1 xs:mb-1.5">
                      Project Type
                    </label>
                    <CustomDropdown
                      placeholder="Select Type"
                      value={formData.projectType}
                      onChange={(val) =>
                        setFormData({ ...formData, projectType: val })
                      }
                      options={[
                        { label: "Website Development", value: "website" },
                        { label: "App Development", value: "app" },
                        { label: "Website + App Combo", value: "combo" },
                        { label: "Other", value: "other" },
                      ]}
                      disabled={loading}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[10px] xs:text-xs sm:text-sm text-gray-300 mb-1 xs:mb-1.5">
                      Budget Range
                    </label>
                    <CustomDropdown
                      placeholder="Select Budget"
                      value={formData.budget}
                      onChange={(val) =>
                        setFormData({ ...formData, budget: val })
                      }
                      options={[
                        { label: "₹8,000 - ₹15,000", value: "8k-15k" },
                        { label: "₹15,000 - ₹30,000", value: "15k-30k" },
                        { label: "₹30,000 - ₹70,000", value: "30k-70k" },
                        { label: "₹70,000+", value: "70k+" },
                      ]}
                      disabled={loading}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[10px] xs:text-xs sm:text-sm text-gray-300 mb-1 xs:mb-1.5">
                      Project Details{" "}
                      <span className="text-gray-500">(Optional)</span>
                    </label>
                    <textarea
                      name="details"
                      placeholder="Tell us about your project..."
                      value={formData.details}
                      onChange={handleChange}
                      rows={3}
                      disabled={loading}
                      className={`w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-5 text-white text-[10px] xs:text-xs sm:text-sm outline-none transition-colors resize-none bg-[#000000B8] sm:rows-4 ${
                        fieldErrors.details
                          ? "border border-red-500/50"
                          : "focus:border-purple-500"
                      }`}
                    />
                    <div className="flex justify-between mt-1">
                      {fieldErrors.details && (
                        <p className="text-xs text-red-400">
                          {fieldErrors.details}
                        </p>
                      )}
                      <span
                        className={`text-xs ml-auto ${formData.details.length > 1800 ? "text-yellow-400" : "text-gray-500"}`}
                      >
                        {formData.details.length}/2000
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={handleRecaptchaChange}
                    onExpired={handleRecaptchaExpiry}
                    theme="dark"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading || success}
                  whileHover={
                    !loading && !success ? { scale: 1.02, opacity: 0.9 } : {}
                  }
                  whileTap={!loading && !success ? { scale: 0.98 } : {}}
                  className={`w-full py-2.5 xs:py-3 sm:py-5 rounded-full font-semibold text-white text-xs xs:text-sm sm:text-base transition-all ${
                    loading || success
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-[#272525] hover:bg-[#7a7a7a90]"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : success ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Sent Successfully!
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                <p className="text-center text-gray-500 text-[10px] xs:text-xs">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="/privacy"
                    className="text-purple-400 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 xs:px-5 sm:px-4 md:px-6 lg:px-8 pt-10 xs:pt-12 sm:pt-20 md:pt-24 pb-10 xs:pb-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 xs:mb-8 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight xs:leading-none tracking-tight">
            Frequently Asked
            <br />
            Questions
          </h2>
        </motion.div>

        {/* Desktop: 2 Columns */}
        <div className="hidden md:grid md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-0">
          <div>
            {leftFaqs.map((faq, index) => {
              const globalIndex = index * 2;
              return (
                <motion.div
                  key={globalIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="border-b border-blue-600/60 py-3 sm:py-4 md:py-5"
                >
                  <motion.button
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() =>
                      setOpenFaq(openFaq === globalIndex ? null : globalIndex)
                    }
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-xs sm:text-sm md:text-base text-gray-300 pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === globalIndex ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg sm:text-xl text-gray-400 flex-shrink-0"
                    >
                      {openFaq === globalIndex ? "−" : "+"}
                    </motion.span>
                  </motion.button>
                  <AnimatePresence>
                    {openFaq === globalIndex && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
          <div>
            {rightFaqs.map((faq, index) => {
              const globalIndex = index * 2 + 1;
              return (
                <motion.div
                  key={globalIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="border-b border-blue-600/60 py-3 sm:py-4 md:py-5"
                >
                  <motion.button
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() =>
                      setOpenFaq(openFaq === globalIndex ? null : globalIndex)
                    }
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-xs sm:text-sm md:text-base text-gray-300 pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === globalIndex ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg sm:text-xl text-gray-400 flex-shrink-0"
                    >
                      {openFaq === globalIndex ? "−" : "+"}
                    </motion.span>
                  </motion.button>
                  <AnimatePresence>
                    {openFaq === globalIndex && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-blue-600/60 py-2.5 xs:py-3"
            >
              <motion.button
                whileTap={{ scale: 0.99 }}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-[11px] xs:text-xs sm:text-sm text-gray-300 pr-3 xs:pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-base xs:text-lg text-gray-400 flex-shrink-0"
                >
                  {openFaq === index ? "−" : "+"}
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] xs:text-xs text-gray-500 mt-1.5 xs:mt-2 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

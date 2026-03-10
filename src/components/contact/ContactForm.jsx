import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import Button from "../common/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    });
  };

  const inputClasses =
    "w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-800 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-colors";
  const labelClasses =
    "block text-gray-300 mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium";

  return (
    <motion.form
      {...fadeInUp}
      onSubmit={handleSubmit}
      className="card-gradient rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div>
          <label className={labelClasses}>Your Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className={labelClasses}>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div>
          <label className={labelClasses}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+91 87992 63376"
          />
        </div>

        <div>
          <label className={labelClasses}>Project Type *</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="">Select Type</option>
            <option value="website">Website Development</option>
            <option value="app">App Development</option>
            <option value="combo">Website + App Combo</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mb-4 sm:mb-6">
        <label className={labelClasses}>Budget Range</label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select Budget</option>
          <option value="5k-10k">₹5,000 - ₹10,000</option>
          <option value="10k-25k">₹10,000 - ₹25,000</option>
          <option value="25k-50k">₹25,000 - ₹50,000</option>
          <option value="50k+">₹50,000+</option>
        </select>
      </div>

      <div className="mb-4 sm:mb-6">
        <label className={labelClasses}>Project Details *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your project..."
        />
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </motion.form>
  );
}

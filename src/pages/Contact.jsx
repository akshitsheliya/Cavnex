import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "../utils/animations";
import SectionTitle from "../components/common/SectionTitle";
import ContactForm from "../components/contact/ContactForm";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import {
  HiMail,
  HiPhone,
  HiChat,
  HiLocationMarker,
  HiChevronDown,
} from "react-icons/hi";
import { useState } from "react";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "hello@cavnex.com",
      link: "mailto:hello@cavnex.com",
    },
    {
      icon: HiPhone,
      title: "Phone",
      value: "+91 87992 63376",
      link: "tel:+919876543210",
    },
    {
      icon: HiChat,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/919876543210",
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Mumbai, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "#",
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "#",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "#",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "#",
      color: "from-gray-600 to-gray-800",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Typically 2-4 weeks depending on complexity and requirements.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern technologies like React, Node.js, Next.js, and Flutter.",
    },
    {
      question: "Do you provide hosting services?",
      answer:
        "Yes, we provide hosting setup and can recommend the best hosting solutions.",
    },
    {
      question: "Can I update the website myself?",
      answer: "Absolutely! We provide easy-to-use admin panels and training.",
    },
    {
      question: "Do you offer support after launch?",
      answer: "Yes, we offer various maintenance and support packages.",
    },
    {
      question: "What is your refund policy?",
      answer: "We offer milestone-based payments and satisfaction guarantee.",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto container-padding">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's discuss how we can help you"
          gradient
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
          <motion.div {...fadeInLeft}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
              Let's Start a Conversation
            </h2>

            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  {...fadeInUp}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 sm:gap-4 card-gradient rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400 mb-0.5">
                      {info.title}
                    </div>
                    <div className="text-white font-semibold text-sm sm:text-base">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r ${social.color} rounded-lg sm:rounded-xl text-white font-semibold hover:shadow-lg transition-all text-sm sm:text-base`}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden xs:inline">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInRight}>
            <ContactForm />
          </motion.div>
        </div>

        <motion.div {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="card-gradient rounded-lg sm:rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 sm:p-5 md:p-6 text-left flex items-center justify-between gap-4"
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                  <HiChevronDown
                    className={`w-5 h-5 text-primary-400 flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                    <p className="text-gray-400 text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

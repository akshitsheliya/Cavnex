import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "../utils/animations";
import SectionTitle from "../components/common/SectionTitle";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "hello@cavnex.com",
      link: "mailto:hello@cavnex.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/919876543210",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Mumbai, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: "📷",
      url: "#",
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "#",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "#",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "GitHub",
      icon: "💻",
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
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind? Let's discuss how we can help you"
          gradient
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div {...fadeInLeft}>
            <h2 className="text-3xl font-bold text-white mb-8">
              Let's Start a Conversation
            </h2>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  {...fadeInUp}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 card-gradient rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl">{info.icon}</div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      {info.title}
                    </div>
                    <div className="text-white font-semibold">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-3 p-4 bg-gradient-to-r ${social.color} rounded-xl text-white font-semibold hover:shadow-lg transition-all`}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    {social.name}
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="card-gradient rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

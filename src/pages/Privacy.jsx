import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "Introduction",
    content: [
      `Welcome to Cavnex ("Company", "we", "our", "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website cavnex.in or engage our software and web development services (collectively, the "Service").`,
      `By accessing or using our Service, you acknowledge that you have read, understood, and agree to the data practices described in this Privacy Policy. If you do not agree, please do not access or use our Service.`,
      `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.`,
    ],
  },
  {
    id: 2,
    title: "Information We Collect",
    content: [
      `We collect information you voluntarily provide when you contact us through our website, submit a project inquiry form, request a quote, or communicate with us via email or phone.`,
      `The types of information we may collect include: your full name, business name, email address, phone number, project description, budget range, and any other details you choose to share with us in the course of our business relationship.`,
      `We may also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages visited, and time spent on those pages. This information is collected through cookies and similar tracking technologies.`,
    ],
  },
  {
    id: 3,
    title: "How We Use Your Information",
    content: [
      `We use the information we collect to respond to your inquiries, provide quotes, manage and deliver our software development and web development services, and communicate project updates, timelines, and deliverables.`,
      `We may use your contact information to send you service-related communications, invoices, project status updates, and, with your permission, occasional newsletters or updates about our work and services.`,
      `We may use aggregated and anonymized data to analyze usage patterns on our website, improve our service offerings, and better understand the needs of our clients. This data does not identify you individually.`,
    ],
  },
  {
    id: 4,
    title: "How We Share Your Information",
    content: [
      `We do not sell, rent, or trade your personal information to third parties for marketing purposes. Your information is never shared with advertisers or used for any purpose beyond delivering our services to you.`,
      `We may share your information with trusted third-party service providers who assist us in operating our business, such as payment processors, cloud storage providers, communication tools, and project management platforms. These providers are contractually obligated to keep your information confidential and use it only for the purposes we specify.`,
      `We may disclose your information if required to do so by law, court order, or governmental authority, or if we believe in good faith that such disclosure is necessary to protect our rights, your safety, or the safety of others.`,
    ],
  },
  {
    id: 5,
    title: "Project Data and Confidentiality",
    content: [
      `All project-related information, materials, source code, designs, and documentation you share with us are treated with strict confidentiality. We do not share client project data with any third party without your explicit written consent.`,
      `We may request that you sign a Non-Disclosure Agreement (NDA) before project commencement if you require an additional layer of legal protection for sensitive business information.`,
      `Upon project completion, we will securely transfer all deliverables and associated assets to you. Copies retained by us for internal records are kept secure and are not used for any other purpose.`,
    ],
  },
  {
    id: 6,
    title: "Cookies and Tracking Technologies",
    content: [
      `Our website uses cookies to enhance your browsing experience, remember your preferences, and analyze website traffic. Cookies are small text files stored on your device when you visit our site.`,
      `You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of our website may not function properly if cookies are disabled.`,
      `We use Google Analytics and similar analytics tools to understand how visitors interact with our website. These tools collect information anonymously and report aggregate trends without identifying individual visitors.`,
    ],
  },
  {
    id: 7,
    title: "Data Security",
    content: [
      `We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encrypted communications (HTTPS), secure data storage, and restricted access controls.`,
      `However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.`,
      `In the event of a data breach that may compromise your personal information, we will notify you promptly in accordance with applicable law.`,
    ],
  },
  {
    id: 8,
    title: "Data Retention",
    content: [
      `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.`,
      `Client project records, including communications, invoices, and deliverable documentation, may be retained for up to 5 years after project completion for accounting, legal, and reference purposes.`,
      `You may request deletion of your personal data at any time by contacting us at info@cavnex.in. We will process your request within 30 days, subject to any legal obligations that require us to retain certain records.`,
    ],
  },
  {
    id: 9,
    title: "Your Rights",
    content: [
      `You have the right to access the personal information we hold about you and to request a copy of it. You also have the right to request correction of inaccurate data or deletion of your data, subject to our legal retention obligations.`,
      `You have the right to opt out of receiving marketing communications from us at any time by clicking the unsubscribe link in any email we send or by contacting us directly at info@cavnex.in.`,
      `If you believe we have not complied with your data rights, you have the right to lodge a complaint with the appropriate data protection authority in your jurisdiction.`,
    ],
  },
  {
    id: 10,
    title: "Third-Party Links",
    content: [
      `Our website may contain links to third-party websites, tools, or resources. These links are provided for your convenience and do not signify our endorsement of those websites. We have no control over the content or privacy practices of third-party sites and accept no responsibility for them.`,
      `We encourage you to read the privacy policy of any third-party website you visit through links on our site.`,
    ],
  },
  {
    id: 11,
    title: "Children's Privacy",
    content: [
      `Our services are intended for businesses and individuals aged 18 and older. We do not knowingly collect personal information from anyone under the age of 18. If we become aware that we have inadvertently received personal information from someone under 18, we will delete it from our records promptly.`,
    ],
  },
  {
    id: 12,
    title: "Contact Us",
    content: [
      `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us at:`,
      `Email: info@cavnex.in\nPhone: +91 91575 00298\nAddress: Gujarat, India`,
    ],
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="py-16 sm:py-20 md:py-28 px-4 text-center border-b border-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Last update: January 1st, 2026
          </p>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="mb-10 sm:mb-12 md:mb-14"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-5">
              {section.id}. {section.title}
            </h2>
            <div className="space-y-4">
              {section.content.map((para, j) => (
                <p
                  key={j}
                  className="text-gray-400 text-sm sm:text-base leading-relaxed whitespace-pre-line"
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;

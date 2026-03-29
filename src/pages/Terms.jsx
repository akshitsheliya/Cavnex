import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "Introduction",
    content: [
      {
        type: "text",
        value: `These Terms of Service ("Terms") constitute a legally binding agreement between Cavnex ("Company", "We", "Our", "Us") and you ("You", "Client", or "User"). By engaging our software development, web development, or mobile app development services, or by accessing our website at cavnex.in, you agree to be fully bound by these Terms.`,
      },
      {
        type: "text",
        value: `These Terms govern all services provided by Cavnex, including but not limited to website development, web application development, mobile application development, UI/UX design, backend development, and any associated consulting or support services (collectively, the "Service").`,
      },
      {
        type: "text",
        value: `If you do not agree to these Terms, please do not use or engage with our Services. We recommend reading these Terms carefully before initiating any project or payment.`,
      },
    ],
  },
  {
    id: 2,
    title: "Project Engagement",
    content: [
      {
        type: "text",
        value: `All projects begin with a discovery and scoping phase. During this phase, we will discuss your requirements, goals, timeline, and budget. A formal project proposal or Statement of Work (SOW) will be prepared and must be agreed upon in writing before development commences.`,
      },
      {
        type: "text",
        value: `Once both parties have agreed to the SOW and initial payment has been received, the project is considered officially initiated. Any changes to the agreed scope must be submitted in writing and may result in revised timelines and pricing.`,
      },
    ],
  },
  {
    id: 3,
    title: "Payment Terms",
    content: [
      {
        type: "text",
        value: `Cavnex typically operates on a milestone-based payment structure. Unless otherwise agreed in writing, projects are billed as follows: 50% advance payment upon project initiation, and the remaining 50% upon project completion and delivery.`,
      },
      {
        type: "text",
        value: `For larger projects, a phased payment plan may be agreed upon, tied to specific deliverable milestones. All payment schedules will be clearly outlined in the project proposal.`,
      },
      {
        type: "text",
        value: `All invoices are due within 7 business days of issuance unless otherwise specified. Late payments may result in work being paused until the outstanding balance is cleared.`,
      },
      {
        type: "text",
        value: `Prices are quoted in Indian Rupees (INR) unless otherwise agreed. International clients may be invoiced in USD or another agreed currency, subject to applicable exchange rates at the time of invoicing.`,
      },
    ],
  },
  {
    id: 4,
    title: "Refund Policy",
    content: [
      {
        type: "text",
        value: `The advance payment is non-refundable once development work has commenced, as it compensates for the time, resources, and planning invested in your project.`,
      },
      {
        type: "text",
        value: `If you choose to cancel the project after work has begun but before completion, you will be billed for the work completed up to that point, and any remaining balance from the advance not covered by completed work may be returned at our discretion.`,
      },
      {
        type: "text",
        value: `Refund requests for services not yet rendered will be considered on a case-by-case basis. Please contact us at info@cavnex.in to discuss your situation.`,
      },
    ],
  },
  {
    id: 5,
    title: "Revisions and Change Requests",
    content: [
      {
        type: "text",
        value: `Each project phase includes a defined number of revision rounds as specified in the project proposal. Revisions refer to modifications within the originally agreed scope of work.`,
      },
      {
        type: "text",
        value: `Requests that fall outside the original scope — including new features, additional pages, design overhauls, or functionality changes — will be treated as change requests and quoted separately.`,
      },
      {
        type: "text",
        value: `All change requests must be submitted in writing and approved by both parties before implementation. Cavnex reserves the right to adjust the project timeline accordingly.`,
      },
    ],
  },
  {
    id: 6,
    title: "Delivery and Timelines",
    content: [
      {
        type: "text",
        value: `Project timelines are agreed upon during the scoping phase and outlined in the project proposal. We are committed to meeting deadlines and will communicate proactively if any delays arise.`,
      },
      {
        type: "text",
        value: `Cavnex is not responsible for delays caused by the client's failure to provide timely feedback, required content, assets, credentials, or approvals. Such delays may extend the project timeline without additional cost to Cavnex.`,
      },
      {
        type: "text",
        value: `Upon final delivery, the client is responsible for conducting thorough testing and reporting any issues within the agreed acceptance period. Work accepted after this period may be subject to additional support charges.`,
      },
    ],
  },
  {
    id: 7,
    title: "Intellectual Property and Ownership",
    content: [
      {
        type: "text",
        value: `Upon receipt of full and final payment, Cavnex transfers all intellectual property rights for the custom code, designs, and deliverables created specifically for your project to you, the client.`,
      },
      {
        type: "text",
        value: `Cavnex retains ownership of any proprietary frameworks, tools, libraries, or components developed internally that may be incorporated into your project. You are granted a non-exclusive, perpetual license to use these components as part of the delivered product.`,
      },
      {
        type: "text",
        value: `Third-party libraries, plugins, and open-source components used in the project remain subject to their respective licenses. Cavnex will disclose all third-party dependencies upon request.`,
      },
      {
        type: "text",
        value: `Cavnex reserves the right to display completed projects in our portfolio unless explicitly requested otherwise in writing by the client prior to project completion.`,
      },
    ],
  },
  {
    id: 8,
    title: "Confidentiality",
    content: [
      {
        type: "text",
        value: `Both parties agree to keep confidential all proprietary, business, and technical information shared during the course of the project. Cavnex will not disclose your project details, business strategies, or any sensitive information to any third party without your written consent.`,
      },
      {
        type: "text",
        value: `If required, both parties may enter into a formal Non-Disclosure Agreement (NDA) before the project begins. Please contact us to arrange this before sharing any sensitive business information.`,
      },
    ],
  },
  {
    id: 9,
    title: "Client Responsibilities",
    content: [
      {
        type: "text",
        value: `You agree to provide accurate project requirements, timely feedback, and all necessary content, assets, logins, and approvals needed for Cavnex to complete the project successfully.`,
      },
      {
        type: "text",
        value: `You confirm that any content, images, logos, or materials you provide to Cavnex for use in the project are owned by you or that you have obtained the necessary rights and licenses to use them.`,
      },
      {
        type: "text",
        value: `You agree not to request or use Cavnex's services for any purpose that is unlawful, harmful, fraudulent, or in violation of any applicable laws or regulations.`,
      },
    ],
  },
  {
    id: 10,
    title: "Prohibited Uses",
    content: [
      {
        type: "text",
        value: `You may engage Cavnex's services only for lawful purposes. You agree to comply with all applicable laws, regulations, and these Terms. Additionally, you agree not to:`,
      },
      {
        type: "list",
        items: [
          "Use our services to build, distribute, or support any software that is malicious, fraudulent, or harmful to others.",
          "Misrepresent your identity, business, or the intended purpose of the project to obtain services under false pretenses.",
          "Attempt to reverse engineer, copy, or resell any proprietary tools, frameworks, or methodologies developed by Cavnex.",
          "Use deliverables provided by Cavnex in a manner that violates applicable intellectual property, privacy, or consumer protection laws.",
          "Engage in any activity that interferes with or disrupts the services or infrastructure used by Cavnex.",
        ],
      },
      {
        type: "text",
        value: `Violations of these prohibitions may result in immediate termination of services without refund and may be subject to legal action.`,
      },
    ],
  },
  {
    id: 11,
    title: "Support and Maintenance",
    content: [
      {
        type: "text",
        value: `Upon project delivery, Cavnex provides a warranty period (typically 30 days unless otherwise specified) during which we will resolve any bugs or issues arising directly from our development work at no additional cost.`,
      },
      {
        type: "text",
        value: `Ongoing support, updates, new features, content changes, and server maintenance beyond the warranty period are available through our monthly Maintenance Packages. Please refer to our Services page for current pricing.`,
      },
      {
        type: "text",
        value: `Cavnex is not responsible for issues arising from third-party services, hosting providers, external APIs, or changes made to the codebase by the client or any other party after delivery.`,
      },
    ],
  },
  {
    id: 12,
    title: "Limitation of Liability",
    content: [
      {
        type: "text",
        value: `Cavnex's total liability arising out of or in connection with these Terms or the services provided shall not exceed the total amount paid by the client for the specific project in question.`,
      },
      {
        type: "text",
        value: `Cavnex shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, business opportunities, or goodwill, even if advised of the possibility of such damages.`,
      },
    ],
  },
  {
    id: 13,
    title: "Termination",
    content: [
      {
        type: "text",
        value: `Either party may terminate the project engagement with written notice if the other party materially breaches these Terms and fails to remedy such breach within 10 business days of receiving written notice.`,
      },
      {
        type: "text",
        value: `Upon termination, the client shall pay for all work completed up to the termination date. Cavnex will deliver all completed work and assets to the client within a reasonable timeframe following full payment.`,
      },
    ],
  },
  {
    id: 14,
    title: "Governing Law",
    content: [
      {
        type: "text",
        value: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.`,
      },
    ],
  },
  {
    id: 15,
    title: "Changes to Terms",
    content: [
      {
        type: "text",
        value: `Cavnex reserves the right to update or modify these Terms at any time. Changes will be effective upon posting to our website. We will make reasonable efforts to notify existing clients of significant changes. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.`,
      },
    ],
  },
  {
    id: 16,
    title: "Acknowledgement",
    content: [
      {
        type: "text",
        value: `BY ENGAGING CAVNEX'S SERVICES OR BY MAKING ANY PAYMENT TO CAVNEX, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTOOD THEM, AND AGREE TO BE BOUND BY THEM.`,
      },
    ],
  },
  {
    id: 17,
    title: "Contact Us",
    content: [
      {
        type: "text",
        value: `For questions, concerns, or requests related to these Terms, please reach out to us:`,
      },
      {
        type: "text",
        value: `Email: info@cavnex.in\nPhone: +91 91575 00298\nAddress: Gujarat, India`,
      },
    ],
  },
];

const renderBlock = (block, key) => {
  if (block.type === "text") {
    return (
      <p
        key={key}
        className="text-gray-400 text-sm sm:text-base leading-relaxed whitespace-pre-line"
      >
        {block.value}
      </p>
    );
  }
  if (block.type === "list") {
    return (
      <ol key={key} className="space-y-4">
        {block.items.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            <span className="flex-shrink-0 text-gray-600 font-medium">
              {i + 1}.
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    );
  }
  return null;
};

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="py-16 sm:py-20 md:py-28 px-4 text-center border-b border-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Terms of Service
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
            transition={{ duration: 0.5, delay: i * 0.03 }}
            className="mb-10 sm:mb-12 md:mb-14"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-5">
              {section.id}. {section.title}
            </h2>
            <div className="space-y-4">
              {section.content.map((block, j) =>
                renderBlock(block, `${i}-${j}`)
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Terms;

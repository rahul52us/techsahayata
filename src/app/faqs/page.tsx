"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Globe,
  Mail,
  Laptop,
  Cpu,
  Wrench,
  Shield,
  Timer,
  Settings2,
  Layers,
  BarChart3,
  Building2,
} from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "What is TechSahayata?",
    answer:
      "TechSahayata is a technology solutions company offering services in website development, mobile app development, custom software engineering, artificial intelligence (AI), and robotic process automation (RPA). We help businesses streamline operations, improve efficiency, and grow through digital innovation.",
    icon: <Globe className="w-6 h-6 text-[#097899]" />,
  },
  {
    question: "What services do you provide?",
    answer:
      "We provide end-to-end digital and software solutions, including Website Design & Development, Mobile App Development (Android, iOS & Cross-Platform), Custom Software Development, AI-Based Automation and Data Analytics, RPA Integration, Cloud Hosting, and IT Consulting.",
    icon: <Laptop className="w-6 h-6 text-[#097899]" />,
  },
  {
    question: "Do you provide customized solutions?",
    answer:
      "Yes. All our products and services are tailored to each client’s requirements, goals, and budget. We analyze your business needs and deliver technology solutions that produce measurable results.",
    icon: <Settings2 className="w-6 h-6 text-[#097899]" />,
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across healthcare, manufacturing, retail, finance, education, logistics, and IT services. Our adaptable solutions fit any business domain that needs digital transformation or automation.",
    icon: <Building2 className="w-6 h-6 text-[#097899]" />,
  },
  {
    question: "How long does it take to develop a project?",
    answer:
      "Project timelines depend on complexity and scope. A basic website may take 2–4 weeks, while a mobile app or custom software may take 6–12 weeks or more. We always provide a clear timeline after requirement analysis and keep clients updated throughout development.",
    icon: <Timer className="w-6 h-6 text-[#097899]" />,
  },
  {
    question: "What technologies do you use?",
    answer:
      "Our team uses the latest technologies, including Frontend: React, Angular, Vue.js; Backend: Node.js, PHP (Laravel), Python, .NET, Java; Mobile: Flutter, React Native, Kotlin, Swift; Database: MySQL, PostgreSQL, MongoDB; and AI/RPA Tools: Python, UiPath, Power Automate, Automation Anywhere.",
    icon: <Cpu className="w-6 h-6 text-[#097899]" />,
  },
  {
    question: "Do you provide maintenance and support after project delivery?",
    answer:
      "Absolutely. We offer post-launch support, maintenance, and updates to ensure your application or website remains secure, efficient, and up to date.",
    icon: <Wrench className="w-6 h-6 text-[#097899]" />,
  },
  {
    question: "Can you integrate AI or automation into existing systems?",
    answer:
      "Yes, our experts can integrate AI and RPA modules into your current systems without disrupting existing workflows — enhancing speed, accuracy, and business intelligence.",
    icon: <Layers className="w-6 h-6 text-[#097899]" />,
  },
  {
    question: "How do you ensure data privacy and security?",
    answer:
      "We follow strict data protection standards including encryption, secure servers, and role-based access controls. All projects comply with industry best practices to protect sensitive data.",
    icon: <Shield className="w-6 h-6 text-[#097899]" />,
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing based on project scope and complexity. Models include: Fixed Cost – for clearly defined projects; Time & Material – for evolving requirements; Dedicated Resource – for long-term collaboration.",
    icon: <BarChart3 className="w-6 h-6 text-[#097899]" />,
  },
  {
    question: "How can I get started with TechSahayata?",
    answer:
      "You can reach out via our website or email: support@techsahayata.com. Once we understand your requirements, our team will schedule a consultation and provide a customized proposal.",
    icon: <Mail className="w-6 h-6 text-[#097899]" />,
  },
  {
    question: "Where is TechSahayata located?",
    answer:
      "Our main office is based in [Insert City, India], and we serve clients across India and globally through remote collaboration and cloud-based delivery.",
    icon: <Globe className="w-6 h-6 text-[#097899]" />,
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="w-full min-h-screen bg-[#f8fafd] font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#097899] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get clear answers to the most common questions about TechSahayata, our services, technologies, and processes.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center space-x-3">
                  {faq.icon}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#e0f3f8] to-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is ready to assist you with more details or a project consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[#097899] hover:bg-[#2a97bf] text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
              >
                Contact Support
              </Link>
              <Link
                href="/demo"
                className="inline-block bg-white hover:bg-gray-50 text-[#097899] px-6 py-3 rounded-xl font-semibold border border-[#097899] transition duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

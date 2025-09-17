"use client";

import React, { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const FaQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "How can I join the Student Technical Council?",
      answer:
        "Students can join through our participation model starting with event participation, open calls, and volunteer opportunities. Visit our Participation page to learn about the growth pathway.",
    },
    {
      question: "Which wing should I choose - DISHA, ARTHNITI, or TATVA?",
      answer:
        "Choose based on your interests: DISHA for career development, ARTHNITI for entrepreneurship, or TATVA for technology. You can also participate in multiple wings based on your interests and availability.",
    },
    {
      question: "How can companies collaborate with Student Technical Council?",
      answer:
        "Companies can partner with us for recruitment, workshops, mentorship programs, and sponsorships. Contact our industry relations team at stc@iitp.ac.in for collaboration opportunities.",
    },
    {
      question: "What is the time commitment for participation?",
      answer:
        "Time commitment varies by role and level. Entry-level participation requires 2-4 hours per week, while leadership positions may require 8-12 hours per week. We value consistency over intensity.",
    },
  ];

  return (
    <div>
      <section className="py-20 min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-0">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight drop-shadow-sm">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-500 font-medium">
              Quick answers to common inquiries
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-${index}-content`;
              const btnId = `faq-${index}-btn`;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border border-gray-200 bg-white/80 shadow-md overflow-hidden transition-all duration-300 group ${isOpen ? 'ring-2 ring-blue-400/40' : ''}`}
                >
                  <button
                    id={btnId}
                    aria-controls={contentId}
                    aria-expanded={isOpen}
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-7 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 transition-colors duration-200 group-hover:bg-blue-50/60"
                    type="button"
                  >
                    <span className="text-lg sm:text-xl font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-700 group-focus-visible:text-blue-700">
                      {faq.question}
                    </span>
                    <span
                      className={`ml-4 flex-shrink-0 rounded-full bg-blue-100/60 p-1 transition-all duration-300 ${
                        isOpen ? "rotate-180 shadow-md" : "shadow"
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500 group-hover:text-blue-700 transition-colors duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`px-7 overflow-hidden transition-all duration-400 ease-in-out ${
                      isOpen ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                    }`}
                    style={{
                      transitionProperty: 'max-height, opacity, padding',
                    }}
                  >
                    <p className="text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaQ;

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
        "Companies can partner with us for recruitment, workshops, mentorship programs, and sponsorships. Contact our industry relations team at disha@iitp.ac.in for collaboration opportunities.",
    },
    {
      question: "What is the time commitment for participation?",
      answer:
        "Time commitment varies by role and level. Entry-level participation requires 2-4 hours per week, while leadership positions may require 8-12 hours per week. We value consistency over intensity.",
    },
  ];

  return (
    <div>
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
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
                  className="bg-white p-6 rounded-lg border-2 border-gray-200"
                >
                  <button
                    id={btnId}
                    aria-controls={contentId}
                    aria-expanded={isOpen}
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-start justify-between gap-4"
                    type="button"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      {faq.question}
                    </h3>

                    <span
                      className={`ml-4 transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      {/* simple chevron */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
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

                  {/* Answer area */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`mt-3 text-gray-500 transition-all duration-200 ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <p>{faq.answer}</p>
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

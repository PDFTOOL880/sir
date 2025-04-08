'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4" dir="auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800"
        >
          <button
            className="w-full px-6 py-4 text-right bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 flex justify-between items-center focus:outline-none text-gray-900 dark:text-white transition-colors duration-200"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium text-lg">{faq.question}</span>
            <span className={`transform transition-transform duration-200 ${
              openIndex === index ? 'rotate-180' : ''
            }`}>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            className={`transition-all duration-200 ${
              openIndex === index
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50">
              <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
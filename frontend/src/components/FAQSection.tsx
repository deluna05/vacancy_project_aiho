"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How does the AI matching work?",
    answer:
      "Our AI analyzes your resume content, skills, and experience to match you with the most relevant job positions. It considers factors like your technical skills, career level, and preferences.",
  },
  {
    question: "Is my resume data secure?",
    answer:
      "Yes, we use enterprise-grade security to protect your data. Your resume is encrypted and only used for job matching purposes.",
  },
  {
    question: "How accurate are the job matches?",
    answer:
      "Our AI has a 95% accuracy rate in matching candidates with suitable positions. The more detailed your resume, the better the matches.",
  },
  {
    question: "Can I apply to jobs directly through the platform?",
    answer:
      "Yes, you can apply to jobs with one click using your uploaded resume and profile information.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full mx-auto py-20 px-4">
      <h1 className="text-4xl text-center mb-10 text-black">Frequently Asked Questions</h1>
      <div className="divide-y divide-gray-200 bg-white w-full">
        {faqs.map((faq, idx) => (
          <div key={idx} className="w-full">
            <button
              className="w-full flex justify-between items-center py-6 px-8 text-left focus:outline-none text-lg md:text-xl font-semibold text-gray-900 hover:bg-gray-50 transition-all"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span
                className={`w-full text-left block ${
                  openIndex === idx
                    ? "underline text-gray-900 cursor-pointer"
                    : "font-semibold"
                }`}
              >
                {faq.question}
              </span>
              <span className="ml-4 flex-shrink-0">{openIndex === idx ? "▲" : "▼"}</span>
            </button>
            {openIndex === idx && (
              <div className="pb-6 px-8 text-gray-900 text-base md:text-xl w-full">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
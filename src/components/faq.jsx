"use client"
import { useState } from "react";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, PayPal, and secure online payment gateways.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-7 business days depending on your location.",
  },
  {
    question: "Can I return or exchange an item?",
    answer:
      "Yes! We offer a 30-day return/exchange policy on most products. Conditions apply.",
  },
  {
    question: "Do you provide international shipping?",
    answer:
      "Currently, we ship within our country only, but international shipping will be available soon.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email to track your package.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 md:mb-12 md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-lg border-slate-200 bg-slate-50"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center text-slate-900 font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-slate-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

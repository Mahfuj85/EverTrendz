import React, { useState } from "react";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is EverTrendz?",
      answer:
        "EverTrendz is your one-stop shop for the latest and trendiest products across multiple categories, including electronics, home decor, and more.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Simply browse our product collection, add items to your cart, and proceed to checkout. Follow the prompts to complete your purchase.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept a variety of payment methods, including credit/debit cards, PayPal, and other secure online payment options.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, once your order is shipped, you'll receive a tracking number via email to monitor your order's status.",
    },
    {
      question: "What is the return policy?",
      answer:
        "We offer a hassle-free 30-day return policy for most items. Ensure the product is in its original condition and packaging when returning.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@evertrendz.com or through the contact form on our website.",
    },
  ];

  return (
    <div className="container ">
      <div className="my-10 p-8 bg-gray-50 text-gray-700 w-[700px] mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-rose-500">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <span>
                {activeIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 15l6-6 6 6" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9l-6 6-6-6" />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Faqs;

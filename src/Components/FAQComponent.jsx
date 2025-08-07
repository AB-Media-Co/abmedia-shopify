import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you support Shopify Plus & Headless?",
      answer: "Yes, we fully support Shopify Plus and headless commerce solutions. We use Hydrogen for frontend development and deploy on Oxygen or Vercel for optimal performance and scalability."
    },
    {
      question: "Can you help migrate from Magento/WooCommerce?",
      answer: "Absolutely! We specialize in seamless migrations from Magento, WooCommerce, and other platforms to Shopify. Our team handles data migration, design recreation, and functionality preservation to ensure a smooth transition with minimal downtime."
    },
    {
      question: "Do you work with international brands?",
      answer: "Yes, we work with brands globally across multiple markets and time zones. Our experience includes multi-currency setups, international shipping configurations, localization, and compliance with various regional regulations."
    },
    {
      question: "Do you handle all aspects of my store, or will I need to work with other agencies?",
      answer: "We provide comprehensive e-commerce solutions including design, development, optimization, marketing integrations, and ongoing support. Most clients work exclusively with us, though we're happy to collaborate with your existing teams when needed."
    },
    {
      question: "How do I update my billing information?",
      answer: "You can update your billing information through your client portal, or by contacting our support team directly. We accept all major payment methods and can accommodate various billing cycles to suit your business needs."
    }
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="max-w-7xl w-full flex-col md:flex-row flex gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center text-center md:text-start  items-center md:items-start">
          <h1 className="text-white text-[24px] md:text-6xl font-semibold mb-2 md:mb-4">
            Frequently Asked<br className='md:block hidden' /> Question
          </h1>
          <p className="text-gray-400 text-sm md:text-xl">
            Trusted in more than 100 Brands and 4<br />million customers.
          </p>
        </div>

        {/* Right Section - FAQ Items */}
        <div className="flex-1 bg-[#6B728038] rounded-lg p-6">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full cursor-pointer flex items-center justify-between py-4 text-left focus:outline-none hover:bg-gray-750 transition-colors duration-200 group"
                >
                  <span className="text-white text-lg font-medium pr-4 group-hover:text-gray-200 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-400 transition-transform duration-300 ease-in-out group-hover:text-gray-300 ${
                        openIndex === index ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100 pb-4' 
                      : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <div className="transform transition-transform duration-300 ease-in-out">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
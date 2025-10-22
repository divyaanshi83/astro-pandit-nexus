import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Q1. श्री राम ज्योतिष सदन में कौन-कौन सी पूजाएँ कराई जाती हैं?",
    answer: "श्री राम ज्योतिष सदन में आपकी समस्या के अनुसार सभी प्रकार की वैदिक पूजा-अनुष्ठान कराए जाते हैं। चाहे कुंडली दोष निवारण हो, ग्रह शांति, पितृ दोष, कालसर्प दोष, विवाह में बाधा या फिर विशेष अनुष्ठान – हमारे यहाँ हर पूजा योग्य आचार्यों द्वारा शास्त्रसम्मत विधि से सम्पन्न की जाती है।",
  },
  {
    question: "Q2. क्या पूजा केवल ऑफलाइन ही कराई जाती है। या ऑनलाइन भी उपलब्ध है?",
    answer: "जी हाँ, हमारी सेवाएँ ऑनलाइन और ऑफलाइन दोनों माध्यमों से उपलब्ध हैं। यदि आप किसी कारणवश उपस्थित नहीं हो सकते, तो हमारे विद्वान पंडित जी आपकी जन्मतिथि, समय और गोत्र के आधार पर ऑनलाइन पूजा सम्पन्न करते हैं।",
  },
  {
    question: "Q3. पूजा सेवा की बुकिंग कैसे करें और खर्च कितना आता है?",
    answer: "आप सीधे फ़ोन या ईमेल के माध्यम से हमसे संपर्क कर सकते हैं। खर्च पूजा के प्रकार और अवधि पर निर्भर करता है, जिसकी पूरी जानकारी बुकिंग के समय दी जाती है।",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF9F0] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-900 mb-8 text-center">
          FAQ's
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-orange-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full text-left px-6 py-4 bg-orange-50 text-orange-900 font-semibold text-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-700 text-base leading-relaxed border-t border-orange-100">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

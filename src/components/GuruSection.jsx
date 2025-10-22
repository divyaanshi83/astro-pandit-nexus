import React from "react";

// ✅ Correct imports
import astrologer1 from "@/assets/astrologer1.jpg";
import astrologer2 from "@/assets/astrologer2.jpg";

const GurusSection = () => {
  return (
    <section className="mt-16 py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-playfair font-extrabold text-amber-800 mb-4 tracking-wide drop-shadow-sm">
            हमारे पूज्य गुरू एवं आदर्श
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            भारत के महान गुरू एवं पिताजी, जिनकी शिक्षाएँ और जीवन हमारे लिए प्रेरणा का स्रोत हैं।
          </p>
        </div>

        {/* Guru Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col rounded-3xl overflow-hidden shadow-xl bg-white border border-amber-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-400">
            {/* Image */}
            <div className="w-full bg-gradient-to-b from-white to-amber-50 p-4">
              <img
                src={astrologer1}
                alt="Pujya Pitaji Tikaram Ji"
                className="rounded-2xl w-full h-auto object-contain shadow-md"
              />
            </div>
            {/* Text */}
            <div className="p-8 text-center">
              <h3 className="text-3xl font-semibold text-amber-700 mb-3 underline decoration-amber-400 decoration-2 underline-offset-4">
                पूज्य पिताजी टीकाराम जी
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col rounded-3xl overflow-hidden shadow-xl bg-white border border-amber-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-400">
            {/* Image */}
            <div className="w-full bg-gradient-to-b from-white to-amber-50 p-4">
              <img
                src={astrologer2}
                alt="Shri 1008 Narayan Swami Ji Maharaj"
                className="rounded-2xl w-full h-auto object-contain shadow-md"
              />
            </div>
            {/* Text */}
            <div className="p-8 text-center">
              <h3 className="text-3xl font-semibold text-amber-700 mb-3 underline decoration-amber-400 decoration-2 underline-offset-4">
                श्री श्री 1008 नारायण स्वामी जी महाराज
              </h3>
            </div>
          </div>
        </div>

        {/* Decorative mantra */}
        <div className="mt-16 text-center">
          <p className="text-amber-700 font-semibold italic text-lg tracking-wide">
            "गुरु ब्रह्मा गुरु विष्णुः गुरु देवो महेश्वरः । गुरु साक्षात् परं ब्रह्म तस्मै श्री गुरवे नमः ॥"
          </p>
        </div>
      </div>
    </section>
  );
};

export default GurusSection;

import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
}

const AstrologyServices: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "सुख समृद्धि के उपाय",
      image: "/images/sukh-samridhi.jpg",
      description: "जानिए अपने जीवन में सुख और समृद्धि लाने के सरल उपाय।",
      link: "/sukh-samridhi",
    },
    {
      id: 2,
      title: "Maanglik दोष निवारण",
      image: "/images/maanglikDosh.jpg",
      description: "जानिए मंगलीक दोष के प्रभाव और निवारण के उपाय।",
      link: "/maanglik-dosh",
    },
    {
      id: 3,
      title: "कुंडली विश्लेषण",
      image: "/images/kundli.jpg",
      description: "आपकी कुंडली के अनुसार भविष्य और समाधान।",
      link: "/kundli-analysis",
    },
    {
      id: 4,
      title: "दशा विश्लेषण",
      image: "/images/dasha.jpg",
      description: "जानिए आपकी दशा और उसका जीवन पर प्रभाव।",
      link: "/dasha-analysis",
    },
    {
      id: 5,
      title: "जन्म रत्न सुझाव",
      image: "/images/gemstone.jpg",
      description: "आपकी कुंडली के अनुसार शुभ रत्न की सलाह।",
      link: "/gemstone-suggestion",
    },
    {
      id: 6,
      title: "विवाह योग विश्लेषण",
      image: "/images/marriage.jpg",
      description: "आपके विवाह के योग और उनके उपाय जानिए।",
      link: "/marriage-yog",
    },
    {
      id: 7,
      title: "पितृ दोष निवारण",
      image: "/images/pitruDosh.jpg",
      description: "पितृ दोष को दूर करने के प्रभावी उपाय।",
      link: "/pitru-dosh",
    },
    {
      id: 8,
      title: "संतान प्राप्ति उपाय",
      image: "/images/santan.jpg",
      description: "संतान प्राप्ति के लिए ज्योतिषीय उपाय।",
      link: "/santan-upay",
    },
    {
      id: 9,
      title: "व्यवसाय वृद्धि उपाय",
      image: "/images/business.jpg",
      description: "व्यवसाय में सफलता के लिए विशेष ज्योतिषीय उपाय।",
      link: "/business-upay",
    },
    {
      id: 10,
      title: "नजर उतारना / Evil Eye",
      image: "/images/evilEye.jpg",
      description: "नजर उतारने के प्रभावी उपाय।",
      link: "/evil-eye",
    },

  ];

  // Show 6 cards initially (3 rows if 3 cols per row)
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    if (visibleCount < services.length) {
      setVisibleCount((prev) => prev + 6); // Show 2 more rows (6 cards)
    } else {
      setVisibleCount(6); // Reset to initial view
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-orange-700 mb-4">
            ज्योतिष सेवाएं
          </h1>
          <p className="text-gray-700 text-lg mb-10">
            जीवन के हर क्षेत्र में मार्गदर्शन के लिए हमारी विशिष्ट ज्योतिष सेवाएं।
          </p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {services.slice(0, visibleCount).map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-lg rounded-2xl overflow-hidden border border-orange-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-2xl font-semibold text-orange-700 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-block px-5 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
                  >
                    और जानें →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <button
            onClick={handleViewMore}
            className="px-8 py-3 bg-orange-600 text-white rounded-full text-lg font-semibold hover:bg-orange-700 transition"
          >
            {visibleCount < services.length ? "🔽 View More" : "🔼 View Less"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AstrologyServices;

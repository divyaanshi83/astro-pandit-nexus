import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DashAnalysis: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image Placeholder */}
          <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-400 text-lg">
            Image coming soon
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-purple-700 mb-4">
              दशा विश्लेषण (Planetary Period Analysis)
            </h1>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                जन्मकुंडली में ग्रहों की दशा और अंतरदशा व्यक्ति के जीवन के विभिन्न पहलुओं को दर्शाती हैं। 
                प्रत्येक ग्रह की दशा में आने वाले समय का प्रभाव स्वास्थ्य, धन, विवाह, करियर, शिक्षा और मानसिक स्थिति पर पड़ता है।
              </p>

              <h2 className="text-2xl font-semibold mt-4">दशा का महत्व</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>व्यक्ति के जीवन की मुख्य घटनाएँ दशा के अनुसार घटित होती हैं।</li>
                <li>सकारात्मक दशा में कार्य सिद्धि और सफलता मिलती है।</li>
                <li>नकारात्मक दशा में स्वास्थ्य या वित्तीय बाधाएँ आ सकती हैं।</li>
                <li>दशा परिवर्तन के समय सावधानी और ज्योतिष परामर्श आवश्यक होता है।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">प्रमुख दशाएँ और उनके प्रभाव</h2>
              <p>
                नीचे प्रमुख ग्रहों की दशा और उनके जीवन पर प्रभाव दिए गए हैं:
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li><strong>सूर्य दशा:</strong> करियर, प्रतिष्ठा, स्वास्थ्य और पिता से संबंधित मामलों में लाभकारी।</li>
                <li><strong>चन्द्र दशा:</strong> मानसिक शांति, भावनाएँ, माता से सम्बन्ध और घर-परिवार में सुख।</li>
                <li><strong>मंगल दशा:</strong> साहस, ऊर्जा, वैवाहिक जीवन, परिश्रम और संघर्ष की दशा।</li>
                <li><strong>बुध दशा:</strong> शिक्षा, बुद्धि, संचार कौशल और छोटे व्यवसाय में लाभ।</li>
                <li><strong>गुरु दशा:</strong> धन, शिक्षा, धार्मिक कार्य, संतान सुख और सम्मान।</li>
                <li><strong>शुक्र दशा:</strong> प्रेम, विवाह, मनोरंजन, सुख-संपत्ति और सौंदर्य में वृद्धि।</li>
                <li><strong>शनि दशा:</strong> परिश्रम, कठिनाइयाँ, देरी, अनुभव और धैर्य की वृद्धि।</li>
                <li><strong>राहु दशा:</strong> आकस्मिक लाभ, विदेशी यात्रा, रहस्य और असामान्य घटनाएँ।</li>
                <li><strong>केतु दशा:</strong> अध्यात्म, वैराग्य, स्वास्थ्य संबंधी बदलाव और ज्ञान की ओर झुकाव।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">दशा से जुड़ी सावधानियाँ</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>दशा की गणना कुंडली के अनुसार ही करें।</li>
                <li>दशा परिवर्तन के समय महत्वपूर्ण निर्णय टालें।</li>
                <li>असंतुलित दशा में स्वास्थ्य और निवेश पर विशेष ध्यान दें।</li>
                <li>ज्योतिषीय उपाय और रत्न धारण से दशा के प्रभाव को नियंत्रित किया जा सकता है।</li>
              </ul>

              <p className="mt-6">
                🌟 <strong>नोट:</strong> दशा विश्लेषण हेतु जन्म तिथि, समय और स्थान बिल्कुल सही होना चाहिए।  
                ज्योतिष विशेषज्ञ की सलाह से ही उपाय और निर्णय लें।
              </p>

              <p className="mt-4">ॐ रां रामाय नम:  श्रीराम ज्योतिष सदन, पंडित आशु बहुगुणा, संपर्क सूत्र- 9760924411</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashAnalysis;

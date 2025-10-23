import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const KundaliAnalysis: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image Placeholder */}
          <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-400 text-lg">
            Image coming soon
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-green-700 mb-4">
              जन्मकुंडली विश्लेषण (Kundali Analysis)
            </h1>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                जन्मकुंडली व्यक्ति के जन्म समय, जन्म स्थान और जन्म तिथि के अनुसार ग्रहों की स्थिति दर्शाती है। 
                यह जीवन के प्रत्येक क्षेत्र में मार्गदर्शन प्रदान करती है - स्वास्थ्य, शिक्षा, करियर, विवाह, संतान और धन।
              </p>

              <h2 className="text-2xl font-semibold mt-4">जन्मकुंडली का महत्व</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>व्यक्ति के स्वभाव और प्रवृत्तियों का ज्ञान।</li>
                <li>सकारात्मक और नकारात्मक समय का पूर्वानुमान।</li>
                <li>जीवन में महत्वपूर्ण निर्णयों का मार्गदर्शन।</li>
                <li>ज्योतिषीय उपायों और रत्नों के चयन में सहायक।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">मुख्य ग्रह और उनके प्रभाव</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>सूर्य:</strong> स्वास्थ्य, प्रतिष्ठा, पिता, करियर और नेतृत्व।</li>
                <li><strong>चन्द्र:</strong> मानसिक शांति, माता, भावनाएँ और घर-परिवार।</li>
                <li><strong>मंगल:</strong> साहस, शक्ति, परिश्रम, विवाह और शत्रु।</li>
                <li><strong>बुध:</strong> शिक्षा, बुद्धि, संचार और व्यवसाय।</li>
                <li><strong>गुरु:</strong> धन, शिक्षा, धार्मिकता और संतान।</li>
                <li><strong>शुक्र:</strong> प्रेम, वैवाहिक सुख, कला और संपत्ति।</li>
                <li><strong>शनि:</strong> अनुभव, कठिनाई, परिश्रम और धैर्य।</li>
                <li><strong>राहु:</strong> आकस्मिक लाभ, यात्रा, रहस्य और अनियमित घटनाएँ।</li>
                <li><strong>केतु:</strong> अध्यात्म, वैराग्य, ज्ञान और स्वास्थ्य।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">जन्मकुंडली से लाभ</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>सटीक दशा और अंतरदशा का निर्धारण।</li>
                <li>सकारात्मक समय में महत्वपूर्ण कार्यों की योजना।</li>
                <li>नकारात्मक प्रभावों से बचाव के उपाय।</li>
                <li>संतान, स्वास्थ्य और संपत्ति के लिए उचित ज्योतिषीय उपाय।</li>
              </ul>

              <p className="mt-6">
                🌟 <strong>महत्वपूर्ण:</strong> जन्मकुंडली का विश्लेषण केवल योग्य ज्योतिषी से कराएँ।  
                सभी ग्रहों और उनके प्रभावों का सही निर्धारण जीवन की योजनाओं में मदद करता है।
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

export default KundaliAnalysis;

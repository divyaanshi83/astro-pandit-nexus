import React from "react";

const GemstoneSuggestions: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          
          <div className="mb-8">
          <img
            src="/images/gemstone.jpg" // 👈 directly from public/images/
            alt="Gemstone Suggestions"
            className="w-full h-auto"
          />
        </div>

          <div className="p-8">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-yellow-700 mb-4">
              राशि अनुसार रत्न और उनके लाभ
            </h1>

            {/* Full Content */}
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>राशि अनुसार रत्न धारण करने से व्यक्ति के जीवन में स्वास्थ्य, धन, शिक्षा, व्यवसाय, विवाह, संतान और मानसिक शांति में सुधार होता है। नीचे प्रत्येक राशि के लिए सुझाव दिए गए हैं:</p>

              <h2 className="text-2xl font-semibold mt-4">मेष (Aries) – 21 मार्च से 19 अप्रैल</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>माणिक्य (Ruby):</strong> करियर में उन्नति, आत्मविश्वास और जीवनसाथी के लिए शुभ।</li>
                <li><strong>लाल मूंगा:</strong> शत्रु नाश, साहस बढ़ाने और मानसिक शक्ति के लिए।</li>
                <li><strong>सुरक्षित धारण:</strong> मंगल के अनुकूल मंगलवार को पहनें। शरीर में अंगूठी या ताबीज रूप में।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">वृष (Taurus) – 20 अप्रैल से 20 मई</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>पीला पुखराज (Yellow Sapphire):</strong> शिक्षा, व्यवसाय और वैवाहिक जीवन में लाभ।</li>
                <li><strong>हिरा (Diamond):</strong> संपत्ति, सम्मान और वैवाहिक सुख के लिए।</li>
                <li><strong>सुरक्षित धारण:</strong> गुरुवार को सुबह पूजा कर पहनें।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">मिथुन (Gemini) – 21 मई से 20 जून</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>पन्ना (Emerald):</strong> बुद्धि, शिक्षा, संतान सुख और मानसिक संतुलन के लिए।</li>
                <li><strong>नीलम (Blue Sapphire):</strong> कर्क और मानसिक परेशानियों से मुक्ति।</li>
                <li><strong>सुरक्षित धारण:</strong> बुध ग्रह के अनुकूल बुधवार को सुबह पहनें।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">कर्क (Cancer) – 21 जून से 22 जुलाई</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>मोती (Pearl):</strong> मानसिक शांति, स्वास्थ्य और वैवाहिक सुख के लिए।</li>
                <li><strong>नीलम:</strong> शिक्षा और करियर में लाभ।</li>
                <li><strong>सुरक्षित धारण:</strong> सोमवार को चाँद के अनुकूल पहनें।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">सिंह (Leo) – 23 जुलाई से 22 अगस्त</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>माणिक्य (Ruby):</strong> स्वास्थ्य, सम्मान और करियर में लाभ।</li>
                <li><strong>पुखराज:</strong> शिक्षा और वैवाहिक जीवन में लाभ।</li>
                <li><strong>सुरक्षित धारण:</strong> रविवार को सूर्य के अनुकूल पहनें।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">कन्या (Virgo) – 23 अगस्त से 22 सितंबर</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>पन्ना (Emerald):</strong> बुद्धि, शिक्षा और करियर में वृद्धि।</li>
                <li><strong>नीलम:</strong> मानसिक संतुलन और शत्रु नाश।</li>
                <li><strong>सुरक्षित धारण:</strong> बुध के अनुकूल बुधवार को पहनें।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">तुला (Libra) – 23 सितंबर से 22 अक्टूबर</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>हीरा (Diamond):</strong> वैवाहिक सुख, व्यवसाय और संपत्ति में लाभ।</li>
                <li><strong>पुखराज:</strong> शिक्षा और करियर में उन्नति।</li>
                <li><strong>सुरक्षित धारण:</strong> शुक्रवार या गुरुवार को पहनें।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">वृश्चिक (Scorpio) – 23 अक्टूबर से 21 नवंबर</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>नीलम (Blue Sapphire):</strong> शत्रु नाश, मानसिक शक्ति और करियर में लाभ।</li>
                <li><strong>माणिक्य (Ruby):</strong> स्वास्थ्य और वैवाहिक सुख के लिए।</li>
                <li><strong>सुरक्षित धारण:</strong> शनिवार को शनि के अनुकूल पहनें।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">धनु (Sagittarius) – 22 नवंबर से 21 दिसंबर</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>पुखराज (Yellow Sapphire):</strong> शिक्षा, व्यवसाय और वैवाहिक जीवन में लाभ।</li>
                <li><strong>नीलम:</strong> मानसिक शांति और शिक्षा में वृद्धि।</li>
                <li><strong>सुरक्षित धारण:</strong> गुरुवार को पहनें।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">मकर (Capricorn) – 22 दिसंबर से 19 जनवरी</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>नीलम (Blue Sapphire):</strong> करियर, मानसिक शक्ति और धन लाभ के लिए।</li>
                <li><strong>पुखराज:</strong> शिक्षा और वैवाहिक सुख में लाभ।</li>
                <li><strong>सुरक्षित धारण:</strong> शनिवार को शनि के अनुकूल पहनें।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">कुंभ (Aquarius) – 20 जनवरी से 18 फरवरी</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>नीलम:</strong> मानसिक संतुलन और शत्रु नाश।</li>
                <li><strong>पुखराज:</strong> शिक्षा और करियर में लाभ।</li>
                <li><strong>सुरक्षित धारण:</strong> शनिवार या बुधवार को पहनें।</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-4">मीन (Pisces) – 19 फरवरी से 20 मार्च</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>मोती (Pearl):</strong> मानसिक शांति, स्वास्थ्य और वैवाहिक सुख।</li>
                <li><strong>नीलम:</strong> शिक्षा और करियर में लाभ।</li>
                <li><strong>सुरक्षित धारण:</strong> सोमवार को चाँद के अनुकूल पहनें।</li>
              </ul>

              <p className="mt-6">💠 <strong>महत्वपूर्ण:</strong> रत्न धारण करने से पूर्व अपने ज्योतिष विशेषज्ञ से परामर्श अवश्य करें। प्रत्येक व्यक्ति की कुंडली के अनुसार रत्न की गुणवत्ता, आकार और दिन का चुनाव अलग-अलग हो सकता है।</p>

              <p className="mt-4">ॐ रां रामाय नम:  श्रीराम ज्योतिष सदन, पंडित आशु बहुगुणा, संपर्क सूत्र- 9760924411</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GemstoneSuggestions;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function SiddhShaniYantra() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-700">
          सिद्ध शनि यन्त्र
        </h1>

        {/* Image Placeholder */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/yantras/siddhshaniyantra.jpg" // 📸 replace with your uploaded image
            alt="Siddh Shani Yantra"
            className="w-72 h-72 object-contain rounded-xl shadow-md"
          />
        </div>

        <p className="text-lg leading-relaxed text-justify mb-6">
          शास्त्रों में भगवान शनिदेव को न्याय का देवता कहा गया है। समस्त भगवानों में शनिदेव ही एक ऐसे देवता हैं, 
          जिनकी पूजा लोग आस्था से नहीं बल्कि डर से करते हैं। इसका मुख्य कारण यह है कि शनिदेव को न्यायाधीश का पद प्राप्त है। 
          शनि किसी भी कुंडली में सबसे लंबे समय तक प्रभावित करने वाले ग्रह माने जाते हैं। अगर आपकी कुंडली में शनि ग्रह सही 
          स्थान पर नहीं हो या आप पर शनि की साढ़े साती या ढैय्या चल रही है, तो आपको हर कार्य में असफलता की प्राप्ति होती है। 
          ऐसी स्थिति में शनि यंत्र स्थापित करने और प्रतिदिन इसकी पूजा करने से साढ़े साती व ढैय्या का प्रभाव कम हो जाता है।
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">
          शनि यंत्र के लाभ
        </h2>

        <ul className="list-disc list-inside text-lg space-y-2 mb-6">
          <li>इस यंत्र के द्वारा आपकी कुंडली में शनि ग्रह के दुष्प्रभाव को कम करता है।</li>
          <li>शनि यंत्र को अपने व्यापार या कार्यस्थल में स्थापित करने से व्यापार में वृद्धि होती है।</li>
          <li>इस यंत्र को अपने घर में स्थापित करने से समाज में मान-सम्मान बढ़ता है।</li>
          <li>शनि यंत्र के द्वारा जीवन में आ रही समस्त बाधाएं दूर हो जाती हैं।</li>
          <li>शनि यंत्र आपको शनि की साढ़े साती और ढैय्या के प्रकोप से भी बचाता है।</li>
        </ul>

        <p className="text-lg leading-relaxed text-justify mb-6">
          ऐसा माना जाता है कि शनि यंत्र उस स्थान को पवित्र करता है जहाँ इस यंत्र को स्थापित किया जाता है। 
          इस यंत्र को पश्चिम की ओर पूर्व दिशा में लगाना सर्वोत्तम माना गया है। 
          इस यंत्र को अपने घर या कारोबार में स्थापित करने से सकारात्मक ऊर्जा का संचार होता है। 
          इस यंत्र का सर्वोत्तम लाभ प्राप्त करने के लिए उचित स्थान पर स्थापित करना आवश्यक है। 
          गलत स्थान पर स्थापित करने से आपको इस यंत्र का लाभ प्राप्त नहीं होगा। 
          शनि यंत्र को कैसे और कहाँ स्थापित करें? इस यंत्र की अधिक जानकारी के लिए आप हमसे संपर्क कर सकते हैं।
        </p>

        <div className="text-center mt-8">
          <p className="text-lg font-semibold">ॐ रां रामाय नमः</p>
          <p className="mt-4">श्रीराम ज्योतिष सदन</p>
          <p>भारतीय वैदिक ज्योतिष और नवग्रह रत्न एवं मंत्र यंत्र तंत्र परामर्शदाता</p>
          <p>पंडित आशु बहुगुणा</p>
          <p>मोबाइल नं - 9760924411</p>
        </div>
      </div>
      <FloatingButtons />
      <Footer />
    </>
  );
}

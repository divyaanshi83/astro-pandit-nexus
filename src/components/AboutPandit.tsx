import { useState, useEffect, useRef } from "react";

// ✅ Import your Pandit Ji image
import panditImage from "@/assets/panditji.jpg";

export default function AboutPandit() {
  const [playVideo, setPlayVideo] = useState(false);
  const leftRef = useRef<HTMLDivElement>(null);
  const [leftHeight, setLeftHeight] = useState<number>(0);

  // Adjust left side height to match right content dynamically
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (leftRef.current) {
        setLeftHeight(leftRef.current.scrollHeight);
      }
    });

    if (leftRef.current) {
      resizeObserver.observe(leftRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#FFF9F0] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          
          {/* Left Side: Image + Video */}
          <div
            className="flex-1 flex flex-col justify-start gap-6"
            style={{ height: leftHeight || "auto" }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
              
              {/* Image takes 50-60% of left height */}
              <div className="flex-[0.55] overflow-hidden">
                <img
                  src={panditImage}
                  alt="Pandit Ashu Bahuguna"
                  className="w-full h-full object-cover rounded-t-2xl shadow-md"
                />
              </div>

              {/* Gap */}
              <div className="h-6"></div>

              {/* Video takes remaining space */}
              <div className="flex-[0.45] relative p-4">
                {!playVideo && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer rounded-xl"
                    onClick={() => setPlayVideo(true)}
                  >
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-black text-3xl font-bold">
                      ▶
                    </div>
                  </div>
                )}
                <iframe
                  className="w-full h-full rounded-xl shadow-md"
                  src={
                    playVideo
                      ? "https://www.youtube.com/embed/UVT-_JyEAYo?autoplay=1"
                      : "https://www.youtube.com/embed/UVT-_JyEAYo?rel=0&controls=1"
                  }
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div
            className="flex-1 space-y-6"
            ref={leftRef} // Use ref to measure height
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-orange-900">
              पंडित जी के बारे में
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to our Shri Ram Jyotish Sadan site. <br />
              A Consultation With The Best Astrologer In India Can Change Your Life For Good. <br />
              Benefits OF Astrology In Everyday Lives. <br />
              Only Astrologer In India Combining Science And Stars For Accurate Predictions. <br /><br />

              भारतीय ज्योतिष शास्त्र की दुनिया में पिछले 35 सालों से अपनी सेवा दे रहें। 
              पंडित आशु बहुगुणा मूल रूप से जिला मुज़फ़्फ़रनगर के निवासी हैं। इन्हें ग्रहों और नक्षत्रों का और ज्योतिष शास्त्र अंक ज्योतिष, मंत्र विद्या का बहुत अच्छे से ज्ञान है। 
              इसके अलावा, मंत्र अनुष्ठान में भी महारथ हासिल है। बता दें कि इन्होंने अपने ज्ञान से कई लोगों का उद्धार किया है। जिसकी वजह इनकी पहचान विश्वसनीय पंडित के रूप में हैं।<br /><br />

              श्रीराम ज्योतिष सदन. भारतीय वैदिक ज्योतिष और मंत्र विशेषज्ञ एवं रत्न परामँश दाता। आप जन्मकुंडली बनवाना, जन्मकुंडली दिखवाना, जन्मकुंडली मिलान करवाना, जन्मकुंडली के अनुसार नवग्रहो का उपाय जानना, मंत्रो के माध्यम से उपाय जानना, रत्नो के माध्यम से उपाय जानना, और आपकी शादी नही हो रही है, व्यवसाय मे सफलता नही मिल रही है, नोकरी मे सफलता नही हो रही है, और आप शत्रु से परेशान हैं, और आपके कामो में अड़चन आ रही है, और आपको धन संबंधी परेशानी है, और अन्य सभी प्रकार की समस्याओं के लिए संपर्क करें। हमारे यहाँ जन्मकुण्डली भी बनाई जाती है।<br /><br />

              ॐ रां रामाय नम:  श्रीराम ज्योतिष सदन, पंडित आशु बहुगुणा, संपर्क सूत्र- 9760924411- 
              भारत के सर्वश्रेष्ठ ज्योतिषी, मुज़फ़्फ़रनगर। उत्तर प्रदेश स्थित ज्योतिषी पंडित आशु बहुगुणा जी दुनिया भर में अपॉइंटमेंट आधारित ऑनलाइन परामर्श प्रदान करते हैं। वे मुंबई, पुणे, नागपुर, पटना, जयपुर, भुवनेश्वर, ओडिशा, गुवाहाटी, रायपुर, इंदौर, भोपाल और भारत के सभी प्रमुख शहरों में ज्योतिष परामर्श प्रदान करते हैं। उन्हें विवाह, रिश्ते, करियर, बच्चों, कानूनी मामलों और चिकित्सा से संबंधित मामलों में विशेषज्ञता प्राप्त है। पंडित आशु बहुगुणा ज्योतिष। सटीक भविष्यवाणियों और जीवन बदलने वाले मार्गदर्शन के लिए ज्योतिषी से बात करने के लिए परामर्श शुल्क का भुगतान करें और अपॉइंटमेंट लें। उन्होंने दुनिया भर में कई लोगों का जीवन बदला है।
            </p>

            <h2 className="text-2xl font-semibold text-orange-900 mt-6">
              Popular Services
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Vedic Astrology</li>
              <li>Horoscope Reading</li>
              <li>Business and Finance Astrology</li>
              <li>Medical Astrology</li>
              <li>Gemstone Astrology</li>
              <li>Panchang Bhavishya</li>
              <li>Navagraha Dosha Remedies</li>
              <li>Black Magic / Negative Energy Removal</li>
              <li>Why Trust Pandit Ashu Bahuguna</li>
              <li>Expert In Various Astrological Services</li>
            </ul>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Discover Your Future with Online Janam Kundli Report! <br />
              हम आपकी विशिष्ट आवश्यकताओं के अनुरूप निम्नलिखित प्रकार के परामर्श प्रदान करते हैं। <br />
              ज्योतिषी पंडित आशु बहुगुणा द्वारा परामर्श (Online Astrological Services) मोबाईल नं- +919760924411 - मुज़फ़्फ़रनगर UP
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

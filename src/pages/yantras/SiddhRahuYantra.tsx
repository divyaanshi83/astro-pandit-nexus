import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const SiddhRahuYantra = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            सिद्ध राहु यंत्र
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-200/40 to-gray-400/40">
            <img
              src="/images/yantras/siddh-rahu-yantra.jpg"
              alt="सिद्ध राहु यंत्र"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="text-muted-foreground text-center text-lg mt-6 max-w-3xl leading-relaxed space-y-4">
            <p>
              ज्योतिषशास्त्र के अनुसार शनि, राहु और केतु ग्रहों को पापी ग्रह माना गया है। 
              इन ग्रहों का किसी जातक की कुंडली में होना अक्सर अशुभ फल ही प्रदान करता है। 
              यदि किसी जातक की कुंडली में राहु अशुभ स्थान पर विराजमान है, तो यह मानसिक भय और 
              शारीरिक बीमारियों का कारण बन सकता है। पितृदोष या कालसर्पदोष के निवारण के लिए 
              राहु यंत्र का पूजन उत्तम माना गया है।
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">
              राहु यंत्र के लाभ
            </h2>

            <ul className="list-disc text-left inline-block space-y-2">
              <li>अनुसंधान, गोला बारूद से संबंधित कारोबार में लाभकारी।</li>
              <li>स्किन संबंधी समस्याएं, मानसिक पीड़ा, स्वप्न में मृत व्यक्तियों का दिखाई देना, और मन के दुर्व्यसन से राहत।</li>
              <li>कारोबार में सफलता, शत्रुओं का दमन और हर क्षेत्र में सफलता।</li>
              <li>आर्थिक नुकसान और कार्य में अचानक आने वाली बाधाएं दूर होती हैं।</li>
              <li>विदेशों में स्थायी रूप से बसने या कार्य करने में शुभ फल।</li>
              <li>इंजीनियर, वकील, शोधकर्ता, अविष्कारक, खोजकर्ता आदि को विशेष शुभ प्रभाव।</li>
              <li>विवाह विदेश में होने और विदेश में सेटल होने की संभावना बढ़ जाती है।</li>
            </ul>

            <p className="mt-4">
              राहु यंत्र को घर या कारोबार में स्थापित करने से जीवन की बाधाएं दूर होती हैं। 
              इसे पश्चिम की ओर पूर्व दिशा में लगाना सर्वोत्तम माना गया है। उचित स्थान पर स्थापना से ही पूर्ण लाभ प्राप्त होता है। 
              गलत स्थान पर लाभ नहीं मिलेगा। अधिक जानकारी के लिए संपर्क करें।
            </p>

            <div className="text-center mt-6">
              <p className="text-xl font-bold text-primary">ॐ रां रामाय नमः</p>
              <p>श्रीराम ज्योतिष सदन</p>
              <p>भारतीय वैदिक ज्योतिष और नवग्रह रत्न एवं मंत्र यंत्र तंत्र परामर्शदाता</p>
              <p>पंडित आशु बहुगुणा</p>
              <p>मोबाइल नं- 9760924411</p>
            </div>
          </div>

          <p className="text-2xl font-semibold text-primary mt-8">₹1,299</p>

          <Button
            className="mt-6"
            onClick={() =>
              window.open(
                `https://wa.me/919760924411?text=${encodeURIComponent(
                  "मैं सिद्ध राहु यंत्र खरीदना चाहता/चाहती हूँ।"
                )}`,
                "_blank"
              )
            }
          >
            अभी खरीदें (Buy Now)
          </Button>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default SiddhRahuYantra;

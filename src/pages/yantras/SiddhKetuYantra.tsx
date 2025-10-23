import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const SiddhKetuYantra = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            सिद्ध केतु यंत्र
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-100/40 to-indigo-100/40">
            <img
              src="/images/yantras/siddh-ketu-yantra.jpg"
              alt="सिद्ध केतु यंत्र"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="text-muted-foreground text-center text-lg mt-6 max-w-3xl leading-relaxed space-y-4">
            <p>
              केतु एक ऐसा ग्रह है जिसमें अच्छे और बुरे दोनों गुण निहित हैं। 
              केतु अध्यात्म की ओर आकर्षित करता है और कभी-कभी निराशा व अंदरूनी भय भी उत्पन्न करता है। 
              कुंडली में केतु के अशुभ फल देने पर जातक को मानसिक और शारीरिक परेशानियाँ आती हैं। 
              छाया ग्रह केतु के कुप्रभाव को कम करने के लिए केतु यंत्र अत्यंत लाभकारी है।
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">
              केतु यंत्र के लाभ
            </h2>

            <ul className="list-disc text-left inline-block space-y-2">
              <li>जीवन के सभी पहलुओं में सफलता पाने में मदद करता है।</li>
              <li>शत्रुओं और नकारात्मक ऊर्जाओं पर विजय दिलाता है।</li>
              <li>सकारात्मक शक्ति और आत्मविश्वास बढ़ाता है।</li>
              <li>जीवन में सुख-शांति लाता है।</li>
              <li>कुंडली में केतु के अशुभ प्रभाव को कम करता है।</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">
              कैसे करें प्रयोग
            </h2>

            <ul className="list-disc text-left inline-block space-y-2">
              <li>किसी भी शुभ मुहूर्त में घर के पूजन स्थल पर स्थापना करें।</li>
              <li>स्थापना के बाद धूप और दीप जलाएं।</li>
              <li>घर में स्थापना से सदस्यों का आत्मविश्वास बढ़ता है।</li>
              <li>इस यंत्र की पूजा से सफलता के मार्ग प्रशस्त होते हैं।</li>
              <li>करियर और व्यापार में वृद्धि होती है।</li>
              <li>जीवन में केतु से संबंधित सभी परेशानियां दूर होती हैं।</li>
            </ul>

            <p className="mt-4">
              ऐसा माना जाता है कि केतु यंत्र उस स्थान को पवित्र करता है जहाँ इसे स्थापित किया जाता है। 
              इसे पश्चिम की ओर पूर्व दिशा में लगाना सर्वोत्तम माना गया है। 
              उचित स्थान पर स्थापना से ही पूर्ण लाभ मिलता है। गलत स्थान पर लाभ नहीं मिलेगा। 
              अधिक जानकारी के लिए संपर्क करें।
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
                  "मैं सिद्ध केतु यंत्र खरीदना चाहता/चाहती हूँ।"
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

export default SiddhKetuYantra;

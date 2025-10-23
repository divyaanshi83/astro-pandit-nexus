import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const KuberYantra = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            सिद्ध भगवान कुबेर यंत्र
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-green-100/40 to-yellow-100/40">
            <img
              src="/images/yantras/kuber-yantra.jpg"
              alt="सिद्ध कुबेर यंत्र"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="text-muted-foreground text-center text-lg mt-6 max-w-3xl leading-relaxed space-y-4">
            <p>
              कुबेर यंत्र धन और समृद्धि के लिए अत्यंत प्रभावशाली है। इसे स्थापित करने से धन आगमन के मार्ग प्रशस्त होते हैं और व्यापारियों के लिए आय में वृद्धि होती है। 
              यह यंत्र करियर और वित्तीय समस्याओं को दूर करने में सहायक होता है।
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">
              कुबेर यंत्र के लाभ
            </h2>

            <ul className="list-disc text-left inline-block space-y-2">
              <li>धन आगमन के मार्ग प्रशस्त होते हैं।</li>
              <li>व्यापार और आय में वृद्धि।</li>
              <li>करियर वृद्धि में सहायता।</li>
              <li>धन से जुड़ी समस्याओं का निवारण।</li>
              <li>स्थापित स्थान पवित्र और सकारात्मक ऊर्जा का केंद्र बनता है।</li>
            </ul>

            <p className="mt-4">
              सर्वोत्तम लाभ के लिए उचित दिशा और स्थान पर स्थापना आवश्यक है। गलत स्थान पर यंत्र का लाभ नहीं मिलेगा। अधिक जानकारी के लिए हमसे संपर्क करें।
            </p>

            <div className="text-center mt-6">
              <p className="text-xl font-bold text-primary">ॐ रां रामाय नमः</p>
              <p>श्रीराम ज्योतिष सदन</p>
              <p>भारतीय वैदिक ज्योतिष और नवग्रह रत्न एवं मंत्र यंत्र तंत्र परामर्शदाता</p>
              <p>पंडित आशु बहुगुणा</p>
              <p>मोबाइल नं- 9760924411</p>
            </div>
          </div>

          <p className="text-2xl font-semibold text-primary mt-8">₹999</p>

          <Button
            className="mt-6"
            onClick={() =>
              window.open(
                `https://wa.me/919760924411?text=${encodeURIComponent(
                  "मैं सिद्ध कुबेर यंत्र खरीदना चाहता/चाहती हूँ।"
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

export default KuberYantra;

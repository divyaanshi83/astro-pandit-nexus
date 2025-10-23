import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const NavgrahaYantra = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            सिद्ध नवग्रह यंत्र
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-yellow-100/40 to-orange-100/40">
            <img
              src="/images/yantras/navagraha-yantra.jpg"
              alt="सिद्ध नवग्रह यंत्र"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="text-muted-foreground text-center text-lg mt-6 max-w-3xl leading-relaxed space-y-4">
            <p>
              वैदिक ज्योतिष के अनुसार मनुष्य के भाग्य को सबसे ज्यादा प्रभावित उसकी कुंडली में मौजूद ग्रह करते हैं। 
              यदि कुंडली में कोई ग्रह अपने उचित दशा में नहीं है, तो जातक को सफलता प्राप्ति में कई कठिनाइयों का सामना करना पड़ता है। 
              सम्पूर्ण नवग्रह यंत्र की स्थापना से कुंडली में दोष के प्रभाव कम होने लगते हैं। नवग्रहों में सबसे प्रभावशाली ग्रह मंगल, बुध, बृहस्पति, शुक्र, शनि, सूर्य, चंद्रमा, राहु और केतु माने जाते हैं।
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">
              सम्पूर्ण नवग्रह यंत्र के लाभ
            </h2>

            <ul className="list-disc text-left inline-block space-y-2">
              <li>ग्रहों का दोष शांत होता है।</li>
              <li>अशुभ ग्रहों के अशुभ फलों को दूर करने में मदद करता है।</li>
              <li>भाग्य, सुख-समृद्धि और नए अवसर प्रदान करता है।</li>
              <li>स्वास्थ्य संबंधी परेशानियों और ऋण में राहत देता है।</li>
              <li>स्थापित स्थान को पवित्र और सकारात्मक ऊर्जा का केंद्र बनाता है।</li>
            </ul>

            <p className="mt-4">
              सर्वोत्तम लाभ प्राप्त करने के लिए उचित दिशा और स्थान पर स्थापना आवश्यक है। 
              गलत स्थान पर लाभ नहीं मिलेगा। अधिक जानकारी के लिए हमसे संपर्क करें।
            </p>

            <div className="text-center mt-6">
              <p className="text-xl font-bold text-primary">ॐ रां रामाय नमः</p>
              <p>श्रीराम ज्योतिष सदन</p>
              <p>भारतीय वैदिक ज्योतिष और नवग्रह रत्न एवं मंत्र यंत्र तंत्र परामर्शदाता</p>
              <p>पंडित आशु बहुगुणा</p>
              <p>मोबाइल नं- 9760924411</p>
            </div>
          </div>

          <p className="text-2xl font-semibold text-primary mt-8">₹1,499</p>

          <Button
            className="mt-6"
            onClick={() =>
              window.open(
                `https://wa.me/919760924411?text=${encodeURIComponent(
                  "मैं सिद्ध नवग्रह यंत्र खरीदना चाहता/चाहती हूँ।"
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

export default NavgrahaYantra;

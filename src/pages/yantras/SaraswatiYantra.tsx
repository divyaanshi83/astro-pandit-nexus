import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const SaraswatiYantra = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            सिद्ध सरस्वती यंत्र
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-indigo-100/40 to-purple-100/40">
            <img
              src="/images/yantras/saraswati-yantra.jpg"
              alt="सिद्ध सरस्वती यंत्र"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="text-muted-foreground text-center text-lg mt-6 max-w-3xl leading-relaxed space-y-4">
            <p>
              सरस्वती यंत्र ज्ञान, विद्या और बुद्धि को बढ़ाने के लिए अत्यंत प्रभावशाली है। 
              इसे स्थापित करने से शिक्षा, अध्ययन और करियर में सफलता मिलती है। 
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">
              सरस्वती यंत्र के लाभ
            </h2>

            <ul className="list-disc text-left inline-block space-y-2">
              <li>ज्ञान और शिक्षा में वृद्धि।</li>
              <li>ध्यान, स्मरण शक्ति और मानसिक स्पष्टता में सुधार।</li>
              <li>विद्यार्थियों और शोधकर्ताओं के लिए विशेष लाभकारी।</li>
              <li>स्थापित स्थान पवित्र और सकारात्मक ऊर्जा का केंद्र बनता है।</li>
              <li>करियर और व्यवसाय में सफलता और प्रेरणा।</li>
            </ul>

            <p className="mt-4">
              सर्वोत्तम लाभ के लिए उचित दिशा और स्थान पर स्थापना आवश्यक है। 
              गलत स्थान पर यंत्र का लाभ नहीं मिलेगा। अधिक जानकारी के लिए हमसे संपर्क करें।
            </p>

            <div className="text-center mt-6">
              <p className="text-xl font-bold text-primary">ॐ रां रामाय नमः</p>
              <p>श्रीराम ज्योतिष सदन</p>
              <p>भारतीय वैदिक ज्योतिष और नवग्रह रत्न एवं मंत्र यंत्र तंत्र परामर्शदाता</p>
              <p>पंडित आशु बहुगुणा</p>
              <p>मोबाइल नं- 9760924411</p>
            </div>
          </div>

          <p className="text-2xl font-semibold text-primary mt-8">₹799</p>

          <Button
            className="mt-6"
            onClick={() =>
              window.open(
                `https://wa.me/919760924411?text=${encodeURIComponent(
                  "मैं सिद्ध सरस्वती यंत्र खरीदना चाहता/चाहती हूँ।"
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

export default SaraswatiYantra;

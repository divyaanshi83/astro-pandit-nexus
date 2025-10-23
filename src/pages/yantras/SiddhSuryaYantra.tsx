import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const SiddSuryaYantra = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            सिद्ध सूर्य यन्त्र
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10">
            <img
              src="/images/yantras/sidd-surya-yantra.jpg"
              alt="सिद्ध सूर्य यन्त्र"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="text-muted-foreground text-center text-lg mt-6 max-w-3xl leading-relaxed space-y-4">
            <p>
              हिन्दू धर्म में सूर्य देव ही एक ऐसे देवता हैं जिनके दर्शन मनुष्य रोज़ करता है। 
              सूर्य देव को नवग्रहों में से सबसे शक्तिशाली ग्रह माना गया है और सभी ग्रह इनकी परिक्रमा करते हैं।
            </p>

            <p>
              यदि किसी व्यक्ति की कुंडली में सूर्य अशुभ फल दे रहा है, तो उस व्यक्ति को हर क्षेत्र में असफलता ही प्राप्त होती है। 
              उसे न अपने काम में यश मिलता है, न मान-सम्मान। ऐसी स्थिति में सूर्य यंत्र को विधि-विधान से अपने घर या कारोबार में 
              स्थापित करने से इन सभी परेशानियों से निजात मिल जाती है।
            </p>

            <p>
              सूर्य यंत्र इच्छा शक्ति, ऊर्जा, बहादुरी, नेतृत्व और अधिकार का प्रतीक है।
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">
              सूर्य यंत्र के लाभ
            </h2>

            <ul className="list-disc text-left inline-block space-y-2">
              <li>घर में स्थापना करने से आत्मविश्वास में वृद्धि होती है।</li>
              <li>पूजा करने से सफलता के मार्ग प्रशस्त होते हैं।</li>
              <li>करियर और व्यापार में वृद्धि होती है।</li>
              <li>जीवन में सूर्य से संबंधित परेशानियाँ दूर होती हैं।</li>
              <li>जीवन में आ रही बाधाएँ समाप्त होती हैं।</li>
              <li>जहाँ यह यंत्र स्थापित होता है, वह स्थान पवित्र होता है।</li>
            </ul>

            <p className="mt-4">
              इस यंत्र को पश्चिम की ओर पूर्व दिशा में लगाना सर्वोत्तम माना गया है। 
              सूर्य यंत्र को अपने घर या कारोबार में स्थापित करने से सकारात्मक ऊर्जा का संचार होता है। 
              इसका सर्वोत्तम लाभ प्राप्त करने के लिए उचित स्थान पर स्थापित करना आवश्यक है।
            </p>

            <p>
              अधिक जानकारी के लिए आप संपर्क कर सकते हैं:  
              <br />
              <strong>पंडित आशु बहुगुणा</strong>  
              <br />
              श्रीराम ज्योतिष सदन  
              <br />
              📞 <strong>9760924411</strong>
            </p>

            <p className="text-xl font-bold text-primary mt-6">
              ॐ रां रामाय नमः
            </p>
          </div>

          <p className="text-2xl font-semibold text-primary mt-8">₹1,299</p>

          <Button
            className="mt-6"
            onClick={() =>
              window.open(
                `https://wa.me/919760924411?text=${encodeURIComponent(
                  "मैं सिद्ध सूर्य यन्त्र खरीदना चाहता/चाहती हूँ।"
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

export default SiddSuryaYantra;

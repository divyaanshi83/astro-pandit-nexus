import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const SiddhShukraYantra = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            सिद्ध शुक्र यंत्र
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-pink-100/40 to-rose-100/40">
            <img
              src="/images/yantras/siddh-shukra-yantra.jpg"
              alt="सिद्ध शुक्र यंत्र"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="text-muted-foreground text-center text-lg mt-6 max-w-3xl leading-relaxed space-y-4">
            <p>
              नवग्रह मंडल में शुक्र को मंत्री पद प्राप्त है। ज्योतिषशास्त्र के अनुसार, 
              शुक्र को स्त्री ग्रह माना गया है। जिन लोगों की कुंडली में शुक्र ग्रह स्वामी होता है 
              वे लोग सुंदर और आकर्षक होते हैं। शुक्र को पति-पत्नी, प्रेम संबंध, भोग-विलास, ऐश्वर्य 
              और आनंद का कारक माना जाता है।
            </p>

            <p>
              यदि किसी जातक की कुंडली में शुक्र की स्थिति अच्छी हो तो जातक का जीवन सुखमय होता है। 
              शुभ शुक्र से व्यक्ति को मकान, वाहन और विलासिता की वस्तुएं प्राप्त होती हैं। 
              अशुभ शुक्र से गुप्त रोग, वैवाहिक समस्याएं और मानसिक तनाव बढ़ सकता है। 
              ऐसे में शुक्र यंत्र की प्रतिष्ठा लाभकारी सिद्ध होती है।
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">
              सिद्ध शुक्र यंत्र के लाभ
            </h2>

            <ul className="list-disc text-left inline-block space-y-2">
              <li>कुंडली में शुक्र के अशुभ प्रभाव को कम करने में सहायक।</li>
              <li>सुखी और संपन्न जीवन जीने में सहायता करता है।</li>
              <li>रिश्तों में मजबूती और प्रेम में स्थिरता प्रदान करता है।</li>
              <li>मान-सम्मान, मानसिक शांति और कलात्मक सफलता देता है।</li>
              <li>ऑफिस में रखने से व्यापार और निर्णय शक्ति में वृद्धि होती है।</li>
              <li>प्रजनन या वैवाहिक समस्याओं में भी यह यंत्र फलदायी है।</li>
              <li>रचनात्मक और कलात्मक लोगों के लिए अत्यंत लाभदायक।</li>
              <li>गले, गुप्त रोगों, गर्भाशय या डायबिटीज संबंधी कष्टों में राहत देता है।</li>
            </ul>

            <p className="mt-4">
              शुक्र यंत्र को घर या ऑफिस में स्थापित करने से नकारात्मक ऊर्जा दूर होती है 
              और सकारात्मक शक्ति का संचार होता है। 
              इस यंत्र को पश्चिम की ओर पूर्व दिशा में लगाना सर्वोत्तम माना गया है। 
              उचित स्थान पर स्थापना करने से ही इसका पूर्ण लाभ मिलता है।
            </p>

            <p>
              अधिक जानकारी के लिए संपर्क करें:  
              <br />
              <strong>पंडित आशु बहुगुणा</strong>  
              <br />
              श्रीराम ज्योतिष सदन  
              <br />
              📞 <strong>9760924411</strong>
            </p>

            <p className="text-xl font-bold text-primary mt-6">
              ॐ शुक्राय नमः
            </p>
          </div>

          <p className="text-2xl font-semibold text-primary mt-8">₹1,199</p>

          <Button
            className="mt-6"
            onClick={() =>
              window.open(
                `https://wa.me/919760924411?text=${encodeURIComponent(
                  "मैं सिद्ध शुक्र यंत्र खरीदना चाहता/चाहती हूँ।"
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

export default SiddhShukraYantra;

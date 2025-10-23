import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const SiddhChandraYantra = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            सिद्ध चंद्र यन्त्र
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-100/40 to-indigo-100/40">
            <img
              src="/images/yantras/siddh-chandra-yantra.jpg"
              alt="सिद्ध चंद्र यन्त्र"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="text-muted-foreground text-center text-lg mt-6 max-w-3xl leading-relaxed space-y-4">
            <p>
              वैदिक ज्योतिष के अनुसार चंद्र यंत्र भगवान चंद्रमा को समर्पित होता है। 
              चंद्र देव को सोम के नाम से भी जाना जाता है, जिसका अर्थ अमृत होता है।
              चंद्र देव ऋषि अत्रि और अनुसूया के पुत्र हैं, और हिंदू धर्म में चंद्र देव को महत्वपूर्ण स्थान प्राप्त है।
            </p>

            <p>
              हिंदू शास्त्रों के अनुसार चंद्र भगवान मानव मन का प्रतिनिधित्व करते हैं, 
              साथ ही अवचेतन और जीवन शक्ति के दाता हैं। चंद्र देवता की किरणें शीतलता प्रदान करने वाली होती हैं।
              जिस व्यक्ति की कुंडली में चंद्र दोष होता है, उन्हें इस यंत्र को स्थापित करके पूजा करनी चाहिए।
            </p>

            <p>
              इस यंत्र की पूजा करने से चंद्र देव शीघ्र प्रसन्न होते हैं। 
              चंद्र यंत्र के साथ ही भगवान शंकर की भी पूजा करनी चाहिए क्योंकि चंद्रमा भगवान शिव के मस्तक पर विराजमान हैं।
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">
              चंद्र यंत्र के लाभ
            </h2>

            <ul className="list-disc text-left inline-block space-y-2">
              <li>घर में स्थापना करने से मान-सम्मान में वृद्धि होती है।</li>
              <li>चंद्रमा के अशुभ प्रभाव से बचने के लिए इसे घर या कार्यस्थल में स्थापित करें।</li>
              <li>पूजा करने से मन और मस्तिष्क को शांति मिलती है।</li>
              <li>नौकरी और व्यापार में सफलता प्राप्त होती है।</li>
              <li>जीवन में आ रही समस्त बाधाओं को यह यंत्र दूर करता है।</li>
              <li>जहाँ यह यंत्र स्थापित होता है, वह स्थान पवित्र होता है।</li>
            </ul>

            <p className="mt-4">
              इस यंत्र को पश्चिम की ओर पूर्व दिशा में लगाना सर्वोत्तम माना गया है। 
              चंद्र यंत्र को अपने घर या कारोबार में स्थापित करने से सकारात्मक ऊर्जा का संचार होता है। 
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
              ॐ सोम सोमाय नमः
            </p>
          </div>

          <p className="text-2xl font-semibold text-primary mt-8">₹1,199</p>

          <Button
            className="mt-6"
            onClick={() =>
              window.open(
                `https://wa.me/919760924411?text=${encodeURIComponent(
                  "मैं सिद्ध चंद्र यन्त्र खरीदना चाहता/चाहती हूँ।"
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

export default SiddhChandraYantra;

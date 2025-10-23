import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const SiddhBrihaspatiYantra = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            सिद्ध बृहस्पति यन्त्र
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-yellow-100/40 to-amber-100/40">
            <img
              src="/images/yantras/siddh-brihaspati-yantra.jpg"
              alt="सिद्ध बृहस्पति यन्त्र"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="text-muted-foreground text-center text-lg mt-6 max-w-3xl leading-relaxed space-y-4">
            <p>
              ज्योतिष के अनुसार बृहस्पति को नवग्रहों में सबसे बड़ा ग्रह माना गया है। 
              ज्योतिषीय दृष्टि से भी गुरु एक ताकतवर या सबसे उदार ग्रह है। 
              देवगुरू बृहस्पति को दार्शनिक और आध्यात्मिक ज्ञान को निर्देशित करने वाला उत्तम ग्रह माना गया है।
            </p>

            <p>
              गुरुवार का दिन देवगुरु बृहस्पति को समर्पित होता है और इनकी कृपा से 
              धन-समृद्धि, पुत्र और शिक्षा की प्राप्ति होती है। साथ ही पीला रंग और पीली वस्तुएं 
              इन्हें अत्यंत प्रिय हैं। देवगुरू बृहस्पति नवग्रहों के नायक और ज्ञान एवं वाग्मिता के देवता माने जाते हैं।
            </p>

            <p>
              बृहस्पति यंत्र का प्रयोग करने से बृहस्पति ग्रह के अशुभ प्रभावों को कम किया जा सकता है।
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-2">
              बृहस्पति यंत्र के लाभ
            </h2>

            <ul className="list-disc text-left inline-block space-y-2">
              <li>
                इस यंत्र को अपने घर या कारोबार में स्थापित करने से बृहस्पति ग्रह के दुष्प्रभाव को कम करने में सहायता मिलती है।
              </li>
              <li>यह यंत्र आपको धन और सम्पत्ति में लाभ देता है।</li>
              <li>घर में स्थापना करने से ज्ञान में वृद्धि होती है।</li>
              <li>यह यंत्र आपके जीवन में आ रही बाधाओं को दूर करता है।</li>
              <li>इससे संतान, धन, सत्ता, पद और अधिकार की प्राप्ति होती है।</li>
              <li>जहाँ यह यंत्र स्थापित होता है, वह स्थान पवित्र हो जाता है।</li>
            </ul>

            <p className="mt-4">
              इस यंत्र को पश्चिम की ओर पूर्व दिशा में लगाना सर्वोत्तम माना गया है। 
              बृहस्पति यंत्र को अपने घर या कारोबार में स्थापित करने से सकारात्मक ऊर्जा का संचार होता है। 
              सर्वोत्तम लाभ प्राप्त करने के लिए इसे उचित स्थान पर स्थापित करना आवश्यक है।
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
              ॐ बृं बृहस्पतये नमः
            </p>
          </div>

          <p className="text-2xl font-semibold text-primary mt-8">₹1,299</p>

          <Button
            className="mt-6"
            onClick={() =>
              window.open(
                `https://wa.me/919760924411?text=${encodeURIComponent(
                  "मैं सिद्ध बृहस्पति यन्त्र खरीदना चाहता/चाहती हूँ।"
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

export default SiddhBrihaspatiYantra;

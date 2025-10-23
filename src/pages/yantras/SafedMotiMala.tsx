import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const SafedMotiMala = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            मोती की माला
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10">
            <img
              src="/images/malas/safed-moti-mala.jpg"
              alt="Safed Moti Ki Mala"
              className="object-contain w-full h-full"
            />
          </div>

          <p className="text-muted-foreground text-center text-lg mt-6 max-w-2xl">
            ज्योतिष शास्त्र में मोती की माला को एक महत्वपूर्ण माना गया है। मोती की माला का संबंध चंद्रमा से है। जिन लोगों का चंद्रमा अशुभ या कमजोर होता है, उन्हें मोती की माला धारण करने की सलाह दी जाती है। मोती की माला पहनने से मन मजबूत और दिमाग तेज होता है, साथ ही चंद्रमा की समस्याओं को शांत किया जा सकता है।
          </p>

          <p className="text-muted-foreground text-center text-lg mt-4 max-w-2xl">
            लक्ष्मी जी को प्रिय है। मोती मान्यता के अनुसार लक्ष्मी जी को बहुत प्रिय है। मोती की माला पहनने से लक्ष्मी जी की विशेष कृपा प्राप्त होती है। जिन लोगों के जीवन में धन की कमी या इससे जुड़ी कोई परेशानी बनी हुई है, उन्हें मोती की माला धारण करना चाहिए।
          </p>

          <p className="text-muted-foreground text-center text-lg mt-4 max-w-2xl">
            मोती की माला पहनने के फायदे: 
            गोल मोती की माला पहनना सबसे उत्तम माना गया है। मोती का संबंध चंद्रमा से है। मोती को उंगली में भी धारण किया जा सकता है, विशेष रूप से दाहिने हाथ की कनिष्ठा उंगली में। चांदी के साथ मोती को धारण करना सर्वोत्तम माना गया है। यह माला क्रोध को कम करती है, मन को स्थिर बनाती है और अज्ञात भय को दूर करती है।
          </p>

          <p className="text-2xl font-semibold text-primary mt-4">
            ₹1,499
          </p>

          <Button
            className="mt-6"
            onClick={() =>
              window.open(
                `https://wa.me/919760924411?text=I want to purchase Safed Moti Ki Mala`,
                "_blank"
              )
            }
          >
            Buy Now
          </Button>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default SafedMotiMala;

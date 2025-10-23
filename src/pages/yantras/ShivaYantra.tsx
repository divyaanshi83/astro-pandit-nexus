import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const ShivaYantra = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            सिद्ध शिव यन्त्र
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10">
            <img
              src="/images/yantras/shiva-yantra.jpg"
              alt="Shiva Yantra"
              className="object-contain w-full h-full"
            />
          </div>

          <p className="text-muted-foreground text-center text-lg mt-6 max-w-2xl">
            शिव यंत्र का उपयोग जीवन में आध्यात्मिक शक्ति, ध्यान और मानसिक शांति प्राप्त करने के लिए किया जाता है। यह यंत्र नकारात्मक ऊर्जा को दूर करता है और सकारात्मक ऊर्जा का संचार करता है। शिव यंत्र के माध्यम से जीवन में आध्यात्मिक उन्नति, मानसिक स्थिरता और संकटों से मुक्ति मिलती है। 
          </p>

          <p className="text-2xl font-semibold text-primary mt-4">
            ₹1,199
          </p>

          <Button
            className="mt-6"
            onClick={() =>
              window.open(
                `https://wa.me/919760924411?text=I want to purchase Shiva Yantra`,
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

export default ShivaYantra;

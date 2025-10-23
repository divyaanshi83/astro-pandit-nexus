import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const RudrakshMala = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            रुद्राक्ष की माला
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10">
            <img
              src="/images/malas/rudraksh-mala.jpg"
              alt="Rudraksh Mala"
              className="object-contain w-full h-full"
            />
          </div>

          <p className="text-muted-foreground text-center text-lg mt-6 max-w-2xl">
            रुद्राक्ष माला पहनने से व्यक्ति की ऊर्जा का एक सुरक्षा कवच बनता है। यह माला उन लोगों के लिए विशेष रूप से लाभकारी है जो अक्सर यात्रा करते हैं या विभिन्न जगहों पर रहते हैं। इससे नींद, मानसिक स्थिरता और सकारात्मक ऊर्जा प्राप्त होती है।
          </p>

          <p className="text-muted-foreground text-center text-lg mt-4 max-w-2xl">
            रुद्राक्ष माला नकारात्मक ऊर्जाओं के खिलाफ एक कवच की तरह काम करती है। यह नकारात्मक प्रभावों से सुरक्षा प्रदान करती है और व्यक्ति को मानसिक एवं शारीरिक रूप से संतुलित बनाती है। 
          </p>

          <p className="text-2xl font-semibold text-primary mt-4">
            ₹799
          </p>

          <Button
            className="mt-6"
            onClick={() =>
              window.open(
                `https://wa.me/919760924411?text=I want to purchase Rudraksh Mala`,
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

export default RudrakshMala;

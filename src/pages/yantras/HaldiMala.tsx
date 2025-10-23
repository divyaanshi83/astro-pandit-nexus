import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";

const HaldiMala = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            हल्दी की माला
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-md w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10">
            <img
              src="/images/malas/haldi-mala.jpg"
              alt="Haldi Mala"
              className="object-contain w-full h-full"
            />
          </div>

          <p className="text-muted-foreground text-center text-lg mt-6 max-w-2xl">
            हल्दी की माला धारण करने से बुरा समय कटता है और यह धन, सम्मान और वैवाहिक सुख प्रदान करती है। हिंदू पूजा पद्धति में हल्दी को महत्वपूर्ण पूजा सामग्री माना गया है। आयुर्वेद और ज्योतिष शास्त्र में हल्दी कई परेशानियों का समाधान करती है।
          </p>

          <p className="text-muted-foreground text-center text-lg mt-4 max-w-2xl">
            हल्दी की माला का प्रयोग करके मानसिक शांति, सम्मान और धन की प्राप्ति होती है। गुरुवार का दिन इस माला को पहनने के लिए शुभ माना गया है। हल्दी का संबंध बृहस्पति से है, और इसे पहनने से बृहस्पति दोषों का निवारण होता है। माला में हल्दी की 27 गांठें होती हैं, जो 27 नक्षत्रों का प्रतीक हैं। 
          </p>

          <p className="text-muted-foreground text-center text-lg mt-4 max-w-2xl">
            हरिद्रा माला धारण करने से व्यक्ति को मानसिक मजबूती और सकारात्मक ऊर्जा मिलती है। प्रतिदिन भगवान गणेश या बृहस्पति के मंत्रों का जाप करने से विशेष लाभ होता है। विवाह, धन, सम्मान और स्वास्थ्य संबंधी लाभ प्राप्त होते हैं।
          </p>

          <p className="text-2xl font-semibold text-primary mt-4">
            ₹1,199
          </p>

          <Button
            className="mt-6"
            onClick={() =>
              window.open(
                `https://wa.me/919760924411?text=I want to purchase Haldi Mala`,
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

export default HaldiMala;

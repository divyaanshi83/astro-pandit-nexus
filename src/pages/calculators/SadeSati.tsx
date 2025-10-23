import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const SaadeSaati = () => {
  useSEO(
    "Sade Sati Calculator 🪐 | साढ़े साती कैलकुलेटर | Saturn Transit Effects",
    "Check your Shani Sade Sati period. साढ़े साती और शनि के प्रभाव जानें। Understand Saturn's influence on your life."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SingleCalculatorTemplate
        title="Sade Sati Calculator 🪐"
        prompt="Find your current Sade Sati period and understand Saturn’s effect on career, health, and growth."
      />
      <Footer />
    </div>
  );
};

export default SaadeSaati;

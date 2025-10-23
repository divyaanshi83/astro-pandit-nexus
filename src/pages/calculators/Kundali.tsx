import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Kundali = () => {
  useSEO(
    "Kundali Calculator ♈ | जन्म कुंडली कैलकुलेटर | Birth Chart Maker",
    "Generate your Kundali online. जन्म कुंडली बनाएं और ग्रहों की स्थिति जानें। Find your planets, houses, and astrological predictions."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SingleCalculatorTemplate
        title="Kundali Calculator ♈"
        prompt="Generate your birth chart (Kundali) and explore planetary positions, houses, and astrological insights."
      />
      <Footer />
    </div>
  );
};

export default Kundali;

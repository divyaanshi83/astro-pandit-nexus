import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const UnluckyColor = () => {
  useSEO(
    "Unlucky Color Checker 🎨 | अशुभ रंग कैलकुलेटर | Avoid Negative Colors",
    "Find colors that may bring negativity. जानें कौन से रंग आपके लिए अशुभ हैं। Discover colors that might reduce energy or luck."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SingleCalculatorTemplate type="unlucky-color" />
      <Footer />
    </div>
  );
};

export default UnluckyColor;

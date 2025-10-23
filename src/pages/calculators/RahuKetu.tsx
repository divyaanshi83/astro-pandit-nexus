import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const RaahuKetu = () => {
  useSEO(
    "Raahu Ketu Dosh Calculator 🌘 , राहु केतु दोष कैलकुलेटर , Rahu-Ketu Yog Finder",
    "Find the effects of Rahu-Ketu in your chart. राहु-केतु के प्रभाव और उपाय जानें। Learn how shadow planets influence your life and discover spiritual remedies."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SingleCalculatorTemplate
        title="Raahu-Ketu Dosh Calculator 🌘"
        prompt="Analyze the Rahu-Ketu dosha in your Kundli and discover remedies for stability, focus, and positive energy."
      />
      <Footer />
    </div>
  );
};

export default RaahuKetu;

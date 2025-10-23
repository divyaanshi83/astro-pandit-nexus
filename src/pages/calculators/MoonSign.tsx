import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const MoonSign = () => {
  useSEO(
    "Moon Sign Calculator 🌙 , चंद्र राशि कैलकुलेटर , Rashi Finder",
    "Find your Moon Sign (Chandra Rashi). चंद्र राशि से जानें आपके भावनात्मक स्वभाव और मन की स्थिति। Understand how your Moon influences your emotions and intuition."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SingleCalculatorTemplate
        title="Moon Sign Calculator 🌙"
        prompt="Find your Moon Sign (Chandra Rashi) to understand your emotional world, instincts, and mental patterns."
      />
      <Footer />
    </div>
  );
};

export default MoonSign;

import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const MangalDosh = () => {
  useSEO(
    "Mangal Dosh Calculator 🔥 , मांगलिक दोष कैलकुलेटर , Manglik Dosha Finder",
    "Check Mangal Dosh in your Kundli. मांगलिक दोष का पता लगाएं और इसके प्रभावों को समझें। Discover remedies for Manglik Dosha affecting marriage and success."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SingleCalculatorTemplate
        title="Mangal Dosh Calculator 🔥"
        prompt="Check whether Mangal Dosh (Mars affliction) is present in your birth chart and understand its effects on marriage, health, and career."
      />
      <Footer />
    </div>
  );
};

export default MangalDosh;

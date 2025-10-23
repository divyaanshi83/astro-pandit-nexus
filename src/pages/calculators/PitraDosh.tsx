import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const PitraDosh = () => {
  useSEO(
    "Pitra Dosh Calculator 🌑 , पितृ दोष कैलकुलेटर , Pitru Dosh Finder",
    "Identify Pitra Dosh in your horoscope. पितृ दोष के कारण और समाधान जानें। Discover how ancestral energies affect your destiny and remedies to balance them."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SingleCalculatorTemplate
        title="Pitra Dosh Calculator 🌑"
        prompt="Check for ancestral karmic dosh (Pitra Dosh) in your horoscope and understand remedies to remove obstacles in life."
      />
      <Footer />
    </div>
  );
};

export default PitraDosh;

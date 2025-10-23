import LuckyCalculatorTemplate from "./templates/LuckyCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const LuckyDate = () => {
  useSEO(
    "Lucky Date Calculator 🎯 | भाग्यशाली दिन कैलकुलेटर | Auspicious Date Finder",
    "Find your lucky dates for success. भाग्यशाली दिनों और शुभ तिथियों को जानें। Discover your best days for growth and positivity."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <LuckyCalculatorTemplate type="lucky-date" />
      <Footer />
    </div>
  );
};

export default LuckyDate;

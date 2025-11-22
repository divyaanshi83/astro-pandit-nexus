import LuckyCalculatorTemplate from "./templates/LuckyCalculatorTemplate";
import useSEO from "@/hooks/useSEO";

const LuckyDate = () => {
  useSEO(
    "Lucky Date Calculator 🎯 | भाग्यशाली दिन कैलकुलेटर | Auspicious Date Finder",
    "Find your lucky dates for success. भाग्यशाली दिनों और शुभ तिथियों को जानें। Discover your best days for growth and positivity."
  );

  return (
    <div className="min-h-screen bg-background">
      <LuckyCalculatorTemplate type="lucky-date" />
    </div>
  );
};

export default LuckyDate;

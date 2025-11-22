import LuckyCalculatorTemplate from "./templates/LuckyCalculatorTemplate";

import useSEO from "@/hooks/useSEO";

const LuckyRudraksha = () => {
  useSEO(
    "Lucky Rudraksha Finder 🔮 | भाग्यशाली रुद्राक्ष कैलकुलेटर | Rudraksha for Zodiac",
    "Find the right Rudraksha for your Rashi. अपनी राशि के अनुसार शुभ रुद्राक्ष जानें। Discover spiritual beads that bring balance."
  );

  return (
    <div className="min-h-screen bg-background">
     
      <LuckyCalculatorTemplate type="lucky-rudraksha" />
  
    </div>
  );
};

export default LuckyRudraksha;

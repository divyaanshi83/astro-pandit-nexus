
import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";

import useSEO from "@/hooks/useSEO";

const KaalSarp = () => {
  useSEO(
    "Kaal Sarp Dosh Calculator 🐍 , काल सर्प दोष कैलकुलेटर , Kaal Sarp Yog Finder",
    "Check for Kaal Sarp Yog in your Kundli. काल सर्प दोष के प्रभाव और उपाय जानें। Understand planetary combinations causing struggles and remedies for peace."
  );

  return (
    <div className="min-h-screen bg-background">
 
      <SingleCalculatorTemplate
        title="Kaal Sarp Dosh Calculator 🐍"
        prompt="Find out if you have Kaal Sarp Dosh — when all planets are trapped between Rahu and Ketu — and get remedies to balance its impact."
      />
    </div>
  );
};

export default KaalSarp;

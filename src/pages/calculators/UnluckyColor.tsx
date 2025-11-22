import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import useSEO from "@/hooks/useSEO";

const UnluckyColor = () => {
  useSEO(
    "Unlucky Color Checker 🎨 | अशुभ रंग कैलकुलेटर | Avoid Negative Colors",
    "Find colors that may bring negativity. जानें कौन से रंग आपके लिए अशुभ हैं। Discover colors that might reduce energy or luck."
  );

  return (
    <div className="min-h-screen bg-background">
      <SingleCalculatorTemplate
        title="Unlucky Color Checker 🎨"
        prompt="Discover colors that may bring negativity. जानें कौन से रंग आपके लिए अशुभ हैं। Avoid colors that might reduce energy or luck."
      />
    </div>
  );
};

export default UnluckyColor;

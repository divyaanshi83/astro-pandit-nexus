import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import useSEO from "@/hooks/useSEO";

const LuckyColor = () => {
  useSEO(
    "Lucky Color Calculator 🎨 , भाग्यशाली रंग कैलकुलेटर , Color of Fortune Finder",
    "Find your lucky color based on your zodiac and birth details. जानें कौन सा रंग आपको भाग्य और सफलता देता है।"
  );

  return (
    <div className="min-h-screen bg-background">

      <SingleCalculatorTemplate
        title="Lucky Color Calculator 🎨"
        prompt="Discover your lucky color based on astrological influences to enhance positivity, luck, and success in your life."
      />

    </div>
  );
};

export default LuckyColor;

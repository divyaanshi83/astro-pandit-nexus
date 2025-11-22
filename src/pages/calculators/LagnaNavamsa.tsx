import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import useSEO from "@/hooks/useSEO";

const LagnaNavamsa = () => {
  useSEO(
    "Lagna Calculator ♈ , लग्न कैलकुलेटर , Ascendant Finder",
    "Know your ascendant sign (Lagna). लग्न से जानें आपका स्वभाव, करियर दिशा और रिश्तों पर प्रभाव। Discover how your rising sign shapes your outer personality."
  );

  return (
    <div className="min-h-screen bg-background">
 
      <SingleCalculatorTemplate
        title="Lagna (Ascendant) Calculator ♈"
        prompt="Find your Ascendant sign (Lagna) based on your birth time and location to understand how others perceive you and your life direction."
      />
    </div>
  );
};

export default LagnaNavamsa;

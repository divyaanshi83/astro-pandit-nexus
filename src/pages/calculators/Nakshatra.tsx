import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import useSEO from "@/hooks/useSEO";

const Nakshatra = () => {
  useSEO(
    "Nakshatra Calculator 🌟 , नक्षत्र कैलकुलेटर , Birth Star Finder",
    "Find your birth Nakshatra (constellation). जन्म नक्षत्र से जानें आपका स्वभाव, भाग्य और जीवन दिशा। Discover the ruling deity and qualities of your Nakshatra."
  );

  return (
    <div className="min-h-screen bg-background">
      <SingleCalculatorTemplate
        title="Nakshatra Calculator 🌟"
        prompt="Find your birth Nakshatra and understand how your star influences your personality, strengths, and destiny."
      />
    </div>
  );
};

export default Nakshatra;

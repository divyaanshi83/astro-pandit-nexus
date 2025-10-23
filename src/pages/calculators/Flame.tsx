import useSEO from "@/hooks/useSEO";
import DualCalculatorTemplate from "@/components/DualCalculatorTemplate";

const Flame = () => {
  useSEO(
    "FLAME Calculator 💞 | प्यार, दोस्ती और रिश्तों की जाँच",
    "Enter both partners' names and birth details to calculate your FLAME compatibility — discover if you’re Friends, Lovers, Affectionate, Married, or Enemies based on astrology and name vibrations."
  );

  return (
    <DualCalculatorTemplate
      title="FLAME Calculator 💞"
      prompt="Enter both partners' names and birth details to calculate your FLAME compatibility — discover if you’re Friends, Lovers, Affectionate, Married, or Enemies based on astrology and name vibrations."
    />
  );
};

export default Flame;

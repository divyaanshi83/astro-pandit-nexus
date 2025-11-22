import useSEO from "@/hooks/useSEO";
import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";


const Numerology = () => {
  useSEO(
    "Numerology Calculator 🔢 | अंकशास्त्र जाँच",
    "Calculate your life path, destiny, and expression numbers to unlock your inner potential and understand your life purpose."
  );

  return (
    <>
      <main className="min-h-[80vh]">
        <SingleCalculatorTemplate
          title="Numerology Calculator 🔢"
          prompt="Calculate your life path, destiny, and expression numbers to unlock your inner potential and understand your life purpose."
        />
      </main>
    </>
  );
};

export default Numerology;

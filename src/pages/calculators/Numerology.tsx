import useSEO from "@/hooks/useSEO";
import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Numerology = () => {
  useSEO(
    "Numerology Calculator 🔢 | अंकशास्त्र जाँच",
    "Calculate your life path, destiny, and expression numbers to unlock your inner potential and understand your life purpose."
  );

  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        <SingleCalculatorTemplate
          title="Numerology Calculator 🔢"
          prompt="Calculate your life path, destiny, and expression numbers to unlock your inner potential and understand your life purpose."
        />
      </main>
      <Footer />
    </>
  );
};

export default Numerology;

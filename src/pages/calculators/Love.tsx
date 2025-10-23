import useSEO from "@/hooks/useSEO";
import DualCalculatorTemplate from "@/components/DualCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Love = () => {
  useSEO(
    "Love Compatibility Calculator 💖 | प्रेम और रिश्तों की जाँच",
    "Analyze the astrological love compatibility between two people and get a detailed, emotional, and insightful reading including their strengths, challenges, and long-term potential."
  );

  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        <DualCalculatorTemplate
          title="Love Compatibility Calculator 💖"
          prompt="Analyze the astrological love compatibility between these two people and give a detailed, emotional, and insightful reading including their strengths, challenges, and long-term potential."
        />
      </main>
      <Footer />
    </>
  );
};

export default Love;

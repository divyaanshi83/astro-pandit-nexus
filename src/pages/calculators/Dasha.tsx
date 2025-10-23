import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";


const Dasha = () => {
  useSEO(
    "Dasha Calculator 🔮 , दशा कैलकुलेटर , Mahadasha Antardasha Calculator",
    "Calculate your planetary Dasha periods. दशा कैलकुलेटर से जानें ग्रहों की दशा और उनका प्रभाव। Understand how each planet shapes your destiny and timing of events."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SingleCalculatorTemplate
        title="Dasha Calculator 🔮"
        prompt="Calculate your Mahadasha and Antardasha to understand how planetary periods influence your life's phases."
      />
      <Footer />
    </div>
  );
};

export default Dasha;

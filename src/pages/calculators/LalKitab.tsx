import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import useSEO from "@/hooks/useSEO";

const LaalKitab = () => {
  useSEO(
    "Laal Kitab Remedies 📘 | लाल किताब उपाय | Astrological Solutions",
    "Find remedies from Laal Kitab astrology. लाल किताब से जानें ग्रह दोष और उनके सरल उपाय। Get practical solutions for doshas and problems."
  );

  return (
    <div className="min-h-screen bg-background">
   
      <SingleCalculatorTemplate
        title="Laal Kitab Remedies 📘"
        prompt="Discover Laal Kitab based astrological remedies for doshas, health, and financial growth."
      />
    </div>
  );
};

export default LaalKitab;

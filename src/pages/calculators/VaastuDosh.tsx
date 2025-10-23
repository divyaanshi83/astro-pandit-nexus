import useSEO from "@/hooks/useSEO";
import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VaastuDosh = () => {
  useSEO(
    "Vaastu Dosh Calculator 🏠 | वास्तु दोष जाँच | Home & Office Balance",
    "Analyze your home or office based on Vaastu Shastra principles. Identify doshas and receive suggestions for balance and prosperity."
  );

  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        <SingleCalculatorTemplate
          title="Vaastu Dosh Calculator 🏠"
          prompt="Analyze your home or office based on Vaastu Shastra principles. Identify doshas and receive suggestions for balance and prosperity."
        />
      </main>
      <Footer />
    </>
  );
};

export default VaastuDosh;

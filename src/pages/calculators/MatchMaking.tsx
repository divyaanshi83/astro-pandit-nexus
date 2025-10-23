import useSEO from "@/hooks/useSEO";
import DualCalculatorTemplate from "@/components/DualCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MatchMaking = () => {
  useSEO(
    "Match Making Calculator 💞 | वैदिक मिलान और विवाह जाँच",
    "Compare the birth details of two individuals and get a Vedic astrology based match-making report with Guna Milan, compatibility score, and marriage harmony insights."
  );

  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        <DualCalculatorTemplate
          title="Match Making Calculator 💞"
          prompt="Compare the birth details of two individuals and provide a Vedic astrology based match-making report with Guna Milan, compatibility score, and marriage harmony insights."
        />
      </main>
      <Footer />
    </>
  );
};

export default MatchMaking;

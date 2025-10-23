import useSEO from "@/hooks/useSEO";
import SingleCalculatorTemplate from "@/components/SingleCalculatorTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PersonalYear = () => {
  useSEO(
    "Personal Year Calculator 🗓️ | व्यक्तिगत वर्ष जाँच",
    "Find your personal year number and understand what this year holds for you in terms of growth, challenges, and opportunities."
  );

  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        <SingleCalculatorTemplate
          title="Personal Year Calculator 🗓️"
          prompt="Find your personal year number and understand what this year holds for you in terms of growth, challenges, and opportunities."
        />
      </main>
      <Footer />
    </>
  );
};

export default PersonalYear;

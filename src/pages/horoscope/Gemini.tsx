import HoroscopeTemplate from "@/components/HoroscopeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Gemini = () => {
  useSEO(
    "Gemini Daily Horoscope, Gemini Love Forecast, Gemini Career Predictions, मिथुन राशि दैनिक भविष्यफल, मिथुन राशि प्रेम और करियर भविष्यफल, Mithun Rashi Horoscope, Mithun Rashi Love & Career",
    "Get today's Gemini horoscope including love, career, health, and financial predictions. Stay guided with accurate astrology insights. आज का मिथुन राशि राशिफल पढ़ें, प्रेम और करियर सहित, Mithun Rashi ke liye daily horoscope."
  );
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <HoroscopeTemplate sign="Gemini" />
      </main>
      <Footer />
    </div>
  );
};

export default Gemini;

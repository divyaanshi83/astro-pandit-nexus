import HoroscopeTemplate from "@/components/HoroscopeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Capricorn = () => {
  useSEO(
    "Capricorn Daily Horoscope, Capricorn Love Forecast, Capricorn Career Predictions, मकर राशि दैनिक भविष्यफल, मकर राशि प्रेम और करियर भविष्यफल, Makar Rashi Horoscope, Makar Rashi Love & Career",
    "Check Capricorn horoscope today covering love, career, health, and financial insights. Stay guided with astrology tips. आज का मकर राशि राशिफल पढ़ें, प्रेम और करियर सहित, Makar Rashi ke liye daily horoscope."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <HoroscopeTemplate sign="Capricorn" />
      </main>
      <Footer />
    </div>
  );
};

export default Capricorn;

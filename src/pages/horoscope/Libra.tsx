import HoroscopeTemplate from "@/components/HoroscopeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Libra = () => {
  useSEO(
    "Libra Daily Horoscope, Libra Love Forecast, Libra Career Predictions, तुला राशि दैनिक भविष्यफल, तुला राशि प्रेम और करियर भविष्यफल, Tula Rashi Horoscope, Tula Rashi Love & Career",
    "Check Libra horoscope today for love, career, health, and financial insights. Stay ahead with expert astrology guidance. आज का तुला राशि राशिफल पढ़ें, प्रेम और करियर सहित, Tula Rashi ke liye daily horoscope."
  );
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <HoroscopeTemplate sign="Libra" />
      </main>
      <Footer />
    </div>
  );
};

export default Libra;

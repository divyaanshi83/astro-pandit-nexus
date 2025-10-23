import HoroscopeTemplate from "@/components/HoroscopeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Virgo = () => {
   useSEO(
    "Virgo Daily Horoscope, Virgo Love Forecast, Virgo Career Predictions, कन्या राशि दैनिक भविष्यफल, कन्या राशि प्रेम और करियर भविष्यफल, Kanya Rashi Horoscope, Kanya Rashi Love & Career",
    "Read Virgo daily horoscope for love, career, health, and finance. Astrology guidance to navigate your day successfully. आज का कन्या राशि राशिफल पढ़ें, प्रेम और करियर सहित, Kanya Rashi ke liye daily horoscope."
  );
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <HoroscopeTemplate sign="Virgo" />
      </main>
      <Footer />
    </div>
  );
};

export default Virgo;

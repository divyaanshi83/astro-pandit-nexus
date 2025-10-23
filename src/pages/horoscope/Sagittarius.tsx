import HoroscopeTemplate from "@/components/HoroscopeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Sagittarius = () => {
  useSEO(
    "Sagittarius Daily Horoscope, Sagittarius Love Forecast, Sagittarius Career Predictions, धनु राशि दैनिक भविष्यफल, धनु राशि प्रेम और करियर भविष्यफल, Dhanu Rashi Horoscope, Dhanu Rashi Love & Career",
    "Read Sagittarius daily horoscope including love, career, health, and finance. Expert astrology advice for a successful day. आज का धनु राशि राशिफल पढ़ें, प्रेम और करियर सहित, Dhanu Rashi ke liye daily horoscope."
  );
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <HoroscopeTemplate sign="Sagittarius" />
      </main>
      <Footer />
    </div>
  );
};

export default Sagittarius;

import HoroscopeTemplate from "@/components/HoroscopeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Aries = () => {
  useSEO(
    "Aries Daily Horoscope, Aries Love Forecast, Aries Career Predictions, मेष राशि दैनिक भविष्यफल, मेष राशि प्रेम और करियर भविष्यफल, Mesh Rashi Horoscope, Mesh Rashi Love & Career",
    "Check today's Aries horoscope for love, career, health, and finance. Accurate astrology predictions to guide your day. आज का मेष राशि दैनिक राशिफल पढ़ें, प्रेम और करियर सहित, Mesh Rashi ke liye aaj ka daily horoscope."
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <HoroscopeTemplate sign="Aries" />
      </main>
      <Footer />
    </div>
  );
};

export default Aries;

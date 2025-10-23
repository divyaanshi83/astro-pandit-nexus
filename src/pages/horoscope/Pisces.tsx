import HoroscopeTemplate from "@/components/HoroscopeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Pisces = () => {
  useSEO(
    "Pisces Daily Horoscope, Pisces Love Forecast, Pisces Career Predictions, मीन राशि दैनिक भविष्यफल, मीन राशि प्रेम और करियर भविष्यफल, Meen Rashi Horoscope, Meen Rashi Love & Career",
    "Read Pisces daily horoscope for love, career, health, and finance. Get accurate astrology predictions and insights. आज का मीन राशि राशिफल पढ़ें, प्रेम और करियर सहित, Meen Rashi ke liye daily horoscope."
  );
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <HoroscopeTemplate sign="Pisces" />
      </main>
      <Footer />
    </div>
  );
};

export default Pisces;

import HoroscopeTemplate from "@/components/HoroscopeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Scorpio = () => {
  useSEO(
    "Scorpio Daily Horoscope, Scorpio Love Forecast, Scorpio Career Predictions, वृश्चिक राशि दैनिक भविष्यफल, वृश्चिक राशि प्रेम और करियर भविष्यफल, Vrischik Rashi Horoscope, Vrischik Rashi Love & Career",
    "Today's Scorpio horoscope covers love, career, health, and finance. Reliable astrology tips to guide your day effectively. आज का वृश्चिक राशि राशिफल पढ़ें, प्रेम और करियर सहित, Vrischik Rashi ke liye daily horoscope."
  );
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <HoroscopeTemplate sign="Scorpio" />
      </main>
      <Footer />
    </div>
  );
};

export default Scorpio;

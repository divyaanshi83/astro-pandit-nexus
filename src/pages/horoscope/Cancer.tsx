import HoroscopeTemplate from "@/components/HoroscopeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Cancer = () => {
  useSEO(
    "Cancer Daily Horoscope, Cancer Love Forecast, Cancer Career Predictions, कर्क राशि दैनिक भविष्यफल, कर्क राशि प्रेम और करियर भविष्यफल, Kark Rashi Horoscope, Kark Rashi Love & Career",
    "Read today's Cancer horoscope for love, career, health, and money. Astrology guidance to help navigate your day successfully. आज का कर्क राशि राशिफल पढ़ें, प्रेम और करियर सहित, Kark Rashi ke liye daily horoscope."
  );
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <HoroscopeTemplate sign="Cancer" />
      </main>
      <Footer />
    </div>
  );
};

export default Cancer;

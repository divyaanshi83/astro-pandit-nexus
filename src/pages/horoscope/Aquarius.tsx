import HoroscopeTemplate from "@/components/HoroscopeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Aquarius = () => {
  useSEO(
    "Aquarius Daily Horoscope, Aquarius Love Forecast, Aquarius Career Predictions, कुंभ राशि दैनिक भविष्यफल, कुंभ राशि प्रेम और करियर भविष्यफल, Kumbh Rashi Horoscope, Kumbh Rashi Love & Career",
    "Today's Aquarius horoscope includes love, career, health, and finance guidance. Accurate astrology predictions for your day. आज का कुंभ राशि राशिफल पढ़ें, प्रेम और करियर सहित, Kumbh Rashi ke liye daily horoscope."
  );
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <HoroscopeTemplate sign="Aquarius" />
      </main>
      <Footer />
    </div>
  );
};

export default Aquarius;

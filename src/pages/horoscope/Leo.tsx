import HoroscopeTemplate from "@/components/HoroscopeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Leo = () => {
  useSEO(
    "Leo Daily Horoscope, Leo Love Forecast, Leo Career Predictions, सिंह राशि दैनिक भविष्यफल, सिंह राशि प्रेम और करियर भविष्यफल, Singh Rashi Horoscope, Singh Rashi Love & Career",
    "Check today's Leo horoscope including love, career, health, and financial insights. Accurate astrology predictions for your day. आज का सिंह राशि राशिफल पढ़ें, प्रेम और करियर सहित, Singh Rashi ke liye daily horoscope."
  );
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16">
        <HoroscopeTemplate sign="Leo" />
      </main>
      <Footer />
    </div>
  );
};

export default Leo;

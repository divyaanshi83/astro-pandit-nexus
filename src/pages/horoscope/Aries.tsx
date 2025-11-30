import HoroscopeTemplate from "@/components/HoroscopeTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOEngine from "@/components/seo/SEOEngine";   // ✅ FIXED PATH

const Aries = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* ⭐ SEO SYSTEM */}
      <SEOEngine
        title="Aries Daily Horoscope (Mesha Rashifal) – आज का मेष राशिफल"
        description="आज का मेष राशिफल: प्रेम, करियर, धन, स्वास्थ्य और ग्रहों की स्थितियाँ। Accurate Aries horoscope by Pandit Ashu Bahuguna."
        keywords="Aries horoscope, Mesh Rashifal, मेष राशिफल, Aries today, daily horoscope Aries"
        schema={{
          "@context": "https://schema.org",
          "@type": "Horoscope",
          "name": "Aries Daily Horoscope",
          "description": "Daily Aries horoscope by Pandit Ashu Bahuguna",
          "url": "https://astroashupandit.com/horoscope/aries"
        }}
      />

      <Navbar />

      <main className="py-16">
        <HoroscopeTemplate sign="Aries" />
      </main>

      <Footer />
    </div>
  );
};

export default Aries;

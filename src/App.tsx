import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/context/LanguageContext";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SEO from "@/components/SEO";


import ChatBox from "@/components/ChatBox";

// 📄 Pages
import Index from "./pages/Index";
import Horoscope from "./pages/Horoscope";
import KundliMilan from "./pages/KundliMilan";
import Store from "./pages/Store";
import Panchang from "./pages/Panchang";
import Eclipse from "./pages/Eclipse";
import NameCorrection from "./pages/NameCorrection";
import Calculators from "./pages/Calculators";
import ShubhMuhurat from "./pages/ShubhMuhurat";
import MuhuratDates from "@/pages/MuhuratDates";
import MuhuratDetail from "@/pages/MuhuratDetail";
import About from "./pages/About";
//import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "@/pages/Blog";
import GalleryPage from "@/pages/GalleryPage";

// 🌸 Festival Pages
import FestivalsSection from "@/pages/FestivalsSection";
import FestivalDetail from "@/pages/FestivalDetail";

// 📿 Services
import SukhSamridhi from "@/pages/services/SukhSamridhi";
import KundliAnalysis from "@/pages/services/KundliAnalysis";
import DashaAnalysis from "@/pages/services/DashaAnalysis";
import GemstoneSuggestion from "@/pages/services/GemstoneSuggestion";
import MarriageYog from "@/pages/services/MarriageYog";
import PitruDosh from "@/pages/services/PitruDosh";
import SantanUpay from "@/pages/services/SantanUpay";
import BusinessUpay from "@/pages/services/BusinessUpay";
import EvilEye from "./pages/services/EvilEye";
import ManglikDosh from "@/pages/services/ManglikDosh";

// 🔮 Calculators (single input)
import Nakshatra from "@/pages/calculators/Nakshatra";
import Dasha from "@/pages/calculators/Dasha";
import MangalDosh from "@/pages/calculators/MangalDosh";
import KaalSarp from "@/pages/calculators/KaalSarp";
import PitraDosh from "@/pages/calculators/PitraDosh";
import FavAlphabet from "@/pages/calculators/FavAlphabet";
import Kundali from "@/pages/calculators/Kundali";
import LaalKitab from "@/pages/calculators/LalKitab";
import Lagna from "@/pages/calculators/LagnaNavamsa";
import LuckyColor from "@/pages/calculators/LuckyColor";
import LuckyDate from "@/pages/calculators/LuckyDate";
import LuckyNumber from "@/pages/calculators/LuckyNumber";
import LuckyRudraksha from "@/pages/calculators/LuckyRudraksha";
import LuckyVehicleNumber from "@/pages/calculators/LuckyVehicleNumber";
import MoonSign from "@/pages/calculators/MoonSign";
import RaahuKetu from "@/pages/calculators/RahuKetu";
import UnluckyColor from "@/pages/calculators/UnluckyColor";
import UnluckyDate from "@/pages/calculators/UnluckyDate";
import SaadeSaati from "@/pages/calculators/SadeSati";

// 💞 Dual Input Calculators
import Love from "@/pages/calculators/Love";
import Flame from "@/pages/calculators/Flame";
import MatchMaking from "@/pages/calculators/MatchMaking";


// 🕉️ Yantras
import SriYantra from "@/pages/yantras/SriYantra";
import KuberYantra from "@/pages/yantras/KuberYantra";
import LakshmiYantra from "@/pages/yantras/LakshmiYantra";
import GaneshYantra from "@/pages/yantras/GaneshYantra";
import HanumanYantra from "@/pages/yantras/HanumanYantra";
import DurgaYantra from "@/pages/yantras/DurgaYantra";
import MahamrityunjayaYantra from "@/pages/yantras/MahamrityunjayaYantra";
import SaraswatiYantra from "@/pages/yantras/SaraswatiYantra";
import ShivaYantra from "@/pages/yantras/ShivaYantra";
import NavagrahaYantra from "@/pages/yantras/NavagrahaYantra";
import SiddhSuryaYantra from "@/pages/yantras/SiddhSuryaYantra";
import SiddhChandraYantra from "@/pages/yantras/SiddhChandraYantra";
import SiddhBrihaspatiYantra from "@/pages/yantras/SiddhBrahaspatiYantra";
import SiddhShukraYantra from "@/pages/yantras/SiddhShukraYantra";
import SiddhShaniYantra from "@/pages/yantras/SiddhShaniYantra";
import SiddhRahuYantra from "@/pages/yantras/SiddhRahuYantra";
import SiddhKetuYantra from "@/pages/yantras/SiddhKetuYantra";
import SiddhSarvKaryaSiddhiYantra from "@/pages/yantras/SiddhSarvKaryaSiddhiYantra";
import RudrakshMala from "@/pages/yantras/RudrakshMala";
import HaldiMala from "@/pages/yantras/HaldiMala";
import SafedMotiMala from "@/pages/yantras/SafedMotiMala";

import Numerology from "@/pages/Numerology";
import VaastuDosh from "@/pages/VaastuDosh";

import HoroscopeWrapper from "@/components/HoroscopeWrapper";

const queryClient = new QueryClient();

// ✅ Dynamic SEO component
const AppSEO = () => {
  const location = useLocation();
  const url = `https://astroashupandit.com${location.pathname}`;
  const titleMap: Record<string, string> = {
    "/": "Pandit Ashu Bahuguna | India’s Best Astrologer | Top Jyotish in North India",
    "/horoscope": "Horoscope 2025 | Daily Rashifal by Pandit Ashu Bahuguna",
    "/kundli-milan": "Kundli Milan | Matchmaking by Expert Astrologer in Muzaffarnagar",
    "/store": "Buy Original Yantras, Rudraksha & Malas | Astro Store India",
    "/about": "About Pandit Ashu Bahuguna | 35+ Years Experience | Famous Jyotish",
    "/contact": "Contact India’s Top Astrologer | Talk to Pandit Ashu Bahuguna",
  };

  const description =
    "Get authentic astrology guidance from India’s best astrologer — Pandit Ashu Bahuguna. 35+ years experience. Kundli, Horoscope, Puja, Yantra & more.";
  const keywords =
    "astrology, astrologer, jyotish, kundli milan, horoscope, yantra, puja, pandit, India’s Best Astrologer, top astrologer in North India, Muzaffarnagar astrologer, भारत के टॉप ज्योतिषी, उत्तर भारत के श्रेष्ठ ज्योतिषी, top 10 astrologers in India, Uttar Pradesh astrologer, best pandit for kundli";

  return (
    <Helmet>
      <title>{titleMap[location.pathname] || "Pandit Ashu Bahuguna - Expert Astrologer in India"}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

const App = () => (
  <HelmetProvider>
    <LanguageProvider>
      <SEO />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          

          <Routes>
            {/* 🌟 Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/horoscope" element={<Horoscope />} />
            <Route path="/shubh-muhurat" element={<ShubhMuhurat />} />
            <Route path="/panchang" element={<Panchang />} />
            <Route path="/eclipse" element={<Eclipse />} />
            <Route path="/store" element={<Store />} />
            <Route path="/name-correction" element={<NameCorrection />} />
            <Route path="/about" element={<About />} />
            <Route path="/kundli-milan" element={<KundliMilan />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/blog" element={<Blog />} />

            {/* 🌸 Services */}
            <Route path="/sukh-samridhi" element={<SukhSamridhi />} />
            <Route path="/kundli-analysis" element={<KundliAnalysis />} />
            <Route path="/dasha-analysis" element={<DashaAnalysis />} />
            <Route path="/gemstone-suggestion" element={<GemstoneSuggestion />} />
            <Route path="/marriage-yog" element={<MarriageYog />} />
            <Route path="/pitru-dosh" element={<PitruDosh />} />
            <Route path="/santan-upay" element={<SantanUpay />} />
            <Route path="/business-upay" element={<BusinessUpay />} />
            <Route path="/evil-eye" element={<EvilEye />} />
            <Route path="/manglik-dosh" element={<ManglikDosh />} />

            {/* 🌸 Festivals */}
            <Route path="/festivals" element={<FestivalsSection />} />
            <Route path="/festivals/:name" element={<FestivalDetail />} />

            {/* 🔢 Calculators */}
            <Route path="/numerology" element={<Numerology />} />
            <Route path="/vaastu-dosh" element={<VaastuDosh />} />

              {/* Dynamic Horoscope Route */}
              <Route path="/horoscope/:signDay" element={<HoroscopeWrapper />} />

            {/* 🔮 Single Input Calculators */}
<Route path="/calculator/nakshatra" element={<Nakshatra />} />
<Route path="/calculator/dasha" element={<Dasha />} />
<Route path="/calculator/mangal-dosh" element={<MangalDosh />} />
<Route path="/calculator/kaal-sarp" element={<KaalSarp />} />
<Route path="/calculator/pitra-dosh" element={<PitraDosh />} />
<Route path="/calculator/raahu-ketu" element={<RaahuKetu />} />
<Route path="/calculator/unlucky-color" element={<UnluckyColor />} />
<Route path="/calculator/unlucky-date" element={<UnluckyDate />} />
<Route path="/calculator/sade-saati" element={<SaadeSaati />} />
<Route path="/calculator/fav-alphabet" element={<FavAlphabet />} />
<Route path="/calculator/kundali" element={<Kundali />} />
<Route path="/calculator/laal-kitab" element={<LaalKitab />} />
<Route path="/calculator/lagna" element={<Lagna />} />
<Route path="/calculator/lucky-color" element={<LuckyColor />} />
<Route path="/calculator/lucky-date" element={<LuckyDate />} />
<Route path="/calculator/lucky-number" element={<LuckyNumber />} />
<Route path="/calculator/lucky-rudraksha" element={<LuckyRudraksha />} />
<Route path="/calculator/lucky-vehicle-number" element={<LuckyVehicleNumber />} />
<Route path="/calculator/moon-sign" element={<MoonSign />} />

{/* 💞 Dual Input Calculators */}
<Route path="/calculator/love" element={<Love />} />
<Route path="/calculator/flame" element={<Flame />} />
<Route path="/calculator/match-making" element={<MatchMaking />} />




            {/* 🕉️ Yantras */}
            <Route path="/yantras/sriYantra" element={<SriYantra />} />
            <Route path="/yantras/kuberYantra" element={<KuberYantra />} />
            <Route path="/yantras/lakshmiYantra" element={<LakshmiYantra />} />
            <Route path="/yantras/ganeshYantra" element={<GaneshYantra />} />
            <Route path="/yantras/hanumanYantra" element={<HanumanYantra />} />
            <Route path="/yantras/durgaYantra" element={<DurgaYantra />} />
            <Route path="/yantras/mahamrityunjayaYantra" element={<MahamrityunjayaYantra />} />
            <Route path="/yantras/saraswatiYantra" element={<SaraswatiYantra />} />
            <Route path="/yantras/shivaYantra" element={<ShivaYantra />} />
            <Route path="/yantras/navagrahaYantra" element={<NavagrahaYantra />} />
            <Route path="/yantras/siddhSuryaYantra" element={<SiddhSuryaYantra />} />
            <Route path="/yantras/siddhChandraYantra" element={<SiddhChandraYantra />} />
            <Route path="/yantras/siddhBrihaspatiYantra" element={<SiddhBrihaspatiYantra />} />
            <Route path="/yantras/siddhShukraYantra" element={<SiddhShukraYantra />} />
            <Route path="/yantras/siddhShaniYantra" element={<SiddhShaniYantra />} />
            <Route path="/yantras/siddhRahuYantra" element={<SiddhRahuYantra />} />
            <Route path="/yantras/siddhKetuYantra" element={<SiddhKetuYantra />} />
            <Route path="/yantras/siddhSarvKaryaSiddhiYantra" element={<SiddhSarvKaryaSiddhiYantra />} />
            <Route path="/yantras/rudrakshMala" element={<RudrakshMala />} />
            <Route path="/yantras/haldiMala" element={<HaldiMala />} />
            <Route path="/yantras/safedMotiMala" element={<SafedMotiMala />} />

            {/* 💫 Muhurat */}
            <Route path="/muhurat/:type" element={<MuhuratDates />} />
            <Route path="/muhurat/:type/:date" element={<MuhuratDetail />} />

            {/* 📸 Gallery */}
            <Route path="/gallery" element={<GalleryPage />} />

            {/* 🚫 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <ChatBox />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  </HelmetProvider>
);

export default App;

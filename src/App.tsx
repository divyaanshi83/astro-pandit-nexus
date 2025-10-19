import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 🌍 Language Provider (already used globally)
import { LanguageProvider } from "@/context/LanguageContext";


import ChatBox from "@/components/ChatBox";

// React Router (⚠️ use only Routes/Route here — no BrowserRouter)
import { Routes, Route } from "react-router-dom";

// 🌟 General Pages
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
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// 🌸 Festivals Pages
import FestivalsSection from "@/pages/FestivalsSection";
import FestivalDetail from "@/pages/FestivalDetail";

import Numerology from "@/pages/Numerology";
import VaastuDosh from "@/pages/VaastuDosh";

// ♈ Horoscope Individual Pages
import Aries from "./pages/horoscope/Aries";
import Gemini from "./pages/horoscope/Gemini";
import Cancer from "./pages/horoscope/Cancer";
import Leo from "./pages/horoscope/Leo";
import Virgo from "./pages/horoscope/Virgo";
import Libra from "./pages/horoscope/Libra";
import Scorpio from "./pages/horoscope/Scorpio";
import Sagittarius from "./pages/horoscope/Sagittarius";
import Capricorn from "./pages/horoscope/Capricorn";
import Aquarius from "./pages/horoscope/Aquarius";
import Pisces from "./pages/horoscope/Pisces";

// 🔮 Calculator Pages (Single Input)
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

// 🧩 Common Layout Components

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* ✅ Removed <BrowserRouter> (already in main.tsx) */}
     

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/kundli-milan" element={<KundliMilan />} />
          <Route path="/calculators" element={<Calculators />} />

          {/* 🌸 Festivals */}
          <Route path="/festivals" element={<FestivalsSection />} />
          <Route path="/festivals/:name" element={<FestivalDetail />} />

          <Route path="/numerology" element={<Numerology />} />
          <Route path="/vaastu-dosh" element={<VaastuDosh />} />

          {/* ♈ Horoscope Individual Pages */}
          <Route path="/horoscope/aries" element={<Aries />} />
          <Route path="/horoscope/gemini" element={<Gemini />} />
          <Route path="/horoscope/cancer" element={<Cancer />} />
          <Route path="/horoscope/leo" element={<Leo />} />
          <Route path="/horoscope/virgo" element={<Virgo />} />
          <Route path="/horoscope/libra" element={<Libra />} />
          <Route path="/horoscope/scorpio" element={<Scorpio />} />
          <Route path="/horoscope/sagittarius" element={<Sagittarius />} />
          <Route path="/horoscope/capricorn" element={<Capricorn />} />
          <Route path="/horoscope/aquarius" element={<Aquarius />} />
          <Route path="/horoscope/pisces" element={<Pisces />} />

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

          {/* 💞 Shubh Muhurat */}
          <Route path="/muhurat/:type" element={<MuhuratDates />} />
          <Route path="/muhurat/:type/:date" element={<MuhuratDetail />} />

          {/* 🚫 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBox />
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;

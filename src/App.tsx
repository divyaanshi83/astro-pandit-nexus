import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Horoscope from "./pages/Horoscope";
import KundliMilan from "./pages/KundliMilan";
import Festivals from "./pages/Festivals";
import Store from "./pages/Store";
import Panchang from "./pages/Panchang";
import Eclipse from "./pages/Eclipse";
import NameCorrection from "./pages/NameCorrection";
import Calculators from "./pages/Calculators";
import ShubhMuhurat from "./pages/ShubhMuhurat";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Aries from "./pages/horoscope/Aries";
import Libra from "./pages/horoscope/Libra";
import Aquarius from "@/pages/horoscope/Aquarius";
import Leo from "./pages/horoscope/Leo";
import Sagittarius from "./pages/horoscope/Sagittarius";
import Virgo from "./pages/horoscope/Virgo";
import Gemini from "./pages/horoscope/Gemini";
import Scorpio from "./pages/horoscope/Scorpio";
import Cancer from "./pages/horoscope/Cancer";
import Capricorn from "./pages/horoscope/Capricorn";
import Pisces from "./pages/horoscope/Pisces";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/horoscope" element={<Horoscope />} />
  <Route path="/horoscope/aries" element={<Aries />} />
  <Route path="/horoscope/gemini" element={<Gemini />} />
  <Route path="/horoscope/cancer" element={<Cancer />} />
  <Route path="/horoscope/leo" element={<Leo />} />
  <Route path="/horoscope/virgo" element={<Virgo />} />
  <Route path="/horoscope/libra" element={<Libra />} />
  <Route path="/horoscope/scorpio" element={<Scorpio />} />
  <Route path="/horoscope/sagittarius" element={<Sagittarius />} />
  <Route path="/horoscope/capricorn" element={<Capricorn />} />
  <Route path="/horoscope/pisces" element={<Pisces />} />
  <Route path="/horoscope/aquarius" element={<Aquarius />} />

  <Route path="/kundli-milan" element={<KundliMilan />} />
  <Route path="/calculators" element={<Calculators />} />
  <Route path="/festivals" element={<Festivals />} />
  <Route path="/shubh-muhurat" element={<ShubhMuhurat />} />
  <Route path="/panchang" element={<Panchang />} />
  <Route path="/eclipse" element={<Eclipse />} />
  <Route path="/store" element={<Store />} />
  <Route path="/name-correction" element={<NameCorrection />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

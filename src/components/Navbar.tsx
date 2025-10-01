import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "hi" : "en");
  };

  const content = {
    en: {
      home: "Home",
      horoscope: "Horoscope",
      kundli: "Kundli Milan",
      calculators: "Calculators",
      festivals: "Festivals",
      muhurat: "Muhurat",
      panchang: "Panchang",
      eclipse: "Eclipse",
      store: "Store",
      nameCorrection: "Name Correction",
      about: "About",
      contact: "Contact"
    },
    hi: {
      home: "होम",
      horoscope: "राशिफल",
      kundli: "कुंडली मिलान",
      calculators: "कैलकुलेटर",
      festivals: "त्यौहार",
      muhurat: "मुहूर्त",
      panchang: "पंचांग",
      eclipse: "ग्रहण",
      store: "स्टोर",
      nameCorrection: "नाम सुधार",
      about: "परिचय",
      contact: "संपर्क"
    }
  };

  const t = content[language];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-playfair font-bold text-primary">
              Pandit Ashu Bahuguna
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 text-sm">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.home}
            </Link>
            <Link to="/horoscope" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.horoscope}
            </Link>
            <Link to="/kundli-milan" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.kundli}
            </Link>
            <Link to="/calculators" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.calculators}
            </Link>
            <Link to="/festivals" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.festivals}
            </Link>
            <Link to="/shubh-muhurat" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.muhurat}
            </Link>
            <Link to="/panchang" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.panchang}
            </Link>
            <Link to="/eclipse" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.eclipse}
            </Link>
            <Link to="/store" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.store}
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.about}
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.contact}
            </Link>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "EN" : "हिं"}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

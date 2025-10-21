import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

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
      numerology: "Numerology",
      vaastu: "Vaastu Dosh",
      store: "Store",
      about: "About",
      contact: "Contact",
      blog: "Blog", // <-- added Blog
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
      numerology: "अंक ज्योतिष",
      vaastu: "वास्तु दोष",
      store: "स्टोर",
      about: "परिचय",
      contact: "संपर्क",
      blog: "ब्लॉग", // <-- added Blog in Hindi
    },
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
            <Link to="/" className="nav-link">{t.home}</Link>
            <Link to="/horoscope" className="nav-link">{t.horoscope}</Link>
            <Link to="/kundli-milan" className="nav-link">{t.kundli}</Link>
            <Link to="/calculators" className="nav-link">{t.calculators}</Link>
            <Link to="/festivals" className="nav-link">{t.festivals}</Link>
            <Link to="/shubh-muhurat" className="nav-link">{t.muhurat}</Link>
            <Link to="/panchang" className="nav-link">{t.panchang}</Link>
            <Link to="/eclipse" className="nav-link">{t.eclipse}</Link>
            <Link to="/numerology" className="nav-link">{t.numerology}</Link>
            <Link to="/vaastu-dosh" className="nav-link">{t.vaastu}</Link>
            <Link to="/store" className="nav-link">{t.store}</Link>
            <Link to="/about" className="nav-link">{t.about}</Link>
            <Link to="/contact" className="nav-link">{t.contact}</Link>
            <Link to="/blog" className="nav-link">{t.blog}</Link> {/* <-- added Blog link */}
          </div>

          <Button variant="outline" size="sm" onClick={toggleLanguage} className="gap-2">
            <Globe className="h-4 w-4" />
            {language === "en" ? "EN" : "हिं"}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

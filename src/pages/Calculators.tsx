import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator, Heart, Star, Moon, Zap, Home, Car, Hash, Sparkles } from "lucide-react";

const calculators = [
  { name: "Love Calculator", icon: Heart, path: "/calculator/love-compatibility", description: "Check compatibility with your partner" },
  { name: "Flame Calculator", icon: Heart, path: "/calculator/flame-compatibility", description: "FLAME love test" },
  { name: "Match Making Calculator", icon: Heart, path: "/calculator/match-making-compatibility", description: "Check marriage compatibility" },

  { name: "Nakshatra Calculator", icon: Star, path: "/calculator/nakshatra-birth-star", description: "Find your birth star" },
  { name: "Dasha Calculator", icon: Moon, path: "/calculator/dasha-period-analysis", description: "Calculate planetary periods" },
  { name: "Mangal Dosh Calculator", icon: Zap, path: "/calculator/mangal-dosh-check", description: "Check Mars affliction" },
  { name: "Kaal Sarp Dosh Calculator", icon: Zap, path: "/calculator/kaal-sarp-dosha", description: "Check serpent dosha" },
  { name: "Pitra Dosh Calculator", icon: Zap, path: "/calculator/pitra-dosh-check", description: "Check ancestral dosha" },
  { name: "Shani Saade Sati Calculator", icon: Star, path: "/calculator/sade-saati-prediction", description: "Calculate Saturn's transit" },
  { name: "Lucky Vehicle Number", icon: Car, path: "/calculator/lucky-vehicle-number", description: "Find lucky vehicle number" },
  { name: "Rahu Ketu Calculator", icon: Moon, path: "/calculator/raahu-ketu-prediction", description: "Calculate lunar nodes" },
  { name: "Lal Kitab Calculator", icon: Calculator, path: "/calculator/laal-kitab-prediction", description: "Lal Kitab predictions" },
  { name: "Kundli Calculator", icon: Star, path: "/calculator/kundali-online", description: "Generate birth chart" },
  { name: "Lagna Navamsa Calculator", icon: Star, path: "/calculator/lagna-analysis", description: "Calculate ascendant charts" },
  { name: "Lucky Rudraksha", icon: Sparkles, path: "/calculator/lucky-rudraksha-recommendation", description: "Find your lucky Rudraksha" },
  { name: "Lucky Date Calculator", icon: Hash, path: "/calculator/lucky-date-prediction", description: "Find auspicious dates" },
  { name: "Unlucky Date Calculator", icon: Hash, path: "/calculator/unlucky-date-check", description: "Find inauspicious dates" },
  { name: "Numerology Calculator", icon: Hash, path: "/numerology-personal-analysis", description: "Calculate life path number" },
  { name: "Lucky Color Calculator", icon: Sparkles, path: "/calculator/lucky-color-prediction", description: "Find your lucky color" },
  { name: "Unlucky Color Calculator", icon: Sparkles, path: "/calculator/unlucky-color-check", description: "Find colors to avoid" },
  { name: "Favourable Alphabet", icon: Hash, path: "/calculator/favorite-alphabet-luck", description: "Lucky letters & numbers" },
  { name: "Moon Sign Calculator", icon: Moon, path: "/calculator/moon-sign-analysis", description: "Calculate your moon sign" },
];

const Calculators = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Astrology Calculators
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Free online calculators for accurate astrological predictions and guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Link key={calc.path} to={calc.path}>
                  <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {calc.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {calc.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                Need Personalized Guidance?
              </h3>
              <p className="text-muted-foreground mb-4">
                Get detailed analysis and remedies from Pandit Ashu Bahuguna
              </p>
              <p className="text-foreground font-semibold">
                📞 +91 9760924411
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Calculators;

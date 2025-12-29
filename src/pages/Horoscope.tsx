import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const zodiacSigns = [
  { name: "Aries", symbol: "♈"},
  { name: "Taurus", symbol: "♉"},
  { name: "Gemini", symbol: "♊"},
  { name: "Cancer", symbol: "♋"},
  { name: "Leo", symbol: "♌"},
  { name: "Virgo", symbol: "♍"},
  { name: "Libra", symbol: "♎"},
  { name: "Scorpio", symbol: "♏"},
  { name: "Sagittarius", symbol: "♐"},
  { name: "Capricorn", symbol: "♑"},
  { name: "Aquarius", symbol: "♒"},
  { name: "Pisces", symbol: "♓"},
];

const Horoscope = () => {
  return (
    <div className="min-h-screen bg-background">

      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Your Daily Horoscope
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your zodiac sign below to view your personalized prediction
            </p>
          </div>

          {/* Tabs for Daily / Weekly */}
          <Tabs defaultValue="daily" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-1 mb-8">
              <TabsTrigger value="daily">Daily</TabsTrigger>
            </TabsList>

            {/* Daily Horoscope List */}
            <TabsContent value="daily">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {zodiacSigns.map((sign) => (
                  <Link
                    key={sign.name}
                    to={`/horoscope/${sign.name.toLowerCase()}-daily-prediction`} // ✅ FIXED LINK
                  >
                    <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="text-5xl mb-3">{sign.symbol}</div>
                        <h3 className="text-xl font-playfair font-semibold mb-1 text-foreground">
                          {sign.name}
                        </h3>
                        <p className="text-muted-foreground">
                          Click to view today’s horoscope →
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Weekly Horoscope (Placeholder) */}
            <TabsContent value="weekly">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {zodiacSigns.map((sign) => (
                  <Card
                    key={sign.name}
                    className="hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-3">{sign.symbol}</div>
                      <h3 className="text-xl font-playfair font-semibold mb-1 text-foreground">
                        {sign.name}
                      </h3>
                      <p className="text-muted-foreground">
                        This week brings growth, introspection, and balance.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <FloatingButtons />
    </div>
  );
};

export default Horoscope;

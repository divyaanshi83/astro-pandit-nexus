import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const zodiacSigns = [
  { name: "Aries", symbol: "♈", dates: "Mar 21 - Apr 19" },
  { name: "Taurus", symbol: "♉", dates: "Apr 20 - May 20" },
  { name: "Gemini", symbol: "♊", dates: "May 21 - Jun 20" },
  { name: "Cancer", symbol: "♋", dates: "Jun 21 - Jul 22" },
  { name: "Leo", symbol: "♌", dates: "Jul 23 - Aug 22" },
  { name: "Virgo", symbol: "♍", dates: "Aug 23 - Sep 22" },
  { name: "Libra", symbol: "♎", dates: "Sep 23 - Oct 22" },
  { name: "Scorpio", symbol: "♏", dates: "Oct 23 - Nov 21" },
  { name: "Sagittarius", symbol: "♐", dates: "Nov 22 - Dec 21" },
  { name: "Capricorn", symbol: "♑", dates: "Dec 22 - Jan 19" },
  { name: "Aquarius", symbol: "♒", dates: "Jan 20 - Feb 18" },
  { name: "Pisces", symbol: "♓", dates: "Feb 19 - Mar 20" },
];

const Horoscope = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

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
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
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
                        <p className="text-sm text-muted-foreground mb-3">
                          {sign.dates}
                        </p>
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
                      <p className="text-sm text-muted-foreground mb-3">
                        {sign.dates}
                      </p>
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

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Horoscope;

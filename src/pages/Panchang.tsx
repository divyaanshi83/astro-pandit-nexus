import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Panchang = () => {
  const [panchang, setPanchang] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const fetchPanchang = async () => {
      try {
        const response = await fetch("/.netlify/functions/panchang");
        const data = await response.json();
        console.log("🔮 Panchang API response:", data);
        setPanchang(data);
      } catch (error) {
        console.error("❌ Panchang fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPanchang();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              🗓️ Daily Panchang
            </h1>
            <p className="text-muted-foreground text-lg">
              Hindu calendar and celestial guide — auto-updated daily
            </p>
          </div>

          <Card className="mb-6">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-2">
                {today}
              </h2>
            </CardContent>
          </Card>

          {loading ? (
            <p className="text-center text-muted-foreground animate-pulse">
              Fetching today’s Panchang…
            </p>
          ) : panchang ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  ["Tithi", panchang.tithi],
                  ["Paksha", panchang.paksha],
                  ["Nakshatra", panchang.nakshatra],
                  ["Yog", panchang.yog],
                  ["Karan", panchang.karan],
                  ["Day", panchang.day],
                  ["Maah", panchang.maah],
                  ["Chandra Raashi", panchang.chandraRaashi],
                  ["Ritu", panchang.ritu],
                  ["Aayan", panchang.aayan],
                  ["Vikram Samvat", panchang.vikramSamvat],
                  ["Gujarati Samvant", panchang.gujaratiSamvant],
                  ["Kali Samvant", panchang.kaliSamvant],
                  ["Shak Samvant", panchang.shakSamvant],
                  ["Sunrise", panchang.sunrise],
                  ["Sunset", panchang.sunset],
                  ["Moonrise", panchang.moonrise],
                  ["Moonset", panchang.moonset],
                  ["Pad", panchang.pad],
                  ["Charan", panchang.charan],
                ].map(([title, value]) => (
                  <Card key={title}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {title}
                      </h3>
                      <p className="text-muted-foreground">{value || "—"}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                    Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {panchang.overview ||
                      "The celestial energies today influence harmony and productivity. Ideal for spiritual activities, reflection, and maintaining balance."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <p className="text-center text-destructive">
              Couldn’t fetch Panchang data.
            </p>
          )}
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Panchang;

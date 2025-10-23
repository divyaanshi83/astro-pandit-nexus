import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const initialDoshList = [
  "Toilet in Northeast (Ishan Kon)",
  "Kitchen in Northeast",
  "Bedroom in Southeast",
  "Staircase in Northeast",
  "Main Door in South",
  "Toilet under staircase",
  "Kitchen under staircase",
  "Bedroom in Southwest",
  "Septic tank in Northeast",
  "Temple in Bedroom",
  "Mirror facing bed",
  "Toilet near Pooja room",
  "Toilet in center (Brahmasthan)",
  "Missing Northeast corner",
  "Overhead water tank in Northeast",
];

const VaastuDosh = () => {
  const [selectedDosh, setSelectedDosh] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const filteredList = initialDoshList.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!selectedDosh) return;
    const fetchRemedy = async () => {
      setLoading(true);
      setResult(null);
      try {
        const response = await fetch("/.netlify/functions/vaastuRemedy", {
          method: "POST",
          body: JSON.stringify({ issue: selectedDosh }),
        });
        const data = await response.json();
        setResult(data);
      } catch (err) {
        console.error("❌ Vaastu remedy API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRemedy();
  }, [selectedDosh]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl font-extrabold text-center text-primary mb-3">
            🏠 Vaastu Dosh & Remedies
          </h1>
          <p className="text-center text-lg text-muted-foreground mb-10">
            Discover the causes, astrological cures, and sacred mantras to restore harmony in your home.
          </p>

          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="🔍 Search Vaastu Dosh (e.g., Toilet in Northeast)..."
              className="w-full md:w-2/3 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex justify-center mb-10">
            <select
              className="w-full md:w-2/3 p-3 border rounded-lg shadow-sm"
              value={selectedDosh}
              onChange={(e) => setSelectedDosh(e.target.value)}
            >
              <option value="">Select a Vaastu Dosh</option>
              {filteredList.map((issue) => (
                <option key={issue} value={issue}>
                  {issue}
                </option>
              ))}
            </select>
          </div>

          {loading && (
            <p className="text-center text-muted-foreground animate-pulse">
              Fetching Vaastu remedies for "{selectedDosh}"...
            </p>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 mb-10 shadow-lg bg-card">
                <CardContent>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    🧭 {selectedDosh}
                  </h2>

                  <div className="space-y-5 text-lg text-muted-foreground">
                    <p>
                      <strong>🚫 Cause:</strong> {result.cause}
                    </p>
                    <p>
                      <strong>🔍 Effect:</strong> {result.effect}
                    </p>

                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-2">
                        🕉️ Remedies, Puja & Yantras
                      </h3>
                      <ul className="list-disc ml-6 space-y-1">
                        {result.remedies?.map((r: string, i: number) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-purple-600 mb-2">
                        🌙 Astrological & Mantra Solutions
                      </h3>
                      <ul className="list-disc ml-6 space-y-1">
                        {result.astrology?.map((r: string, i: number) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-red-600 mb-2">
                        ⚠️ Avoid These
                      </h3>
                      <ul className="list-disc ml-6 space-y-1">
                        {result.avoid?.map((r: string, i: number) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 text-center">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-3 rounded-lg">
                      📞 Book Full Vaastu Consultation – ₹11,000
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default VaastuDosh;

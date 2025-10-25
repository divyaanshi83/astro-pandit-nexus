import React, { useState } from "react";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface MuhuratDate {
  date: string;
  description: string;
}

interface MuhuratDetail {
  timings: string;
  pujaSteps: string;
  mantra: string;
  donation: string;
  bestTime: string;
  location: string;
}

const muhuratTypes = [
  { name: "Annaprashan", path: "annaprashan", description: "Auspicious dates for baby's first rice ceremony" },
  { name: "Naamkaran", path: "naamkaran", description: "Best timings for baby naming ceremony" },
  { name: "Vehicle Purchase", path: "vehicle", description: "Lucky dates for buying new vehicles" },
  { name: "Marriage", path: "marriage", description: "Auspicious dates for weddings" },
  { name: "Gold Buying", path: "gold", description: "Best dates for purchasing gold and jewelry" },
  { name: "Bhoomi Pujan", path: "bhoomi-pujan", description: "Auspicious timings for land worship ceremony" },
  { name: "Griha Pravesh", path: "griha-pravesh", description: "Best dates for housewarming ceremony" },
  { name: "Mundan", path: "mundan", description: "Auspicious dates for baby's first haircut" },
];

// ✅ Base API URL from .env or fallback
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const ShubhMuhurat: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [dates, setDates] = useState<MuhuratDate[]>([]);
  const [details, setDetails] = useState<MuhuratDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🧭 Fetch Muhurat Dates
  const fetchMuhuratDates = async (type: string) => {
    setLoading(true);
    setError(null);
    setDetails(null);
    setSelectedType(type);

    try {
      console.log(`🔍 Fetching Muhurat Dates from: ${API_BASE}/api/muhurat/dates?type=${type}`);
      const res = await fetch(`${API_BASE}/api/muhurat/dates?type=${encodeURIComponent(type)}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error(`HTTP error ${res.status}`);

      const data = await res.json();
      if (!data.success) throw new Error("Invalid response from server");

      setDates(
        data.dates.map((d: any) => ({
          date: d.date,
          description: d.description,
        }))
      );
    } catch (err) {
      console.error("❌ Error fetching Muhurat dates:", err);
      setError("⚠️ Showing sample Muhurat dates (API not responding).");
      setDates([
        { date: "15 March 2025", description: `Very auspicious day for ${type}` },
        { date: "27 April 2025", description: "Favorable Nakshatra and Tithi for ceremony" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 🪔 Fetch Detailed Muhurat Info
  const fetchMuhuratDetails = async (type: string, date: string) => {
    setLoading(true);
    setError(null);

    try {
      console.log(`🔍 Fetching Muhurat Details from: ${API_BASE}/api/muhurat/details?type=${type}&date=${date}`);
      const res = await fetch(
        `${API_BASE}/api/muhurat/details?type=${encodeURIComponent(type)}&date=${encodeURIComponent(date)}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!res.ok) throw new Error(`HTTP error ${res.status}`);

      const data = await res.json();
      if (!data.success) throw new Error("Invalid response from server");

      setDetails({
        timings: data.timings,
        pujaSteps: data.pujaSteps,
        mantra: data.mantra || "Om Shubham Karoti Kalyanam",
        donation: data.donation || "Donate food or sweets to Brahmins or needy children.",
        bestTime: data.bestTime || "Morning is highly auspicious between 8:00 AM to 11:30 AM",
        location: data.location || "Preferably at home or nearby temple with family blessings.",
      });
    } catch (err) {
      console.error("❌ Error fetching details:", err);
      setError("⚠️ Unable to load detailed Muhurat info. Showing default sample.");
      setDetails({
        timings: "06:30 AM – 10:45 AM, 02:15 PM – 04:00 PM",
        pujaSteps: "Kalash Sthapana, Sankalp, Mantra Japa, Deep Daan, Prasad Vitran",
        mantra: "Om Shubham Karoti Kalyanam",
        donation: "Donate food or sweets to Brahmins or needy children.",
        bestTime: "Morning is highly auspicious between 8:00 AM to 11:30 AM",
        location: "Preferably at home or nearby temple with family blessings.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Shubh Muhurat 2025
            </h1>
            <p className="text-muted-foreground text-lg">
              Find auspicious dates and timings for all important life events
            </p>
          </div>

          {/* 🟡 Step 1: Choose Muhurat Type */}
          {!selectedType && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {muhuratTypes.map((item) => (
                <Card
                  key={item.path}
                  onClick={() => fetchMuhuratDates(item.name)}
                  className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                      {item.name} Muhurat 2025
                    </h3>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <p className="text-sm text-primary font-semibold">📅 Tap to view auspicious dates</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* 🟢 Step 2: Muhurat Dates */}
          {selectedType && !details && (
            <div>
              <button
                onClick={() => setSelectedType(null)}
                className="mb-6 text-primary underline hover:text-primary/80"
              >
                ← Back to All Muhurats
              </button>

              <h2 className="text-3xl font-playfair font-bold mb-6 text-center">
                {selectedType} Muhurat Dates
              </h2>

              {loading && (
                <div className="flex justify-center my-12">
                  <Loader2 className="animate-spin h-8 w-8 text-primary" />
                </div>
              )}

              {error && <p className="text-orange-600 text-center">{error}</p>}

              {!loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dates.map((item, i) => (
                    <Card
                      key={i}
                      onClick={() => fetchMuhuratDetails(selectedType, item.date)}
                      className="hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer"
                    >
                      <CardContent className="p-5">
                        <h4 className="text-lg font-semibold text-foreground">{item.date}</h4>
                        <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                        <p className="text-primary text-sm mt-3 font-semibold">🔍 View Details</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 🧭 Step 3: Details View */}
          {details && (
            <div>
              <button
                onClick={() => setDetails(null)}
                className="mb-6 text-primary underline hover:text-primary/80"
              >
                ← Back to Dates
              </button>

              <Card className="border-primary/30">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-playfair font-bold text-center text-foreground mb-4">
                    {selectedType} Muhurat Details
                  </h3>

                  {loading && (
                    <div className="flex justify-center my-8">
                      <Loader2 className="animate-spin h-8 w-8 text-primary" />
                    </div>
                  )}

                  {error && <p className="text-orange-600 text-center">{error}</p>}

                  {!loading && (
                    <>
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">🕰️ Shubh Muhurat Time</h4>
                        <p className="text-muted-foreground whitespace-pre-line">{details.timings}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">🕉️ Mantra & Chanting</h4>
                        <p className="text-muted-foreground whitespace-pre-line">{details.mantra}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">🙏 Puja Vidhi (Steps)</h4>
                        <p className="text-muted-foreground whitespace-pre-line">{details.pujaSteps}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">🎁 Suggested Donation</h4>
                        <p className="text-muted-foreground whitespace-pre-line">{details.donation}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">⏰ Best Time</h4>
                        <p className="text-muted-foreground whitespace-pre-line">{details.bestTime}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">📍 Where to Perform</h4>
                        <p className="text-muted-foreground whitespace-pre-line">{details.location}</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <FloatingButtons />
    </div>
  );
};

export default ShubhMuhurat;

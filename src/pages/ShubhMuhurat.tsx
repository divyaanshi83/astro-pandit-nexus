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
  overview: string;
  luckyColor: string;
  luckyNumber: string;
  grahPosition: string;
  rahukaal: string;
  doshKaal: string;
  shubhWork: string;
  ashubhWork: string;
  bestTime: string;
  mantra: string;
  donation: string;
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

const API_BASE = "/api";

const ShubhMuhurat: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [dates, setDates] = useState<MuhuratDate[]>([]);
  const [details, setDetails] = useState<MuhuratDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // -------------------------------------------------------------
  // FETCH MUHURAT DATES
  // -------------------------------------------------------------
  const fetchMuhuratDates = async (type: string) => {
    setLoading(true);
    setError(null);
    setDetails(null);
    setSelectedType(type);

    try {
      const res = await fetch(`${API_BASE}/muhurat_dates.php?type=${encodeURIComponent(type)}`);
      const data = await res.json();

      setDates(
        (data?.dates || []).map((d: any) => ({
          date: d.date,
          description: d.description,
        }))
      );
    } catch (err) {
      console.error("❌ Error fetching Muhurat dates:", err);
      setError("⚠️ Showing sample Muhurat dates (API not responding).");

      setDates([
        { date: "2025-03-15", description: `Very auspicious day for ${type}` },
        { date: "2025-04-27", description: "Favorable Nakshatra and Tithi for ceremony" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // -------------------------------------------------------------
  // FETCH MUHURAT DETAILS
  // -------------------------------------------------------------
  const fetchMuhuratDetails = async (type: string, date: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${API_BASE}/muhurat_details.php?type=${encodeURIComponent(type)}&date=${encodeURIComponent(date)}`
      );

      const data = await res.json();

      setDetails({
        timings: data.timings ?? "",
        overview: data.overview ?? "",
        pujaSteps: data.pujaSteps ?? "",
        luckyColor: data.luckyColor ?? "Yellow",
        luckyNumber: data.luckyNumber ?? "3",
        grahPosition: data.grahPosition ?? "",
        rahukaal: data.rahukaal ?? "",
        doshKaal: data.doshKaal ?? "",
        shubhWork: data.shubhWork ?? "",
        ashubhWork: data.ashubhWork ?? "",
        bestTime: data.bestTime ?? "",
        mantra: data.mantra ?? "",
        donation: data.donation ?? "",
        location: data.location ?? "",
      });
    } catch (err) {
      console.error("❌ Error fetching details:", err);
      setError("⚠️ Unable to load detailed Muhurat info.");
    } finally {
      setLoading(false);
    }
  };

  // -------------------------------------------------------------
  // SAFE COLOR UTILITY (fixes crash)
  // -------------------------------------------------------------
  const ColorCircle = ({ color }: { color: string }) => {
    const safeColor = color ? String(color).toLowerCase() : "yellow";

    return (
      <div className="flex items-center gap-3">
        <div
          className="h-5 w-5 rounded-full border shadow-sm"
          style={{ backgroundColor: safeColor }}
        ></div>
        <span className="text-muted-foreground capitalize">{color}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Shubh Muhurat (AI Powered)
            </h1>
            <p className="text-muted-foreground text-lg">
              Most accurate AI-generated auspicious timings & detailed astrology.
            </p>
          </div>

          {/* ------------------------------------- */}
          {/* STEP 1 — SELECT MUHURAT TYPE */}
          {/* ------------------------------------- */}
          {!selectedType && !details && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {muhuratTypes.map((item) => (
                <Card
                  key={item.path}
                  onClick={() => fetchMuhuratDates(item.name)}
                  className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <p className="text-sm text-primary font-semibold">📅 View Dates</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* ------------------------------------- */}
          {/* STEP 2 — SHOW DATES */}
          {/* ------------------------------------- */}
          {selectedType && !details && (
            <div>
              <button onClick={() => setSelectedType(null)} className="mb-6 text-primary underline">
                ← Back
              </button>

              <h2 className="text-3xl font-bold text-center mb-6">{selectedType} Muhurat Dates</h2>

              {loading && (
                <div className="flex justify-center my-12">
                  <Loader2 className="animate-spin h-8 w-8 text-primary" />
                </div>
              )}

              {!loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dates.map((item, i) => (
                    <Card
                      key={i}
                      onClick={() => fetchMuhuratDetails(selectedType, item.date)}
                      className="hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer"
                    >
                      <CardContent className="p-5">
                        <h4 className="text-lg font-semibold">{item.date}</h4>
                        <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                        <p className="text-primary text-sm mt-3 font-semibold">🔍 View Details</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ------------------------------------- */}
          {/* STEP 3 — DETAILS VIEW */}
          {/* ------------------------------------- */}
          {details && (
            <div>
              <button onClick={() => setDetails(null)} className="mb-6 text-primary underline">
                ← Back
              </button>

              <Card className="border-primary/30">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-center mb-4">
                    {selectedType} Muhurat (Details)
                  </h3>

                  {/* Overview */}
                  <section>
                    <h4 className="text-xl font-semibold mb-2">📜 Overview</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{details.overview}</p>
                  </section>

                  {/* Timings */}
                  <section>
                    <h4 className="text-xl font-semibold mb-2">🕰️ Shubh Muhurat Time</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{details.timings}</p>
                  </section>

                  {/* Best Time */}
                  <section>
                    <h4 className="text-xl font-semibold mb-2">⏰ Best Time</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{details.bestTime}</p>
                  </section>

                  {/* Lucky Color & Number */}
                  <section>
                    <h4 className="text-xl font-semibold mb-2">🎨 Lucky Color & Number</h4>
                    <div className="flex gap-6 items-center">
                      <ColorCircle color={details.luckyColor} />
                      <p className="text-muted-foreground">
                        🔢 <strong>Lucky Number:</strong> {details.luckyNumber}
                      </p>
                    </div>
                  </section>

                  {/* Rahukaal & Dosh Kaal */}
                  <section>
                    <h4 className="text-xl font-semibold mb-2">⚠️ Negative Timings</h4>
                    <p className="text-red-500">🚫 Rahukaal: {details.rahukaal}</p>
                    <p className="text-red-500">⛔ Dosh Kaal: {details.doshKaal}</p>
                  </section>

                  {/* Grah Position */}
                  <section>
                    <h4 className="text-xl font-semibold mb-2">🪐 Grah Position</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{details.grahPosition}</p>
                  </section>

                  {/* Puja Steps */}
                  <section>
                    <h4 className="text-xl font-semibold mb-2">🙏 Puja Vidhi</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{details.pujaSteps}</p>
                  </section>

                  {/* Shubh / Ashubh Work */}
                  <section>
                    <h4 className="text-xl font-semibold mb-2">✔ शुभ कार्य</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{details.shubhWork}</p>

                    <h4 className="text-xl font-semibold mt-4 mb-2">❌ अशुभ कार्य</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{details.ashubhWork}</p>
                  </section>

                  {/* Mantra */}
                  <section>
                    <h4 className="text-xl font-semibold mb-2">🕉️ Mantra</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{details.mantra}</p>
                  </section>

                  {/* Donation */}
                  <section>
                    <h4 className="text-xl font-semibold mb-2">🎁 Suggested Donation</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{details.donation}</p>
                  </section>

                  {/* Location */}
                  <section>
                    <h4 className="text-xl font-semibold mb-2">📍 Place to Perform</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{details.location}</p>
                  </section>
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

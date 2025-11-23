import { useEffect, useState } from "react";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Panchang = () => {
  const [panchang, setPanchang] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("daily"); // daily | weekly | monthly

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  /* ------------------------ CACHE CONFIG ------------------------ */

  const CACHE_TIME = {
    daily: 24 * 60 * 60 * 1000,       // 24h
    weekly: 7 * 24 * 60 * 60 * 1000,  // 7d
    monthly: 30 * 24 * 60 * 60 * 1000 // 30d
  };

  const loadCachedPanchang = (type: string) => {
    const cached = localStorage.getItem("panchang_" + type);
    if (!cached) return null;

    try {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_TIME[type]) {
        return data; // valid cache
      }
    } catch {
      return null;
    }
    return null;
  };

  const saveCache = (type: string, data: any) => {
    localStorage.setItem(
      "panchang_" + type,
      JSON.stringify({ data, timestamp: Date.now() })
    );
  };

  /* ------------------------ FETCH PANCHANG ------------------------ */

  const fetchPanchang = async (type = "daily") => {
    setLoading(true);

    // Try cache first
    const cached = loadCachedPanchang(type);
    if (cached) {
      setPanchang(cached);
      setLoading(false);
      return;
    }

    // Fetch API if no cache
    try {
      const response = await fetch(`/api/panchang.php?type=${type}`);
      const data = await response.json();
      const finalData = data.panchang || data;

      setPanchang(finalData);
      saveCache(type, finalData);
    } catch (error) {
      console.error("❌ Panchang fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPanchang(mode);
  }, [mode]);

  return (
    <div className="min-h-screen bg-background">

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-3">
              🗓️ Panchang
            </h1>
            <p className="text-muted-foreground text-lg">
              Hindu calendar and celestial guide — auto-updated
            </p>
          </div>

          {/* Switch */}
          <div className="flex justify-center gap-4 mb-8">
            {["daily", "weekly", "monthly"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${mode === m
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent"
                  }`}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>

          {/* Today's Date */}
          {mode === "daily" && (
            <Card className="mb-6">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-playfair font-bold text-foreground mb-2">
                  {today}
                </h2>
              </CardContent>
            </Card>
          )}

          {/* Content */}
          {loading ? (
            <p className="text-center text-muted-foreground animate-pulse">
              Fetching {mode} Panchang…
            </p>
          ) : !panchang ? (
            <p className="text-center text-destructive">Couldn’t fetch Panchang data.</p>
          ) : (
            <>
              {/* ================= DAILY ================= */}
              {mode === "daily" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Basic Panchang */}
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
                          <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
                          <p className="text-muted-foreground">{value || "—"}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Advanced Panchang */}
                  <Card className="mt-8">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-playfair font-bold mb-4">Advanced Panchang</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          ["Rahukaal", panchang.rahukaal],
                          ["Gulika Kaal", panchang.gulikaal],
                          ["Yamaganda", panchang.yamaganda],
                          ["Abhijit Muhurat", panchang.abhijitMuhurat],
                          ["Durmuhurta", panchang.durmuhurta],
                          ["Amrit Kaal", panchang.amritKaal],
                        ].map(([title, value]) => (
                          <Card key={title}>
                            <CardContent className="p-6">
                              <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
                              <p className="text-muted-foreground">{value || "—"}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Choghadiya */}
                  {panchang.choghadiya && (
                    <Card className="mt-8">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                          Choghadiya
                        </h3>

                        <h4 className="text-xl font-semibold mb-2">Day Choghadiya</h4>
                        <div className="space-y-1 mb-6">
                          {panchang.choghadiya.day?.map((slot: any, index: number) => (
                            <p key={index} className="text-muted-foreground">
                              <b>{slot.period}</b> — {slot.type}
                            </p>
                          ))}
                        </div>

                        <h4 className="text-xl font-semibold mb-2">Night Choghadiya</h4>
                        <div className="space-y-1">
                          {panchang.choghadiya.night?.map((slot: any, index: number) => (
                            <p key={index} className="text-muted-foreground">
                              <b>{slot.period}</b> — {slot.type}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}


                  {/* Shubh / Ashubh */}
                  <Card className="mt-8">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-playfair font-bold mb-4">Shubh & Ashubh</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-green-600 mb-2">Shubh Timings</h3>
                            <p className="text-muted-foreground">{panchang.shubhTimings || "—"}</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-red-600 mb-2">Ashubh Timings</h3>
                            <p className="text-muted-foreground">{panchang.ashubhTimings || "—"}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Graha Gochar */}
                  {panchang.grahaGochar && (
                    <Card className="mt-8">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-playfair font-bold mb-4">Graha Gochar</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {Object.entries(panchang.grahaGochar).map(([planet, pos]: any) => (
                            <Card key={planet}>
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold text-primary mb-2">
                                  {planet.charAt(0).toUpperCase() + planet.slice(1)}
                                </h3>
                                <p className="text-muted-foreground">{pos}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Tithi Ending Time */}
                  <Card className="mt-8">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-playfair font-bold mb-4">Tithi Ending Time</h3>
                      <p className="text-muted-foreground">{panchang.tithiEndingTime || "—"}</p>
                    </CardContent>
                  </Card>

                  {/* Auspicious Activities */}
                  {panchang.auspiciousActivities && (
                    <Card className="mt-8">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-playfair font-bold mb-4">Auspicious Activities</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(panchang.auspiciousActivities).map(([name, val]: any) => (
                            <p key={name} className="text-muted-foreground">
                              <b>{name.charAt(0).toUpperCase() + name.slice(1)}:</b> {val}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Overview */}
                  <Card className="mt-8 mb-10">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-playfair font-bold mb-4">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {panchang.overview}
                      </p>
                    </CardContent>
                  </Card>

                </motion.div>
              )}

              {/* ================= WEEKLY & MONTHLY ================= */}
              {(mode === "weekly" || mode === "monthly") && panchang.days && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  {panchang.days.map((day: any, idx: number) => (
                    <Card key={idx}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{day.date}</h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <p><b>Tithi:</b> {day.tithi}</p>
                          <p><b>Nakshatra:</b> {day.nakshatra}</p>
                          <p><b>Yog:</b> {day.yog}</p>
                          <p><b>Karan:</b> {day.karan}</p>
                          <p><b>Sunrise:</b> {day.sunrise}</p>
                          <p><b>Sunset:</b> {day.sunset}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              )}

            </>
          )}
        </div>
      </main>

      <FloatingButtons />
    </div>
  );
};

export default Panchang;

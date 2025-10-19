import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const rashis = [
  "Aries (Mesha)",
  "Taurus (Vrishabha)",
  "Gemini (Mithun)",
  "Cancer (Karka)",
  "Leo (Simha)",
  "Virgo (Kanya)",
  "Libra (Tula)",
  "Scorpio (Vrishchik)",
  "Sagittarius (Dhanu)",
  "Capricorn (Makar)",
  "Aquarius (Kumbh)",
  "Pisces (Meen)"
];

const Eclipse = () => {
  const [selectedRashi, setSelectedRashi] = useState("");
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getAIPrediction = async () => {
    if (!selectedRashi) return alert("Please select your Rashi first!");
    setLoading(true);
    setAiResult(null);

    try {
      const prompt = `You are a Vedic astrology expert. For the rashi "${selectedRashi}", tell:
      1. Whether the 2025 Solar Eclipse (March 29) is favorable or unfavorable, and why.
      2. Whether the 2025 Lunar Eclipse (September 7) is favorable or unfavorable, and why.
      3. Suggest separate Puja or remedies for Solar and Lunar eclipses for this rashi.
      Keep it spiritual, short, and devotional in tone.`;

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 400,
        }),
      });

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || "No response from AI.";
      setAiResult(content);
    } catch (error) {
      console.error("AI fetch error:", error);
      setAiResult("Something went wrong fetching AI prediction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Solar & Lunar Eclipse 2025
            </h1>
            <p className="text-muted-foreground text-lg">
              Timings, phases, rituals, and remedies for your location
            </p>
          </div>

          {/* 🌞 Your Full Static Tabs */}
          <Tabs defaultValue="solar" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="solar">Solar Eclipse</TabsTrigger>
              <TabsTrigger value="lunar">Lunar Eclipse</TabsTrigger>
            </TabsList>

            {/* === SOLAR ECLIPSE TAB === */}
            <TabsContent value="solar">
              <div className="space-y-6">
                {/* All your static Solar cards */}
                {/* 🔸 Timings */}
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">
                      Solar Eclipse - March 29, 2025
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Timings</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Eclipse Begins: 8:30 AM</li>
                          <li>• Maximum Eclipse: 10:15 AM</li>
                          <li>• Eclipse Ends: 12:00 PM</li>
                          <li>• Duration: 3 hours 30 minutes</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Visibility</h3>
                        <p className="text-muted-foreground mb-2">
                          Visible in Northern India, parts of Europe, and Arctic regions
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                          *Timings may vary based on your location
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 🔸 Phases */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Phases of Solar Eclipse</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">1.</span>
                        <p className="text-muted-foreground">Partial Eclipse Begins - Moon starts covering the Sun</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">2.</span>
                        <p className="text-muted-foreground">Total Eclipse - Moon completely covers the Sun</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">3.</span>
                        <p className="text-muted-foreground">Maximum Eclipse - Peak of totality</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">4.</span>
                        <p className="text-muted-foreground">Partial Eclipse Ends - Sun becomes fully visible again</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 🔸 Do's and Don'ts */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Do's and Don'ts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Do's ✓</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Take bath after eclipse ends</li>
                          <li>• Chant mantras during eclipse</li>
                          <li>• Donate to the needy</li>
                          <li>• Keep tulsi leaves in food items</li>
                          <li>• Meditate and pray</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-destructive mb-3">Don'ts ✗</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Avoid eating during eclipse</li>
                          <li>• Don't look directly at the sun</li>
                          <li>• Avoid cooking food</li>
                          <li>• Don't start new work</li>
                          <li>• Pregnant women should stay indoors</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 🔸 Remedies */}
                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-4">
                      Eclipse Remedies & Rituals
                    </h3>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Perform Surya Mantra Jaap (Sun deity worship)</li>
                      <li>• Donate wheat, jaggery, and copper items</li>
                      <li>• Take holy dip in sacred river after eclipse</li>
                      <li>• Offer water to Sun God after eclipse ends</li>
                    </ul>
                    <p className="text-center text-foreground font-semibold mt-6">
                      📞 Book Eclipse Remedy Puja: +91 9760924411
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* === LUNAR ECLIPSE TAB === */}
            <TabsContent value="lunar">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">
                      Lunar Eclipse - September 7, 2025
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Timings</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Eclipse Begins: 10:45 PM</li>
                          <li>• Maximum Eclipse: 12:30 AM</li>
                          <li>• Eclipse Ends: 2:15 AM</li>
                          <li>• Duration: 3 hours 30 minutes</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Visibility</h3>
                        <p className="text-muted-foreground mb-2">
                          Visible across India, Asia, Australia, and Pacific regions
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                          *Timings may vary based on your location
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Phases of Lunar Eclipse</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">1.</span>
                        <p className="text-muted-foreground">Penumbral Eclipse - Earth's shadow starts covering Moon</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">2.</span>
                        <p className="text-muted-foreground">Partial Eclipse - Moon enters Earth's umbra</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">3.</span>
                        <p className="text-muted-foreground">Total Eclipse - Moon completely covered (Blood Moon)</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">4.</span>
                        <p className="text-muted-foreground">Eclipse Ends - Moon becomes fully visible again</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Do's and Don'ts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Do's ✓</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Chant Chandra mantras</li>
                          <li>• Take bath after eclipse</li>
                          <li>• Donate white items (milk, rice)</li>
                          <li>• Perform charity</li>
                          <li>• Meditate during eclipse</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-destructive mb-3">Don'ts ✗</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Avoid eating during eclipse</li>
                          <li>• Don't sleep during eclipse</li>
                          <li>• Avoid drinking water</li>
                          <li>• Don't use sharp objects</li>
                          <li>• Pregnant women should be cautious</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-4">
                      Eclipse Remedies & Rituals
                    </h3>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Perform Chandra Mantra Jaap (Moon deity worship)</li>
                      <li>• Donate white clothes, rice, and silver items</li>
                      <li>• Offer milk and water to Moon God</li>
                      <li>• Light camphor and perform aarti after eclipse</li>
                    </ul>
                    <p className="text-center text-foreground font-semibold mt-6">
                      📞 Book Eclipse Remedy Puja: +91 9760924411
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* 🌟 AI-POWERED SECTION */}
          <Card className="mt-16 border-primary/40 bg-gradient-to-br from-primary/5 to-secondary/10 shadow-md">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
                🔮 Personalized Eclipse Guidance (AI-Powered)
              </h3>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
                <Select onValueChange={setSelectedRashi}>
                  <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="Select Your Rashi" />
                  </SelectTrigger>
                  <SelectContent>
                    {rashis.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button onClick={getAIPrediction} disabled={loading}>
                  {loading ? "Fetching from AI..." : "Get AI Eclipse Insight"}
                </Button>
              </div>

              {aiResult && (
                <div className="mt-6 text-left mx-auto max-w-2xl p-6 rounded-xl bg-background/60 border">
                  <h4 className="font-semibold text-primary mb-3">
                    AI Insights for {selectedRashi}:
                  </h4>
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {aiResult}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Eclipse;

import { useState } from "react";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const rashis = [
  "मेष",
  "वृषभ",
  "मिथुन",
  "कर्क",
  "सिंह",
  "कन्या",
  "तुला",
  "वृश्चिक",
  "धनु",
  "मकर",
  "कुंभ",
  "मीन",
];

const Eclipse = () => {
  const [selectedRashi, setSelectedRashi] = useState("");
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getAIPrediction = async () => {
    if (!selectedRashi) {
      alert("कृपया अपनी राशि चुनें");
      return;
    }

    setLoading(true);
    setAiResult(null);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "user",
                content: `आप एक वैदिक ज्योतिष विशेषज्ञ हैं। ${selectedRashi} राशि के लिए सूर्य एवं चंद्र ग्रहण का प्रभाव, शुभ-अशुभ फल और उपाय बताएं।`,
              },
            ],
            max_tokens: 400,
          }),
        }
      );

      const data = await response.json();
      setAiResult(
        data.choices?.[0]?.message?.content ||
          "AI से उत्तर प्राप्त नहीं हुआ।"
      );
    } catch (e) {
      setAiResult("AI से जानकारी प्राप्त करने में समस्या आई।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">

          {/* 🔍 SEO H1 */}
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold font-playfair">
              सूर्य एवं चंद्र ग्रहण 2026 – समय, प्रभाव और उपाय
            </h1>
            <p className="mt-3 text-muted-foreground text-base md:text-lg">
              भारत में ग्रहण का समय, धार्मिक महत्व, क्या करें और क्या न करें
            </p>
          </header>

          <Tabs defaultValue="solar">
            <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-10">
              <TabsTrigger value="solar">☀️ सूर्य ग्रहण</TabsTrigger>
              <TabsTrigger value="lunar">🌙 चंद्र ग्रहण</TabsTrigger>
            </TabsList>

            {/* ================= SOLAR ================= */}
            <TabsContent value="solar" className="space-y-6">

              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    सूर्य ग्रहण – 12 अगस्त 2026
                  </h2>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>ग्रहण आरंभ: सुबह 4:58</li>
                    <li>मध्य ग्रहण: शाम 5:46</li>
                    <li>ग्रहण समाप्त: शाम 6:34</li>
                    <li>अवधि: 2 घंटे 18 सेकंड</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Do & Don't */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-6">
                    सूर्य ग्रहण – क्या करें और क्या न करें
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        क्या करें ✓
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>ग्रहण के बाद स्नान करें</li>
                        <li>ॐ सूर्याय नमः मंत्र जाप करें</li>
                        <li>दान-पुण्य करें</li>
                        <li>सूर्य देव को जल अर्पित करें</li>
                        <li>ध्यान और साधना करें</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-destructive mb-2">
                        क्या न करें ✗
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>भोजन या पानी न लें</li>
                        <li>सीधे सूर्य को न देखें</li>
                        <li>नया कार्य शुरू न करें</li>
                        <li>गर्भवती महिलाएं बाहर न जाएं</li>
                      </ul>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* ================= LUNAR ================= */}
            <TabsContent value="lunar" className="space-y-6">

              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    चंद्र ग्रहण – 3 मार्च 2026
                  </h2>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>ग्रहण आरंभ: सुबह 11:04</li>
                    <li>मध्य ग्रहण: रात 12:30</li>
                    <li>ग्रहण समाप्त: रात 12:02</li>
                    <li>अवधि: 5 घंटे 39 मिनट</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-6">
                    चंद्र ग्रहण – क्या करें और क्या न करें
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        क्या करें ✓
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>ॐ चंद्राय नमः मंत्र जाप करें</li>
                        <li>स्नान एवं दान करें</li>
                        <li>दूध, चावल का दान करें</li>
                        <li>दीपक या कपूर जलाएं</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-destructive mb-2">
                        क्या न करें ✗
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>ग्रहण के समय न सोएं</li>
                        <li>भोजन-पानी से बचें</li>
                        <li>तेज औजारों का प्रयोग न करें</li>
                        <li>नकारात्मक चर्चा न करें</li>
                      </ul>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* 🤖 AI Section */}
          <Card className="mt-14">
            <CardContent className="p-6 md:p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                🔮 राशि अनुसार ग्रहण प्रभाव (AI आधारित)
              </h2>

              <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
                <Select onValueChange={setSelectedRashi}>
                  <SelectTrigger className="w-[240px]">
                    <SelectValue placeholder="अपनी राशि चुनें" />
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
                  {loading ? "लोड हो रहा है..." : "ग्रहण प्रभाव जानें"}
                </Button>
              </div>

              {aiResult && (
                <div className="text-left max-w-2xl mx-auto border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">
                    {selectedRashi} राशि के लिए परिणाम
                  </h3>
                  <p className="whitespace-pre-line text-muted-foreground">
                    {aiResult}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

        </div>
      </main>

      <FloatingButtons />
    </div>
  );
};

export default Eclipse;

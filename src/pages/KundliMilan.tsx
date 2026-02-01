import { useState } from "react";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const KundliMilan = () => {
  const [loading, setLoading] = useState(false);
  const [resultHtml, setResultHtml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResultHtml(null);

    try {
      const formData = new FormData(e.currentTarget);

      const res = await fetch("/api/kundli-milan.php", {
        method: "POST",
        body: formData,
      });

      const html = await res.text();

      if (!res.ok || html.toLowerCase().includes("error")) {
        throw new Error("AI से कुंडली मिलान प्राप्त नहीं हो सका।");
      }

      setResultHtml(html);
    } catch (err) {
      setError("कुछ समस्या आई। कृपया पुनः प्रयास करें।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* SEO H1 */}
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-playfair font-bold">
              कुंडली मिलान – मंगल दोष एवं विवाह योग
            </h1>
            <p className="text-muted-foreground mt-2 text-base md:text-lg">
              वैदिक ज्योतिष के आधार पर विवाह संगतता की संपूर्ण जानकारी
            </p>
          </header>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-center">
                जन्म विवरण दर्ज करें
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* 👦 Boy */}
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold text-primary">
                    👦 लड़के का विवरण
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>नाम</Label>
                      <Input name="boy_name" required />
                    </div>
                    <div>
                      <Label>जन्म तिथि</Label>
                      <Input type="date" name="boy_dob" required />
                    </div>
                    <div>
                      <Label>जन्म समय</Label>
                      <Input type="time" name="boy_time" required />
                    </div>
                    <div>
                      <Label>जन्म स्थान</Label>
                      <Input name="boy_place" required />
                    </div>
                  </div>
                </section>

                {/* 👧 Girl */}
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold text-secondary">
                    👧 लड़की का विवरण
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>नाम</Label>
                      <Input name="girl_name" required />
                    </div>
                    <div>
                      <Label>जन्म तिथि</Label>
                      <Input type="date" name="girl_dob" required />
                    </div>
                    <div>
                      <Label>जन्म समय</Label>
                      <Input type="time" name="girl_time" required />
                    </div>
                    <div>
                      <Label>जन्म स्थान</Label>
                      <Input name="girl_place" required />
                    </div>
                  </div>
                </section>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "कुंडली मिलान हो रहा है..." : "कुंडली मिलान करें"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* ERROR */}
          {error && (
            <Card className="mt-8 border-destructive">
              <CardContent className="p-4 text-center text-destructive">
                {error}
              </CardContent>
            </Card>
          )}

          {/* RESULT FROM PHP (AI OUTPUT) */}
          {resultHtml && (
            <Card className="mt-10 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
              <CardContent className="p-6">
                {/* 
                  ⚠️ PHP returns full HTML (Hindi text + SVG chart)
                  We intentionally render it as-is
                */}
                <div
                  className="prose prose-sm md:prose-base max-w-none"
                  dangerouslySetInnerHTML={{ __html: resultHtml }}
                />
              </CardContent>
            </Card>
          )}

        </div>
      </main>

      <FloatingButtons />
    </div>
  );
};

export default KundliMilan;

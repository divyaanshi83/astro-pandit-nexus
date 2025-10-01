import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const KundliMilan = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated result - in production, this would call an API
    const score = Math.floor(Math.random() * 12) + 24;
    setResult(`Compatibility Score: ${score}/36 - ${score >= 28 ? "Excellent Match! 💑" : score >= 18 ? "Good Match ✨" : "Needs Consideration 🤔"}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Kundli Milan Calculator
            </h1>
            <p className="text-muted-foreground text-lg">
              Check marriage compatibility based on Vedic astrology
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Enter Birth Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Male Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="male-name">Name</Label>
                      <Input id="male-name" placeholder="Enter name" required />
                    </div>
                    <div>
                      <Label htmlFor="male-date">Date of Birth</Label>
                      <Input id="male-date" type="date" required />
                    </div>
                    <div>
                      <Label htmlFor="male-time">Time of Birth</Label>
                      <Input id="male-time" type="time" required />
                    </div>
                    <div>
                      <Label htmlFor="male-place">Place of Birth</Label>
                      <Input id="male-place" placeholder="Enter place" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary">Female Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="female-name">Name</Label>
                      <Input id="female-name" placeholder="Enter name" required />
                    </div>
                    <div>
                      <Label htmlFor="female-date">Date of Birth</Label>
                      <Input id="female-date" type="date" required />
                    </div>
                    <div>
                      <Label htmlFor="female-time">Time of Birth</Label>
                      <Input id="female-time" type="time" required />
                    </div>
                    <div>
                      <Label htmlFor="female-place">Place of Birth</Label>
                      <Input id="female-place" placeholder="Enter place" required />
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Check Compatibility
                </Button>

                {result && (
                  <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
                    <CardContent className="p-6 text-center">
                      <p className="text-xl font-semibold text-foreground">{result}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        For detailed analysis and remedies, please contact Pandit Ashu Bahuguna
                      </p>
                    </CardContent>
                  </Card>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default KundliMilan;

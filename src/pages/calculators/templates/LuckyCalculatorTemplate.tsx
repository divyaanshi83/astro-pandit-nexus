import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface LuckyCalculatorTemplateProps {
  type:
    | "lucky-color"
    | "lucky-date"
    | "lucky-number"
    | "lucky-rudraksha"
    | "lucky-vehicle-number"
    | "unlucky-color";
}

const LuckyCalculatorTemplate: React.FC<LuckyCalculatorTemplateProps> = ({
  type,
}) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !dob || !country) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Calculate ${type.replace(
            /-/g,
            " "
          )} for the person: Name: ${name}, DOB: ${dob}, Country: ${country}`,
        }),
      });

      const data = await response.json();
      setResult(data.reply || "No result found.");
    } catch (err) {
      console.error(err);
      toast.error("Error fetching data. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
        <Card className="w-full max-w-md shadow-lg rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <h1 className="text-2xl font-bold text-center text-purple-700 capitalize">
              {type.replace(/-/g, " ")}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <Input
                placeholder="Enter your country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                {loading ? "Calculating..." : "Get My Result"}
              </Button>
            </form>

            {result && (
              <div className="mt-6 border-t pt-4 space-y-3">
                <h2 className="text-xl font-semibold text-purple-700 text-center">
                  Today's Insight
                </h2>
                <p className="text-gray-700 whitespace-pre-line">{result}</p>

                <h3 className="text-lg font-semibold text-purple-600 mt-4">
                  Weekly Chart
                </h3>
                <ul className="list-disc pl-6 text-gray-700">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <li key={day}>
                      {day}: {Math.random() > 0.5 ? "Lucky" : "Neutral"}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <FloatingButtons />
      <Footer />
    </>
  );
};

export default LuckyCalculatorTemplate;

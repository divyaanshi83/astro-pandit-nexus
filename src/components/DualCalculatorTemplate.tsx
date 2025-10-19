import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const DualCalculatorTemplate = ({ title, prompt }: { title: string; prompt: string }) => {
  const [person1, setPerson1] = useState({ name: "", dob: "", city: "", country: "" });
  const [person2, setPerson2] = useState({ name: "", dob: "", city: "", country: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, person: number) => {
    if (person === 1) setPerson1({ ...person1, [e.target.name]: e.target.value });
    else setPerson2({ ...person2, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `${prompt}\n\nPerson 1:\nName: ${person1.name}\nDOB: ${person1.dob}\nCity: ${person1.city}\nCountry: ${person1.country}\n\nPerson 2:\nName: ${person2.name}\nDOB: ${person2.dob}\nCity: ${person2.city}\nCountry: ${person2.country}`,
        }),
      });

      const data = await response.json();
      setResult(data.reply || "No response received. Try again.");
    } catch (error) {
      console.error(error);
      setResult("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background py-10 px-4">
      <Card className="max-w-2xl mx-auto shadow-lg border border-primary/10">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6 font-playfair text-foreground">
            {title}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="font-semibold text-foreground mb-2">Person 1 Details</h2>
              <Input name="name" placeholder="Full Name" onChange={(e) => handleChange(e, 1)} required />
              <Input name="dob" type="date" onChange={(e) => handleChange(e, 1)} required />
              <Input name="city" placeholder="City" onChange={(e) => handleChange(e, 1)} required />
              <Input name="country" placeholder="Country" onChange={(e) => handleChange(e, 1)} required />
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-2">Person 2 Details</h2>
              <Input name="name" placeholder="Full Name" onChange={(e) => handleChange(e, 2)} required />
              <Input name="dob" type="date" onChange={(e) => handleChange(e, 2)} required />
              <Input name="city" placeholder="City" onChange={(e) => handleChange(e, 2)} required />
              <Input name="country" placeholder="Country" onChange={(e) => handleChange(e, 2)} required />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Calculate Compatibility"}
            </Button>
          </form>

          {result && (
            <div className="mt-6 p-4 bg-muted rounded-lg text-sm whitespace-pre-line">
              {result}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DualCalculatorTemplate;

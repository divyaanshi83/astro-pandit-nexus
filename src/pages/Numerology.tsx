import { useState } from "react";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const statesAndCities: Record<string, string[]> = {
  "Uttar Pradesh": ["Lucknow", "Varanasi", "Kanpur", "Ayodhya", "Agra"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  "Delhi": ["New Delhi", "Dwarka", "Rohini", "Saket"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
  "Tamil Nadu": ["Chennai", "Madurai", "Coimbatore", "Tiruchirappalli"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi"],
  "West Bengal": ["Kolkata", "Howrah", "Darjeeling", "Siliguri"],
};

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Nepal",
  "Sri Lanka",
  "Singapore",
  "United Arab Emirates",
];

const Numerology = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    birthTime: "",
    country: "",
    state: "",
    city: "",
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("/api/numerology.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setResult(data);
  } catch (error) {
    console.error("❌ Numerology API error:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-background">
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-primary font-playfair"
          >
            🔢 Numerology Insights
          </motion.h1>

          <p className="text-center text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Discover your <span className="text-primary font-semibold">Lucky Number</span>,{" "}
            <span className="text-primary font-semibold">Lucky Color</span>,{" "}
            <span className="text-primary font-semibold">Bhagyank</span>, and{" "}
            <span className="text-primary font-semibold">Divine Guidance</span> — all revealed through your birth details.
          </p>

          <Card className="mb-10 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                🌟 Why Numerology Matters
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Numerology reveals the hidden meaning of numbers that shape your destiny.
                It uncovers your <strong>life path</strong>, guides you toward auspicious
                <strong> colors, days, and deities</strong>, and helps you live in harmony
                with the cosmic vibrations of the universe.
              </p>
            </CardContent>
          </Card>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-5 bg-card p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
              🧘‍♂️ Enter Your Birth Details
            </h3>

            <input
              name="name"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
              required
            />

            <select
              name="gender"
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              name="dob"
              type="date"
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
              required
            />

            <input
              name="birthTime"
              type="time"
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
            />

            <select
              name="country"
              className="w-full p-3 border rounded-md"
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>

            {formData.country === "India" && (
              <>
                <select
                  name="state"
                  className="w-full p-3 border rounded-md"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select State</option>
                  {Object.keys(statesAndCities).map((state) => (
                    <option key={state}>{state}</option>
                  ))}
                </select>

                {formData.state && (
                  <select
                    name="city"
                    className="w-full p-3 border rounded-md"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select City</option>
                    {statesAndCities[formData.state]?.map((city) => (
                      <option key={city}>{city}</option>
                    ))}
                  </select>
                )}
              </>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full text-lg py-3"
            >
              {loading ? "Calculating..." : "🔮 Get My Numerology Report"}
            </Button>
          </motion.form>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="mt-12 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    ✨ Your Numerology Reading
                  </h3>
                  <pre className="whitespace-pre-wrap text-muted-foreground text-lg leading-relaxed">
                    {result.analysis}
                  </pre>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>
      <FloatingButtons />
    </div>
  );
};

export default Numerology;

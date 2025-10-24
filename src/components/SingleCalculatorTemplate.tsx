import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

interface CalculatorTemplateProps {
  title: string;
  prompt: string;
}

const SingleCalculatorTemplate = ({ title, prompt }: CalculatorTemplateProps) => {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    time: "",
    city: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.dob || !form.city || !form.country) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setResult(null);

      // ✅ Call Express API instead of Netlify function
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `${prompt}\n\nName: ${form.name}\nDOB: ${form.dob}\nTime: ${form.time || "Not provided"}\nCity: ${form.city}\nCountry: ${form.country}`,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.reply || "Failed to get response from server");

      setResult(data.reply || "No result found.");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-700 capitalize mb-3">
            {title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{prompt}</p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-8 space-y-4 border border-purple-100">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            name="dob"
            type="date"
            value={form.dob}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Birth City"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Birth Country"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all disabled:opacity-50"
          >
            {loading ? "🔮 Calculating..." : "Get My Result"}
          </button>

          {error && (
            <div className="text-red-600 bg-red-50 p-3 rounded-lg text-center">
              ⚠️ {error}
            </div>
          )}
        </div>

        {result && (
          <div className="max-w-3xl mx-auto mt-10 bg-purple-50 border border-purple-200 rounded-2xl p-8 text-left shadow-md">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              Your Result 🌟
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {result}
            </p>
          </div>
        )}
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default SingleCalculatorTemplate;

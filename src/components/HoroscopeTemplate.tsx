import { useEffect, useState } from "react";

// ✅ Mock data for development
const mockHoroscope = (sign: string, day: string) => ({
  success: true,
  sign,
  day,
  horoscope: {
    prediction: `Today is a lucky day for ${sign} (${day})! Focus on your health, relationships, and finances.`,
    luckyColors: ["Gold", "Orange", "White"],
    luckyNumbers: [1, 5, 9],
    clothing: "Traditional attire like kurta-pajama or saree in warm colors.",
    rituals: [
      "Meditate for 15 minutes in the morning.",
      "Light a ghee lamp at home to attract positive energy.",
      "Offer flowers to Lord Sun for success and vitality."
    ],
    advice:
      "Stay optimistic, avoid conflicts, and take time for self-care. Trust your intuition today."
  }
});

interface HoroscopeTemplateProps {
  sign: string;
  initialDay?: string;
}

const HoroscopeTemplate = ({ sign, initialDay }: HoroscopeTemplateProps) => {
  const [day, setDay] = useState(initialDay || "today");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHoroscope = async () => {
    try {
      setLoading(true);
      setError(null);

      // ✅ Use mock in dev
      if (import.meta.env.DEV) {
        const result = mockHoroscope(sign, day);
        setData(result);
        return;
      }

      // ✅ Real fetch in production
      const response = await fetch(
        `/api/horoscope?sign=${encodeURIComponent(sign.toLowerCase())}&day=${encodeURIComponent(day)}`
      );

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch (jsonErr) {
        console.error("❌ JSON parse failed:", jsonErr, "\nRaw response:", text);
        throw new Error("Invalid JSON returned from server.");
      }

      if (!response.ok || !result.success) {
        throw new Error(result.error || `Failed (${response.status})`);
      }

      setData(result);
    } catch (err: any) {
      console.error("Error fetching horoscope:", err);
      setError(err.message || "Something went wrong.");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHoroscope();
  }, [sign, day]);

  const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <div className="max-w-3xl mx-auto text-center px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">
        {capitalize(sign)} Horoscope
      </h1>

      {/* Day selection */}
      <div className="flex justify-center gap-3 mb-8">
        {["yesterday", "today", "tomorrow"].map((d) => (
          <button
            key={d}
            onClick={() => setDay(d)}
            className={`px-4 py-2 rounded-xl border font-medium transition-all duration-200 ${
              day === d
                ? "bg-purple-600 text-white shadow-md scale-105"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            {capitalize(d)}
          </button>
        ))}
      </div>

      {/* Loading & Error */}
      {loading && <p className="text-lg text-gray-500">🔮 Fetching your horoscope...</p>}
      {error && (
        <div className="bg-red-100 text-red-600 p-4 rounded-xl shadow-md max-w-lg mx-auto">
          <p className="font-semibold">⚠️ {error}</p>
          <p className="text-sm mt-1">Please check your API or try again later.</p>
        </div>
      )}

      {/* Horoscope Data */}
      {!loading && !error && data && (
        <div className="text-left bg-white p-6 rounded-2xl shadow-lg space-y-4 leading-relaxed">
          <p>
            <strong>Date:</strong> {capitalize(day)}
          </p>
          <p>
            <strong>Sign:</strong> {capitalize(sign)}
          </p>
          <p>
            <strong>Prediction:</strong>
            <span className="block mt-2 whitespace-pre-line text-gray-700">
              {data.horoscope.prediction}
            </span>
          </p>
          <p>
            <strong>Lucky Colors:</strong> {data.horoscope.luckyColors.join(", ")}
          </p>
          <p>
            <strong>Lucky Numbers:</strong> {data.horoscope.luckyNumbers.join(", ")}
          </p>
          <p>
            <strong>Clothing Suggestion:</strong> {data.horoscope.clothing}
          </p>
          <p>
            <strong>Rituals:</strong>
            <ul className="list-disc list-inside mt-1 text-gray-700">
              {data.horoscope.rituals.map((ritual: string, i: number) => (
                <li key={i}>{ritual}</li>
              ))}
            </ul>
          </p>
          <p>
            <strong>Advice:</strong>
            <span className="block mt-1 text-gray-700">{data.horoscope.advice}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default HoroscopeTemplate;

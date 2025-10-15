import { useEffect, useState } from "react";

interface HoroscopeTemplateProps {
  sign: string;
}

const HoroscopeTemplate = ({ sign }: HoroscopeTemplateProps) => {
  const [day, setDay] = useState("today");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Fetch horoscope from Netlify serverless function
  const fetchHoroscope = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `/.netlify/functions/horoscope?sign=${sign.toLowerCase()}&day=${day}`
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        console.error("Horoscope API error:", result);
        throw new Error(result.error || `Failed (${response.status})`);
      }

      setData(result);
    } catch (err: any) {
      console.error("Error fetching horoscope:", err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHoroscope();
  }, [sign, day]);

  // ✅ Utility: capitalize first letter
  const capitalize = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <div className="max-w-3xl mx-auto text-center px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">
        {capitalize(sign)} Horoscope
      </h1>

      {/* Day selection buttons */}
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

      {/* Loading and error states */}
      {loading && (
        <p className="text-lg text-gray-500">🔮 Fetching your horoscope...</p>
      )}
      {error && (
        <div className="bg-red-100 text-red-600 p-4 rounded-xl shadow-md max-w-lg mx-auto">
          <p className="font-semibold">⚠️ {error}</p>
          <p className="text-sm mt-1">
            Please check your API key or try again later.
          </p>
        </div>
      )}

      {/* Horoscope data */}
      {!loading && !error && data && (
        <div className="text-left bg-white p-6 rounded-2xl shadow-lg space-y-4 leading-relaxed">
          <p>
            <strong>Date:</strong> {capitalize(day)}
          </p>
          <p>
            <strong>Sign:</strong> {capitalize(sign)}
          </p>
          <p>
            <strong>Prediction:</strong>{" "}
            {data.horoscope ? (
              <span className="block mt-2 whitespace-pre-line text-gray-700">
                {data.horoscope}
              </span>
            ) : (
              "Not available"
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default HoroscopeTemplate;

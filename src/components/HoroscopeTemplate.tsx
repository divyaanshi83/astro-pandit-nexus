import { useEffect, useState } from "react";

interface HoroscopeTemplateProps {
  sign: string;
  initialDay?: string; // today / weekly / monthly
}

const HoroscopeTemplate = ({ sign, initialDay }: HoroscopeTemplateProps) => {
  const [day, setDay] = useState(initialDay || "today");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ------------------------------
  // FETCH HOROSCOPE
  // ------------------------------
  const fetchHoroscope = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://astroashupandit.com/api/horoscope.php?sign=${encodeURIComponent(
          sign.toLowerCase()
        )}&day=${encodeURIComponent(day)}`
      );

      const text = await response.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch (err) {
        console.error("❌ JSON parse failed:", err, "\nRaw:", text);
        throw new Error("Invalid JSON from server.");
      }

      if (!result.success) throw new Error(result.error || "API Error");

      setData(result.horoscope);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHoroscope();
  }, [sign, day]);

  const capitalize = (w: string) => w.charAt(0).toUpperCase() + w.slice(1);

  // ------------------------------
  // UI STARTS
  // ------------------------------
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">
        {capitalize(sign)} Horoscope – {capitalize(day)}
      </h1>

      {/* Day Tabs */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {[
          { label: "Yesterday", value: "yesterday" },
          { label: "Today", value: "today" },
          { label: "Tomorrow", value: "tomorrow" },
          { label: "Weekly", value: "weekly" },
          { label: "Monthly", value: "monthly" }
        ].map((t) => (
          <button
            key={t.value}
            onClick={() => setDay(t.value)}
            className={`px-4 py-2 rounded-xl border font-medium transition-all duration-200 ${
              day === t.value
                ? "bg-purple-600 text-white shadow-md scale-105"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-lg text-gray-500">
          🔮 Fetching detailed horoscope...
        </p>
      )}

      {/* ERROR */}
      {error && (
        <div className="bg-red-100 text-red-700 rounded-xl p-4 shadow text-center">
          <p className="font-semibold">⚠️ {error}</p>
        </div>
      )}

      {/* MAIN CONTENT */}
      {!loading && !error && data && (
        <div className="space-y-8">

          {/* PREDICTION */}
          <Section title="🔮 Prediction" color="purple">
            <p className="text-gray-700 whitespace-pre-line">{data.prediction}</p>
          </Section>

          {/* WHY */}
          <Section title="✨ Why This Energy" color="blue">
            <p className="text-gray-700">{data.why}</p>
          </Section>

          {/* WHAT TO DO */}
          <Section title="🟢 What To Do Today" color="green">
            <p className="text-gray-700">{data.whatToDo}</p>
          </Section>

          {/* WHAT TO AVOID */}
          <Section title="🔴 What To Avoid" color="red">
            <p className="text-gray-700">{data.whatToAvoid}</p>
          </Section>

          {/* WORSHIP */}
          <Section title="🕉 Worship Recommendation" color="yellow">
            <p className="text-gray-700">{data.worship}</p>
          </Section>

          {/* LUCKY DETAILS */}
          <Section title="🍀 Lucky Details" color="orange">
            <p><strong>Lucky Colors:</strong> {data.luckyColors?.join(", ")}</p>
            <p><strong>Lucky Numbers:</strong> {data.luckyNumbers?.join(", ")}</p>
            <p><strong>Lucky Direction:</strong> {data.luckyDirection}</p>
            <p><strong>Lucky Time:</strong> {data.luckyTime}</p>
          </Section>

          {/* CLOTHING */}
          <Section title="👗 Clothing Suggestion" color="pink">
            <p className="text-gray-700">{data.clothing}</p>
          </Section>

          {/* RITUALS */}
          <Section title="🪔 Rituals" color="indigo">
            <ul className="list-disc list-inside text-gray-700">
              {data.rituals?.map((r: string, i: number) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </Section>

          {/* AFFIRMATION */}
          <Section title="🌟 Daily Affirmation" color="teal">
            <p className="italic text-gray-700">“{data.affirmation}”</p>
          </Section>

          {/* LOVE / HEALTH / CAREER */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card title="❤️ Love" color="rose">{data.love}</Card>
            <Card title="💚 Health" color="green">{data.health}</Card>
            <Card title="💼 Career" color="blue">{data.career}</Card>
          </div>

        </div>
      )}
    </div>
  );
};

// ------------------------------
// REUSABLE COMPONENTS
// ------------------------------
const Section = ({ title, color, children }: any) => (
  <section className="bg-white p-6 rounded-2xl shadow">
    <h2 className={`text-xl font-bold mb-2 text-${color}-700`}>{title}</h2>
    {children}
  </section>
);

const Card = ({ title, color, children }: any) => (
  <div className="bg-white p-6 rounded-2xl shadow">
    <h3 className={`text-xl font-bold text-${color}-700 mb-1`}>{title}</h3>
    <p className="text-gray-700">{children}</p>
  </div>
);

export default HoroscopeTemplate;

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import FloatingButtons from "@/components/FloatingButtons";
import useFestivalAI from "@/hooks/useFestivalAI";

export default function FestivalDetail() {
  const { name } = useParams();
  const { details, loading, error } = useFestivalAI(name || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  return (
    <>
      <main className="min-h-screen bg-orange-50 flex flex-col items-center px-4 py-10">
        {loading && <p className="text-orange-700 text-lg">Loading details...</p>}
        {error && <p className="text-red-600 text-lg">{error}</p>}

        {details && (
          <div className="max-w-4xl bg-white p-8 rounded-xl shadow-lg space-y-6">

            <h1 className="text-4xl font-bold text-center text-orange-900 mb-6">
              {details.name}
            </h1>

            <Section title="📘 संपूर्ण विवरण" content={details.overview} />
            <Section title="📖 कहानी" content={details.story} />
            <Section title="🙏 पूजा विधि" content={details.puja} />
            <Section title="⏰ समय" content={details.time} />
            <Section title="🍲 क्या खाएं" content={details.foods} />
            <Section title="❓ क्यों मनाया जाता है" content={details.reason} />

          </div>
        )}
      </main>

      <FloatingButtons />
    </>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  if (!content) return null;
  return (
    <div>
      <h2 className="text-2xl font-semibold text-orange-800 mb-2">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line leading-relaxed">{content}</p>
    </div>
  );
}

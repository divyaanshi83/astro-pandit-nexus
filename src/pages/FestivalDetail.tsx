// src/pages/FestivalDetail.tsx
import { useParams } from "react-router-dom";
import FloatingButtons from "@/components/FloatingButtons";
import { useEffect } from "react";
import useFestivalAI from "@/hooks/useFestivalAI";

export default function FestivalDetail() {
  const { name } = useParams<{ name: string }>();
  const { details, loading, error } = useFestivalAI(name || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  return (
    <>
      <main className="min-h-screen bg-orange-50 flex flex-col items-center px-4 py-10">
        {loading && <p className="text-orange-700 text-lg">Loading festival details...</p>}

        {error && <p className="text-red-600 text-lg">{error}</p>}

        {details && (
          <div className="max-w-4xl bg-white p-8 rounded-xl shadow-lg space-y-6">
            <h1 className="text-4xl font-bold text-center text-orange-900 mb-6">{details.name}</h1>

            <Section title="📜 विवरण" content={details.description} />
            <Section title="🙏 पूजा / रितुअल" content={details.puja} />
            <Section title="⏰ समय" content={details.time} />
            <Section title="🍲 भोजन" content={details.foods} />
            <Section title="❓ कारण" content={details.reason} />
            <Section title="📖 कहानी" content={details.story} />
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
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
    </div>
  );
}

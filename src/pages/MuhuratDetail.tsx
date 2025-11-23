// == FULL READY FILE ==

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import Lottie from "lottie-react";
import sunAnim from "@/assets/lottie/sun.json";



interface Detail {
  timings: string;
  pujaSteps: string;
}

export default function MuhuratDetail() {
  const { type, date } = useParams();
  const [details, setDetails] = useState<Detail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `/api/muhurat_details.php?type=${type}&date=${encodeURIComponent(
        date || ""
      )}`
    )
      .then((r) => r.json())
      .then((d) => setDetails(d))
      .finally(() => setLoading(false));
  }, [type, date]);

  const clean = (t: string) => t.replace(/```html|```/g, "").trim();

  const speak = async () => {
    const text = `
      शुभ मुहूर्त विवरण:
      ${clean(details!.timings)}
      पूजा विधि:
      ${clean(details!.pujaSteps)}
    `;

    const res = await fetch("/api/tts.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const blob = await res.blob();
    new Audio(URL.createObjectURL(blob)).play();
  };

  const generateImage = async () => {
    const prompt = `${date} के शुभ मुहूर्त के लिए ज्योतिषीय चित्र`;
    const res = await fetch("/api/astro_image.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const json = await res.json();
    window.open(json.data[0].url, "_blank");
  };

  return (
    <main className="min-h-screen bg-orange-50 py-12 px-4 flex flex-col items-center">
      {loading ? (
        <Lottie animationData={sunAnim} style={{ width: 200 }} />
      ) : (
        details && (
          <Card className="max-w-4xl w-full shadow-xl rounded-2xl">
            <CardContent className="p-8">
              <h1 className="text-4xl font-bold text-orange-800 text-center">
                {type?.replace("-", " ")} मुहूर्त
              </h1>

              <p className="text-center text-orange-600 mb-8">
                📅 {decodeURIComponent(date || "")}
              </p>

              <button
                onClick={speak}
                className="px-5 py-2 bg-orange-600 text-white rounded-lg"
              >
                🔊 सुनें
              </button>

              <button
                onClick={generateImage}
                className="px-5 py-2 bg-purple-600 text-white rounded-lg ml-3"
              >
                🖼️ Astro Image
              </button>

              <section className="mt-8">
                <h3 className="text-2xl font-semibold text-orange-700 mb-4">
                  🕒 शुभ समय
                </h3>
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: clean(details.timings) }}
                />
              </section>

              <section className="mt-8">
                <h3 className="text-2xl font-semibold text-orange-700 mb-4">
                  🪔 पूजा विधि
                </h3>
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{
                    __html: clean(details.pujaSteps),
                  }}
                />
              </section>

              <p className="text-center text-gray-500 mt-10">
                ✨ यह विवरण AI द्वारा वास्तविक समय में बनाया गया है।
              </p>
            </CardContent>
          </Card>
        )
      )}
    </main>
  );
}

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";

interface FestivalData {
  festivalName: string;
  details: string;
}

export default function FestivalDetail() {
  const { name } = useParams();
  const [festival, setFestival] = useState<FestivalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFestival = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/.netlify/functions/getFestivalDetails?name=${name}`);
        const data = await res.json();
        setFestival(data);
      } catch (err) {
        setError("Failed to fetch festival details.");
      } finally {
        setLoading(false);
      }
    };
    fetchFestival();
  }, [name]);

  // Clean GPT markdown
  const cleanHtml = (text: string) => text.replace(/```html|```/g, "").trim();

  // ✅ Use correct glob import path (matches your folder)
  const images = import.meta.glob("../festivals/*.jpg", { eager: true });

  const getFestivalImage = (festivalName: string) => {
    const key = `../festivals/${festivalName.toLowerCase()}.jpg`;
    const imageModule = images[key] as { default: string } | undefined;
    return imageModule ? imageModule.default : null;
  };

  const festivalImage = name ? getFestivalImage(name) : null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-orange-50 flex flex-col items-center px-4 py-10">
        {loading ? (
          <p className="text-lg font-medium">Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : festival ? (
          <Card className="max-w-4xl w-full shadow-md rounded-2xl bg-white border border-orange-200">
            <CardContent className="p-8">
              <h1 className="text-4xl font-bold text-orange-800 mb-6 text-center capitalize">
                {festival.festivalName}
              </h1>

              {/* ✅ Image display */}
              <div className="flex flex-col items-center mb-8">
                {festivalImage ? (
                  <img
                    src={festivalImage}
                    alt={festival.festivalName}
                    className="w-96 h-64 object-cover rounded-xl border-2 border-orange-300 shadow-md"
                  />
                ) : (
                  <div className="w-80 h-56 border-2 border-dashed border-orange-300 rounded-xl flex items-center justify-center bg-orange-50">
                    <p className="text-orange-400 text-sm text-center">
                      📷 No image found for this festival
                    </p>
                  </div>
                )}
              </div>

              <article
                className="prose prose-orange max-w-none text-lg leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: cleanHtml(festival.details),
                }}
              />
            </CardContent>
          </Card>
        ) : (
          <p>No data found.</p>
        )}
      </main>
      <FloatingButtons />
      <Footer />
    </>
  );
}

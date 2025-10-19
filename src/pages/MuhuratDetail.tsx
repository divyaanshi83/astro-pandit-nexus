import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";

interface MuhuratDetailData {
  timings: string;
  pujaSteps: string;
}

export default function MuhuratDetail() {
  const { type, date } = useParams();
  const [details, setDetails] = useState<MuhuratDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(
          `/.netlify/functions/getMuhuratDetails?type=${type}&date=${date}`
        );
        const data = await res.json();
        setDetails(data);
      } catch (err) {
        setError("Failed to fetch muhurat details.");
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [type, date]);

  const clean = (text: string) => text.replace(/```html|```/g, "").trim();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-orange-50 py-12 px-4 flex flex-col items-center">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : details ? (
          <Card className="max-w-4xl w-full shadow-md rounded-2xl bg-white border border-orange-200">
            <CardContent className="p-8">
              <h1 className="text-4xl font-bold text-orange-800 mb-6 text-center capitalize">
                {type?.replace("-", " ")} Muhurat
              </h1>
              <h2 className="text-lg text-orange-700 text-center mb-8">{decodeURIComponent(date || "")}</h2>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-orange-700">
                  🕒 Shubh Muhurat Timings
                </h3>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: clean(details.timings) }}
                />
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-4 text-orange-700">
                  🪔 Puja Vidhi (How to Perform)
                </h3>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: clean(details.pujaSteps) }}
                />
              </section>
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

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";

interface DateInfo {
  date: string;
  description: string;
}

export default function MuhuratDates() {
  const { type } = useParams();
  const [dates, setDates] = useState<DateInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/muhurat?type=${type}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data: DateInfo[] = await res.json();
        setDates(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch muhurat dates.");
      } finally {
        setLoading(false);
      }
    };
    fetchDates();
  }, [type]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-orange-50 py-12 px-4 flex flex-col items-center">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="max-w-3xl w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-800 text-center mb-10 capitalize">
              {type?.replace("-", " ")} Muhurat Dates
            </h1>

            <div className="grid grid-cols-1 gap-6">
              {dates.map((item) => (
                <Link
                  key={item.date}
                  to={`/muhurat/${type}/${encodeURIComponent(item.date)}`}
                >
                  <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-orange-700 mb-2">
                        {item.date}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <FloatingButtons />
      <Footer />
    </>
  );
}

import { useEffect, useState } from "react";
import type { FestivalDetails } from "@/types/festival";

export default function useFestivalAI(festivalName: string) {
  const [details, setDetails] = useState<FestivalDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!festivalName) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const API_BASE = import.meta.env.VITE_API_BASE_URL;
        const res = await fetch(
  `${API_BASE}/api/festival/generate.php?festival=${encodeURIComponent(festivalName)}`
);


        const json = await res.json();
        if (!json.success) throw new Error(json.error || "Fetch failed");

        setDetails(json.festival);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [festivalName]);

  return { details, loading, error };
}

// src/hooks/useFestivalAI.ts
import { useEffect, useState } from "react";
import type { FestivalDetails } from "@/types/festival";

export default function useFestivalAI(festivalName: string) {
  const [details, setDetails] = useState<FestivalDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!festivalName) return;

    const fetchAIData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/festival/generate?festival=${encodeURIComponent(festivalName)}`);
        const json = await res.json();

        if (!res.ok) throw new Error(json.error || "Failed to fetch festival info");

        // Parse OpenAI text into FestivalDetails
        const lines = (json.content as string).split("\n").filter(Boolean);
        const fd: FestivalDetails = {
          name: festivalName,
          description: lines[0] || "",
          puja: lines[1] || "",
          time: lines[2] || "",
          foods: lines[3] || "",
          reason: lines[4] || "",
          story: lines[5] || "",
        };

        setDetails(fd);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAIData();
  }, [festivalName]);

  return { details, loading, error };
}

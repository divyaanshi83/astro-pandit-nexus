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
        // 🔥 IMPORTANT: updated to PHP endpoint
        const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
const res = await fetch(`${API_BASE}/api/festival/generate?festival=${encodeURIComponent(festivalName)}`);

        const json = await res.json();

        if (!res.ok) throw new Error(json.error || "Failed to fetch festival info");

        // The PHP backend returns entire content as a single string
        const content = json.choices?.[0]?.message?.content || "";

        // Your existing format
        const lines = content.split("\n").filter(Boolean);

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

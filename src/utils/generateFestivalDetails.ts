// utils/generateFestivalDetails.ts
export interface FestivalDetails {
  name: string;
  description: string;
  puja: string;
  time: string;
  foods: string;
  reason: string;
  story: string;
}

export async function generateFestivalDetails(festivalName: string): Promise<FestivalDetails> {
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const res = await fetch(
    `${API_BASE}/api/festival/generate.php?festival=${encodeURIComponent(festivalName)}`
  );

  if (!res.ok) throw new Error("Failed to fetch festival details");

  return await res.json();
}

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

/**
 * Fetch festival details from your backend API
 */
export async function generateFestivalDetails(festivalName: string): Promise<FestivalDetails> {
  const res = await fetch(`/api/festival/generate?festival=${encodeURIComponent(festivalName)}`);
  if (!res.ok) throw new Error("Failed to fetch festival details");

  const data: FestivalDetails = await res.json();
  return data;
}

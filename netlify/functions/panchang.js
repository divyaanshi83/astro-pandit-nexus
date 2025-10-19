import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const handler = async () => {
  try {
    // Get today’s date in India timezone
    const today = new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Kolkata",
    });

    // 🧘 Ask OpenAI for Hindu Panchang details
    const prompt = `
You are an expert Hindu astrologer. 
Generate today’s Hindu Panchang for ${today} for Indian Standard Time.
Return JSON with these exact keys and realistic values (no extra text):

{
  "tithi": "",
  "paksha": "",
  "nakshatra": "",
  "yog": "",
  "karan": "",
  "day": "",
  "maah": "",
  "chandraRaashi": "",
  "ritu": "",
  "aayan": "",
  "vikramSamvat": "",
  "gujaratiSamvant": "",
  "kaliSamvant": "",
  "shakSamvant": "",
  "sunrise": "",
  "sunset": "",
  "moonrise": "",
  "moonset": "",
  "pad": "",
  "charan": "",
  "overview": ""
}

Make it accurate for Indian Panchang traditions.
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a precise Hindu Panchang generator." },
        { role: "user", content: prompt },
      ],
    });

    const rawText = completion.choices[0].message.content.trim();

    // Try parsing JSON safely
    let parsed;
    try {
      parsed = JSON.parse(rawText);
    } catch {
      // fallback: extract JSON if model added explanation
      const match = rawText.match(/\{[\s\S]*\}/);
      parsed = match ? JSON.parse(match[0]) : { overview: "Error parsing Panchang data." };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(parsed),
    };
  } catch (err) {
    console.error("❌ Panchang API Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Panchang" }),
    };
  }
};

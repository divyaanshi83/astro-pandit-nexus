import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function handler(event) {
  try {
    const { issue } = JSON.parse(event.body);

    const prompt = `
You are an expert Indian astrologer and Vaastu Shastra consultant. 
Explain in detail about "${issue}" — include:
1. Cause of the Vaastu dosh
2. Negative effects on life, health, or finance
3. Remedies and corrective measures using Puja, Mantra, Yantra, colors, and placement
4. Astrological connections and planetary influences
5. Things to avoid
Write in a spiritually insightful but simple tone. Use emojis for section headers.
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content;

    // simple structured split
    const sections = text.split(/\n(?=[A-Z])/);
    return {
      statusCode: 200,
      body: JSON.stringify({
        cause: sections[0] || "",
        effect: sections[1] || "",
        remedies: sections.slice(2, 4),
        astrology: sections.slice(4, 6),
        avoid: sections.slice(6),
      }),
    };
  } catch (err) {
    console.error("Vaastu Remedy API error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Server Error" }) };
  }
}

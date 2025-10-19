import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event) => {
  const { type } = event.queryStringParameters;

  const prompt = `
Generate a JSON array of auspicious dates for ${type} for 2025, 2026, and 2027.
Each item should have:
- date (e.g., "March 12, 2025")
- description (1 short line about that date significance)
Return only valid JSON array.
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  const text = response.choices[0].message.content;
  const json = JSON.parse(text.match(/\[.*\]/s)[0]);
  return { statusCode: 200, body: JSON.stringify(json) };
};

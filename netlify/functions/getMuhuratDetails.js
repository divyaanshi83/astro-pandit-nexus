import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event) => {
  const { type, date } = event.queryStringParameters;

  const prompt = `
For the event "${type}" on "${date}", provide:
1. A paragraph describing the Shubh Muhurat timings in detail (include sunrise/sunset based reasoning).
2. Step-by-step Puja Vidhi (how to perform ritual properly).

Return as JSON with:
{
  "timings": "...",
  "pujaSteps": "..."
}
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.8,
  });

  const text = response.choices[0].message.content;
  const json = JSON.parse(text.match(/\{[\s\S]*\}/)[0]);
  return { statusCode: 200, body: JSON.stringify(json) };
};

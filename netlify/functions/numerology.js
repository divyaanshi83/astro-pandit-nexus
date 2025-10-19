import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event) => {
  try {
    const { name, dob, birthTime, city, country } = JSON.parse(event.body);

    const prompt = `
You are a Vedic numerology expert. Based on this information:
Name: ${name}
Date of Birth: ${dob}
Birth Time: ${birthTime || "unknown"}
City: ${city}
Country: ${country}

Return detailed analysis in this structure:
- Lucky Number
- Bhagyank Number
- Lucky Color
- Lucky Years
- Lucky Days and Dates
- Which God to Worship
- What to Donate and When
- Recommended Mantra
Explain briefly but spiritually.
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const analysis = completion.choices[0].message.content.trim();
    return { statusCode: 200, body: JSON.stringify({ analysis }) };
  } catch (err) {
    console.error("❌ Numerology error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Numerology generation failed." }) };
  }
};

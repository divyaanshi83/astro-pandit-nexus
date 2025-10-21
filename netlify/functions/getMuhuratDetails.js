import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event) => {
  try {
    const { type, date } = event.queryStringParameters;

    const prompt = `
आप एक अनुभवी वैदिक पंचांग विशेषज्ञ हैं।
नीचे दिए गए आयोजन "${type}" की तिथि "${date}" के लिए संपूर्ण जानकारी हिंदी में प्रस्तुत करें।

उत्तर में दो भाग होने चाहिए:
1. "timings" — शुभ मुहूर्त का विस्तृत वर्णन करें, जिसमें सूर्योदय और सूर्यास्त के आधार पर समय की व्याख्या हो।
2. "pujaSteps" — पूजन विधि चरण-दर-चरण (कैसे सही ढंग से पूजा करें)।

उत्तर को निम्नलिखित JSON प्रारूप में दें:
{
  "timings": "....",
  "pujaSteps": "...."
}

केवल JSON लौटाएँ — किसी भी अतिरिक्त टेक्स्ट के बिना।
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "आप हमेशा सभी उत्तर हिंदी भाषा में देंगे।" },
        { role: "user", content: prompt },
      ],
      temperature: 0.8,
    });

    // Extract JSON safely
    const text = response.choices[0].message.content;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("JSON not found in response");

    const json = JSON.parse(jsonMatch[0]);
    return { statusCode: 200, body: JSON.stringify(json) };
  } catch (err) {
    console.error("❌ Muhurat handler error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Shubh Muhurat generation failed." }),
    };
  }
};

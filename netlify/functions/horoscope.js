// netlify/functions/horoscope.js
export async function handler(event) {
  try {
    const { sign, day = "today" } = event.queryStringParameters;

    if (!sign) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: "Missing zodiac sign" }),
      };
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: "Missing OpenAI API key" }),
      };
    }

    // ✨ More structured and styled prompt
    const prompt = `
Write a ${day} horoscope for the zodiac sign "${sign}".
Use this exact structure with emojis and bullet points:

♈ ${sign.toUpperCase()} — ${day.toUpperCase()} Horoscope

🌟 Overview:
(2–3 lines summarizing the mood, energy, and opportunities of the day)

💼 What to Do (Career):
• (Point 1)
• (Point 2)

🚫 What Not to Do:
• (Point 1)
• (Point 2)

❤️ Love Tip:
(1–2 lines of advice about love or relationships)

Make it sound positive, mystical, and encouraging.
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
      }),
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error("JSON parse error:", err, text);
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: "Invalid JSON from OpenAI",
          raw: text,
        }),
      };
    }

    const horoscope = data.choices?.[0]?.message?.content?.trim();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        sign,
        day,
        horoscope,
      }),
    };
  } catch (error) {
    console.error("Server error fetching horoscope:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: "Server error fetching horoscope",
        details: error.message,
      }),
    };
  }
}

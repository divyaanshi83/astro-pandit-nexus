export async function handler(event) {
  try {
    const { sign, day = "today" } = event.queryStringParameters;

    if (!sign) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ success: false, error: "Missing zodiac sign" }),
      };
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ success: false, error: "Missing OpenAI API key" }),
      };
    }

    const prompt = `
Write a ${day} horoscope for the zodiac sign "${sign}".
Use this structure:

🌟 Overview:
(2–3 lines)

💼 What to Do:
• (Point 1)
• (Point 2)

🚫 What Not to Do:
• (Point 1)
• (Point 2)

❤️ Love Tip:
(1–2 lines)
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
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
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
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
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
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        success: false,
        error: "Server error fetching horoscope",
        details: error.message,
      }),
    };
  }
}

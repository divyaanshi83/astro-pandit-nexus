import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event) => {
  try {
    const { type, form } = JSON.parse(event.body || "{}");
    if (!type || !form) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: "Missing data" }),
      };
    }

    const prompt = `
You are an expert Vedic astrologer.
Using the following birth details:
- Name: ${form.name}
- Date of Birth: ${form.dob}
- Time: ${form.time || "Not provided"}
- City: ${form.city}
- Country: ${form.country}

Perform an astrological analysis for the "${type}" calculator.
Explain what it means, include key influences, what to do, what not to do,
and any spiritual or practical guidance in a friendly, devotional tone.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = completion.choices[0].message.content.trim();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result: text }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};

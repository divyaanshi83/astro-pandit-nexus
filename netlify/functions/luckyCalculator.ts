import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

interface EventType {
  body: string;
}

export const handler = async (event: EventType) => {
  try {
    const { name, dob, country, type } = JSON.parse(event.body);

    const prompt = `You are an expert astrologer. Based on ${name}'s date of birth ${dob} and country ${country}, 
    generate today's ${type.replace(/-/g, " ")} prediction and a brief 7-day forecast.`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = response.choices[0].message?.content || "No response received.";

    return {
      statusCode: 200,
      body: JSON.stringify({ result }),
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unknown error occurred" }),
    };
  }
};

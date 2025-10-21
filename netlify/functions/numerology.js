import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event) => {
  try {
    const { name, dob, birthTime, city, country } = JSON.parse(event.body);

    const prompt = `
आप एक अनुभवी वैदिक अंक ज्योतिष विशेषज्ञ हैं।
नीचे दी गई जानकारी के आधार पर व्यक्ति का संपूर्ण विश्लेषण हिंदी में प्रस्तुत करें।

नाम: ${name}
जन्म तिथि: ${dob}
जन्म समय: ${birthTime || "अज्ञात"}
शहर: ${city}
देश: ${country}

उत्तर को निम्नलिखित संरचना में दें:
- शुभ अंक
- भाग्यांक
- शुभ रंग
- शुभ वर्ष
- शुभ दिन और तिथि
- किस देवता की उपासना करनी चाहिए
- क्या और कब दान करना चाहिए
- अनुशंसित मंत्र

🕉️ कृपया उत्तर आध्यात्मिक और संक्षिप्त रूप में दें, केवल हिंदी भाषा में।
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "आप हमेशा सभी उत्तर हिंदी भाषा में देंगे।" },
        { role: "user", content: prompt },
      ],
    });

    const analysis = completion.choices[0].message.content.trim();
    return { statusCode: 200, body: JSON.stringify({ analysis }) };
  } catch (err) {
    console.error("❌ Numerology error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Numerology generation failed." }),
    };
  }
};

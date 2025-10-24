// server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import path from "path";
import dotenv from "dotenv";
import OpenAI from "openai";

// Festival router
import festivalRouter from "./server/api/festival.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ------------------------
// OpenAI client
// ------------------------
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ------------------------
// Serve React build
// ------------------------
const frontendPath = path.join(__dirname, "build"); // or "dist" if Vite
app.use(express.static(frontendPath));
app.get("/", (req, res) => res.sendFile(path.join(frontendPath, "index.html")));

// ------------------------
// General OpenAI endpoint (calculator/chat)
// ------------------------
app.post("/api/openai", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ reply: "No message provided." });

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || "No response from OpenAI.";
    res.json({ reply });
  } catch (err) {
    console.error("OpenAI Error:", err);
    res.status(500).json({ reply: "Something went wrong. Please try again later." });
  }
});

// ------------------------
// Horoscope API
// ------------------------
app.get("/api/horoscope", async (req, res) => {
  try {
    const { sign, day } = req.query;
    if (!sign || !day) return res.status(400).json({ success: false, error: "Missing sign or day parameter." });

    const horoscopeText = `Your ${day} horoscope for ${sign} is: Today is a great day for new beginnings.`;
    res.json({ success: true, horoscope: horoscopeText });
  } catch (err) {
    console.error("Horoscope API Error:", err);
    res.status(500).json({ success: false, error: "Failed to fetch horoscope." });
  }
});

// ------------------------
// Numerology API
// ------------------------
app.post("/api/numerology", async (req, res) => {
  try {
    const { name, dob, birthTime, city, country } = req.body;

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

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "आप हमेशा सभी उत्तर हिंदी भाषा में देंगे।" },
        { role: "user", content: prompt },
      ],
    });

    const analysis = completion.choices[0].message.content.trim();
    res.json({ analysis });
  } catch (err) {
    console.error("Numerology Error:", err);
    res.status(500).json({ error: "Numerology generation failed." });
  }
});

// ------------------------
// Vaastu API
// ------------------------
app.post("/api/vaastu", async (req, res) => {
  try {
    const { issue } = req.body;

    if (!issue) {
      return res.status(400).json({ error: "No issue provided" });
    }

    // check if OPENAI_API_KEY exists
    if (!process.env.OPENAI_API_KEY) {
      console.error("Vaastu Error: OPENAI_API_KEY is missing");
      return res.status(500).json({ error: "OpenAI API key not set" });
    }

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

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = completion?.choices?.[0]?.message?.content?.trim();

    if (!text) {
      console.warn("Vaastu Warning: AI returned empty response");
      return res.json({
        cause: "No data received from AI",
        effect: "",
        remedies: [],
        astrology: [],
        avoid: [],
      });
    }

    const sections = text.split(/\n(?=[A-Z])/);

    res.json({
      cause: sections[0] || "",
      effect: sections[1] || "",
      remedies: sections.slice(2, 4),
      astrology: sections.slice(4, 6),
      avoid: sections.slice(6),
    });
  } catch (err) {
    console.error("Vaastu Error:", err);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
});

// ------------------------
// Panchang API
// ------------------------
app.get("/api/panchang", async (req, res) => {
  try {
    const today = new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Kolkata",
    });

    const prompt = `
You are an expert Hindu astrologer.
Generate today’s Hindu Panchang for ${today} for Indian Standard Time.
Return JSON with exact keys and realistic values.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a precise Hindu Panchang generator." },
        { role: "user", content: prompt },
      ],
    });

    let parsed;
    try {
      parsed = JSON.parse(completion.choices[0].message.content.trim());
    } catch {
      const match = completion.choices[0].message.content.match(/\{[\s\S]*\}/);
      parsed = match ? JSON.parse(match[0]) : { overview: "Error parsing Panchang data." };
    }

    res.json(parsed);
  } catch (err) {
    console.error("Panchang Error:", err);
    res.status(500).json({ error: "Failed to fetch Panchang" });
  }
});

// ------------------------
// Festival API (imported router)
// ------------------------
app.use("/api/festival", festivalRouter);

// ------------------------
// React Router fallback for client-side routes
// ------------------------
app.get("*", (req, res) => res.sendFile(path.join(frontendPath, "index.html")));

// ------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

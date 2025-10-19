import type { Handler } from "@netlify/functions";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const handler: Handler = async (event) => {
  try {
    const name = event.queryStringParameters?.name;
    if (!name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Festival name is required" }),
      };
    }

    const prompt = `
You are an expert in Hindu festivals and Vedic traditions.
Write a clean, beautiful HTML article (no markdown) about the Hindu festival "${name}".
Structure it with these sections:

<h2>How to Perform Puja & Timing</h2>
<h2>Overview</h2>
<h2>Mythological Background</h2>
<h2>Rituals and Celebrations</h2>
<h2>Spiritual Significance</h2>

Each section should have 1–2 paragraphs.
Tone should be warm, devotional, and knowledgeable.
Use <b> tags for important words or deities.
No code fences or markdown formatting.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a Vedic scholar who writes elegant, devotional HTML about Hindu festivals.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 900,
    });

    const responseText = (completion.choices[0].message?.content || "")
      .replace(/```html|```/g, "")
      .trim();

    const whatsappBase = "https://wa.me/919760924411";
    const styledHtml = `
      <style>
        .festival-container {
          background-color: #fffaf3;
          color: #3a2e1f;
          font-family: 'Poppins', sans-serif;
          line-height: 1.8;
          padding: 40px 20px;
          border-radius: 16px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          max-width: 900px;
          margin: 40px auto;
        }
        .festival-heading {
          color: #b45309;
          font-size: 1.8rem;
          margin-top: 1.8rem;
          font-weight: 700;
          border-bottom: 2px solid #f5deb3;
          padding-bottom: 0.4rem;
        }
        .festival-section p {
          font-size: 1.05rem;
          margin-top: 0.6rem;
          text-align: justify;
        }
        .festival-image {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }
        .book-puja {
          background-color: #fff7e6;
          border: 2px solid #f5d28a;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          margin-top: 40px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }
        .book-puja h3 {
          color: #b45309;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .puja-options {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        .puja-card {
          background: white;
          border: 1px solid #f0d48b;
          border-radius: 10px;
          padding: 15px 20px;
          width: 250px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .puja-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }
        .puja-card h4 {
          color: #8b4000;
          margin-bottom: 0.5rem;
        }
        .puja-card p {
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        .puja-card a {
          display: inline-block;
          background-color: #ffb347;
          color: white;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8px;
          font-weight: 600;
          transition: background 0.3s;
        }
        .puja-card a:hover {
          background-color: #ff9800;
        }
      </style>

      <div class="festival-container">
        <img src="" alt="${name} festival image" class="festival-image" />
        ${responseText}

        <div class="book-puja">
          <h3>🕉️ Book a Personalized Puja for ${name}</h3>
          <div class="puja-options">
            <div class="puja-card">
              <h4>₹5100 - Basic Puja</h4>
              <p>Get a 30-minute personalized video puja session with Pandit Ji.</p>
              <a href="${whatsappBase}?text=Namaste! I want to book the ₹500 puja for ${name}." target="_blank">Book on WhatsApp</a>
            </div>
            <div class="puja-card">
              <h4>₹11000 - Standard Puja</h4>
              <p>Includes a 1-hour detailed video puja with mantra chanting and guidance.</p>
              <a href="${whatsappBase}?text=Namaste! I want to book the ₹1100 puja for ${name}." target="_blank">Book on WhatsApp</a>
            </div>
            <div class="puja-card">
              <h4>₹21000 - Premium Puja</h4>
              <p>Full-length personalized ritual guidance + 1-hour video session and follow-up advice.</p>
              <a href="${whatsappBase}?text=Namaste! I want to book the ₹2100 premium puja for ${name}." target="_blank">Book on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({
        festivalName: name,
        details: styledHtml,
      }),
    };
  } catch (error: any) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch festival data",
        message: error.message,
      }),
    };
  }
};

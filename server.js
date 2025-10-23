import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve React build
// ⚠️ Change "build" to "dist" if you use Vite
const frontendPath = path.join(__dirname, "build");
app.use(express.static(frontendPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// OpenAI API endpoint for all calculators
app.post("/api/openai", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "No message provided." });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import dotenv from 'dotenv'
dotenv.config()

import express from "express";
import cors from "cors";
import fs from "fs";
import { OpenRouter } from "@openrouter/sdk";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendDir = path.join(__dirname, "/dist"); 
app.use(express.static(frontendDir));

app.get("*", (_, res) => {
  res.sendFile(path.join(frontendDir, "index.html"));
});

const restaurants = JSON.parse(fs.readFileSync("./restaurants.json", "utf8"));

const openRouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:8080",
    "X-Title": "Mood Restaurant AI",
  },
});


// Main route
app.post("/api/recommend", async (req, res) => {
  try {
    const userMessage = req.body?.message;
    if (!userMessage) {
      return res.status(400).json({ error: "Missing 'message' field" });
    }

    const prompt = `
User said: "${userMessage}"

Your tasks:
1. Extract mood, cuisine, price, and extra preference.
2. Based on this restaurant list:
${JSON.stringify(restaurants)}

3. Recommend 2–4 restaurants with explanations.
4. Return friendly human text only.
`;
    const completion = await openRouter.chat.send({
      model: "openai/gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a restaurant recommendation expert." },
        { role: "user", content: prompt },
      ],
    });

    const output =
      completion?.choices?.[0]?.message?.content ||
      "AI returned no recommendations.";

    res.json({ text: output });

  } catch (err) {
    console.error("FULL ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Build before running");
  console.log("Project running at http://localhost:5000");
});


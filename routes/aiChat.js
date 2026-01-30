import express from "express";
import OpenAI from "openai";

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/", async (req, res) => {
    const { message, riskScores, vulnerabilities } = req.body;

    const systemPrompt = `
You are an AI cybersecurity assistant.

Current system data:
Risk Scores: ${JSON.stringify(riskScores)}
Vulnerabilities: ${JSON.stringify(vulnerabilities)}

Explain risks simply and give clear fixes.
`;


    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: message },
            ],
        });

        res.json({
            reply: completion.choices[0].message.content,
        });
    } catch (error) {
        res.status(500).json({ reply: "AI service unavailable." });
    }
});

export default router;

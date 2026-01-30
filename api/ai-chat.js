import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // from Vercel env vars
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { message, riskScores, vulnerabilities } = req.body;

    const systemPrompt = `
You are an AI cybersecurity assistant for a vulnerability monitoring platform.

Current system data:
Risk Scores: ${JSON.stringify(riskScores)}
Vulnerabilities: ${JSON.stringify(vulnerabilities)}

Explain risks in simple language and suggest clear fixes.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    res.status(200).json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "AI service unavailable." });
  }
}

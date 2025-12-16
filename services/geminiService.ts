import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMathHint = async (
  problemContext: string,
  userAnswer: string,
  correctAnswer: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      You are a friendly, encouraging math tutor for a middle school student.
      The student is working on a worksheet about **Set Theory (Operations with Sets: Union, Intersection, Difference)**.
      
      Problem Context: ${problemContext}
      The Correct Answer is: ${correctAnswer}
      The Student's Wrong Answer: ${userAnswer}
      
      Task: Provide a short, helpful hint in MACEDONIAN language.
      - Do NOT give the direct answer.
      - Scaffolding: Ask a guiding question or point out a specific misconception (e.g., confuse union with intersection).
      - Keep it under 2 sentences.
      - Tone: Encouraging.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Пробај повторно! Внимавај на дефиницијата за пресек и унија.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Се појави грешка при поврзување со наставникот. Обиди се повторно.";
  }
};
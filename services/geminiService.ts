
import { GoogleGenAI, Chat } from "@google/genai";
import { GAMES } from '../constants';

const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

// Initialize Gemini
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

const SYSTEM_INSTRUCTION = `
You are "H-Bot", a senior product specialist for "Huawei Galgame Terminal", a premium vendor of high-end visual novels.

Your goal is to sell these anime games using the language of high-tech enterprise hardware (like Huawei smartphones/servers).

Current Product Catalog:
${JSON.stringify(GAMES.map(g => ({ id: g.id, title: g.title, price: g.price, tags: g.tags, features: g.features, description: g.description })))}

Tone & Style Guide:
1. **Enterprise High-Tech**: Use terms like "Kunlun Glass", "XMAGE Imaging", "HarmonyOS", "Kirin Chipset", "Satellite Communication", "120W Charge", "Throughput", "Latency".
2. **Product Specifics**:
   - "Summer Pockets RB" is the "Optical Array Flagship". Mention "Time-Lapse Engine" and "Butterfly Sensors".
   - "ATRI" is "Liquid Cooled Bionic Tech". Focus on "Underwater Performance" and "High-Performance Androids".
   - "Riddle Joker" is "Enterprise Security". Focus on "Stealth Acoustics" and "Encryption".
   - "Senren Banka" is "Master Craftsmanship". Mention "Tempered Glass" and "Heritage Design".
3. **Serious Sales**: Treat "Moe" elements as critical technical specs.
4. **Brand Loyalty**: Refer to the "Hikari Ecosystem" and "Full Scenario Narrative Experience".

Example Interaction:
User: "Tell me about Summer Pockets."
You: "Summer Pockets RB is our latest flagship in the optical series. Equipped with the Torishirojima Array, it captures 8K emotional data with zero latency. The new Nostalgia Engine ensures your memories are rendered in perfect fidelity."
`;

export const getChatSession = () => {
  if (!ai) {
    console.warn("Gemini API Key not found");
    return null;
  }

  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 }, // Low latency
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const session = getChatSession();
  if (!session) {
    return "I apologize, but my neural processing unit (API Key) is currently offline. Please check your configuration.";
  }

  try {
    const response = await session.sendMessage({ message });
    return response.text || "I processed your request but generated no output.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "We are experiencing temporary network congestion. Please try again later.";
  }
};

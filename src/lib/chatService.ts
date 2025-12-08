export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  restaurantData?: AIResponse;
}

export interface AIResponse {
  mood?: string[];
  cuisine?: string[];
  price?: { min?: number; max?: number };
  features?: string[];
}

// Replace with your n8n webhook URL
const N8N_WEBHOOK_URL = "YOUR_N8N_WEBHOOK_URL";

export const sendMessageToAgent = async (message: string): Promise<AIResponse> => {
  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to get response from AI agent");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Chat error:", error);
    // Fallback mock response for demo
    return {
      mood: ["cozy", "romantic"],
      cuisine: ["Italian"],
      price: { max: 200 },
      features: ["wine pairing"],
    };
  }
};

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// Replace with your n8n webhook URL
const N8N_WEBHOOK_URL = "YOUR_N8N_WEBHOOK_URL";

export const sendMessageToAgent = async (message: string): Promise<string> => {
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

    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Chat error:", error);
    // Fallback mock response for demo
    return "I'm having trouble connecting right now. Please try again later!";
  }
};
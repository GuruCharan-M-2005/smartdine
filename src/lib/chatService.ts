export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const sendMessageToAgent = async (message: string): Promise<string> => {
  try {
    const response = await fetch("http://localhost:5000/api/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to get response from AI agent");
    }

    let data: any;
    try {
      data = await response.json();
    } catch (err) {
      throw new Error("Response was not valid JSON");
    }
    return data["text"];

  } catch (error) {
    console.error("CHAT SERVICE → Fatal error:", error);
    return "I'm having trouble connecting right now. Please try again later!";
  }
};

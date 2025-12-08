import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, MessageCircle, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatMessage, sendMessageToAgent, AIResponse } from "@/lib/chatService";

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterApply?: (filters: AIResponse) => void;
}

const samplePrompts = [
  "I want something spicy and cheap",
  "Romantic dinner under ₹300",
  "Quick lunch with healthy options",
  "Cozy place for a date night",
];

const Chatbot = ({ isOpen, onClose, onFilterApply }: ChatbotProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm your SmartDine assistant. Tell me what you're craving, and I'll find the perfect restaurant for you! 🍽️",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await sendMessageToAgent(input);
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: formatAIResponse(response),
        timestamp: new Date(),
        restaurantData: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      
      if (onFilterApply) {
        onFilterApply(response);
      }
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I couldn't process your request. Please try again!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatAIResponse = (data: AIResponse): string => {
    const parts: string[] = ["I found some great options for you! Here's what I'm looking for:"];
    
    if (data.mood?.length) {
      parts.push(`• Mood: ${data.mood.join(", ")}`);
    }
    if (data.cuisine?.length) {
      parts.push(`• Cuisine: ${data.cuisine.join(", ")}`);
    }
    if (data.price) {
      if (data.price.min && data.price.max) {
        parts.push(`• Price: ₹${data.price.min} - ₹${data.price.max}`);
      } else if (data.price.max) {
        parts.push(`• Price: Under ₹${data.price.max}`);
      }
    }
    if (data.features?.length) {
      parts.push(`• Features: ${data.features.join(", ")}`);
    }
    
    parts.push("\nCheck out the results on the Explore page!");
    return parts.join("\n");
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "Hi! I'm your SmartDine assistant. Tell me what you're craving, and I'll find the perfect restaurant for you! 🍽️",
        timestamp: new Date(),
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md animate-scale-in">
      <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
        {/* Header */}
        <div className="bg-primary/10 border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">SmartDine AI</h3>
              <p className="text-xs text-muted-foreground">Your food assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleReset} className="text-muted-foreground hover:text-foreground">
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                <span className="text-xs opacity-60 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  <span className="text-sm text-muted-foreground">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Sample Prompts */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Try these:
            </p>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setInput(prompt)}
                  className="px-3 py-1.5 text-xs bg-muted/50 hover:bg-muted text-muted-foreground rounded-full transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your craving..."
              className="flex-1 bg-muted rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg p-3"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

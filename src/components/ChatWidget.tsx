import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getGeminiResponse } from "@/lib/gemini";

interface Message {
  role: "user" | "model";
  parts: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", parts: "Hi! 👋 I'm Lilly's AI assistant. I can help with instant quotes, order tracking, and any questions about our printing services." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", parts: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(
        messages.map(m => ({ role: m.role, parts: m.parts })),
        userMessage
      );
      setMessages((prev) => [...prev, { role: "model", parts: response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "model", parts: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-background border border-border rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
            <div>
              <p className="font-heading font-semibold text-sm">Lilly's Printing</p>
              <p className="text-xs opacity-80 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                24/7 AI Support
              </p>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="hover:bg-primary-foreground/20 p-1 rounded transition-colors">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-muted/30">
            <div className="space-y-4">
              {messages.map((msg, idx) => {
                const quoteMatch = msg.parts.match(/\[SEND_QUOTE: (.*?)\]/);
                const displayCheck = msg.parts.replace(/\[SEND_QUOTE: .*?\]/, "").trim();

                return (
                  <div key={idx} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
                    {displayCheck && (
                      <div
                        className={`
                          max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm mb-2
                          ${msg.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-none"
                            : "bg-background border border-border rounded-bl-none text-foreground"
                          }
                        `}
                      >
                        {displayCheck}
                      </div>
                    )}

                    {quoteMatch && (
                      <a
                        href={`mailto:contact.atlasai@gmail.com?subject=Quote Request - Lilly's Printing&body=Hi Team,%0A%0AI'd like a quote for the following:%0A${encodeURIComponent(quoteMatch[1])}%0A%0APlease get back to me soon.`}
                        className="bg-green-600 text-white text-xs font-bold py-2 px-4 rounded-full hover:bg-green-700 transition-colors shadow-md flex items-center gap-2 mb-2 ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>📧 Click to Send Quote Analysis</span>
                      </a>
                    )}
                  </div>
                );
              })}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-background border border-border rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                    <Loader2 size={16} className="animate-spin text-primary" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="p-3 border-t border-border bg-background flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 bg-muted/50 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground border border-transparent focus:border-border transition-all"
            />
            <Button onClick={handleSend} size="icon" disabled={isLoading} className="rounded-full shrink-0 h-10 w-10">
              <Send size={16} className={isLoading ? "opacity-0" : "opacity-100"} />
              {isLoading && <span className="absolute inset-0 flex items-center justify-center"><Loader2 size={16} className="animate-spin" /></span>}
            </Button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center z-50 group"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X size={24} className="transition-transform group-hover:rotate-90" />
        ) : (
          <MessageCircle size={24} className="transition-transform group-hover:scale-110" />
        )}

        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        )}
      </button>
    </>
  );
};

export default ChatWidget;

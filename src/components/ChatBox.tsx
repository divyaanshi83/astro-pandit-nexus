import { useState } from "react";
import { useChat } from "@/context/ChatContext";
import { Button } from "@/components/ui/button";

const ChatBox = () => {
  const { messages, addMessage, canChat } = useChat();
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || !canChat) return;
    addMessage({ role: "user", content: input });

    setLoading(true);
    setInput("");

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are an expert astrologer from ShriRamJyotishSadan giving clear, calm, spiritual guidance." },
            { role: "user", content: input },
          ],
        }),
      });
      const data = await res.json();
      const reply = data.choices[0].message.content;
      addMessage({ role: "assistant", content: reply });
    } catch {
      addMessage({ role: "assistant", content: "⚠️ Sorry, there was a problem connecting to the astrologer. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-pulse fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-6 py-3 rounded-full shadow-2xl border-2 border-white"
        style={{ zIndex: 9999 }}
      >
        💬 Chat with Astrologer
      </Button>



      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white border rounded-2xl shadow-lg flex flex-col overflow-hidden">

          {/* Header Section */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-3 rounded-t-2xl">
            {/* Circular Logo (replace with your own image later) */}
            <img
              src="/team-icon.png"  // ⬅️ Place your image here (or placeholder)
              alt="Astrologer"
              className="w-8 h-8 rounded-full border border-white"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-sm">From ShriRamJyotishSadan Team</span>
              <span className="text-xs text-blue-100">Online Astrologer Chat</span>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-2 overflow-y-auto max-h-80">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg text-sm ${msg.role === "user" ? "bg-blue-100 text-gray-800" : "bg-gray-100 text-gray-800"
                    }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
          </div>

          {/* Input / Payment Area */}
          {!canChat ? (
            <div className="p-3 text-center bg-gray-50 border-t">
              <p className="text-sm text-gray-600 mb-2">
                💡 You’ve reached your free limit (3 questions).
              </p>
              <Button className="bg-green-600 w-full hover:bg-green-700">
                Pay ₹100 to Continue
              </Button>
            </div>
          ) : (
            <div className="flex border-t">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 p-2 border-none outline-none text-sm"
                placeholder="Ask your question..."
                onKeyDown={e => e.key === "Enter" && sendMessage()}
              />
              <Button onClick={sendMessage} disabled={loading} className="rounded-none text-sm">
                {loading ? "..." : "Send"}
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBox;

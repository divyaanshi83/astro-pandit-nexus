import { useState } from "react";
import { useChat } from "@/context/ChatContext";
import { Button } from "@/components/ui/button";

const ChatBox = () => {
  const { messages, addMessage, canChat } = useChat();
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || !canChat || loading) return;

    const userText = input;

    // show user message immediately
    addMessage({ role: "user", content: userText });
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userText,
        }),
      });

      if (!res.ok) throw new Error("Network error");

      const data = await res.json();

      // OpenAI standard response handling
      const reply =
        data.reply ||
        data.choices?.[0]?.message?.content ||
        "🙏 Please ask again with more clarity.";

      addMessage({
        role: "assistant",
        content: reply,
      });
    } catch (error) {
      addMessage({
        role: "assistant",
        content:
          "⚠️ Sorry, there was a problem connecting to the astrologer. Try again later.",
      });
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
        <div
          className="fixed bottom-20 right-5 w-80 bg-white border rounded-2xl shadow-lg flex flex-col overflow-hidden"
          style={{ zIndex: 9999 }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-3 rounded-t-2xl">
            <img
              src="/team-icon.png"
              alt="Astrologer"
              className="w-8 h-8 rounded-full border border-white"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-sm">
                From ShriRamJyotishSadan Team
              </span>
              <span className="text-xs text-blue-100">
                Online Astrologer Chat
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 overflow-y-auto max-h-80 bg-white">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg text-sm max-w-[90%] ${
                    msg.role === "user"
                      ? "bg-blue-100 text-gray-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}

            {loading && (
              <div className="text-left mb-2">
                <span className="inline-block px-3 py-2 rounded-lg text-sm bg-gray-100 text-gray-500 italic">
                  Astrologer is typing…
                </span>
              </div>
            )}
          </div>

          {/* Input / Payment */}
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
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 border-none outline-none text-sm"
                placeholder="Ask your question..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                disabled={loading}
              />
              <Button
                onClick={sendMessage}
                disabled={loading}
                className="rounded-none text-sm"
              >
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

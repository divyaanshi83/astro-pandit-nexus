import { createContext, useContext, useState } from "react";

interface ChatContextType {
  messages: { role: "user" | "assistant"; content: string }[];
  addMessage: (msg: { role: "user" | "assistant"; content: string }) => void;
  questionCount: number;
  canChat: boolean;
  blockChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [canChat, setCanChat] = useState(true);

  const addMessage = (msg: { role: "user" | "assistant"; content: string }) => {
    setMessages(prev => [...prev, msg]);
    if (msg.role === "user") {
      setQuestionCount(prev => prev + 1);
      if (questionCount + 1 >= 3) setCanChat(false); // Block after 3 questions
    }
  };

  const blockChat = () => setCanChat(false);

  return (
    <ChatContext.Provider value={{ messages, addMessage, questionCount, canChat, blockChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
};

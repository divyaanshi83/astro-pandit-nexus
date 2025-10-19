import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChatProvider } from "./context/ChatContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <ChatProvider>
      <App />
      </ChatProvider>
  </BrowserRouter>
);

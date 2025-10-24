import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChatProvider } from "./context/ChatContext.tsx";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./context/LanguageContext.tsx"; // ✅ Import this

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HelmetProvider>
      <LanguageProvider>
        <ChatProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <App />
            </main>
            <Footer />
          </div>
        </ChatProvider>
      </LanguageProvider>
    </HelmetProvider>
  </BrowserRouter>
);

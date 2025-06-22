import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./lib/components/sidebar/Sidebar";
import Footer from "./lib/components/footer/Footer";
import Parque from "./pages/Parque";
import Contacto from "./pages/Contacto";
import Boletos from "./pages/Boletos";
import ChatbotFlotante from "./lib/components/chat/chat";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <BrowserRouter basename="/tp-grupal-dyw-final/">
      <div className="min-h-screen flex w-full">
        
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />

        <div
          className="flex flex-col flex-1 overflow-hidden"
        >
          <main className="flex-1 bg-primary overflow-auto md:ml-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/parque" element={<Parque />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/Boletos" element={<Boletos />} />
            </Routes>
          </main>

          <Footer />
        </div>
        <ChatbotFlotante />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react"

const ChatbotFlotante = () => {
  const [abierto, setAbierto] = useState(false)
  const [saludoMostrado, setSaludoMostrado] = useState(false)
  const [mensaje, setMensaje] = useState("")
  const [mensajes, setMensajes] = useState<string[]>([])

  const toggleChat = () => {
    if (!abierto && !saludoMostrado) {
      setSaludoMostrado(true)
      setMensajes(["¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?"])
    }
    setAbierto(!abierto)
  }

  const enviarMensaje = () => {
    if (mensaje.trim() === "") return
    setMensajes((prev) => [...prev, `Tú: ${mensaje}`])
    setMensaje("")
  }

  return (
    <>
      {/* Botón flotante */}
      {!abierto && (
        <button
          onClick={toggleChat}
          className="
            fixed bottom-20 right-5 w-14 h-14 rounded-full
            bg-accent text-white text-2xl
            flex items-center justify-center
            shadow-lg z-200
            hover:bg-accent-dark
            transition"
          aria-label="Abrir chat"
        >
          💬
        </button>
      )}

      {/* Ventana del chat */}
      {abierto && (
        <div
          className="
            fixed bottom-[80px] right-5 w-72 h-96
            rounded-xl shadow-xl flex flex-col z-40
            bg-white"
          role="region"
          aria-live="polite"
          aria-label="Ventana de chat"
        >
          <header className="bg-accent text-white p-3 font-bold rounded-t-xl flex justify-between items-center">
            <span>ChatBot</span>
            <button
              onClick={toggleChat}
              aria-label="Cerrar chat"
              className="text-white text-xl font-bold hover:text-accent-light transition cursor-pointer"
            >
              ✖️
            </button>
          </header>

          <main className="p-3 flex-grow overflow-y-auto text-accent-dark text-sm space-y-2">
            {mensajes.map((msg, i) => (
              <p key={i}>{msg}</p>
            ))}
          </main>

          <div className="flex p-2 rounded-xl bg-neutral-light">
            <input
              type="text"
              className="flex-grow px-3 py-1 rounded-xl text-sm focus:outline-none"
              placeholder="Escribí un mensaje..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && enviarMensaje()}
            />
            <button
              onClick={enviarMensaje}
              className="px-4 py-1 bg-accent text-white rounded-r-md text-sm hover:bg-accent-dark transition"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatbotFlotante

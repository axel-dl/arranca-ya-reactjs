"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useRef, useEffect } from "react"

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export default function AsistentePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy Sparkia, tu asistente virtual. Estoy lista para responder a tus preguntas.",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const chatBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: `Gracias por tu pregunta: "${inputMessage}". Como asistente virtual de Arranca Ya!, estoy aquí para ayudarte con tus dudas sobre emprendimiento, nuestros cursos y servicios. ¿En qué más puedo asistirte?`,
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Navigation />

      <div className="flex-1 py-10 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#388E3C] mb-8">Asistente Virtual Sparkia</h2>

          {/* Video Container */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-8">
            <video controls className="w-full h-auto" poster="/placeholder.svg?height=400&width=800&text=Sparkia+Video">
              <source src="/sparkia-video.mp4" type="video/mp4" />
              Tu navegador no soporta el formato de video.
            </video>
          </div>

          {/* Chat Container */}
          <div className="bg-white rounded-2xl shadow-lg p-5 h-96 flex flex-col">
            <div ref={chatBoxRef} className="flex-1 overflow-y-auto border-b border-gray-200 pb-2.5 mb-2.5 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`text-left ${message.isUser ? "text-right" : "text-left"}`}>
                  <div
                    className={`inline-block max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg ${
                      message.isUser ? "bg-[#66BB6A] text-white ml-auto" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <span className="font-medium">{message.isUser ? "Tú: " : "Sparkia: "}</span>
                    {message.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="text-left">
                  <div className="inline-block bg-gray-100 text-gray-800 p-3 rounded-lg">
                    <span className="font-medium">Sparkia: </span>
                    Pensando...
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2.5">
              <Input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 p-2.5 border border-gray-300 rounded-full text-base"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-[#388E3C] hover:bg-[#2e7d32] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl"
              >
                ➤
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

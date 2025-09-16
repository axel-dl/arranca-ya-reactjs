"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function AsistentePage() {
  const router = useRouter();
  // Pre-populate with example history and messages on first load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeeded = window.localStorage.getItem('sparkiaSeeded');
      if (!hasSeeded) {
        const exampleHistory = [
          {
            fileName: 'ticket_venta1.jpg',
            advice: 'He analizado la imagen "ticket_venta1.jpg".\n\n🔎 Análisis de tu negocio:\n- Gastos detectados: $2,500\n- Ingresos detectados: $4,000\n\n💡 Consejo automático:\n¡Buen trabajo! Tus ventas superan tus gastos. Considera diversificar tus productos para aumentar tus ingresos.',
            date: new Date(Date.now() - 86400000).toLocaleString()
          },
          {
            fileName: 'factura_abril.png',
            advice: 'He analizado la imagen "factura_abril.png".\n\n🔎 Análisis de tu negocio:\n- Gastos detectados: $1,200\n- Ingresos detectados: $2,000\n\n💡 Consejo automático:\nTus ingresos van en aumento. ¡Sigue así y revisa tus gastos fijos para optimizar tus ganancias!',
            date: new Date(Date.now() - 2*86400000).toLocaleString()
          }
        ];
        window.localStorage.setItem('sparkiaHistory', JSON.stringify(exampleHistory));
        window.localStorage.setItem('sparkiaSeeded', 'true');
      }
    }
  }, [router]);

  const [history, setHistory] = useState<{fileName: string, advice: string, date: string}[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('sparkiaHistory');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Simulated past chat sessions
  const simulatedSessions = [
    {
      id: '1',
      title: 'Análisis de ventas julio',
      messages: [
        { id: 'm1', text: 'Hola, ¿puedes analizar mis ventas de julio?', isUser: true },
        { id: 'm2', text: 'Claro, sube tu archivo o imagen de ventas.', isUser: false },
        { id: 'm3', text: 'Aquí está el archivo.', isUser: true },
        { id: 'm4', text: '¡Listo! Veo que tu producto estrella fue el kit de jardinería.', isUser: false },
      ],
    },
    {
      id: '2',
      title: '¿Qué comprar esta semana?',
      messages: [
        { id: 'm1', text: '¿Qué productos me recomiendas comprar esta semana?', isUser: true },
        { id: 'm2', text: 'Te sugiero enfocarte en productos de temporada: macetas y semillas.', isUser: false },
      ],
    },
    {
      id: '3',
      title: 'Ideas para promociones',
      messages: [
        { id: 'm1', text: 'Dame ideas para promociones de septiembre.', isUser: true },
        { id: 'm2', text: 'Puedes hacer 2x1 en fertilizantes y descuentos en herramientas.', isUser: false },
      ],
    },
  ];

  const [sessions, setSessions] = useState(simulatedSessions);
  const [selectedSessionId, setSelectedSessionId] = useState(sessions[0]?.id || '');
  const selectedSession = sessions.find((s: any) => s.id === selectedSessionId);
  const [messages, setMessages] = useState(selectedSession ? selectedSession.messages : []);

  // When session changes, update messages
  useEffect(() => {
    const found = sessions.find((s: any) => s.id === selectedSessionId);
    setMessages(found ? found.messages : []);
  }, [selectedSessionId, sessions]);

  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const chatBoxRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: String(Date.now()),
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
        id: String(Date.now() + 1),
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

  // Handle image upload and mimic analysis
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const userMessage: Message = {
        id: String(Date.now()),
        text: `Imagen enviada: ${file.name}`,
        isUser: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setTimeout(() => {
        const advice = `He analizado la imagen "${file.name}".\n\n🔎 **Análisis de tu negocio:**\n- Gastos detectados: $12,500\n- Ingresos detectados: $18,000\n\n💡 **Consejo automático:**\n¡Vas por buen camino! Tus ingresos superan tus gastos. Considera reinvertir parte de tus ganancias en marketing digital o capacitación para seguir creciendo. Si necesitas un análisis más detallado, ¡avísame!`;
        const aiResponse: Message = {
          id: String(Date.now() + 1),
          text: advice,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
        setHistory((prev) => [
          { fileName: file.name, advice, date: new Date().toLocaleString() },
          ...prev
        ]);
        setIsLoading(false);
      }, 2000);
    }
  }

  // Voice message shortcut (simulated)
  const handleVoiceMessage = () => {
    setMessages((prev) => [
      ...prev,
      { id: String(Date.now()), text: '🎤 Mensaje de voz enviado (demo)', isUser: true, timestamp: new Date() },
      { id: String(Date.now() + 1), text: 'He recibido tu mensaje de voz. ¡Gracias! Pronto te enviaré un análisis.', isUser: false, timestamp: new Date() }
    ]);
  }

  // Example conversation for demo
  const mimicConversation = () => {
    const now = Date.now();
    const exampleMessages: Message[] = [
      {
        id: String(now + 1),
        text: "¿Qué cursos ofrecen para emprendedores?",
        isUser: true,
        timestamp: new Date(),
      },
      {
        id: String(now + 2),
        text: "Ofrecemos cursos de finanzas, marketing digital, y gestión de negocios. ¿Te gustaría saber más sobre alguno en particular?",
        isUser: false,
        timestamp: new Date(),
      },
      {
        id: String(now + 3),
        text: "Sí, cuéntame más sobre el de marketing digital.",
        isUser: true,
        timestamp: new Date(),
      },
      {
        id: String(now + 4),
        text: "El curso de marketing digital cubre redes sociales, publicidad online y estrategias de contenido. ¿Quieres que te envíe el temario completo?",
        isUser: false,
        timestamp: new Date(),
      },
    ];
    setMessages((prev) => [...prev, ...exampleMessages]);
  }

  const fastMessages = [
    '¿Qué comprar esta semana?',
    '¿Cómo mejorar mis ventas?',
    '¿Cuánto gasté este mes?',
    '¿Qué curso me recomiendas?'
  ];
  const handleFastMessage = (msg: string) => {
    setInputMessage(msg);
    setTimeout(() => sendMessage(), 100);
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Navigation />

      <div className="flex-1 py-6 px-2 sm:px-5">
        <div className="max-w-2xl mx-auto w-full flex flex-col gap-8">
          {/* Past Chats Menu */}
          <div className="w-full flex flex-col items-start mb-4">
            <div className="font-semibold text-[#388E3C] text-sm mb-1 pl-2">Chats anteriores</div>
            <div className="w-full flex flex-col gap-1 px-2">
              {sessions.length > 0 ? (
                sessions.map((session: any, idx: number) => (
                  <button
                    key={session.id}
                    className={`text-left px-3 py-2 rounded-lg text-sm border border-[#e8f5e9] bg-white hover:bg-[#e8f5e9] transition-colors ${selectedSessionId === session.id ? 'border-[#388E3C] bg-[#e8f5e9] font-bold' : ''}`}
                    onClick={() => setSelectedSessionId(session.id)}
                  >
                    {session.title || `Chat ${idx + 1}`}
                  </button>
                ))
              ) : (
                <div className="text-gray-400 text-xs px-3 py-2">No hay chats anteriores</div>
              )}
            </div>
          </div>

          {/* Chatbot Section */}
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#388E3C] mb-4 sm:mb-8 text-center">Asistente Virtual Sparkia</h2>
            <div className="bg-white rounded-2xl shadow-xl border border-[#e8f5e9] flex flex-col items-center w-full mx-auto mb-6" style={{ minHeight: '420px', height: 'min(60vw, 600px)', maxHeight: '80vh' }}>
              <div className="w-full flex-1 px-4 pb-4 pt-2 flex flex-col" style={{ minHeight: '180px' }}>
                <div ref={chatBoxRef} className="flex-1 overflow-y-auto border-b border-gray-200 pb-2 mb-2 space-y-3 pr-1">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"} items-end gap-2`}>
                      {!message.isUser && (
                        <div className="w-7 h-7 rounded-full bg-[#388E3C] flex items-center justify-center text-white font-bold shadow-md">
                          S
                        </div>
                      )}
                      <div
                        className={`max-w-xs md:max-w-md p-2 rounded-2xl shadow-md text-base break-words ${
                          message.isUser
                            ? "bg-[#66BB6A] text-white ml-auto rounded-br-sm"
                            : "bg-[#f4f7f6] text-gray-800 rounded-bl-sm border border-[#e8f5e9]"
                        }`}
                      >
                        {message.text}
                      </div>
                      {message.isUser && (
                        <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-[#388E3C] font-bold shadow-md">
                          T
                        </div>
                      )}
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start items-end gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#388E3C] flex items-center justify-center text-white font-bold shadow-md">
                        S
                      </div>
                      <div className="inline-block bg-[#f4f7f6] text-gray-800 p-2 rounded-2xl border border-[#e8f5e9] shadow-md">
                        Pensando...
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat input area */}
                <div className="flex gap-2 mt-2 items-center bg-[#f4f7f6] rounded-full px-2 py-1 border border-[#e8f5e9] shadow-sm">
                  <Input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 p-2 border-none bg-transparent text-base focus:ring-0 focus:outline-none"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={isLoading || !inputMessage.trim()}
                    className="bg-[#388E3C] hover:bg-[#2e7d32] text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-md disabled:opacity-60"
                  >
                    ➤
                  </Button>
                  <Button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-[#a5d6a7] hover:bg-[#66BB6A] text-[#388E3C] w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-md"
                    title="Enviar imagen"
                  >
                    <svg width="18" height="18" fill="none" stroke="#388E3C" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-2 0H5V5h14zm-7-3l2.03 2.71a1 1 0 0 0 1.58 0L19 13.13V19H5v-2.13l3.39-4.52a1 1 0 0 1 1.58 0L12 16zm-2-6a2 2 0 1 1 4 0a2 2 0 0 1-4 0z"/></svg>
                  </Button>
                  <Button
                    type="button"
                    onClick={handleVoiceMessage}
                    className="bg-[#a5d6a7] hover:bg-[#66BB6A] text-[#388E3C] w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-md"
                    title="Enviar mensaje de voz"
                  >
                    <svg width="18" height="18" fill="none" stroke="#388E3C" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><rect x="9" y="2" width="6" height="16" rx="3"/></svg>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Histórico Section */}
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#388E3C] mb-4 sm:mb-8 text-center">Histórico de Movimientos</h2>
            <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 text-center w-full">
              <div className="space-y-10">
                {/* Compras Section */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-2xl font-semibold text-[#388E3C]">Compras</h3>
                  <div className="flex flex-col sm:flex-row justify-center gap-5 flex-wrap">
                    <Button
                      className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
                      onClick={() => router.push('/asistente/registro-nuevo')}
                    >
                      Registro Nuevo
                    </Button>
                    <Button
                      className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
                      onClick={() => router.push('/asistente/reporte')}
                    >
                      Reporte
                    </Button>
                  </div>
                </div>

                {/* Ventas Section */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-2xl font-semibold text-[#388E3C]">Ventas</h3>
                  <div className="flex flex-col sm:flex-row justify-center gap-5 flex-wrap">
                    <Button
                      className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
                      onClick={() => router.push('/asistente/registro-ventas')}
                    >
                      Registro de Ventas
                    </Button>
                    <Button
                      className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
                      onClick={() => router.push('/asistente/registro-foto-voz')}
                    >
                      Registro por Foto/Voz
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>

                {/* Additional Features */}
                <div className="mt-12 p-6 bg-[#E8F5E9] rounded-xl">
                  <h4 className="text-xl font-semibold text-[#388E3C] mb-4">Próximamente</h4>
                  <p className="text-gray-700 mb-4">
                    Estamos trabajando en nuevas funcionalidades para mejorar tu experiencia de seguimiento financiero:
                  </p>
                  <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
                    <li>• Dashboard de análisis financiero</li>
                    <li>• Reportes automáticos mensuales</li>
                    <li>• Integración con bancos</li>
                    <li>• Alertas de gastos</li>
                    <li>• Proyecciones de ingresos</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

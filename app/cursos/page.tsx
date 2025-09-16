"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"

interface QuizData {
  q1: string
  q2: string
  q3: string
  q4: string
  q5: string
  q6: string
  q7: string
  q8: string
  q9: string
  q10: string
}

export default function CursosPage() {
  const [showQuiz, setShowQuiz] = useState(true)
  const [quizData, setQuizData] = useState<QuizData>({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  })

  const router = require('next/navigation').useRouter();
  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!quizData.q1 || !quizData.q2.trim()) {
      alert(
        "Por favor, responde al menos la primera pregunta cerrada y la segunda pregunta abierta para obtener tu perfil.",
      )
      return
    }
    // Mimic navigation to perfil page
    router.push('/cursos/perfil')
  }

  const handleRadioChange = (question: keyof QuizData, value: string) => {
    setQuizData((prev) => ({ ...prev, [question]: value }))
  }

  const handleTextareaChange = (question: keyof QuizData, value: string) => {
    setQuizData((prev) => ({ ...prev, [question]: value }))
  }

  if (showQuiz) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
        <Navigation />

        <div className="flex-1 py-10 px-5">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-semibold text-[#388E3C] mb-5">Nuestros Cursos</h2>

            <div className="bg-[#66BB6A] text-white py-15 px-5 rounded-2xl mb-5">
              <h1 className="text-3xl md:text-4xl font-bold mb-2.5">Encuentra tu camino</h1>
              <p className="text-lg">
                Responde a este breve cuestionario para que te recomendemos los mejores cursos para tu perfil
                emprendedor.
              </p>
            </div>

            <form onSubmit={handleQuizSubmit} className="space-y-6 text-left">
              <div className="bg-[#E8F5E9] p-4 rounded-lg">
                <p className="font-semibold mb-3">
                  1. ¿Qué prefieres: a) Innovar y crear algo nuevo o b) Mejorar algo que ya existe?
                </p>
                <RadioGroup
                  value={quizData.q1}
                  onValueChange={(value) => handleRadioChange("q1", value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a" id="q1a" />
                    <Label htmlFor="q1a">a) Innovar y crear algo nuevo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b" id="q1b" />
                    <Label htmlFor="q1b">b) Mejorar algo que ya existe</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-[#E8F5E9] p-4 rounded-lg">
                <p className="font-semibold mb-3">2. ¿Cómo manejas los imprevistos en un proyecto?</p>
                <Textarea
                  value={quizData.q2}
                  onChange={(e) => handleTextareaChange("q2", e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  className="w-full min-h-20 resize-vertical"
                />
              </div>

              <div className="bg-[#E8F5E9] p-4 rounded-lg">
                <p className="font-semibold mb-3">
                  3. ¿Qué te motiva más: a) El éxito financiero o b) El impacto social?
                </p>
                <RadioGroup
                  value={quizData.q3}
                  onValueChange={(value) => handleRadioChange("q3", value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a" id="q3a" />
                    <Label htmlFor="q3a">a) El éxito financiero</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b" id="q3b" />
                    <Label htmlFor="q3b">b) El impacto social</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-[#E8F5E9] p-4 rounded-lg">
                <p className="font-semibold mb-3">4. Describe una idea de negocio que te apasione.</p>
                <Textarea
                  value={quizData.q4}
                  onChange={(e) => handleTextareaChange("q4", e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  className="w-full min-h-20 resize-vertical"
                />
              </div>

              <div className="bg-[#E8F5E9] p-4 rounded-lg">
                <p className="font-semibold mb-3">
                  5. ¿Cuál es tu mayor fortaleza como líder: a) Visión estratégica o b) Habilidad para motivar equipos?
                </p>
                <RadioGroup
                  value={quizData.q5}
                  onValueChange={(value) => handleRadioChange("q5", value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a" id="q5a" />
                    <Label htmlFor="q5a">a) Visión estratégica</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b" id="q5b" />
                    <Label htmlFor="q5b">b) Habilidad para motivar equipos</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-[#E8F5E9] p-4 rounded-lg">
                <p className="font-semibold mb-3">6. ¿Cómo te ves en 5 años?</p>
                <Textarea
                  value={quizData.q6}
                  onChange={(e) => handleTextareaChange("q6", e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  className="w-full min-h-20 resize-vertical"
                />
              </div>

              <div className="bg-[#E8F5E9] p-4 rounded-lg">
                <p className="font-semibold mb-3">
                  7. ¿Qué tipo de ambiente de trabajo prefieres: a) Independiente y autónomo o b) Colaborativo y en
                  equipo?
                </p>
                <RadioGroup
                  value={quizData.q7}
                  onValueChange={(value) => handleRadioChange("q7", value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a" id="q7a" />
                    <Label htmlFor="q7a">a) Independiente y autónomo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b" id="q7b" />
                    <Label htmlFor="q7b">b) Colaborativo y en equipo</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-[#E8F5E9] p-4 rounded-lg">
                <p className="font-semibold mb-3">8. ¿Qué problema de la sociedad te gustaría resolver?</p>
                <Textarea
                  value={quizData.q8}
                  onChange={(e) => handleTextareaChange("q8", e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  className="w-full min-h-20 resize-vertical"
                />
              </div>

              <div className="bg-[#E8F5E9] p-4 rounded-lg">
                <p className="font-semibold mb-3">
                  9. ¿Cuál es tu mayor riesgo a tomar: a) Financiero o b) De reputación?
                </p>
                <RadioGroup
                  value={quizData.q9}
                  onValueChange={(value) => handleRadioChange("q9", value)}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a" id="q9a" />
                    <Label htmlFor="q9a">a) Financiero</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b" id="q9b" />
                    <Label htmlFor="q9b">b) De reputación</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-[#E8F5E9] p-4 rounded-lg">
                <p className="font-semibold mb-3">10. ¿Cómo manejas el fracaso?</p>
                <Textarea
                  value={quizData.q10}
                  onChange={(e) => handleTextareaChange("q10", e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  className="w-full min-h-20 resize-vertical"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#388E3C] hover:bg-[#2e7d32] text-white py-3 px-6 rounded-full text-lg font-semibold transition-colors duration-300"
              >
                Obtener mi Perfil
              </Button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Navigation />

      <div className="flex-1 py-10 px-5">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-semibold text-[#388E3C] mb-8">Nuestros Cursos</h2>

          <div className="bg-[#E8F5E9] p-5 rounded-lg mb-5">
            <h3 className="text-xl font-semibold text-[#388E3C] mb-3">Tu Perfil es: VISIONARIO</h3>
            <p className="mb-3">Eres un emprendedor visionario: enfocado en innovar y transformar.</p>
            <p>Para complementar tu perfil, te recomendamos los siguientes cursos:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-37.5 bg-[#66BB6A] flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Curso 1</span>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#388E3C] mb-2.5">Curso de Marketing Digital Avanzado</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Aprende las últimas estrategias para posicionar tu marca y alcanzar nuevos clientes en línea.
                </p>
                <div className="flex justify-between gap-2">
                  <Button className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-4 py-2 text-sm" onClick={() => router.push('/cursos/compra')}>Comprar</Button>
                  <Button variant="secondary" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 text-sm" onClick={() => alert('Añadido a carrito (simulado)')}>Añadir a carrito</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-37.5 bg-[#388E3C] flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Curso 2</span>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#388E3C] mb-2.5">Introducción a las Finanzas</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Domina los conceptos financieros esenciales para gestionar las cuentas de tu negocio.
                </p>
                <div className="flex justify-between gap-2">
                  <Button className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-4 py-2 text-sm" onClick={() => router.push('/cursos/compra')}>Comprar</Button>
                  <Button variant="secondary" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 text-sm" onClick={() => alert('Añadido a carrito (simulado)')}>Añadir a carrito</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-37.5 bg-[#2e7d32] flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Curso 3</span>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#388E3C] mb-2.5">Estrategias de Liderazgo y Gestión</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Descubre cómo liderar equipos de alto rendimiento y maximizar la productividad.
                </p>
                <div className="flex justify-between gap-2">
                  <Button className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-4 py-2 text-sm" onClick={() => router.push('/cursos/compra')}>Comprar</Button>
                  <Button variant="secondary" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 text-sm" onClick={() => alert('Añadido a carrito (simulado)')}>Añadir a carrito</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

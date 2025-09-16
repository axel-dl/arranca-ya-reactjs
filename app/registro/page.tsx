"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileAssistantButton } from "@/components/mobile-assistant-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function RegistroPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    acceptPrivacy: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.password) {
      alert("Por favor, rellena todos los campos del formulario.")
      return
    }

    if (!formData.acceptPrivacy) {
      alert("Debes aceptar el aviso de privacidad para continuar.")
      return
    }

    alert("¡Registro exitoso! Ahora puedes iniciar sesión.")
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Navigation />

      <div className="flex-1 flex items-center justify-center py-10 px-5">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-[#388E3C] text-center mb-8">Registro de Usuario</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">
                Nombre completo:
              </Label>
              <Input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                Correo electrónico:
              </Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-2 block">
                Contraseña:
              </Label>
              <Input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                required
              />
            </div>

            <div className="bg-[#E8F5E9] border border-[#388E3C] rounded-lg p-4 max-h-40 overflow-y-auto">
              <h3 className="text-lg font-semibold text-[#388E3C] mt-0 mb-3">Aviso de Privacidad</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                En "Arranca Ya!", valoramos tu privacidad. Tus datos personales (nombre y correo electrónico) serán
                utilizados únicamente para crear y gestionar tu cuenta, ofrecerte nuestros servicios de capacitación y
                enviarte información relevante sobre emprendimiento. No compartiremos tus datos con terceros sin tu
                consentimiento. Al registrarte, aceptas los términos de nuestro aviso de privacidad.
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="accept-privacy"
                checked={formData.acceptPrivacy}
                onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, acceptPrivacy: checked as boolean }))}
                className="mt-1"
                required
              />
              <Label htmlFor="accept-privacy" className="text-sm text-gray-700 leading-relaxed">
                He leído y acepto el aviso de privacidad.
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#388E3C] hover:bg-[#2e7d32] text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Registrarme
            </Button>
          </form>
        </div>
      </div>

      {/* Floating Assistant Button */}
      <MobileAssistantButton />

      <Footer />
    </div>
  )
}

"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Image from "next/image"

import { useRouter } from "next/navigation"

export default function AsesoriaPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
  })
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.business) {
      alert("Por favor, rellena todos los campos del formulario.")
      return
    }

    // Mimic navigation to a success page
    router.push("/asesoria/exito")
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Navigation />

      <div className="flex justify-center items-center bg-white py-4 px-5 shadow-sm">
        <div className="w-24 h-12 relative">
          <Image
            src="/arranca-ya-logo-green-entrepreneurship.jpg"
            alt="Logo de Arranca Ya"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center py-10 px-5">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-semibold text-[#388E3C] mb-5">Agenda tu Asesoría</h2>
          <p className="text-gray-600 mb-8">
            Completa el formulario y un especialista se pondrá en contacto contigo para ayudarte a llevar tu idea de
            negocio al siguiente nivel.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">
                Nombre
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
                Correo electrónico
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
              <Label htmlFor="business" className="text-sm font-semibold text-gray-700 mb-2 block">
                Breve descripción de tu negocio
              </Label>
              <Textarea
                id="business"
                value={formData.business}
                onChange={(e) => setFormData((prev) => ({ ...prev, business: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg text-base min-h-24 resize-vertical"
                rows={4}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#388E3C] hover:bg-[#2e7d32] text-white py-3 px-6 rounded-full text-lg font-semibold transition-colors duration-300"
            >
              Solicitar Asesoría
            </Button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Por favor, ingresa tu correo y contraseña.");
      return;
    }
    // Fake login: set localStorage and redirect
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('loggedIn', 'true');
    }
    router.push("/asistente");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-10 px-5">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-[#388E3C] text-center mb-8">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                Correo electrónico:
              </Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
                onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                required
              />
            </div>
            {error && <div className="text-red-600 text-sm text-center">{error}</div>}
            <Button
              type="submit"
              className="w-full bg-[#388E3C] hover:bg-[#2e7d32] text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Iniciar Sesión
            </Button>
            <div className="text-center text-sm mt-4">
              ¿No tienes cuenta?{' '}
              <a href="/registro" className="text-[#388E3C] underline hover:text-[#2e7d32]">Regístrate aquí</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

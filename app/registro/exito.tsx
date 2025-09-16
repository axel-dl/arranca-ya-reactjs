"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function RegistroExitoPage() {
  const router = useRouter();
  useEffect(() => {
    // Optionally, auto-redirect after a few seconds
    // setTimeout(() => router.push("/"), 4000)
  }, [router]);
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Navigation />
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-5">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <h2 className="text-3xl font-bold text-[#388E3C] mb-4">¡Registro exitoso!</h2>
          <p className="text-lg text-gray-700 mb-8">Tu cuenta ha sido creada. Ahora puedes acceder a todas las funciones.</p>
          <Button className="w-full bg-[#388E3C] hover:bg-[#2e7d32] text-white py-3 px-6 rounded-lg text-lg font-semibold" onClick={() => router.push("/cursos")}>Ir a Cursos</Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ReportePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Navigation />
      <div className="flex-1 py-10 px-5 flex flex-col items-center justify-center">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-semibold text-[#388E3C] mb-6">Reporte de Compras</h2>
          <p className="mb-8 text-gray-700">Aquí podrás ver el reporte de tus compras. (Funcionalidad demo)</p>
          <Button className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-6 py-3 rounded-full font-semibold" onClick={() => window.location.href = '/asistente'}>
            Volver
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

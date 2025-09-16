import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HistoricoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Navigation />

      <div className="flex-1 py-10 px-5">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-semibold text-[#388E3C] mb-10">Histórico de Movimientos</h2>

          <div className="space-y-10">
            {/* Compras Section */}
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-semibold text-[#388E3C]">Compras</h3>
              <div className="flex flex-col sm:flex-row justify-center gap-5 flex-wrap">
                <Button
                  asChild
                  className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
                >
                  <Link href="#registro-nuevo">Registro Nuevo</Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
                >
                  <Link href="#reporte-compras">Reporte</Link>
                </Button>
              </div>
            </div>

            {/* Ventas Section */}
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-semibold text-[#388E3C]">Ventas</h3>
              <div className="flex flex-col sm:flex-row justify-center gap-5 flex-wrap">
                <Button
                  asChild
                  className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
                >
                  <Link href="#registro-ventas">Registro de Ventas</Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
                >
                  <Link href="#registro-foto-voz">Registro por Foto/Voz</Link>
                </Button>
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
      </div>

      <Footer />
    </div>
  )
}

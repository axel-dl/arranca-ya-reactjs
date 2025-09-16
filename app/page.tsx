import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <header className="bg-[#66BB6A] text-white py-20 px-5 text-center flex flex-col items-center">
        <div className="w-48 h-24 mb-5 relative">
          <Image src="/arranca-ya-logo-green-entrepreneurship.jpg" alt="Logo de Arranca Ya" fill className="object-contain" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2.5 text-balance">Desbloquea tu Potencial Emprendedor</h1>
        <p className="text-lg max-w-2xl mb-7 text-pretty">
          Accede a todos nuestros cursos, herramientas y recursos para llevar tu negocio al siguiente nivel. Empieza hoy
          mismo tu camino al éxito.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Link href="/registro">Comienza tu prueba gratuita</Link>
          </Button>
          <Button
            asChild
            className="bg-[#388E3C] hover:bg-[#2e7d32] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Link href="/asistente">Usa nuestro asistente de voz</Link>
          </Button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto my-10 px-5">
        <h2 className="text-center text-3xl font-semibold text-[#388E3C] mb-10 text-balance">
          Lo que obtendrás con nuestra plataforma
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="bg-white p-7 rounded-2xl shadow-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="w-15 h-15 mx-auto mb-5">
              <Image
                src="/trophy-icon-gold.jpg"
                alt="Icono de trofeo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl text-[#66BB6A] mb-2.5">Cursos Ilimitados</h3>
            <p>Aprende de nuestra biblioteca completa de cursos en áreas como finanzas, marketing y gestión.</p>
          </div>
          <div className="bg-white p-7 rounded-2xl shadow-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="w-15 h-15 mx-auto mb-5">
              <Image
                src="/financial-chart-graph-analytics.jpg"
                alt="Icono de gráfico"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl text-[#66BB6A] mb-2.5">Análisis Financiero</h3>
            <p>Herramientas exclusivas para gestionar gastos, crear presupuestos y analizar la salud de tu negocio.</p>
          </div>
          <div className="bg-white p-7 rounded-2xl shadow-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="w-15 h-15 mx-auto mb-5">
              <Image
                src="/ai-robot-assistant-technology.jpg"
                alt="Icono de robot"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl text-[#66BB6A] mb-2.5">Asistente con IA</h3>
            <p>Obtén ayuda personalizada 24/7 con nuestro asistente virtual, Sparkia, para resolver todas tus dudas.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

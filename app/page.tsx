
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Rocket } from "lucide-react"
import { Navigation } from "@/components/navigation"



export default function WelcomePage() {
  const router = useRouter();
  // New homepage layout below
  return (
  <div className="min-h-screen flex flex-col bg-[#e8f5e9]">
      {/* Navigation Bar */}
      <Navigation />
      {/* Hero Section */}
  <section className="flex flex-col items-center justify-center text-center py-16 px-4 relative bg-[#43a047]">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Tu idea tiene potencial. Nosotros te damos el mapa.</h1>
  <p className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-xl mx-auto">ArrancaYa es la guía inteligente que simplifica el laberinto de trámites, finanzas y planeación para lanzar tu negocio en CDMX. Deja de adivinar y empieza a construir.</p>
  <Button className="w-full sm:w-auto bg-[#388E3C] hover:bg-[#2e7d32] text-white text-lg px-8 py-4 rounded-xl font-semibold shadow-lg mb-2" onClick={() => router.push('/registro')}>Crea tu Ruta Personalizada Gratis</Button>
        <div className="text-white/80 text-sm mt-2">+500 emprendedores ya iniciaron su ruta.</div>
        <div className="mt-10 flex justify-center w-full overflow-x-auto">
          <img src="/placeholder.jpg" alt="App dashboard screenshot" className="rounded-2xl shadow-2xl w-full max-w-2xl border-4 border-white/20 object-cover" />
        </div>
      </section>

      {/* Problem Section */}
  <section className="bg-[#e8f5e9] py-16 px-4">
  <h2 className="text-3xl font-bold text-black text-center mb-8">¿Abrumado por dónde empezar?</h2>
  <p className="text-lg text-black text-center max-w-2xl mx-auto mb-12">Lanzar un negocio es un reto. Trámites confusos, cálculos financieros que no cuadran y el miedo a cometer errores caros pueden paralizar hasta la mejor idea. Fuimos creados para cambiar eso.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Icon 1: Pila de papeles */}
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-4 text-[#388E3C]"><rect x="8" y="12" width="32" height="24" rx="4" fill="currentColor"/><rect x="12" y="8" width="24" height="32" rx="4" fill="#fff" stroke="currentColor" strokeWidth="2"/></svg>
            <div className="font-semibold text-black mb-2">Trámites y Burocracia</div>
            <div className="text-black text-center">Navega por los requisitos del SAT, IMPI y tu alcaldía sin perderte.</div>
          </div>
          <div className="flex flex-col items-center">
            {/* Icon 2: Calculadora rota */}
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-4 text-[#66BB6A]"><rect x="10" y="10" width="28" height="28" rx="6" fill="currentColor"/><rect x="14" y="14" width="20" height="20" rx="4" fill="#fff" stroke="currentColor" strokeWidth="2"/><line x1="14" y1="34" x2="34" y2="14" stroke="#388E3C" strokeWidth="3"/></svg>
            <div className="font-semibold text-black mb-2">Finanzas Inciertas</div>
            <div className="text-black text-center">Calcula tu punto de equilibrio, flujo de efectivo y precios con herramientas sencillas.</div>
          </div>
          <div className="flex flex-col items-center">
            {/* Icon 3: Foco apagado */}
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-4 text-[#2e7d32]"><circle cx="24" cy="24" r="20" fill="currentColor"/><rect x="20" y="32" width="8" height="6" rx="2" fill="#fff"/><rect x="18" y="14" width="12" height="12" rx="6" fill="#fff"/></svg>
            <div className="font-semibold text-black mb-2">Falta de Guía</div>
            <div className="text-black text-center">Obtén un plan paso a paso, validado por expertos, para no saltarte nada importante.</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-[#a5d6a7]">
        <h2 className="text-3xl font-bold text-black text-center mb-8">Tu Ruta al Éxito en 3 Pasos</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-[#66BB6A] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">1</div>
            <div className="font-semibold text-black mb-2">Define tu Negocio</div>
            <div className="text-black text-center">Responde unas preguntas clave sobre tu idea y nuestro sistema generará una ruta de lanzamiento personalizada solo para ti.</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#388E3C] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">2</div>
            <div className="font-semibold text-black mb-2">Sigue tu Checklist Inteligente</div>
            <div className="text-black text-center">Completa tareas legales, financieras y de marketing. Cada paso incluye guías, recursos y micro-cursos para que aprendas haciendo.</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#2e7d32] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">3</div>
            <div className="font-semibold text-black mb-2">Analiza y Crece con IA</div>
            <div className="text-black text-center">Sube tus registros de ventas y gastos. Nuestro asistente de IA te dará consejos personalizados para optimizar tus finanzas y tomar mejores decisiones.</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-[#c8e6c9]">
        <h2 className="text-3xl font-bold text-black text-center mb-8">Herramientas diseñadas para que arranques con todo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <img src="/placeholder-logo.png" alt="Rutas y Checklists" className="w-20 h-20 mb-4 rounded-xl shadow" />
            <div className="font-semibold text-black mb-2">Rutas y Checklists Personalizados</div>
            <div className="text-black text-center">No más listas genéricas. Tu plan se adapta a si vendes productos, ofreces servicios o tienes un negocio creativo.</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/placeholder-logo.png" alt="Simuladores Financieros" className="w-20 h-20 mb-4 rounded-xl shadow" />
            <div className="font-semibold text-black mb-2">Simuladores Financieros Interactivos</div>
            <div className="text-black text-center">Proyecta tus finanzas sin ser un experto. Calcula precios, punto de equilibrio y retorno de inversión en minutos.</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/placeholder-logo.png" alt="Asistente IA" className="w-20 h-20 mb-4 rounded-xl shadow" />
            <div className="font-semibold text-black mb-2">Asistente IA para tus Finanzas</div>
            <div className="text-black text-center">Conecta con nuestra IA. Sube imágenes de tus tickets y facturas para obtener análisis y consejos que te ayudarán a crecer.</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/placeholder-logo.png" alt="Centro de Aprendizaje" className="w-20 h-20 mb-4 rounded-xl shadow" />
            <div className="font-semibold text-black mb-2">Centro de Aprendizaje Gamificado</div>
            <div className="text-black text-center">Aprende sobre marketing, contabilidad y temas legales en cursos de 5 minutos. Gana insignias y mantente motivado.</div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-[#43a047] text-center">
        <h2 className="text-3xl font-bold text-white mb-4">¿Listo para dejar de soñar y empezar a construir?</h2>
        <p className="text-lg text-white mb-8">El mejor momento para empezar fue ayer. El segundo mejor momento es ahora.</p>
        <Button className="w-full sm:w-auto bg-white hover:bg-[#e8f5e9] text-[#388E3C] text-lg px-8 py-4 rounded-xl font-semibold shadow-lg border border-[#388E3C]" onClick={() => router.push('/registro')}>Regístrate Gratis y Obtén tu Plan</Button>
      </section>

      {/* Footer */}
  <footer className="bg-[#388E3C] text-white py-12 px-4 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="h-6 w-6 text-[#66BB6A]" />
              <span className="text-lg font-bold">ArrancaYa</span>
            </div>
            <p className="text-sm text-white/80">Nuestra misión: Empoderar a los emprendedores de CDMX para lanzar y crecer negocios exitosos.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Producto</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#66BB6A]">Características</a></li>
              <li><a href="#" className="hover:text-[#66BB6A]">Recursos</a></li>
              <li><a href="#" className="hover:text-[#66BB6A]">Blog</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Legal</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#66BB6A]">Aviso de Privacidad</a></li>
              <li><a href="#" className="hover:text-[#66BB6A]">Términos y Condiciones</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Social</div>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="LinkedIn" className="hover:text-[#66BB6A]"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.594v5.602z"/></svg></a>
              <a href="#" aria-label="Twitter" className="hover:text-[#66BB6A]"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.763.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.483 0 1.713.872 3.229 2.197 4.117-.809-.026-1.57-.248-2.236-.616v.062c0 2.393 1.702 4.392 3.965 4.843-.415.113-.853.174-1.304.174-.319 0-.626-.031-.927-.088.627 1.956 2.444 3.377 4.6 3.417-1.685 1.32-3.808 2.107-6.102 2.107-.396 0-.787-.023-1.175-.069 2.179 1.397 4.768 2.215 7.557 2.215 9.054 0 14.009-7.504 14.009-14.009 0-.213-.005-.425-.014-.636z"/></svg></a>
              <a href="#" aria-label="Instagram" className="hover:text-[#66BB6A]"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
            </div>
          </div>
        </div>
        <div className="text-center text-white/60 text-sm mt-8">© 2025 ArrancaYa.</div>
      </footer>
    </div>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/registro", label: "Registro" },
  { href: "/cursos", label: "Cursos" },
  { href: "/historico", label: "Histórico" },
  { href: "/asesoria", label: "Asesoría" },
  { href: "/contacto", label: "Contacto" },
  { href: "/asistente", label: "Asistente" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#388E3C] relative">
      <div className="md:hidden flex justify-between items-center p-4">
        <span className="text-white font-semibold text-lg">Arranca Ya!</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:bg-[#2e7d32]"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-wrap justify-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "inline-block text-white px-5 py-3.5 text-sm md:text-base transition-colors duration-300 hover:bg-[#2e7d32]",
              pathname === item.href && "bg-[#2e7d32]",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#388E3C] border-t border-[#2e7d32]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "block text-white px-5 py-3 text-base transition-colors duration-300 hover:bg-[#2e7d32] border-b border-[#2e7d32]/20",
                pathname === item.href && "bg-[#2e7d32]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

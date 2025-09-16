"use client"

import Link from "next/link"
import { ArrancaYaLogo } from "@/components/arranca-ya-logo"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"


const allNavItems = [
  // { href: "/", label: "Inicio" },
  { href: "/registro", label: "Registro" },
  { href: "/cursos", label: "Cursos" },
  { href: "/historico", label: "Histórico" },
  { href: "/contacto", label: "Contacto" },
  { href: "/asistente", label: "Asistente" },
];
const publicNavItems = [
  // { href: "/", label: "Inicio" },
  { href: "/registro", label: "Registro" },
  { href: "/contacto", label: "Contacto" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Fake login state (persist in localStorage for demo)
  const [loggedIn, setLoggedIn] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    if (typeof window !== 'undefined') {
      setLoggedIn(window.localStorage.getItem('loggedIn') === 'true');
    }
  }, []);

  // Sync login state with localStorage
  const setLoginState = (val: boolean) => {
    setLoggedIn(val);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('loggedIn', val ? 'true' : 'false');
    }
  };

  // Hide Registro for logged-in users
  const navItems = (loggedIn
    ? allNavItems.filter(item => item.href !== "/registro")
    : publicNavItems);

  return (
    <nav className="bg-[#388E3C] relative">
      {/* Mobile Nav Bar */}
      <div className="md:hidden flex justify-between items-center p-4">
        <Link href="/" className="flex items-center" aria-label="Ir al inicio">
          <ArrancaYaLogo className="w-12 h-12" />
        </Link>
        <div className="flex gap-2 items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-[#2e7d32]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="bg-white text-[#388E3C] border border-[#388E3C] hover:bg-[#e8f5e9] hover:text-[#2e7d32]"
            onClick={() => {
              if (!loggedIn) {
                window.location.href = '/login';
              } else {
                setLoginState(false);
              }
            }}
          >
            {hasMounted ? (loggedIn ? 'Cerrar sesión' : 'Iniciar sesión') : 'Iniciar sesión'}
          </Button>
        </div>
      </div>

      {/* Desktop Nav Bar */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-2">
        <Link href="/" className="flex items-center mr-4" aria-label="Ir al inicio">
          <ArrancaYaLogo className="w-12 h-12" />
        </Link>
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
        <Button
          variant="secondary"
          size="sm"
          className="bg-white text-[#388E3C] border border-[#388E3C] hover:bg-[#e8f5e9] hover:text-[#2e7d32] ml-4"
          onClick={() => {
            if (!loggedIn) {
              window.location.href = '/login';
            } else {
              setLoginState(false);
            }
          }}
        >
          {hasMounted ? (loggedIn ? 'Cerrar sesión' : 'Iniciar sesión') : 'Iniciar sesión'}
        </Button>
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
  );
}

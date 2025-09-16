import Link from "next/link"

export function MobileAssistantButton() {
  return (
    <Link
      href="/asistente"
      className="fixed bottom-5 right-5 z-50 w-20 h-20 md:w-24 md:h-24 bg-[#388E3C] rounded-2xl shadow-lg flex flex-col items-center justify-center text-white text-center transition-transform duration-300 hover:scale-110 p-2"
      title="Habla con nuestro asistente virtual"
    >
      <span className="text-xl md:text-2xl leading-none">🤖</span>
      <span className="text-xs leading-tight mt-1 hidden sm:block">
        Soy EsparkIA
        <br />
        tu asistente virtual
      </span>
      <span className="text-xs leading-tight mt-1 sm:hidden">EsparkIA</span>
    </Link>
  )
}

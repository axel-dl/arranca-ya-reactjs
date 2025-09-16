"use client"

import { useEffect, useState, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function SparkiaRegistryPage() {
  const [history, setHistory] = useState<{fileName: string, advice: string, date: string}[]>([]);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);
  const handleDelete = (idx: number) => {
    const newHistory = history.filter((_, i) => i !== idx);
    setHistory(newHistory);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('sparkiaHistory', JSON.stringify(newHistory));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7f6]">
      <Navigation />
      <div className="flex-1 py-10 px-5">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-semibold text-[#388E3C] mb-8">Historial de Análisis de Sparkia</h2>
          <input
            type="text"
            placeholder="Buscar por nombre de archivo..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="mb-6 px-4 py-2 border border-[#a5d6a7] rounded-full w-full max-w-xs text-base focus:outline-none focus:ring-2 focus:ring-[#388E3C]"
          />
          {history.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <img src="/placeholder.svg" alt="Sin historial" className="w-32 h-32 mb-4 opacity-60" />
              <div className="text-gray-500 text-lg">No hay imágenes analizadas aún.</div>
            </div>
          ) : (
            <div className="space-y-6">
              {history.filter(item => item.fileName.toLowerCase().includes(search.toLowerCase())).map((item, idx) => (
                <div key={idx} className="bg-[#e8f5e9] rounded-xl p-5 text-left shadow flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#a5d6a7] rounded-lg flex items-center justify-center">
                    <svg width="32" height="32" fill="#388E3C" viewBox="0 0 24 24"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-2 0H5V5h14zm-7-3l2.03 2.71a1 1 0 0 0 1.58 0L19 13.13V19H5v-2.13l3.39-4.52a1 1 0 0 1 1.58 0L12 16zm-2-6a2 2 0 1 1 4 0a2 2 0 0 1-4 0z"/></svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#388E3C] mb-1 flex items-center justify-between">
                      <span>{item.fileName}</span>
                      <span className="text-xs text-gray-500 ml-2">{item.date}</span>
                    </div>
                    <div className="mb-2">
                      <button
                        className="text-xs text-[#388E3C] underline hover:text-[#2e7d32] mr-4"
                        onClick={() => setExpanded(expanded === idx ? null : idx)}
                      >
                        {expanded === idx ? 'Ocultar detalles' : 'Ver detalles'}
                      </button>
                      <button
                        className="text-xs text-red-500 underline hover:text-red-700"
                        onClick={() => handleDelete(idx)}
                      >
                        Eliminar
                      </button>
                    </div>
                    {expanded === idx && (
                      <div className="whitespace-pre-line text-gray-800 mb-2 bg-white rounded p-3 border border-[#a5d6a7]">
                        {item.advice}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {history.filter(item => item.fileName.toLowerCase().includes(search.toLowerCase())).length === 0 && (
                <div className="text-gray-500">No se encontraron resultados.</div>
              )}
            </div>
          )}
          <Button className="mt-8 bg-[#388E3C] hover:bg-[#2e7d32] text-white px-6 py-3 rounded-full font-semibold" onClick={() => window.location.href = '/asistente'}>
            Volver al Asistente
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

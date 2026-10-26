'use client'

import { useState, useEffect } from 'react'

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true)
      setIsMinimized(false)
    }
    
    window.addEventListener('open-contact', handleOpen)
    return () => window.removeEventListener('open-contact', handleOpen)
  }, [])

  if (!isOpen) return null

  return (
    <div className={`fixed z-[100] transition-all duration-300 ease-in-out ${isMinimized ? 'bottom-4 right-4 w-64' : 'bottom-4 right-4 sm:bottom-8 sm:right-8 w-[calc(100%-2rem)] sm:w-[400px]'}`}>
      <div className="bg-white dark:bg-neutral-900 border border-[var(--card-border)] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--card-border)] bg-[var(--background)]/50">
          <h3 className="font-semibold text-sm">Kirim Pesan</h3>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Minimize"
            >
              <svg width="14" height="2" viewBox="0 0 14 2" fill="currentColor"><path d="M0 0h14v2H0z"/></svg>
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        {/* Body */}
        {!isMinimized && (
          <form className="p-6 flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); alert("Pesan berhasil terkirim!"); }}>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] font-semibold mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                required
                placeholder="Nama lengkap Anda" 
                className="w-full bg-transparent border-b border-[var(--card-border)] focus:border-[var(--foreground)] text-sm py-2 outline-none transition-colors placeholder:text-[var(--muted)]/50"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] font-semibold mb-2">Alamat Email</label>
              <input 
                type="email" 
                required
                placeholder="email.anda@example.com" 
                className="w-full bg-transparent border-b border-[var(--card-border)] focus:border-[var(--foreground)] text-sm py-2 outline-none transition-colors placeholder:text-[var(--muted)]/50"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] font-semibold mb-2">Pesan</label>
              <textarea 
                required
                placeholder="Tuliskan pesan atau keperluan Anda..." 
                rows={3}
                className="w-full bg-transparent border-b border-[var(--card-border)] focus:border-[var(--foreground)] text-sm py-2 outline-none transition-colors resize-none placeholder:text-[var(--muted)]/50"
              />
            </div>
            <button 
              type="submit"
              className="mt-2 w-full py-3.5 rounded-full bg-[var(--card-border)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] text-xs font-bold tracking-widest uppercase transition-colors"
            >
              KIRIM PESAN →
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

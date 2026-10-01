import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, Camera } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exactly 5 options in top menu
  const navItems: { id: PageId; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'curso', label: 'Curso' },
    { id: 'galeria', label: 'Galería' },
    { id: 'recursos', label: 'Recursos' },
    { id: 'inscripcion', label: 'Inscripción' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#1F1F1F]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo arriba a la izquierda que lleva al inicio */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] rounded-md py-1 pr-2"
          aria-label="Ir al inicio de Enfoque"
        >
          <span className="w-10 h-10 rounded-full bg-[#1F1F1F] flex items-center justify-center text-[#FAF8F5] transition-colors group-hover:bg-[#1F1F1F]/90">
            <Camera className="w-5 h-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1F1F1F] leading-none">
              Enfoque
            </span>
            <span className="text-xs text-[#1F1F1F]/60 tracking-wider uppercase mt-0.5">
              Curso de Fotografía
            </span>
          </div>
        </button>

        {/* Menú superior desktop con exactamente 5 opciones */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navegación principal">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`min-h-[48px] px-4 py-3 text-base font-medium transition-colors border-b-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] ${
                  isActive
                    ? 'border-[#E07A1F] text-[#1F1F1F] font-semibold'
                    : 'border-transparent text-[#1F1F1F]/70 hover:text-[#1F1F1F]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Botón hamburguesa en móvil (mínimo 48px de área táctil) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-12 h-12 flex items-center justify-center text-[#1F1F1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] rounded-lg"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" aria-hidden="true" />
            ) : (
              <Menu className="w-7 h-7" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú hamburguesa desplegable para móvil */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-[#FAF8F5] border-b border-[#1F1F1F]/15 px-4 pt-2 pb-6 space-y-2 shadow-sm"
          aria-label="Menú móvil"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full min-h-[48px] px-4 py-3 text-left text-lg font-medium rounded-md transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#1F1F1F]/5 text-[#1F1F1F] font-semibold border-l-4 border-[#E07A1F]'
                    : 'text-[#1F1F1F]/80 hover:bg-[#1F1F1F]/5'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#E07A1F]" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};

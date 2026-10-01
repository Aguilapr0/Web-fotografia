import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ClassicalMusicPlayer } from './components/ClassicalMusicPlayer';
import { InicioPage } from './pages/InicioPage';
import { CursoPage } from './pages/CursoPage';
import { GaleriaPage } from './pages/GaleriaPage';
import { RecursosPage } from './pages/RecursosPage';
import { InscripcionPage } from './pages/InscripcionPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('modulo-1');

  // Handle hash changes for natural URL navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['inicio', 'curso', 'galeria', 'recursos', 'inscripcion'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectModule = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    setCurrentPage('curso');
    window.location.hash = 'curso';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1F1F] flex flex-col font-sans">
      {/* Menú superior fijo con exactamente 5 opciones y logo a la izquierda */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Contenido principal de la página activa */}
      <main className="flex-1 pt-20 pb-12 focus:outline-none" id="contenido-principal">
        {currentPage === 'inicio' && (
          <InicioPage
            onNavigate={handleNavigate}
            onSelectModule={handleSelectModule}
          />
        )}
        {currentPage === 'curso' && (
          <CursoPage
            selectedModuleId={selectedModuleId}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'galeria' && <GaleriaPage />}
        {currentPage === 'recursos' && <RecursosPage />}
        {currentPage === 'inscripcion' && (
          <InscripcionPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Mismo pie de página con contacto y redes en todas las páginas */}
      <Footer onNavigate={handleNavigate} />

      {/* Reproductor de música clásica de fondo */}
      <ClassicalMusicPlayer />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { courseModules } from '../data/courseData';
import { Clock, ChevronDown, ChevronUp, ArrowRight, CheckCircle2, Camera, Target, BookOpen, Image as ImageIcon, Sparkles } from 'lucide-react';

interface CursoPageProps {
  selectedModuleId?: string;
  onNavigate: (page: PageId) => void;
}

export const CursoPage: React.FC<CursoPageProps> = ({ selectedModuleId, onNavigate }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(selectedModuleId || 'modulo-1');
  const [expandedLessonId, setExpandedLessonId] = useState<string>('1-1');

  useEffect(() => {
    if (selectedModuleId) {
      setActiveModuleId(selectedModuleId);
      const targetMod = courseModules.find((m) => m.id === selectedModuleId);
      if (targetMod && targetMod.lecciones.length > 0) {
        setExpandedLessonId(targetMod.lecciones[0].id);
      }
    }
  }, [selectedModuleId]);

  const currentModuleIndex = courseModules.findIndex((m) => m.id === activeModuleId);
  const activeModule = courseModules[currentModuleIndex] || courseModules[0];

  const handleNextModule = () => {
    if (currentModuleIndex < courseModules.length - 1) {
      const nextMod = courseModules[currentModuleIndex + 1];
      setActiveModuleId(nextMod.id);
      setExpandedLessonId(nextMod.lecciones[0].id);
      window.scrollTo({ top: 320, behavior: 'smooth' });
    } else {
      // Last module: proceed to inscription
      onNavigate('inscripcion');
    }
  };

  const handleSelectModuleCard = (moduleId: string) => {
    setActiveModuleId(moduleId);
    const mod = courseModules.find((m) => m.id === moduleId);
    if (mod && mod.lecciones.length > 0) {
      setExpandedLessonId(mod.lecciones[0].id);
    }
    const element = document.getElementById('visor-lecciones');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Encabezado Principal (Un solo H1 por página) */}
      <section className="pt-6 sm:pt-10 text-center space-y-4">
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1F1F1F] tracking-tight">
          Programa de Estudio del Curso
        </h1>
        <p className="text-base sm:text-lg text-[#1F1F1F]/80 max-w-2xl mx-auto">
          Explora los 6 módulos diseñados para que avances desde el manejo básico de tu equipo hasta la edición final en tu celular.
        </p>
      </section>

      {/* SECCIÓN 1: 6 TARJETAS DE MÓDULO (Desktop 3 cols / Móvil 1 col) */}
      <section className="space-y-8" aria-label="Tarjetas de módulos">
        <div className="flex items-center justify-between border-b border-[#1F1F1F]/10 pb-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
            Elige un módulo para aprender
          </h2>
          <span className="text-sm text-[#1F1F1F]/60 hidden sm:inline">
            6 módulos completos · Acceso libre
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseModules.map((mod) => {
            const isSelected = mod.id === activeModuleId;
            return (
              <article
                key={mod.id}
                className={`bg-[#FAF8F5] border rounded-lg overflow-hidden flex flex-col justify-between transition-all ${
                  isSelected
                    ? 'border-[#1F1F1F] ring-2 ring-[#1F1F1F]/15 shadow-md'
                    : 'border-[#1F1F1F]/15 hover:border-[#1F1F1F]/40'
                }`}
              >
                <div>
                  <div className="relative aspect-[4/3] bg-[#1F1F1F]/5 overflow-hidden">
                    <img
                      src={mod.imagenUrl}
                      alt={mod.altText}
                      className="w-full h-full object-cover"
                    />
                    {mod.etiqueta && (
                      <span className="absolute top-3 left-3 bg-[#1F1F1F] text-[#FAF8F5] text-xs font-semibold px-2.5 py-1 rounded">
                        {mod.etiqueta}
                      </span>
                    )}
                  </div>

                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-[#1F1F1F]/70 font-medium">
                      <span>Módulo {mod.numero}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {mod.duracion}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#1F1F1F]">
                      {mod.titulo}
                    </h3>

                    <p className="text-base text-[#1F1F1F]/80">
                      {mod.descripcionCorta}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleSelectModuleCard(mod.id)}
                    className={`w-full min-h-[48px] px-4 py-2 font-medium rounded-md transition-colors flex items-center justify-center gap-2 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] ${
                      isSelected
                        ? 'bg-[#1F1F1F] text-[#FAF8F5]'
                        : 'border border-[#1F1F1F]/30 text-[#1F1F1F] hover:bg-[#1F1F1F]/5'
                    }`}
                  >
                    <span>{isSelected ? 'Módulo activo' : 'Ver lecciones'}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECCIÓN 2: VISOR DE LECCIONES (Acordeón con lecciones y estructura uniforme) */}
      <section
        id="visor-lecciones"
        className="pt-8 border-t border-[#1F1F1F]/15 space-y-8"
        aria-label="Contenido de las lecciones del módulo activo"
      >
        <div className="bg-[#FAF8F5] border border-[#1F1F1F]/20 rounded-lg p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1F1F1F]/10 pb-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#1F1F1F]/60">
                Módulo {activeModule.numero} de 6
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
                {activeModule.titulo}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#1F1F1F]/70">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>Duración estimada: {activeModule.duracion}</span>
            </div>
          </div>
          <p className="text-base sm:text-lg text-[#1F1F1F]/80">
            {activeModule.descripcionCorta}
          </p>
        </div>

        {/* Acordeón de lecciones (Máximo 5 lecciones por módulo) */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1F1F]">
            Lecciones del módulo ({activeModule.lecciones.length} lecciones)
          </h2>

          <div className="space-y-4">
            {activeModule.lecciones.map((leccion) => {
              const isOpen = expandedLessonId === leccion.id;
              return (
                <div
                  key={leccion.id}
                  className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg overflow-hidden transition-colors"
                >
                  {/* Encabezado del Acordeón (Mínimo 48px de alto) */}
                  <button
                    onClick={() => setExpandedLessonId(isOpen ? '' : leccion.id)}
                    className="w-full min-h-[56px] px-6 py-4 flex items-center justify-between text-left hover:bg-[#1F1F1F]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#1F1F1F]/10 text-[#1F1F1F] font-semibold text-sm flex items-center justify-center shrink-0">
                        {leccion.number}
                      </span>
                      {/* H3 para lecciones con tamaños consistentes */}
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F1F1F]">
                        {leccion.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-2">
                      <span className="text-xs text-[#1F1F1F]/60 hidden sm:inline">
                        {leccion.duration}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#1F1F1F]" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#1F1F1F]" aria-hidden="true" />
                      )}
                    </div>
                  </button>

                  {/* CUERPO DE LA LECCIÓN: Estructura idéntica y estricta en todas las lecciones */}
                  {isOpen && (
                    <div className="px-6 pb-8 pt-2 space-y-8 border-t border-[#1F1F1F]/10">
                      {/* 1. OBJETIVO */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#1F1F1F] uppercase tracking-wider">
                          <Target className="w-4 h-4 text-[#1F1F1F]" aria-hidden="true" />
                          <span>Objetivo de la lección</span>
                        </div>
                        <p className="text-base sm:text-lg text-[#1F1F1F] font-medium leading-relaxed bg-[#1F1F1F]/5 p-4 rounded-md border-l-4 border-[#1F1F1F]">
                          {leccion.objetivo}
                        </p>
                      </div>

                      {/* 2. EXPLICACIÓN BREVE */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#1F1F1F] uppercase tracking-wider">
                          <BookOpen className="w-4 h-4 text-[#1F1F1F]" aria-hidden="true" />
                          <span>Explicación breve</span>
                        </div>
                        <p className="text-base text-[#1F1F1F]/90 leading-relaxed sm:text-lg">
                          {leccion.explicacion}
                        </p>
                      </div>

                      {/* 3. EJEMPLO VISUAL */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#1F1F1F] uppercase tracking-wider">
                          <ImageIcon className="w-4 h-4 text-[#1F1F1F]" aria-hidden="true" />
                          <span>Ejemplo visual</span>
                        </div>
                        <div className="border border-[#1F1F1F]/15 rounded-lg overflow-hidden bg-[#1F1F1F]/5">
                          <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                            <img
                              src={leccion.ejemploVisual.imagenUrl}
                              alt={leccion.ejemploVisual.altText}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4 bg-[#FAF8F5] border-t border-[#1F1F1F]/10 space-y-1">
                            <p className="text-base font-medium text-[#1F1F1F]">
                              {leccion.ejemploVisual.descripcion}
                            </p>
                            <p className="text-sm text-[#1F1F1F]/70">
                              <strong>Parámetros recomendados:</strong> {leccion.ejemploVisual.parametros}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 4. EJERCICIO PRÁCTICO */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#1F1F1F] uppercase tracking-wider">
                          <Sparkles className="w-4 h-4 text-[#1F1F1F]" aria-hidden="true" />
                          <span>Ejercicio práctico</span>
                        </div>
                        <div className="bg-[#FAF8F5] border border-[#1F1F1F]/20 rounded-lg p-5 sm:p-6 space-y-3">
                          <h4 className="font-serif text-lg font-bold text-[#1F1F1F]">
                            {leccion.ejercicioPractico.titulo}
                          </h4>
                          <p className="text-base text-[#1F1F1F]/90 leading-relaxed">
                            {leccion.ejercicioPractico.instrucciones}
                          </p>
                          <div className="pt-2 text-sm text-[#1F1F1F]/75 border-t border-[#1F1F1F]/10 flex items-start gap-2">
                            <span className="font-semibold text-[#1F1F1F]">Consejo:</span>
                            <span>{leccion.ejercicioPractico.consejo}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. BOTÓN "SIGUIENTE MÓDULO" AL FINAL */}
        <div className="pt-8 border-t border-[#1F1F1F]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-sm text-[#1F1F1F]/70">
              {currentModuleIndex < courseModules.length - 1
                ? `Próximo: Módulo ${courseModules[currentModuleIndex + 1].numero} · ${courseModules[currentModuleIndex + 1].titulo}`
                : '¡Has recorrido todos los 6 módulos del programa!'}
            </span>
          </div>

          <button
            onClick={handleNextModule}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#E07A1F] text-[#FAF8F5] font-semibold text-lg rounded-md hover:bg-[#C45F0F] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E07A1F]/40 flex items-center justify-center gap-2"
          >
            <span>
              {currentModuleIndex < courseModules.length - 1
                ? 'Siguiente módulo'
                : 'Inscribirme para retroalimentación'}
            </span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
};

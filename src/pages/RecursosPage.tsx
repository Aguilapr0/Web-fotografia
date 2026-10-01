import React, { useState } from 'react';
import { glossaryGroups, faqList } from '../data/resourcesData';
import { downloadGuidePdf } from '../utils/downloadGuide';
import { Download, ChevronDown, ChevronUp, BookOpen, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';

export const RecursosPage: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    downloadGuidePdf();
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <div className="space-y-20 md:space-y-28 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Título H1 único de la página */}
      <section className="pt-6 sm:pt-10 text-center space-y-4">
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1F1F1F] tracking-tight">
          Recursos de Apoyo y Preguntas Frecuentes
        </h1>
        <p className="text-base sm:text-lg text-[#1F1F1F]/80 max-w-2xl mx-auto">
          Consulta nuestro glosario fotográfico en lenguaje sencillo, descarga tu guía rápida de campo en PDF y aclara todas tus dudas.
        </p>
      </section>

      {/* SECCIÓN 1: BOTÓN DE DESCARGA DE GUÍA PDF */}
      <section className="bg-[#FAF8F5] border-2 border-[#1F1F1F]/20 rounded-lg p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#1F1F1F]/70">
              <FileText className="w-4 h-4 text-[#1F1F1F]" aria-hidden="true" />
              <span>Material imprimible de campo</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
              Guía Rápida de Campo en PDF
            </h2>
            <p className="text-base text-[#1F1F1F]/80 leading-relaxed">
              Una hoja resumen diseñada para llevar en el bolsillo o guardar en tu celular con el triángulo de exposición, trucos móviles y composición para aplicar en tus paseos.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#E07A1F] text-[#FAF8F5] font-semibold text-lg rounded-md hover:bg-[#C45F0F] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E07A1F]/40 flex items-center justify-center gap-3"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              <span>{isDownloading ? 'Generando documento...' : 'Descargar guía PDF'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#1F1F1F]/10 text-sm text-[#1F1F1F]/75">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#1F1F1F]" aria-hidden="true" />
            <span>Formato A4 listo para imprimir</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#1F1F1F]" aria-hidden="true" />
            <span>Sin jerga ni fórmulas confusas</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#1F1F1F]" aria-hidden="true" />
            <span>100% gratuito y de uso libre</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: GLOSARIO AGRUPADO POR TEMA */}
      <section className="space-y-10" aria-label="Glosario agrupado por tema">
        <div className="border-b border-[#1F1F1F]/10 pb-4 space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#1F1F1F]/70">
            <BookOpen className="w-4 h-4 text-[#1F1F1F]" aria-hidden="true" />
            <span>Diccionario fotográfico cotidiano</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
            Glosario agrupado por tema
          </h2>
          <p className="text-base text-[#1F1F1F]/80">
            Los términos clave que escucharás en el mundo visual, traducidos a situaciones diarias de la vida colombiana.
          </p>
        </div>

        <div className="space-y-12">
          {glossaryGroups.map((grupo, idx) => (
            <div key={idx} className="space-y-6">
              <div className="border-b border-[#1F1F1F]/15 pb-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1F1F]">
                  {grupo.tema}
                </h3>
                <p className="text-sm text-[#1F1F1F]/70 mt-1">
                  {grupo.descripcion}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {grupo.terminos.map((item, tIdx) => (
                  <article
                    key={tIdx}
                    className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg p-6 space-y-3"
                  >
                    <h4 className="font-serif text-lg font-bold text-[#1F1F1F]">
                      {item.termino}
                    </h4>
                    <p className="text-base text-[#1F1F1F]/85 leading-relaxed">
                      {item.definicion}
                    </p>
                    <div className="bg-[#1F1F1F]/5 p-3 rounded text-sm text-[#1F1F1F]/80 border-l-2 border-[#1F1F1F]">
                      <strong>En la vida real:</strong> {item.ejemploCotidia}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 3: PREGUNTAS FRECUENTES DESPLEGABLES */}
      <section className="space-y-8" aria-label="Preguntas frecuentes">
        <div className="border-b border-[#1F1F1F]/10 pb-4 space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#1F1F1F]/70">
            <HelpCircle className="w-4 h-4 text-[#1F1F1F]" aria-hidden="true" />
            <span>Resolución de dudas</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
            Preguntas frecuentes
          </h2>
          <p className="text-base text-[#1F1F1F]/80">
            Respuestas directas a las preguntas que se hacen los principiantes antes de empezar.
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                  className="w-full min-h-[56px] px-6 py-4 flex items-center justify-between text-left hover:bg-[#1F1F1F]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F]"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F1F1F] pr-4">
                    {faq.pregunta}
                  </h3>
                  <div className="shrink-0 text-[#1F1F1F]">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-5 h-5" aria-hidden="true" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-base sm:text-lg text-[#1F1F1F]/85 leading-relaxed border-t border-[#1F1F1F]/10">
                    <p>{faq.respuesta}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

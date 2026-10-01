import React from 'react';
import { PageId } from '../types';
import { courseModules } from '../data/courseData';
import { CheckCircle2, Smartphone, Sparkles, Clock, ArrowRight, Quote, Camera } from 'lucide-react';

interface InicioPageProps {
  onNavigate: (page: PageId) => void;
  onSelectModule: (moduleId: string) => void;
}

interface CollageItem {
  id: string;
  titulo: string;
  tecnica: string;
  categoria: string;
  url: string;
  alt: string;
  gridClass: string;
  minHeightClass: string;
}

const COLLAGE_ITEMS: CollageItem[] = [
  {
    id: 'c1',
    titulo: 'Retrato con luz de ventana',
    tecnica: 'Apertura f/1.8 · Enfoque al iris',
    categoria: 'Retrato',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    alt: 'Retrato en primer plano con luz lateral suave de ventana y fondo desenfocado.',
    gridClass: 'col-span-2 sm:col-span-1 md:col-span-2 md:row-span-2',
    minHeightClass: 'min-h-[260px] sm:min-h-[300px] md:min-h-[380px]',
  },
  {
    id: 'c2',
    titulo: 'Amanecer en la cordillera',
    tecnica: 'Luz rasante · f/8 para nitidez de borde a borde',
    categoria: 'Paisaje',
    url: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1400&q=85',
    alt: 'Fotógrafo encuadrando un valle montañoso iluminado por la luz dorada natural.',
    gridClass: 'col-span-2 sm:col-span-1 md:col-span-4 md:row-span-1',
    minHeightClass: 'min-h-[200px] md:min-h-[180px]',
  },
  {
    id: 'c3',
    titulo: 'Café de origen colombiano',
    tecnica: 'Luz cenital · Rebote casero con cartulina',
    categoria: 'Producto',
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85',
    alt: 'Taza de café humeante sobre madera oscura con granos tostados.',
    gridClass: 'col-span-1 md:col-span-2 md:row-span-1',
    minHeightClass: 'min-h-[180px]',
  },
  {
    id: 'c4',
    titulo: 'Perspectiva urbana y líneas guía',
    tecnica: 'Punto de fuga central · Ángulo bajo',
    categoria: 'Composición',
    url: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=85',
    alt: 'Calle urbana con líneas de edificios y adoquines convergiendo hacia el fondo.',
    gridClass: 'col-span-1 md:col-span-2 md:row-span-2',
    minHeightClass: 'min-h-[240px] md:min-h-[380px]',
  },
  {
    id: 'c5',
    titulo: 'Luz dorada en la montaña',
    tecnica: 'Contraluz 5:45 p.m. · Balance cálido',
    categoria: 'Luz Natural',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=85',
    alt: 'Colinas verdes iluminadas por rayos cálidos en el atardecer.',
    gridClass: 'col-span-1 md:col-span-2 md:row-span-1',
    minHeightClass: 'min-h-[180px]',
  },
  {
    id: 'c6',
    titulo: 'Luces de la ciudad en la noche',
    tecnica: 'Modo nocturno móvil · Exposición apoyada',
    categoria: 'Nocturna',
    url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=900&q=85',
    alt: 'Avenida urbana nocturna con estelas vehiculares y luces de neón nítidas.',
    gridClass: 'col-span-1 md:col-span-2 md:row-span-1',
    minHeightClass: 'min-h-[180px]',
  },
];

export const InicioPage: React.FC<InicioPageProps> = ({ onNavigate, onSelectModule }) => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* SECCIÓN HERO CON COLLAGE DE IMÁGENES AL INICIO */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden border-b border-[#1F1F1F]/10">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
          {/* Bloque de texto principal con fondo de visor fotográfico y resplandor cálido */}
          <div className="relative max-w-4xl mx-auto">
            {/* Resplandor cálido ambiental de hora dorada en el fondo */}
            <div
              className="absolute -top-14 left-1/2 -translate-x-1/2 w-[300px] sm:w-[540px] h-[300px] bg-[#E07A1F]/12 rounded-full blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Tarjeta del visor con textura y detalles de cámara fotográfica */}
            <div className="relative bg-[#FAF8F5]/95 border border-[#1F1F1F]/15 rounded-2xl shadow-sm p-6 sm:p-10 md:p-12 text-center space-y-6 sm:space-y-8 backdrop-blur-sm overflow-hidden">
              {/* Marca de agua de diafragma / apertura de cámara en el fondo */}
              <div
                className="absolute -right-10 -bottom-10 w-44 h-44 sm:w-60 sm:h-60 opacity-[0.06] pointer-events-none text-[#1F1F1F]"
                aria-hidden="true"
              >
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="50" cy="50" r="46" />
                  <circle cx="50" cy="50" r="20" strokeDasharray="3 3" />
                  <line x1="50" y1="4" x2="82" y2="72" />
                  <line x1="82" y1="72" x2="18" y2="72" />
                  <line x1="18" y1="72" x2="50" y2="4" />
                  <line x1="96" y1="50" x2="30" y2="18" />
                  <line x1="4" y1="50" x2="70" y2="82" />
                </svg>
              </div>

              {/* Corchetes de visor fotográfico en las 4 esquinas */}
              <span className="absolute top-3.5 left-3.5 w-4 h-4 border-t-2 border-l-2 border-[#1F1F1F]/30 rounded-tl-sm pointer-events-none" aria-hidden="true" />
              <span className="absolute top-3.5 right-3.5 w-4 h-4 border-t-2 border-r-2 border-[#1F1F1F]/30 rounded-tr-sm pointer-events-none" aria-hidden="true" />
              <span className="absolute bottom-3.5 left-3.5 w-4 h-4 border-b-2 border-l-2 border-[#1F1F1F]/30 rounded-bl-sm pointer-events-none" aria-hidden="true" />
              <span className="absolute bottom-3.5 right-3.5 w-4 h-4 border-b-2 border-r-2 border-[#1F1F1F]/30 rounded-br-sm pointer-events-none" aria-hidden="true" />

              {/* Kicker superior de visor fotográfico en vivo */}
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#1F1F1F]/70 tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#E07A1F] animate-pulse" aria-hidden="true" />
                <span>Visor en vivo</span>
                <span aria-hidden="true">·</span>
                <span>35mm</span>
                <span aria-hidden="true">·</span>
                <span>f/1.8</span>
                <span aria-hidden="true">·</span>
                <span>ISO 100</span>
              </div>

              {/* Título H1 exacto requerido con toque editorial en cursiva */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F1F1F] tracking-tight leading-[1.15] max-w-3xl mx-auto">
                Aprende a tomar fotos <span className="italic font-normal underline decoration-[#E07A1F]/40 decoration-wavy decoration-1 underline-offset-8">con intención</span>, no por suerte
              </h1>

              {/* Subtítulo de una sola línea que explica el propósito */}
              <p className="text-lg sm:text-xl text-[#1F1F1F]/85 max-w-2xl mx-auto leading-normal">
                Un curso práctico en español para transformar tus fotos cotidianas con tu celular o cámara de entrada.
              </p>

              {/* UN SOLO BOTÓN PRINCIPAL */}
              <div className="pt-2 flex justify-center">
                <button
                  onClick={() => onNavigate('curso')}
                  className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#E07A1F] text-[#FAF8F5] font-semibold text-lg rounded-md shadow-md hover:bg-[#C45F0F] transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E07A1F]/40 flex items-center justify-center gap-2"
                >
                  <span>Empieza el curso gratis</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* COLLAGE EDITORIAL DE IMÁGENES */}
          <div className="pt-4 sm:pt-6" aria-label="Collage de fotografías tomadas en el curso">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
              {COLLAGE_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-xl border border-[#1F1F1F]/15 bg-[#1F1F1F]/5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#1F1F1F]/40 ${item.gridClass} ${item.minHeightClass}`}
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Gradiente sutil para legibilidad del texto informativo del collage */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/80 via-[#1F1F1F]/20 to-transparent opacity-85 transition-opacity group-hover:opacity-95" />

                  {/* Categoría superior */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-[#FAF8F5] bg-[#1F1F1F]/70 rounded-md backdrop-blur-sm border border-white/10 uppercase tracking-wider">
                      <Camera className="w-3 h-3 text-[#FAF8F5]" aria-hidden="true" />
                      <span>{item.categoria}</span>
                    </span>
                  </div>

                  {/* Texto descriptivo al pie de cada fotografía del collage */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 space-y-0.5 text-[#FAF8F5]">
                    <div className="font-serif text-sm sm:text-base font-bold leading-tight drop-shadow-sm">
                      {item.titulo}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#FAF8F5]/85 font-mono tracking-tight drop-shadow-sm line-clamp-1">
                      {item.tecnica}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Leyenda sutil del collage */}
            <p className="text-center text-xs sm:text-sm text-[#1F1F1F]/60 pt-4">
              Fotografías de muestra: técnicas reales que dominarás paso a paso durante los 6 módulos.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: TRES BENEFICIOS CON ÍCONO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1F]">
            Tres razones para aprender con nosotros
          </h2>
          <p className="text-base sm:text-lg text-[#1F1F1F]/75 max-w-2xl mx-auto">
            Diseñamos cada lección pensando en personas reales que buscan resultados visuales inmediatos sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Beneficio 1 */}
          <div className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg p-6 sm:p-8 space-y-4 text-left">
            <div className="w-12 h-12 rounded-lg bg-[#1F1F1F] text-[#FAF8F5] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F1F1F]">
              Sin tecnicismos abrumadores
            </h3>
            <p className="text-base text-[#1F1F1F]/80 leading-relaxed">
              Explicamos la apertura, la velocidad y la luz usando comparaciones de la vida real, para que entiendas el concepto sin fórmulas matemáticas.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg p-6 sm:p-8 space-y-4 text-left">
            <div className="w-12 h-12 rounded-lg bg-[#1F1F1F] text-[#FAF8F5] flex items-center justify-center shrink-0">
              <Smartphone className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F1F1F]">
              Con el equipo que ya tienes
            </h3>
            <p className="text-base text-[#1F1F1F]/80 leading-relaxed">
              No requieres comprar lentes caros de millones de pesos. El 90% de las técnicas se practican directamente con la cámara de tu smartphone.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg p-6 sm:p-8 space-y-4 text-left">
            <div className="w-12 h-12 rounded-lg bg-[#1F1F1F] text-[#FAF8F5] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F1F1F]">
              Práctica desde el primer día
            </h3>
            <p className="text-base text-[#1F1F1F]/80 leading-relaxed">
              Cada lección termina con un reto sencillo de 5 a 10 minutos para hacer en tu casa o cuadra y comprobar tu evolución de inmediato.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: VISTA PREVIA DE LOS 6 MÓDULOS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1F]">
              Vista previa de los 6 módulos
            </h2>
            <p className="text-base sm:text-lg text-[#1F1F1F]/75 max-w-2xl">
              Una ruta paso a paso desde el agarre del equipo hasta la edición final en tu celular.
            </p>
          </div>
          <button
            onClick={() => onNavigate('curso')}
            className="text-[#E07A1F] hover:underline font-semibold text-base flex items-center gap-1.5 self-start sm:self-auto min-h-[48px] py-2"
          >
            <span>Ver programa completo</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* 3 Columnas en Desktop / 1 Columna en Móvil */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseModules.map((mod) => (
            <article
              key={mod.id}
              className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#1F1F1F]/40 transition-colors"
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

                  <p className="text-base text-[#1F1F1F]/80 line-clamp-2">
                    {mod.descripcionCorta}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    onSelectModule(mod.id);
                    onNavigate('curso');
                  }}
                  className="w-full min-h-[48px] px-4 py-2 border border-[#1F1F1F]/30 text-[#1F1F1F] hover:bg-[#1F1F1F]/5 font-medium rounded-md transition-colors flex items-center justify-center gap-1 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F]"
                >
                  <span>Explorar lecciones</span>
                  <ArrowRight className="w-4 h-4 text-[#1F1F1F]/70" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECCIÓN 3: DOS TESTIMONIOS CORTOS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1F]">
            Historias de estudiantes en Colombia
          </h2>
          <p className="text-base sm:text-lg text-[#1F1F1F]/75 max-w-xl mx-auto">
            Jóvenes que pasaron de tomar fotos al azar a componer con intención y seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonio 1 */}
          <figure className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg p-6 sm:p-8 space-y-5 flex flex-col justify-between">
            <Quote className="w-8 h-8 text-[#1F1F1F]/30" aria-hidden="true" />
            <blockquote className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed italic">
              "Antes solo disparaba en automático y casi todas mis fotos salían oscuras o movidas. En solo dos semanas aprendí a usar la luz natural de las tardes y el cambio en mis retratos fue del cielo a la tierra."
            </blockquote>
            <figcaption className="pt-2 border-t border-[#1F1F1F]/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1F1F1F]/10 flex items-center justify-center font-serif font-bold text-[#1F1F1F]">
                CR
              </div>
              <div>
                <div className="font-semibold text-base text-[#1F1F1F]">Camila Restrepo</div>
                <div className="text-sm text-[#1F1F1F]/70">24 años · Medellín</div>
              </div>
            </figcaption>
          </figure>

          {/* Testimonio 2 */}
          <figure className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg p-6 sm:p-8 space-y-5 flex flex-col justify-between">
            <Quote className="w-8 h-8 text-[#1F1F1F]/30" aria-hidden="true" />
            <blockquote className="text-base sm:text-lg text-[#1F1F1F] leading-relaxed italic">
              "Pensé que para hacer fotos con estilo necesitaba una cámara de millones. Con los trucos de composición y encuadre con el celular, mis fotos de café y calle ahora parecen de revista."
            </blockquote>
            <figcaption className="pt-2 border-t border-[#1F1F1F]/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1F1F1F]/10 flex items-center justify-center font-serif font-bold text-[#1F1F1F]">
                AM
              </div>
              <div>
                <div className="font-semibold text-base text-[#1F1F1F]">Andrés Morales</div>
                <div className="text-sm text-[#1F1F1F]/70">19 años · Bogotá</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* LLAMADO A LA ACCIÓN FINAL */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF8F5] border-2 border-[#1F1F1F]/20 rounded-lg p-8 sm:p-12 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
            ¿Listo para descubrir tu mirada fotográfica?
          </h2>
          <p className="text-base sm:text-lg text-[#1F1F1F]/80 max-w-xl mx-auto leading-relaxed">
            Inscríbete gratis para acceder a las guías prácticas y participar en nuestra comunidad de práctica.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onNavigate('inscripcion')}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#E07A1F] text-[#FAF8F5] font-semibold text-lg rounded-md hover:bg-[#C45F0F] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E07A1F]/40"
            >
              Inscribirme al curso
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { GalleryCategory, GalleryPhoto } from '../types';
import { galleryPhotos } from '../data/galleryData';
import { LightboxModal } from '../components/LightboxModal';
import { Eye, Camera, MapPin, Sparkles } from 'lucide-react';

export const GaleriaPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | 'Todas'>('Todas');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories: (GalleryCategory | 'Todas')[] = [
    'Todas',
    'Retrato',
    'Paisaje',
    'Producto',
    'Nocturna',
  ];

  const filteredPhotos =
    selectedCategory === 'Todas'
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.categoria === selectedCategory);

  const handleNextPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIndex]);
  };

  return (
    <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Título H1 único de la página */}
      <section className="pt-6 sm:pt-10 text-center space-y-4">
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1F1F1F] tracking-tight">
          Galería de Práctica e Inspiración
        </h1>
        <p className="text-base sm:text-lg text-[#1F1F1F]/80 max-w-2xl mx-auto">
          Ejemplos reales capturados con celular y cámara de entrada en Colombia. Haz clic en cualquier foto para abrir el visor ampliado y consultar la técnica aplicada.
        </p>
      </section>

      {/* SECCIÓN DE FILTROS: 4 filtros requeridos (Retrato, Paisaje, Producto, Nocturna) */}
      <section className="space-y-8" aria-label="Filtros de galería fotográfica">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1F1F1F]/10 pb-6">
          <h2 className="font-serif text-2xl font-bold text-[#1F1F1F]">
            Filtrar por género fotográfico
          </h2>
          <span className="text-sm text-[#1F1F1F]/70">
            Mostrando {filteredPhotos.length} fotografías
          </span>
        </div>

        {/* Barra de 4 Filtros funcionales (mínimo 48px de área de toque) */}
        <div className="flex flex-wrap gap-2 sm:gap-3" role="toolbar" aria-label="Categorías de fotos">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[48px] px-5 py-2.5 text-base font-medium rounded-md transition-colors border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] ${
                  isActive
                    ? 'bg-[#1F1F1F] text-[#FAF8F5] border-[#1F1F1F]'
                    : 'bg-[#FAF8F5] text-[#1F1F1F] border-[#1F1F1F]/20 hover:border-[#1F1F1F]/50'
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* CUADRÍCULA: Desktop 3 columnas, Móvil 1 columna */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <article
              key={photo.id}
              className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#1F1F1F]/40 transition-colors group cursor-pointer"
              onClick={() => setActivePhoto(photo)}
            >
              <div>
                {/* Imagen con proporción constante (4/3) y texto alternativo descriptivo */}
                <div className="relative aspect-[4/3] bg-[#1F1F1F]/5 overflow-hidden">
                  <img
                    src={photo.imagenUrl}
                    alt={photo.altText}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#1F1F1F]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-[#FAF8F5] text-[#1F1F1F] px-4 py-2 rounded font-medium text-sm flex items-center gap-2 shadow-sm">
                      <Eye className="w-4 h-4" aria-hidden="true" />
                      <span>Ver foto ampliada</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#1F1F1F]/60">
                    <span className="uppercase tracking-wider font-semibold">{photo.categoria}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {photo.lugar}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1F1F1F] group-hover:underline">
                    {photo.titulo}
                  </h3>

                  {/* NOTA DE LA TÉCNICA USADA (Visible directamente en cada foto) */}
                  <div className="bg-[#1F1F1F]/5 p-3.5 rounded-md space-y-1 border-l-2 border-[#1F1F1F]">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1F1F1F]">
                      <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Técnica usada:</span>
                    </div>
                    <p className="text-sm text-[#1F1F1F]/90 leading-snug">
                      {photo.tecnica}
                    </p>
                  </div>
                </div>
              </div>

              {/* Botón táctil para móvil y accesibilidad */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhoto(photo);
                  }}
                  className="w-full min-h-[48px] px-4 py-2 border border-[#1F1F1F]/25 text-[#1F1F1F] hover:bg-[#1F1F1F]/5 font-medium rounded-md transition-colors flex items-center justify-center gap-2 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F]"
                  aria-label={`Ver foto ampliada de ${photo.titulo}`}
                >
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  <span>Abrir en visor ampliado</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Visor ampliado accesible al hacer clic */}
      <LightboxModal
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />
    </div>
  );
};

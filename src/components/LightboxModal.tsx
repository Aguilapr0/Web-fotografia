import React, { useEffect } from 'react';
import { GalleryPhoto } from '../types';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (photo) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [photo, onClose, onNext, onPrev]);

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visor ampliado: ${photo.titulo}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1F1F]/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] text-[#1F1F1F] rounded-lg max-w-4xl w-full max-h-[92vh] overflow-y-auto flex flex-col shadow-2xl border border-[#1F1F1F]/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F1F1F]/10">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#1F1F1F]/60">
              Categoría: {photo.categoria}
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1F1F] leading-tight">
              {photo.titulo}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full flex items-center justify-center text-[#1F1F1F] hover:bg-[#1F1F1F]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F]"
            aria-label="Cerrar visor ampliado"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Image Container with navigation buttons */}
        <div className="relative bg-[#1F1F1F]/5 flex items-center justify-center min-h-[300px] max-h-[58vh] overflow-hidden">
          <img
            src={photo.imagenUrl}
            alt={photo.altText}
            className="w-full h-full object-contain max-h-[56vh]"
          />

          {/* Navigation Arrows */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FAF8F5]/90 text-[#1F1F1F] flex items-center justify-center shadow-md hover:bg-[#FAF8F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] transition-transform active:scale-95"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FAF8F5]/90 text-[#1F1F1F] flex items-center justify-center shadow-md hover:bg-[#FAF8F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] transition-transform active:scale-95"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Detailed Technique Box */}
        <div className="p-6 space-y-4">
          <div className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-md p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1F1F1F]">
              <Sparkles className="w-4 h-4 text-[#1F1F1F]" aria-hidden="true" />
              <span>Nota de la técnica empleada:</span>
            </div>
            <p className="text-base text-[#1F1F1F] leading-relaxed">
              {photo.tecnica}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#1F1F1F]/80 pt-1">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#1F1F1F]/60 shrink-0" aria-hidden="true" />
              <span><strong>Equipo:</strong> {photo.equipo}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#1F1F1F]/60 shrink-0" aria-hidden="true" />
              <span><strong>Ubicación:</strong> {photo.lugar}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

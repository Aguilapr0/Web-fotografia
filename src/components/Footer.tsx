import React from 'react';
import { PageId } from '../types';
import { Camera, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#1F1F1F]/15 mt-20 pt-16 pb-12 text-[#1F1F1F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#1F1F1F]/10">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-[#1F1F1F] flex items-center justify-center text-[#FAF8F5]">
                <Camera className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1F1F1F]">
                Enfoque
              </span>
            </div>
            <p className="text-base text-[#1F1F1F]/80 leading-relaxed">
              Curso de fotografía para principiantes en Colombia. Aprende a capturar momentos con intención estética usando tu celular o cámara de entrada.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-wider text-[#1F1F1F] uppercase font-sans">
              Navegación
            </h2>
            <ul className="space-y-2.5 text-base">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="text-[#E07A1F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] rounded"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('curso')}
                  className="text-[#E07A1F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] rounded"
                >
                  6 Módulos del Curso
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galeria')}
                  className="text-[#E07A1F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] rounded"
                >
                  Galería y Ejemplos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('recursos')}
                  className="text-[#E07A1F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] rounded"
                >
                  Glosario y Preguntas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inscripcion')}
                  className="text-[#E07A1F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] rounded"
                >
                  Inscripción Gratuita
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-wider text-[#1F1F1F] uppercase font-sans">
              Contacto
            </h2>
            <ul className="space-y-3 text-base text-[#1F1F1F]/80">
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 shrink-0 text-[#1F1F1F]/70" aria-hidden="true" />
                <a
                  href="mailto:hola@enfoquecurso.co"
                  className="text-[#E07A1F] hover:underline"
                >
                  hola@enfoquecurso.co
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 shrink-0 text-[#1F1F1F]/70" aria-hidden="true" />
                <a
                  href="https://wa.me/573124567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E07A1F] hover:underline flex items-center gap-1"
                >
                  +57 312 456 7890
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 shrink-0 text-[#1F1F1F]/70 mt-0.5" aria-hidden="true" />
                <span>Bogotá & Medellín, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Social Networks Col */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-wider text-[#1F1F1F] uppercase font-sans">
              Redes y Comunidad
            </h2>
            <p className="text-base text-[#1F1F1F]/80 leading-relaxed">
              Sigue nuestros tutoriales en video corto y comparte tus fotos usando la etiqueta #EnfoqueColombia.
            </p>
            <div className="flex flex-col gap-2 pt-1 text-base">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E07A1F] hover:underline inline-flex items-center gap-1.5"
              >
                Instagram (@enfoquecurso)
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E07A1F] hover:underline inline-flex items-center gap-1.5"
              >
                YouTube (Canal de Clases)
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E07A1F] hover:underline inline-flex items-center gap-1.5"
              >
                TikTok (@enfoque.foto)
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#1F1F1F]/70">
          <p>© 2026 Enfoque · Todos los derechos reservados.</p>
          <p>
            Hecho para estudiantes y creadores visuales en Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { PageId, EnrollmentData } from '../types';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, User, Award } from 'lucide-react';

interface InscripcionPageProps {
  onNavigate: (page: PageId) => void;
}

export const InscripcionPage: React.FC<InscripcionPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<EnrollmentData>({
    nombre: '',
    correo: '',
    nivelExperiencia: 'Principiante absoluto (cero experiencia previa)',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ nombre?: string; correo?: string }>({});

  const validate = () => {
    const newErrors: { nombre?: string; correo?: string } = {};
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Por favor escribe tu nombre completo.';
    }
    if (!formData.correo.trim()) {
      newErrors.correo = 'Por favor escribe tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Ingresa un correo electrónico válido (ejemplo: usuario@correo.com).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In production or preview, store locally or acknowledge
      try {
        localStorage.setItem('enfoque_estudiante', JSON.stringify(formData));
      } catch {
        // ignore storage error
      }
      setSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Título H1 único de la página */}
      <section className="pt-6 sm:pt-10 text-center space-y-4">
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1F1F1F] tracking-tight">
          Inscripción al Curso Enfoque
        </h1>
        <p className="text-base sm:text-lg text-[#1F1F1F]/80 max-w-xl mx-auto">
          Completa los 3 campos a continuación para registrar tu participación gratuita y recibir las actualizaciones y ejercicios de campo.
        </p>
      </section>

      {/* FORMULARIO O ESTADO DE CONFIRMACIÓN */}
      <section className="bg-[#FAF8F5] border border-[#1F1F1F]/20 rounded-lg p-6 sm:p-12 shadow-sm">
        {submitted ? (
          <div className="text-center space-y-6 py-6" role="status" aria-live="polite">
            <div className="w-16 h-16 rounded-full bg-[#1F1F1F] text-[#FAF8F5] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1F1F]">
                ¡Bienvenido a Enfoque, {formData.nombre}!
              </h2>
              <p className="text-base sm:text-lg text-[#1F1F1F]/80 max-w-lg mx-auto leading-relaxed">
                Hemos registrado tu correo <strong>{formData.correo}</strong> con nivel <strong>"{formData.nivelExperiencia}"</strong>. Ya puedes iniciar con el primer módulo.
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('curso')}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#E07A1F] text-[#FAF8F5] font-semibold text-lg rounded-md hover:bg-[#C45F0F] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E07A1F]/40 flex items-center justify-center gap-2"
              >
                <span>Ir al Módulo 1 (Conoce tu cámara)</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <button
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 border border-[#1F1F1F]/30 text-[#1F1F1F] font-medium rounded-md hover:bg-[#1F1F1F]/5 transition-colors"
              >
                Modificar mis datos
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            <div className="space-y-2 border-b border-[#1F1F1F]/10 pb-4">
              <h2 className="font-serif text-2xl font-bold text-[#1F1F1F]">
                Formulario de registro (Solo 3 campos)
              </h2>
              <p className="text-base text-[#1F1F1F]/70">
                Todos los campos son obligatorios para asignarte el contenido adecuado.
              </p>
            </div>

            {/* CAMPO 1: NOMBRE con etiqueta visible */}
            <div className="space-y-2">
              <label
                htmlFor="campo-nombre"
                className="block text-base font-semibold text-[#1F1F1F]"
              >
                1. Nombre completo
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="campo-nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) => {
                    setFormData({ ...formData, nombre: e.target.value });
                    if (errors.nombre) setErrors({ ...errors, nombre: undefined });
                  }}
                  placeholder="Ejemplo: Laura Valentina Gómez"
                  className={`w-full min-h-[48px] px-4 py-3 bg-[#FAF8F5] border text-base text-[#1F1F1F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E07A1F] transition-colors ${
                    errors.nombre ? 'border-red-600' : 'border-[#1F1F1F]/30 focus:border-[#E07A1F]'
                  }`}
                  aria-required="true"
                  aria-invalid={errors.nombre ? 'true' : 'false'}
                  aria-describedby={errors.nombre ? 'error-nombre' : undefined}
                />
              </div>
              {errors.nombre && (
                <p id="error-nombre" className="text-sm text-red-700 font-medium">
                  {errors.nombre}
                </p>
              )}
            </div>

            {/* CAMPO 2: CORREO con etiqueta visible */}
            <div className="space-y-2">
              <label
                htmlFor="campo-correo"
                className="block text-base font-semibold text-[#1F1F1F]"
              >
                2. Correo electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="campo-correo"
                  name="correo"
                  value={formData.correo}
                  onChange={(e) => {
                    setFormData({ ...formData, correo: e.target.value });
                    if (errors.correo) setErrors({ ...errors, correo: undefined });
                  }}
                  placeholder="Ejemplo: laura.gomez@gmail.com"
                  className={`w-full min-h-[48px] px-4 py-3 bg-[#FAF8F5] border text-base text-[#1F1F1F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E07A1F] transition-colors ${
                    errors.correo ? 'border-red-600' : 'border-[#1F1F1F]/30 focus:border-[#E07A1F]'
                  }`}
                  aria-required="true"
                  aria-invalid={errors.correo ? 'true' : 'false'}
                  aria-describedby={errors.correo ? 'error-correo' : undefined}
                />
              </div>
              {errors.correo && (
                <p id="error-correo" className="text-sm text-red-700 font-medium">
                  {errors.correo}
                </p>
              )}
            </div>

            {/* CAMPO 3: NIVEL DE EXPERIENCIA con etiqueta visible */}
            <div className="space-y-2">
              <label
                htmlFor="campo-nivel"
                className="block text-base font-semibold text-[#1F1F1F]"
              >
                3. Nivel de experiencia actual
              </label>
              <div className="relative">
                <select
                  id="campo-nivel"
                  name="nivelExperiencia"
                  value={formData.nivelExperiencia}
                  onChange={(e) =>
                    setFormData({ ...formData, nivelExperiencia: e.target.value })
                  }
                  className="w-full min-h-[48px] px-4 py-3 bg-[#FAF8F5] border border-[#1F1F1F]/30 text-base text-[#1F1F1F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E07A1F] focus:border-[#E07A1F] transition-colors"
                  aria-required="true"
                >
                  <option value="Principiante absoluto (cero experiencia previa)">
                    Principiante absoluto (cero experiencia previa)
                  </option>
                  <option value="Básico con celular (solo tomo fotos en automático)">
                    Básico con celular (solo tomo fotos en automático)
                  </option>
                  <option value="Tengo una cámara réflex o mirrorless de entrada sin configurar">
                    Tengo una cámara réflex o mirrorless de entrada sin configurar
                  </option>
                  <option value="Quiero aprender a componer y editar mejor mis fotos">
                    Quiero aprender a componer y editar mejor mis fotos
                  </option>
                </select>
              </div>
              <p className="text-sm text-[#1F1F1F]/70">
                Adaptaremos los ejercicios recomendados a tu equipo y nivel actual.
              </p>
            </div>

            {/* BOTÓN INSCRIBIRME (Mínimo 48px, ancho completo en móvil) */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto min-h-[48px] px-10 py-3.5 bg-[#E07A1F] text-[#FAF8F5] font-semibold text-lg rounded-md hover:bg-[#C45F0F] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E07A1F]/40 flex items-center justify-center gap-2"
              >
                <span>Inscribirme</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Garantía de privacidad y cero spam */}
            <div className="pt-4 border-t border-[#1F1F1F]/10 flex items-center gap-2 text-sm text-[#1F1F1F]/70">
              <ShieldCheck className="w-4 h-4 text-[#1F1F1F] shrink-0" aria-hidden="true" />
              <span>Privacidad garantizada: no compartimos tus datos y no enviamos spam publicitario.</span>
            </div>
          </form>
        )}
      </section>

      {/* RECUADRO INFORMATIVO DE ACOMPAÑAMIENTO */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg p-6 space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#1F1F1F]/10 text-[#1F1F1F] flex items-center justify-center">
            <Mail className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#1F1F1F]">
            Confirmación inmediata
          </h3>
          <p className="text-sm text-[#1F1F1F]/80">
            Recibirás en tu correo los accesos al material y la guía descargable.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg p-6 space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#1F1F1F]/10 text-[#1F1F1F] flex items-center justify-center">
            <User className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#1F1F1F]">
            Ritmo personalizado
          </h3>
          <p className="text-sm text-[#1F1F1F]/80">
            Avanza según tu disponibilidad horaria, sin fechas límite estrictas.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#1F1F1F]/15 rounded-lg p-6 space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#1F1F1F]/10 text-[#1F1F1F] flex items-center justify-center">
            <Award className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#1F1F1F]">
            Comunidad de práctica
          </h3>
          <p className="text-sm text-[#1F1F1F]/80">
            Comparte tus fotos y recibe retroalimentación de otros fotógrafos en Colombia.
          </p>
        </div>
      </section>
    </div>
  );
};

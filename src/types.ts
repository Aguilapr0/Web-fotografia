export type PageId = 'inicio' | 'curso' | 'galeria' | 'recursos' | 'inscripcion';

export interface Lesson {
  id: string;
  number: number;
  title: string;
  duration: string;
  objetivo: string;
  explicacion: string;
  ejemploVisual: {
    imagenUrl: string;
    altText: string;
    descripcion: string;
    parametros: string;
  };
  ejercicioPractico: {
    titulo: string;
    instrucciones: string;
    consejo: string;
  };
}

export interface CourseModule {
  id: string;
  numero: number;
  titulo: string;
  descripcionCorta: string;
  duracion: string;
  imagenUrl: string;
  altText: string;
  etiqueta?: string;
  lecciones: Lesson[];
}

export type GalleryCategory = 'Retrato' | 'Paisaje' | 'Producto' | 'Nocturna';

export interface GalleryPhoto {
  id: string;
  titulo: string;
  categoria: GalleryCategory;
  imagenUrl: string;
  altText: string;
  tecnica: string;
  equipo: string;
  lugar: string;
}

export interface GlossaryTerm {
  termino: string;
  definicion: string;
  ejemploCotidia: string;
}

export interface GlossaryGroup {
  tema: string;
  descripcion: string;
  terminos: GlossaryTerm[];
}

export interface FAQItem {
  id: string;
  pregunta: string;
  respuesta: string;
}

export interface EnrollmentData {
  nombre: string;
  correo: string;
  nivelExperiencia: string;
}

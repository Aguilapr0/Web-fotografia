import { GlossaryGroup, FAQItem } from '../types';

export const glossaryGroups: GlossaryGroup[] = [
  {
    tema: '1. Óptica y Enfoque',
    descripcion: 'Términos relacionados con cómo viaja la luz a través de los lentes y cómo definir la nitidez.',
    terminos: [
      {
        termino: 'Apertura (número f/)',
        definicion: 'Tamaño del orificio dentro del lente por donde entra la luz hacia el sensor. Se representa con valores como f/1.8, f/4, f/11.',
        ejemploCotidia: 'Como la pupila de tu ojo: se abre en la penumbra y se achica bajo el sol fuerte.'
      },
      {
        termino: 'Profundidad de campo',
        definicion: 'La distancia por delante y por detrás del punto enfocado que también se ve razonablemente nítida.',
        ejemploCotidia: 'Profundidad baja = solo los ojos nítidos y fondo borroso. Profundidad alta = todo el paisaje nítido.'
      },
      {
        termino: 'Distancia focal (milímetros)',
        definicion: 'Medida óptica (ej. 24mm, 50mm, 85mm) que define qué tan ancho o cerrado es el ángulo de visión de tu encuadre.',
        ejemploCotidia: 'Un lente 24mm abarca toda la habitación; un lente 85mm te acerca al rostro de una persona sin caminar.'
      },
      {
        termino: 'Bokeh',
        definicion: 'Término de origen japonés que describe la calidad estética y suavidad de las zonas desenfocadas de una imagen.',
        ejemploCotidia: 'Esos círculos luminosos y sedosos que se forman al fondo en fotos de luces navideñas o farolas de ciudad.'
      }
    ]
  },
  {
    tema: '2. Exposición y Luz',
    descripcion: 'Parámetros que determinan si tu foto saldrá muy clara, muy oscura o perfectamente balanceada.',
    terminos: [
      {
        termino: 'Velocidad de obturación',
        definicion: 'El tiempo que la cortinilla del sensor permanece abierta recibiendo luz (ej. 1/1000s o 2 segundos).',
        ejemploCotidia: 'Un parpadeo ultrarrápido congela una gota; un parpadeo lento hace que el agua parezca seda suave.'
      },
      {
        termino: 'ISO',
        definicion: 'La sensibilidad electrónica del sensor para captar luz cuando la escena está oscura.',
        ejemploCotidia: 'Como subirle el volumen a una radio: si lo subes demasiado, escuchas zumbido o estática (ruido digital).'
      },
      {
        termino: 'Rango dinámico',
        definicion: 'La capacidad de la cámara para capturar detalles al mismo tiempo en las zonas muy brillantes y en las muy oscuras.',
        ejemploCotidia: 'Poder ver las nubes en el cielo azul sin que la persona debajo de un árbol quede como una mancha negra.'
      },
      {
        termino: 'Balance de blancos (WB)',
        definicion: 'Ajuste de color que compensa las tonalidades de las fuentes de luz para que los objetos blancos se vean blancos.',
        ejemploCotidia: 'Evita que una foto en una sala parezca amarillenta como un foco viejo o azul como un congelador.'
      }
    ]
  },
  {
    tema: '3. Composición y Encuadre',
    descripcion: 'Pautas visuales para organizar lo que entra en tu cámara y contar una historia atractiva.',
    terminos: [
      {
        termino: 'Regla de los tercios',
        definicion: 'División imaginaria de la imagen en una cuadrícula de 3x3 donde las intersecciones marcan los puntos de mayor impacto visual.',
        ejemploCotidia: 'Ubicar la mirada de tu amigo en una esquina de la cuadrícula en vez de pegarlo en el centro exacto.'
      },
      {
        termino: 'Líneas guía',
        definicion: 'Elementos lineales en el entorno (carreteras, andenes, sombras, barandas) que conducen la mirada hacia el sujeto.',
        ejemploCotidia: 'Las líneas del paso peatonal que apuntan directo hacia una persona cruzando la calle.'
      },
      {
        termino: 'Espacio negativo',
        definicion: 'El área vacía o despojada alrededor del sujeto principal (cielo, pared lisa, agua tranquila).',
        ejemploCotidia: 'Darle "aire" a una foto para que se sienta elegante, pacífica y moderna, sin amontonar cosas.'
      },
      {
        termino: 'Encuadre natural (Frame within a frame)',
        definicion: 'Utilizar elementos físicos del entorno para rodear y destacar al protagonista de la fotografía.',
        ejemploCotidia: 'Fotografiar a alguien a través del marco de una puerta de madera o entre dos ramas de un árbol.'
      }
    ]
  }
];

export const faqList: FAQItem[] = [
  {
    id: 'faq-1',
    pregunta: '¿Necesito una cámara profesional para hacer este curso?',
    respuesta: 'No. En absoluto. "Enfoque" está diseñado desde cero para que puedas aplicar cada concepto con la cámara de tu celular actual o con una cámara de entrada básica (Canon Rebel, Sony Alpha serie 6000, Nikon D3000, etc.). El 80% de una gran foto depende de entender la luz y la composición, no del precio de la máquina.'
  },
  {
    id: 'faq-2',
    pregunta: '¿Qué celular necesito para poder realizar los ejercicios?',
    respuesta: 'Cualquier smartphone con cámara trasera funcional de los últimos 6 a 8 años (Android o iPhone). En el Módulo 5 te enseñamos cómo sacarle el jugo a la app nativa o cómo instalar aplicaciones gratuitas para controlar el enfoque manual y la exposición.'
  },
  {
    id: 'faq-3',
    pregunta: '¿Cuánto tiempo me tomará completar el curso?',
    respuesta: 'El curso consta de 6 módulos estructurados. Si le dedicas entre 30 y 45 minutos un par de días a la semana para leer la teoría y hacer los ejercicios prácticos sugeridos, podrás completar todo el programa en 3 a 4 semanas a tu propio ritmo.'
  },
  {
    id: 'faq-4',
    pregunta: '¿El curso realmente es 100% gratuito?',
    respuesta: 'Sí. Todo el contenido educativo, las 6 lecciones completas, la galería de referencia y la guía PDF descargable son completamente de libre acceso. Nuestro objetivo en Colombia es democratizar el aprendizaje visual sin barreras de pago.'
  },
  {
    id: 'faq-5',
    pregunta: '¿Qué aplicaciones de edición recomiendan y son de pago?',
    respuesta: 'Recomendamos 100% herramientas gratuitas: Adobe Lightroom Mobile (su versión gratuita para celular tiene todas las herramientas de luz y color que necesitas) y Snapseed (de Google, completamente gratis y sin anuncios).'
  },
  {
    id: 'faq-6',
    pregunta: '¿Dónde puedo compartir mis fotos y recibir retroalimentación?',
    respuesta: 'Al inscribirte en la página de Inscripción, te enviaremos una invitación a nuestra comunidad de estudiantes donde compartimos ejercicios semanales, resolvemos dudas de ajustes y comentamos fotos con respeto y buena onda.'
  }
];

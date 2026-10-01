import { GalleryPhoto } from '../types';

export const galleryPhotos: GalleryPhoto[] = [
  // RETRATO
  {
    id: 'gal-1',
    titulo: 'Retrato con luz de ventana en Medellín',
    categoria: 'Retrato',
    imagenUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    altText: 'Retrato en primer plano de mujer joven con luz lateral suave de una ventana y fondo desenfocado.',
    tecnica: 'Luz lateral difusa a 45 grados, apertura f/1.8 para aislar el fondo y enfoque puntual fijado en el iris.',
    equipo: 'Cámara de entrada con lente fijo 50mm f/1.8',
    lugar: 'Medellín, Antioquia'
  },
  {
    id: 'gal-2',
    titulo: 'Mirada en la plaza colonial',
    categoria: 'Retrato',
    imagenUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
    altText: 'Hombre joven sonriendo en una plaza pública con iluminación de sombra abierta y fondo arquitectónico.',
    tecnica: 'Sombra abierta bajo alero colonial para evitar destellos en la frente, regla de tercios con sujeto en línea izquierda.',
    equipo: 'Celular en modo Retrato (cámara principal 1x)',
    lugar: 'Villa de Leyva, Boyacá'
  },
  {
    id: 'gal-3',
    titulo: 'Retrato al atardecer (Luz dorada)',
    categoria: 'Retrato',
    imagenUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85',
    altText: 'Retrato de mujer con destellos dorados en el cabello gracias a un contraluz suave durante el atardecer.',
    tecnica: 'Contraluz con sol a la espalda para crear halo en el cabello y compensación de exposición de +0.7 EV.',
    equipo: 'Celular con bloqueo AE/AF y medición puntual',
    lugar: 'Cali, Valle del Cauca'
  },

  // PAISAJE
  {
    id: 'gal-4',
    titulo: 'Niebla matutina en la cordillera',
    categoria: 'Paisaje',
    imagenUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    altText: 'Valle andino con capas de montañas verdes y niebla matutina reflejadas sobre un lago cristalino.',
    tecnica: 'Composición simétrica con reflejo acuático en el tercio inferior, apertura f/8 para máxima nitidez de borde a borde.',
    equipo: 'Cámara réflex básica con lente kit 18-55mm en trípode liviano',
    lugar: 'Laguna de Guatavita, Cundinamarca'
  },
  {
    id: 'gal-5',
    titulo: 'Senderos del Eje Cafetero',
    categoria: 'Paisaje',
    imagenUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85',
    altText: 'Colinas ondulantes verdes cubiertas de palmas de cera y vegetación tropical con luz matinal.',
    tecnica: 'Líneas guía creadas por la cresta de la montaña que conducen la mirada hacia las copas de las palmeras.',
    equipo: 'Celular con lente gran angular nativo 1x',
    lugar: 'Valle del Cocora, Quindío'
  },
  {
    id: 'gal-6',
    titulo: 'Costa caribeña en calma',
    categoria: 'Paisaje',
    imagenUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    altText: 'Playa de arena clara con pequeñas olas rompiendo suavemente bajo un cielo azul despejado.',
    tecnica: 'Horizonte estrictamente nivelado en la línea superior de la cuadrícula (proporción 2/3 de mar y 1/3 de cielo).',
    equipo: 'Celular a pulso con filtro polarizador magnético',
    lugar: 'Parque Tayrona, Magdalena'
  },

  // PRODUCTO
  {
    id: 'gal-7',
    titulo: 'Café de origen recién preparado',
    categoria: 'Producto',
    imagenUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85',
    altText: 'Taza de café humeante servida sobre mesa de madera oscura con granos tostados esparcidos alrededor.',
    tecnica: 'Ángulo cenital (desde arriba) con luz de ventana matutina y cartulina blanca al costado para rellenar sombras.',
    equipo: 'Celular montado sobre soporte casero',
    lugar: 'Tienda de especialidad, Bogotá'
  },
  {
    id: 'gal-8',
    titulo: 'Texturas artesanales de cerámica',
    categoria: 'Producto',
    imagenUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85',
    altText: 'Pieza de cerámica artesanal de barro con textura rústica iluminada lateralmente para resaltar el relieve.',
    tecnica: 'Luz rasante a 90 grados para acentuar el relieve táctil de la arcilla y balance de blancos cálido manual.',
    equipo: 'Cámara de entrada con apertura f/4.0',
    lugar: 'Ráquira, Boyacá'
  },
  {
    id: 'gal-9',
    titulo: 'Postre de maracuyá y cacao',
    categoria: 'Producto',
    imagenUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85',
    altText: 'Postre emplatado de alta cocina con frutas tropicales frescas y salsas con brillo apetitoso.',
    tecnica: 'Ángulo de 45 grados (la vista natural del comensal) con desenfoque suave del fondo para que destaque la textura.',
    equipo: 'Celular en modo Pro con enfoque manual en la fruta',
    lugar: 'Restaurante local, Medellín'
  },

  // NOCTURNA
  {
    id: 'gal-10',
    titulo: 'Luces de la carrera séptima',
    categoria: 'Nocturna',
    imagenUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=85',
    altText: 'Avenida urbana de noche con estelas de luces vehiculares rojas y blancas entre edificios iluminados.',
    tecnica: 'Larga exposición de 4 segundos apoyando el equipo en una baranda peatonal fija, ISO 100 para cero grano.',
    equipo: 'Celular en modo nocturno con temporizador de 2 segundos',
    lugar: 'Centro Internacional, Bogotá'
  },
  {
    id: 'gal-11',
    titulo: 'Café iluminado en la noche lluviosa',
    categoria: 'Nocturna',
    imagenUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85',
    altText: 'Fachada cálida de un café iluminada por bombillos incandescentes reflejada en el asfalto mojado.',
    tecnica: 'Aprovechamiento de los reflejos en el pavimento húmedo para duplicar las fuentes de luz y añadir dramatismo.',
    equipo: 'Cámara con lente 35mm f/2.0 a pulso',
    lugar: 'Barrio San Antonio, Cali'
  },
  {
    id: 'gal-12',
    titulo: 'Arquitectura iluminada y cielo azul noche',
    categoria: 'Nocturna',
    imagenUrl: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=85',
    altText: 'Perspectiva urbana nocturna con fachadas iluminadas por farolas y cielo en tono azul profundo.',
    tecnica: 'Fotografiada durante la "hora azul" (justo 25 minutos después del atardecer) para conservar tonalidad en el cielo.',
    equipo: 'Cámara con compensación de exposición -0.7 EV',
    lugar: 'Paseo urbano, Cartagena'
  }
];

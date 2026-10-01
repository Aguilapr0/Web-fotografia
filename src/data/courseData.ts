import { CourseModule } from '../types';

export const courseModules: CourseModule[] = [
  {
    id: 'modulo-1',
    numero: 1,
    titulo: 'Conoce tu cámara',
    descripcionCorta: 'Descubre los botones esenciales de tu cámara o el modo Pro de tu celular sin enredos.',
    duracion: '45 min',
    etiqueta: 'Empieza aquí',
    imagenUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    altText: 'Cámara fotográfica manual descansando sobre una mesa de madera rústica con luz suave.',
    lecciones: [
      {
        id: '1-1',
        number: 1,
        title: 'Anatomía básica: del celular a la cámara réflex',
        duration: '10 min',
        objetivo: 'Identificar el sensor, el lente, el disparador y la cuadrícula en tu celular o cámara de entrada.',
        explicacion: 'Una cámara no es más que una caja oscura con un orificio por donde entra la luz para estamparla en un sensor. En tu celular, la cámara principal tiene un lente fijo; en una cámara de entrada, el lente se puede cambiar. Lo primordial hoy no es aprenderte cien menús, sino saber exactamente por dónde entra la luz y cómo sostener el equipo con ambas manos para evitar temblores.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=900&q=80',
          altText: 'Primer plano de manos sosteniendo una cámara fotográfica con firmeza.',
          descripcion: 'Postura correcta con dos manos: codos pegados al cuerpo para máxima estabilidad sin trípode.',
          parametros: 'Postura ergonómica · Sujeción estable · Respiración pausada'
        },
        ejercicioPractico: {
          titulo: 'Activa la cuadrícula y revisa tus lentes',
          instrucciones: 'Abre la cámara de tu celular o el menú de tu cámara. Busca en Ajustes la opción "Cuadrícula" o "Líneas guía (3x3)" y actívala. Luego, toma un paño de microfibra limpio y limpia suavemente la grasa del lente de tu celular. Notarás de inmediato cómo desaparecen los reflejos lechosos.',
          consejo: 'La grasa de los dedos en el lente del celular es la causa número uno de fotos opacas en Colombia.'
        }
      },
      {
        id: '1-2',
        number: 2,
        title: 'Enfoque puntual vs. Enfoque continuo',
        duration: '12 min',
        objetivo: 'Decidir voluntariamente qué elemento de la foto saldrá 100% nítido en vez de dejarlo a la suerte del automático.',
        explicacion: 'El enfoque automático de tu cámara intenta adivinar qué es importante, eligiendo casi siempre lo más grande o lo más cercano al centro. Cuando tocas la pantalla de tu celular o presionas el disparador a la mitad en tu cámara, fijas el foco en la mirada de una persona o en el detalle de una taza. Si el sujeto no se mueve, usa enfoque puntual; si sigues a una mascota corriendo, usa continuo.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
          altText: 'Retrato nítido donde los ojos están perfectamente enfocados y el fondo suavemente desenfocado.',
          descripcion: 'Enfoque puntual bloqueado en el iris del sujeto. La mirada transmite nitidez inmediata.',
          parametros: 'Punto de enfoque único AF-S · Bloqueo de foco AE/AF lock'
        },
        ejercicioPractico: {
          titulo: 'El truco del candado de enfoque (AF Lock)',
          instrucciones: 'Coloca un objeto pequeño (como una taza de café) en tu mesa. Apunta con tu celular, mantén presionado el dedo sobre la taza durante dos segundos hasta que aparezca el icono de "Bloqueo AE/AF" o candado. Luego mueve suavemente el celular hacia los lados: la taza seguirá nítida aunque cambies el encuadre.',
          consejo: 'Bloquear el enfoque te permite componer la toma libremente sin que la cámara vuelva a recalcular el foco.'
        }
      },
      {
        id: '1-3',
        number: 3,
        title: 'Formatos de imagen: ¿JPG o RAW para empezar?',
        duration: '11 min',
        objetivo: 'Conocer las ventajas del formato estándar JPG frente al archivo digital crudo RAW.',
        explicacion: 'El JPG es como un café ya preparado: viene con contraste, color y nitidez listos para compartir al instante en WhatsApp o Instagram. El RAW (o DNG en celular) es el grano crudo recién tostado: guarda toda la información de luces y sombras sin comprimir para que puedas rescatar detalles en edición. Para empezar el curso, JPG de alta calidad es perfecto.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
          altText: 'Taza de café humeante en una mesa de madera con tonos cálidos y texturas ricas.',
          descripcion: 'Comparación visual de fidelidad tonal entre compresión instantánea y captura de rango completo.',
          parametros: 'JPG Alta calidad (sRGB) · Fácil manejo sin saturar la memoria'
        },
        ejercicioPractico: {
          titulo: 'Verifica la calidad de guardado en tus ajustes',
          instrucciones: 'Entra a la configuración de tu cámara o app de foto. Asegúrate de tener seleccionada la máxima resolución disponible (12MP, 24MP o 48MP) y relación de aspecto nativa 4:3 o 3:2 (evita 16:9 recortado dentro de la app para no perder información útil).',
          consejo: 'El formato nativo 4:3 en celulares utiliza todo el sensor físico sin recortar bordes por software.'
        }
      },
      {
        id: '1-4',
        number: 4,
        title: 'Los modos de disparo: de Automático a Manual',
        duration: '12 min',
        objetivo: 'Perder el miedo al dial de modos (P, S/Tv, A/Av, M) o al botón "Pro" del celular.',
        explicacion: 'El modo Automático toma tres decisiones por ti: cuánta luz entra, qué tan rápido dispara y qué tan sensible es el sensor. Cuando pasas a modos semi-manuales o al modo Pro de tu celular, tú tomas el mando de la intención creativa: por ejemplo, congelar a tu perro en el parque o difuminar el fondo de un retrato campestre.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=900&q=80',
          altText: 'Detalle del dial superior de modos de una cámara fotográfica con letras P, S, A, M.',
          descripcion: 'El dial de modos: la puerta de entrada para controlar la creatividad fotográfica paso a paso.',
          parametros: 'Modo Apertura (A/Av) · Modo Tiempo (S/Tv) · Modo Pro móvil'
        },
        ejercicioPractico: {
          titulo: 'Descubre el modo Pro de tu celular',
          instrucciones: 'Desliza las opciones de tu cámara móvil hasta encontrar "Más" o "Pro / Profesional". Observa los controles deslizantes que aparecen: ISO, S (velocidad) y EV (compensación de exposición). Toca cada uno y mira en tiempo real cómo cambia la pantalla.',
          consejo: 'Si tu celular tiene iPhone, descarga apps gratuitas como Lightroom Mobile que activan la cámara Pro.'
        }
      }
    ]
  },
  {
    id: 'modulo-2',
    numero: 2,
    titulo: 'Triángulo de exposición',
    descripcionCorta: 'Aprende cómo interactúan la apertura, la velocidad y el ISO para fotos siempre nítidas y bien iluminadas.',
    duracion: '1 h 15 min',
    imagenUrl: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=900&q=80',
    altText: 'Luz dorada filtrándose entre las hojas de un árbol en un atardecer colombiano.',
    lecciones: [
      {
        id: '2-1',
        number: 1,
        title: 'Apertura del diafragma (el valor f/)',
        duration: '18 min',
        objetivo: 'Entender cómo el tamaño del orificio del lente controla la cantidad de luz y el fondo desenfocado (bokeh).',
        explicacion: 'Imagina la apertura como la pupila de un ojo: cuando hay poca luz, se abre para captar más; en un día soleado, se cierra. En fotografía se mide con la letra "f/". Aquí está el truco que confunde a todos: un número pequeño (como f/1.8 o f/2.8) significa un orificio gigante que deja el fondo borroso. Un número grande (como f/8 o f/16) deja todo enfocado desde tus pies hasta la montaña lejana.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
          altText: 'Retrato de mujer con fondo completamente desenfocado y luces circulares suaves.',
          descripcion: 'Apertura amplia f/1.8: el sujeto se separa nítidamente del entorno con un bokeh aterciopelado.',
          parametros: '50mm · f/1.8 · 1/250s · ISO 100'
        },
        ejercicioPractico: {
          titulo: 'El experimento de la fila de objetos',
          instrucciones: 'Alinea 3 objetos en diagonal sobre una mesa, separados unos 15 cm entre sí. Si tienes cámara, pon f/2.8; si usas celular, activa el modo Retrato o acércate a 10 cm del primer objeto. Enfoca solo el primero. Mira cómo el segundo y el tercero quedan suavemente desenfocados.',
          consejo: 'A menor distancia entre tu lente y el objeto, más pronunciado será el desenfoque del fondo.'
        }
      },
      {
        id: '2-2',
        number: 2,
        title: 'Velocidad de obturación: congelar vs. mover',
        duration: '18 min',
        objetivo: 'Congelar la acción rápida (deportes, mascotas) o capturar la seda de una cascada sin fotos movidas.',
        explicacion: 'El obturador es la cortina que se abre y se cierra frente al sensor. Si se abre una fracción milimétrica de segundo (como 1/1000 de segundo), congelas una gota de agua cayendo en el aire. Si la dejas abierta 1 segundo, todo lo que se mueva quedará como una estela de humo. Para fotos a pulso sin trípode, la regla de oro es nunca bajar de 1/60s para evitar trepidación.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=900&q=80',
          altText: 'Ciclista saltando en el aire con cada gota de sudor y rueda perfectamente congeladas.',
          descripcion: 'Alta velocidad 1/1600s: acción congelada en el punto culminante del movimiento.',
          parametros: '85mm · f/4.0 · 1/1600s · ISO 400'
        },
        ejercicioPractico: {
          titulo: 'Congela el agua del grifo',
          instrucciones: 'Abre el grifo de tu cocina a media fuerza. En modo Pro de tu celular o modo S/Tv de tu cámara, sube la velocidad a 1/1000s y dispara. Luego baja la velocidad a 1/15s (apoyando el celular sobre una taza para que no tiemble) y vuelve a disparar. Compara ambas fotos.',
          consejo: 'Para compensar la rapidez de 1/1000s necesitarás buena luz ambiental o subir el ISO.'
        }
      },
      {
        id: '2-3',
        number: 3,
        title: 'ISO: sensibilidad a la luz y cómo evitar el grano',
        duration: '19 min',
        objetivo: 'Saber cuándo subir el ISO de noche y cuándo mantenerlo bajo para fotos limpias y cristalinas.',
        explicacion: 'El ISO es la ganancia electrónica del sensor. Piensa en el ISO como el volumen de un altavoz: si la música suena muy bajita (poca luz) y subes el volumen al máximo, escucharás un zumbido de fondo ("ruido" o grano digital). Por eso, de día en la calle siempre usamos ISO 100 o 200 (máxima calidad). De noche en un restaurante podemos subir a ISO 1600 o 3200 asumiendo un poco de textura.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80',
          altText: 'Fotografía nocturna en un café iluminado por velas con textura cálida y controlada.',
          descripcion: 'ISO 1600 en ambiente íntimo: balance óptimo entre exposición correcta y grano agradable.',
          parametros: '35mm · f/2.0 · 1/80s · ISO 1600'
        },
        ejercicioPractico: {
          titulo: 'Comprobación de ruido en tu propio sensor',
          instrucciones: 'En una habitación con luz media, toma una foto con ISO 100 fijado manualmente (la foto saldrá oscura si no compensas). Luego toma otra con ISO 3200 o 6400. Haz zoom al 100% en una zona oscura de ambas fotos y observa los granos de color o arena.',
          consejo: 'Es mil veces mejor una foto con algo de grano pero nítida, que una foto borrosa por disparar muy lento.'
        }
      },
      {
        id: '2-4',
        number: 4,
        title: 'El equilibrio del triángulo en la vida real',
        duration: '20 min',
        objetivo: 'Dominar la báscula de la exposición: si modificas un parámetro, compensas con otro.',
        explicacion: 'Imaginar el triángulo como una balanza de tres lados: si cierras la apertura para que salga todo enfocado, entra menos luz; por lo tanto, o reduces la velocidad (disparas más lento) o subes el ISO para nivelar. Conocer este intercambio te dará total control creativo sobre cualquier escena, desde un paseo en Monserrate hasta una cena de cumpleaños.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=900&q=80',
          altText: 'Paisaje montañoso de amanecer con rango tonal equilibrado entre el cielo y el valle.',
          descripcion: 'Exposición armónica: cielo con nubes detalladas y primer plano verde sin sombras empastadas.',
          parametros: '24mm · f/8.0 · 1/120s · ISO 100'
        },
        ejercicioPractico: {
          titulo: 'Compensación de exposición (+/- EV)',
          instrucciones: 'Apunta a una ventana iluminada. La cámara tenderá a oscurecer toda la habitación. Toca la pantalla y desliza el solecito (o dial EV) hacia arriba (+1) para rescatar el interior, o hacia abajo (-1) para ver el cielo azul por la ventana.',
          consejo: 'El dial EV es la herramienta más rápida para corregir fotos oscuras o quemadas al instante.'
        }
      }
    ]
  },
  {
    id: 'modulo-3',
    numero: 3,
    titulo: 'Composición',
    descripcionCorta: 'Organiza los elementos visuales con la regla de tercios, líneas guía, marcos naturales y simetría.',
    duracion: '1 hora',
    imagenUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    altText: 'Composición paisajística con lago sereno y montañas reflejadas en simetría perfecta.',
    lecciones: [
      {
        id: '3-1',
        number: 1,
        title: 'La regla de los tercios: adiós a centrarlo todo',
        duration: '15 min',
        objetivo: 'Ubicar el centro de interés en los cuatro puntos de fuerza para crear dinamismo y balance.',
        explicacion: 'Cuando una persona empieza en la fotografía, suele poner todo exactamente en el medio de la imagen. La regla de los tercios divide la pantalla en 9 rectángulos iguales con dos líneas horizontales y dos verticales. Al ubicar la mirada de una persona, un árbol o una taza en una de las intersecciones, la composición respira y adquiere una energía visual instantánea.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
          altText: 'Retrato de mujer ubicado en el tercio derecho con espacio negativo hacia la izquierda.',
          descripcion: 'Ubicación en el tercio derecho: la mirada recorre la escena de forma natural y atractiva.',
          parametros: 'Intersección superior derecha · Mirada en dirección al espacio abierto'
        },
        ejercicioPractico: {
          titulo: 'Retrato descentrado con intención',
          instrucciones: 'Pídele a un amigo o toma una planta de tu casa. Ubícala en la línea vertical derecha de la cuadrícula de tu celular, dejando el lado izquierdo libre. Compara esta toma con una foto donde el objeto esté exactamente en el centro.',
          consejo: 'Deja siempre más espacio libre hacia el lado hacia donde mira la persona (espacio de mirada).'
        }
      },
      {
        id: '3-2',
        number: 2,
        title: 'Líneas guía: cómo dirigir la mirada del espectador',
        duration: '15 min',
        objetivo: 'Usar caminos, barandas, andenes o sombras para conducir los ojos hacia el protagonista.',
        explicacion: 'Nuestros ojos siguen inconscientemente las líneas que encuentran en una imagen. Una carretera que se pierde en el horizonte, la baranda de un puente peatonal o la sombra proyectada por un edificio al atardecer funcionan como flechas invisibles que le dicen al espectador: "mira aquí".',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=900&q=80',
          altText: 'Calle urbana con líneas de adoquines y edificios convergentes hacia un transeúnte.',
          descripcion: 'Líneas diagonales convergentes que guían directamente la atención al sujeto en el fondo.',
          parametros: 'Perspectiva baja · Punto de fuga central · Contraste de silueta'
        },
        ejercicioPractico: {
          titulo: 'Encuentra las líneas de tu cuadra',
          instrucciones: 'Sal a la calle o a un pasillo de tu casa. Agáchate a la altura de la cintura o de la rodilla y encuadra de modo que el andén, el pasamanos o las baldosas nazcan en las esquinas inferiores de tu pantalla y converjan al fondo.',
          consejo: 'Bajar el punto de vista acentúa la sensación de profundidad de las líneas en cualquier lente.'
        }
      },
      {
        id: '3-3',
        number: 3,
        title: 'Marcos naturales y capas de profundidad',
        duration: '15 min',
        objetivo: 'Crear sensación tridimensional usando ramas, puertas, ventanas o primer plano desenfocado.',
        explicacion: 'Una fotografía es bidimensional (plana), pero el mundo real tiene tres dimensiones. Para darle profundidad a tus tomas, divide la escena en tres capas: primer plano (cerca de la cámara), plano medio (el sujeto) y fondo. Enmarcar a tu sujeto entre las hojas de un árbol o el vano de una puerta crea una atmósfera envolvente.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
          altText: 'Ventana colonial de madera enmarcando una vista de tejados y montañas andinas.',
          descripcion: 'Marco natural arquitectónico que añade contexto y textura histórica a la toma.',
          parametros: 'Encuadre dentro de encuadre · 3 capas de profundidad visual'
        },
        ejercicioPractico: {
          titulo: 'El truco de disparar a través de objetos',
          instrucciones: 'Párate detrás de una planta de interior o de una cortina. Acerca el lente casi tocando una hoja para que salga muy desenfocada en un borde de la pantalla, mientras tu sujeto al fondo está nítido. Lograrás un estilo profesional inmediato.',
          consejo: 'Asegúrate de que el marco no tape los rasgos clave de la persona u objeto principal.'
        }
      },
      {
        id: '3-4',
        number: 4,
        title: 'Espacio negativo y minimalismo',
        duration: '15 min',
        objetivo: 'Aprender que lo que dejas por fuera del encuadre es tan poderoso como lo que dejas adentro.',
        explicacion: 'El espacio negativo es la zona vacía alrededor de tu protagonista: un cielo despejado, una pared de color liso o un piso de cemento pulido. Cuando aíslas un elemento pequeño en medio de un gran espacio limpio, transmites calma, elegancia y concentración absoluta.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
          altText: 'Silueta solitaria caminando frente a un muro texturizado de arquitectura limpia.',
          descripcion: 'Espacio negativo amplio: simplicidad visual que potencia la fuerza del personaje.',
          parametros: 'Composición minimalista · Proporción 80% aire / 20% sujeto'
        },
        ejercicioPractico: {
          titulo: 'Sujeto solitario contra el cielo o pared',
          instrucciones: 'Busca una pared lisa de color uniforme o el cielo azul. Coloca a una persona o un objeto en la esquina inferior izquierda ocupando menos del 15% del total de la foto. Deja el resto completamente despejado.',
          consejo: 'Menos elementos en el cuadro significan menos distracciones para quien mira tu foto.'
        }
      }
    ]
  },
  {
    id: 'modulo-4',
    numero: 4,
    titulo: 'Luz natural',
    descripcionCorta: 'Aprovecha la hora dorada, la sombra abierta y la luz suave de ventana en cualquier espacio.',
    duracion: '50 min',
    imagenUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80',
    altText: 'Luz del amanecer tiñendo de oro las copas de los árboles y la niebla matutina.',
    lecciones: [
      {
        id: '4-1',
        number: 1,
        title: 'Calidad de la luz: luz dura vs. luz suave',
        duration: '12 min',
        objetivo: 'Identificar la diferencia entre sombras marcadas e incómodas y una iluminación aterciopelada y favorecedora.',
        explicacion: 'La luz dura proviene de una fuente pequeña y directa (como el sol del mediodía sin nubes): genera sombras negras, ojos hundidos y resalta imperfecciones en la piel. La luz suave proviene de una fuente grande (un cielo nublado, una sábana blanca o una ventana amplia): las sombras son tenues y los tonos de piel lucen frescos y naturales.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
          altText: 'Retrato con luz suave difusa lateral de una ventana grande sin sombras duras.',
          descripcion: 'Luz suave de ventana: transición sutil y delicada entre zonas iluminadas y sombras.',
          parametros: 'Luz natural lateral · Ventana norte · Sin flash directo'
        },
        ejercicioPractico: {
          titulo: 'Compara tu mano al sol y en sombra abierta',
          instrucciones: 'Sal al mediodía. Pon tu mano directamente bajo el sol y fíjate en la sombra cortante en el suelo. Ahora da dos pasos hacia la sombra de un alero o un árbol: mira cómo la luz sobre tu mano se vuelve suave y homogénea.',
          consejo: 'En días muy soleados en Colombia, busca la "sombra abierta" (estar bajo techo pero mirando hacia afuera).'
        }
      },
      {
        id: '4-2',
        number: 2,
        title: 'La hora dorada y la hora azul en Colombia',
        duration: '13 min',
        objetivo: 'Planificar sesiones de fotos durante los 45 minutos mágicos del amanecer y el atardecer.',
        explicacion: 'Cerca del ecuador en Colombia el atardecer ocurre alrededor de las 5:40 a 6:20 p.m. Cuando el sol está bajo en el horizonte, sus rayos atraviesan mayor atmósfera, transformando la luz en un dorado cálido que baña todo de romanticismo. Justo después de que el sol se oculta, entra la "hora azul": el cielo adquiere un azul zafiro perfecto para paisajes y luces de ciudad.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=900&q=80',
          altText: 'Paisaje iluminado por la hora dorada con destellos cálidos y atmósfera serena.',
          descripcion: 'Hora dorada: luz rasante que acaricia los contornos y embellece cualquier textura.',
          parametros: '5:45 p.m. · Luz rasante cálida · Balance de blancos nublado'
        },
        ejercicioPractico: {
          titulo: 'Sesión exprés de 15 minutos en atardecer',
          instrucciones: 'Programa tu alarma a las 5:30 p.m. Sal a una ventana o terraza con vista al oeste. Ubica a tu sujeto de perfil para que la luz del sol le dé en la mejilla, o ponlo de espaldas al sol para lograr un contorno iluminado en el cabello (luz de recorte).',
          consejo: 'Baja un toque la exposición en tu celular para resaltar los tonos naranjas del cielo sin quemarlos.'
        }
      },
      {
        id: '4-3',
        number: 3,
        title: 'Dirección de la luz: frontal, lateral y contraluz',
        duration: '12 min',
        objetivo: 'Controlar el volumen y el dramatismo eligiendo desde qué ángulo incide la luz sobre el motivo.',
        explicacion: 'Luz frontal: la fuente está detrás del fotógrafo; ilumina parejo pero aplana volúmenes. Luz lateral: viene de un costado; resalta relieves, arrugas de la madera, vapor del café y facciones del rostro. Contraluz: la fuente está detrás del sujeto; crea siluetas misteriosas o un halo brillante alrededor de su figura.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
          altText: 'Hombre con luz lateral que resalta la textura de su chaqueta y la fuerza de su perfil.',
          descripcion: 'Luz lateral a 45 grados: aporta tridimensionalidad y carácter sin perder detalle en las sombras.',
          parametros: 'Ventana lateral · Reflector blanco casero opuesto'
        },
        ejercicioPractico: {
          titulo: 'El giro de los 360 grados',
          instrucciones: 'Coloca una fruta o un pocillo en una mesa cerca de una ventana. Muévete tú en círculo alrededor de la mesa tomando una foto cada 45 grados. Observa cómo el mismo objeto parece cambiar de forma y textura según la dirección de la luz.',
          consejo: 'La luz lateral a 45 grados es el ángulo más universal y favorecedor para retratos y gastronomía.'
        }
      },
      {
        id: '4-4',
        number: 4,
        title: 'Modificadores caseros: rebotar y difuminar sin gastar',
        duration: '13 min',
        objetivo: 'Usar una cartulina blanca, papel mantequilla o una cortina para suavizar la luz como un profesional.',
        explicacion: 'No necesitas sombrillas ni reflectores de estudio costosos. Una cartulina blanca escolar de $1.000 COP puesta al lado contrario de una ventana actúa como un reflector que rellena sombras oscuras. Una cortina traslúcida convierte el sol más feroz en un difusor gigante de película.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80',
          altText: 'Plato de frutas y postre iluminado con luz tamizada y sombras delicadas.',
          descripcion: 'Fotografía gastronómica lograda junto a una ventana con cortina blanca delgada.',
          parametros: 'Difusión de cortina · Rebote con cartulina blanca opalina'
        },
        ejercicioPractico: {
          titulo: 'El truco de la cartulina en tu mesa',
          instrucciones: 'Prepara tu desayuno o almuerzo cerca de una ventana. Pon una cartulina blanca o una libreta de hojas blancas al lado opuesto del plato donde caen las sombras. Acércala y aléjala con la mano: verás magia cuando las sombras se aclaren.',
          consejo: 'Nunca uses cartulinas de colores para rebotar luz sobre comida o rostros, o teñirás la foto de ese color.'
        }
      }
    ]
  },
  {
    id: 'modulo-5',
    numero: 5,
    titulo: 'Fotografía con celular',
    descripcionCorta: 'Ajustes manuales, bloqueo de enfoque, limpieza de lente y trucos móviles indispensables.',
    duracion: '1 hora',
    imagenUrl: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=900&q=80',
    altText: 'Persona encuadrando un paisaje de arquitectura con la pantalla de su smartphone.',
    lecciones: [
      {
        id: '5-1',
        number: 1,
        title: 'El secreto del zoom: por qué nunca usar zoom digital pellizcando',
        duration: '14 min',
        objetivo: 'Aprender a usar los lentes ópticos reales (0.5x, 1x, 3x) y evitar la pixelación del zoom recortado.',
        explicacion: 'Cuando pellizcas la pantalla de tu celular para acercar un objeto a 2.4x o 5x digital, el celular no está acercando nada: solo está recortando la foto y estirando los píxeles, dejando una imagen borrosa y con ruido. Si tu teléfono tiene botones dedicados (como 0.5x, 1x o 3x), úsalos porque son cámaras físicas distintas; si necesitas estar más cerca, ¡acércate con tus propios pies!',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          altText: 'Smartphone moderno mostrando sus lentes ópticos traseros triples en detalle.',
          descripcion: 'Cámaras con lentes dedicados: ultra gran angular, angular principal y teleobjetivo óptico.',
          parametros: 'Lente principal nativo 1x (24mm equivalente) · Nitidez óptica real'
        },
        ejercicioPractico: {
          titulo: 'Comparación óptica vs. digital',
          instrucciones: 'Elige un objeto a 3 metros. Toma una foto con tu lente 1x sin tocar nada. Ahora haz zoom pellizcando la pantalla hasta 4x y toma la segunda. Por último, camina hasta quedar a 1 metro del objeto y toma la tercera con 1x. Compara la nitidez.',
          consejo: 'Tus pies son el mejor zoom que existe: te obligan a explorar ángulos frescos sin perder calidad.'
        }
      },
      {
        id: '5-2',
        number: 2,
        title: 'Modo Retrato: cuándo funciona y cuándo desactivarlo',
        duration: '15 min',
        objetivo: 'Identificar qué escenarios se benefician del desenfoque artificial y cómo evitar errores en el pelo o copas.',
        explicacion: 'El modo Retrato de los celulares usa inteligencia artificial para separar el sujeto del fondo y aplicar un desenfoque digital. Es espectacular con personas con cabello liso y buena luz, pero suele fallar dejando huecos extraños alrededor de gafas, cabello con frizz o vasos de vidrio transparentes. Si notas artefactos raros, es mejor usar el lente normal acercándote físicamente.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
          altText: 'Retrato de mujer joven sonriente con desenfoque de fondo limpio y natural.',
          descripcion: 'Retrato con separación limpia de bordes aprovechando contraste de color con el fondo.',
          parametros: 'Modo retrato móvil · Distancia 1.5 metros · Iluminación frontal suave'
        },
        ejercicioPractico: {
          titulo: 'Prueba de bordes con una taza o planta',
          instrucciones: 'Toma una foto en modo Retrato a una taza con asa. Revisa si el orificio del asa quedó desenfocado como el fondo o si la cámara se equivocó y lo dejó enfocado. Aprender a ver estos detalles te dirá cuándo confiar en el modo Retrato.',
          consejo: 'Aumentar la distancia entre el sujeto y la pared de fondo hace que el desenfoque luzca más realista.'
        }
      },
      {
        id: '5-3',
        number: 3,
        title: 'La perspectiva al ras de piso y ángulos atípicos',
        duration: '15 min',
        objetivo: 'Superar el aburrimiento visual de tomar todas las fotos a la altura de los ojos humanos.',
        explicacion: 'El 99% de las fotos con celular se toman sosteniéndolo a la altura del pecho o los ojos: esa es exactamente la perspectiva cotidiana que todos ven a diario. Si inviertes tu celular (poniendo la cámara abajo pegada al piso) o lo elevas por encima de tu cabeza mirando hacia abajo, transformas un andén común en una toma cinematográfica.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=900&q=80',
          altText: 'Perspectiva baja al nivel del suelo reflejando edificios en un charco de lluvia tras la tormenta.',
          descripcion: 'Cámara invertida a 5 cm del charco: reflejo arquitectónico con dramatismo visual.',
          parametros: 'Punto de vista rasante · Teléfono invertido · Enfoque al reflejo'
        },
        ejercicioPractico: {
          titulo: 'El truco del teléfono invertido',
          instrucciones: 'Gira tu celular de cabeza, de modo que los lentes queden abajo cerca de tu palma. Apóyalo casi tocando el piso o una mesa y toma una foto de tus zapatos, de una mascota o de una calle. La escala parecerá gigantesca.',
          consejo: 'Puedes usar los botones de volumen del teléfono como disparador cuando lo sostengas abajo.'
        }
      },
      {
        id: '5-4',
        number: 4,
        title: 'Modo nocturno: cómo obtener fotos limpias en la noche',
        duration: '16 min',
        objetivo: 'Aprovechar la ráfaga computacional de tu celular para capturar calles iluminadas sin moverte.',
        explicacion: 'El modo nocturno de tu smartphone no hace milagros mágicos: en realidad toma decenas de fotos rápidas en 2 a 4 segundos y las combina para promediar la luz y borrar el ruido. El secreto para que no salgan borrosas es mantener el celular absolutamente inmóvil durante esos segundos, apoyando tus codos en una baranda o pared.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=900&q=80',
          altText: 'Ciudad nocturna con letreros de neón vibrantes y cielo azul noche nítido sin ruido.',
          descripcion: 'Modo nocturno computacional con apoyo firme: colores intensos y luces sin quemar.',
          parametros: 'Exposición nocturna 3s · Apoyo en baranda · Compensación -0.3 EV'
        },
        ejercicioPractico: {
          titulo: 'Captura nocturna con punto de apoyo',
          instrucciones: 'Esta noche asómate a tu balcón o sal a la puerta. Activa el modo Noche. Antes de disparar, apoya firmemente ambos codos contra una pared o coloca el celular sobre una superficie fija. Presiona disparar y aguanta la respiración hasta que termine.',
          consejo: 'Usa el temporizador de 2 segundos para que tu dedo no mueva el celular al tocar la pantalla.'
        }
      }
    ]
  },
  {
    id: 'modulo-6',
    numero: 6,
    titulo: 'Edición básica',
    descripcionCorta: 'Mejora contraste, sombras y color en Lightroom Mobile o Snapseed en 3 minutos sin saturar.',
    duracion: '45 min',
    imagenUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80',
    altText: 'Espacio de trabajo minimalista con pantalla y tableta editando fotografías con tonos naturales.',
    lecciones: [
      {
        id: '6-1',
        number: 1,
        title: 'Enderezar el horizonte y recortar con propósito',
        duration: '10 min',
        objetivo: 'Corregir horizontes inclinados y eliminar distracciones en los bordes antes de tocar los colores.',
        explicacion: 'Un horizonte inclinado en una playa o un edificio torcido transmite descuido inconsciente a quien mira la foto. El primer paso de toda edición profesional es abrir la herramienta de recorte, rotar la imagen hasta que el horizonte esté 100% nivelado y recortar cualquier poste de luz o basura que asome en una esquina.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
          altText: 'Playa con horizonte del mar perfectamente recto y nivelado con el borde del marco.',
          descripcion: 'Horizonte costero estrictamente horizontal: transmite serenidad y equilibrio estético.',
          parametros: 'Rotación 0.0° · Relación 4:3 · Regla de tercios en el agua'
        },
        ejercicioPractico: {
          titulo: 'Nivela una foto antigua de tu galería',
          instrucciones: 'Abre la foto más reciente de un paseo o paisaje en tu galería. Toca "Editar" y selecciona la herramienta de recorte/rotación. Activa la cuadrícula y alinea una línea horizontal con el mar, la acera o la mesa.',
          consejo: 'Casi todas las apps móviles tienen un botón de varita mágica que endereza el horizonte con un solo toque.'
        }
      },
      {
        id: '6-2',
        number: 2,
        title: 'El cuarteto de la luz: Exposición, Contraste, Altas Luces y Sombras',
        duration: '12 min',
        objetivo: 'Recuperar cielos blancos quemados y revelar texturas ocultas en las zonas oscuras.',
        explicacion: 'En apps gratuitas como Snapseed o Lightroom Mobile, la fórmula clásica para darle vida a una foto sin exagerar es: bajar "Altas Luces" (Highlights) para rescatar nubes y detalles brillantes; subir ligeramente "Sombras" (Shadows) para que las caras u objetos oscuros respiren; y ajustar suavemente el "Contraste" para darle pegada.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
          altText: 'Paisaje montañoso con nubes ricas en textura y valle verde iluminado sin zonas oscuras.',
          descripcion: 'Ajuste armónico: cielo con volumen y verdes del valle vibrantes sin perder naturalidad.',
          parametros: 'Altas luces -35 · Sombras +25 · Blancos +10 · Negros -8'
        },
        ejercicioPractico: {
          titulo: 'El rescate de una foto a contraluz',
          instrucciones: 'Abre una foto donde el cielo haya quedado blanco y la persona un poco oscura. Entra a "Luz" en Lightroom Mobile: baja las altas luces al -40 y sube las sombras a +30. Mira cómo aparece información que parecía perdida.',
          consejo: 'No subas las sombras a +100 o la foto parecerá un dibujo plano y gris sin profundidad.'
        }
      },
      {
        id: '6-3',
        number: 3,
        title: 'Color natural: Temperatura, Tinte y la diferencia entre Saturación e Intensidad',
        duration: '12 min',
        objetivo: 'Corregir tonos amarillentos o azulados y dar calidez sin dejar la piel de las personas color naranja zanahoria.',
        explicacion: 'La temperatura te permite enfriar (azul) o calentar (ámbar) una foto. Si tomaste una foto bajo un bombillo fluorescente y se ve verde o pálida, mueve la temperatura hacia tonos cálidos. Y ojo con este secreto: la "Saturación" sube todos los colores por igual (incluyendo la piel); la "Intensidad" (o Vibrance) solo potencia los colores apagados protegiendo los tonos de piel.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80',
          altText: 'Retrato con tonos de piel naturales y dorados suaves de fondo sin saturación excesiva.',
          descripcion: 'Tratamiento de color editorial: piel natural y preservación de gradaciones tonales cálidas.',
          parametros: 'Temperatura +3 · Tinte +1 · Intensidad +18 · Saturación 0'
        },
        ejercicioPractico: {
          titulo: 'Intensidad vs. Saturación en un retrato',
          instrucciones: 'Abre una foto con personas. Sube la Saturación a +40: verás cómo las caras parecen quemadas por el sol. Ahora ponla en cero y sube la Intensidad (Vibrance) a +40: nota cómo la ropa y el fondo ganan vida pero las mejillas se mantienen naturales.',
          consejo: 'Para fotos de viajes y retratos, prefiere siempre Intensidad antes que Saturación.'
        }
      },
      {
        id: '6-4',
        number: 4,
        title: 'Exportar para redes sociales sin que Instagram te baje la calidad',
        duration: '11 min',
        objetivo: 'Conocer las dimensiones exactas (4:5 vertical) y nitidez para que tus fotos se vean cristalinas al subir.',
        explicacion: '¿Te ha pasado que tomas una foto divina y al subirla a Instagram se ve borrosa? Pasa porque la red social comprime agresivamente los archivos muy pesados. Si tú mismo exportas en relación de aspecto 4:5 vertical (1080 x 1350 píxeles) y aplicas un toque suave de máscara de enfoque, la app la subirá directo sin recortarla ni arruinarla.',
        ejemploVisual: {
          imagenUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
          altText: 'Composición abstracta con nitidez cristalina en líneas geométricas y texturas suaves.',
          descripcion: 'Resolución nativa optimizada 1080 x 1350 px: máxima ocupación de pantalla en móviles.',
          parametros: 'Proporción 4:5 vertical · Espacio de color sRGB · 100% nítida'
        },
        ejercicioPractico: {
          titulo: 'Prepara tu primera foto en 4:5 lista para publicar',
          instrucciones: 'Toma la mejor foto que hayas capturado durante este curso. Recórtala en proporción vertical 4:5 (la medida que más espacio ocupa en el feed). Aplica un ajuste de nitidez de +15 en tu editor y expórtala en formato JPG con calidad 85-90%.',
          consejo: 'El formato vertical 4:5 captura un 30% más de atención visual en el feed que una foto cuadrada.'
        }
      }
    ]
  }
];

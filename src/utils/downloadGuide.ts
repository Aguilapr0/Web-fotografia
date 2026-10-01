/**
 * Generates and triggers the download/print of the "Guía Rápida de Campo - Enfoque"
 */
export function downloadGuidePdf() {
  const guideContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Guía Rápida de Campo - Enfoque</title>
  <style>
    @page { margin: 15mm; size: A4 portrait; }
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      color: #1F1F1F;
      background: #FFFFFF;
      line-height: 1.5;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .header {
      border-bottom: 2px solid #E07A1F;
      padding-bottom: 12px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    h1 {
      font-size: 24px;
      margin: 0;
      color: #1F1F1F;
      font-family: Georgia, serif;
    }
    .tagline {
      font-size: 13px;
      color: #E07A1F;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 20px;
    }
    .card {
      border: 1px solid #DCD7CF;
      border-radius: 6px;
      padding: 12px;
      background: #FAF8F5;
    }
    .card h2 {
      font-size: 15px;
      margin-top: 0;
      margin-bottom: 8px;
      color: #1F1F1F;
      border-bottom: 1px solid #EAE5DD;
      padding-bottom: 4px;
    }
    ul {
      margin: 0;
      padding-left: 18px;
      font-size: 12.5px;
    }
    li {
      margin-bottom: 6px;
    }
    .rule-box {
      background: #FFF7EE;
      border-left: 4px solid #E07A1F;
      padding: 10px;
      font-size: 12.5px;
      margin-bottom: 16px;
    }
    .footer {
      border-top: 1px solid #DCD7CF;
      padding-top: 10px;
      font-size: 11px;
      color: #666;
      text-align: center;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="tagline">Enfoque · Curso de Fotografía para Principiantes</div>
      <h1>Hoja de Referencia Rápida en Terreno</h1>
    </div>
    <div style="font-size: 11px; text-align: right; color: #666;">
      Versión Colombia 2026<br>enfoquecurso.co
    </div>
  </div>

  <div class="rule-box">
    <strong>Regla de oro:</strong> Antes de disparar, limpia el lente de tu celular con un paño suave y busca de dónde viene la luz principal (ventana, sol, lámpara). ¡No dispares a ciegas!
  </div>

  <div class="grid">
    <div class="card">
      <h2>1. El Triángulo de Exposición</h2>
      <ul>
        <li><strong>Apertura (f/):</strong> f/1.8 a f/2.8 = fondo borroso (retratos, comida). f/8 a f/11 = todo nítido (paisajes).</li>
        <li><strong>Velocidad:</strong> 1/1000s = congela deportes/niños. 1/60s = límite mínimo para disparar a pulso sin trípode.</li>
        <li><strong>ISO:</strong> ISO 100-200 en exteriores soleados (máxima nitidez). ISO 800-1600 en interiores o noche.</li>
      </ul>
    </div>

    <div class="card">
      <h2>2. Trucos con tu Celular</h2>
      <ul>
        <li><strong>Bloqueo AE/AF:</strong> Mantén presionado 2 segundos sobre tu sujeto para bloquear el enfoque y la luz.</li>
        <li><strong>Desliza el sol:</strong> Toca la pantalla y baja un toque la exposición (-0.3 a -0.7 EV) para evitar cielos quemados.</li>
        <li><strong>Nunca uses zoom digital:</strong> Usa 0.5x, 1x o 3x óptico. Si necesitas acercarte, camina con tus pies.</li>
        <li><strong>Invierte el teléfono:</strong> Pon la cámara al ras del piso para fotos con perspectiva cinematográfica.</li>
      </ul>
    </div>

    <div class="card">
      <h2>3. Composición en 4 Pasos</h2>
      <ul>
        <li><strong>Activa la cuadrícula 3x3:</strong> Coloca lo importante en una de las cuatro intersecciones, no siempre al centro.</li>
        <li><strong>Nivela el horizonte:</strong> En playas y calles, mantén la línea recta para dar armonía y serenidad.</li>
        <li><strong>Líneas guía:</strong> Usa andenes, caminos o barandas que nazcan en las esquinas y dirijan al sujeto.</li>
        <li><strong>Espacio de mirada:</strong> Si la persona mira hacia la izquierda, deja más espacio libre a su izquierda.</li>
      </ul>
    </div>

    <div class="card">
      <h2>4. La Luz Natural en Colombia</h2>
      <ul>
        <li><strong>Hora Dorada:</strong> Entre 5:30 p.m. y 6:15 p.m. la luz es suave, cálida y favorece los tonos de piel.</li>
        <li><strong>Mediodía soleado:</strong> No tomes retratos directos bajo el sol. Busca "sombra abierta" (bajo un techo o árbol).</li>
        <li><strong>Ventanas en casa:</strong> Ubica a tu modelo a 45 grados de una ventana grande con cortina blanca delgada.</li>
        <li><strong>Rebote casero:</strong> Una cartulina escolar blanca al lado opuesto aclara las sombras sin gastar un peso.</li>
      </ul>
    </div>
  </div>

  <div class="card" style="margin-bottom: 20px;">
    <h2>5. Mini-Receta de Edición en Móvil (Snapseed o Lightroom)</h2>
    <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
      <li>1. Recorta y endereza el horizonte.</li>
      <li>2. Altas Luces: Baja entre -20 y -40 (recupera cielos).</li>
      <li>3. Sombras: Sube entre +15 y +30 (da luz al sujeto).</li>
      <li>4. Intensidad (Vibrance): +15 (evita saturar la piel).</li>
    </ul>
  </div>

  <div class="footer">
    Enfoque · Material pedagógico gratuito · contacto@enfoquecurso.co · Diseñado para fotógrafos de Colombia
  </div>
</body>
</html>
  `;

  // Create Blob and trigger download or open print window
  const blob = new Blob([guideContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  const printWindow = window.open(url, '_blank');
  if (printWindow) {
    printWindow.onload = () => {
      // Allow user to print to PDF
      setTimeout(() => {
        printWindow.print();
      }, 300);
    };
  } else {
    // If popup blocked, create anchor download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Guia_Rapida_Enfoque_Fotografia.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

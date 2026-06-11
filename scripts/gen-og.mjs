// Genera public/og-default.png (1200×630) a partir de un SVG.
// Uso: node scripts/gen-og.mjs   (requiere `npm i -D sharp`)
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/og-default.png');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4488ee"/>
      <stop offset="1" stop-color="#2f6fd0"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="320" fill="url(#glow)"/>
  <circle cx="1050" cy="120" r="260" fill="#ffffff" opacity="0.06"/>
  <circle cx="120" cy="560" r="200" fill="#ffffff" opacity="0.05"/>

  <!-- Marca -->
  <g transform="translate(90, 86)">
    <rect width="64" height="64" rx="16" fill="#ffffff"/>
    <text x="32" y="48" font-family="Arial, sans-serif" font-size="44" font-weight="800"
          fill="#2f6fd0" text-anchor="middle">Z</text>
    <text x="84" y="46" font-family="Arial, sans-serif" font-size="40" font-weight="800"
          fill="#ffffff">Zentivy</text>
  </g>

  <!-- Titular -->
  <text x="90" y="300" font-family="Arial, sans-serif" font-size="68" font-weight="800" fill="#ffffff">Inventario y facturación</text>
  <text x="90" y="380" font-family="Arial, sans-serif" font-size="68" font-weight="800" fill="#ffffff">para tu negocio</text>

  <!-- Subtítulo -->
  <text x="92" y="448" font-family="Arial, sans-serif" font-size="32" font-weight="400" fill="#e8f0fe">Controla tu stock, factura en segundos y atiende</text>
  <text x="92" y="490" font-family="Arial, sans-serif" font-size="32" font-weight="400" fill="#e8f0fe">por WhatsApp con un agente de IA.</text>

  <!-- Pie -->
  <rect x="90" y="540" width="320" height="2" fill="#ffffff" opacity="0.25"/>
  <text x="90" y="582" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#ffffff">Software para PYMES en Colombia · zentivy.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('OK →', out);

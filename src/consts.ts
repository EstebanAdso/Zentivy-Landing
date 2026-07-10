// Constantes de marca y SEO. Fuente única para títulos, descripción y enlaces.
export const SITE = {
  url: 'https://zentivy.com',
  name: 'Zentivy',
  // <title> por defecto (≤ 60 chars idealmente). Las páginas pueden sobrescribir.
  defaultTitle: 'Zentivy — Software de inventario y facturación para PYMES Colombia',
  defaultDescription:
    'Software de inventario, facturación y ventas en la nube para tiendas y negocios en Colombia. Controla tu stock con costeo FIFO, factura en segundos y atiende clientes por WhatsApp con un agente de IA. Empieza gratis.',
  locale: 'es_CO',
  lang: 'es',
  themeColor: '#4488ee',
  // App (producto detrás de login). Subdominio recomendado.
  appUrl: 'https://app.zentivy.com',
  whatsapp: 'https://wa.me/573242264795',
  email: 'hola@zentivy.com',
  ciudad: 'Pasto',
  pais: 'Colombia',
};

// Palabras clave objetivo (Colombia). No se inyectan como meta keywords
// (Google las ignora) sino que guían el copy de la página.
export const KEYWORDS = [
  'software de inventario Colombia',
  'programa de facturación para PYMES',
  'sistema POS para tiendas',
  'control de inventario en la nube',
  'programa de cuentas de cobro para negocios',
  'software para mini market',
  'agente de WhatsApp con IA para ventas',
];

export const NAV = [
  { href: '/', label: 'Inicio' },
  { href: '/funciones', label: 'Funciones' },
  { href: '/agente-ia', label: 'Agente IA' },
  { href: '/precios', label: 'Precios' },
];

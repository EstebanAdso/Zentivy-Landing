# Zentivy — Landing

Landing page de marketing de Zentivy. **Astro + Tailwind v4**, estática (SSG),
optimizada para SEO en Colombia. Separada de la app React a propósito: la app es
producto privado (login, SEO irrelevante); esto es la cara pública que rankea en
Google.

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor local (http://localhost:4321)
npm run build      # genera /dist estático
npm run preview    # sirve el build
```

## SEO incluido

- `<title>` + `description` por página, canonical absoluto, `theme-color`.
- Open Graph + Twitter Card.
- JSON-LD: `Organization`, `SoftwareApplication` y `FAQPage` (rich results).
- `sitemap-index.xml` automático (`@astrojs/sitemap`) + `robots.txt`.
- HTML semántico (h1 único, h2 por sección), `lang="es"`, geo CO.
- Cero JS por defecto → carga rápida (factor de ranking).

### Pendiente para SEO 10/10

1. **Imagen OG**: crear `public/og-default.png` (1200×630) con el logo + claim.
   Sin ella, los enlaces compartidos no muestran preview.
2. **Google Search Console**: verificar `zentivy.com` y enviar el sitemap.
3. **Contenido**: un blog (`/blog`) con artículos por keyword acelera el ranking
   nacional ("cómo controlar inventario", "facturar en Colombia", etc.).

## Configuración

- Dominio canónico y textos: `src/consts.ts`.
- Dominio del sitio (sitemap/canonical): `astro.config.mjs` → `site`.
- La app (producto) apunta a `app.zentivy.com` (ajusta en `consts.ts`).

## Deploy (gratis)

**Cloudflare Pages** o **Vercel**:

- Build command: `npm run build`
- Output directory: `dist`
- Conecta el dominio `zentivy.com`. La app irá en `app.zentivy.com`.

## Nota

La carpeta padre se llama `Zentory` (nombre anterior). La marca es **Zentivy**.

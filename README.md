# Portfolio 2025

Portfolio personal moderno construido con Next.js 14, App Router y Tailwind CSS. Incluye animaciones con Framer Motion, datos de proyectos desacoplados y un efecto interactivo que reacciona al cursor.

## Requisitos previos

- Node.js 18.18 o superior
- npm 9+ (o pnpm/yarn si preferís otro gestor)

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

La app se monta en [http://localhost:3000](http://localhost:3000).

## Comandos disponibles

| Comando            | Descripción                                                   |
| ------------------ | ------------------------------------------------------------- |
| `npm run dev`      | Inicia el entorno de desarrollo con hot reload.               |
| `npm run lint`     | Ejecuta ESLint sobre el código del proyecto.                  |
| `npm run type-check` | Valida los tipos de TypeScript sin generar archivos.       |
| `npm run build`    | Genera el build optimizado listo para producción/Vercel.      |
| `npm run start`    | Sirve la app compilada (ideal para testing local del build).  |

## Personalización rápida

- **Datos personales**: editá `data/profile.ts` con tu nombre, rol, bio, links y skills.
- **Proyectos**: actualizá `data/projects.json` (título, descripción, imagen, links a demo/código y stack).
- **Imágenes**: reemplazá los SVG de `public/images/projects` por screenshots reales.

La UI se actualiza automáticamente al modificar estos archivos; no hay que tocar componentes para cambiar contenido.

## Deploy en Vercel

1. Hacé login en [Vercel](https://vercel.com) y creá un nuevo proyecto desde este repositorio.
2. Configurá el framework como **Next.js** (se detecta automáticamente).
3. Asegurate de que la versión de Node sea 18 o superior.
4. Deploy automático con los comandos por defecto (`npm install`, `npm run build`, `npm start`).

## Buenas prácticas incluidas

- Arquitectura modular con Server Components y Client Components según la interacción necesaria.
- Tailwind CSS configurado con `@tailwindcss/postcss` y diseño dark elegante responsive.
- Animaciones suaves con Framer Motion en navegación, tarjetas y secciones.
- Datos desacoplados en JSON/TS para mantenimiento sencillo.
- Estructura lista para deploy sin ajustes adicionales en Vercel.

## Licencia

Uso personal. Actualizá la licencia si necesitás compartir o publicar el código.

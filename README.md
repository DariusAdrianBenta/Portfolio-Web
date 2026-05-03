# Darius Adrian Benta — Portfolio

Portfolio profesional de **Darius Adrian Benta**, Backend Developer especializado en Java, Spring Boot, APIs REST y arquitectura de sistemas escalables.

## Stack

- [Next.js 15](https://nextjs.org/) — App Router, React Server Components
- [TypeScript](https://www.typescriptlang.org/) — Tipado estricto
- [Tailwind CSS 3](https://tailwindcss.com/) — Diseño moderno con tema oscuro
- [Framer Motion](https://www.framer.com/motion/) — Animaciones fluidas
- [Inter](https://rsms.me/inter/) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/) — Tipografía profesional

## Estructura

```
.
├── app/
│   ├── globals.css        # Estilos globales + tema dark
│   ├── layout.tsx         # Layout raíz, fonts y metadata SEO
│   ├── not-found.tsx      # Página 404
│   └── page.tsx           # Composición de secciones
├── components/
│   ├── Navbar.tsx         # Navegación responsive con scroll-aware
│   ├── Hero.tsx           # Hero section con CTA y animaciones
│   ├── About.tsx          # Sección sobre mí
│   ├── Projects.tsx       # Proyecto destacado: SmartCommerce
│   ├── TechStack.tsx      # Tech stack categorizado
│   ├── Contact.tsx        # Canales de contacto
│   ├── Footer.tsx         # Footer con redes sociales
│   └── ui/
│       ├── Icon.tsx       # Iconos SVG inline (sin dependencias)
│       ├── SectionHeading.tsx
│       └── AnimatedSection.tsx
├── lib/
│   └── data.ts            # Datos centralizados (single source of truth)
├── tailwind.config.ts     # Tokens de diseño + paleta dark
├── postcss.config.mjs
├── tsconfig.json
└── next.config.mjs
```

## Comandos

Instalación:

```bash
npm install
```

Desarrollo (http://localhost:3000):

```bash
npm run dev
```

Build de producción:

```bash
npm run build
npm run start
```

Lint y type-check:

```bash
npm run lint
npm run type-check
```

## Personalización

Toda la información del portfolio está centralizada en `lib/data.ts`. Para actualizar contenido (proyectos, contacto, tech stack, etc.), edita ese archivo sin tocar componentes.

## Diseño

- **Tema oscuro** profesional (`#0a0a0a` base) con acento `emerald-400`
- **Tipografía**: Inter para UI, JetBrains Mono para detalles técnicos
- **Animaciones**: entrada en viewport, stagger en hero, transiciones suaves
- **Responsive**: mobile-first, breakpoints `sm` / `md` / `lg`
- **Accesibilidad**: focus visibles, ARIA labels, contraste AA+
- **Performance**: fonts con `display: swap`, sin imágenes pesadas, animaciones GPU

## Licencia

© Darius Adrian Benta. Todos los derechos reservados.

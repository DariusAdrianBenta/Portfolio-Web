# Darius Adrian Benta — Portfolio
#  AI-Assisted Portfolio: Next.js 15 + Cursor Pro (Sonnet 4.6 & Opus 4.7)

**Flujo de trabajo de Desarrollo Asistido por IA (AID)** — alto rendimiento, solidez técnica y tiempo de entrega reducido sin sacrificar calidad de código.

Este repositorio demuestra cómo integrar modelos de lenguaje grande en el ciclo de desarrollo real: no como generadores de código desechable, sino como copilotos que aceleran la implementación mientras el ingeniero mantiene el control arquitectónico.

---

## 🤖 AI-Powered Workflow

El stack de IA usado en este proyecto no es un único modelo — es una cadena de herramientas especializadas:

| Herramienta | Rol en el proyecto |
|---|---|
| **Cursor Pro** | IDE principal con indexación local del codebase. Contexto persistente entre sesiones, navegación semántica y edición inline asistida. |
| **Claude Sonnet 4.6** | Lógica de componentes, estilos Tailwind, animaciones Framer Motion y refactors incrementales. |
| **Claude Opus 4.7** | Decisiones de arquitectura, debugging complejo y revisión de patrones de diseño. |

### Filosofía AID aplicada aquí

```
Desarrollador  →  define arquitectura, tipos, contratos de datos y criterio de calidad
IA         →  acelera boilerplate, propone implementaciones, detecta bugs
Desarrollador  →  revisa, ajusta, valida y toma la decisión final
```

El resultado: **código modular con TypeScript estricto**, build de producción limpio desde el primer intento y cero deuda técnica introducida por la IA.

---

##  Stack Tecnológico

*   **Next.js 15** — App Router, React Server Components y prerenderizado estático.
*   **TypeScript** — Desarrollo con tipado estricto para garantizar la robustez y calidad del código en todo el proyecto.
*   **Tailwind CSS 3** — Interfaz en dark mode con una paleta de colores y tokens de diseño personalizados.
*   **Framer Motion** — Implementación de animaciones fluidas y transiciones suaves que mejoran la experiencia de usuario.

---

## 🏗️ Arquitectura y Decisiones Técnicas

### `lib/data.ts` — Single Source of Truth

Todo el contenido del portfolio (textos, proyectos, tech stack, educación, contacto) vive en un único archivo de datos fuertemente tipado. Los componentes solo consumen, nunca definen contenido.

```
lib/data.ts
  ├── personalInfo       — nombre, rol, tagline, links
  ├── navLinks           — secciones de navegación con índices
  ├── aboutParagraphs    — bio técnica
  ├── education[]        — formación con highlights
  ├── projects[]         — proyectos con features, impact, howToTest
  ├── techStack[]        — categorías con descripción e items
  └── contactChannels[]  — canales con href y descripción
```

Ventaja: actualizar cualquier contenido del portfolio requiere tocar **un solo archivo**, sin riesgo de romper componentes.

### `components/ui/` — Componentes atómicos

```
components/ui/
  ├── Icon.tsx            — SVG inline sin dependencias de iconos externas
  ├── SectionHeading.tsx  — Cabecera animada reutilizable con índice + label + título
  └── AnimatedSection.tsx — Wrapper de animación whileInView genérico
```

Cada sección de página (`Hero`, `About`, `Projects`, etc.) se construye sobre estos átomos, garantizando consistencia visual y reutilización.


---

## 📁 Estructura del Proyecto

```
.
├── app/
│   ├── globals.css         # Tokens CSS, estilos base y utilidades custom
│   ├── layout.tsx          # Root layout: fuentes, metadata SEO, viewport
│   ├── not-found.tsx       # Página 404 consistente con el diseño
│   └── page.tsx            # Composición declarativa de secciones
├── components/
│   ├── Navbar.tsx          # Navegación scroll-aware + menú móvil con AnimatePresence
│   ├── Hero.tsx            # Layout 2 columnas: texto + foto (next/image)
│   ├── About.tsx           # Bio técnica + sidebar profile.json
│   ├── Education.tsx       # Formación con highlights y badge de grado
│   ├── Projects.tsx        # Features, impacto técnico y howToTest por proyecto
│   ├── TechStack.tsx       # Stack categorizado con iconos SVG
│   ├── Contact.tsx         # Canales de contacto con CTA directo
│   ├── Footer.tsx          # Footer minimalista con social links
│   └── ui/
│       ├── Icon.tsx
│       ├── SectionHeading.tsx
│       └── AnimatedSection.tsx
├── lib/
│   └── data.ts             # Single source of truth — ver sección de arquitectura
├── public/
│   └── darius.jpg          # Foto de perfil optimizada con next/image
├── tailwind.config.ts      # Tema dark + paleta de colores + animaciones custom
├── next.config.mjs
└── tsconfig.json           # strict: true, paths alias @/*
```

---

© 2025 Darius Adrian Benta. Todos los derechos reservados.

export const personalInfo = {
  name: "Darius Adrian Benta",
  role: "Backend Developer",
  specialty: "Java & Spring Boot",
  tagline:
    "APIs REST con Java y Spring Boot — arquitectura por capas, seguridad JWT y sistemas diseñados para escalar.",
  email: "darius.burza@gmail.com",
  github: "https://github.com/DariusAdrianBenta",
  linkedin: "https://www.linkedin.com/in/dariusadrianbenta",
  location: "España",
} as const;

export const navLinks = [
  { href: "#about", label: "Sobre mí", index: "01" },
  { href: "#education", label: "Educación", index: "02" },
  { href: "#project", label: "Proyecto", index: "03" },
  { href: "#stack", label: "Stack", index: "04" },
  { href: "#contact", label: "Contacto", index: "05" },
] as const;

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  highlights: string[];
};

export const education: EducationItem[] = [
  {
    degree: "Desarrollo de Aplicaciones Multiplataforma",
    institution: "IES Europa",
    period: "2023 – 2025",
    highlights: [
      "Programación orientada a objetos con Java",
      "Bases de datos relacionales y SQL",
      "Desarrollo de aplicaciones backend",
    ],
  },
];

export const aboutParagraphs = [
  "Desarrollador backend con experiencia en modernización de sistemas legacy e integración de sistemas mediante APIs REST.",
  "He participado en migraciones de plataformas (VB6 → VB.NET), integraciones entre sistemas con PHP y WordPress, y optimización de consultas sobre bases de datos relacionales.",
  "Actualmente construyo aplicaciones backend con Java y Spring Boot: arquitectura por capas, seguridad, persistencia con JPA/Hibernate y contenerización con Docker.",
  "Uso herramientas de IA (Cursor, GPT, Claude) como apoyo en el desarrollo para mejorar la productividad y la calidad del código.",
] as const;

export const aboutHighlights = [
  { label: "Enfoque actual", value: "Java · Spring Boot" },
  { label: "Arquitectura", value: "REST APIs · Capas" },
  { label: "Persistencia", value: "JPA · Hibernate · SQL" },
  { label: "Infraestructura", value: "Docker · Cloud" },
] as const;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  goal: string;
  status: "En desarrollo" | "Producción" | "Estable";
  features: { title: string; detail: string }[];
  impact: string[];
  howToTest: { label: string; detail: string; code: string }[];
  techStack: string[];
  links: { label: string; href: string; type: "primary" | "secondary" }[];
};

export const projects: Project[] = [
  {
    slug: "smartcommerce",
    name: "SmartCommerce",
    tagline: "E-commerce Backend",
    description:
      "Desarrollo de un backend completo para una plataforma e-commerce, enfocado en la creación de APIs REST robustas y escalables.",
    goal: "Construir un sistema backend escalable, mantenible y alineado con buenas prácticas de ingeniería.",
    status: "En desarrollo",
    features: [
      {
        title: "APIs REST",
        detail: "Desarrollo de APIs REST con Java y Spring Boot",
      },
      {
        title: "Arquitectura por capas",
        detail: "Estructura controller → service → repository",
      },
      {
        title: "Seguridad",
        detail: "Autenticación y autorización con JWT y Spring Security",
      },
      {
        title: "Base de datos",
        detail: "Modelado relacional con PostgreSQL",
      },
      {
        title: "Persistencia",
        detail: "JPA / Hibernate con repositorios tipados",
      },
      {
        title: "DTOs & Mapping",
        detail: "Implementación de DTOs y MapStruct",
      },
      {
        title: "Excepciones",
        detail: "Manejo global de errores con @ControllerAdvice",
      },
      {
        title: "Testing",
        detail: "Tests unitarios e integración con JUnit y Mockito",
      },
      {
        title: "Documentación",
        detail: "API documentada con Swagger / OpenAPI",
      },
      {
        title: "Contenerización",
        detail: "Despliegue con Docker y docker-compose",
      },
    ],
    impact: [
      "Arquitectura backend escalable con separación estricta de responsabilidades (controller → service → repository)",
      "Seguridad implementada con JWT + Spring Security: autenticación stateless y control de acceso por roles",
      "Capa de datos tipada con JPA/Hibernate, DTOs y MapStruct — sin acoplamiento entre capas",
      "Cobertura de tests con JUnit y Mockito; manejo global de excepciones con @ControllerAdvice",
    ],
    howToTest: [
      {
        label: "Swagger / OpenAPI",
        detail: "Documentación interactiva de todos los endpoints REST",
        code: "http://localhost:8080/swagger-ui.html",
      },
      {
        label: "Docker",
        detail: "Levanta el entorno completo (app + PostgreSQL) con un comando",
        code: "docker-compose up --build",
      },
      {
        label: "GitHub",
        detail: "Código fuente, instrucciones de setup y estructura del proyecto",
        code: "github.com/DariusAdrianBenta",
      },
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "JPA",
      "Hibernate",
      "MapStruct",
      "JUnit",
      "Mockito",
      "Swagger",
      "Docker",
    ],
    links: [
      {
        label: "Ver en GitHub",
        href: "https://github.com/DariusAdrianBenta",
        type: "primary",
      },
      {
        label: "Código fuente",
        href: "https://github.com/DariusAdrianBenta",
        type: "secondary",
      },
    ],
  },
];

export type TechCategory = {
  title: string;
  description: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    title: "Backend",
    description: "Núcleo del desarrollo de APIs y lógica de negocio",
    items: ["Java", "Spring Boot", "Hibernate / JPA", "REST APIs"],
  },
  {
    title: "Frontend",
    description: "Bases sólidas para integraciones full-stack",
    items: ["JavaScript", "React"],
  },
  {
    title: "Bases de datos",
    description: "Modelado relacional y optimización de consultas",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Herramientas",
    description: "Control de versiones, DevOps y documentación",
    items: ["Git / GitHub", "Docker", "Swagger / OpenAPI", "CI/CD"],
  },
  {
    title: "IA aplicada",
    description: "Asistencia en desarrollo para productividad y calidad",
    items: ["Cursor", "GPT", "Claude"],
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: "Vía preferida para oportunidades profesionales",
  },
  {
    label: "LinkedIn",
    value: "in/dariusadrianbenta",
    href: personalInfo.linkedin,
    description: "Conecta para networking profesional",
  },
  {
    label: "GitHub",
    value: "@DariusAdrianBenta",
    href: personalInfo.github,
    description: "Código, proyectos y contribuciones",
  },
] as const;

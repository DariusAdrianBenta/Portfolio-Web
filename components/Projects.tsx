"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ArrowUpRightIcon,
  CheckIcon,
  GitHubIcon,
  CodeIcon,
  DatabaseIcon,
  ServerIcon,
  SparklesIcon,
} from "@/components/ui/Icon";

export function Projects() {
  return (
    <section id="project" className="section">
      <div className="container-content">
        <SectionHeading
          index="03"
          label="Proyecto destacado"
          title="Backend de producción, no demos"
          description="Un proyecto que refleja cómo construyo sistemas backend: APIs REST estructuradas, seguridad implementada desde el diseño y arquitectura orientada a mantenimiento."
        />

        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
      className="card card-hover group overflow-hidden"
    >
      {/* Header */}
      <header className="flex flex-col gap-5 border-b border-border p-6 sm:p-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xs uppercase tracking-[0.2em] text-accent">
              ./projects/{project.slug}
            </span>
            <StatusBadge status={project.status} />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {project.name}
            </h3>
            <p className="font-mono text-sm text-muted">{project.tagline}</p>
          </div>
          <p className="max-w-2xl text-pretty text-base text-muted">
            {project.description}
          </p>
        </div>

        <div className="flex flex-shrink-0 flex-wrap gap-3">
          <a
            href={project.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent-subtle px-5 py-2.5 text-sm font-medium text-accent transition-all duration-200 hover:border-accent hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
          >
            <GitHubIcon size={16} />
            Ver en GitHub
            <ArrowUpRightIcon
              size={13}
              className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
            />
          </a>
        </div>
      </header>

      {/* Features grid */}
      <div className="grid grid-cols-1 gap-px bg-border lg:grid-cols-[1.5fr,1fr]">
        <div className="bg-surface/60 p-6 sm:p-8">
          <SubHeading>Características técnicas</SubHeading>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature.title}
                className="group/feat flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-subtle text-accent transition-colors group-hover/feat:border-accent">
                  <CheckIcon size={11} strokeWidth={2.5} />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {feature.title}
                  </span>
                  <span className="text-xs text-muted">{feature.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 bg-surface/60 p-6 sm:p-8">
          <div>
            <SubHeading>Objetivo</SubHeading>
            <p className="text-pretty text-sm leading-relaxed text-muted">
              {project.goal}
            </p>
          </div>

          <div>
            <SubHeading>Tecnologías</SubHeading>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technical impact */}
      <div className="border-t border-border bg-elevated/40 p-6 sm:p-8">
        <SubHeading icon={<ServerIcon size={13} />}>
          Impacto técnico
        </SubHeading>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {project.impact.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-lg border border-border bg-surface/60 px-4 py-3"
            >
              <span className="mt-0.5 font-mono text-xs font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <span className="text-sm leading-relaxed text-muted">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* AI usage */}
      <div className="border-t border-border bg-elevated/30 p-6 sm:p-8">
        <SubHeading icon={<SparklesIcon size={13} />}>
          Uso de IA en desarrollo
        </SubHeading>
        <ul className="mt-4 flex flex-wrap gap-3">
          {[
            "Optimización y refactorización de código",
            "Apoyo en decisiones de arquitectura backend",
            "Aplicación de buenas prácticas",
          ].map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3 py-2 text-xs text-muted"
            >
              <span className="h-1 w-1 rounded-full bg-accent/60 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* How to test */}
      <div className="border-t border-border bg-surface/30 p-6 sm:p-8">
        <SubHeading icon={<CodeIcon size={13} />}>
          Cómo probar el proyecto
        </SubHeading>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {project.howToTest.map((method) => (
            <div
              key={method.label}
              className="flex flex-col gap-3 rounded-lg border border-border bg-elevated p-4"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border border-accent/30 bg-accent-subtle">
                  <HowToTestIcon label={method.label} />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {method.label}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-muted">
                {method.detail}
              </p>
              <code className="block rounded border border-border bg-background px-2.5 py-1.5 font-mono text-xs text-accent">
                {method.code}
              </code>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function SubHeading({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <h4 className="mb-0 flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.2em] text-muted">
      <span className="h-px w-6 bg-accent" />
      {icon}
      {children}
    </h4>
  );
}

function HowToTestIcon({ label }: { label: string }) {
  if (label === "Docker") return <DatabaseIcon size={12} className="text-accent" />;
  if (label === "GitHub") return <GitHubIcon size={12} className="text-accent" />;
  return <CodeIcon size={12} className="text-accent" />;
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const palette = {
    "En desarrollo": "border-accent/40 bg-accent-subtle text-accent",
    Producción: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    Estable: "border-zinc-500/30 bg-zinc-500/10 text-zinc-300",
  } as const;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-2xs ${palette[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

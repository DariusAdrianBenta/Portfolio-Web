"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CodeIcon,
  DatabaseIcon,
  ServerIcon,
  SparklesIcon,
  ToolIcon,
} from "@/components/ui/Icon";

const iconByCategory = {
  Backend: ServerIcon,
  Frontend: CodeIcon,
  "Bases de datos": DatabaseIcon,
  Herramientas: ToolIcon,
  "IA aplicada": SparklesIcon,
} as const;

export function TechStack() {
  return (
    <section id="stack" className="section">
      <div className="container-content">
        <SectionHeading
          index="04"
          label="Tech Stack"
          title="Herramientas que uso para construir software"
          description="Stack centrado en backend, con bases sólidas en frontend, persistencia y DevOps."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {techStack.map((category, idx) => {
            const Icon =
              iconByCategory[category.title as keyof typeof iconByCategory] ??
              ServerIcon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: idx * 0.07,
                }}
                className="card card-hover group flex flex-col gap-5 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-elevated text-accent transition-colors group-hover:border-accent/50">
                    <Icon size={18} />
                  </span>
                  <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {category.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2 border-t border-border pt-4">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-mono text-sm text-foreground/90"
                    >
                      <span className="text-accent">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

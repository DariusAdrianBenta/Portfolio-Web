"use client";

import { motion } from "framer-motion";
import { contactChannels, personalInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/Icon";

const iconByLabel = {
  Email: MailIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
} as const;

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-content">
        <SectionHeading
          index="05"
          label="Contacto"
          title="¿Buscas un backend developer?"
          description="Estoy abierto a oportunidades profesionales y proyectos donde aportar valor con Java, Spring Boot y arquitectura de APIs."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {contactChannels.map((channel, idx) => {
            const Icon =
              iconByLabel[channel.label as keyof typeof iconByLabel] ?? MailIcon;
            const isExternal = channel.label !== "Email";

            return (
              <motion.a
                key={channel.label}
                href={channel.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: idx * 0.07,
                }}
                className="card card-hover group flex flex-col gap-4 p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-elevated text-accent transition-colors group-hover:border-accent/50">
                    <Icon size={18} />
                  </span>
                  <ArrowUpRightIcon
                    className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    size={16}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
                    {channel.label}
                  </span>
                  <span className="break-all text-sm font-medium text-foreground">
                    {channel.value}
                  </span>
                  <span className="mt-1 text-xs text-muted">
                    {channel.description}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="card mt-10 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">
              {`> contacto_directo`}
            </p>
            <p className="mt-2 text-balance text-lg font-medium text-foreground sm:text-xl">
              Disponible para nuevas oportunidades como Backend Developer.
            </p>
          </div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary group"
          >
            <MailIcon size={16} />
            Enviar email
            <ArrowUpRightIcon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

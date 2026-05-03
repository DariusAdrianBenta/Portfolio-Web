"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo, projects } from "@/lib/data";
import { ArrowRightIcon, DownloadIcon, GitHubIcon } from "@/components/ui/Icon";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  const featuredProject = projects[0];

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 -z-10 animate-grid-pan opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-radial-fade"
      />

      <div className="container-content">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10"
        >
          {/* Two-column: text left, photo right */}
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr,260px] lg:items-center lg:gap-16">

            {/* ── Text column ── */}
            <div className="flex flex-col gap-7 order-2 lg:order-1">
              <motion.div
                variants={item}
                className="flex items-center gap-3 font-mono text-xs"
              >
                <span className="flex h-2 w-2 items-center justify-center">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent/60" />
                  <span className="relative h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-muted">
                  <span className="text-accent">$</span> available_for_work ={" "}
                  <span className="text-foreground">true</span>
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
              >
                <span className="gradient-text">{personalInfo.name}</span>
              </motion.h1>

              <motion.div variants={item} className="flex flex-col gap-3">
                <p className="font-mono text-sm text-accent sm:text-base">
                  {`> ${personalInfo.role} · ${personalInfo.specialty}`}
                  <span className="ml-1 inline-block h-4 w-2 -translate-y-px animate-blink bg-accent align-middle" />
                </p>
                <p className="max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                  {personalInfo.tagline}
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="flex flex-wrap items-center gap-3"
              >
                <a href="#project" className="btn-primary group">
                  Ver proyecto
                  <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent-subtle px-5 py-2.5 text-sm font-medium text-accent transition-all duration-200 hover:border-accent hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <GitHubIcon size={16} />
                  GitHub
                </a>
                <a
                  href="/CV_DARIUS_BENTA.pdf"
                  download
                  className="group inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-muted transition-all duration-200 hover:scale-[1.02] hover:border-accent/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <DownloadIcon size={15} className="transition-transform group-hover:translate-y-0.5" />
                  Descargar CV
                </a>
              </motion.div>
            </div>

            {/* ── Photo column ── */}
            <motion.div
              variants={item}
              className="flex justify-center order-1 lg:order-2 lg:justify-end"
            >
              <ProfilePhoto />
            </motion.div>
          </div>

          {/* Stats bar — full width below */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3"
          >
            <HeroStat label="Stack principal" value="Java · Spring Boot" />
            <HeroStat label="Enfoque" value="APIs REST · Arquitectura" />
            <HeroStat
              label="Proyecto destacado"
              value={featuredProject.name}
              accent
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProfilePhoto() {
  return (
    <div className="group relative">
      {/* Glow layer */}
      <div
        aria-hidden="true"
        className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent/25 via-accent/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
      />
      {/* Subtle static glow always visible */}
      <div
        aria-hidden="true"
        className="absolute -inset-1 rounded-full bg-accent/10 blur-md"
      />
      {/* Ring + image */}
      <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-accent/30 ring-4 ring-accent/10 transition-all duration-500 group-hover:border-accent/50 group-hover:ring-accent/20 sm:h-52 sm:w-52 lg:h-56 lg:w-56">
        <Image
          src="/darius.jpg"
          alt="Darius Adrian Benta — Backend Developer"
          fill
          sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 224px"
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}

type HeroStatProps = {
  label: string;
  value: string;
  accent?: boolean;
};

function HeroStat({ label, value, accent = false }: HeroStatProps) {
  return (
    <div className="flex flex-col gap-1.5 bg-surface/80 p-5">
      <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <span
        className={`text-sm font-medium sm:text-base ${
          accent ? "text-accent" : "text-foreground"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/Icon";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container-content">
        <SectionHeading
          index="02"
          label="Educación"
          title="Formación técnica en desarrollo de software"
        />

        <div className="flex flex-col gap-4">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="card card-hover overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-[1fr,auto]">
                {/* Main info */}
                <div className="flex flex-col gap-4 bg-surface/60 p-6 sm:p-8">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-2xs uppercase tracking-[0.2em] text-accent">
                      ./education
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <span className="font-medium text-foreground/80">
                        {item.institution}
                      </span>
                      <span className="text-border">·</span>
                      <span className="font-mono">{item.period}</span>
                    </div>
                  </div>

                  <ul className="flex flex-wrap gap-2 pt-1">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 rounded-md border border-border bg-elevated px-3 py-1.5"
                      >
                        <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-subtle text-accent">
                          <CheckIcon size={10} strokeWidth={2.5} />
                        </span>
                        <span className="text-xs font-medium text-foreground/80">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar: degree badge */}
                <div className="flex items-center justify-start gap-3 bg-elevated/60 px-6 py-5 sm:flex-col sm:items-center sm:justify-center sm:px-8 sm:text-center">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-elevated">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent"
                      aria-hidden="true"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-0.5 sm:items-center">
                    <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
                      Grado superior
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      FP · DAM
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

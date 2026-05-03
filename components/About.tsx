"use client";

import { motion } from "framer-motion";
import { aboutHighlights, aboutParagraphs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-content">
        <SectionHeading
          index="01"
          label="Sobre mí"
          title="Backend Developer enfocado en sistemas escalables"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr,1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5 text-pretty text-base leading-relaxed text-muted sm:text-[17px]"
          >
            {aboutParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="card p-6"
          >
            <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-2xs uppercase tracking-[0.2em] text-muted">
                profile.json
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-accent/40" />
                <span className="h-2 w-2 rounded-full bg-accent/60" />
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
            </div>
            <ul className="space-y-4">
              {aboutHighlights.map((highlight) => (
                <li
                  key={highlight.label}
                  className="flex flex-col gap-1 border-l-2 border-border pl-4 transition-colors hover:border-accent"
                >
                  <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
                    {highlight.label}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {highlight.value}
                  </span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

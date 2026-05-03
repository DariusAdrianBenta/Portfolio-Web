"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12 flex flex-col gap-3"
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-2xs uppercase tracking-[0.2em] text-accent">
          {index}
        </span>
        <span className="h-px w-10 bg-border" />
        <span className="section-label">{label}</span>
      </div>
      <h2 className="heading text-balance">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-pretty text-base text-muted">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

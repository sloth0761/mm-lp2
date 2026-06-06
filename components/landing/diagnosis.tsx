"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SilverSphere } from "@/components/ui/silver-sphere";
import posthog from "posthog-js";

const DIAG_ITEMS = [
  "My content gets engagement but few opportunities",
  "Most people interacting with my content look like founders",
  "My audience knows me but isn't buying",
  "I'm growing followers but not demand",
  "I don't know who my content is actually attracting",
];

export function Diagnosis() {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);

      // fire posthog on first selection and on reveal
      if (!prev.has(i)) {
        posthog.capture("diagnosis_item_selected", { item: DIAG_ITEMS[i], total: next.size });
        if (next.size === 3) posthog.capture("diagnosis_revealed");
      }

      return next;
    });
  };

  const revealed = selected.size >= 3;

  return (
    <section className="relative px-6 py-32 md:px-12 md:py-48 bg-gradient-to-b from-background via-accent/40 to-background">
      <div aria-hidden className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ${revealed ? "opacity-100" : "opacity-0"}`}>
        <SilverSphere
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          size="80vw"
          opacity={0.6}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient-headline text-center font-sans text-5xl font-bold tracking-[-0.035em] md:text-7xl"
        >
          Does any of this feel familiar?
        </motion.h2>

        <div className="mt-16 space-y-4">
          {DIAG_ITEMS.map((item, i) => {
            const isSel = selected.has(i);
            return (
              <motion.button
                key={i}
                onClick={() => toggle(i)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="matte-card w-full rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-5 md:p-7"
              >
                <span className={`flex-shrink-0 w-6 h-6 rounded-md border transition-all ${isSel ? "bg-primary border-primary" : "bg-white border-border"}`}>
                  {isSel && (
                    <svg viewBox="0 0 24 24" className="w-full h-full text-primary-foreground p-1" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span className="text-base text-foreground/90 md:text-lg">{item}</span>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-16 text-center ${!revealed && "pointer-events-none"}`}
        >
          <p className="text-gradient-headline font-sans text-3xl font-bold leading-[0.95] tracking-[-0.035em] md:text-5xl">
            You may not have a content problem.
            <br />
            <em>You may have an audience problem.</em>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";
import { SilverSphere } from "@/components/ui/silver-sphere";
import { Reveal } from "@/components/ui/reveal";

const metrics = [
  { k: "Buyer Relevance", v: "LOW", level: 25 },
  { k: "Founder Audience", v: "HIGH", level: 88 },
  { k: "Audience Quality", v: "WEAK", level: 35 },
  { k: "Demand Potential", v: "LOW", level: 28 },
];

export function ScoreCard() {
  return (
    <section id="score" className="relative px-6 py-32 md:px-12 md:py-48">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <SilverSphere className="absolute right-[-20%] top-[10%]" size="50vw" opacity={0.5} />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal>
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Audience Alignment Score
            </div>

            <div className="mt-6 flex items-baseline gap-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-gradient-headline font-sans text-8xl font-bold leading-none md:text-9xl"
              >
                48
              </motion.span>
              <span className="text-2xl text-muted-foreground">/ 100</span>
            </div>

            <div className="mt-10 space-y-4">
              {metrics.map((m, i) => (
                <div key={m.k} className="flex items-center gap-4">
                  <div className="w-44 text-sm text-foreground/80">{m.k}</div>
                  <div className="flex-1 h-[6px] rounded-full bg-accent overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-silver)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  <div className="w-16 text-right text-xs tracking-widest text-muted-foreground">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-border/60 pt-8">
              <div className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Insight
              </div>
              <p className="font-sans text-2xl font-bold leading-[0.95] tracking-[-0.035em] text-foreground md:text-3xl">
                Your audience engages with founder content.{" "}
                <span className="italic text-muted-foreground">
                  Not buyer-driven content.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
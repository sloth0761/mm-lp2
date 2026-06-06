"use client";

import { Reveal } from "@/components/ui/reveal";

const drifts = [
  "attract peers instead of buyers,",
  "optimize for engagement instead of relevance,",
  "build audiences instead of demand.",
];

export function Problem() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-gradient-headline max-w-5xl font-sans text-6xl font-bold leading-[0.95] tracking-[-0.035em] md:text-8xl lg:text-9xl">
            Attention compounds.
            <br />
            <span className="italic">So does audience quality.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid max-w-5xl gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <div className="pt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
              The drift
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8 text-lg leading-relaxed text-foreground/80 md:text-xl">
              <p>Many founders accidentally:</p>
              <ul className="space-y-4">
                {drifts.map((t) => (
                  <li key={t} className="flex items-start gap-4">
                    <span className="mt-3 h-px w-8 flex-shrink-0 bg-foreground/30" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-6 text-muted-foreground">
                Because nobody measures whether their audience actually aligns
                with future customers.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
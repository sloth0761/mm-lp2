"use client";

import { SilverSphere } from "@/components/ui/silver-sphere";
import { Reveal } from "@/components/ui/reveal";
import { WaitlistForm } from "@/components/ui/waitlist-form";

export function CTASection() {
  return (
    <section id="waitlist" className="relative overflow-hidden px-6 py-32 text-center md:px-12 md:py-48">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <SilverSphere
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          size="70vw"
          opacity={0.4}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-gradient-headline font-sans text-5xl font-bold leading-[0.95] tracking-[-0.035em] md:text-7xl">
            Be one of the first founders audited by The Arth.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12">
            <WaitlistForm source="lp2-wrong-audience" />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Limited founding access
          </p>
        </Reveal>
      </div>
    </section>
  );
}
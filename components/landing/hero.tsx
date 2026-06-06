"use client";

import { motion } from "motion/react";
import { SilverSphere } from "@/components/ui/silver-sphere";
import posthog from "posthog-js";
import { useEffect } from "react";

export function AnalyticsEvents() {
  useEffect(() => {
    posthog.capture("landing_view");
  }, []);
  return null;
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-24 pt-32 md:px-12">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <SilverSphere className="absolute left-[-10%] top-[20%]" size="42vw" opacity={0.8}/>
        <SilverSphere className="absolute right-[-10%] top-[35%]" size="42vw" opacity={0.8} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground md:mb-10 md:text-sm"
        >
          Founder Positioning Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.3, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient-headline font-sans text-[13vw] font-bold leading-[0.95] tracking-[-0.035em] md:text-[8.5vw] md:pb-5"
        >
          You Might Be Building
          <br />
          The Wrong Audience.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground md:text-[22px]"
        >
          Many founders spend years creating content. Only to realize they've
          attracted founders, creators, and spectators instead of future customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#waitlist"
            className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm tracking-wide text-primary-foreground shadow-[0_20px_50px_-20px_oklch(0_0_0/0.4)] transition hover:bg-primary/90"
          >
            Join Early Access
            <span className="ml-2 transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#score"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm tracking-wide text-foreground transition hover:bg-accent"
          >
            See Example Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
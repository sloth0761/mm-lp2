"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function CrowdImage() {
  return (
    <section className="relative h-[70vh] overflow-hidden md:h-[85vh]">
      <Image
        src="/crowd.jpg"
        alt="A crowd of blurred figures walking in different directions"
        fill
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      <div className="relative z-10 flex h-full items-end px-6 pb-16 md:px-12 md:pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl font-sans text-5xl font-bold leading-[0.95] tracking-[-0.035em] text-white md:text-7xl lg:text-8xl"
        >
          Everyone is growing.
          <br />
          <span className="text-white/60">
            Very few know who they&rsquo;re attracting.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
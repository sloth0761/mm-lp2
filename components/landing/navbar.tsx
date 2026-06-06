"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12"
    >
      <div className="text-sm uppercase tracking-[0.3em] text-foreground/70">
        Narron
      </div>
      <Link
        href="#waitlist"
        className="text-sm text-foreground/70 transition hover:text-foreground"
      >
        Early Access →
      </Link>
    </motion.nav>
  );
}
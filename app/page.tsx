import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { CrowdImage } from "@/components/landing/crowd-image";
import { Problem } from "@/components/landing/problem";
import { Diagnosis } from "@/components/landing/diagnosis";
import { ScoreCard } from "@/components/landing/score-card";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export const metadata = {
  title: "You Might Be Building the Wrong Audience — The Arth",
  description: "Many founders attract peers instead of buyers. The Arth audits whether your audience aligns with your future customers.",
  openGraph: {
    title: "You Might Be Building the Wrong Audience — The Arth",
    description: "Audience alignment audits for founders. Find out who you're actually attracting.",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <CrowdImage />
      <Problem />
      <Diagnosis />
      <ScoreCard />
      <CTASection />
      <Footer />
    </main>
  );
}
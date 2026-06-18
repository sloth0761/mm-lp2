import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PHProvider } from "@/components/providers/posthog-provider";


const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: "You Might Be Building the Wrong Audience — The Arth",
  description: "Many founders attract peers instead of buyers. The Arth audits whether your audience aligns with your future customers.",
  openGraph: {
    title: "You Might Be Building the Wrong Audience — The Arth",
    description: "Audience alignment audits for founders. Find out who you're actually attracting.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}><PHProvider>{children}</PHProvider></body>
    </html>
  );
}
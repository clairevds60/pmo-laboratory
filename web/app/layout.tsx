import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PMO Laboratory — Vos projets, leur charge, vos arbitrages.",
  description:
    "L'outil PPM en ligne pour piloter un portefeuille de projets : portefeuille, charge, arbitrage, risques, budget. Abonnement SaaS, à partir de 39 € HT / mois.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

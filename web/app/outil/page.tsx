import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import OutilHero from "@/components/outil/OutilHero";
import Modules from "@/components/outil/Modules";
import NeFaitPas from "@/components/outil/NeFaitPas";
import OutilCta from "@/components/outil/OutilCta";

export const metadata: Metadata = {
  title: "L'outil — cinq modules, un seul portefeuille | PMO Laboratory",
  description:
    "Portefeuille, charge, arbitrage, risques, budget : les cinq modules de l'outil PPM PMO Lab. Hébergé en France, accessible depuis un navigateur, facturé à l'abonnement.",
};

export default function OutilPage() {
  return (
    <div>
      <Nav />
      <OutilHero />
      <SectionDivider />
      <Modules />
      <NeFaitPas />
      <OutilCta />
      <Footer />
    </div>
  );
}

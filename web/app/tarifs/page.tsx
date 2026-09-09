import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import section from "@/components/section.module.css";
import styles from "./tarifs.module.css";

export const metadata: Metadata = {
  title: "Tarifs — PMO Laboratory | Outil PPM à partir de 39 € HT / mois",
  description:
    "Les tarifs de l'outil PPM PMO Laboratory : Solo à 39 € HT / mois, Équipe à 149 € HT / mois, Entreprise sur devis. Option formation 890 € HT. Sans engagement, hébergé en France.",
};

type Plan = {
  tier: string;
  tagline: string;
  price: string;
  unit?: string;
  meta: string;
  features: string[];
  cta: string;
  featured: boolean;
};

const PLANS: Plan[] = [
  {
    tier: "Solo",
    tagline: "Le PMO seul aux commandes",
    price: "39 €",
    unit: "/ mois HT",
    meta: "1 utilisateur · jusqu'à 20 projets",
    features: [
      "Portefeuille et vue COMEX",
      "Registre des risques",
      "Suivi budgétaire simple",
      "Import Excel",
      "Export PDF du reporting",
    ],
    cta: "Commencer",
    featured: false,
  },
  {
    tier: "Équipe",
    tagline: "Un PMO et son portefeuille",
    price: "149 €",
    unit: "/ mois HT",
    meta: "Jusqu'à 10 utilisateurs · projets illimités",
    features: [
      "Tout Solo, plus :",
      "Charge & capacité par profil",
      "Grille d'arbitrage pondérée",
      "Comptes rendus de comité",
      "CAPEX / OPEX et trajectoire",
      "Rôles et droits par utilisateur",
    ],
    cta: "Demander une démo",
    featured: true,
  },
  {
    tier: "Entreprise",
    tagline: "Plusieurs portefeuilles, une DSI",
    price: "Sur devis",
    meta: "Utilisateurs illimités · plusieurs entités",
    features: [
      "Tout Équipe, plus :",
      "SSO et annuaire d'entreprise",
      "Hébergement France dédié",
      "Consolidation multi-portefeuilles",
      "Reprise de vos référentiels",
      "Formation des équipes incluse",
    ],
    cta: "Parler du besoin",
    featured: false,
  },
];

const FAQ: { q: string; r: string }[] = [
  {
    q: "Nos données sortent-elles de France ?",
    r: "Non. Hébergement en France, sauvegardes en France, aucun sous-traitant hors UE. Le registre de traitement est fourni sur demande.",
  },
  {
    q: "On part de six fichiers Excel. Ça se reprend ?",
    r: "Oui, c'est le cas le plus fréquent. L'import lit vos colonnes existantes ; la reprise est faite avec vous pendant la démo ou la formation.",
  },
  {
    q: "Combien de temps avant le premier COMEX outillé ?",
    r: "Une demi-journée pour un portefeuille de vingt projets, formation comprise. La grille d'arbitrage est paramétrée dans la même séance.",
  },
  {
    q: "L'abonnement est-il engageant ?",
    r: "Non. Mensuel résiliable à tout moment ; l'annuel offre deux mois et reste remboursable au prorata la première année.",
  },
  {
    q: "La formation passe-t-elle en OPCO ?",
    r: "Oui pour l'option formation, qui fait l'objet d'un contrat, d'un programme et d'une attestation. L'abonnement logiciel, lui, n'est pas finançable.",
  },
  {
    q: "Que se passe-t-il si nous arrêtons ?",
    r: "Export complet de vos données en Excel et PDF, à tout moment et sans frais. Vos référentiels vous appartiennent.",
  },
];

export default function TarifsPage() {
  return (
    <div>
      <Nav />

      <div className={styles.hero}>
        <div className={styles.heroPulse} />
        <div className={styles.heroContent}>
          <div className={section.eyebrow}>Tarifs · abonnement SaaS</div>
          <h1 className={styles.heroTitle}>
            Le prix d&apos;un outil, pas d&apos;un projet d&apos;intégration
          </h1>
          <p className={styles.heroLead}>
            Pas de coût de mise en service, pas de licence à négocier six mois. Vous vous abonnez, vous
            importez vos fichiers, vous pilotez. Résiliation à tout moment.
          </p>
          <div className={styles.billing}>
            <span className={styles.billingOn}>Annuel — 2 mois offerts</span>
            <span className={styles.billingOff}>Mensuel</span>
          </div>
        </div>
      </div>

      <div className={styles.plansWrap}>
        <div className={styles.plans}>
          {PLANS.map((p) => (
            <div
              key={p.tier}
              className={p.featured ? `${styles.card} ${styles.cardFeatured}` : styles.card}
            >
              {p.featured ? <div className={styles.ribbon}>Le plus choisi</div> : null}
              <div className={styles.cardHead}>
                <div className={p.featured ? `${styles.tier} ${styles.tierFeatured}` : styles.tier}>
                  {p.tier}
                </div>
                <div className={styles.tagline}>{p.tagline}</div>
              </div>
              <div className={styles.priceRow}>
                <span className={p.featured ? `${styles.price} ${styles.priceFeatured}` : styles.price}>
                  {p.price}
                </span>
                {p.unit ? (
                  <span
                    className={
                      p.featured ? `${styles.priceUnit} ${styles.priceUnitFeatured}` : styles.priceUnit
                    }
                  >
                    {p.unit}
                  </span>
                ) : null}
              </div>
              <div className={p.featured ? `${styles.meta} ${styles.metaFeatured}` : styles.meta}>
                {p.meta}
              </div>
              <div className={p.featured ? `${styles.rule} ${styles.ruleFeatured}` : styles.rule} />
              <div
                className={
                  p.featured ? `${styles.features} ${styles.featuresFeatured}` : styles.features
                }
              >
                {p.features.map((f) => (
                  <div key={f}>{f}</div>
                ))}
              </div>
              <a href="/atelier#demo" className={p.featured ? styles.ctaSolid : styles.ctaGhost}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <div className={styles.option}>
          <div className={styles.optionCopy}>
            <div className={styles.optionEyebrow}>Option · formation</div>
            <div className={styles.optionTitle}>Prendre en main l&apos;outil PPM</div>
            <div className={styles.optionText}>
              Une demi-journée pour piloter votre portefeuille dedans, pas à côté : import de vos
              fichiers, paramétrage de la grille d&apos;arbitrage, premier comité préparé avec vous.
            </div>
          </div>
          <div className={styles.optionSide}>
            <div className={styles.priceRow}>
              <span className={styles.optionPrice}>890 €</span>
              <span className={styles.optionPriceUnit}>HT · jusqu&apos;à 6 personnes</span>
            </div>
            <div className={styles.optionNote}>Éligible au financement OPCO</div>
            <a href="/ressources" className={section.link}>
              Le programme →
            </a>
          </div>
        </div>
      </div>

      <div className={styles.faq}>
        <div className={styles.faqInner}>
          <div className={styles.faqCopy}>
            <div className={section.eyebrow}>Questions</div>
            <h2 className={styles.faqTitle}>Ce qu&apos;on nous demande avant de signer</h2>
            <p className={styles.faqLead}>
              Une question qui n&apos;est pas là ? Écrivez — la réponse sera franche, y compris quand
              elle est « non ».
            </p>
            <a href="/atelier#demo" className={section.link}>
              Poser la question →
            </a>
          </div>
          <div className={styles.faqList}>
            {FAQ.map((item) => (
              <div key={item.q} className={styles.faqItem}>
                <div className={styles.faqQ}>{item.q}</div>
                <div className={styles.faqA}>{item.r}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <div className={styles.ctaGrid} />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Essayez sur vos vrais projets, 14 jours</h2>
          <p className={styles.ctaLead}>
            On importe votre fichier de portefeuille pendant la démo. Si l&apos;outil ne vous sert pas,
            vous le saurez le premier jour.
          </p>
          <a href="/atelier#demo" className={styles.ctaButton}>
            Demander une démo
          </a>
          <div className={styles.ctaFine}>
            Sans engagement · résiliation en un clic · hébergé en France
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import section from "@/components/section.module.css";
import styles from "./ressources.module.css";

export const metadata: Metadata = {
  title: "Ressources — PMO Laboratory",
  description:
    "La boîte à outils du pilotage, gratuite et sans email : grille d'arbitrage, tableau de bord, registre des risques, grille de scénarios. Plus le relevé du marché des missions, les guides et la formation à l'outil PPM.",
};

type KitItem = {
  href: string;
  kicker: string;
  title: string;
  text: string;
};

const KIT: KitItem[] = [
  {
    href: "https://clairevandesype.com/kit/grille-arbitrage-fr.pdf",
    kicker: "Portefeuille",
    title: "La grille d'arbitrage",
    text: "Le modèle installé en mission — colonnes, règles de pondération, décisions.",
  },
  {
    href: "https://clairevandesype.com/kit/tableau-de-bord-fr.pdf",
    kicker: "Portefeuille",
    title: "Le tableau de bord",
    text: "Prévu, réalisé, reste à faire — et la décision attendue du comité.",
  },
  {
    href: "https://clairevandesype.com/kit/registre-risques-fr.pdf",
    kicker: "Programme",
    title: "Le registre des risques",
    text: "Propriétaires nommés, mitigations datées, quinze lignes maximum.",
  },
  {
    href: "https://clairevandesype.com/kit/reprise-programme-fr.pdf",
    kicker: "Programme",
    title: "Reprendre un programme en dérive",
    text: "Les dix premiers gestes, dans l'ordre. La méthode complète, offerte.",
  },
  {
    href: "https://clairevandesype.com/kit/grille-scenarios-fr.pdf",
    kicker: "Schéma directeur",
    title: "La grille de scénarios",
    text: "Six critères pondérés pour comparer des scénarios SDSI ou SIRH, et en arbitrer deux.",
  },
];

type Stat = {
  value: string;
  label: string;
  note: string;
};

const STATS: Stat[] = [
  { value: "3 068", label: "missions en ligne", note: "sur 23 plateformes suivies" },
  { value: "550 €", label: "TJM médian affiché", note: "sur 1 295 annonces qui le publient" },
  { value: "29 %", label: "disparaissent en 7 jours", note: "durée de vie réelle des annonces" },
  { value: "9 %", label: "de full remote", note: "sur celles qui le précisent" },
  { value: "750 €", label: "le rôle le mieux payé", note: "directeur de projet · 72 annonces" },
];

export default function Ressources() {
  return (
    <div>
      <Nav />

      <div className={styles.hero}>
        <div className={styles.heroPulse} />
        <div className={styles.heroContent}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowDash} />
            <span className={section.eyebrow}>Ressources</span>
          </div>
          <h1 className={styles.heroTitle}>
            La méthode est gratuite. L&apos;outil qui l&apos;exécute est payant.
          </h1>
          <p className={styles.heroLead}>
            Les modèles que nous installons en mission se téléchargent sans laisser d&apos;email.
            Servez-vous : c&apos;est fait pour circuler — et pour que vous sachiez à quoi ressemble un
            pilotage tenu avant de payer quoi que ce soit.
          </p>
        </div>
      </div>

      <div className={styles.plain}>
        <SectionDivider />
        <div className={styles.wrap}>
          <div className={`${styles.kitHead} reveal`}>
            <h2 className={styles.h2}>La boîte à outils — gratuite</h2>
            <div className={styles.kitNote}>PDF · aucun email demandé</div>
          </div>
          <div className={`${styles.kitGrid} reveal`}>
            {KIT.map((k) => (
              <a key={k.href} href={k.href} className={styles.kitCard}>
                <div className={styles.kitKicker}>{k.kicker}</div>
                <div className={styles.kitTitle}>{k.title}</div>
                <div className={styles.kitText}>{k.text}</div>
                <div className={styles.kitDownload}>Télécharger ↓</div>
              </a>
            ))}
            <div className={styles.kitNext}>
              <div className={styles.kitKicker}>Et ensuite</div>
              <div className={styles.kitTitle}>Les mêmes modèles, exécutés</div>
              <div className={styles.kitNextText}>
                Ces PDF sont la méthode. L&apos;outil PPM les tient à jour tout seul, calcule les écarts
                et sort la vue COMEX.
              </div>
              <a href="/tarifs" className={styles.kitNextLink}>
                Voir les tarifs →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.releve}>
        <div className={styles.releveInner}>
          <div className={`${styles.headBlock} reveal`}>
            <div className={section.eyebrow}>Le relevé du marché</div>
            <h2 className={styles.h2Balance}>Un labo mesure. Voici ce que nous mesurons.</h2>
            <p className={styles.headLead}>
              Chaque jour, les annonces de missions de pilotage sont collectées et suivies jusqu&apos;à
              leur disparition. Les chiffres sont publics, recalculés à chaque relevé, publiés avec leurs
              limites.
            </p>
          </div>
          <div className={`${styles.statGrid} reveal`}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statNote}>{s.note}</div>
              </div>
            ))}
          </div>
          <div className={styles.releveFoot}>
            <div className={styles.releveFootNote}>
              Mesuré le 9 septembre 2026 · 6 874 annonces suivies depuis leur parution.
            </div>
            <a href="https://clairevandesype.com/releve/le-releve.pdf" className={section.link}>
              Les 4 planches du jour, PDF ↓
            </a>
          </div>
        </div>
      </div>

      <div className={styles.plain}>
        <SectionDivider />
        <div className={styles.wrapTall}>
          <div className={`${styles.headBlock} reveal`}>
            <div className={section.eyebrow}>Apprendre</div>
            <h2 className={styles.h2Balance}>Les guides et la formation</h2>
            <p className={styles.headLead}>
              Un guide tient dans une soirée et se pratique le lendemain. La formation, elle, se fait sur
              vos propres projets — et dans l&apos;outil.
            </p>
          </div>

          <div className={`${styles.guideGrid} reveal`}>
            <div className={styles.guideCard}>
              <div className={styles.guideTop}>
                <div className={styles.guideKicker}>Guide · disponible</div>
                <div className={styles.guidePrice}>12 €</div>
              </div>
              <div className={styles.guideTitle}>Le marché du pilotage</div>
              <div className={styles.guideText}>
                Ce que des milliers d&apos;annonces disent des TJM, du remote et de la durée de vie des
                missions. 27 pages, les fourchettes par rôle, la carte des bassins, et comment défendre
                un chiffre.
              </div>
              <a href="https://clairevandesype.com/" className={styles.guideLink}>
                Acheter le guide →
              </a>
            </div>

            <div className={styles.guideCardFeatured}>
              <div className={styles.guideTop}>
                <div className={styles.guideKicker}>Formation à l&apos;outil</div>
                <div className={styles.guidePriceGlow}>890 €</div>
              </div>
              <div className={styles.guideTitle}>Prendre en main l&apos;outil PPM</div>
              <div className={styles.guideTextBright}>
                Une demi-journée, jusqu&apos;à six personnes : import de vos fichiers, paramétrage de la
                grille d&apos;arbitrage, premier comité préparé avec vous. Éligible OPCO.
              </div>
              <a href="/atelier#demo" className={styles.guideLink}>
                Demander une date →
              </a>
            </div>

            <div className={styles.guideCardMuted}>
              <div className={styles.guideTop}>
                <div className={styles.guideKickerMuted}>Parcours métier</div>
                <div className={styles.guidePrice}>1 290 €</div>
              </div>
              <div className={styles.guideTitle}>Piloter par la valeur</div>
              <div className={styles.guideText}>
                Apprendre le métier : quatre modules vidéo, les cahiers d&apos;exercices et leurs
                corrigés, les modèles de la boîte à outils. 20 h, à votre rythme. Offre accompagnée à
                1 680 €.
              </div>
              <a href="https://clairevandesype.com/" className={styles.guideLink}>
                Le programme →
              </a>
            </div>
          </div>

          <div className={styles.guideNotes}>
            <div className={styles.guideNote}>
              <strong>En préparation —</strong> Prendre un pilotage en main · Le cahier d&apos;exercices
              PMO · Lire un portefeuille.
            </div>
            <div className={styles.guideNote}>
              <strong>Déjà client de l&apos;outil —</strong> la formation à l&apos;outil est remisée de
              30 % la première année d&apos;abonnement.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <div className={styles.ctaGrid} />
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Les modèles vous ont servi&nbsp;? L&apos;outil les tient à jour.
          </h2>
          <div className={styles.ctaActions}>
            <a href="/atelier#demo" className={styles.btnPrimary}>
              Demander une démo
            </a>
            <a href="/outil" className={styles.btnSecondary}>
              Voir les modules
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

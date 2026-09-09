import styles from "./Methode.module.css";
import section from "./section.module.css";
import SectionDivider from "./SectionDivider";

const STATS = [
  { num: "12 ans", label: "de pilotage" },
  { num: "150 M€", label: "de budgets IT gérés" },
  { num: "500+", label: "projets pilotés" },
  { num: "10+", label: "secteurs" },
];

const LOGOS = [
  { src: "https://clairevandesype.com/marques/gsk.png", alt: "GSK" },
  { src: "https://clairevandesype.com/marques/thales.png", alt: "Thales" },
  { src: "https://clairevandesype.com/marques/chanel.png", alt: "Chanel" },
  { src: "https://clairevandesype.com/marques/la-poste.png", alt: "La Poste Groupe" },
  { src: "https://clairevandesype.com/marques/sgd-pharma.png", alt: "SGD Pharma" },
  { src: "https://clairevandesype.com/marques/bpifrance.png", alt: "Bpifrance" },
  { src: "https://clairevandesype.com/marques/rexel.png", alt: "Rexel" },
  { src: "https://clairevandesype.com/marques/coface.png", alt: "Coface" },
];

export default function Methode() {
  return (
    <div id="methode" className={styles.section}>
      <SectionDivider />
      <div className={section.container}>
        <div className={`${styles.grid} reveal`}>
          <div className={styles.copy}>
            <div className={styles.headRow}>
              <span className={section.headNum}>04</span>
              <span className={section.eyebrow}>La méthode</span>
            </div>
            <h2 className={section.heading}>Conçu en mission, pas en réunion produit</h2>
            <p className={styles.intro}>
              PMO Laboratory est l&apos;atelier d&apos;outils de <strong>Claire Van De Sype</strong>, consultante en
              direction de projet et pilotage financier. L&apos;outil PPM reprend les modèles qu&apos;elle installe
              chez ses clients — grille d&apos;arbitrage, tableau de bord de portefeuille, registre des risques — et
              les rend utilisables sans elle.
            </p>
            <a href="/atelier" className={section.link}>
              L&apos;atelier, le terrain et les preuves →
            </a>
          </div>
          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.logos}>
          <div className={styles.logosLabel}>Les programmes sur lesquels la méthode a été construite</div>
          <div className={styles.logoRow}>
            {LOGOS.map((l) => (
              <div key={l.alt} className={styles.logoPlate}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.alt} className={styles.logoImg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

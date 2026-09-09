import styles from "./Hero.module.css";
import MockApp from "./MockApp";

const FEATURES = [
  {
    title: "Le portefeuille, pas le tableur",
    text: "Chaque projet a un état, un propriétaire et une décision attendue. Toujours à jour, jamais reconstruit la veille du COMEX.",
  },
  {
    title: "La charge avant la date",
    text: "L'outil vous dit qui est en surcharge la semaine où vous promettez un jalon — avant que vous ne le promettiez.",
  },
  {
    title: "L'arbitrage, écrit",
    text: "Une grille, des critères pondérés, une trace. Les décisions ne se prennent plus dans les couloirs.",
  },
];

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.rays} />
      <div className={styles.pulse} />

      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.copy}>
            <div className={styles.eyebrowWrap}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDash} />
                <span className={styles.eyebrowText}>Outil PPM en ligne · abonnement SaaS</span>
              </div>
              <div className={styles.ruler} />
            </div>
            <h1 className={styles.title}>
              Vos projets, leur charge, vos arbitrages.
              <br />
              Sur un écran.
            </h1>
            <p className={styles.lead}>
              Le pilotage de portefeuille dans votre navigateur. Rien à installer, aucune licence à négocier, et une
              seule source de vérité — parce que trois fichiers mentent toujours.
            </p>

            <div className={styles.actions}>
              <div className={styles.actionsRow}>
                <a href="/atelier#demo" className={styles.btnPrimary}>
                  Demander une démo
                </a>
                <a href="/tarifs" className={styles.btnSecondary}>
                  Voir les tarifs
                </a>
              </div>
              <div className={styles.priceNote}>
                À partir de <strong>39 € HT / mois</strong> · essai de 14 jours · hébergé en France
              </div>
            </div>
          </div>

          <div className={styles.features}>
            <div className={styles.featureList}>
              {FEATURES.map((f) => (
                <div key={f.title}>
                  <div className={styles.featureTitle}>{f.title}</div>
                  <div className={styles.featureText}>{f.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <MockApp />
        <div className={styles.caption}>
          Démonstrateur — cliquez les onglets, déplacez les pondérations. Données d&apos;exemple.
        </div>
      </div>
    </div>
  );
}

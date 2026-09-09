import styles from "./Acces.module.css";

const TOPICS = [
  "Arbitrage de portefeuille",
  "Tableau de bord COMEX",
  "Charge & capacité",
  "Registre des risques",
  "Suivi budgétaire",
];

export default function Acces() {
  return (
    <div id="acces" className={styles.section}>
      <div className={styles.grid} />
      <div className={styles.pulse} />
      <div className={styles.content}>
        <div className={styles.eyebrow}>Démo</div>
        <h2 className={styles.title}>Trente minutes, votre fichier, notre écran</h2>
        <p className={styles.lead}>
          On importe votre portefeuille pendant l&apos;appel et vous repartez avec sa vue COMEX — que vous
          souscriviez ou non. Dites-nous d&apos;abord ce qui vous manque le plus.
        </p>

        <div className={styles.chips}>
          {TOPICS.map((t) => (
            <button key={t} type="button" className={styles.chip}>
              {t}
            </button>
          ))}
        </div>

        <form className={styles.form}>
          <input type="email" placeholder="votre@email.pro" className={styles.input} required />
          <a href="/atelier#demo" className={styles.submit}>
            Demander une démo
          </a>
        </form>
        <div className={styles.fine}>Essai de 14 jours · sans engagement · export de vos données à tout moment</div>
      </div>
    </div>
  );
}

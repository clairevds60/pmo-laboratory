import styles from "./OutilCta.module.css";

export default function OutilCta() {
  return (
    <div className={styles.section}>
      <div className={styles.grid} />
      <div className={styles.content}>
        <h2 className={styles.title}>Voyez-le sur votre propre portefeuille</h2>
        <p className={styles.lead}>
          Trente minutes, votre fichier, notre écran. Vous repartez avec la vue COMEX de vos projets, que vous
          souscriviez ou non.
        </p>
        <div className={styles.actions}>
          <a href="/atelier#demo" className={styles.btnPrimary}>
            Demander une démo
          </a>
          <a href="/tarifs" className={styles.btnSecondary}>
            Voir les tarifs
          </a>
        </div>
      </div>
    </div>
  );
}

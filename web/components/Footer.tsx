import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoPmo}>PMO</span>
            <span className={styles.logoLab}>LAB</span>
          </div>
          <div className={styles.rule} />
          <div className={styles.tagline}>
            L&apos;outil PPM en ligne pour piloter un portefeuille — dans votre navigateur.
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.columnTitle}>L&apos;outil</div>
            <a href="/outil" className={styles.columnLink}>Les cinq modules</a>
            <a href="/tarifs" className={styles.columnLink}>Tarifs</a>
            <a href="/ressources" className={styles.columnLink}>Ressources</a>
          </div>
          <div className={styles.column}>
            <div className={styles.columnTitle}>L&apos;atelier</div>
            <a href="/atelier" className={styles.columnLink}>Claire Van De Sype</a>
            <a href="https://clairevandesype.com/" className={styles.columnLink}>Modèles sous licence</a>
            <a href="https://www.linkedin.com/in/claire-vandesype" className={styles.columnLink}>LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>PMO Laboratory · © Claire Van De Sype · Tous droits réservés</div>
    </div>
  );
}

import styles from "./OutilHero.module.css";

export default function OutilHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.pulse} />
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDash} />
          <span className={styles.eyebrowText}>L&apos;outil PPM · SaaS</span>
        </div>
        <h1 className={styles.title}>
          Cinq modules, un seul portefeuille. Ce que vous faisiez dans six fichiers.
        </h1>
        <p className={styles.lead}>
          Chaque module reprend un livrable installé en mission — et le rend utilisable en autonomie. Hébergé en
          France, accessible depuis un navigateur, facturé à l&apos;abonnement.
        </p>
      </div>
    </div>
  );
}

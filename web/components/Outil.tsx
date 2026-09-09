import styles from "./Outil.module.css";
import section from "./section.module.css";

const FEATURES = [
  {
    num: "01",
    title: "La source unique",
    text: "Un portefeuille, un état, un propriétaire par ligne. Fini le fichier de la DSI, celui du métier et celui du COMEX qui ne disent pas la même chose.",
  },
  {
    num: "02",
    title: "La charge et la capacité",
    text: "Qui est engagé sur quoi, semaine par semaine. La surcharge se voit avant la date, pas au moment où le jalon saute.",
  },
  {
    num: "03",
    title: "La grille d'arbitrage",
    text: "Des critères pondérés, une décision par projet, une trace datée. La même grille que celle installée en mission depuis douze ans.",
  },
  {
    num: "04",
    title: "La vue COMEX",
    text: "Prévu, réalisé, reste à faire — et la décision attendue. Une page qu'un comité lit en deux minutes et sur laquelle il tranche.",
  },
];

export default function Outil() {
  return (
    <div id="outil" className={styles.section}>
      <div className={styles.glow} />
      <div className={section.container} style={{ position: "relative" }}>
        <div className={`${section.headRow} reveal`}>
          <div className={section.headNum}>03</div>
          <div className={section.headBody}>
            <div className={section.eyebrow}>Ce que fait l&apos;outil</div>
            <h2 className={section.heading}>Quatre gestes de pilotage, outillés</h2>
            <a href="/outil" className={section.link}>
              Les cinq modules en détail →
            </a>
          </div>
        </div>

        <div className={`${styles.grid} reveal`}>
          {FEATURES.map((f) => (
            <div key={f.num} className={styles.card}>
              <div className={styles.num}>{f.num}</div>
              <div className={styles.cardTitle}>{f.title}</div>
              <div className={styles.cardText}>{f.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

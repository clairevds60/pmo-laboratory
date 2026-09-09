import styles from "./PourQui.module.css";
import section from "./section.module.css";
import SectionDivider from "./SectionDivider";

const CARDS = [
  {
    title: "PMO",
    text: "Vous tenez le portefeuille à jour à la main, et vous reconstruisez le reporting à chaque comité. L'outil garde la source unique et sort la vue COMEX en une page.",
  },
  {
    title: "Chefs de projet",
    text: "Vous défendez des jalons devant des gens qui ne voient pas la charge. L'outil met votre plan et la capacité réelle de l'équipe côte à côte — avant l'engagement.",
  },
  {
    title: "DSI",
    text: "Vous arbitrez sous contrainte budgétaire, souvent sans grille. L'outil pose coût, charge et valeur sur les mêmes critères pondérés, et garde la trace de la décision.",
  },
];

export default function PourQui() {
  return (
    <div id="pourqui" className={styles.section}>
      <SectionDivider />
      <div className={section.container}>
        <div className={`${section.headRow} reveal`}>
          <div className={section.headNum}>01</div>
          <div className={section.headBody}>
            <div className={section.eyebrow}>Pour qui</div>
            <h2 className={section.heading}>Trois métiers, un même écran</h2>
          </div>
        </div>
        <div className={`${styles.cards} reveal`}>
          {CARDS.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.dash} />
              <div className={styles.cardTitle}>{c.title}</div>
              <div className={styles.cardText}>{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

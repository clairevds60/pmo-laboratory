import section from "@/components/section.module.css";
import styles from "./NeFaitPas.module.css";

const ITEMS = [
  "Pas de gestion de tâches au quotidien — gardez Jira ou votre backlog.",
  "Pas de comptabilité — l'outil suit des engagements et des consommés, pas des écritures.",
  "Pas de Gantt à 400 lignes — des jalons qui font autorité, pas un plan illisible.",
  "Pas de reporting sans vous — un COMEX se prépare ; l'outil vous fait gagner la mise en forme.",
];

export default function NeFaitPas() {
  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <div className={section.eyebrow}>Honnêtement</div>
          <h2 className={styles.title}>Ce que l&apos;outil ne fait pas</h2>
          <p className={styles.text}>
            Un outil qui prétend tout faire ne fait rien de bien. PMO Lab pilote un portefeuille et outille des
            décisions — il ne remplace ni votre gestion de tâches, ni votre ERP, ni votre comptabilité.
          </p>
        </div>
        <div className={styles.list}>
          {ITEMS.map((i) => (
            <div key={i} className={styles.item}>
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

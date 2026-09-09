import type { ReactNode } from "react";
import styles from "./Modules.module.css";

const CYAN = "#00D9FF";
const AMBER = "#F59E0B";
const RED = "#EF4444";
const GREEN = "#10B981";
const PURPLE = "#6B46C1";

type Chip = { label: string; color: string };

function ModuleRow({
  num,
  label,
  title,
  text,
  bullets,
  last,
  children,
}: {
  num: string;
  label: string;
  title: string;
  text: string;
  bullets: string[];
  last?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`${styles.module} ${last ? styles.moduleLast : ""}`}>
      <div className={styles.copy}>
        <div className={styles.kicker}>
          <span className={styles.kickerNum}>{num}</span>
          <span className={styles.kickerLabel}>{label}</span>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.rule} />
        <p className={styles.text}>{text}</p>
        <div className={styles.bullets}>
          {bullets.map((b) => (
            <div key={b} className={styles.bullet}>
              <span className={styles.bulletDot} />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}

/* ---------------- 01 portefeuille ---------------- */

const PORTEFEUILLE: { nom: string; chips: Chip[] }[] = [
  {
    nom: "Bascule SAP S/4HANA",
    chips: [
      { label: "Cutover", color: CYAN },
      { label: "Arbitrer", color: AMBER },
    ],
  },
  {
    nom: "Refonte SIRH — paie",
    chips: [
      { label: "Recette", color: CYAN },
      { label: "À surveiller", color: AMBER },
    ],
  },
  {
    nom: "Portail fournisseurs",
    chips: [
      { label: "Build", color: CYAN },
      { label: "Tenu", color: GREEN },
    ],
  },
  {
    nom: "Migration data centre",
    chips: [
      { label: "Cadrage", color: CYAN },
      { label: "Tenu", color: GREEN },
    ],
  },
];

/* ---------------- 02 charge ---------------- */

const CHARGE: { profil: string; barre: string; couleur: string; pct: string; texte: string }[] = [
  { profil: "Chef de projet A", barre: "100%", couleur: RED, pct: "112 %", texte: RED },
  { profil: "Business analyst", barre: "96%", couleur: AMBER, pct: "96 %", texte: AMBER },
  { profil: "Architecte SI", barre: "74%", couleur: CYAN, pct: "74 %", texte: "rgba(255,255,255,0.82)" },
  { profil: "PMO", barre: "61%", couleur: CYAN, pct: "61 %", texte: "rgba(255,255,255,0.82)" },
  { profil: "Recette métier", barre: "38%", couleur: CYAN, pct: "38 %", texte: "rgba(255,255,255,0.82)" },
];

/* ---------------- 03 arbitrage ---------------- */

const ARBITRAGE: {
  nom: string;
  valeur: string;
  risque: string;
  cout: string;
  score: string;
  haut: boolean;
}[] = [
  { nom: "Bascule SAP", valeur: "9", risque: "8", cout: "7", score: "7,4", haut: true },
  { nom: "Data centre", valeur: "8", risque: "6", cout: "8", score: "7,1", haut: true },
  { nom: "Refonte SIRH", valeur: "7", risque: "5", cout: "6", score: "6,1", haut: true },
  { nom: "Portail fourn.", valeur: "5", risque: "3", cout: "3", score: "4,8", haut: false },
];

/* ---------------- 04 risques ---------------- */

const RISQUES: { nom: string; niveau: Chip; meta: string }[] = [
  { nom: "Reprise de données incomplète", niveau: { label: "Critique", color: RED }, meta: "M. Leroy · 24/09" },
  { nom: "Recette métier non staffée", niveau: { label: "Élevé", color: AMBER }, meta: "A. Diallo · 30/09" },
  { nom: "Interface paie non gelée", niveau: { label: "Élevé", color: AMBER }, meta: "C. Meyer · 02/10" },
  { nom: "Fenêtre de bascule week-end", niveau: { label: "Maîtrisé", color: GREEN }, meta: "Clos le 05/09" },
];

/* ---------------- 05 budget ---------------- */

const BUDGET_STATS: { valeur: string; label: string; color?: string; shadow?: string }[] = [
  { valeur: "18,4 M€", label: "engagé" },
  { valeur: "11,2 M€", label: "consommé", color: CYAN, shadow: "0 0 18px rgba(0,217,255,0.7)" },
  { valeur: "7,2 M€", label: "reste à faire" },
  { valeur: "+4 %", label: "écart budget", color: AMBER },
];

const BUDGET_BARS: { label: string; barre: string; couleur: string; shadow: string; valeur: string }[] = [
  { label: "CAPEX", barre: "64%", couleur: CYAN, shadow: "0 0 12px #00D9FF", valeur: "11,8 M€" },
  { label: "OPEX", barre: "36%", couleur: PURPLE, shadow: "none", valeur: "6,6 M€" },
];

export default function Modules() {
  return (
    <div className={styles.wrap}>
      {/* 01 PORTEFEUILLE */}
      <ModuleRow
        num="01"
        label="Module portefeuille"
        title="La source unique"
        text="Un projet, une ligne, un propriétaire, un état. Le fichier de la DSI, celui du métier et celui du COMEX cessent de se contredire parce qu'il n'y en a plus qu'un."
        bullets={[
          "Un état de santé par projet, daté et signé",
          "Phases et jalons qui font autorité",
          "Import de vos fichiers Excel existants",
        ]}
      >
        <div className={styles.panel}>
          <div className={styles.panelHead}>Portefeuille · état du jour</div>
          <div className={styles.pfBody}>
            {PORTEFEUILLE.map((p, i) => (
              <div
                key={p.nom}
                className={`${styles.pfRow} ${i === PORTEFEUILLE.length - 1 ? styles.pfRowLast : ""}`}
              >
                <div className={styles.pfName}>{p.nom}</div>
                <div className={styles.pfChips}>
                  {p.chips.map((c) => (
                    <span key={c.label} className={styles.chip} style={{ color: c.color }}>
                      {c.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ModuleRow>

      {/* 02 CHARGE */}
      <ModuleRow
        num="02"
        label="Module charge"
        title="La charge avant la date"
        text="La surcharge se voit la semaine où vous êtes tenté de promettre un jalon — pas le jour où il saute. Par profil, par projet, par semaine."
        bullets={[
          "Capacité déclarée contre charge engagée",
          "Alerte au-delà de 100 % avant l'engagement",
          "Simulation : ce que coûte un jalon avancé",
        ]}
      >
        <div className={styles.panel}>
          <div className={styles.panelHead}>Charge par profil · semaine 38</div>
          <div className={styles.chBody}>
            {CHARGE.map((c) => (
              <div key={c.profil} className={styles.chRow}>
                <div className={styles.chProfil}>{c.profil}</div>
                <div className={styles.chBarWrap}>
                  <div className={styles.chTrack}>
                    <div
                      className={styles.barFill}
                      style={{ width: c.barre, background: c.couleur, boxShadow: `0 0 10px ${c.couleur}` }}
                    />
                  </div>
                  <div className={styles.chPct} style={{ color: c.texte }}>
                    {c.pct}
                  </div>
                </div>
              </div>
            ))}
            <div className={`${styles.note} ${styles.chNote}`}>
              Deux profils au-delà de la capacité : le jalon du 30/09 n&apos;est pas tenable en l&apos;état.
            </div>
          </div>
        </div>
      </ModuleRow>

      {/* 03 ARBITRAGE */}
      <ModuleRow
        num="03"
        label="Module arbitrage"
        title="La grille, pas le couloir"
        text="Des critères pondérés, un score, une décision par projet et une trace datée. La même grille que celle installée en mission depuis douze ans."
        bullets={[
          "Critères et pondérations paramétrables",
          "Décision, décideur et date conservés",
          "Compte rendu de comité exportable",
        ]}
      >
        <div className={styles.panel}>
          <div className={styles.panelHead}>Grille d&apos;arbitrage · comité du 18 sept.</div>
          <div className={styles.arBody}>
            <div className={styles.arHead}>
              <div>Projet</div>
              <div className={styles.arHeadRight}>Valeur</div>
              <div className={styles.arHeadRight}>Risque</div>
              <div className={styles.arHeadRight}>Coût</div>
              <div className={styles.arHeadRight}>Score</div>
            </div>
            {ARBITRAGE.map((a) => (
              <div key={a.nom} className={styles.arRow}>
                <div className={styles.arName}>{a.nom}</div>
                <div className={styles.arNum}>{a.valeur}</div>
                <div className={styles.arNum}>{a.risque}</div>
                <div className={styles.arNum}>{a.cout}</div>
                <div
                  className={styles.arScore}
                  style={
                    a.haut
                      ? { color: CYAN, textShadow: "0 0 14px rgba(0,217,255,0.8)" }
                      : { color: "rgba(255,255,255,0.7)" }
                  }
                >
                  {a.score}
                </div>
              </div>
            ))}
            <div className={`${styles.note} ${styles.arNote}`}>
              Pondération : valeur 40 % · risque 35 % · coût 25 %
            </div>
          </div>
        </div>
      </ModuleRow>

      {/* 04 RISQUES */}
      <ModuleRow
        num="04"
        label="Module risques"
        title="Quinze lignes, des propriétaires nommés"
        text="Un registre qui tient sur un écran : au-delà de quinze risques, personne ne les traite. Chaque ligne a un propriétaire et une date de revue."
        bullets={[
          "Criticité, propriétaire, mitigation datée",
          "Revue automatique des lignes en retard",
          "Historique des risques clos",
        ]}
      >
        <div className={styles.panel}>
          <div className={styles.panelHead}>Registre des risques · 15 lignes maximum</div>
          <div className={styles.rqBody}>
            {RISQUES.map((r, i) => (
              <div key={r.nom} className={`${styles.rqRow} ${i === RISQUES.length - 1 ? styles.rqRowLast : ""}`}>
                <div className={styles.rqName}>{r.nom}</div>
                <div className={styles.rqMeta}>
                  <span className={styles.chip} style={{ color: r.niveau.color }}>
                    {r.niveau.label}
                  </span>
                  <span className={styles.rqOwner}>{r.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ModuleRow>

      {/* 05 BUDGET */}
      <ModuleRow
        num="05"
        label="Module budget"
        title="La trajectoire coûts"
        text="Engagé, consommé, reste à faire — CAPEX et OPEX séparés dès la saisie. La trajectoire budgétaire au même rythme que la trajectoire délais."
        bullets={[
          "CAPEX / OPEX distingués dès la saisie",
          "Écart budget calculé en continu",
          "Vue COMEX en une page, prête à projeter",
        ]}
        last
      >
        <div className={styles.panel}>
          <div className={styles.panelHead}>Suivi budgétaire · portefeuille 2026</div>
          <div className={styles.bdBody}>
            <div className={styles.bdStats}>
              {BUDGET_STATS.map((s) => (
                <div key={s.label}>
                  <div className={styles.bdStatNum} style={{ color: s.color, textShadow: s.shadow }}>
                    {s.valeur}
                  </div>
                  <div className={styles.bdStatLabel}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className={styles.bdBars}>
              {BUDGET_BARS.map((b) => (
                <div key={b.label} className={styles.bdBarRow}>
                  <div className={styles.bdBarLabel}>{b.label}</div>
                  <div className={styles.bdTrack}>
                    <div
                      className={styles.barFill}
                      style={{ width: b.barre, background: b.couleur, boxShadow: b.shadow }}
                    />
                  </div>
                  <div className={styles.bdBarValue}>{b.valeur}</div>
                </div>
              ))}
            </div>
            <div className={`${styles.note} ${styles.bdNote}`}>
              Trajectoire recalculée à chaque saisie — pas de consolidation mensuelle.
            </div>
          </div>
        </div>
      </ModuleRow>
    </div>
  );
}

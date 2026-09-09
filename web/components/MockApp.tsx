"use client";

import { useState } from "react";
import styles from "./MockApp.module.css";

const AMBER = "#F59E0B";
const RED = "#EF4444";
const GREEN = "#10B981";
const CYAN = "#00D9FF";

type Vue = "portefeuille" | "charge" | "arbitrage";

const PROJETS = [
  {
    nom: "Bascule SAP S/4HANA — vague 1",
    owner: "Direction industrielle",
    phase: "Cutover",
    charge: "112 %",
    chargePct: "100%",
    chargeColor: RED,
    ecart: "+14 j",
    ecartColor: RED,
    decision: "Arbitrer",
    chipColor: AMBER,
  },
  {
    nom: "Refonte SIRH — paie & temps",
    owner: "DRH",
    phase: "Recette",
    charge: "94 %",
    chargePct: "94%",
    chargeColor: AMBER,
    ecart: "+3 j",
    ecartColor: AMBER,
    decision: "Surveiller",
    chipColor: AMBER,
  },
  {
    nom: "Portail fournisseurs",
    owner: "Achats",
    phase: "Build",
    charge: "68 %",
    chargePct: "68%",
    chargeColor: CYAN,
    ecart: "0 j",
    ecartColor: GREEN,
    decision: "Tenu",
    chipColor: GREEN,
  },
  {
    nom: "Migration data centre",
    owner: "DSI Infrastructure",
    phase: "Cadrage",
    charge: "41 %",
    chargePct: "41%",
    chargeColor: CYAN,
    ecart: "−2 j",
    ecartColor: GREEN,
    decision: "Tenu",
    chipColor: GREEN,
  },
  {
    nom: "Schéma directeur SI 2027-2030",
    owner: "COMEX",
    phase: "Scénarios",
    charge: "77 %",
    chargePct: "77%",
    chargeColor: CYAN,
    ecart: "+6 j",
    ecartColor: AMBER,
    decision: "Arbitrer",
    chipColor: AMBER,
  },
];

const ARBITRAGE_BASE = [
  { nom: "Bascule SAP S/4HANA", valeur: 9, risque: 8, cout: 7 },
  { nom: "Refonte SIRH — paie", valeur: 7, risque: 5, cout: 6 },
  { nom: "Migration data centre", valeur: 8, risque: 6, cout: 8 },
  { nom: "Schéma directeur SI", valeur: 6, risque: 7, cout: 5 },
  { nom: "Portail fournisseurs", valeur: 5, risque: 3, cout: 3 },
];

const CHARGE = [
  { profil: "Chef de projet A", pct: "112 %", barre: "100%", couleur: RED, texte: RED },
  { profil: "Business analyst", pct: "96 %", barre: "96%", couleur: AMBER, texte: AMBER },
  { profil: "Architecte SI", pct: "74 %", barre: "74%", couleur: CYAN, texte: "rgba(255,255,255,0.86)" },
  { profil: "PMO", pct: "61 %", barre: "61%", couleur: CYAN, texte: "rgba(255,255,255,0.86)" },
  { profil: "Recette métier", pct: "38 %", barre: "38%", couleur: CYAN, texte: "rgba(255,255,255,0.86)" },
];

const NOTES: Record<Vue, string> = {
  portefeuille: "Capacité consommée sur la semaine 38 — 4 profils au-delà de 100 %.",
  charge: "Deux profils au-delà de la capacité : le jalon du 30/09 n'est pas tenable en l'état.",
  arbitrage: "Déplacez les pondérations : le classement et les décisions se recalculent en direct.",
};

const TABS: { id: Vue; label: string }[] = [
  { id: "portefeuille", label: "Portefeuille" },
  { id: "charge", label: "Charge" },
  { id: "arbitrage", label: "Arbitrage" },
];

export default function MockApp() {
  const [vue, setVue] = useState<Vue>("portefeuille");
  const [pValeur, setPValeur] = useState(40);
  const [pRisque, setPRisque] = useState(35);
  const [pCout, setPCout] = useState(25);

  const somme = Math.max(1, pValeur + pRisque + pCout);
  const pct = (w: number) => Math.round((w / somme) * 100) + " %";

  const arbitrage = ARBITRAGE_BASE.map((p) => ({
    ...p,
    n: (p.valeur * pValeur + p.risque * pRisque + p.cout * pCout) / somme,
  }))
    .sort((a, b) => b.n - a.n)
    .map((p, i) => ({
      ...p,
      rang: "0" + (i + 1),
      score: p.n.toFixed(1).replace(".", ","),
      scoreColor: i === 0 ? CYAN : "rgba(255,255,255,0.86)",
      scoreOmbre: i === 0 ? "0 0 16px rgba(0,217,255,0.85)" : "none",
      decision: i < 2 ? "Financé" : i < 4 ? "Conditionné" : "Reporté",
      chipColor: i < 2 ? GREEN : i < 4 ? AMBER : "rgba(255,255,255,0.6)",
    }));

  return (
    <div className={styles.panel}>
      <div className={styles.titlebar}>
        <div className={styles.dots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <div className={styles.urlbar}>app.pmo-laboratory.com/portefeuille</div>
      </div>

      <div className={styles.body}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarLogo}>
            <span className={styles.pmo}>PMO</span>
            <span className={styles.lab}>LAB</span>
          </div>
          <div className={`${styles.sidebarItem} ${styles.sidebarItemActive}`}>Portefeuille</div>
          <div className={styles.sidebarItem}>Charge &amp; capacité</div>
          <div className={styles.sidebarItem}>Arbitrages</div>
          <div className={styles.sidebarItem}>Risques</div>
          <div className={styles.sidebarItem}>Budget</div>
          <div className={styles.sidebarFooter}>
            RELEVÉ 08.09.2026
            <br />
            source unique · 24 projets
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.headerRow}>
            <div>
              <div className={styles.headerLabel}>Vue COMEX</div>
              <div className={styles.headerTitle}>Portefeuille 2026</div>
            </div>
            <div className={styles.stats}>
              <div>
                <div className={styles.statNum}>24</div>
                <div className={styles.statLabel}>projets</div>
              </div>
              <div>
                <div className={styles.statNum} style={{ color: AMBER }}>3</div>
                <div className={styles.statLabel}>en dérive</div>
              </div>
              <div>
                <div className={styles.statNum}>18,4 M€</div>
                <div className={styles.statLabel}>engagés</div>
              </div>
              <div>
                <div className={styles.statNum} style={{ color: CYAN }}>4</div>
                <div className={styles.statLabel}>à arbitrer</div>
              </div>
            </div>
          </div>

          <div className={styles.tabs}>
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setVue(t.id)}
                className={`${styles.tab} ${vue === t.id ? styles.tabActive : ""}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {vue === "arbitrage" && (
            <>
              <div className={styles.sliders}>
                <SliderCol label="Valeur" value={pValeur} display={pct(pValeur)} onChange={setPValeur} />
                <SliderCol label="Risque maîtrisé" value={pRisque} display={pct(pRisque)} onChange={setPRisque} />
                <SliderCol label="Coût" value={pCout} display={pct(pCout)} onChange={setPCout} />
              </div>
              <div className={styles.arbHeadRow}>
                <div></div>
                <div>Projet</div>
                <div className={styles.right}>Val.</div>
                <div className={styles.right}>Risq.</div>
                <div className={styles.right}>Coût</div>
                <div className={styles.right}>Score</div>
                <div className={styles.right}>Décision</div>
              </div>
              {arbitrage.map((a) => (
                <div key={a.nom} className={styles.arbRow}>
                  <div className={styles.rank}>{a.rang}</div>
                  <div className={styles.projName}>{a.nom}</div>
                  <div className={styles.numCell}>{a.valeur}</div>
                  <div className={styles.numCell}>{a.risque}</div>
                  <div className={styles.numCell}>{a.cout}</div>
                  <div className={styles.scoreCell} style={{ color: a.scoreColor, textShadow: a.scoreOmbre }}>
                    {a.score}
                  </div>
                  <div className={styles.right}>
                    <span className={styles.chip} style={{ color: a.chipColor }}>
                      {a.decision}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}

          {vue === "charge" && (
            <div className={styles.chargeList}>
              {CHARGE.map((c) => (
                <div key={c.profil} className={styles.chargeRow}>
                  <div className={styles.chargeProfil}>{c.profil}</div>
                  <div className={styles.barTrack}>
                    <div
                      className={styles.barFill}
                      style={{ width: c.barre, background: c.couleur, boxShadow: `0 0 10px ${c.couleur}` }}
                    />
                  </div>
                  <div className={styles.chargePct} style={{ color: c.texte }}>
                    {c.pct}
                  </div>
                </div>
              ))}
            </div>
          )}

          {vue === "portefeuille" && (
            <>
              <div className={styles.pfHeadRow}>
                <div>Projet</div>
                <div>Phase</div>
                <div>Charge équipe</div>
                <div className={styles.right}>Écart</div>
                <div className={styles.right}>Décision</div>
              </div>
              {PROJETS.map((p) => (
                <div key={p.nom} className={styles.pfRow}>
                  <div>
                    <div className={styles.pfName}>{p.nom}</div>
                    <div className={styles.pfOwner}>{p.owner}</div>
                  </div>
                  <div className={styles.pfPhase}>{p.phase}</div>
                  <div className={styles.pfChargeWrap}>
                    <div className={styles.pfChargeTrack}>
                      <div
                        className={styles.barFill}
                        style={{ width: p.chargePct, background: p.chargeColor, boxShadow: `0 0 10px ${p.chargeColor}` }}
                      />
                    </div>
                    <div className={styles.pfChargeNum}>{p.charge}</div>
                  </div>
                  <div className={styles.pfEcart} style={{ color: p.ecartColor }}>
                    {p.ecart}
                  </div>
                  <div className={styles.right}>
                    <span className={styles.chip} style={{ color: p.chipColor }}>
                      {p.decision}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}

          <div className={styles.footerRow}>
            <div className={styles.footerNote}>{NOTES[vue]}</div>
            <button type="button" className={styles.footerLink} onClick={() => setVue("arbitrage")}>
              Ouvrir la grille d&apos;arbitrage →
            </button>
          </div>
        </div>
      </div>

      <div className={styles.sweepWrap}>
        <div className={styles.sweep} />
      </div>
    </div>
  );
}

function SliderCol({
  label,
  value,
  display,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className={styles.sliderCol}>
      <div className={styles.sliderHead}>
        <span className={styles.sliderLabel}>{label}</span>
        <span className={styles.sliderVal}>{display}</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={styles.sliderInput}
      />
    </div>
  );
}

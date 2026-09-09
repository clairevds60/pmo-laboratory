import styles from "./Courbe.module.css";
import section from "./section.module.css";
import SectionDivider from "./SectionDivider";

export default function Courbe() {
  return (
    <div id="courbe" className={styles.section}>
      <SectionDivider />
      <div className={section.container}>
        <div className={`${styles.headGrid} reveal`}>
          <div className={section.headRow}>
            <div className={section.headNum}>02</div>
            <div className={section.headBody}>
              <div className={section.eyebrow}>La sortie</div>
              <h2 className={section.heading}>L&apos;écart tient dans une courbe</h2>
            </div>
          </div>
          <p className={styles.intro}>
            Prévu contre réalisé, cumulés sur l&apos;année. C&apos;est la seule image dont un comité a besoin pour
            comprendre qu&apos;une décision est due — et le seul graphique que l&apos;outil produit sans que vous le
            demandiez.
          </p>
        </div>

        <div className={`${styles.chart} reveal`}>
          <div className={styles.chartHead}>
            <div className={styles.chartHeadTitle}>Avancement cumulé · portefeuille 2026</div>
            <div className={styles.legend}>
              <span className={styles.legendItem}>
                <span className={styles.legendSwatch} style={{ background: "rgba(255,255,255,0.45)" }} />
                <span style={{ color: "rgba(255,255,255,0.7)" }}>prévu</span>
              </span>
              <span className={styles.legendItem}>
                <span
                  className={styles.legendSwatch}
                  style={{ background: "#00D9FF", height: 3, boxShadow: "0 0 8px #00D9FF" }}
                />
                <span style={{ color: "#FFFFFF" }}>réalisé</span>
              </span>
              <span className={styles.legendItem}>
                <span className={styles.legendSwatch} style={{ background: "#F59E0B" }} />
                <span style={{ color: "#F59E0B" }}>écart</span>
              </span>
            </div>
          </div>
          <div className={styles.chartBody}>
            <svg
              viewBox="0 0 1000 340"
              className={styles.svg}
              role="img"
              aria-label="Courbe d'avancement cumulé : prévu 68 % contre réalisé 52 % en juillet, soit un écart de 16 points."
            >
              <line x1="52" y1="20" x2="960" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="52" y1="92" x2="960" y2="92" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="52" y1="164" x2="960" y2="164" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="52" y1="236" x2="960" y2="236" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <line x1="52" y1="308" x2="960" y2="308" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
              <text x="40" y="24" textAnchor="end" fill="rgba(255,255,255,0.5)" fontFamily="IBM Plex Mono, monospace" fontSize="11">100%</text>
              <text x="40" y="96" textAnchor="end" fill="rgba(255,255,255,0.5)" fontFamily="IBM Plex Mono, monospace" fontSize="11">75%</text>
              <text x="40" y="168" textAnchor="end" fill="rgba(255,255,255,0.5)" fontFamily="IBM Plex Mono, monospace" fontSize="11">50%</text>
              <text x="40" y="240" textAnchor="end" fill="rgba(255,255,255,0.5)" fontFamily="IBM Plex Mono, monospace" fontSize="11">25%</text>
              <text x="40" y="312" textAnchor="end" fill="rgba(255,255,255,0.5)" fontFamily="IBM Plex Mono, monospace" fontSize="11">0</text>
              <polyline
                points="70,304 151,293 232,269 313,235 394,194 475,151 556,113 637,81 718,55 799,37 880,26 942,20"
                fill="none"
                stroke="rgba(255,255,255,0.45)"
                strokeWidth="2"
                strokeDasharray="7 6"
                strokeLinejoin="round"
              />
              <line x1="556" y1="20" x2="556" y2="308" stroke="rgba(0,217,255,0.35)" strokeWidth="1" strokeDasharray="4 5" />
              <line x1="556" y1="113" x2="556" y2="159" stroke="#F59E0B" strokeWidth="2" />
              <line x1="548" y1="113" x2="564" y2="113" stroke="#F59E0B" strokeWidth="2" />
              <line x1="548" y1="159" x2="564" y2="159" stroke="#F59E0B" strokeWidth="2" />
              <polyline
                points="70,304 151,296 232,278 313,252 394,220 475,185 556,159"
                fill="none"
                stroke="#00D9FF"
                strokeWidth="3.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0 0 6px #00D9FF) drop-shadow(0 0 22px rgba(0,217,255,0.75))" }}
              />
              <circle cx="556" cy="159" r="7" fill="#00D9FF" style={{ filter: "drop-shadow(0 0 10px #00D9FF)" }} />
              <text x="578" y="140" fill="#F59E0B" fontFamily="IBM Plex Mono, monospace" fontSize="15" fontWeight="600">−16 pts</text>
              <text x="578" y="176" fill="rgba(255,255,255,0.62)" fontFamily="IBM Plex Mono, monospace" fontSize="12">aujourd&apos;hui</text>
              <text x="70" y="330" fill="rgba(255,255,255,0.5)" fontFamily="IBM Plex Mono, monospace" fontSize="11">JAN</text>
              <text x="313" y="330" fill="rgba(255,255,255,0.5)" fontFamily="IBM Plex Mono, monospace" fontSize="11">AVR</text>
              <text x="556" y="330" fill="rgba(255,255,255,0.5)" fontFamily="IBM Plex Mono, monospace" fontSize="11">JUIL</text>
              <text x="799" y="330" fill="rgba(255,255,255,0.5)" fontFamily="IBM Plex Mono, monospace" fontSize="11">OCT</text>
              <text x="905" y="330" fill="rgba(255,255,255,0.5)" fontFamily="IBM Plex Mono, monospace" fontSize="11">DÉC</text>
            </svg>
          </div>
          <div className={styles.chartFoot}>
            <div className={styles.chartFootText}>
              Seize points de retard en juillet : au rythme constaté, la cible de décembre tombe en février. La
              décision est due maintenant, pas en novembre.
            </div>
            <div className={styles.chartFootMono}>recalculé à chaque saisie</div>
          </div>
        </div>
      </div>
    </div>
  );
}

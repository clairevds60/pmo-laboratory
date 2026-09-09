import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import section from "@/components/section.module.css";
import styles from "./atelier.module.css";
import DemoPanel from "./DemoPanel";

export const metadata: Metadata = {
  title: "L'atelier — Claire Van De Sype · PMO Laboratory",
  description:
    "L'atelier d'outils de Claire Van De Sype, consultante en direction de projet, PMO et pilotage financier : douze ans de pilotage, 150 M€ de budgets IT, 500+ projets. Le terrain qui a écrit la méthode, et la démo de l'outil PPM.",
};

const STATS = [
  { num: "12 ans", label: "de pilotage" },
  { num: "150 M€", label: "de budgets IT gérés" },
  { num: "500+", label: "projets pilotés" },
  { num: "10+", label: "secteurs" },
];

const PRINCIPES = [
  {
    num: "01",
    title: "Construire pour partir",
    text: "Les rituels, les outils et les référentiels installés restent après le départ du consultant. Un PMO qui se rend indispensable a échoué — un outil qui vous rend captif aussi. Export complet de vos données, à tout moment.",
  },
  {
    num: "02",
    title: "Mesurer, pas estimer",
    text: "Le marché du pilotage est mesuré chaque matin et publié avec ses limites, parce que personne ne le fait. L'outil applique la même règle à votre portefeuille : chaque chiffre affiché dit d'où il vient.",
  },
  {
    num: "03",
    title: "Dire non assez tôt",
    text: "Tenir une date, ou annoncer la nouvelle suffisamment tôt pour qu'elle reste tenable. C'est exactement ce que fait le module charge : il vous donne l'argument avant l'engagement, pas après.",
  },
];

const LOGOS = [
  { src: "https://clairevandesype.com/marques/gsk.png", alt: "GSK" },
  { src: "https://clairevandesype.com/marques/thales.png", alt: "Thales" },
  { src: "https://clairevandesype.com/marques/chanel.png", alt: "Chanel" },
  { src: "https://clairevandesype.com/marques/la-poste.png", alt: "La Poste Groupe" },
  { src: "https://clairevandesype.com/marques/sgd-pharma.png", alt: "SGD Pharma" },
  { src: "https://clairevandesype.com/marques/invivo.png", alt: "Groupe InVivo" },
  { src: "https://clairevandesype.com/marques/bpifrance.png", alt: "Bpifrance" },
  { src: "https://clairevandesype.com/marques/rexel.png", alt: "Rexel" },
  { src: "https://clairevandesype.com/marques/coface.png", alt: "Coface" },
  { src: "https://clairevandesype.com/marques/henner.png", alt: "Groupe Henner" },
];

const MISSION_STATS = [
  { num: "3", label: "phases séquencées", green: false },
  { num: "12", label: "applications orchestrées", green: false },
  { num: "0", label: "rupture d'appro.", green: true },
];

const QUOTES = [
  {
    text: "« Elle construit des outils de pilotage qui permettent réellement d'arbitrer, de prioriser et de sécuriser l'exécution. »",
    author: "Cyril Zenouda · Program Manager · mission SGD Pharma",
  },
  {
    text: "« Claire a su reprendre au pied levé les activités de PMO dans le cadre d'un schéma directeur SI déjà lancé. »",
    author: "Associée, mc2i · responsable directe de la mission",
  },
];

const BULLETS = [
  "Aucune préparation : votre Excel actuel suffit.",
  "Essai de 14 jours ouvert à la fin de l'appel si vous le souhaitez.",
  "Vos données de démo sont supprimées si vous ne poursuivez pas.",
];

export default function Atelier() {
  return (
    <div>
      <Nav />

      {/* ------------------------------------------------------------ hero */}
      <div className={styles.hero}>
        <div className={styles.heroPulse} />
        <div className={styles.heroInner}>
          <div className={`${styles.heroCopy} reveal`}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowDash} />
              <span className={section.eyebrow}>L&apos;atelier</span>
            </div>
            <h1 className={styles.heroTitle}>Un outil écrit par quelqu&apos;un qui a tenu les délais</h1>
            <p className={styles.heroLead}>
              PMO Laboratory est l&apos;atelier d&apos;outils de <strong>Claire Van De Sype</strong>, consultante
              indépendante en direction de projet, PMO et pilotage financier. Douze ans à faire aboutir des
              portefeuilles, des budgets et des gouvernances — luxe, pharma, banque, assurance, industrie, énergie.
            </p>
            <p className={styles.heroLeadSub}>
              L&apos;outil PPM n&apos;est pas né d&apos;une étude de marché : c&apos;est la version industrialisée
              des fichiers qu&apos;elle reconstruisait à chaque mission. Le principe est le même que celui de ses
              interventions — installer ce qui reste quand elle repart.
            </p>
            <a href="https://clairevandesype.com/" className={section.link}>
              Le site de la consultante →
            </a>
          </div>
          <div className={styles.heroStats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------- trois principes */}
      <div id="principes" className={styles.principes}>
        <SectionDivider />
        <div className={styles.principesInner}>
          <h2 className={styles.h2}>Trois principes, tenus dans l&apos;outil</h2>
          <div className={`${styles.principeGrid} reveal`}>
            {PRINCIPES.map((p) => (
              <div key={p.num} className={styles.principe}>
                <div className={styles.principeNum}>{p.num}</div>
                <div className={styles.principeTitle}>{p.title}</div>
                <div className={styles.principeText}>{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------- le terrain */}
      <div id="terrain" className={styles.terrain}>
        <div className={styles.terrainInner}>
          <div className={styles.terrainHead}>
            <div className={section.eyebrow}>Le terrain</div>
            <h2 className={styles.h2Balance}>Les programmes qui ont écrit la méthode</h2>
          </div>

          <div className={styles.logoRow}>
            {LOGOS.map((l) => (
              <div key={l.alt} className={styles.logoPlate}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.alt} className={styles.logoImg} />
              </div>
            ))}
          </div>

          <div className={styles.missionGrid}>
            <div className={styles.mission}>
              <div className={styles.missionMeta}>GSK · industrie pharmaceutique · 2026</div>
              <div className={styles.missionTitle}>PMO &amp; Cutover Lead — bascule SAP S/4HANA</div>
              <div className={styles.missionText}>
                Préparer la bascule ERP d&apos;un site industriel BPF, l&apos;un des trois de la première vague
                France d&apos;un programme mondial.
              </div>
              <div className={styles.missionStats}>
                {MISSION_STATS.map((m) => (
                  <div key={m.label}>
                    <div
                      className={`${styles.missionStatNum} ${m.green ? styles.missionStatNumGreen : ""}`}
                    >
                      {m.num}
                    </div>
                    <div className={styles.missionStatLabel}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.quotes}>
              {QUOTES.map((q) => (
                <div key={q.author} className={styles.quote}>
                  <div className={styles.quoteText}>{q.text}</div>
                  <div className={styles.quoteAuthor}>{q.author}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------ démo */}
      <div id="demo" className={styles.demo}>
        <div className={styles.demoGrid} />
        <div className={styles.demoInner}>
          <div className={styles.demoCopy}>
            <div className={section.eyebrow}>Démo</div>
            <h2 className={styles.demoTitle}>Trente minutes, votre fichier, notre écran</h2>
            <p className={styles.demoLead}>
              Décrivez le contexte en trois lignes. On importe votre portefeuille pendant l&apos;appel et vous
              repartez avec sa vue COMEX — que vous souscriviez ou non. Et si l&apos;outil n&apos;est pas fait pour
              vous, on vous le dira pendant l&apos;appel.
            </p>
            <div className={styles.bullets}>
              {BULLETS.map((b) => (
                <div key={b} className={styles.bullet}>
                  <span className={styles.bulletDot} />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className={styles.demoLinks}>
              <a href="mailto:claire.vandesype@pmo-laboratory.com">claire.vandesype@pmo-laboratory.com</a>
              <a href="https://calendly.com/claire-vandesype">Réserver 30 minutes</a>
              <a href="https://www.linkedin.com/in/claire-vandesype">LinkedIn</a>
            </div>
          </div>

          <DemoPanel />
        </div>
      </div>

      <Footer />
    </div>
  );
}

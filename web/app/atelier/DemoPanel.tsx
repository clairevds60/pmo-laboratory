"use client";

import { useState } from "react";
import styles from "./atelier.module.css";

const VOLUMES = ["1 à 5", "6 à 20", "21 à 50", "50+"];
const BESOINS = ["Arbitrage", "Tableau de bord", "Charge", "Risques", "Budget"];

const DESTINATAIRE = "claire.vandesype@pmo-laboratory.com";

export default function DemoPanel() {
  const [volume, setVolume] = useState<string>("6 à 20");
  const [besoin, setBesoin] = useState<string | null>(null);
  const [nom, setNom] = useState("");
  const [societe, setSociete] = useState("");
  const [email, setEmail] = useState("");
  const [contexte, setContexte] = useState("");

  const corps = [
    `Projets à piloter : ${volume}`,
    `Ce qui manque le plus : ${besoin ?? "non précisé"}`,
    `Nom : ${nom || "—"}`,
    `Société : ${societe || "—"}`,
    `Email : ${email || "—"}`,
    "",
    "Contexte :",
    contexte || "—",
  ].join("\n");

  const mailto = `mailto:${DESTINATAIRE}?subject=${encodeURIComponent(
    "Demande de démo outil PPM"
  )}&body=${encodeURIComponent(corps)}`;

  return (
    <div className={styles.panel}>
      <div className={styles.panelTitle}>Dites-nous où vous en êtes</div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Combien de projets à piloter</div>
        <div className={styles.chipRow}>
          {VOLUMES.map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={volume === v}
              onClick={() => setVolume(v)}
              className={`${styles.chip} ${volume === v ? styles.chipActive : ""}`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Ce qui vous manque le plus</div>
        <div className={styles.chipRow}>
          {BESOINS.map((b) => (
            <button
              key={b}
              type="button"
              aria-pressed={besoin === b}
              onClick={() => setBesoin(besoin === b ? null : b)}
              className={`${styles.chip} ${besoin === b ? styles.chipActive : ""}`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.inputRow}>
        <input
          type="text"
          placeholder="Prénom, nom"
          className={styles.input}
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Société"
          className={styles.input}
          value={societe}
          onChange={(e) => setSociete(e.target.value)}
        />
      </div>
      <input
        type="email"
        placeholder="votre@email.pro"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        rows={3}
        placeholder="Le contexte en trois lignes"
        className={styles.textarea}
        value={contexte}
        onChange={(e) => setContexte(e.target.value)}
      />

      <a href={mailto} className={styles.submit}>
        Envoyer la demande
      </a>
      <div className={styles.fine}>
        Rien n&apos;est envoyé au site : votre messagerie s&apos;ouvre, vous relisez et vous envoyez vous-même.
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "/outil", label: "L'outil" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/ressources", label: "Ressources" },
  { href: "/atelier", label: "L'atelier" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setScrolled(y > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, Math.max(0, (y / h) * 100)) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={styles.progress} style={{ width: `${progress}%` }} />
      <div className={`${styles.inner} ${scrolled ? styles.innerScrolled : ""}`}>
        <div className={styles.logo}>
          <span className={styles.logoPmo}>PMO</span>
          <span className={styles.logoLab}>LAB</span>
        </div>
        <div className={styles.links}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.linkActive : ""}`}
            >
              {l.label}
            </a>
          ))}
          <a href="/atelier#demo" className={styles.cta}>
            Demander une démo
          </a>
        </div>
      </div>
    </div>
  );
}

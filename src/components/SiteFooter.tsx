import Link from "next/link";
import styles from "./SiteFooter.module.css";
import { LEGAL_LINKS, NAV_LINKS, CONTACT_EMAIL } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <p className={styles.colTitle}>O projekcie</p>
            <p style={{ maxWidth: "34ch", opacity: 0.85 }}>
              Kameralny projekt strategii przeglądarkowej dla jednej osoby,
              budowany bez pośpiechu, z naciskiem na decyzje i konsekwencje,
              a nie na rywalizację z innymi graczami.
            </p>
          </div>
          <div>
            <p className={styles.colTitle}>Nawigacja</p>
            <ul className={styles.list}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>Dokumenty i kontakt</p>
            <ul className={styles.list}>
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {year} Wszelkie prawa zastrzeżone.</span>
          <span>Wyłącznie tryb jednoosobowy – żadnej rywalizacji w czasie rzeczywistym z innymi graczami.</span>
        </div>
      </div>
    </footer>
  );
}

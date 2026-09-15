import Link from "next/link";
import styles from "./SiteHeader.module.css";
import { NAV_LINKS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className={styles.bar}>
      <div className={`wrap ${styles.row}`}>
        <span className={styles.mark} aria-hidden="true" />
        <nav className={styles.nav} aria-label="Nawigacja główna">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/#rozgrywka" className={styles.cta}>
            Poznaj rozgrywkę
          </Link>
        </nav>
      </div>
    </header>
  );
}

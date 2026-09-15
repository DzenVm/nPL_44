import Link from "next/link";
import styles from "./text-page.module.css";

export default function NotFound() {
  return (
    <section>
      <div className="wrap" style={{ paddingBlock: "4rem" }}>
        <p className="eyebrow">Ślepy zaułek na mapie</p>
        <h1 className={styles.title}>Tej ścieżki jeszcze nie wyznaczono</h1>
        <p className={styles.lede}>
          Strona, której szukasz, nie istnieje albo została przeniesiona.
          Wróć na <Link href="/" style={{ color: "var(--copper-400)" }}>stronę główną</Link>{" "}
          i spróbuj jeszcze raz.
        </p>
      </div>
    </section>
  );
}

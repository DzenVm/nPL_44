import type { Metadata } from "next";
import styles from "../text-page.module.css";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Adres kontaktowy do osoby prowadzącej projekt przeglądarkowej gry strategicznej dla jednego gracza.",
};

export default function KontaktPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="wrap">
          <p className="eyebrow">Napisz bezpośrednio</p>
          <h1 className={styles.title}>Kontakt</h1>
          <p className={styles.lede}>
            Bez formularza, bez automatycznych odpowiedzi wygenerowanych z
            szablonu – zwykły adres e-mail, pod którym faktycznie ktoś czyta
            wiadomości.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className={styles.body}>
            <h2>Adres e-mail</h2>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ fontSize: "1.15rem", color: "var(--copper-400)" }}>
                {CONTACT_EMAIL}
              </a>
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--moss-400)" }}>
              Adres korzysta z domeny serwisu. Dostarczanie wiadomości zależy
              od tego, czy poczta dla tej domeny została skonfigurowana.
            </p>

            <h2>Czego dotyczyć mogą wiadomości</h2>
            <ul>
              <li>pytań o mechanikę rozgrywki, które nie zostały wyjaśnione na stronie z opisem mechaniki,</li>
              <li>zgłoszeń dotyczących błędów w treści serwisu, np. niedziałających odnośników,</li>
              <li>spraw związanych z ochroną danych osobowych – zgodnie z opisem w polityce prywatności,</li>
              <li>pytań prasowych lub dotyczących współpracy przy dalszym rozwoju projektu.</li>
            </ul>

            <h2>Czas odpowiedzi</h2>
            <p>
              Korespondencję obsługuje jedna osoba, więc odpowiedź zwykle
              zajmuje kilka dni roboczych. W okresach intensywnych prac nad
              samą grą może to potrwać nieco dłużej – w takiej sytuacji
              lepiej napisać niż czekać na zmianę tego zapisu.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import styles from "../text-page.module.css";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regulamin serwisu",
  description: "Zasady korzystania z serwisu informacyjnego poświęconego przeglądarkowej grze strategicznej dla jednego gracza.",
};

export default function RegulaminPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="wrap">
          <p className="eyebrow">Dokument prawny</p>
          <h1 className={styles.title}>Regulamin korzystania z serwisu</h1>
          <p className={styles.lede}>
            Poniższe zasady dotyczą korzystania z tej strony informacyjnej.
            Osobny regulamin samej rozgrywki zostanie opublikowany wraz z
            udostępnieniem gry szerszemu gronu graczy.
          </p>
          <p className={styles.updated}>Wersja robocza, obowiązująca od dnia publikacji serwisu.</p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className={styles.body}>
            <h2>1. Postanowienia ogólne</h2>
            <p>
              Serwis dostępny pod domeną wskazaną w stopce ma charakter
              informacyjny. Prezentuje opis mechaniki przygotowywanej gry
              przeglądarkowej dla jednego gracza oraz umożliwia kontakt z
              osobą prowadzącą projekt. Korzystanie z serwisu oznacza
              akceptację poniższych zasad.
            </p>

            <h2>2. Charakter usługi</h2>
            <p>
              Serwis nie umożliwia obecnie rejestracji konta ani rozpoczęcia
              rozgrywki – jest wyłącznie źródłem informacji o projekcie na
              etapie przygotowań. Wszelkie opisy mechaniki mają charakter
              poglądowy i mogą ulec zmianie w toku dalszych prac nad grą,
              zanim trafi ona do szerszego udostępnienia.
            </p>

            <h2>3. Zasady korzystania</h2>
            <ul>
              <li>Serwis należy wykorzystywać zgodnie z jego przeznaczeniem i obowiązującym prawem.</li>
              <li>
                Zabronione jest podejmowanie działań mogących zakłócić
                działanie serwisu, w tym prób nieautoryzowanego dostępu do
                jego zaplecza technicznego.
              </li>
              <li>
                Kontakt za pośrednictwem podanego adresu e-mail służy wyłącznie
                do korespondencji związanej z projektem – nie jest kanałem do
                przesyłania treści niezwiązanych z tematyką serwisu.
              </li>
            </ul>

            <h2>4. Własność treści</h2>
            <p>
              Opisy mechaniki, ilustracje oraz układ graficzny serwisu są
              efektem samodzielnej pracy nad projektem i podlegają ochronie
              wynikającej z przepisów prawa autorskiego. Kopiowanie i
              rozpowszechnianie tych treści bez zgody osoby prowadzącej
              projekt jest niedozwolone.
            </p>

            <h2>5. Odpowiedzialność</h2>
            <p>
              Serwis udostępniany jest w formie, w jakiej się znajduje, bez
              gwarancji nieprzerwanej dostępności – jako projekt na etapie
              przygotowań może być okresowo aktualizowany lub niedostępny w
              związku z pracami technicznymi. Informacje o planowanym
              zakresie i terminie udostępnienia samej gry mają charakter
              orientacyjny i mogą się zmieniać.
            </p>

            <h2>6. Zmiany regulaminu</h2>
            <p>
              Regulamin może być aktualizowany w miarę rozwoju projektu, w
              szczególności przed udostępnieniem właściwej gry. Aktualna
              wersja jest zawsze dostępna pod tym adresem.
            </p>

            <h2>7. Kontakt</h2>
            <p>
              Pytania dotyczące regulaminu można kierować na adres{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

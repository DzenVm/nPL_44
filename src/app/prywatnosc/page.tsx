import type { Metadata } from "next";
import styles from "../text-page.module.css";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Informacje o przetwarzaniu danych osobowych, plikach cookie oraz prawach osób odwiedzających serwis, zgodnie z RODO.",
  robots: { index: true, follow: true },
};

export default function PrywatnoscPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="wrap">
          <p className="eyebrow">Dokument prawny</p>
          <h1 className={styles.title}>Polityka prywatności</h1>
          <p className={styles.lede}>
            Ten dokument opisuje, jakie dane są przetwarzane w związku z
            odwiedzaniem serwisu, w jakim celu oraz jakie prawa przysługują
            osobie, której dane dotyczą.
          </p>
          <p className={styles.updated}>Wersja robocza, aktualizowana wraz z rozwojem serwisu.</p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className={styles.body}>
            <h2>1. Kto odpowiada za przetwarzanie danych</h2>
            <p>
              Administratorem danych jest osoba prowadząca ten projekt.
              Docelowe dane rejestrowe zostaną uzupełnione w tym miejscu wraz
              z uruchomieniem domeny docelowej i pełnym udostępnieniem
              serwisu. Do tego czasu kontakt w sprawach związanych z danymi
              osobowymi możliwy jest pod adresem{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>

            <h2>2. Jakie dane są przetwarzane</h2>
            <p>Zakres danych zależy od tego, w jaki sposób korzystasz z serwisu:</p>
            <ul>
              <li>
                dane techniczne zbierane automatycznie – adres IP, typ i wersja
                przeglądarki, orientacyjna lokalizacja na poziomie miasta,
                strona odsyłająca oraz parametry kampanii reklamowej, jeśli
                trafiłeś na stronę z reklamy;
              </li>
              <li>
                dane podane dobrowolnie – jeśli napiszesz wiadomość przez
                adres kontaktowy, przetwarzamy adres e-mail oraz treść
                korespondencji wyłącznie w celu udzielenia odpowiedzi;
              </li>
              <li>
                dane z plików cookie – po wyrażeniu zgody w widocznym na
                stronie komunikacie, dotyczące pomiaru ruchu oraz skuteczności
                kampanii reklamowych.
              </li>
            </ul>

            <h2>3. Pliki cookie i narzędzia pomiarowe</h2>
            <p>
              Serwis może korzystać z narzędzi analitycznych oraz z narzędzi
              pomiaru konwersji dostarczanych przez zewnętrznych dostawców, w
              tym z rozwiązań wspierających kampanie prowadzone w usłudze
              reklamowej Google. Pliki cookie niezbędne do działania strony
              (np. zapamiętanie decyzji o zgodzie na cookies) są ustawiane
              zawsze. Pliki analityczne i reklamowe ustawiane są wyłącznie po
              wyrażeniu zgody w banerze widocznym na dole ekranu. Zgodę można
              w każdej chwili wycofać, czyszcząc dane strony w ustawieniach
              przeglądarki.
            </p>

            <h2>4. Podstawa i cel przetwarzania</h2>
            <p>
              Dane techniczne przetwarzane są na podstawie prawnie
              uzasadnionego interesu administratora (art. 6 ust. 1 lit. f
              RODO), polegającego na zapewnieniu bezpieczeństwa i poprawnego
              działania serwisu oraz na ocenie skuteczności działań
              informacyjnych. Dane z korespondencji przetwarzane są na
              podstawie zgody wyrażonej przez wysłanie wiadomości (art. 6
              ust. 1 lit. a RODO). Dane związane z pomiarem reklam i
              analityką przetwarzane są na podstawie zgody wyrażonej w
              banerze cookie.
            </p>

            <h2>5. Odbiorcy danych</h2>
            <p>
              Dane techniczne związane z hostingiem i analityką mogą być
              przetwarzane przez dostawców infrastruktury oraz narzędzi
              pomiarowych, na podstawie zawartych z nimi umów powierzenia
              przetwarzania danych. Dane nie są sprzedawane ani udostępniane
              w celach innych niż opisane w tym dokumencie.
            </p>

            <h2>6. Okres przechowywania</h2>
            <p>
              Dane techniczne przechowywane są przez okres nie dłuższy niż
              wynika to z konfiguracji narzędzi analitycznych, standardowo
              nie dłużej niż 26 miesięcy. Korespondencja e-mail przechowywana
              jest do czasu przedawnienia ewentualnych roszczeń związanych z
              jej treścią lub do momentu żądania usunięcia.
            </p>

            <h2>7. Prawa osoby, której dane dotyczą</h2>
            <p>W związku z przetwarzaniem danych przysługuje prawo do:</p>
            <ul>
              <li>dostępu do swoich danych i uzyskania ich kopii,</li>
              <li>sprostowania danych nieprawidłowych,</li>
              <li>usunięcia danych, gdy nie ma podstawy do ich dalszego przetwarzania,</li>
              <li>ograniczenia przetwarzania w przypadkach wskazanych w przepisach,</li>
              <li>wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,</li>
              <li>przenoszenia danych przetwarzanych na podstawie zgody,</li>
              <li>wycofania zgody w dowolnym momencie, bez wpływu na zgodność z prawem wcześniejszego przetwarzania,</li>
              <li>
                wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych,
                jeśli uznasz, że przetwarzanie narusza przepisy o ochronie
                danych.
              </li>
            </ul>

            <h2>8. Kontakt w sprawie danych</h2>
            <p>
              W sprawach związanych z ochroną danych osobowych napisz na
              adres <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              Odpowiadamy osobiście, więc na odpowiedź trzeba poczekać –
              zwykle nie dłużej niż kilka dni roboczych.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

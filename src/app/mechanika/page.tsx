import type { Metadata } from "next";
import styles from "../text-page.module.css";
import { TechBranches } from "@/components/illustrations/TechBranches";
import { TerrainProfile } from "@/components/illustrations/TerrainProfile";

export const metadata: Metadata = {
  title: "Mechanika rozgrywki – jak działa osada, teren i frakcje",
  description:
    "Szczegółowy opis mechaniki gry: surowce, drzewko technologii, wpływ terenu na budowę, zachowania frakcji sterowanych przez komputer oraz struktura pięciu er kampanii.",
};

export default function MechanikaPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="wrap">
          <p className="eyebrow">Dokument techniczny dla graczy</p>
          <h1 className={styles.title}>Mechanika rozgrywki, opisana bez skrótów</h1>
          <p className={styles.lede}>
            Ta strona jest dłuższa niż zwykła podstrona &bdquo;o grze&rdquo; z
            rozmysłem. Jeśli zastanawiasz się, czy ten rodzaj rozgrywki jest
            dla Ciebie, wolimy pokazać konkrety niż przekonywać hasłami.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className={styles.toc}>
            <p>Spis treści</p>
            <ol>
              <li><a href="#surowce">Gospodarka surowcowa</a></li>
              <li><a href="#technologie">Drzewko technologii</a></li>
              <li><a href="#teren">Teren i jego wpływ na budowę</a></li>
              <li><a href="#frakcje">Frakcje sterowane przez komputer</a></li>
              <li><a href="#trudnosc">Poziomy trudności i tempo</a></li>
              <li><a href="#zapisy">Zapisy, sesje i przerwy w grze</a></li>
            </ol>
          </div>

          <div className={styles.body}>
            <h2 id="surowce">Gospodarka surowcowa</h2>
            <p>
              Podstawę ekonomii stanowią cztery surowce: zboże, drewno, kamień
              i stopy metali. Każdy z nich ma własną logikę pozyskiwania.
              Zboże rośnie sezonowo na polach, których wydajność zależy od
              jakości gleby w danym miejscu mapy – ta sama liczba pól na
              równinie i na zboczu wzgórza da wyraźnie różne plony. Drewno
              pochodzi z lasów, które się kurczą przy zbyt intensywnym
              wyrębie i odrastają powoli, jeśli dasz im czas. Kamień trzeba
              wydobyć i dowieźć, co w porze roztopów bywa utrudnione przez
              stan dróg. Stopy metali pojawiają się dopiero w drugiej erze, po
              zbudowaniu odpowiedniego zaplecza.
            </p>
            <p>
              Magazyny mają skończoną pojemność i nie da się tego obejść bez
              inwestycji – nadmiar zboża, którego nie zdążysz przetworzyć albo
              sprzedać, po prostu przepada w kolejnym sezonie. To wymusza
              planowanie do przodu, a nie tylko gromadzenie na zapas.
            </p>

            <h2 id="technologie">Drzewko technologii</h2>
            <p>
              Rozwój technologii podzielony jest na trzy niezależne gałęzie:
              rolnictwo, budownictwo i żeglugę. Każda gałąź ma około
              dwunastu-piętnastu węzłów rozłożonych na wszystkie pięć er, a
              część z nich wymaga nie tylko punktów rozwoju, ale też
              konkretnego doświadczenia zdobytego w praktyce – na przykład
              technologie żeglarskie odblokowują się szybciej, jeśli Twoja
              osada faktycznie korzysta z dostępu do rzeki, a nie tylko
              teoretycznie go posiada.
            </p>
            <div className={styles.toc} style={{ background: "var(--ink-900)" }}>
              <TechBranches />
            </div>
            <p>
              Nie ma jednej &bdquo;poprawnej&rdquo; kolejności rozwoju.
              Kombinacja terenu wokół startowej osady i zachowania sąsiednich
              frakcji zwykle podpowiada, która gałąź da największą przewagę
              najszybciej – i to się zmienia od kampanii do kampanii.
            </p>

            <h2 id="teren">Teren i jego wpływ na budowę</h2>
            <p>
              Mapa podzielona jest na pola sześciokątne, z których każde ma
              przypisany typ terenu: wzgórze, dolinę rzeczną albo równinę.
              Różnice nie są kosmetyczne. Budowa na wzgórzu kosztuje więcej
              surowców i trwa dłużej, ale budynki tam postawione są odporne na
              wiosenne wylewy i trudniejsze do zdobycia w razie konfliktu.
              Dolina rzeki obniża koszt rolnictwa i daje dostęp do transportu
              wodnego, ale wystawia zabudowę na ryzyko sezonowych powodzi,
              jeśli nie zainwestujesz w odpowiednie umocnienia. Równina jest
              wyborem najbezpieczniejszym i najbardziej przewidywalnym – co
              ma swoją cenę w postaci braku wyraźnych atutów.
            </p>
            <div className={styles.toc} style={{ background: "var(--ink-900)" }}>
              <TerrainProfile />
            </div>

            <h2 id="frakcje">Frakcje sterowane przez komputer</h2>
            <p>
              Na mapie działają cztery frakcje, z których każda ma inny
              priorytet: ekspansja terytorialna, handel, obrona albo strategia
              wyczekująca. Priorytet nie jest sztywny – frakcje reagują na
              działania gracza. Szybka, agresywna rozbudowa w stronę granicy
              sąsiada zwykle przyspiesza jego militaryzację, nawet jeśli
              domyślnie była nastawiona na handel. Frakcja handlowa może
              zaproponować traktat wymiany surowców, ale odrzucenie kilku
              takich propozycji z rzędu obniża szansę na kolejne oferty w tej
              samej kampanii.
            </p>

            <h2 id="trudnosc">Poziomy trudności i tempo</h2>
            <p>
              Dostępne są trzy poziomy trudności, różniące się głównie
              tempem, w jakim frakcje komputerowe się rozwijają, oraz
              częstotliwością zdarzeń losowych związanych z pogodą i
              zbiorami. Na najniższym poziomie masz więcej czasu na naukę
              mechaniki. Na najwyższym błędy w gospodarce surowcowej z
              pierwszej ery potrafią być odczuwalne jeszcze w czwartej.
            </p>
            <p>
              Rozgrywka jest turowa, ale bez limitu czasu na turę – decyzję
              podejmujesz wtedy, kiedy jesteś gotowy, a nie kiedy każe Ci
              zegar.
            </p>

            <h2 id="zapisy">Zapisy, sesje i przerwy w grze</h2>
            <p>
              Stan kampanii zapisywany jest automatycznie po każdej turze i
              powiązany z kontem, więc możesz wrócić do gry z innego
              urządzenia bez utraty postępu. Nie ma tu presji &bdquo;codziennej
              obecności&rdquo; – jeśli zrobisz sobie przerwę na tydzień, świat
              gry nie toczy się dalej bez Ciebie, bo cała rozgrywka jest
              odosobniona i dotyczy wyłącznie Twojej kampanii.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

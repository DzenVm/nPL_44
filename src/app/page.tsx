import Link from "next/link";
import styles from "./page.module.css";
import { HeroTerritory } from "@/components/illustrations/HeroTerritory";
import { ResourceFlow } from "@/components/illustrations/ResourceFlow";
import { TechBranches } from "@/components/illustrations/TechBranches";
import { TerrainProfile } from "@/components/illustrations/TerrainProfile";
import { FactionSeals } from "@/components/illustrations/FactionSeals";
import { EraTimeline } from "@/components/illustrations/EraTimeline";
import { pickDailyNote } from "@/lib/site";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const now = new Date();
  const dailyNote = pickDailyNote(now);
  const formattedDate = new Intl.DateTimeFormat("pl-PL", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(now);

  return (
    <>
      <section className={styles.hero}>
        <div className="wrap">
          <div className={styles.heroGrid}>
            <div>
              <p className="eyebrow">Strategia przeglądarkowa · jeden gracz</p>
              <h1 className={styles.heroTitle}>
                Osada, teren i decyzje, które zostają z Tobą do końca kampanii
              </h1>
              <p className={styles.heroLede}>
                To nie jest wyścig o miejsce na liście najlepszych graczy.
                Prowadzisz jedną osadę, na jednej mapie, przeciwko kilku
                frakcjom sterowanym przez komputer – każda z nich reaguje na
                Twoje ruchy inaczej, a teren pod nogami potrafi pokrzyżować
                plany równie skutecznie jak sąsiad zza rzeki.
              </p>
              <div className={styles.heroActions}>
                <a href="#rozgrywka" className={styles.btnPrimary}>
                  Zobacz, jak to działa
                </a>
                <Link href="/faq" className={styles.btnGhost}>
                  Najczęstsze pytania
                </Link>
              </div>

              <div className={styles.factStrip}>
                <div>
                  <p className={styles.factLabel}>Tryb</p>
                  <p className={styles.factValue}>Jeden gracz</p>
                </div>
                <div>
                  <p className={styles.factLabel}>Platforma</p>
                  <p className={styles.factValue}>Przeglądarka</p>
                </div>
                <div>
                  <p className={styles.factLabel}>Tempo</p>
                  <p className={styles.factValue}>Turowe, bez pośpiechu</p>
                </div>
                <div>
                  <p className={styles.factLabel}>Zapis</p>
                  <p className={styles.factValue}>Automatyczny, w chmurze</p>
                </div>
              </div>
            </div>
            <div className={styles.heroArt}>
              <HeroTerritory />
            </div>
          </div>

          <div className={styles.noteBar}>
            <strong>{formattedDate}:</strong>
            <span>{dailyNote}</span>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <p className="eyebrow">Punkt wyjścia</p>
            <h2 className={styles.sectionTitle}>
              Trzy założenia, od których zaczęło się projektowanie tej gry
            </h2>
          </div>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>Bez zegara nad głową</h3>
              <p>
                Runda trwa tyle, ile potrzebujesz. Możesz zamknąć kartę w
                trakcie namysłu nad rozbudową i wrócić za godzinę albo za trzy
                dni – stan gry czeka dokładnie tam, gdzie go zostawiłeś, bez
                utraty przewagi na rzecz kogoś, kto akurat miał więcej czasu.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Teren nie jest tłem</h3>
              <p>
                Wzgórze, dolina rzeki, gęsty las – każde z tych miejsc inaczej
                wpływa na koszt budowy, plony i widoczność. Ta sama decyzja
                podjęta w innym miejscu mapy daje inny wynik, więc znajomość
                okolicy liczy się bardziej niż powtarzalny schemat rozbudowy.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Przeciwnik, który się nie nudzi</h3>
              <p>
                Frakcje komputerowe mają swoje priorytety – jedna stawia na
                handel, inna okopuje się i czeka. Nie grają według jednego
                wzorca, więc ta sama otwarta rozgrywka na nowej mapie rzadko
                wygląda tak samo dwa razy z rzędu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="rozgrywka">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <p className="eyebrow">Mechanika rozgrywki</p>
            <h2 className={styles.sectionTitle}>
              Co dokładnie robisz w trakcie jednej kampanii
            </h2>
            <p style={{ color: "var(--parchment-300)", marginTop: "0.8rem" }}>
              Poniżej jest wersja skrócona. Pełny, dłuższy opis każdego
              elementu – łącznie z liczbami i przykładami z rozgrywki –
              znajdziesz na{" "}
              <Link href="/mechanika" style={{ color: "var(--copper-400)" }}>
                osobnej stronie poświęconej mechanice
              </Link>
              .
            </p>
          </div>

          <div className={styles.mechanicsBlock}>
            <div className={styles.split}>
              <div>
                <h3>Surowce nie biorą się z powietrza</h3>
                <p>
                  Zboże rośnie tam, gdzie jest gleba i woda w zasięgu, drewno
                  kończy się, jeśli wycinasz las szybciej niż zdąży odrosnąć, a
                  kamień trzeba dowieźć, zanim zniknie sezonowa przejezdność
                  drogi. Magazyn ma limit, więc nadwyżkę z dobrego sezonu warto
                  przekuć w coś trwałego, zanim zepsuje się w składzie.
                </p>
                <p>
                  To prosty łańcuch: pole – magazyn – warsztat. Trudność nie
                  polega na jego zrozumieniu, tylko na utrzymaniu równowagi,
                  gdy jednocześnie rozbudowujesz trzy rzeczy naraz.
                </p>
              </div>
              <div className={styles.splitArt}>
                <ResourceFlow />
              </div>
            </div>
          </div>

          <div className={styles.mechanicsBlock}>
            <div className={`${styles.split} ${styles.reverse}`}>
              <div>
                <h3>Drzewko technologii rozgałęzia się naprawdę</h3>
                <p>
                  Rolnictwo, budownictwo i żegluga to trzy niezależne
                  kierunki – każdy otwiera inne opcje i żaden nie jest
                  &bdquo;lepszy&rdquo; sam w sobie. Postawienie wszystkiego na
                  żeglugę bez zaplecza budowlanego zwykle oznacza, że statki
                  wypływają z portu, którego ściany ledwo trzymają się kupy.
                </p>
                <p>
                  Część technologii wymaga wcześniej zdobytego doświadczenia z
                  konkretnego terenu – np. znajomość rzek przyspiesza rozwój
                  nawigacji bardziej niż sama chęć jej rozwijania.
                </p>
              </div>
              <div className={styles.splitArt}>
                <TechBranches />
              </div>
            </div>
          </div>

          <div className={styles.mechanicsBlock}>
            <div className={styles.split}>
              <div>
                <h3>Ten sam budynek, inny koszt, w zależności od miejsca</h3>
                <p>
                  Budowa na wzgórzu jest wolniejsza i droższa, ale chroni
                  przed wiosennymi wylewami. Dolina rzeki daje szybki dostęp do
                  wody i żyzną glebę, za cenę ryzyka, które trzeba świadomie
                  zaakceptować. Równina jest neutralna – łatwa, ale rzadko
                  daje coś ekstra.
                </p>
                <p>
                  Mapa generowana jest na starcie kampanii, więc rozkład tych
                  trzech typów terenu wokół Twojej osady za każdym razem jest
                  inny – strategia &bdquo;zawsze buduję tak samo&rdquo; szybko
                  przestaje działać.
                </p>
              </div>
              <div className={styles.splitArt}>
                <TerrainProfile />
              </div>
            </div>
          </div>

          <div className={styles.mechanicsBlock}>
            <div className={`${styles.split} ${styles.reverse}`}>
              <div>
                <h3>Cztery frakcje, cztery różne charaktery</h3>
                <p>
                  Żadna z frakcji sterowanych przez komputer nie jest kopią
                  drugiej. Jedna rozbuduje sieć szlaków handlowych i będzie
                  proponować wymianę surowców, druga zamknie się za
                  fortyfikacjami i będzie reagować dopiero, gdy podejdziesz
                  zbyt blisko granicy. Ich zachowanie zależy też od tego, jak
                  Ty grasz – agresywna ekspansja z Twojej strony częściej
                  prowokuje sojusze przeciwko Tobie.
                </p>
              </div>
              <div className={styles.splitArt}>
                <FactionSeals />
              </div>
            </div>
          </div>

          <div className={styles.mechanicsBlock}>
            <div className={styles.split}>
              <div>
                <h3>Kampania ma pięć er – i koniec</h3>
                <p>
                  To nie jest rozgrywka bez dna. Każda kampania przechodzi
                  przez pięć er: od osadnictwa, przez umocnienia i rzemiosło,
                  aż po żeglugę i dojrzałość osady. Po piątej erze kampania
                  się kończy, a wynik zostaje zapisany w historii Twojego
                  konta – możesz zacząć nową, na nowo wygenerowanej mapie, z
                  innym układem terenu i inną kombinacją frakcji.
                </p>
              </div>
              <div className={styles.splitArt}>
                <EraTimeline />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <p className="eyebrow">Z bliska</p>
            <h2 className={styles.sectionTitle}>
              Jak wygląda pierwsza godzina w nowej osadzie
            </h2>
          </div>
          <div className={styles.storyBox}>
            <blockquote>
              Zaczynasz z garstką ludzi, wozem zapasów i mapą, która na
              początku pokazuje tylko najbliższe wzgórze.
            </blockquote>
            <p style={{ marginTop: "1.2rem" }}>
              Pierwsza decyzja to zwykle miejsce pod pole i pierwszy magazyn –
              i to ona najbardziej rzutuje na resztę rozgrywki, bo później
              trudno się przenieść bez strat. Zwiadowca wysłany na wschód
              zwykle wraca z informacją o rzece albo o dymie znad sąsiedniego
              obozu, a to, którą z tych wiadomości potraktujesz priorytetowo,
              zwykle definiuje styl gry na najbliższe kilka godzin.
            </p>
            <p>
              Po kilku turach magazyn zaczyna się zapełniać, pojawia się
              pierwsza propozycja traktatu od sąsiedniej frakcji, a Ty musisz
              zdecydować, czy warto oddać część zapasów za bezpieczną granicę,
              czy lepiej zainwestować w mur i poczekać. Nie ma tu jednej
              słusznej odpowiedzi – jest tylko ta, którą wybierzesz, i jej
              konsekwencje widoczne kilka er później.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <p className="eyebrow">Stan prac</p>
            <h2 className={styles.sectionTitle}>Na jakim etapie jest ten projekt</h2>
            <p style={{ color: "var(--parchment-300)", marginTop: "0.8rem" }}>
              Bez podawania sztywnych dat, bo w projekcie robionym przez
              niewielki zespół terminy potrafią się przesuwać – wolimy
              napisać uczciwie, na jakim etapie faktycznie jesteśmy.
            </p>
          </div>
          <ul className={styles.timelineList}>
            <li className={styles.timelineItem}>
              <span className={styles.timelineStage}>Zamknięte</span>
              <span>
                Projekt siatki terenu, generowanie mapy oraz podstawowy
                łańcuch surowców pole–magazyn–warsztat.
              </span>
            </li>
            <li className={styles.timelineItem}>
              <span className={styles.timelineStage}>Zamknięte</span>
              <span>
                Zachowania czterech frakcji sterowanych przez komputer i ich
                reakcje na działania gracza.
              </span>
            </li>
            <li className={styles.timelineItem}>
              <span className={styles.timelineStage}>W toku</span>
              <span>
                Dostrajanie balansu między erami – tak, aby przejście do
                kolejnej fazy kampanii wymagało realnych decyzji, a nie tylko
                czekania.
              </span>
            </li>
            <li className={styles.timelineItem}>
              <span className={styles.timelineStage}>Zaplanowane</span>
              <span>
                Testy wydajności na słabszych łączach internetowych oraz
                przygotowanie wersji do szerszego udostępnienia.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <p className="eyebrow">Zanim zapytasz</p>
            <h2 className={styles.sectionTitle}>Kilka pytań, które padają najczęściej</h2>
          </div>
          <div className={styles.faqTeaser}>
            <div className={styles.faqRow}>
              <h3>Czy da się przegrać całą kampanię?</h3>
              <p>
                Tak – utrata wszystkich osad i zapasów kończy kampanię przed
                czasem. To rzadkie, ale możliwe, zwłaszcza na wyższym poziomie
                trudności i przy lekceważeniu sygnałów ostrzegawczych.
              </p>
            </div>
            <div className={styles.faqRow}>
              <h3>Czy inni gracze mogą wejść na moją mapę?</h3>
              <p>
                Nie. Mapa i przeciwnicy są generowani wyłącznie dla Twojej
                kampanii – nie ma tu wspólnego serwera ani rywalizacji w
                czasie rzeczywistym z innymi osobami.
              </p>
            </div>
            <div className={styles.faqRow}>
              <h3>Ile trwa jedna kampania?</h3>
              <p>
                To zależy od tempa grania, ale typowe przejście wszystkich
                pięciu er zajmuje rozłożone w czasie kilkanaście do
                kilkudziesięciu sesji, w zależności od wybranej trudności.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "1.4rem" }}>
            <Link href="/faq" style={{ color: "var(--copper-400)" }}>
              Zobacz pełną listę pytań i odpowiedzi →
            </Link>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className={styles.closingCta}>
            <h2>Chcesz wiedzieć, kiedy ruszy szerszy dostęp?</h2>
            <p style={{ color: "var(--parchment-300)", maxWidth: "42ch", marginInline: "auto" }}>
              Najprościej jest napisać bezpośrednio – odpowiadamy osobiście, a
              nie przez automat.
            </p>
            <Link href="/kontakt" className={styles.btnPrimary} style={{ marginTop: "1rem" }}>
              Przejdź do kontaktu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

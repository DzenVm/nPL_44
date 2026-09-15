import type { Metadata } from "next";
import Link from "next/link";
import styles from "../text-page.module.css";

export const metadata: Metadata = {
  title: "Pytania i odpowiedzi",
  description:
    "Odpowiedzi na pytania o rozgrywkę, konto, zapisy, dostępność na urządzeniach mobilnych i planowany dostęp do gry.",
};

const FAQ_ITEMS: Array<{ q: string; a: string }> = [
  {
    q: "Czy trzeba coś instalować?",
    a: "Nie. Cała rozgrywka działa w przeglądarce, bez dodatkowych wtyczek ani osobnej aplikacji. Wystarczy stosunkowo aktualna przeglądarka i stabilne łącze na czas rozgrywania tury.",
  },
  {
    q: "Czy da się grać na telefonie?",
    a: "Interfejs jest przygotowywany z myślą o ekranach dotykowych, ale gra rozwijana jest w pierwszej kolejności pod kątem większych ekranów – zarządzanie mapą i budynkami jest wygodniejsze przy większej powierzchni roboczej.",
  },
  {
    q: "Czy moje postępy mogą zniknąć?",
    a: "Zapis jest powiązany z kontem i zapisywany automatycznie po każdej turze. Jedyna sytuacja, w której tracisz postęp, to świadome rozpoczęcie nowej kampanii – wtedy poprzednia zostaje zarchiwizowana, nie usunięta.",
  },
  {
    q: "Czy da się przegrać całą kampanię?",
    a: "Tak. Utrata wszystkich osad kończy kampanię przed osiągnięciem piątej ery. To rzadkie przy rozsądnym zarządzaniu zapasami, ale możliwe – zwłaszcza przy wyższym poziomie trudności.",
  },
  {
    q: "Czy inni gracze widzą moją mapę albo mogą na nią wejść?",
    a: "Nie. Każda kampania generuje własną, odizolowaną mapę wyłącznie dla jednej osoby. Nie ma tu wspólnego serwera, rankingu w czasie rzeczywistym ani możliwości interakcji z innymi graczami.",
  },
  {
    q: "Ile realnie trwa jedna kampania?",
    a: "Zależy od tempa grania i wybranej trudności. Przy regularnych, kilkunastominutowych sesjach przejście wszystkich pięciu er zajmuje zwykle od kilku do kilkunastu tygodni kalendarzowych.",
  },
  {
    q: "Czy trzeba grać codziennie, żeby nie stracić przewagi?",
    a: "Nie. Świat gry nie toczy się dalej pod Twoją nieobecność, bo cała rozgrywka dotyczy wyłącznie Twojej, prywatnej kampanii. Możesz zrobić przerwę i wrócić dokładnie tam, gdzie skończyłeś.",
  },
  {
    q: "Kiedy gra będzie dostępna szerzej?",
    a: "Projekt jest w fazie dopracowywania balansu i testów. Nie podajemy sztywnej daty premiery, bo wolimy dotrzymać jakości niż terminu – aktualny status opisujemy na stronie głównej, w sekcji o stanie prac.",
  },
  {
    q: "Czy w grze są mikropłatności albo elementy losowe oparte na zakupach?",
    a: "Nie ma tu żadnych zakupów wpływających na wynik losowy ani mechanik opartych na przypadkowych nagrodach. Wszystko, co dzieje się w kampanii, wynika z decyzji podjętych w trakcie rozgrywki i warunków panujących na mapie.",
  },
];

export default function FaqPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="wrap">
          <p className="eyebrow">Zanim napiszesz</p>
          <h1 className={styles.title}>Pytania, które dostajemy najczęściej</h1>
          <p className={styles.lede}>
            Jeśli Twojego pytania tu nie ma, opisz je krótko przez{" "}
            <Link href="/kontakt" style={{ color: "var(--copper-400)" }}>
              formularz kontaktowy
            </Link>{" "}
            – odpowiadamy osobiście.
          </p>
        </div>
      </header>
      <section>
        <div className="wrap">
          <div className={styles.body} style={{ maxWidth: "72ch" }}>
            {FAQ_ITEMS.map((item) => (
              <div key={item.q} style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "1.15rem", marginTop: 0 }}>{item.q}</h2>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Miejsce na docelową domenę – zostanie uzupełnione po jej przydzieleniu.
export const SITE_DOMAIN_PLACEHOLDER = "domena-w-przygotowaniu.pl";
export const SITE_URL = `https://${SITE_DOMAIN_PLACEHOLDER}`;
export const CONTACT_EMAIL = `kontakt@${SITE_DOMAIN_PLACEHOLDER}`;

export const NAV_LINKS = [
  { href: "/", label: "Start" },
  { href: "/mechanika", label: "Mechanika rozgrywki" },
  { href: "/faq", label: "Pytania i odpowiedzi" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const LEGAL_LINKS = [
  { href: "/regulamin", label: "Regulamin" },
  { href: "/prywatnosc", label: "Polityka prywatności" },
] as const;

// Krótkie porady wyświetlane na stronie głównej – dobór deterministyczny wg dnia,
// żeby treść była renderowana po stronie serwera przy każdym żądaniu, a nie cache'owana statycznie.
export const DAILY_NOTES = [
  "Zanim rozbudujesz drugie skrzydło osady, sprawdź, czy okoliczny teren udźwignie dodatkowe zapotrzebowanie na wodę.",
  "Traktat pokojowy z sąsiednią frakcją AI można renegocjować tylko raz na kilka sezonów – warto to zaplanować z wyprzedzeniem.",
  "Magazyny zbudowane na wzgórzu tracą mniej zapasów podczas powodzi niż te postawione w dolinie rzeki.",
  "Szybki rozwój technologii bez zaplecza surowcowego zwykle kończy się kryzysem w trzeciej erze.",
  "Zwiadowcy wysłani nocą widzą mniej, ale rzadziej wzbudzają czujność patroli przeciwnika.",
  "Most drewniany da się postawić w jedną turę, ale kamienny przetrwa oblężenie – wybór zależy od tego, czego się spodziewasz.",
  "Warto zostawić rezerwę zboża na wypadek złego zbioru – trudność w wyższych poziomach potrafi to bezlitośnie zweryfikować.",
] as const;

export function pickDailyNote(date: Date): string {
  const dayIndex = Math.floor(date.getTime() / 86_400_000);
  const index = ((dayIndex % DAILY_NOTES.length) + DAILY_NOTES.length) % DAILY_NOTES.length;
  return DAILY_NOTES[index] ?? DAILY_NOTES[0];
}

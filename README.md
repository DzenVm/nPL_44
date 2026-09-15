# Serwis informacyjny – przeglądarkowa strategia dla jednego gracza

Strona zbudowana w Next.js 16 (App Router, React Server Components), z
prawdziwym renderowaniem po stronie serwera na stronie głównej (`/`
ma `export const dynamic = "force-dynamic"`, więc pasek z poradą dnia
liczony jest przy każdym żądaniu, a nie raz podczas builda).

Stos celowo nie korzysta z Tailwinda ani gotowego UI-kita: stylowanie to
natywne CSS Modules oparte o warstwy `@layer` i zestaw tokenów projektowych
w `src/app/tokens.css`. Ilustracje na stronie to ręcznie napisane komponenty
SVG (`src/components/illustrations`), a nie pliki graficzne.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona wystartuje pod `http://localhost:3000`.

## Build produkcyjny

```bash
npm run build
npm run start
```

## Struktura

- `src/app/page.tsx` – strona główna (najbardziej rozbudowana treściowo).
- `src/app/mechanika` – pełny, szczegółowy opis mechaniki rozgrywki.
- `src/app/faq`, `src/app/kontakt`, `src/app/regulamin`, `src/app/prywatnosc`
  – podstrony uzupełniające, w tym dokumenty wymagane przy prowadzeniu
  kampanii w Google Ads (polityka prywatności, regulamin, dane kontaktowe).
- `src/components` – header, footer, baner zgody na cookies (RODO) oraz
  ilustracje SVG.
- `src/lib/site.ts` – pojedyncze miejsce z placeholderem domeny i adresu
  kontaktowego.

## Do zrobienia po przydzieleniu domeny

1. W `src/lib/site.ts` podmienić `SITE_DOMAIN_PLACEHOLDER` na docelową domenę
   – zmiana automatycznie zaktualizuje adres kontaktowy, `sitemap.xml`,
   `robots.txt` oraz metadane Open Graph.
2. W `src/app/prywatnosc/page.tsx` uzupełnić docelowe dane rejestrowe
   administratora danych, jeśli będą inne niż kontakt e-mail.
3. Jeśli kampania w Google Ads ma korzystać z pomiaru konwersji, dodać
   odpowiedni fragment kodu pomiarowego w `src/app/layout.tsx` dopiero po
   otrzymaniu docelowego identyfikatora – celowo nie umieszczono tu żadnego
   przykładowego/testowego identyfikatora pomiarowego.

## Deploy na Vercel

Repozytorium zawiera `vercel.json` z ustawionym frameworkiem `nextjs` oraz
regionem `fra1` (Frankfurt – najniższe opóźnienia dla ruchu z Polski).

1. Zaimportuj repozytorium w panelu Vercel (New Project → wybierz to repo).
2. Vercel wykryje Next.js automatycznie – nie trzeba nic dodatkowo
   konfigurować, komenda builda to `next build`, katalog wyjściowy
   ustawiany jest automatycznie przez adapter Next.js.
3. Po pierwszym deployu podepnij docelową domenę w zakładce Domains,
   pamiętając o wcześniejszej podmianie placeholdera opisanej wyżej.

import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieNotice } from "@/components/CookieNotice";
import { SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin-ext"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin-ext"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Przeglądarkowa strategia jednoosobowa – rozbudowa osady, technologie, teren",
    template: "%s",
  },
  description:
    "Przeglądarkowa gra strategiczna dla jednego gracza: zarządzanie osadą, drzewko technologii, teren i frakcje sterowane przez komputer. Bez rywalizacji z innymi graczami w czasie rzeczywistym.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    title: "Przeglądarkowa strategia jednoosobowa",
    description:
      "Zarządzanie osadą, drzewko technologii i teren, który realnie wpływa na decyzje. Kampania dla jednego gracza, rozgrywana w przeglądarce.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#151b15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>
        <a href="#tresc-glowna" className="visually-hidden">
          Przejdź do treści głównej
        </a>
        <SiteHeader />
        <main id="tresc-glowna">{children}</main>
        <SiteFooter />
        <CookieNotice />
      </body>
    </html>
  );
}

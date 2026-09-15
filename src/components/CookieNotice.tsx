"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import styles from "./CookieNotice.module.css";

const STORAGE_KEY = "cookie-zgoda-v1";
const SYNC_EVENT = "cookie-zgoda-zmiana";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(SYNC_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(SYNC_EVENT, callback);
  };
}

function getSnapshot(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === null;
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

function respond(value: "zaakceptowano" | "odrzucono") {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Brak dostępu do pamięci lokalnej nie powinien blokować przeglądania.
  }
  window.dispatchEvent(new Event(SYNC_EVENT));
}

export function CookieNotice() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.bar} role="dialog" aria-live="polite" aria-label="Informacja o plikach cookie">
      <p className={styles.text}>
        Ta strona korzysta z niezbędnych plików cookie oraz, po Twojej zgodzie,
        z narzędzi analitycznych i reklamowych. Szczegóły znajdziesz w{" "}
        <Link href="/prywatnosc">polityce prywatności</Link>.
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.decline} onClick={() => respond("odrzucono")}>
          Tylko niezbędne
        </button>
        <button type="button" className={styles.accept} onClick={() => respond("zaakceptowano")}>
          Akceptuję
        </button>
      </div>
    </div>
  );
}

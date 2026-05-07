const GA_ID = process.env.REACT_APP_GA_ID;
const STORAGE_KEY = 'leo-cookie-consent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;

export function loadAnalytics(): void {
  if (loaded) return;
  if (typeof window === 'undefined') return;
  if (!GA_ID) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(
        '[analytics] REACT_APP_GA_ID is not set — skipping Google Analytics load.'
      );
    }
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    (window.dataLayer as unknown[]).push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.setAttribute('data-leo-analytics', 'true');
  document.head.appendChild(script);

  loaded = true;
}

export function hasConsent(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'accepted';
  } catch {
    return false;
  }
}

export function setConsent(value: 'accepted' | 'declined'): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* storage unavailable — silently ignore */
  }
}

export const CONSENT_STORAGE_KEY = STORAGE_KEY;

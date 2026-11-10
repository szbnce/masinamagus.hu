/**
 * Fő navigáció útvonalai. A `labelKey` l10n-hivatkozás;
 * UI-szöveg a `hu.arb`-ban él, href-ek útvonaladatok.
 */
export interface NavEntry {
  href: string;
  labelKey: string;
}

export const nav: NavEntry[] = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/szolgaltatasok', labelKey: 'nav.services' },
  { href: '/diagnosztika', labelKey: 'nav.diagnostics' },
  { href: '/szakszotar', labelKey: 'nav.glossary' },
  { href: '/blog', labelKey: 'nav.blog' },
  { href: '/kapcsolat', labelKey: 'nav.contact' },
];

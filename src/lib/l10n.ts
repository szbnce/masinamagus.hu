/**
 * l10n réteg (AGENTS.md projektszabály):
 * MINDEN UI-szöveg az `src/locales/hu.arb` fájlban él, és kizárólag ezen a
 * wrapperen keresztül jelenik meg. Widgetben/oldalban hardkódolt UI-string tilos!
 *
 * Hozzáférés (AppLocalizations-szerű):
 *   import { t } from '../lib/l10n';
 *   <h1>{t('page.home.title')}</h1>
 *
 * A `hu.arb` JSON-formátumú (Flutter .arb-konvenció), kulcsai pontozott útvonalon
 * érhetők el. Hiányzó/nem-sztring kulcsnál a `t()` dob — a build és a dev is
 * azonnal jelzi a hibás hivatkozást.
 */
import raw from '../locales/hu.arb?raw';

export type L10nNode = string | { [key: string]: L10nNode };

const bundle = JSON.parse(raw) as Record<string, L10nNode>;

/** Kulcsfeloldás pontozott útvonalból (pl. "page.home.title"). */
function lookup(path: string): L10nNode | undefined {
  let node: L10nNode | undefined = bundle;
  for (const key of path.split('.')) {
    if (typeof node !== 'object' || node === null) return undefined;
    node = node[key];
  }
  return node;
}

/** UI-szöveg lekérése az l10n fájlból. */
export function t(path: string): string {
  const node = lookup(path);
  if (typeof node !== 'string') {
    throw new Error(`l10n: hiányzó vagy nem sztring kulcs: "${path}"`);
  }
  return node;
}

/** Létezik-e a kulcs (sztring levél)? */
export function has(path: string): boolean {
  return typeof lookup(path) === 'string';
}

/**
 * Nyers csomag strukturált adatokhoz (pl. szakszótár-tételek listája).
 * UI-szöveghez továbbra is a `t()` a kötelező út.
 */
export const l10n: Record<string, L10nNode> = bundle;

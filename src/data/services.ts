/**
 * A 7 szolgáltatás útvonal-kulcs párosa.
 * A `titleKey` l10n-hivatkozás; UI-szöveg a `hu.arb`-ban él.
 */
export interface ServiceEntry {
  /** URL-szlug a /szolgaltatasok/ alatt (PLAN.md 3. pont). */
  slug: string;
  /** l10n-kulcs a címhez. */
  titleKey: string;
}

export const services: ServiceEntry[] = [
  { slug: 'chiptuning-stage-1', titleKey: 'services.stage1.title' },
  { slug: 'eco-tuning-fogyasztascsokkentes', titleKey: 'services.eco.title' },
  { slug: 'egr-dpf-szoftveres-megoldasok', titleKey: 'services.dpfegr.title' },
  { slug: 'adblue-szoftveres-javitas', titleKey: 'services.adblue.title' },
  { slug: 'vag-meleginditas-javitas', titleKey: 'services.vag.title' },
  { slug: 'bmw-audi-rejtett-funkciok-kodolas', titleKey: 'services.coding.title' },
  { slug: 'navigacio-terkep-frissites', titleKey: 'services.nav.title' },
];

/**
 * Kereshető szakszótár — React-sziget (client:load).
 * UI-szöveg az l10n rétegből (glossary.* kulcsok), AGENTS.md.
 */
import { useMemo, useState } from 'react';
import { t, l10n } from '../lib/l10n';

interface GlossaryItem {
  term: string;
  def: string;
}

export default function GlossarySearch() {
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    const bundle = l10n as unknown as { glossary: { items: GlossaryItem[] } };
    return bundle.glossary.items;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('hu');
    if (!q) return items;
    return items.filter(
      (it) =>
        it.term.toLocaleLowerCase('hu').includes(q) ||
        it.def.toLocaleLowerCase('hu').includes(q),
    );
  }, [items, query]);

  return (
    <div className="glossary">
      <div className="glossary__search">
        <label htmlFor="glossary-q">{t('glossary.search_label')}</label>
        <input
          id="glossary-q"
          type="search"
          placeholder={t('glossary.search_placeholder')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="glossary__empty">{t('glossary.empty')}</p>
      ) : (
        <dl className="glossary__list">
          {filtered.map((item) => (
            <div className="glossary__item" key={item.term}>
              <dt>{item.term}</dt>
              <dd>{item.def}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

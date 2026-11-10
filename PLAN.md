# Masinamágus weboldal — Terv (1. verzió)

*Készült: 2026-11-09. Ez a dokumentum a terv, nem a weboldal. Dizájn/stylesheet később, a jóváhagyott terv után.*

## 0. Döntések, amiket most meghoztunk

| Döntés | Válasz |
|---|---|
| Szolgáltatási kör | **A régi 7 szolgáltatás marad** + új: **OBDeleven-es munkák** külön szekcióval. Hardveres ECU javítás, klónozás/immo, TCU/DSG tuning **nem** kerül fel. |
| OBDeleven | Mind a 4 kör: **kódolás/rejtett funkciók, szervizműveletek, diagnosztika, karbantartás**. |
| Stack | **Astro + React** (React komponensek, statikus kimenet — SEO + sebesség). |
| Valós adatok | Egyelőre **semmi**: az árak, adószám, referenciák, hírlevél-provider helykitöltők maradnak, a terv jelöli őket. |

## 1. Cél és pozíció (a régi PRODUCT.md-ből, változatlanul)

- **Cél:** leadgeneráló oldal — hibatünet- és szolgáltatás-tartalmak → árajánlatkérés / időpontfoglalás. Nincs webshop, minden munka egyedi egyeztetéssel.
- **Célcsoport:** magyar magánszemély autótulajdonosok (AdBlue, DPF/EGR, VAG melegindítás, fogyasztás, teljesítmény, rejtett funkciók, navi). Flotta-eco-tuning: későbbi fázis, most ne vezesse a döntéseket.
- **Hang:** „Mérünk, elemzünk, írunk. Nem tippelünk.” — mérnöki precizitás, 25 év gépészet + szoftverfejlesztés. A „nem futószalag", „nem sablonfájl" pozíció kötött.
- **Kötött bizalom-ígéretek:** egyedi kalibráció az ügyfél saját kifájolt fájljából · gyári program örökösre archiválva, ingyenes visszaállítás · előtte-utána élőadatos mérés · 1–2 nap átfutás.
- **Üzemeltető:** Szabó Zsolt E.V. / Masinamágus, 2655 Kétbodony, Rákóczi út 36. · +36 70 303 1020 · info@masinamagus.hu.
- **Jogi keret (kötelező):** DPF/EGR/SCR szoftveres módosítás kizárólag zárt pályás/K+F célra, az ÁSZF 6.2 nyilatkozatával; az oldal nem bátoríthat jogsértő közúti használatra. A disclaimer minden releváns oldalon ott legyen.

## 2. Információbázis — honnan jön a tartalom

1. **`/Users/szbnce/Pictures/masinamagus.hu`** — az információ forrása (nem a stílus!):
   - `src/locales/hu.json` — a teljes UI-szöveg: 7 szolgáltatás leírása, hero, trust, folyamat, FAQ (8 kérdés), rólunk (Mérnök vs. sufni táblázat), ártábla, referenciák, szakszótár (19 tétel), kalkulátor-szövegek, lábléc.
   - `src/content/blog/` — 4 valós cikk (AdBlue visszaszámláló, DPF regeneráció, chiptuning vs. tuningbox, checksum).
   - `src/official/ASZF.md`, `src/official/GDPR.md` — jogi szövegek (adószám-placeholderrel).
   - `PIACKUTATAS.md` / `MARKETING.md` / `PRODUCT.md` — piaci háttér, KPI-k, stratégia.
   - Megtérülés-kalkulátor logika (`SavingsCalc.tsx`) — átemelhető.
2. **Kutatás (2026-11-09, a keresők/oldalak blokkolása miatt Wayback + hivatalos források):**
   - **OBDeleven hivatalos képességlista** — App Store leírás + obdeleven.com (features, one-click-apps).
   - **ecutesting.com** — hardveres ECU javítási paletta (referencia a szolgáltatási kategóriákhoz — *csak tudásként, nem kerül fel*).
   - **quantumtuning.co.uk** — nemzetközi tuning-szolgáltatási taxonómia (TCU/DSG, economy, bench/OBD — *szintén csak tudás*).

## 3. Oldalstruktúra (információs architektúra)

```
/                    Főoldal: hero → trust strip → szolgáltatások → OBDeleven blokk →
                     folyamat (4 lépés) → rólunk (Mágus duó + Mérnök vs. sufni táblázat) →
                     FAQ → kapcsolat (időpont-mezős űrlap) → footer (disclaimer)
/szolgaltatasok      Áttekintés a 7 + OBDeleven kártyákkal
  /chiptuning-stage-1
  /eco-tuning-fogyasztascsokkentes   (megtérülés-kalkulátor itt)
  /egr-dpf-szoftveres-megoldasok     (jogi disclaimer)
  /adblue-szoftveres-javitas         (jogi disclaimer)
  /vag-meleginditas-javitas
  /bmw-audi-rejtett-funkciok-kodolas
  /navigacio-terkep-frissites
/obdeleven           ÚJ: mit tudunk OBDelevennel — lásd 4. pont
/arak                ECU-típus szerinti ártábla (EDC16/EDC17/MG1/MD1 bontás, placeholder árak)
/szakszotar          19 kifejezés, azonnali kereséssel (bővíthető)
/blog                Bloghub + 4 cikk (markdown content collection)
/kapcsolat           űrlap + telefon + e-mail + cím (a főoldalon is lehet szekció)
/aszf / /gdpr        Jogi dokumentumok (markdown)
/404
```

## 4. Az OBDeleven szekció tartalma (új, felhasználói kérés)

Egy dedikált `/obdeleven` oldal, 4 blokkban — **csak a hivatalosan igazolt képességekből**:

1. **Kódolás / rejtett funkciók** (One-Click Apps + kézi kódolás, long coding, adaptációk):
   Start-Stop memória · Needle Sweep (mutatópásztázás) · dinamikus irányjelző (Urban Joke) ·
   Virtual Cockpit téma · Video in Motion · digitális sebességkijelzés · iDrive indítóanimáció ·
   oldaljelző lámpák · CarPlay / Android Auto · + a régi „kódolás" oldal tételei.
   *Megjegyzés: a kódolható funkciók listája típusonként/évjáratonként eltér — ezt a szöveg is mondja ki.*
2. **Szervizműveletek:** szervizintervallum-reset · fékbetét csere / EPB (elektromos kézifék) ·
   Service Resets (VAG & BMW Group).
3. **Diagnosztika:** OBD2 hibakód olvasás/törlés + élőadat minden CAN-buszos autón (jellemzően 2008+);
   haladó, teljes vezérolvasás: VAG (Audi/VW/Škoda/SEAT/Cupra), BMW/MINI, Toyota/Lexus, Ford (US), Mercedes-Benz.
4. **Karbantartás:** autó egészségriport · karbantartási emlékeztető · emisszió-készültség ellenőrzés ·
   hibrid akkumulátor-ellenőrzés · útkövető · km-ellenőrzés.

A főoldali szolgáltatáslistában a „Kódolás & rejtett funkciók" kártya alá/ mellé bejön egy „OBDeleven –
kódolás, diagnosztika, szerviz" belépési pont. A régi 7 szolgáltatás szövegei változatlanul átjönnek.

## 5. Technikai terv

- **Astro (legújabb) + React-szigetek** (kalkulátor, kereső a szakszótárban, űrlap). TypeScript.
- **l10n (projektszabály, AGENTS.md):** minden UI-szöveg l10n-fájlba kerül és onnan hivatkozva jelenik meg;
  widgetben hardkódolt string **tilos**. Formátum: `.arb` fájl (`src/locales/hu.arb`) + egy vékony
  l10n-wrapper (AppLocalizations-szerű hozzáférés). Ha a régi JSON-formátumot jobban szeretnéd, egy sorba
  kerül átállítani — a lényeg a kulcs-alapú hivatkozás.
- **Blog:** Astro content collections, markdown + frontmatter (a 4 régi cikk átjön).
- **Űrlap:** marad a mailto-megoldás (nincs backend) — ahogy a régi is, GDPR-tiszta szöveggel.
- **SEO:** sitemap.xml, robots.txt, meta-címek/leírások l10n-ből, schema.org `AutoRepair` + BreadcrumbList,
  tiszta URL-ek (fenti struktúra), 404 oldal. (A régi SPA-hiba: GitHub Pages fallback — statikus Astro-nál
  ez egyszerűbb.)
- **Deploy:** GitHub Pages. A repót a felhasználó hozza létre és kezeli a saját GitHub-fiókjában
  (döntés: 2026-11-09). A kész oldal preview URL-en készül el; a `masinamagus.hu` átállás időpontjáról
  a felhasználó dönt.
- **Analitika:** GA4 + Google Search Console (döntés: 2026-11-09). A GA4 süti-alapú → **cookie-consent
  sáv** kell az oldalra, és a GDPR tájékoztató cookie-fejezettel bővítendő.
- **Jogi oldalak:** ÁSZF + GDPR markdown, benne az `[Az Ön adószáma]` / `[Az Ön nyilvántartási száma]`
  helykitöltők maradnak (nincs valós adat).

## 6. Minőségi elv — „nem AI slop”

- A build/dizájn fázisban használjuk a **`/unslop`** és **`/impeccable:impeccable`** skilleket.
- Konkrét anti-slop szabályok:
  - Nincs kitalált szám, vélemény, referencia, garancia — a placeholder marad placeholder, jelölve.
  - Nincs sablon-hero („Üdvözöljük a … világában"), nincs emoji-bulleted feature-lista, nincs
    „Miért válassz minket?"-klisé — a régi brand-hang („Mérünk, elemzünk, írunk”) a mérvadó.
  - A stílus az Impeccable-folyamattal dől el, nem ebben a tervben; a tartalom viszont végig valós.
  - Minden szöveg az l10n-ben (AGENTS.md), akkor is, ha „csak egy gombfelirat”.

## 7. Ütemezés (fázisok)

1. **Scaffold:** Astro + React projekt init `masinamagusuj/`, l10n réteg, alap routing. *(kódolás)*
2. **Dizájn-irány:** `/impeccable:impeccable` — design system, komponensnyelv + **wordmark tervezése**
   („Masina‖mágus" bontás, jóváhagyással; nincs fotóanyag, tipográfiai/sémás vizuális világ kell). *(dizájn)*
3. **Tartalom-átvitel:** régi hu.json + blog + ÁSZF/GDPR tartalmak strukturálása az új oldalakhoz,
   az OBDeleven szekció megírása (4. pont). *(tartalom)*
4. **Oldalak felépítése:** főoldal → szolgáltatásoldalak → /obdeleven → /arak → /szakszotar → blog → kapcsolat.
5. **SEO + jog:** schema, sitemap, meta, disclaimer-ek, cookie-consent sáv + GDPR cookie-fejezet, 404.
6. **Minőségi ellenőrzés:** `/unslop` + Impeccable finish review → javítások.
7. **Deploy:** GitHub Pages, Search Console bekötés (a MARKETING.md 1. heti lépései szerint).

## 8. Nyitott kérdések / kockázatok

- **Domain/deploy:** *lezárva (2026-11-09):* preview URL-en készül az oldal, a cutover időpontjáról a
  felhasználó dönt; a repót ő hozza létre és kezeli.
- **Később feltöltendő valós adatok** (a régi MARKETING.md „még hiányzik" listája): árak · referenciák/fotók ·
  adószám/nyilvántartási szám · hírlevél-provider (jelenleg mailto) · og:image · FB/YouTube linkek.
- **Jogi pontosság az OBDeleven szekcióban:** a kódolások közül egyes tételek (pl. Video in Motion) szürke
  zónásak lehetnek közúton — a szövegezésben ezt a régi disclaimer-logika szerint kezeljük.
- **Szakszótár bővítés:** az OBDeleven-es körhöz jöhetnek új szavak (adaptáció, long coding, EPB, BEM) —
  a 19 tétel bővíthető.
- **Blog admin:** markdown marad (döntés később: CMS).

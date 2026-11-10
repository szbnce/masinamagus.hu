---
name: "Masinamágus — Zománctábla-műhely"
description: "ECU-szerviz és chiptuning műhely webhelye: olaj-fekete fal, zománctáblák, sarok-csavarok, kifüggesztett mért értékek."
colors:
  oxblood: "#7a1f1f"
  oxblood-deep: "#5c1616"
  enamel-blue: "#1e3a5f"
  brass: "#e4b84a"
  wall: "#211e1a"
  cream: "#efead8"
  cast: "#2e2a24"
  cast-2: "#4a4136"
  parchment: "#c9bfa4"
  paper: "#ffffff"
  glaze: "rgba(255, 255, 255, 0.14)"
typography:
  display:
    fontFamily: "Oswald, 'Arial Narrow', sans-serif"
    fontSize: "clamp(34px, 4.2vw, 54px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Oswald, 'Arial Narrow', sans-serif"
    fontSize: "clamp(28px, 3.2vw, 42px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "0.02em"
  title:
    fontFamily: "Oswald, 'Arial Narrow', sans-serif"
    fontSize: "clamp(21px, 2vw, 28px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "0.02em"
  body:
    fontFamily: "Barlow, 'Helvetica Neue', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "13px"
    fontWeight: 400
    letterSpacing: "0.18em"
  wordmark-xl:
    fontFamily: "Oswald, 'Arial Narrow', sans-serif"
    fontSize: "clamp(44px, 5.6vw, 84px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  wordmark-md:
    fontFamily: "Oswald, 'Arial Narrow', sans-serif"
    fontSize: "clamp(26px, 2.4vw, 34px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  wordmark-sm:
    fontFamily: "Oswald, 'Arial Narrow', sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  hero-phone:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "clamp(26px, 7.6vw, 72px)"
    fontWeight: 600
  cta-phone:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "clamp(32px, 4.6vw, 62px)"
    fontWeight: 600
  button:
    fontFamily: "Oswald, 'Arial Narrow', sans-serif"
    fontSize: "clamp(17px, 1.5vw, 22px)"
    fontWeight: 600
    letterSpacing: "0.12em"
  card-title:
    fontFamily: "Oswald, 'Arial Narrow', sans-serif"
    fontSize: "clamp(19px, 1.8vw, 25px)"
    fontWeight: 600
  article-h2:
    fontFamily: "Oswald, 'Arial Narrow', sans-serif"
    fontSize: "clamp(22px, 2.2vw, 30px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "0.02em"
  fact:
    fontFamily: "Barlow, 'Helvetica Neue', sans-serif"
    fontSize: "clamp(16px, 1.4vw, 20px)"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0.01em"
  stat:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "clamp(30px, 3vw, 44px)"
    fontWeight: 600
  nav:
    fontFamily: "Oswald, 'Arial Narrow', sans-serif"
    fontSize: "15px"
    fontWeight: 500
    letterSpacing: "0.14em"
  meta:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "14px"
    fontWeight: 400
    letterSpacing: "0.12em"
  micro:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.12em"
rounded:
  plate: "16px"
  plaque: "10px"
  panel: "12px"
  inset: "8px"
  code: "5px"
  focus: "2px"
  slot: "0.05em"
  pill: "100px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  section: "clamp(56px, 8vw, 110px)"
  plate-pad: "clamp(26px, 3vw, 38px)"
  gap: "clamp(18px, 2.4vw, 30px)"
components:
  button-primary:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.oxblood}"
    rounded: "{rounded.plaque}"
    padding: "0.75em 1.2em"
  button-secondary:
    textColor: "{colors.cream}"
    padding: "0.35em 0.1em"
  plate-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.cast}"
    rounded: "{rounded.plate}"
    padding: "{spacing.plate-pad}"
  plate-blue:
    backgroundColor: "{colors.enamel-blue}"
    textColor: "{colors.cream}"
    rounded: "{rounded.plate}"
    padding: "{spacing.plate-pad}"
  plate-red:
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.cream}"
    rounded: "{rounded.plate}"
    padding: "{spacing.plate-pad}"
---

# Design System: Masinamágus — Zománctábla-műhely

## Overview

**Creative North Star: "Zománctábla-műhely — a műhely fala"**

A webhely a kétbodonyi műhely fala. Az alap egy olaj-fekete, finoman csíkozott falfelület (#211E1A), és minden tartalom zománctáblaként lóg rajta: krém, zománckék vagy oxblood mező, festett peremmel, sarok-csavarokkal, enyhe zománcfénnyel. A világ tézise szerint ami ki van függesztve, az el van végezve — a mért érték és a telefonszám nagyobb hangsúlyt kap, mint bármilyen szlogen. A felszín módja Persuade: a látogató dönt és cselekszik (árajánlatkérés vagy telefonhívás).

Az anyaghasználat tisztán tipografikus és CSS-alapú: raszteres képanyag nélkül. A hangulat sűrű, ipari és becsületes — sötét fal, nehéz zománctáblák, tömör verzál jelzőtábla-tipográfia (Oswald), nyugodt törzsszöveg (Barlow), és tabuláris monó számok (IBM Plex Mono) minden mérthez. Az egyetlen szankcionált szerzői mozgáspillanat: a táblák egyszer, súlyosan a falra ülnek (késleltetett blur→éles stagger), és a zománcfény egyszer áthalad a fő táblán. Semmi nem loopol; minden más mozgás állapotváltozás (hover, focus).

Kifejezett vizuális elutasítások (a világ maga utasítja vissza): a kategória-alapértelmezés — középre zárt hero autófotóval, egyforma kártyákkal, kék gombbal —; kicker/eyebrow a címek felett; gradiens szöveg; kemény eltolt árnyék (hard offset shadow); emodzsi-ikonok; rendszer-display betűtípusok; fotó- vagy kép-alapú díszítés.

**Key Characteristics:**
- Olaj-fekete fal + zománctáblák: krém / zománckék / oxblood mezők, 8px festett perem, négy sarok-csavar, zománcfény
- Verzál jelzőtábla-tipográfia (Oswald) a címekben, nyugodt törzsszöveg (Barlow), tabuláris monó (IBM Plex Mono) minden számnak
- Egyszeri, súlyos leülés-animáció (`plate-settle`, stagger) + egyszeri zománcfény-átvonulás (`sheen-sweep`); `prefers-reduced-motion` alatt mindkettő kikapcsol
- Tisztán tipografikus/CSS anyag: raszteres képanyag nélkül, kézzel szerkesztett SVG-ikonkészlet
- A +36 70 303 1020 telefonszám a legnagyobb funkcionális elem (clamp(26px, 7.6vw, 72px) monó), közvetlenül a wordmark után

Képanyag-provenance: a szállító build egyetlen kép-assetje a `public/favicon.svg` — szerkesztett SVG (krém zománctábla + öntött „M" + oxblood elválasztó), a wm-zomanc wordmark-ból származtatva. Raszteres asset nincs (provenance: N/A). A `src/content/blogData.json` Unsplash-URL-jai egyetlen template-ben sem renderelődnek — nem szállító assetek.

## Colors

A paletta a műhely anyagaiból áll: olaj-fekete fal, zománcok (krém, zománckék, oxblood), öntött bronz-szöveg és egy szűkös sárgaréz fém-accent.

### Primary
- **Oxblood** (#7A1F1F): a műhely festett accentje — a krém táblák pereme, a vörös figyelmeztető/jogi táblák mezője, a mért értékek és delta-számok kiemelése, a fókusz-gyűrű a táblákon belül, a hero telefonszám aláhúzása (5px).
- **Oxblood Deep** (#5C1616): csak a lábléc jogi disclaimer-sávjának töltete — az oxblood sötétebb foka, egy felületen.

### Secondary
- **Zománckék** (#1E3A5F): a szolgáltatás-táblák alapértelmezett zománcmezője; fehér (krém) peremmel.

### Tertiary
- **Sárgaréz** (#E4B84A): szűkös fém-accent — focus-gyűrű (3px), hover-állapotok, szövegkijelölés (`::selection` krém helyett), a lábléc kis fejlécei, az ikonok színe a színes táblákon, a szkrollbar-hover. Soha nem nagy felületi töltés.

### Neutral
- **Olaj-fekete fal** (#211E1A): az oldal alapja; a textúrája finom ismétlődő csík `wall-line` (rgba(239, 234, 216, 0.03)) 115°-ban, 26px periodussal.
- **Zománckrém** (#EFEAD8): a fő tábla-mező és a sötét felületek szövegszíne (utóbbi `--on-dark` álnéven, azonos érték).
- **Öntött szöveg / Cast** (#2E2A24): törzsszöveg krém táblán.
- **Öntött másodlagos / Cast-2** (#4A4136): másodlagos szöveg krém táblán (tábla-megjegyzések, egység-feliratok).
- **Pergamen / Parchment** (#C9BFA4): másodlagos szöveg a falon (leadek, lábléc-szöveg, fal-feliratok).
- **Csavarfém** (#C9C2AE → #5A544A): a sarok-csavarok radial-gradiense (`radial-gradient(circle at 35% 35%, ...)`).

### Named Rules
**A Peremszabály (The Rim Rule).** A krém táblára oxblood perem jár; a zománckék és oxblood táblákra krém perem. A perem 8px (gombokon 6px, paneleken 6px) — festett zománcszegély, nem vonal.

**A Sárgaréz-ritkaság Szabály (The Brass Scarce Rule).** A sárgaréz csak accentként jelenik meg (focus, hover, kis fejléc, ikon, jelölés) — soha tölt ki táblát vagy szekciót; a ritkasága a lényeg.

**A 4.5 Kontraszt Szabály.** Törzsszöveg kontrasztja mindenütt ≥ 4.5:1 — cast krémen, krém/kék a falon, ox-bloodon és zománckéken. A parchment és cast-2 csak másodlagos szövegre.

## Typography

**Display Font:** Oswald (tartalék: 'Arial Narrow', sans-serif) — önhosztolt woff2 (500/600/700, latin + latin-ext)
**Body Font:** Barlow (tartalék: 'Helvetica Neue', sans-serif) — önhosztolt woff2 (400/500/600)
**Label/Mono Font:** IBM Plex Mono (tartalék: ui-monospace, 'SF Mono', Menlo, monospace) — önhosztolt woff2 (400/500/600)

**Character:** A párosítás műhely-jelrendszer: az Oswald tömör, záró, feliratfestő verzálja a kifüggesztett táblák hangja; a Barlow nyugodt, gépközeli törzsszöveg; a Plex Mono a mérőórák és adattáblák nyelve — minden szám monóban, tabuláris számjegyekkel.

### Hierarchy
- **Display** (Oswald 600, clamp(34px, 4.2vw, 54px), line-height 1.05, letter-spacing 0.02em, UPPERCASE): h1 — oldalcímek, szekciócímek. Mindig verzál, kivéve a wordmarkot.
- **Headline** (Oswald 600, clamp(28px, 3.2vw, 42px), 1.05, 0.02em, UPPERCASE): h2 — szekciófejek, táblacímek.
- **Title** (Oswald 600, clamp(21px, 2vw, 28px), 1.05, 0.02em, UPPERCASE): h3 — tábla-alcímek, folyamat-lépések, FAQ-kérdések.
- **Body** (Barlow 400, 18px, line-height 1.6): törzsszöveg; max. sorhossz 68ch (`--measure`).
- **Label** (IBM Plex Mono 400, 13px, letter-spacing 0.18em, UPPERCASE): tábla-feliratok (`plate__label`), fal-feliratok (`wall-note`, 0.22em), adatláblák fejléce.
- **Card title** (Oswald 600, clamp(19px, 1.8vw, 25px)): kártya- és táblacímek a rácsokban (szolgáltatás-, blog- és kapcsolat-kártyák).
- **Article h2** (Oswald 600, clamp(22px, 2.2vw, 30px)): a blogposztok belső fejezetcímei — a Headline olvasási lépcsője.
- **Fact** (Barlow 400, clamp(16px, 1.4vw, 20px), line-height 1.35): a táblák tény-sorai (`plate__fact`).
- **Stat** (IBM Plex Mono 600, clamp(30px, 3vw, 44px), tabular): a kifüggesztett mért számok (előtte / utána / delta).
- **Nav** (Oswald 500, 15px, letter-spacing 0.14em): navigációs linkek.
- **Meta** (IBM Plex Mono 400, 14px, letter-spacing 0.12em): meta-sorok, címkék, kis lábléc-szöveg.
- **Micro** (IBM Plex Mono 400, 12px, letter-spacing 0.12em): címkék és apró feliratok (pl. blog-tag-ek).
- **Button** (Oswald 600, clamp(17px, 1.5vw, 22px), letter-spacing 0.12em): a gombok feliratai.

Külön álló forma: a **wordmark** (Oswald 700, kevert kis/nagybetűs, domború öntvény, `clamp(44px, 5.6vw, 84px)` XL / `clamp(26px, 2.4vw, 34px)` MD / 22px SM) és a **hero telefonszám** (IBM Plex Mono 600, clamp(26px, 7.6vw, 72px), 5px oxblood aláhúzás) — a legnagyobb funkcionális elem. A záró CTA telefonszáma ugyanebben a monó formában, kisebb lépcsőn (IBM Plex Mono 600, clamp(32px, 4.6vw, 62px), 5px sárgaréz aláhúzás).

### Named Rules
**A Jelzőtábla-verzál Szabály.** A megjelenítő betű mindenütt UPPERCASE — egy kivétel: a wordmark kevert kis/nagybetűs formája a jóváhagyott wm-zomanc szerint kötött, soha nem alakítható át.

**A Tabuláris Számjegy Szabály.** Minden mért érték, előtte-utána szám, telefonszám és adattábla-szám IBM Plex Mono, `font-variant-numeric: tabular-nums` — a számok oszlopban állnak, a delta oxblood.

## Layout

A tér modellje a fal: a `.shell` középre zárt, `width: min(1344px, 100% - 2 * clamp(20px, 4vw, 48px))` — a falból mindig látszik a táblák körül és között. A szekciók függőleges ritmusa `clamp(56px, 8vw, 110px)`; a táblák belső paddingje `clamp(26px, 3vw, 38px)`; a rács-közök `clamp(18px, 2.4vw, 30px)` (hero: `clamp(16px, 2vw, 26px)`). A sűrűség ipari: bőséges tábla-belső, de a fal mindig jelen van.

Az első képernyő rácsa: `grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr)` területekkel — balra a nagy krém főtábla (wordmark, szlogen, telefonszám), jobbra négy kisebb szolgáltatás-tábla függőleges stackben, alul balra az olajtégely-címke medál (pill), alul jobbra a krém CTA-tábla. A szolgáltatás-rács `auto-fit, minmax(300px…340px, 1fr)`; a folyamat 4 oszlop; a lábléc 4 oszlop (1.4fr 1fr 1.2fr 1.1fr); a kapcsolat-oldal 1fr / 1.45fr.

Responsive töréspontok (a buildben megfigyelt): 1100px (cím-sáv elrejtése), 1000px (folyamat 2 oszlop), 980px (hero egy oszlopra áll, a stack 2×2), 900px (mobilmenü, lábléc 2 oszlop, demo/kapcsolat egy oszlop), 760px (bizalom-sorok 1 oszlop), 560px (hero-stack 1 oszlop, CTA oszlopban, cookie-gombok teljes szélesség).

### Named Rules
**A Fal-látható Rács Szabály.** A táblák között mindig látszik a fal — a tartalom soha nem fut össze teljes szélességű, keret nélküli sávokká; ami tartalmat hordoz, az plakett.

## Elevation & Depth

A rendszer vegyes, de szigorú: a mélységet nehéz, sötét, széles ambient árnyékok és az anyag (perem, zománcfény, domborítás) adják — nincs kemény eltolt árnyék (hard offset shadow) sehol. A táblák súlyosan ülnek a falon; a hover enyhén megemeli őket. A `text-shadow` csak a wordmark domború öntvény-hatására szolgál.

### Shadow Vocabulary
- **Tábla-nyugalmi** (`box-shadow: 0 14px 28px rgba(0, 0, 0, 0.45)`): minden `.plate` alapállapota.
- **Tábla-emelés** (`0 20px 36px rgba(0, 0, 0, 0.55)`): `.plate--interactive:hover` — a tábla 2px-t emelkedik (`translateY(-2px)`).
- **Gomb-nyugalmi / gomb-hover** (`0 10px 22px rgba(0, 0, 0, 0.4)` / `0 16px 28px rgba(0, 0, 0, 0.5)`): elsődleges gomb.
- **Overlay** (`0 22px 44px rgba(0, 0, 0, 0.55)` a cookie-sáv, `0 18px 36px rgba(0, 0, 0, 0.5)` a mobilmenü): lebegő krém panelek a fal fölött.
- **Medál** (`0 10px 22px rgba(0, 0, 0, 0.45)`): az olajtégely-címke.
- **Csavar** (`0 1px 2px rgba(0, 0, 0, 0.5)`, hover-en `0 3px 5px rgba(0, 0, 0, 0.6)`): a sarok-csavarok — hover-en a csavar vet árnyékot.

Anyagmélység: 8px-es festett perem; zománcfény (`.plate::after`, `linear-gradient(160deg, rgba(255,255,255,0.14), rgba(255,255,255,0) 38%)`); domború öntvény a wordmarkon (`text-shadow: 0 2px 0 rgba(255,255,255,0.35), 0 -1px 0 rgba(0,0,0,0.25)`).

### Named Rules
**Az Anyag-gradiens Szabály.** CSS-gradiens kizárólag anyagtextúraként létezik: falcsík (115° repeating-linear-gradient), zománcfény (160° fehér fade), csavarfej (radial), sheen-átvonulás (100° ferde fehér sáv). Szövegen, gombokon, dekoratív színátmenetként soha.

**A Súlyos Ülés Szabály.** Minden árnyék széles, sötét és ambient — az elemek a falon ülnek, nem lebegnek neon-glow-ban; kemény, 1px-es eltolt árnyék nincs a rendszerben.

## Shapes

A formanyelv a zománctábla: lekerekített sarkok, vastag festett perem, kerek csavarfejek. A `.plate` radiusa 16px (`--plate-radius`), a perem 8px (`--plate-border`); a belső zománcfény sugara 10px (`calc(16px - 8px + 2px)`). A hívó elemek (elsődleges gomb, input, textarea, footer-disclaimer) 10px plakett-nyelven beszélnek; a lebegő panelek (cookie-sáv, mobilmenü-lista) 12px 6px peremmel; a mobilmenü-összefoglaló 8px 2px peremmel. A hero medál egyedüli kivétel: teljes pill (`border-radius: 100px`, 7px oxblood perem) — olajtégely-címke.

A sarok-csavarok 14px-es körök, 14px-re a tábla sarkaitól (bal-fent/jobb-fent/lent), mindig négy. Az adattábla 2px-es alsó vonalakkal tagol (`rgba(46, 42, 36, 0.18)`), fejlécei verzál display-feliratok.

### Named Rules
**A Plakett Szabály.** Ami a falon tartalmat hordoz, az plakett: lekerekített (16px), peremezett (8px), csavarozott. A színes „border-left" kiemelés tilos — a figyelmeztetés teljes plakett (pl. a lábléc-disclaimer oxblood-deep mező, 3px krém perem).

## Components

### Zománctábla (signature)
A zománctábla az alap-anyagegység: minden tartalom ezen ül — a műhely fali jelrendszere.
- **Shape:** radius 16px, 8px festett perem, padding `clamp(26px, 3vw, 38px)`; négy sarok-csavar (14px, `radial-gradient(circle at 35% 35%, #C9C2AE, #5A544A)`)
- **Color assignment:** `.plate--cream` (krém mező, oxblood perem, cast szöveg), `.plate--blue` (zománckék mező, krém perem), `.plate--red` (oxblood mező, krém perem); az alap `.plate` kék. A perem a Peremszabály szerint.
- **Material:** zománcfény overlay (`.plate::after`, 160° fehér fade); a tartalom a fény alatt.
- **States:** `.plate--interactive` hover: `translateY(-2px)` + mélyebb árnyék 0.25s `--ease-settle` alatt; a csavarok árnyéka nő.
- **Motion:** `plate-settle` — egyszeri, 0.9s `cubic-bezier(0.16, 1, 0.3, 1)` blur(10px)→éles + `translateY(-10px)`→0 stagger (0.05 / 0.18 / 0.31 / 0.44 / 0.57s); `sheen-sweep` — egyszeri 1.6s zománcfény-átvonulás a fő táblán (0.7s késleltetéssel). `prefers-reduced-motion: reduce` alatt mindkettő `animation: none`.

### Buttons
- **Shape:** az elsődleges gomb kis plakett — 10px radius, 6px oxblood perem; a másodlagos gomb perem nélküli, 3px-es aláhúzás (radius 0).
- **Primary:** krém háttér, oxblood szöveg, Oswald 600 verzál (clamp(17px, 1.5vw, 22px), letter-spacing 0.12em), padding `0.75em 1.2em`; árnyék lásd Elevation.
- **Hover / Focus:** hover `translateY(-2px)` + mélyebb árnyék 0.2s; focus-visible 3px sárgaréz outline (3px offset) — táblán belül oxblood outline.
- **Secondary:** krém szöveg a falon, 3px aláhúzás; hover sárgaréz. `.btn--on-cream` változat: cast szöveg/aláhúzás, hover oxblood.

### Wordmark
„Masina‖mágus" — zománc-öntvény (wm-zomanc, jóváhagyva 2026-11-09): kevert kis/nagybetűs Oswald 700, domború öntvény (text-shadow), a ‖ dupla oszlop maratott fémválasztó (0.16em × 0.78em sáv, oxblood — sötét táblán sárgaréz —, inset árnyékkal). A szétválasztás kötött; soha nem sima tipográfiai jellé alakítandó.

### Icons
Kézzel szerkesztett SVG-készlet (`Icon.astro`, 16 jel): azonos 24-es rács, 2px stroke, lekerekített végek, `currentColor`. Nincs ikon-könyvtár, nincs emodzsi, nincs unicode-jel.

### Navigation
Verzál Oswald 15px/500, letter-spacing 0.14em, parchment szín a falon; hover sárgaréz aláhúzás (2px); aktív oldal oxblood aláhúzás. 900px alatt `<details>` mobilmenü: sárgaréz csík-ikonos summary (8px, 2px parchment perem), krém legördülő panel (12px, 6px oxblood perem).

### Inputs / Fields
Mono tipográfiájú mezők (IBM Plex Mono 17px), fehér háttér, 3px cast perem, 10px radius, padding `12px 14px`; a címkék Oswald verzál 14px (0.12em). Focus-visible: 3px oxblood outline (2px offset). A caret oxblood.

### Data Table
`tabular-nums` adattábla: balra zárt szöveg, jobbra zárt monó számok (`.num`), 2px-es alsó vonalak; a mért „utána" és delta értékek oxblood, félkövér — a kifüggesztett mért érték.

### CTA-tábla és jogi plakett
A záró CTA oxblood tábla (Screws + középre zárt szöveg + elsődleges gomb + nagy monó telefonszám, sárgaréz aláhúzás-hover). A jogi disclaimer nem sáv border-leftezve, hanem teljes plakett: oxblood-deep mező, 3px krém perem, 10px radius.

### Cookie-sáv
Krém overlay-panel a fal fölött: 6px oxblood perem, 12px radius, mély overlay-árnyék; benne elsődleges gomb + `btn--on-cream` másodlagos gomb.

## Do's and Don'ts

### Do:
- **Do** minden tartalmi egységet zománctáblaként kezelni: 16px lekerekítés, 8px festett perem (Peremszabály), négy sarok-csavar — a falon csak plakett lóghat.
- **Do** minden számot (mért érték, telefonszám, adattábla) IBM Plex Mono tabuláris számjegyekkel megjeleníteni; a telefonszám a legnagyobb funkcionális elem (clamp(26px, 7.6vw, 72px)).
- **Do** a figyelmeztető és jogi tartalmakat teljes plakett-ként megjeleníteni (pl. oxblood-deep mező, 3px krém perem) — soha színes border-left kiemelésként.
- **Do** a DPF/EGR/SCR szoftvermódosításokat kizárólag zárt pálya / K+F / hobby keretben, az ÁSZF 6.2 záradékával mutatni.
- **Do** a `prefers-reduced-motion` esetén minden szerzői animációt kikapcsolni (settle, sheen, hover-transition).
- **Do** önhosztolt betűtípusokat használni (public/fonts woff2, latin + latin-ext); a betűtípus-készlet zárt: Oswald, Barlow, IBM Plex Mono.

### Don't:
- **Don't** kitalált árat, véleményt, értékelést, nyitvatartást vagy garanciaszámot megjeleníteni; az egyetlen két valós ügyfélidézet (H. Martin Golf VII Stage 1; S. Zsolt Mercedes Sprinter OM651 163→193 ló) szó szerint, a felkiáltójellel együtt szerepel.
- **Don't** kicker/eyebrow-t, gradiens szöveget, kemény eltolt árnyékot, emodzsi-ikont vagy rendszer-display betűtípust használni.
- **Don't** CSS-gradienst anyagtextúrán kívül (falcsík, zománcfény, csavarfej, sheen) alkalmazni.
- **Don't** raszteres képanyagot, fotót, og:image-et vagy közösségi média linket beépíteni — a szállító build tisztán tipografikus/CSS (egyetlen kép-asset: `public/favicon.svg`, szerkesztett SVG).
- **Don't** felkiáltójelet marketing-szövegben használni — felkiáltójel csak jogi/compliance bélyegben és a szó szerinti ügyfélidézetekben marad.
- **Don't** tegezni — minden megszólító és cselekvésre hívó szöveg önöz (jóváhagyott döntés: „Önözés mindhol"; a szó szerinti ügyfélidézetek a maguk nyelvén maradnak).
- **Don't** loop-animációt bevezetni — a mozgás egyszeri (leülés, sheen) és állapot-reakció (hover, focus); a táblák nem „úsznak" folyamatosan.
- **Don't** a DPF/EGR/SCR módosításokat közúti használatra bátorító kontextusban ábrázolni vagy sugallni.
- **Don't** UI-szöveget a widgetekben hardkódolni — minden felületszöveg az l10n rétegből (`hu.arb`, `t()`) érkezik.

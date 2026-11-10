---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface brief — masinamagusuj.hu

## Scope and mode
A Masinamágus teljes új webhelye (Astro + React, statikus; GitHub Pages preview, a masinamagus.hu leváltásáról a felhasználó dönt). A felszín módja Persuade: a látogató dönt és cselekszik. Az index a belépő; a /szolgaltatasok, /obdeleven, /arak, /szakszotar, blog és /kapcsolat ugyanebből a világból épül.

## Audience, job, action, proof, constraints
- Közönség: magyar autótulajdonosok, akik ECU-szervizt és chiptuningot keresnek, és óvakodnak a hangzatos ígéretektől.
- Feladat: megértsék, mit csinál a műhely, mi a folyamat, és mi mérhető.
- Cselekvés: árajánlatkérés vagy telefonhívás (+36 70 303 1020), időpont-egyeztetés.
- Bizonyíték: mért előtte-utána értékek (szintetikus demó, jelölve), a gyári fájl archiválása, a munkafolyamat lépései, az OBDeleven-képességek.
- Kötések: minden UI-szöveg a hu.arb-ből, t()-vel; nincs kitalált ár, vélemény vagy garancia; DPF/EGR/SCR csak zárt pálya, K+F, hobby (ÁSZF 6.2); cookie-consent sáv + GDPR cookie-fejezet (GA4).

## Direction
Zománctábla-műhely — a safer kéz harmadik kártyája, a felhasználó döntése (2026-11-09), code-led. Emlékezetes pillanat: a kifüggesztett mért érték a zománctáblán, a telefonszámmal azonos hangsúllyal.

## Unresolved decisions
- A „Masina‖mágus" wordmark jóváhagyva (2026-11-09): Zománc-öntvény változat — kevert betű, domborított öntvény, a ‖ maratott fémválasztó (PRODUCT.md Brand Commitments).
- Kézzel rajzolt SVG-ikonrendszer vs. icon library.

## Direction contract

THESIS: A webhely a műhely fala: minden szolgáltatás kifüggesztett tény, a mért érték és a telefonszám nagyobb, mint a szlogen. A kategória-alapértelmezést — középre zárt hero autófotóval, egyforma szolgáltatás-kártyákkal, kék gombbal — visszautasítja.

OWN-WORLD: Olaj-fekete fal (#211E1A) zománctáblákkal: a fő tábla törtfehér zománc (#EFEAD8) oxblood kerettel (#7A1F1F), a szolgáltatás-táblák zománckék (#1E3A5F) és oxblood mezőkön. Minden elem fémlemez: domború perem, sarok-csavarok, enyhe patina, zománcfény. Tömör, zárt verzál jelzőtábla-tipográfia; tabuláris számok a mért értékeknek. Tartalom nélkül is felismerhető: sötét fal, egy nagy krém tábla, mellette kisebb színesek.

STORY: A látogató egy valódi műhely falát látja: ami ki van függesztve, az el van végezve. Elhiszi, hogy helyi, mért munka folyik itt, nem ígéretgyártás; cselekvése a telefonhívás vagy az árajánlatkérés.

FIRST VIEWPORT: Teljes szélességű olaj-fekete fal. Balra nagy krém zománctábla: Masina‖mágus wordmark, egy sor szlogen, alatta a +36 70 303 1020 a lap legnagyobb elemeként. Jobbra négy kisebb tábla függőlegesen: chiptuning, eco-tuning, EGR/DPF oxblood tábla a zárt pályás záradékkal, AdBlue. Bal alul olajtégely-címke medál, jobb alul a krém CTA-tábla: „Kérjen árajánlatot" és „Szolgáltatások →". Aláírás-interakció és mozgásnyelv: a táblák súlyosan a falra ülnek — egyszeri, késleltetett blur→éles exponenciális ease-out, hover-en a tábla 2 px-t megemelkedik és a csavarok árnyékot vetnek; a zománcfény egyszer áthalad a fő táblán.

FORM: A forma a zománctábla-műhely — műhely-fali jelrendszer (zománctáblák és olajtégely-címkék); a rendezett hét jelölt listáján hetedik, a safer kéz harmadik helyezettje, a felhasználó választása. SEED REFERENCE: seed:c306336ecd135342.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

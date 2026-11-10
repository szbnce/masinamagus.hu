# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + React (a felhasználó döntése, 2026-11-09): statikus kimenet, React-szigetek interaktív elemekhez, TypeScript. UI-szöveg kizárólag l10n-fájlból (`src/locales/hu.arb` + l10n-wrapper); widgetben hardkódolt string tilos (AGENTS.md projektszabály). Deploy: GitHub Pages.

## Users

Elsődleges: magyar magánszemély autótulajdonosok, akiknek ECU-val kapcsolatos problémájuk vagy optimalizálási igényük van (AdBlue-visszaszámláló, DPF/EGR gondok, VAG melegindítás, fogyasztáscsökkentés, teljesítmény, rejtett funkciók kódolása, OBDeleven-es szerviz/kódolás/diagnosztika, navigációfrissítés). Helyzetük: tünetet és árat keresnek az interneten, mielőtt bárkire rábíznák az autójukat; félnek a silány tömegfájloktól és a tuningboxos félrevezetéstől. Feladatuk: megbízható, mért, tisztességes árú szoftveres megoldást kapni anélkül, hogy kockára tennék a motort.

Tervezett, de jelenleg nem célzott szegmens (későbbi fázis): céges flották eco-tuningja mérhető megtérüléssel. A jövőbeli bővítés számolhat vele, de most ne irányítsa a döntéseket.

## Product Purpose

A Masinamágus ECU-műhely leadgeneráló weboldala: hibatünet- és szolgáltatás-tartalmakkal bizalmat épít, és árajánlatkérésre/időpontfoglalásra konvertál. A siker: az első fizető ügyfél minél előbb, utána mérhető, gépesített ügyfélszerzés. KPI-k: heti 3+ árajánlatkérés, havi 8+ fizető munka, havi 500+ organikus látogató, 10+ Google értékelés, 200+ hírlevél-feliratkozó.

## Positioning

A magyar ECU-piac egyetlen szereplője, amely az egyedi, az ügyfél saját kifájolt fájljából készült kalibrációt, az örökösre archivált gyári szoftvert és az előtte-utána mérést a piac egyedüli interaktív eszközeivel (megtérülés-kalkulátor, kereshető szakszótár) és kitalált ár/vélemény/garancia nélküli őszinte bizalomépítéssel kombinálja — szemben a piacvezető (MMC AutoChip, 3 domain) elavult, eszköztelen felületével. Új elem: dedikált OBDeleven-szekció (kódolás, szervizműveletek, diagnosztika, karbantartás) — a régi 7 szolgáltatás mellett ez az egyetlen bővítés.

## Operating Context

- Műhely: 2655 Kétbodony, Rákóczi út 36. (Szabó Zsolt E.V. / Masinamágus). A munka személyes, időpontegyeztetéssel, a gépjármű leadásával történik (ÁSZF 5.4).
- Értékesítés: nincs webshop, minden munka egyedi egyeztetéssel és árajánlattal jön létre (ÁSZF 4.3); az árajánlat 15 napig érvényes. Kapcsolat: űrlap (időpont-mezővel), telefon (+36 70 303 1020), e-mail (info@masinamagus.hu).
- Díjazás iránya (megerősítve): valós, ECU-típus szerinti ársávok kerülnek közzétételre az `/arak` oldalon — a jelenlegi „Kérjen árajánlatot" helykitöltők átmenetiek.
- Deploy: az új oldal leváltja a régit a masinamagus.hu domainen (GitHub Pages) — megerősítve: 2026-11-09.
- Deploy-folyamat (döntés: 2026-11-09): a GitHub repót a felhasználó hozza létre és kezeli a saját fiókjában. A kész oldal előbb GitHub Pages preview URL-en készül el; a masinamagus.hu domain-átállás időpontjáról a felhasználó dönt.
- Analitika (döntés: 2026-11-09): Google Analytics 4 + Google Search Console. A GA4 süti-alapú, ezért az oldalon cookie-consent sáv szükséges, és a GDPR tájékoztató cookie-fejezettel bővítendő.
- Piaci kontextus: a keresést a háromdoménes MMC AutoChip uralja; az `ecutuning.hu` halott parkoló domain → szabad SEO-tér (hibakód-tartalmak, ECU-típus × hibatünet oldalak).

## Capabilities and Constraints

Szolgáltatások (rögzítve: a régi 7 marad, hardveres ECU javítás, klónozás/immo, TCU/DSG tuning NEM kerül fel):
1. Stage 1 chiptuning
2. Eco-tuning (fogyasztáscsökkentés, flottáknak is)
3. DPF & EGR szoftveres megoldások (csak zárt pályára)
4. AdBlue / SCR hibajavítás (csak zárt pályára)
5. VAG melegindítás-javítás (1.9/2.0 TDI)
6. Kódolás & rejtett funkciók (BMW, Audi, VW, Skoda)
7. Navigáció & térképfrissítés (MMI, iDrive, Discover; firmware, magyarítás)

Új, dedikált OBDeleven-szekció (mind a 4 kör):
- Kódolás / rejtett funkciók (One-Click Apps + kézi kódolás, long coding, adaptációk)
- Szervizműveletek (szervizintervallum-reset, fékbetét csere / EPB, Service Resets VAG & BMW)
- Diagnosztika (OBD2 minden CAN-buszos autón; haladó vezérolvasás: VAG, BMW/MINI, Toyota/Lexus, Ford US, Mercedes-Benz)
- Karbantartás (egészségriport, karbantartási emlékeztető, emisszió-készültség, hibrid akku-ellenőrzés)

Felület-képességek: ECU-típus szerinti ártábla (`/arak`), kereshető szakszótár (`/szakszotar`, 19 tétel + OBDeleven-es bővíthetőség), megtérülés-kalkulátor, munkatípus-kártyás referenciaszekció, időpont-mezős árajánlatkérő, hírlevél (jelenleg mailto; double opt-inhez provider kell), blog (markdown), teljes ÁSZF + GDPR (cookie-fejezettel), cookie-consent sáv (GA4), 404, sitemap.xml + robots.txt, schema.org (AutoRepair).

Technikai korlátok: Astro + React statikus oldal, GitHub Pages deploy, teljes UI-szöveg az l10n rétegben — widgetben hardkódolt string tilos (projekt szabály). A tartalom értékesítési csatornája a weboldal; közvetlen online vásárlás nincs.

Jogi korlát: a környezetvédelmi rendszereket érintő szoftveres módosítások (DPF, EGR, SCR/AdBlue) kizárólag zárt pályás/K+F/hobbi, közúti forgalmon kívüli célra, az ÁSZF 6.2 jognyilatkozatával; a közúti használat jogszerűsége a Megrendelő felelőssége. Az oldal nem bátoríthat jogsértő közúti használatra. Az OBDeleven-es kódolások közt egyes tételek (pl. Video in Motion) szürke zónásak lehetnek közúton — a szövegezés a fenti disclaimer-logikát követi.

Nyitott döntések:
- Nyelvi terjedelem: a site jelenleg kizárólag magyar; további nyelv nem dőlt el. A jövőbeli munka ne építsen feltétlen többnyelvűségre, de az l10n-kulcsrendszer megkönnyíti.
- Hírlevél-szolgáltató választása (Mailchimp / Brevo / Buttondown stb.) nem dőlt el.
- Blog-adminisztráció jövőbeni formája (markdown marad vagy CMS) nem dőlt el.

## Brand Commitments

- Név: **Masinamágus** (a brand prefix „Masina" + suffix „mágus" bontás a UI-ban kötött). Üzemeltető: Szabó Zsolt E.V.
- Hang és fő üzenet: „Mérünk, elemzünk, írunk. Nem tippelünk." — mérnöki precizitás, 25 év gépészeti tapasztalat + modern szoftverfejlesztés. A „nem futószalag", „nem sablonfájl" pozicionálás kötött.
- Bizalom-ígéretek (már közzétéve, nem vonható vissza): egyedi kalibráció az ügyfél saját, kifájolt eredeti fájljából; a gyári program örökösre archiválva, ingyenes visszaállítás; előtte-utána élőadatos diagnosztika és kontrollmérés; 1–2 nap átlagos átfutás.
- Megerősítve (2026-11-09): a fenti örökség — célcsoport, pozíció, hang, bizalom-ígéretek — változatlanul kötött az új oldalon.
- Nincs meglévő logó, kötött betűtípus vagy márkaszín (döntés: 2026-11-09). Referencia-/műhelyfotók nincsenek — a vizuális világ nem épülhet fotóanyagra.
- **Wordmark jóváhagyva (2026-11-09): „Masina‖mágus" — Zománc-öntvény változat** (`wm-zomanc`): kevert kis- és nagybetűs forma, domborított öntött fém betűként a zománctáblában, a ‖ dupla oszlop maratott fémválasztóként (nem sima tipográfiai jel). A szétválasztás (Masina‖mágus) kötött; a megvalósítás a zománctábla-világ anyagával dolgozik (domború perem, sarok-csavarok, enyhe patina). Forrás-vázlat: `.impeccable/mocks/decision/wm-zomanc.html`.

## Evidence on Hand

- Versenytárskutatás (régi projekt): `PIACKUTATAS.md`, nyers HTML-ek `research/versenytarsak/` (10 domain) — forrás: `/Users/szbnce/Pictures/masinamagus.hu/`.
- Marketingterv és KPI-k: `MARKETING.md` (ott).
- Régi termékrekord: `PRODUCT.md` (ott) — az információ forrása, nem hatóság.
- Blogcikkek (valós): `src/content/blog/` — 4 cikk (AdBlue visszaszámláló, DPF regeneráció, chiptuning vs. tuningbox, checksum).
- Jogi dokumentumok: `src/official/ASZF.md`, `src/official/GDPR.md` — az adószám és nyilvántartási szám `[Az Ön adószáma]` / `[Az Ön nyilvántartási száma]` helykitöltővel szerepel.
- Teljes régi UI-szöveg: `src/locales/hu.json` (7 szolgáltatás, FAQ, szakszótár 19 tétel, ártábla, folyamat, rólunk) — változatlan tartalommal átjön.
- Valós eszközök logikája: megtérülés-kalkulátor (`src/components/SavingsCalc.tsx`).
- OBDeleven hivatalos képességlista (2026-11-09 kutatás): App Store leírás + obdeleven.com (features, one-click-apps) — a szekció tartalma kizárólag ezekből.
- Munkaterv: `/Users/szbnce/masinamagusuj/PLAN.md`.

Hiányok, amiket a jövőbeli munka NEM találhat ki: valós ügyfélvélemények és referenciafotók (a munkatípus-kártyák helykitöltők), közzétett árak (a helykitöltők átmenetiek), valós közösségi média linkek és og:image, garanciális számok a közzétetteken túl, adószám/nyilvántartási szám, hírlevél-provider.

## Product Principles

1. **Semmit nem állítunk, amit nem tudunk bizonyítani.** Nincs kitalált ár, vélemény, referencia vagy garancia-szám — a bizalom a mérhető munkából és a valós tartalomból jön.
2. **Mérve, nem tippelve.** Minden beavatkozás egyedi kalibráció az ügyfél saját fájljából, előtte-utána méréssel igazolva; soha tömegfájl.
3. **Visszafordíthatóság.** A gyári állapot mindig helyreállítható (archivált szoftver, ingyenes visszaállítás) — az ügyfél nincs bezárva.
4. **Tartalomban és eszközben verjük a piacot.** Interaktív, őszinte segédeszközök és a legjobb hibakód-tartalmak a konkurensek száraz árlistái helyett.
5. **Jogi tisztaság.** Az emissziórendszereket érintő módosításokat kizárólag az ÁSZF szerinti, közúton kívüli célra kínáljuk; az oldal soha nem bátorít jogsértő használatra.

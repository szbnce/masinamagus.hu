import { Helmet } from 'react-helmet-async';
import { MapPinned, HardDriveDownload, Languages } from 'lucide-react';

const NavigationUpdate = () => {
    return (
        <>
            <Helmet>
                <title>Gyári Navigáció és Térkép Frissítés | Masinamágus</title>
                <meta
                    name="description"
                    content="Legújabb térképek telepítése gyári fejegységekre. Audi MMI, BMW iDrive, VW Discover Media navigáció frissítés és szoftveres magyarítás Kétbodonyban."
                />
            </Helmet>

            <section className="hero" style={{ minHeight: '60vh', paddingBottom: '4rem' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content text-center">
                    <h1 className="hero-title slide-up">
                        Navigáció <span>Frissítés</span>
                    </h1>
                    <p className="hero-subtitle slide-up" style={{ animationDelay: '0.2s', margin: '0 auto' }}>
                        Új elkerülők, megváltozott sebességhatárok? Ne hagyja, hogy a gyári fejegység a semmibe vezesse!
                        Gyári prémium rendszerek (MMI, iDrive, Discover) szoftverítése.
                    </p>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container" style={{ maxWidth: '800px' }}>

                    <div className="content-block slide-up">
                        <h2>Miért érdemes a gyári navigációt frissíteni 2024-ben?</h2>
                        <p>
                            Habár sokan használnak telefont a navigáláshoz, a prémium kategóriás autók (Audi, BMW, Mercedes) Head-Up Display (szélvédőre vetített kijelző) funkciói és a digitális műszerfal (Virtual Cockpit) iránytűi <strong>kizárólag a gyári navigáció adatbázisával működnek együtt.</strong>
                        </p>
                        <p>
                            A legújabb európai térképek telepítésével a gyári rendszer újra pontos és megbízható lesz, ráadásul a szoftverfrissítések gyakran a fejegység általános gyorsaságát (Bluetooth stabilitás, rádióvétel) is javítják.
                        </p>
                    </div>

                    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', margin: '3rem 0' }}>
                        <div className="feature-card slide-up bg-tertiary text-center" style={{ padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <MapPinned className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Legújabb Térképek</h4>
                            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Full Európa adatbázis hivatalos forrásból (POI adatokkal, kamerákkal).</p>
                        </div>
                        <div className="feature-card slide-up bg-tertiary text-center" style={{ padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.1s' }}>
                            <HardDriveDownload className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Firmware Frissítés</h4>
                            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>A teljes fejegység vezérlőszoftverének (Firmware) naprakészre frissítése az optimális stabil működésért.</p>
                        </div>
                        <div className="feature-card slide-up bg-tertiary text-center" style={{ padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.2s' }}>
                            <Languages className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Magyar Nyelv</h4>
                            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Külföldről behozott, nem magyar nyelvű rendszerek teljes magyarítása (hang+menü).</p>
                        </div>
                    </div>

                    <div className="cta-block text-center slide-up" style={{ padding: '3rem', backgroundColor: 'var(--color-bg-tertiary)', borderRadius: '12px', marginTop: '4rem', borderTop: '4px solid var(--color-accent)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Tegye újra értékessé a gyári rendszert!</h3>
                        <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                            A frissítés időtartama a letöltendő adat mennyiségétől függ (általában 1-2 óra). Kérjen online időpontot!
                        </p>
                        <a href="/#contact" className="btn btn-primary">Frissítés igénylése</a>
                    </div>

                </div>
            </section>
        </>
    );
};

export default NavigationUpdate;

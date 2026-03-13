import { Helmet } from 'react-helmet-async';
import { ThermometerSun, Zap, CheckSquare } from 'lucide-react';

const VagHotStartFix = () => {
    return (
        <>
            <Helmet>
                <title>VAG Melegindítási Hiba Szoftveres Orvoslása | Masinamágus</title>
                <meta
                    name="description"
                    content="Nehezen indul az 1.9 vagy 2.0 TDI melegen? A melegindítási probléma szoftveresen javítható, drága alkatrészcsere nélküli végleges megoldás Kétbodonyban!"
                />
            </Helmet>

            <section className="hero" style={{ minHeight: '60vh', paddingBottom: '4rem' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content text-center">
                    <h1 className="hero-title slide-up" style={{ fontSize: '3rem' }}>
                        VAG Melegindítás <span>Optimalizálása</span>
                    </h1>
                    <p className="hero-subtitle slide-up" style={{ animationDelay: '0.2s', margin: '0 auto' }}>
                        Hidegen pöccre indul, de melegen csak hosszas tekeretés után röffen be a TDI?
                        Ne cseréljen önindítót vagy akkumulátort, a hiba szoftveresen javítható!
                    </p>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container" style={{ maxWidth: '800px' }}>

                    <div className="content-block slide-up">
                        <h2>Mi okozza a VAG csoportos melegindítási hibát?</h2>
                        <p>
                            A Volkswagen konszern (VW, Audi, Seat, Skoda) 1.9 és 2.0 TDI motorjainál gyakori jelenség, hogy egy bizonyos futásteljesítmény felett az autó <strong>üzemmeleg állapotban nagyon nehezen, másodpercekig tartó indítózás után</strong> indul csak be.
                        </p>
                        <p>
                            Ennek oka a gyári motorvezérlő (ECU) szoftverében keresendő. A szoftver meleg motor esetén elvár egy bizonyos minimális indítási fordulatszámot (pl. 250 RPM) az önindítótól ahhoz, hogy egyáltalán engedélyezze az üzemanyag-befecskendezést. Ahogy az önindító és az akkumulátor öregszik, ez a fordulat egyre nehezebben van meg az első pillanatokban, így az autó "teker, de nem indul".
                        </p>
                    </div>

                    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', margin: '3rem 0' }}>
                        <div className="feature-card slide-up bg-tertiary text-center" style={{ padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <ThermometerSun className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Eredeti Hiba</h4>
                            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Csak meleg motornál (70°C+) jelentkezik a hosszú indítózás.</p>
                        </div>
                        <div className="feature-card slide-up bg-tertiary text-center" style={{ padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.1s' }}>
                            <Zap className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Szoftveres Javítás</h4>
                            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Az indítási térképek korrekciója, már alacsonyabb fordulattól ad üzemanyagot.</p>
                        </div>
                        <div className="feature-card slide-up bg-tertiary text-center" style={{ padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.2s' }}>
                            <CheckSquare className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Azonnali Eredmény</h4>
                            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Az autó melegen is ugyanúgy "pöcc-röf" fog indulni, mint hidegen.</p>
                        </div>
                    </div>

                    <div className="cta-block text-center slide-up" style={{ padding: '3rem', backgroundColor: 'var(--color-bg-tertiary)', borderRadius: '12px', marginTop: '4rem', borderTop: '4px solid var(--color-accent)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Mentsen meg tízezreket a felesleges alkatrészcseréktől!</h3>
                        <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                            A szoftveres módosítás gyors és végleges megoldást jelent erre a típusazonos problémára.
                        </p>
                        <a href="/#contact" className="btn btn-primary">Árajánlatkérés a javításra</a>
                    </div>

                </div>
            </section>
        </>
    );
};

export default VagHotStartFix;

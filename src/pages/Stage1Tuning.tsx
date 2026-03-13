import { Helmet } from 'react-helmet-async';
import { CheckCircle, Activity, Shield } from 'lucide-react';
import '../components/HeroSection.css'; // Reuse some standard hero styles

const Stage1Tuning = () => {
    return (
        <>
            <Helmet>
                <title>Stage 1 Chiptuning | Biztonságos Teljesítménynövelés | Masinamágus</title>
                <meta
                    name="description"
                    content="Prémium Stage 1 chiptuning Kétbodonyban. Erősebb motor, jobb gyorsulás, 100%-ig biztonságos szoftveres optimalizálás a gyári határokon belül."
                />
            </Helmet>

            {/* Hero Section specific to Stage 1 */}
            <section className="hero" style={{ minHeight: '60vh', paddingBottom: '4rem' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content text-center">
                    <h1 className="hero-title slide-up">
                        Stage 1 <span>Chiptuning</span>
                    </h1>
                    <p className="hero-subtitle slide-up" style={{ animationDelay: '0.2s', margin: '0 auto' }}>
                        Biztonságos teljesítménynövelés és nyomaték optimalizálás Kétbodonyban,
                        kibontakoztatva a motorban rejlő gyári tartalékokat.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section bg-secondary">
                <div className="container" style={{ maxWidth: '800px' }}>

                    <div className="content-block slide-up">
                        <h2>Mi az a Stage 1 Optimalizálás?</h2>
                        <p>
                            A gyártók a legtöbb modern motort jelentős biztonsági tartalékkal tervezik,
                            hogy eltérő éghajlatokon (extrém hideg vagy meleg), változó üzemanyag-minőség mellett,
                            és elhanyagolt karbantartás esetén is túléljék a garanciaidőt.
                        </p>
                        <p>
                            A Stage 1 chiptuning során ezeket az <strong>indokolatlanul szűk szoftveres korlátokat</strong> (Torque Limiters, Boost Limits)
                            hangoljuk finomra. Nincs szükség hardveres átalakításra; a gyári turbó, befecskendezők és kipufogórendszer
                            tökéletesen elegendőek a biztonságos erőtöbblet eléréséhez.
                        </p>
                    </div>

                    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '3rem 0' }}>
                        <div className="feature-card slide-up bg-tertiary" style={{ padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <Activity className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                            <h3>20-30% Erőtöbblet</h3>
                            <p className="text-secondary">Megnövekedett lóerő és drasztikusan magasabb forgatónyomaték a dinamikusabb előzésekért.</p>
                        </div>
                        <div className="feature-card slide-up bg-tertiary" style={{ padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.2s' }}>
                            <Shield className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                            <h3>Gyári Határokon Belül</h3>
                            <p className="text-secondary">A paramétereket a motor és a hajtáslánc fizikai teherbírásához igazítjuk, figyelve a kipufogógáz-hőmérsékletre (EGT).</p>
                        </div>
                    </div>

                    <div className="content-block slide-up" style={{ animationDelay: '0.3s' }}>
                        <h2>A Masinamágus Garancia</h2>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                <CheckCircle className="text-accent" size={20} style={{ marginRight: '1rem' }} />
                                Előzetes és utólagos élő adatos motordiagnosztika.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                <CheckCircle className="text-accent" size={20} style={{ marginRight: '1rem' }} />
                                Egyedi szoftverírás a Te autód letöltött, eredeti (Ori) fájlja alapján.
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                <CheckCircle className="text-accent" size={20} style={{ marginRight: '1rem' }} />
                                Az eredeti szoftver archiválása: bármikor ingyenesen visszaállítható a gyári állapot.
                            </li>
                        </ul>
                    </div>

                    <div className="cta-block text-center slide-up" style={{ padding: '3rem', backgroundColor: 'var(--color-bg-tertiary)', borderRadius: '12px', marginTop: '4rem', borderTop: '4px solid var(--color-accent)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Szeretnéd kihozni a maximumot az autódból?</h3>
                        <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                            Műhelyünk Kétbodonyban található, így Balassagyarmatról (15 perc) és Vácról (35 perc) is gyorsan, forgalmi dugók nélkül megközelíthető.
                        </p>
                        <a href="/#contact" className="btn btn-primary">Árajánlatkérés a Te autódra</a>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Stage1Tuning;

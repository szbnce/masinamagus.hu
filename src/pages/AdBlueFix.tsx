import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Wrench, ShieldCheck } from 'lucide-react';

const AdBlueFix = () => {
    return (
        <>
            <Helmet>
                <title>AdBlue Hiba Szoftveres Javítás és Megoldás | Masinamágus</title>
                <meta
                    name="description"
                    content="Visszaszámláló megállt? SCR vagy NOx szenzor hiba? Végleges szoftveres megoldások AdBlue rendszer problémákra gyorsan és szakszerűen Kétbodonyban. (Zárt pályára)"
                />
            </Helmet>

            <section className="hero" style={{ minHeight: '60vh', paddingBottom: '4rem' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content text-center">
                    <h1 className="hero-title slide-up">
                        AdBlue Hiba <span>Szoftveres Javítás</span>
                    </h1>
                    <p className="hero-subtitle slide-up" style={{ animationDelay: '0.2s', margin: '0 auto' }}>
                        Megállt a visszaszámláló? NOx szenzor csere helyett nyújtunk végleges,
                        szoftveres megoldást a letiltó AdBlue rendszerekre.
                        <br /><br /><strong style={{ color: '#dc2626' }}>Kizárólag zárt pályás (verseny) használatra!</strong>
                    </p>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container" style={{ maxWidth: '800px' }}>

                    <div className="content-block slide-up" style={{ backgroundColor: 'rgba(220, 38, 38, 0.05)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid #dc2626', marginBottom: '3rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', color: '#ef4444', marginBottom: '1rem' }}>
                            <AlertTriangle size={24} style={{ marginRight: '0.5rem' }} /> Figyelmeztetés: Letiltás
                        </h3>
                        <p>
                            A modern dízel autók esetén az SCR (AdBlue) rendszer meghibásodása – legyen az a szivattyú, a fűtőszál, vagy az NOx szenzor –
                            elindít egy visszaszámlálót a műszerfalon (általában 800 - 1000 km). Amint ez eléri a nullát, <strong>a motor a hibakód törléséig vagy a javításig nem indítható újra.</strong>
                        </p>
                    </div>

                    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '3rem 0' }}>
                        <div className="feature-card slide-up bg-tertiary" style={{ padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <Wrench className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                            <h3>Végleges Megoldás</h3>
                            <p className="text-secondary">A motorvezérlő szoftverből szakszerűen inaktiváljuk az SCR rendszer logikáját, így soha többé nem okoz letiltást.</p>
                        </div>
                        <div className="feature-card slide-up bg-tertiary" style={{ padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.2s' }}>
                            <ShieldCheck className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                            <h3>Költséghatékony</h3>
                            <p className="text-secondary">A százezres, vagy akár milliós gyári alkatrészcsere helyett a szoftveres beavatkozás töredékébe kerül.</p>
                        </div>
                    </div>

                    <div className="cta-block text-center slide-up" style={{ padding: '3rem', backgroundColor: 'var(--color-bg-tertiary)', borderRadius: '12px', marginTop: '4rem', borderTop: '4px solid var(--color-accent)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Azonnali segítségre van szüksége?</h3>
                        <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                            Ne várja meg a letiltást! Műhelyünk Kétbodonyban azonnali szoftveres megoldást kínál.
                        </p>
                        <a href="/#contact" className="btn btn-primary">Időpontfoglalás</a>
                    </div>

                </div>
            </section>
        </>
    );
};

export default AdBlueFix;

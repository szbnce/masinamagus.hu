import { Helmet } from 'react-helmet-async';
import { Filter, Settings, Activity } from 'lucide-react';

const DpfEgrFix = () => {
    return (
        <>
            <Helmet>
                <title>DPF és EGR Szoftveres Megoldások | Masinamágus</title>
                <meta
                    name="description"
                    content="Eltömődött a részecskeszűrő? Folyamatosan regenerál? Végleges szoftveres megoldás EGR szelep és DPF problémákra Kétbodonyban. (Zárt pályára)"
                />
            </Helmet>

            <section className="hero" style={{ minHeight: '60vh', paddingBottom: '4rem' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content text-center">
                    <h1 className="hero-title slide-up">
                        DPF és EGR <span>Szoftveres Megoldások</span>
                    </h1>
                    <p className="hero-subtitle slide-up" style={{ animationDelay: '0.2s', margin: '0 auto' }}>
                        Végleges megoldás eltömődött részecskeszűrőkre és leragadt EGR szelepekre.
                        Szakszerű szoftveres inaktiválás a megbízhatóságért.
                        <br /><br /><strong style={{ color: '#dc2626' }}>Kizárólag zárt pályás (verseny) használatra!</strong>
                    </p>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container" style={{ maxWidth: '800px' }}>

                    <div className="content-block slide-up">
                        <h2>Mi a probléma a modern környezetvédelmi rendszerekkel?</h2>
                        <p>
                            A <strong>DPF (dízel részecskeszűrő)</strong> és az <strong>EGR (kipufogógáz-visszavezető)</strong> szelepek a városi, rövid távú használat során gyorsan
                            eltömődnek korommal. A folyamatos regenerálási kísérletek gázolajat juttathatnak a motorolajba, ami drasztikus motorhibákhoz vezethet.
                        </p>
                        <p>
                            Amikor a Check Engine lámpa folyamatosan világít, és az autó "vészüzembe" kapcsol (nincs erő), a gyári alkatrészek cseréje csillagászati összegekbe kerülhet, ráadásul a hiba a használati mód miatt később újra előjöhet.
                        </p>
                    </div>

                    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '3rem 0' }}>
                        <div className="feature-card slide-up bg-tertiary" style={{ padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <Filter className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                            <h3>DPF Kiiktatás (Szoftver)</h3>
                            <p className="text-secondary">A motorvezérlőben kikapcsoljuk a regenerálási ciklusokat és a nyomáskülönbség-szenzor monitorozását.</p>
                        </div>
                        <div className="feature-card slide-up bg-tertiary" style={{ padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.2s' }}>
                            <Settings className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                            <h3>EGR Lefalazás / Zárás</h3>
                            <p className="text-secondary">Szoftveresen zárt pozícióban rögzítjük az EGR szelepet, így csak tiszta, oxigéndús levegő jut a motorba (nincs több koromlerakódás a szívósorban).</p>
                        </div>
                    </div>

                    <div className="content-block slide-up" style={{ backgroundColor: 'var(--color-bg-tertiary)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--color-accent)' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                            <Activity size={24} style={{ marginRight: '0.5rem', color: 'var(--color-accent)' }} />
                            Fontos Mechanikai Lépések
                        </h3>
                        <p className="text-secondary" style={{ marginBottom: 0 }}>
                            A DPF szoftveres kikapcsolása <strong>csak akkor működik hibátlanul</strong>, ha azt a fizikai szűrőbetét eltávolítása kíséri.
                            Az eltömődött szűrő a rendszerben hagyva extrém hőterhelést okoz a turbófeltöltőn!
                        </p>
                    </div>

                    <div className="cta-block text-center slide-up" style={{ padding: '3rem', backgroundColor: 'var(--color-bg-tertiary)', borderRadius: '12px', marginTop: '4rem', borderTop: '4px solid var(--color-accent)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Elege van a Check Engine lámpából?</h3>
                        <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                            Keresse műhelyünket Kétbodonyban a végleges szoftveres megoldásért.
                        </p>
                        <a href="/#contact" className="btn btn-primary">Időpontfoglalás</a>
                    </div>

                </div>
            </section>
        </>
    );
};

export default DpfEgrFix;

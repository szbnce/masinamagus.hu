import { Helmet } from 'react-helmet-async';
import { Smartphone, MonitorPlay, PowerOff } from 'lucide-react';

const BmwAudiCoding = () => {
    return (
        <>
            <Helmet>
                <title>BMW, Audi Kódolás | Rejtett Funkciók Bekapcsolása | Masinamágus</title>
                <meta
                    name="description"
                    content="Aktiválja autója rejtett extráit! BMW, Audi, VW, Skoda szoftveres kódolás, Start-Stop kikapcsolás és kényelmi funkciók bekapcsolása."
                />
            </Helmet>

            <section className="hero" style={{ minHeight: '60vh', paddingBottom: '4rem' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content text-center">
                    <h1 className="hero-title slide-up">
                        Kényelmi Funkciók <span>Kódolása</span>
                    </h1>
                    <p className="hero-subtitle slide-up" style={{ animationDelay: '0.2s', margin: '0 auto' }}>
                        Aktiválja autója rejtett extráit diagnosztikai csatlakozón (OBD) keresztül!
                        Start-Stop kikapcsolás, videó menet közben, CarPlay aktiválás és egyéb kényelmi beállítások.
                    </p>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container" style={{ maxWidth: '800px' }}>

                    <div className="content-block slide-up">
                        <h2>Mik azok a rejtett funkciók?</h2>
                        <p>
                            A modern autók elektronikai moduljai (BMW, Audi, Volkswagen, Skoda, stb.) rengeteg olyan funkciót tartalmaznak,
                            melyeket a gyárban szoftveresen letiltottak vagy egyszerűen nem rendeltek meg az első vásárláskor.
                        </p>
                        <p>
                            Diagnosztikai szoftvereink segítségével ezeket a funkciókat fizikai megbontás nélkül, a vezérlőegységek kódolásával (parametrizálásával) tudjuk bekapcsolni vagy kikapcsolni az Ön igényei szerint.
                        </p>
                    </div>

                    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', margin: '3rem 0' }}>
                        <div className="feature-card slide-up bg-tertiary text-center" style={{ padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <PowerOff className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Start-Stop Memória</h4>
                            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Végleges kikapcsolás vagy az utolsó állapot megjegyzése a motor kímélése érdekében.</p>
                        </div>
                        <div className="feature-card slide-up bg-tertiary text-center" style={{ padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.1s' }}>
                            <Smartphone className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>CarPlay / Android Auto</h4>
                            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Okostelefon tükrözés aktiválása a gyári infotainment (fejegység) rendszeren.</p>
                        </div>
                        <div className="feature-card slide-up bg-tertiary text-center" style={{ padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.2s' }}>
                            <MonitorPlay className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Video in Motion</h4>
                            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Mozgó jármű esetén is engedélyezett videó és DVD lejátszás az utasok számára.</p>
                        </div>
                    </div>

                    <div className="cta-block text-center slide-up" style={{ padding: '3rem', backgroundColor: 'var(--color-bg-tertiary)', borderRadius: '12px', marginTop: '4rem', borderTop: '4px solid var(--color-accent)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Többet tud az autója, mint gondolná!</h3>
                        <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                            A kódolható funkciók listája típusonként és évjáratonként eltér. Írja meg nekünk autója pontos típusát, és küldünk egy listát a lehetőségekről!
                        </p>
                        <a href="/#contact" className="btn btn-primary">Funkciók lekérdezése</a>
                    </div>

                </div>
            </section>
        </>
    );
};

export default BmwAudiCoding;

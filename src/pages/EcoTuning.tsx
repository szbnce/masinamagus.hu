import { Helmet } from 'react-helmet-async';
import { Leaf, Droplets, Banknote } from 'lucide-react';

const EcoTuning = () => {
    return (
        <>
            <Helmet>
                <title>Eco-Tuning | Fogyasztáscsökkentés Szoftveresen | Masinamágus</title>
                <meta
                    name="description"
                    content="Csökkentse autója üzemanyag-fogyasztását szoftveres Eco-Tuning segítségével. Gazdaságosabb üzemeltetés optimalizált motorvezérléssel Kétbodonyban."
                />
            </Helmet>

            <section className="hero" style={{ minHeight: '60vh', paddingBottom: '4rem' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content text-center">
                    <h1 className="hero-title slide-up">
                        Eco-<span>Tuning</span>
                    </h1>
                    <p className="hero-subtitle slide-up" style={{ animationDelay: '0.2s', margin: '0 auto' }}>
                        Csökkentse üzemanyag-fogyasztását 8-12%-kal anélkül, hogy lemondana a vezetési élményről.
                        Tökéletes megoldás sokat futott autókhoz és flottakezelőknek.
                    </p>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container" style={{ maxWidth: '800px' }}>

                    <div className="content-block slide-up">
                        <h2>Hogyan működik az Eco-Tuning?</h2>
                        <p>
                            A fogyasztáscsökkentés (Eco-Tuning) koncepciója arra épül, hogy a motor maximális forgatónyomatékát
                            <strong> alacsonyabb fordulatszám-tartományba toljuk el.</strong>
                        </p>
                        <p>
                            Mivel az autód hamarabb kezd el húzni, sokkal hamarabb válthatsz magasabb sebességfokozatba (felkapcsolás).
                            A csökkentett átlagos fordulatszám kevesebb befecskendezési ciklust, ezáltal mérhető üzemanyag-megtakarítást jelent a mindennapi, vagy autópályás használat során.
                        </p>
                    </div>

                    <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', margin: '3rem 0' }}>
                        <div className="feature-card slide-up bg-tertiary text-center" style={{ padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <Leaf className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>8-12% Megtakarítás</h4>
                            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Kevesebb elégetett üzemanyag 100 km-en.</p>
                        </div>
                        <div className="feature-card slide-up bg-tertiary text-center" style={{ padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.1s' }}>
                            <Droplets className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Nyomatékosabb</h4>
                            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Jobb alsó tartománybeli húzóerő.</p>
                        </div>
                        <div className="feature-card slide-up bg-tertiary text-center" style={{ padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', animationDelay: '0.2s' }}>
                            <Banknote className="text-accent" size={32} style={{ margin: '0 auto 1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Gyors Megtérülés</h4>
                            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Nagy futásteljesítmény esetén hónapok alatt visszahozza az árát.</p>
                        </div>
                    </div>

                    <div className="cta-block text-center slide-up" style={{ padding: '3rem', backgroundColor: 'var(--color-bg-tertiary)', borderRadius: '12px', marginTop: '4rem', borderTop: '4px solid var(--color-accent)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Kérjen számítást autója fogyasztáscsökkenésére!</h3>
                        <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                            Vegye fel velünk a kapcsolatot, és kiszámoljuk, mennyit spórolhat éves szinten egy szakszerű Eco-Tuninggal.
                        </p>
                        <a href="/#contact" className="btn btn-primary">Kapcsolatfelvétel</a>
                    </div>

                </div>
            </section>
        </>
    );
};

export default EcoTuning;

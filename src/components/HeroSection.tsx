import './HeroSection.css';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../context/i18n';

const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title slide-up" style={{ animationDelay: '0.1s' }}>
                    {t('hero.title_prefix')} <span>{t('hero.title_span')}</span>
                </h1>
                <p className="hero-subtitle slide-up" style={{ animationDelay: '0.3s' }}>
                    {t('hero.subtitle')}
                </p>
                <div className="hero-actions slide-up" style={{ animationDelay: '0.5s' }}>
                    <a href="#services" className="btn btn-primary">
                        {t('hero.cta_primary')} <ArrowRight size={18} style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }} />
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        {t('hero.cta_secondary')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

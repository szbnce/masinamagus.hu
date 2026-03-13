import { Link } from 'react-router-dom';
import './ServicesSection.css';
import { Cpu, Leaf, Wrench, Activity, Map } from 'lucide-react';
import { useTranslation } from '../context/i18n';

const ServicesSection = () => {
    const { t } = useTranslation();
    const servicesData = t('services.items') || [];

    // Merge icons with data from JSON
    const services = [
        { ...servicesData[0], href: '/chiptuning-stage-1', icon: <Cpu className="service-icon" /> },
        { ...servicesData[1], href: '/eco-tuning-fogyasztascsokkentes', icon: <Leaf className="service-icon" /> },
        { ...servicesData[2], href: '/adblue-szoftveres-javitas', icon: <Wrench className="service-icon" /> },
        { ...servicesData[3], href: '/bmw-audi-rejtett-funkciok-kodolas', icon: <Activity className="service-icon" /> },
        { ...servicesData[4], href: '/navigacio-terkep-frissites', icon: <Map className="service-icon" /> },
    ];
    return (
        <section className="section services-section" id="services">
            <div className="container">
                <h2 className="section-title">{t('services.title')}<span>{t('services.title_span')}</span></h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">
                                <Link to={service.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {service.title} <span style={{ color: 'var(--color-accent)', fontSize: '0.8em' }}>→</span>
                                </Link>
                            </h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

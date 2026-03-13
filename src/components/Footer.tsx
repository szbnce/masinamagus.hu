import './Footer.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from '../context/i18n';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-brand">
                        <a href="#" className="logo">{t('navbar.brand_prefix')}<span>{t('navbar.brand_suffix')}</span></a>
                        <p className="brand-desc">
                            {t('hero.subtitle')}
                        </p>
                    </div>

                    <div className="footer-contact">
                        <h3 className="footer-title">{t('footer.contact')}</h3>
                        <ul className="contact-list">
                            <li>
                                <MapPin className="contact-icon" />
                                <span>{t('footer.location')}</span>
                            </li>
                            <li>
                                <Phone className="contact-icon" />
                                <span>{t('footer.phone')}</span>
                            </li>
                            <li>
                                <Mail className="contact-icon" />
                                <span>{t('footer.email')}</span>
                            </li>
                            <li>
                                <Clock className="contact-icon" />
                                <span>H-P: 08:00 - 17:00 (Előzetes egyeztetés alapján)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-map" style={{ minHeight: '200px' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '8px', minHeight: '200px' }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=hu&amp;q=2655%20K%C3%A9tbodony%20R%C3%A1k%C3%B3czi%20%C3%BAt%2036+(Masinam%C3%A1gus)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="disclaimer">
                        <strong>Jogi nyilatkozat:</strong> {t('footer.disclaimer')}
                    </div>

                    <div className="copyright">
                        <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/dokumentum/aszf" style={{ color: 'var(--color-text-secondary)', textDecoration: 'underline' }}>{t('footer.aszf')}</Link>
                            <Link to="/dokumentum/gdpr" style={{ color: 'var(--color-text-secondary)', textDecoration: 'underline' }}>{t('footer.gdpr')}</Link>
                        </div>
                        &copy; {new Date().getFullYear()} {t('navbar.brand_prefix')}{t('navbar.brand_suffix')}. {t('footer.copyright')}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

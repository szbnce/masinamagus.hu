import { CheckCircle, XCircle } from 'lucide-react';
import { useTranslation } from '../context/i18n';
import './AboutSection.css';

const AboutSection = () => {
    const { t } = useTranslation();
    return (
        <section className="section about-section" id="about">
            <div className="container">
                <div className="about-grid">

                    <div className="about-content slide-up">
                        <h2 className="section-title" style={{ textAlign: 'left' }}>
                            {t('about.title')}<span>{t('about.title_span')}</span>{t('about.title_suffix')}
                        </h2>
                        <p className="tagline">{t('about.tagline')}</p>

                        <div className="profiles">
                            <div className="profile-card">
                                <h3 className="profile-name">{t('about.profile_1_name')}</h3>
                                <p className="profile-role">{t('about.profile_1_role')}</p>
                                <p className="profile-desc">
                                    {t('about.profile_1_desc')}
                                </p>
                            </div>

                            <div className="profile-card">
                                <h3 className="profile-name">{t('about.profile_2_name')}</h3>
                                <p className="profile-role">{t('about.profile_2_role')}</p>
                                <p className="profile-desc">
                                    {t('about.profile_2_desc')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about-visual slide-up" style={{ animationDelay: '0.2s', marginTop: '2rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.8rem' }}>{t('about.table_title_1')}<span>{t('about.table_title_span')}</span>{t('about.table_title_2')}</h3>
                        <div className="comparison-table" style={{ backgroundColor: 'var(--color-bg-tertiary)', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div className="comparison-row header-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 1fr 1fr', gap: '1rem', backgroundColor: 'rgba(0,0,0,0.5)', padding: '1.5rem', fontWeight: 'bold' }}>
                                <div>{t('about.table_header_1')}</div>
                                <div style={{ color: 'var(--color-accent)', textAlign: 'center' }}>{t('about.table_header_2')}</div>
                                <div style={{ color: 'var(--color-text-secondary)', textAlign: 'center' }}>{t('about.table_header_3')}</div>
                            </div>

                            <div className="comparison-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 1fr 1fr', gap: '1rem', padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ fontWeight: 500, display: 'flex', alignItems: 'center' }}>{t('about.table_rows.0.title')}</div>
                                <div style={{ textAlign: 'center', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><CheckCircle size={18} color="var(--color-accent)" style={{ marginBottom: '0.25rem' }} /> {t('about.table_rows.0.col1')}</div>
                                <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><XCircle size={18} color="#dc2626" style={{ marginBottom: '0.25rem' }} /> {t('about.table_rows.0.col2')}</div>
                            </div>

                            <div className="comparison-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 1fr 1fr', gap: '1rem', padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ fontWeight: 500, display: 'flex', alignItems: 'center' }}>{t('about.table_rows.1.title')}</div>
                                <div style={{ textAlign: 'center', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><CheckCircle size={18} color="var(--color-accent)" style={{ marginBottom: '0.25rem' }} /> {t('about.table_rows.1.col1')}</div>
                                <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><XCircle size={18} color="#dc2626" style={{ marginBottom: '0.25rem' }} /> {t('about.table_rows.1.col2')}</div>
                            </div>

                            <div className="comparison-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 1fr 1fr', gap: '1rem', padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ fontWeight: 500, display: 'flex', alignItems: 'center' }}>{t('about.table_rows.2.title')}</div>
                                <div style={{ textAlign: 'center', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><CheckCircle size={18} color="var(--color-accent)" style={{ marginBottom: '0.25rem' }} /> {t('about.table_rows.2.col1')}</div>
                                <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><XCircle size={18} color="#dc2626" style={{ marginBottom: '0.25rem' }} /> {t('about.table_rows.2.col2')}</div>
                            </div>

                            <div className="comparison-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 1fr) 1fr 1fr', gap: '1rem', padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ fontWeight: 500, display: 'flex', alignItems: 'center' }}>{t('about.table_rows.3.title')}</div>
                                <div style={{ textAlign: 'center', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><CheckCircle size={18} color="var(--color-accent)" style={{ marginBottom: '0.25rem' }} /> {t('about.table_rows.3.col1')}</div>
                                <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><XCircle size={18} color="#dc2626" style={{ marginBottom: '0.25rem' }} /> {t('about.table_rows.3.col2')}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;

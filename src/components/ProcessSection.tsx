import './ProcessSection.css';
import { Search, Code, LineChart, Key } from 'lucide-react';
import { useTranslation } from '../context/i18n';

const ProcessSection = () => {
    const { t } = useTranslation();
    const stepsData = t('process.steps') || [];

    // Merge icons with data from JSON
    const steps = [
        { ...stepsData[0], icon: <Search className="step-icon" /> },
        { ...stepsData[1], icon: <Code className="step-icon" /> },
        { ...stepsData[2], icon: <LineChart className="step-icon" /> },
        { ...stepsData[3], icon: <Key className="step-icon" /> },
    ];
    return (
        <section className="section process-section" id="process">
            <div className="container">
                <h2 className="section-title">{t('process.title')}<span>{t('process.title_span')}</span></h2>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="step-number">{step.num}</div>
                            <div className="step-content">
                                <div className="step-icon-wrapper">
                                    {step.icon}
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;

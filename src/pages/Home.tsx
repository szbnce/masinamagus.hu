import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ProcessSection from '../components/ProcessSection';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Masinamágus – ECU optimalizálás és chiptuning</title>
                <meta name="description" content="ECU optimalizálás, chiptuning és szoftveres hibajavítás Kétbodonyban. Ahol a 25 éves szakmai múlt találkozik a szoftverfejlesztői precizitással." />
            </Helmet>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <ProcessSection />
        </>
    );
};

export default Home;

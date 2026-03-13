import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../context/i18n';
import './Navbar.css';

const Navbar = () => {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('navbar.home'), href: '/' },
        { name: t('navbar.services'), href: '/#services' },
        { name: t('navbar.blog'), href: '/blog' },
        { name: t('navbar.contact'), href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo">{t('navbar.brand_prefix')}<span>{t('navbar.brand_suffix')}</span></Link>

                <div className="desktop-links">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.href} className="nav-link">{link.name}</Link>
                    ))}
                    <Link to="/#contact" className="btn btn-primary" style={{ marginLeft: '1rem' }}>{t('navbar.contact')}</Link>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="mobile-nav-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/#contact"
                        className="btn btn-primary"
                        style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t('navbar.contact')}
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

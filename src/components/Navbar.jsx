import { useState, useEffect } from 'react';
import { siteConfig, openExternalForm } from '../config/siteConfig';

const navItems = [
  { label: 'ഹോം', href: '#home' },
  { label: 'ഞങ്ങളെക്കുറിച്ച്', href: '#about' },
  { label: 'നേതൃത്വം', href: '#leadership' },
  { label: 'പ്രവർത്തനങ്ങൾ', href: '#activities' },
  { label: 'ഗാലറി', href: '#gallery' },
  { label: 'അറിയിപ്പുകൾ', href: '#announcements' },
  { label: 'ബന്ധപ്പെടുക', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith('#')) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="പ്രധാന നാവിഗേഷൻ"
      style={{
        boxShadow: scrolled
          ? '0 2px 20px rgba(32,32,32,0.1)'
          : '0 1px 0 #EAE6E0',
      }}
    >
      {/* Brand */}
      <a
        href="#home"
        className="navbar__brand"
        onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
        aria-label="AITUC Pathanapuram — Home"
      >
        <div className="navbar__logo" aria-hidden="true">
          <span className="navbar__logo-text">AITUC</span>
        </div>
        <div className="navbar__brand-text">
          <span className="navbar__title">എ.ഐ.ടി.യു.സി</span>
          <span className="navbar__subtitle">പത്തനാപുരം</span>
        </div>
      </a>

      {/* Hamburger */}
      <button
        className={`navbar__hamburger${menuOpen ? ' active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'മെനു അടയ്ക്കുക' : 'മെനു തുറക്കുക'}
        aria-expanded={menuOpen}
        aria-controls="main-menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav Menu */}
      <div
        id="main-menu"
        className={`navbar__menu${menuOpen ? ' open' : ''}`}
        role="menu"
        aria-hidden={!menuOpen}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="navbar__menu-item"
            role="menuitem"
            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
          >
            {item.label}
          </a>
        ))}
        <button
          className="navbar__menu-cta"
          onClick={() => {
            setMenuOpen(false);
            openExternalForm(siteConfig.registrationFormUrl, 'അംഗത്വ രജിസ്ട്രേഷൻ');
          }}
          aria-label="അംഗത്വം നേടുക"
        >
          അംഗത്വം നേടുക
        </button>
      </div>
    </nav>
  );
}


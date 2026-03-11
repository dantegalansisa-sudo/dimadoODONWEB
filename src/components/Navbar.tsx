import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Dr. Maleno', href: '#ceo' },
    { label: 'ARS', href: '#ars' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 72,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: scrolled ? 'rgba(255,255,255,0.94)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s, border-bottom 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          width: '100%',
          padding: '0 56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        className="nav-inner"
      >
        {/* Logo */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/images/logo real.jpeg"
            alt="Dimado Centro Odontológico, E.I.R.L."
            style={{
              height: 48,
              objectFit: 'contain',
            }}
          />
        </a>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: 14,
                color: 'var(--text-body)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue-mid)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-body)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="nav-cta" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <a
            href="tel:8099339036"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 13,
              color: 'var(--blue-main)',
              border: '1.5px solid var(--blue-light)',
              borderRadius: 50,
              padding: '9px 18px',
              transition: 'all 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ fontSize: 14 }}>&#x1F4DE;</span>
            809-933-9036
          </a>
          <a
            href="#contacto"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 13,
              color: '#FFFFFF',
              background: 'var(--blue-mid)',
              borderRadius: 50,
              padding: '9px 20px',
              boxShadow: 'var(--shadow-blue)',
              transition: 'all 0.2s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ fontSize: 14 }}>&#x1F4C5;</span>
            Agendar Cita
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            padding: 8,
            flexDirection: 'column',
            gap: 5,
            cursor: 'pointer',
          }}
        >
          <span style={{ width: 22, height: 2, background: 'var(--text-dark)', borderRadius: 2, transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ width: 22, height: 2, background: 'var(--text-dark)', borderRadius: 2, transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ width: 22, height: 2, background: 'var(--text-dark)', borderRadius: 2, transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="nav-mobile-menu"
          style={{
            position: 'absolute',
            top: 72,
            left: 0,
            right: 0,
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(16px)',
            padding: '20px 24px 28px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: 16,
                color: 'var(--text-body)',
                padding: '4px 0',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 14,
              color: '#FFFFFF',
              background: 'var(--blue-mid)',
              borderRadius: 50,
              padding: '12px 24px',
              textAlign: 'center',
              marginTop: 8,
            }}
          >
            Agendar Cita
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

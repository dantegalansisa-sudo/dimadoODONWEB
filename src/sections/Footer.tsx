const footerLinks = {
  servicios: [
    'Odontopediatría',
    'Ortodoncia (Brackets)',
    'Periodoncia',
    'Endodoncia',
    'Implantes Dentales',
    'Cirugía Maxilofacial',
    'Rejuvenecimiento Facial',
    'Estética Dental',
    'Rehabilitación Bucal',
  ],
  especialistas: [
    'Dr. Maikel Maleno',
    'Dra. Pilar Faleta',
    'Dra. Jhoanna Tapia',
    'Dra. Rossy García',
    'Dra. Jailenny Santos',
    'Dra. Angely Betances',
  ],
  contacto: [
    '📞 809-738-3233',
    '📱 829-933-9036',
    '📍 Av. Monumental, Plaza Liam',
    '📷 @dimadocentroodontologico',
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0A1628',
        borderTop: '2px solid var(--cyan)',
        padding: '64px 0 32px',
      }}
    >
      <div className="container">
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Logo column */}
          <div>
            <div style={{ marginBottom: 14 }}>
              <img
                src="/images/logo real.jpeg"
                alt="Dimado Centro Odontológico"
                style={{
                  height: 40,
                  objectFit: 'contain',
                  borderRadius: 6,
                }}
              />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 15,
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.5,
                maxWidth: 220,
              }}
            >
              Tu sonrisa, nuestra especialidad
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 13,
                color: '#FFFFFF',
                marginBottom: 16,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Servicios
            </h4>
            {footerLinks.servicios.map((link) => (
              <a
                key={link}
                href="#servicios"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: 10,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Especialistas */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 13,
                color: '#FFFFFF',
                marginBottom: 16,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Especialistas
            </h4>
            {footerLinks.especialistas.map((link) => (
              <a
                key={link}
                href="#equipo"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: 10,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contacto */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 13,
                color: '#FFFFFF',
                marginBottom: 16,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Contacto
            </h4>
            {footerLinks.contacto.map((link) => (
              <p
                key={link}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: 10,
                }}
              >
                {link}
              </p>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 24,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            © 2025 Centro Odontológico Dimado E.I.R.L. | Av. Monumental, Plaza Liam
          </p>
        </div>
      </div>
    </footer>
  );
}

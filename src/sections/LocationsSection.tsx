// LocationsSection — Two branches display
import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const locations = [
  {
    label: 'SUCURSAL MATRIZ',
    name: 'Los Girasoles',
    address: 'Calle Emma Balaguer #17, Los Girasoles, Segundo Nivel',
    phone: '809-561-5640',
    whatsapp: '829-812-0499',
    waLink: 'https://wa.me/18298120499?text=Hola%20Dimado!%20Quiero%20agendar%20una%20cita%20en%20la%20sucursal%20de%20Los%20Girasoles.',
    accent: 'var(--blue-main)',
    bg: 'var(--blue-pale)',
  },
  {
    label: 'SUCURSAL 2',
    name: 'Plaza Liam',
    address: 'Av. Monumental, Plaza Liam, Primer Nivel',
    phone: '809-738-3233',
    whatsapp: '829-933-9036',
    waLink: 'https://wa.me/18299339036?text=Hola%20Dimado!%20Quiero%20agendar%20una%20cita%20en%20Plaza%20Liam.',
    accent: 'var(--cyan)',
    bg: '#E0F7FA',
  },
];

export default function LocationsSection() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--bg-section)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel icon="📍" text="NUESTRAS UBICACIONES" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              color: 'var(--text-dark)',
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            Dos Sedes Para
            <br />
            Tu Comodidad
          </motion.h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: 'var(--text-muted)',
            }}
          >
            Visítanos en la sucursal más cercana a ti
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="locations-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}
        >
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{
                y: -6,
                boxShadow: 'var(--shadow-lg)',
              }}
              style={{
                background: 'var(--bg-white)',
                borderRadius: 20,
                padding: 40,
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s',
                cursor: 'default',
              }}
            >
              {/* Accent top bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: loc.accent,
                }}
              />

              {/* Label badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: loc.bg,
                  borderRadius: 50,
                  padding: '6px 14px',
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: loc.accent,
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: 11,
                    color: loc.accent,
                    letterSpacing: '0.06em',
                  }}
                >
                  {loc.label}
                </span>
              </div>

              {/* Location icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: loc.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  fontSize: 28,
                }}
              >
                📍
              </motion.div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 24,
                  color: 'var(--text-dark)',
                  fontWeight: 400,
                  marginBottom: 12,
                }}
              >
                {loc.name}
              </h3>

              {/* Address */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: 20,
                  minHeight: 44,
                }}
              >
                {loc.address}
              </p>

              {/* Contact info */}
              <div style={{ marginBottom: 24 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <span style={{ fontSize: 14 }}>📞</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: 'var(--text-body)',
                      fontWeight: 500,
                    }}
                  >
                    {loc.phone}
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 14 }}>📱</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: 'var(--text-body)',
                      fontWeight: 500,
                    }}
                  >
                    WhatsApp: {loc.whatsapp}
                  </span>
                </div>
              </div>

              {/* CTA WhatsApp */}
              <a
                href={loc.waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 14,
                  color: '#FFFFFF',
                  background: '#25D366',
                  borderRadius: 50,
                  padding: '14px 28px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar Cita
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

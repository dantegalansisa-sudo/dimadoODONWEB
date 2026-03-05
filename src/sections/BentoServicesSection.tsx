import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const services = [
  {
    name: 'Ortodoncia',
    icon: '😁',
    desc: 'Brackets y alineadores para una sonrisa perfectamente alineada.',
    size: 'large' as const,
    specialist: 'Dra. Pilar Faleta',
    bg: 'var(--blue-pale)',
  },
  {
    name: 'Odontopediatría',
    icon: '👶',
    desc: 'Cuidado dental especializado para niños con más de 20 años de experiencia.',
    size: 'medium' as const,
    specialist: 'Dra. Rossy García',
    bg: '#F0FFF4',
  },
  {
    name: 'Limpieza Dental',
    icon: '🦷',
    desc: 'Profilaxis profesional. Evaluación GRATIS este mes.',
    size: 'medium' as const,
    specialist: 'Equipo Dimado',
    promo: 'RD$950',
    bg: 'var(--bg-section)',
  },
  {
    name: 'Endodoncia',
    icon: '🔬',
    desc: 'Tratamiento de conducto sin dolor con tecnología avanzada.',
    size: 'large' as const,
    specialist: 'Especialistas Dimado',
    bg: 'var(--blue-pale)',
  },
  {
    name: 'Blanqueamiento',
    icon: '✨',
    desc: 'Dientes más blancos en 1 sesión.',
    size: 'small' as const,
    bg: '#FFFDF0',
  },
  {
    name: 'Carillas',
    icon: '💎',
    desc: 'Transformación completa de tu sonrisa.',
    size: 'small' as const,
    bg: 'var(--bg-section)',
  },
  {
    name: 'Extracciones',
    icon: '🩺',
    desc: 'Procedimientos seguros y sin dolor.',
    size: 'small' as const,
    bg: '#F9F0FF',
  },
];

export default function BentoServicesSection() {
  return (
    <section id="servicios" style={{ padding: '120px 0', background: 'var(--bg-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel icon="🦷" text="NUESTROS SERVICIOS" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              color: 'var(--text-dark)',
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Explora Nuestros Servicios
          </motion.h2>
          <motion.a
            href="#contacto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--blue-mid)',
              border: '1.5px solid var(--blue-light)',
              borderRadius: 50,
              padding: '8px 20px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            Explore now
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        {/* Bento Grid */}
        <div
          className="bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {services.map((service, i) => {
            const gridSpan =
              service.size === 'large'
                ? { gridColumn: 'span 2' }
                : service.size === 'medium'
                ? { gridColumn: 'span 1' }
                : {};

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: 'var(--shadow-md)',
                }}
                className="bento-card"
                style={{
                  background: service.bg,
                  borderRadius: 20,
                  padding: service.size === 'small' ? 24 : 32,
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                  ...gridSpan,
                }}
              >
                {/* Promo badge */}
                {service.promo && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      background: '#FEF3C7',
                      color: '#92400E',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: 10,
                      padding: '5px 12px',
                      borderRadius: 50,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    OFERTA DEL MES
                  </div>
                )}

                {/* Icon */}
                <div
                  style={{
                    fontSize: service.size === 'small' ? 32 : 40,
                    marginBottom: service.size === 'small' ? 12 : 20,
                    lineHeight: 1,
                  }}
                >
                  {service.icon}
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: service.size === 'small' ? 18 : 22,
                    color: 'var(--text-dark)',
                    fontWeight: 400,
                    marginBottom: 8,
                  }}
                >
                  {service.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: service.specialist ? 14 : 0,
                    maxWidth: service.size === 'large' ? 360 : undefined,
                  }}
                >
                  {service.desc}
                </p>

                {/* Price */}
                {service.promo && (
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 28,
                      color: 'var(--blue-main)',
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                  >
                    {service.promo}
                  </p>
                )}

                {/* Specialist badge */}
                {service.specialist && (
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: 11,
                      color: 'var(--blue-main)',
                      background: 'rgba(255,255,255,0.85)',
                      padding: '5px 14px',
                      borderRadius: 50,
                      border: '1px solid rgba(21,101,192,0.1)',
                    }}
                  >
                    {service.specialist}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

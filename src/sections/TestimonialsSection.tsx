import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const testimonials = [
  {
    initials: 'CM',
    name: 'Carmen M.',
    treatment: 'Ortodoncia — Dra. Pilar',
    stars: 5,
    text: 'La Dra. Pilar es increíble. Mi tratamiento de ortodoncia fue exactamente lo que necesitaba. El Dr. Maleno y su equipo son muy profesionales. 100% recomendados.',
  },
  {
    initials: 'JP',
    name: 'José P.',
    treatment: 'Odontopediatría — Dra. Rossy',
    stars: 5,
    text: 'La Dra. Rossy tiene una paciencia y amor por los niños increíble. Mi hijo fue con miedo y salió feliz. Más de 20 años de experiencia que se notan en cada detalle.',
  },
  {
    initials: 'AM',
    name: 'Ana M.',
    treatment: 'Limpieza y Blanqueamiento',
    stars: 5,
    text: 'Fui por el especial de profilaxis y quedé fascinada. La clínica en Plaza Liam es moderna y limpia. Todo el equipo te hace sentir en un ambiente de confianza total.',
  },
];

export default function TestimonialsSection() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--bg-section)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel icon="💬" text="TESTIMONIOS" />
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
            }}
          >
            Lo Que Dicen
            <br />
            Nuestros Pacientes
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'var(--bg-white)',
                borderRadius: 16,
                padding: '32px 28px',
                borderTop: '3px solid var(--cyan)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Quote mark */}
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 64,
                  color: 'var(--blue-pale)',
                  lineHeight: 0.8,
                  marginBottom: 8,
                  userSelect: 'none',
                }}
              >
                "
              </p>

              {/* Stars */}
              <div style={{ marginBottom: 14 }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} style={{ color: '#FBBF24', fontSize: 16 }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'var(--text-body)',
                  marginBottom: 24,
                }}
              >
                {t.text}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'var(--blue-pale)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: 14,
                    color: 'var(--blue-main)',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: 14,
                      color: 'var(--text-dark)',
                      lineHeight: 1.3,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 12,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {t.treatment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

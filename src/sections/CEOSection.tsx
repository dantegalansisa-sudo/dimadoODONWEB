import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const credentials = [
  { icon: '🦷', text: 'Director del Centro Odontológico Dimado' },
  { icon: '🏆', text: 'Equipo de 8 especialistas' },
  { icon: '✅', text: 'Aceptamos ARS' },
  { icon: '📍', text: 'Av. Monumental, Plaza Liam, Primer Nivel' },
];

export default function CEOSection() {
  return (
    <section id="ceo" style={{ padding: '120px 0', background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="ceo-grid" style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: 56, alignItems: 'center' }}>
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel icon="👨‍⚕️" text="DIRECTOR & CEO" />

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'var(--text-h2)',
                color: 'var(--text-dark)',
                fontWeight: 400,
                lineHeight: 1.12,
                marginBottom: 24,
              }}
            >
              Dr. Maikel Maleno
              <br />
              <span style={{ color: 'var(--blue-mid)' }}>El Liderazgo</span> Detrás
              <br />
              de Dimado.
            </h2>

            {/* Blue line */}
            <div
              style={{
                width: 60,
                height: 3,
                background: 'var(--blue-mid)',
                borderRadius: 2,
                marginBottom: 24,
              }}
            />

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                lineHeight: 1.75,
                color: 'var(--text-body)',
                marginBottom: 28,
                maxWidth: 480,
              }}
            >
              El Dr. Maikel Maleno fundó el Centro Odontológico Dimado con una
              visión clara: ofrecer atención dental de especialidad con el más
              alto nivel de calidad y calidez humana. Su liderazgo ha construido
              un equipo de 8 profesionales comprometidos con la salud bucal de
              sus pacientes.
            </p>

            {/* Quote */}
            <div
              style={{
                background: 'var(--blue-pale)',
                borderLeft: '3px solid var(--blue-mid)',
                borderRadius: '0 12px 12px 0',
                padding: '20px 24px',
                marginBottom: 28,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 18,
                  color: 'var(--text-dark)',
                  marginBottom: 6,
                }}
              >
                "Tu sonrisa, nuestra especialidad."
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                }}
              >
                — Dr. Maikel Maleno, Director & CEO
              </p>
            </div>

            {/* Credentials */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginBottom: 32,
              }}
            >
              {credentials.map((cred) => (
                <div
                  key={cred.text}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: 18, lineHeight: 1.4 }}>{cred.icon}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      color: 'var(--text-body)',
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {cred.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 14,
                color: '#FFFFFF',
                background: 'var(--blue-mid)',
                borderRadius: 50,
                padding: '14px 28px',
                boxShadow: 'var(--shadow-blue)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              Agendar con Dr. Maleno
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Blob behind */}
            <div
              style={{
                position: 'absolute',
                top: -20,
                right: -20,
                bottom: -20,
                left: -20,
                background: 'var(--blue-pale)',
                borderRadius: '40% 60% 55% 45% / 50% 40% 60% 50%',
                opacity: 0.5,
                zIndex: 0,
              }}
            />

            <img
              src="/images/CEO.jpeg"
              alt="Dr. Maikel Maleno"
              style={{
                width: '100%',
                aspectRatio: '3/4',
                objectFit: 'cover',
                objectPosition: 'top center',
                borderRadius: 20,
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                zIndex: 1,
              }}
            />

            {/* Badge on photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                right: 20,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(12px)',
                borderRadius: 12,
                padding: '14px 18px',
                boxShadow: 'var(--shadow-md)',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--blue-pale)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  flexShrink: 0,
                }}
              >
                👨‍⚕️
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 13,
                    color: 'var(--text-dark)',
                    lineHeight: 1.2,
                  }}
                >
                  CEO & Director
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    color: 'var(--text-muted)',
                  }}
                >
                  Centro Odontológico Dimado
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

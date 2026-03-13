import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const secretarias = [
  {
    name: 'Zaidi Guzmán',
    role: 'SECRETARIA',
    location: 'Sucursal Plaza Liam — Av. Monumental',
    photo: '/images/zaidi guzman- secretaria de la plaza liam.jpeg',
  },
  {
    name: 'Próximamente',
    role: 'SECRETARIA',
    location: 'Sucursal Los Girasoles',
    photo: '',
  },
];

export default function SecretariasSection() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-section)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <SectionLabel icon="💼" text="ADMINISTRACIÓN" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-h3)',
              color: 'var(--text-dark)',
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            Nuestro Equipo Administrativo
          </motion.h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              color: 'var(--text-muted)',
              marginTop: 8,
            }}
          >
            Siempre listas para atenderte con amabilidad y eficiencia
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          {secretarias.map((sec, i) => (
            <motion.div
              key={sec.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              whileHover={{
                y: -4,
                boxShadow: 'var(--shadow-md)',
              }}
              style={{
                background: 'var(--bg-white)',
                borderRadius: 20,
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 0.3s, transform 0.3s',
                width: 220,
                cursor: 'default',
              }}
            >
              {/* Photo */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  background: sec.photo ? 'transparent' : 'var(--bg-section)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {sec.photo ? (
                  <img
                    src={sec.photo}
                    alt={sec.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 8,
                      color: 'var(--text-muted)',
                    }}
                  >
                    <span style={{ fontSize: 40 }}>👤</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      Foto próximamente
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: '16px 18px 20px', textAlign: 'center' }}>
                <div
                  style={{
                    display: 'inline-block',
                    background: '#FFF3E0',
                    color: '#E65100',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 10,
                    padding: '4px 12px',
                    borderRadius: 50,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}
                >
                  {sec.role}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 17,
                    color: 'var(--text-dark)',
                    fontWeight: 400,
                    marginBottom: 4,
                  }}
                >
                  {sec.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    color: 'var(--text-muted)',
                    lineHeight: 1.4,
                  }}
                >
                  {sec.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

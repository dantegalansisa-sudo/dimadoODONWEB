import { motion } from 'framer-motion';
import FloatingCard from '../components/FloatingCard';

const ease = [0.16, 1, 0.3, 1] as const;

const slideUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease },
});

const avatars = [
  '/images/PILAR FALETA.jpeg',
  '/images/ROSSY GARCIA.jpeg',
  '/images/JAILENNY SANTOS.jpeg',
];

export default function HeroSection() {
  return (
    <section className="hero-section-outer" style={{ padding: '110px 24px 0', background: 'var(--bg-base)' }}>
      <div
        className="hero-container"
        style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          height: '92vh',
          minHeight: 700,
          maxHeight: 1100,
          background: '#000',
        }}
      >
        {/* Background Video */}
        <motion.div
          className="hero-bg-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center center',
              background: '#000',
            }}
          >
            <source src="/video/Bienvenidos a nuestra clínica familiar✨️ Dimado Centro Odontologico 🤍 donde cuidamos de ti en t.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Left overlay gradient */}
        <div
          className="hero-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 25%, transparent 45%)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          className="hero-content"
          style={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px 56px 40px',
            maxWidth: 680,
            textShadow: '0 2px 12px rgba(0,0,0,0.3)',
          }}
        >
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              borderRadius: 50,
              padding: '8px 18px',
              width: 'fit-content',
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#22C55E',
                boxShadow: '0 0 0 3px rgba(34,197,94,0.25)',
                animation: 'pulse-dot 2s infinite',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
              }}
            >
              CONSULTAS DISPONIBLES · PLAZA LIAM · LOS GIRASOLES
            </span>
          </motion.div>

          {/* Title — staggered lines */}
          <div style={{ marginBottom: 24 }}>
            <motion.div {...slideUp(0.4)}>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'var(--text-hero)',
                  lineHeight: 1.08,
                  color: '#FFFFFF',
                  fontWeight: 400,
                }}
              >
                <motion.span
                  style={{ display: 'block' }}
                  {...slideUp(0.4)}
                >
                  Cuidado Dental Diario
                </motion.span>
                <motion.span
                  style={{ display: 'block' }}
                  {...slideUp(0.55)}
                >
                  para una{' '}
                  <span style={{ color: 'var(--cyan)' }}>Sonrisa</span>
                </motion.span>
                <motion.span
                  style={{ display: 'block' }}
                  {...slideUp(0.7)}
                >
                  Saludable.
                </motion.span>
              </h1>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 440,
              marginBottom: 32,
            }}
          >
            Tu sonrisa, nuestra especialidad. El Dr. Maikel Maleno y su equipo
            de especialistas te ofrecen la mejor atención odontológica con
            tecnología de vanguardia.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...slideUp(1.0)}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}
          >
            <button
              style={{
                background: 'var(--text-dark)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 14,
                padding: '14px 28px',
                borderRadius: 50,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: 16 }}>&#x1F4E5;</span>
              Descargar Agenda
            </button>
            <button
              style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(4px)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 14,
                padding: '14px 28px',
                borderRadius: 50,
                border: '1.5px solid rgba(255,255,255,0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FFFFFF';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              <span style={{ fontSize: 16 }}>&#x1F4C5;</span>
              Agendar Consulta
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            {/* Avatars stack */}
            <div style={{ display: 'flex' }}>
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Doctor"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2.5px solid white',
                    marginLeft: i > 0 ? -10 : 0,
                    position: 'relative',
                    zIndex: 3 - i,
                  }}
                />
              ))}
            </div>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 13,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                }}
              >
                Más de 8 Doctores Especializados
              </p>
              <button
                style={{
                  background: 'none',
                  padding: 0,
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: 12,
                  color: 'var(--cyan)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  marginTop: 2,
                }}
              >
                Ver Equipo
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ==========================================
            FLOATING CARDS — Ibnesina Style
            ========================================== */}

        {/* Card 1 — Top right: Patient Insights */}
        <div
          className="hero-floating-card"
          style={{
            position: 'absolute',
            top: '13%',
            right: '3%',
            zIndex: 3,
          }}
        >
          <FloatingCard delay={0.7} duration={5}>
            <div style={{ minWidth: 200 }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                Insights / Paciente
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face"
                  alt="Paciente"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
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
                    Juana · 32 años
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 11,
                      color: 'var(--text-muted)',
                    }}
                  >
                    Femenina
                  </p>
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 11,
                      color: 'var(--text-muted)',
                    }}
                  >
                    Reporte Mensual
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 11,
                      fontWeight: 600,
                      color: 'var(--blue-mid)',
                    }}
                  >
                    78%
                  </span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: 5,
                    background: 'var(--blue-pale)',
                    borderRadius: 10,
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '78%' }}
                    transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      height: '100%',
                      background: 'var(--blue-mid)',
                      borderRadius: 10,
                    }}
                  />
                </div>
              </div>
            </div>
          </FloatingCard>
        </div>

        {/* Card 2 — Mid right: Rating */}
        <div
          className="hero-floating-card"
          style={{
            position: 'absolute',
            top: '48%',
            right: '5%',
            zIndex: 3,
          }}
        >
          <FloatingCard delay={0.9} duration={6}>
            <div style={{ textAlign: 'center', padding: '4px 12px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 36,
                  fontWeight: 700,
                  color: 'var(--blue-mid)',
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                4.9 <span style={{ fontSize: 22 }}>&#11088;</span>
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.03em',
                }}
              >
                Calificación Promedio
              </p>
            </div>
          </FloatingCard>
        </div>

        {/* Card 3 — Bottom left: Patients count */}
        <div
          className="hero-floating-card"
          style={{
            position: 'absolute',
            bottom: '12%',
            left: '38%',
            zIndex: 3,
          }}
        >
          <FloatingCard delay={1.1} duration={4.5}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex' }}>
                {[
                  '/images/ceoo.jpeg',
                  '/images/PILAR FALETA.jpeg',
                  '/images/ROSSY GARCIA.jpeg',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Paciente"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid white',
                      marginLeft: i > 0 ? -8 : 0,
                    }}
                  />
                ))}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: 15,
                    color: 'var(--text-dark)',
                    lineHeight: 1.2,
                  }}
                >
                  2,008+
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    color: 'var(--text-muted)',
                  }}
                >
                  Pacientes satisfechos
                </p>
              </div>
            </div>
          </FloatingCard>
        </div>

        {/* Card 4 — Bottom right: Specialists */}
        <div
          className="hero-floating-card"
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '4%',
            zIndex: 3,
          }}
        >
          <FloatingCard delay={1.3} duration={5.5}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex' }}>
                {[
                  '/images/PILAR FALETA.jpeg',
                  '/images/Jhoanna Tapia.jpeg',
                  '/images/ROSSY GARCIA.jpeg',
                  '/images/JAILENNY SANTOS.jpeg',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Especialista"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid white',
                      marginLeft: i > 0 ? -8 : 0,
                    }}
                  />
                ))}
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
                  Nuestros Especialistas
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11,
                    color: 'var(--text-muted)',
                  }}
                >
                  8 profesionales
                </p>
              </div>
            </div>
          </FloatingCard>
        </div>

        {/* Decorative social icons badge — top right */}
        <motion.div
          className="hero-social-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            zIndex: 3,
            display: 'flex',
            gap: 6,
          }}
        >
          {['in', '🔗', '✕'].map((icon, i) => (
            <span
              key={i}
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                color: 'var(--text-body)',
                border: '1px solid rgba(0,0,0,0.06)',
                cursor: 'pointer',
              }}
            >
              {icon}
            </span>
          ))}
        </motion.div>

        {/* Decorative stat badge */}
        <motion.div
          className="hero-stat-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{
            position: 'absolute',
            top: '30%',
            right: '28%',
            zIndex: 3,
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            borderRadius: 10,
            padding: '6px 12px',
            border: '1px solid rgba(0,0,0,0.04)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 13,
              color: 'var(--cyan)',
            }}
          >
            ×20%
          </span>
        </motion.div>

        {/* Slide navigator — decorative */}
        <motion.div
          className="hero-slide-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: 50,
            padding: '8px 20px',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ cursor: 'pointer' }}>
            <path d="M9 3L5 7L9 11" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--text-dark)',
            }}
          >
            01
          </span>
          <div
            style={{
              width: 80,
              height: 2,
              background: 'var(--border)',
              borderRadius: 2,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '20%',
                height: '100%',
                background: 'var(--blue-mid)',
                borderRadius: 2,
              }}
            />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--text-muted)',
            }}
          >
            05
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ cursor: 'pointer' }}>
            <path d="M5 3L9 7L5 11" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

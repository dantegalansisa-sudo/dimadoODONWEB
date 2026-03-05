import { motion } from 'framer-motion';

export default function PromoSection() {
  return (
    <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="promo-banner"
          style={{
            background: 'linear-gradient(135deg, var(--blue-main), var(--blue-mid))',
            borderRadius: 20,
            padding: '48px 56px',
            boxShadow: 'var(--shadow-lg)',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 40,
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative tooth SVG in background */}
          <div
            style={{
              position: 'absolute',
              right: '10%',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 120,
              opacity: 0.08,
              pointerEvents: 'none',
            }}
          >
            🦷
          </div>

          {/* Badge */}
          <div
            style={{
              position: 'absolute',
              top: -8,
              right: 40,
              background: 'var(--cyan)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 11,
              padding: '8px 18px',
              borderRadius: '0 0 12px 12px',
              letterSpacing: '0.04em',
            }}
          >
            INSCRIPCIÓN GRATIS
          </div>

          {/* Left — Text */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 14,
                color: 'rgba(255,255,255,0.8)',
                marginBottom: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{ fontSize: 18 }}>🎁</span>
              Mes de la Salud Bucal
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(22px, 3vw, 32px)',
                color: '#FFFFFF',
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              Evaluación GRATIS + Profilaxis dental
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 48px)',
                color: '#FFFFFF',
                fontWeight: 700,
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              RD$ 950
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              ¡Llama y aprovecha solo por este mes!
            </p>
          </div>

          {/* Right — CTA */}
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <a
              href="#contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: 14,
                color: 'var(--blue-main)',
                background: '#FFFFFF',
                borderRadius: 50,
                padding: '16px 32px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              Aprovechar Oferta
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'rgba(255,255,255,0.7)',
                marginTop: 12,
              }}
            >
              Llama: (829) 933-9036
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

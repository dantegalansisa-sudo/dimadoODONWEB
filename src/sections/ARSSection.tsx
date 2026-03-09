import { motion } from 'framer-motion';

const arsProviders = [
  'ARS Humano',
  'ARS Senasa',
  'ARS Universal',
  'ARS Simag',
  'ARS Constitución',
  'Y muchas más',
];

export default function ARSSection() {
  return (
    <section id="ars" style={{ padding: '80px 0', background: 'var(--blue-main)' }}>
      <div className="container">
        {/* ALERTA — No recibimos ARS temporalmente */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: '#FEF3C7',
            border: '2px solid #F59E0B',
            borderRadius: 16,
            padding: '20px 28px',
            marginBottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            maxWidth: 700,
            margin: '0 auto 40px',
          }}
        >
          <span style={{ fontSize: 28, flexShrink: 0 }}>⚠️</span>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: 15,
                color: '#92400E',
                marginBottom: 4,
              }}
            >
              Aviso Importante
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                color: '#92400E',
                lineHeight: 1.5,
              }}
            >
              No estamos recibiendo seguros médicos hasta nuevo aviso. Disculpe las molestias.
            </p>
          </div>
        </motion.div>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 28 }}>✅</span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'var(--text-h2)',
                color: '#FFFFFF',
                fontWeight: 400,
              }}
            >
              Aceptamos ARS
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: 400,
              margin: '0 auto',
            }}
          >
            Tu seguro de salud cubre tu tratamiento dental
          </motion.p>
        </div>

        {/* ARS Grid */}
        <div
          className="ars-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
            maxWidth: 700,
            margin: '0 auto 48px',
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        >
          {arsProviders.map((ars, i) => (
            <motion.div
              key={ars}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: 20,
                textAlign: 'center',
                transition: 'background 0.2s',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 14,
                  color: '#FFFFFF',
                }}
              >
                {ars}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: 20,
            }}
          >
            ¿Tienes ARS? Llámanos y verificamos tu cobertura
          </p>
          <a
            href="tel:8099339036"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 14,
              color: 'var(--blue-main)',
              background: '#FFFFFF',
              borderRadius: 50,
              padding: '14px 28px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s',
            }}
          >
            <span style={{ fontSize: 16 }}>&#x1F4DE;</span>
            Llamar Ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}

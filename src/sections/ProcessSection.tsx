import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const steps = [
  {
    num: '01',
    icon: '📞',
    title: 'Llama o Escribe',
    desc: 'Contáctanos por WhatsApp o teléfono para consultar disponibilidad.',
  },
  {
    num: '02',
    icon: '🔍',
    title: 'Evaluación Inicial',
    desc: 'Diagnóstico completo de tu salud bucal con nuestros especialistas.',
  },
  {
    num: '03',
    icon: '🦷',
    title: 'Tu Tratamiento',
    desc: 'Plan personalizado ejecutado por nuestros especialistas certificados.',
  },
  {
    num: '04',
    icon: '😊',
    title: 'Sonrisa Nueva',
    desc: 'Resultado que transforma tu confianza y bienestar diario.',
  },
];

export default function ProcessSection() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--bg-section)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionLabel icon="📋" text="CÓMO FUNCIONA" />
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
            Tu Camino Hacia
            <br />
            una Sonrisa Perfecta
          </motion.h2>
        </div>

        {/* Steps */}
        <div
          className="process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            position: 'relative',
          }}
        >
          {/* Connecting dashed line */}
          <div
            className="process-line"
            style={{
              position: 'absolute',
              top: 40,
              left: '15%',
              right: '15%',
              borderTop: '2px dashed var(--border)',
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Number circle */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'var(--blue-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: 'var(--shadow-blue)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 800,
                    fontSize: 16,
                    color: '#FFFFFF',
                  }}
                >
                  {step.num}
                </span>
              </div>

              {/* Icon */}
              <div
                style={{
                  fontSize: 32,
                  marginBottom: 14,
                  lineHeight: 1,
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  color: 'var(--text-dark)',
                  fontWeight: 400,
                  marginBottom: 8,
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  maxWidth: 220,
                  margin: '0 auto',
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

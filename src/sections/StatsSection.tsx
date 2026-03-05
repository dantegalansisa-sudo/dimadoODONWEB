import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  { value: 2008, suffix: '+', label: 'PACIENTES SATISFECHOS', decimals: 0 },
  { value: 8, suffix: '', label: 'ESPECIALISTAS EN EQUIPO', decimals: 0 },
  { value: 20, suffix: '+', label: 'AÑOS DE EXPERIENCIA', decimals: 0 },
  { value: 4.9, suffix: '★', label: 'CALIFICACIÓN PROMEDIO', decimals: 1 },
];

export default function StatsSection() {
  return (
    <section
      style={{
        padding: '80px 0',
        background: 'var(--bg-white)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                textAlign: 'center',
                padding: '0 24px',
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              }}
              className="stat-item"
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(40px, 5vw, 72px)',
                  color: 'var(--blue-main)',
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 11,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

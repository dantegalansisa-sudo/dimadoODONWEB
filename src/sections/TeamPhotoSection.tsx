import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from '../components/SectionLabel';

const specialties = [
  'Odontopediatría',
  'Ortodoncia',
  'Periodoncia',
  'Endodoncia',
  'Implantes Dentales',
  'Cirugía Maxilofacial',
  'Rejuvenecimiento Facial',
  'Estética Dental',
  'Rehabilitación Bucal',
];

export default function TeamPhotoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={ref} style={{ padding: '120px 0', background: 'var(--bg-section)' }}>
      <div className="container">
        <div
          className="team-photo-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '40% 60%',
            gap: 56,
            alignItems: 'center',
          }}
        >
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel icon="🤝" text="NUESTRO EQUIPO COMPLETO" />

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'var(--text-h2)',
                color: 'var(--text-dark)',
                fontWeight: 400,
                lineHeight: 1.12,
                marginBottom: 20,
              }}
            >
              8 Profesionales,
              <br />
              Una Sola <em>Misión</em>.
            </h2>

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
              }}
            >
              En Centro Odontológico Dimado contamos con un equipo de 8
              especialistas altamente capacitados, comprometidos con brindarte la
              mejor atención dental en un ambiente moderno y acogedor.
            </p>

            {/* Specialty chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginBottom: 32,
              }}
            >
              {specialties.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 12,
                    color: 'var(--blue-main)',
                    background: 'var(--blue-pale)',
                    borderRadius: 50,
                    padding: '7px 16px',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href="#equipo"
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
              }}
            >
              Conoce a Nuestro Equipo
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
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Offset frame */}
            <div
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
                right: -12,
                bottom: -12,
                border: '2px solid var(--blue-pale)',
                borderRadius: 20,
                zIndex: 0,
              }}
            />

            {/* Blob */}
            <div
              style={{
                position: 'absolute',
                top: -30,
                right: -30,
                width: '70%',
                height: '70%',
                background: 'var(--blue-mid)',
                opacity: 0.06,
                borderRadius: '40% 60% 50% 50% / 50% 40% 60% 50%',
                zIndex: 0,
              }}
            />

            <motion.img
              src="/images/TEAMS.jpeg"
              alt="Equipo Dimado"
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
                borderRadius: 20,
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                zIndex: 1,
                y: photoY,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

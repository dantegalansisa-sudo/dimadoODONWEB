import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const specialists = [
  {
    name: 'Dra. Pilar Faleta',
    role: 'ORTODONCISTA',
    specialty: 'Ortodoncia — Brackets y alineadores',
    placeholder: '/images/PILAR FALETA.jpeg',
    badge: 'ORTODONCIA',
  },
  {
    name: 'Dra. Jhoanna Tapia',
    role: 'PERIODONCISTA',
    specialty: 'Tratamiento especializado de encías',
    placeholder: '/images/Jhoanna Tapia.jpeg',
    badge: 'PERIODONCIA',
  },
  {
    name: 'Dra. Rossy García',
    role: 'ODONTOPEDIATRA',
    specialty: 'Odontología pediátrica · +20 años de experiencia',
    placeholder: '/images/ROSSY GARCIA.jpeg',
    badge: 'ODONTOPEDIATRÍA',
    highlight: '+20 AÑOS',
  },
  {
    name: 'Dra. Jailenny Santos',
    role: 'ODONTÓLOGA',
    specialty: 'Atención general y especializada',
    placeholder: '/images/JAILENNY SANTOS.jpeg',
    badge: 'ODONTOLOGÍA',
  },
  {
    name: 'Dra. Angely Betances',
    role: 'CIRUJANA MAXILOFACIAL',
    specialty: 'Cirugía maxilofacial especializada',
    placeholder: '/images/Angely  Betances.jpeg',
    badge: 'CIRUGÍA MAXILOFACIAL',
  },
];

export default function TeamSection() {
  return (
    <section id="equipo" style={{ padding: '120px 0', background: 'var(--bg-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel icon="👩‍⚕️" text="NUESTRAS ESPECIALISTAS" />
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
            El Equipo que
            <br />
            Cuida Tu Sonrisa
          </motion.h2>
        </div>

        {/* Team grid */}
        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 20,
          }}
        >
          {specialists.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: 'var(--shadow-md)',
              }}
              style={{
                background: 'var(--bg-white)',
                borderRadius: 20,
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 0.3s, transform 0.3s',
                cursor: 'pointer',
              }}
            >
              {/* Photo container */}
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={doc.placeholder}
                  alt={doc.name}
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />

                {/* Highlight badge */}
                {doc.highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'var(--blue-main)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: 10,
                      padding: '5px 12px',
                      borderRadius: 50,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {doc.highlight}
                  </div>
                )}

                {/* Role badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    background: 'var(--blue-pale)',
                    color: 'var(--blue-main)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 10,
                    padding: '5px 12px',
                    borderRadius: 50,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {doc.badge}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '18px 20px 22px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 18,
                    color: 'var(--text-dark)',
                    fontWeight: 400,
                    marginBottom: 4,
                  }}
                >
                  {doc.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {doc.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const photosMonumental = [
  { src: '/images/consul.jpeg', alt: 'Sucursal Monumental' },
  { src: '/images/consul1.jpeg', alt: 'Sucursal Monumental' },
  { src: '/images/consul2.jpeg', alt: 'Sucursal Monumental' },
  { src: '/images/consul6areadereseccion.jpeg', alt: 'Recepción — Sucursal Monumental' },
];

const photosGirasoles = [
  { src: '/images/girasoles.jpeg', alt: 'Sucursal Los Girasoles' },
  { src: '/images/girasoles1.jpeg', alt: 'Sucursal Los Girasoles' },
  { src: '/images/girasoles2.jpeg', alt: 'Sucursal Los Girasoles' },
  { src: '/images/girasoles3.jpeg', alt: 'Sucursal Los Girasoles' },
];

function GalleryPhoto({ photo, delay }: { photo: { src: string; alt: string }; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        delay,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      style={{
        position: 'relative',
        aspectRatio: '1 / 1',
        borderRadius: 14,
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(1.15) contrast(1.05) saturate(1.1)',
          transition: 'transform 0.4s ease, filter 0.4s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          const overlay = e.currentTarget.nextElementSibling as HTMLElement;
          if (overlay) overlay.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          const overlay = e.currentTarget.nextElementSibling as HTMLElement;
          if (overlay) overlay.style.opacity = '0';
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(21, 101, 192, 0.25)',
          opacity: 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
          }}
        >
          🔍
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--bg-white)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel icon="📸" text="GALERÍA" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              color: 'var(--text-dark)',
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: 12,
            }}
          >
            Nuestras Instalaciones
          </motion.h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: 'var(--text-muted)',
            }}
          >
            Espacios modernos diseñados para tu comodidad
          </p>
        </div>

        {/* Sucursal Monumental */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 14,
            color: 'var(--blue-main)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: 16,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--blue-pale)',
            padding: '8px 18px',
            borderRadius: 50,
          }}
        >
          <span style={{ fontSize: 16 }}>📍</span>
          Sucursal Plaza Liam — Av. Monumental
        </motion.h3>
        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
            marginBottom: 48,
          }}
        >
          {photosMonumental.map((photo, i) => (
            <GalleryPhoto key={`m-${i}`} photo={photo} delay={i * 0.06} />
          ))}
        </div>

        {/* Sucursal Los Girasoles */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 14,
            color: 'var(--cyan)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: 16,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#E0F7FA',
            padding: '8px 18px',
            borderRadius: 50,
          }}
        >
          <span style={{ fontSize: 16 }}>📍</span>
          Sucursal Los Girasoles
        </motion.h3>
        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
          }}
        >
          {photosGirasoles.map((photo, i) => (
            <GalleryPhoto key={`g-${i}`} photo={photo} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

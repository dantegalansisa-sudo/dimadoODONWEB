import { motion } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';

const photos = [
  { src: '/images/consultorio1.jpg', placeholder: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80' },
  { src: '/images/consultorio2.jpg', placeholder: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80' },
  { src: '/images/consultorio3.jpg', placeholder: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80' },
  { src: '/images/consultorio4.jpg', placeholder: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80' },
  { src: '/images/consultorio5.jpg', placeholder: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80' },
  { src: '/images/consultorio6.jpg', placeholder: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80' },
  { src: '/images/consultorio7.jpg', placeholder: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
  { src: '/images/consultorio8.jpg', placeholder: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80' },
];

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

        {/* Gallery Grid */}
        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
          }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.06,
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
                src={photo.placeholder}
                alt={`Consultorio Dimado ${i + 1}`}
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src !== photo.placeholder) return;
                  // Already showing placeholder
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
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
              {/* Hover overlay */}
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
          ))}
        </div>
      </div>
    </section>
  );
}

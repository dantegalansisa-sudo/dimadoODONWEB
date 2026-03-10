import { motion } from 'framer-motion';

export default function LocationImageSection() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--bg-white)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src="/images/location.jpeg"
            alt="Ubicación Centro Odontológico Dimado — Av. Monumental #30, Local 101, Plaza Liam, Horarios 8:00am a 6:00pm"
            style={{
              width: '100%',
              maxWidth: 700,
              borderRadius: 20,
              boxShadow: 'var(--shadow-lg)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

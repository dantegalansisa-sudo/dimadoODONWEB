import { motion } from 'framer-motion';

interface SectionLabelProps {
  icon?: string;
  text: string;
}

export default function SectionLabel({ icon, text }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: 'var(--blue-pale)',
        borderRadius: 50,
        padding: '8px 18px',
        marginBottom: 20,
      }}
    >
      {icon && <span style={{ fontSize: 14 }}>{icon}</span>}
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          fontWeight: 600,
          color: 'var(--blue-main)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        {text}
      </span>
    </motion.div>
  );
}

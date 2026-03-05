import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.link/ky62jl"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: 'var(--blue-mid)',
        color: '#FFFFFF',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 14,
        borderRadius: 50,
        padding: '14px 24px',
        boxShadow: 'var(--shadow-blue)',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
    >
      {/* Ping dot */}
      <span
        style={{
          position: 'absolute',
          top: -3,
          right: -3,
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: '#22C55E',
          border: '2px solid var(--blue-mid)',
          animation: 'pulse-dot 2s infinite',
        }}
      />
      <span style={{ fontSize: 18 }}>💬</span>
      WhatsApp
    </motion.a>
  );
}

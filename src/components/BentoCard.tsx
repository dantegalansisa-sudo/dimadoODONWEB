import { motion } from 'framer-motion';
import { type CSSProperties, type ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  bg?: string;
  style?: CSSProperties;
  delay?: number;
  onClick?: () => void;
}

export default function BentoCard({
  children,
  bg = 'var(--bg-card)',
  style,
  delay = 0,
  onClick,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.01, boxShadow: 'var(--shadow-md)' }}
      onClick={onClick}
      style={{
        background: bg,
        borderRadius: 20,
        padding: 32,
        border: '1px solid var(--border)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'box-shadow 0.3s ease',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

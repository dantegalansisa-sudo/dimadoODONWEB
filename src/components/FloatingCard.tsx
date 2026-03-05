import { motion } from 'framer-motion';
import { type CSSProperties, type ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  className?: string;
}

const floatKeyframes = [
  'float-gentle',
  'float-gentle-2',
  'float-gentle-3',
];

export default function FloatingCard({
  children,
  delay = 0,
  duration = 5,
  style,
}: FloatingCardProps) {
  const animName = floatKeyframes[Math.floor(Math.random() * floatKeyframes.length)];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: '#FFFFFF',
        borderRadius: 16,
        boxShadow: 'var(--shadow-md)',
        border: '1px solid rgba(0,0,0,0.04)',
        padding: '16px 20px',
        animation: `${animName} ${duration}s ease-in-out infinite ${delay * 0.5}s`,
        backdropFilter: 'blur(8px)',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

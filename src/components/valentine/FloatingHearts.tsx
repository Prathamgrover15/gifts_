import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeartsProps {
  count?: number;
}

const FloatingHearts = ({ count = 15 }: FloatingHeartsProps) => {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 8,
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-primary"
          style={{
            left: heart.left,
            bottom: -50,
            opacity: heart.opacity,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(heart.id) * 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Heart
            size={heart.size}
            fill="currentColor"
            className="drop-shadow-sm"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart } from 'lucide-react';

const LoveMessage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const message = "In a world of billions, somehow we found each other. Every moment with you feels like a beautiful dream I never want to wake up from.";
  const words = message.split(' ');

  return (
    <section
      ref={ref}
      className="valentine-section bg-romantic-gradient"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <Heart size={30} className="text-primary/20 fill-primary/20" />
      </motion.div>

      <div className="max-w-md mx-auto text-center relative z-10">
        {/* Glowing heart icon */}
        <motion.div
          className="mb-8 inline-block"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative">
            <Heart
              size={60}
              className="text-primary fill-primary animate-pulse-glow"
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(350 70% 60% / 0.4) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="font-display text-3xl md:text-4xl text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          To Someone Special
        </motion.h2>

        {/* Animated message */}
        <div className="font-body text-lg md:text-xl leading-relaxed text-foreground/90">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.2,
                delay: index * 0.04,
                ease: 'easeOut',
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Signature */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: words.length * 0.08 + 0.5 }}
        >
          <p className="font-display text-xl italic text-primary">
            With all my love,
          </p>
          <motion.div
            className="mt-2 flex items-center justify-center gap-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart size={16} className="text-primary fill-primary" />
            <span className="font-display text-lg text-muted-foreground">Forever Yours</span>
            <Heart size={16} className="text-primary fill-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/40"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LoveMessage;

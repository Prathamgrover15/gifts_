import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Heart, Share2, Sparkles } from 'lucide-react';

const FinalReveal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isRevealed, setIsRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Valentine\'s Message',
          text: 'Someone special sent you a Valentine! 💕',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  return (
    <section ref={ref} className="valentine-section bg-card relative overflow-hidden">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: -20,
                backgroundColor: ['#E8B4BC', '#D4838F', '#F5E6E8', '#D4A574', '#FFD700'][Math.floor(Math.random() * 5)],
              }}
              animate={{
                y: window.innerHeight + 50,
                x: (Math.random() - 0.5) * 200,
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                delay: Math.random() * 0.5,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Background glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(350 60% 90% / 0.5) 0%, transparent 60%)',
        }}
        animate={isRevealed ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 2, repeat: isRevealed ? Infinity : 0 }}
      />

      <div className="max-w-sm mx-auto text-center relative z-10 px-4">
        {/* Pre-reveal state */}
        {!isRevealed ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="text-accent" size={36} />
            </motion.div>

            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              One Last Surprise
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Tap the heart to reveal the final message
            </p>

            <motion.button
              onClick={handleReveal}
              className="relative w-28 h-28 mx-auto"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary/30"
                animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary/30"
                animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />

              {/* Heart button */}
              <motion.div
                className="w-full h-full rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-heart"
                animate={{ 
                  boxShadow: [
                    '0 0 30px hsl(350 70% 60% / 0.4)',
                    '0 0 50px hsl(350 70% 60% / 0.6)',
                    '0 0 30px hsl(350 70% 60% / 0.4)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={48} className="text-white" fill="white" />
              </motion.div>
            </motion.button>
          </motion.div>
        ) : (
          /* Post-reveal state */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
          >
            {/* Hearts burst */}
            <div className="relative mb-8">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{
                    scale: [0, 1, 0.5],
                    x: Math.cos((i * Math.PI * 2) / 8) * 100,
                    y: Math.sin((i * Math.PI * 2) / 8) * 100,
                    opacity: [1, 1, 0],
                  }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                >
                  <Heart 
                    size={24 - i * 2} 
                    className="text-primary" 
                    fill="currentColor"
                  />
                </motion.div>
              ))}

              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={80} className="text-primary mx-auto" fill="currentColor" />
              </motion.div>
            </div>

            <motion.h2
              className="font-display text-4xl md:text-5xl text-romantic mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I Love You
            </motion.h2>

            <motion.p
              className="font-body text-lg text-foreground/80 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Today, tomorrow, and always
            </motion.p>

            <motion.p
              className="font-display text-xl italic text-primary mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Happy Valentine's Day ❤️
            </motion.p>

            {/* Share button */}
            <motion.button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-foreground shadow-soft hover:shadow-glow transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 size={20} />
              <span className="font-body">Share the Love</span>
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Footer decoration */}
      <motion.div
        className="absolute bottom-6 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
      >
        <p className="font-body text-xs text-muted-foreground/60">
          Made with 💕 for you
        </p>
      </motion.div>
    </section>
  );
};

export default FinalReveal;

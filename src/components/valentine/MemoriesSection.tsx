import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';

const memories = [
  {
    id: 1,
    title: 'Our First Hello',
    description: 'The moment that changed everything forever',
    color: 'from-pink-200 to-rose-300',
  },
  {
    id: 2,
    title: 'Endless Laughter',
    description: 'Every joke, every smile, every happy tear',
    color: 'from-rose-200 to-pink-300',
  },
  {
    id: 3,
    title: 'Adventures Together',
    description: 'Every journey better because you\'re there',
    color: 'from-amber-100 to-pink-200',
  },
  {
    id: 4,
    title: 'Quiet Moments',
    description: 'When silence speaks louder than words',
    color: 'from-pink-100 to-rose-200',
  },
];

const MemoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextMemory = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevMemory = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section ref={ref} className="valentine-section bg-card relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(350 60% 70%) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-sm mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-3"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="text-accent" size={20} />
            <span className="font-body text-sm uppercase tracking-widest text-muted-foreground">
              Our Memories
            </span>
            <Sparkles className="text-accent" size={20} />
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            Moments We Cherish
          </h2>
        </motion.div>

        {/* Memory Cards */}
        <div className="relative h-80 flex items-center justify-center">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`absolute w-full max-w-xs bg-gradient-to-br ${memories[currentIndex].color} rounded-3xl p-8 shadow-heart`}
          >
            {/* Card decoration */}
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Heart size={32} className="text-primary/60 fill-primary/60" />
            </motion.div>

            <div className="text-center">
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/50 flex items-center justify-center shadow-soft"
                whileHover={{ scale: 1.1 }}
              >
                <Heart size={36} className="text-primary fill-primary" />
              </motion.div>

              <h3 className="font-display text-2xl text-foreground mb-3">
                {memories[currentIndex].title}
              </h3>
              <p className="font-body text-foreground/70">
                {memories[currentIndex].description}
              </p>
            </div>

            {/* Sparkle decorations */}
            <motion.div
              className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/60"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-8 left-8 w-1.5 h-1.5 rounded-full bg-white/50"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <motion.button
            onClick={prevMemory}
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-soft"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronLeft className="text-foreground" size={24} />
          </motion.button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {memories.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                }`}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextMemory}
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-soft"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronRight className="text-foreground" size={24} />
          </motion.button>
        </div>

        {/* Swipe hint */}
        <motion.p
          className="text-center mt-4 text-sm text-muted-foreground"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Swipe to explore ✨
        </motion.p>
      </div>
    </section>
  );
};

export default MemoriesSection;

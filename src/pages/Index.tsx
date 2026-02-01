import { useState } from 'react';
import OpeningScreen from '@/components/valentine/OpeningScreen';
import LoveMessage from '@/components/valentine/LoveMessage';
import MemoriesSection from '@/components/valentine/MemoriesSection';
import InteractiveSurprise from '@/components/valentine/InteractiveSurprise';
import FinalReveal from '@/components/valentine/FinalReveal';
import Sparkles from '@/components/valentine/Sparkles';
import FloatingHearts from '@/components/valentine/FloatingHearts';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Opening animation */}
      {!showContent && (
        <OpeningScreen onComplete={() => setShowContent(true)} />
      )}

      {/* Main content */}
      {showContent && (
        <>
          {/* Background effects */}
          <Sparkles />
          <FloatingHearts />

          {/* Sections */}
          <main className="relative z-10">
            <LoveMessage />
            <MemoriesSection />
            <InteractiveSurprise />
            <FinalReveal />
          </main>
        </>
      )}
    </div>
  );
};

export default Index;

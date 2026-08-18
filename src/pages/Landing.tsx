'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AuroraEntry from '@/components/aurora/AuroraEntry';
import AuroraPanel from '@/components/aurora/AuroraPanel';
import AuroraHero from '@/components/aurora/AuroraHero';
import AuroraQuote from '@/components/aurora/AuroraQuote';
import AuroraStory from '@/components/aurora/AuroraStory';
import AuroraDate from '@/components/aurora/AuroraDate';
import AuroraEvents from '@/components/aurora/AuroraEvents';
import AuroraVenue from '@/components/aurora/AuroraVenue';
import AuroraCountdown from '@/components/aurora/AuroraCountdown';
import AuroraMemories from '@/components/aurora/AuroraMemories';
import AuroraRSVP from '@/components/aurora/AuroraRSVP';
import AuroraGuestMessage from '@/components/aurora/AuroraGuestMessage';
import AuroraFinal from '@/components/aurora/AuroraFinal';
import AuroraCursor from '@/components/aurora/AuroraCursor';

// ═══════════════════════════════════════════════════════════════
// AURORA — Northern Lights Wedding Invitation
// ═══════════════════════════════════════════════════════════════

const panels = [
  { id: 'Yıldızlar', transition: 'starfield' as const },
  { id: 'Sözler', transition: 'aurora-wave' as const },
  { id: 'Hikâye', transition: 'fade-light' as const },
  { id: 'Tarih', transition: 'glow-expand' as const },
  { id: 'Program', transition: 'color-shift' as const },
  { id: 'Mekân', transition: 'slide-deep' as const },
  { id: 'Geri Sayım', transition: 'starfield' as const },
  { id: 'Anılar', transition: 'glow-expand' as const },
  { id: 'LCV', transition: 'fade-light' as const },
  { id: 'Mesaj', transition: 'aurora-wave' as const },
  { id: 'Kapanış', transition: 'starfield' as const },
];

export default function Landing() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="h-screen overflow-hidden" style={{ backgroundColor: '#06091A', color: '#E8E6F0' }}>
      <AuroraCursor />

      {!opened && <AuroraEntry onOpen={() => setOpened(true)} />}

      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AuroraPanel panels={panels}>
            {[
              <div key="hero" className="h-screen w-screen"><AuroraHero /></div>,
              <div key="quote" className="h-screen w-screen"><AuroraQuote /></div>,
              <div key="story" className="h-screen w-screen"><AuroraStory /></div>,
              <div key="date" className="h-screen w-screen"><AuroraDate /></div>,
              <div key="events" className="h-screen w-screen"><AuroraEvents /></div>,
              <div key="venue" className="h-screen w-screen"><AuroraVenue /></div>,
              <div key="countdown" className="h-screen w-screen"><AuroraCountdown /></div>,
              <div key="memories" className="h-screen w-screen"><AuroraMemories /></div>,
              <div key="rsvp" className="h-screen w-screen"><AuroraRSVP /></div>,
              <div key="message" className="h-screen w-screen"><AuroraGuestMessage /></div>,
              <div key="final" className="h-screen w-screen"><AuroraFinal /></div>,
            ]}
          </AuroraPanel>
        </motion.div>
      )}
    </div>
  );
}

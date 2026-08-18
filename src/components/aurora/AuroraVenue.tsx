'use client';

import { motion } from 'framer-motion';
import { AURORA, venue, couple } from '@/lib/aurora';

export default function AuroraVenue() {
  return (
    <div className="h-screen w-screen relative overflow-hidden" style={{ background: AURORA.sky }}>
      {/* Placeholder for venue photo */}
      <div className="absolute inset-0" style={{
        background: `linear-gradient(135deg, ${AURORA.deep} 0%, ${AURORA.sky} 50%, ${AURORA.deep} 100%)`,
      }}>
        {/* Simulated aurora over venue */}
        <div className="absolute top-[20%] left-[-10%] right-[-10%] h-[200px] opacity-25 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${AURORA.green}40, ${AURORA.teal}50, ${AURORA.blue}40, transparent)`,
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0" style={{
        background: `linear-gradient(180deg, ${AURORA.sky}40 0%, transparent 30%, transparent 60%, ${AURORA.sky}E0 100%)`,
      }} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          className="text-xs tracking-[0.4em] uppercase mb-4"
          style={{ fontFamily: '"Jost", sans-serif', color: AURORA.teal }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          MEKÂN
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wider mb-4"
          style={{ fontFamily: '"Playfair Display", serif', color: AURORA.ivory, textShadow: `0 0 60px ${AURORA.green}20` }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {venue.name}
        </motion.h2>

        <motion.p
          className="text-sm tracking-[0.3em] uppercase mb-2"
          style={{ fontFamily: '"Jost", sans-serif', color: AURORA.muted }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {venue.location}
        </motion.p>

        <motion.p
          className="text-xs tracking-wide mb-8"
          style={{ fontFamily: '"Jost", sans-serif', color: `${AURORA.muted}90` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {couple.dateTR} · {couple.time}
        </motion.p>

        {/* CTA */}
        <motion.a
          href={venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border text-xs tracking-[0.3em] uppercase no-underline"
          style={{
            fontFamily: '"Jost", sans-serif',
            borderColor: `${AURORA.teal}50`,
            color: AURORA.ivory,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{
            borderColor: AURORA.teal,
            boxShadow: `0 0 30px ${AURORA.teal}25`,
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
        >
          KONUMU GÖR
        </motion.a>
      </div>
    </div>
  );
}

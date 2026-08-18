'use client';

import { motion } from 'framer-motion';
import { AURORA, couple } from '@/lib/aurora';

// ═══════════════════════════════════════════════════════════════
// AURORA HERO — Northern Lights Names Reveal
// ═══════════════════════════════════════════════════════════════

function MiniStars() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 4,
    dur: Math.random() * 2 + 2,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map(s => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

export default function AuroraHero() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${AURORA.sky}, ${AURORA.deep})` }}>
      <MiniStars />

      {/* Ambient aurora glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[200px] rounded-full opacity-20" style={{ background: `radial-gradient(ellipse, ${AURORA.green}60, transparent 70%)`, filter: 'blur(60px)' }} />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[150px] rounded-full opacity-15" style={{ background: `radial-gradient(ellipse, ${AURORA.purple}50, transparent 70%)`, filter: 'blur(50px)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Names */}
        <div className="flex flex-col items-center gap-2">
          {couple.name1.split('').map((char, i) => (
            <motion.span
              key={i}
              className="text-6xl md:text-[8rem] lg:text-[10rem] font-serif leading-none tracking-wider"
              style={{ fontFamily: '"Playfair Display", serif', color: AURORA.ivory, textShadow: `0 0 80px ${AURORA.green}30` }}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {char}
            </motion.span>
          ))}

          <motion.span
            className="text-3xl md:text-5xl font-light italic my-2"
            style={{ fontFamily: '"Playfair Display", serif', color: AURORA.teal, textShadow: `0 0 30px ${AURORA.teal}50` }}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            &
          </motion.span>

          {couple.name2.split('').map((char, i) => (
            <motion.span
              key={i}
              className="text-6xl md:text-[8rem] lg:text-[10rem] font-serif leading-none tracking-wider"
              style={{ fontFamily: '"Playfair Display", serif', color: AURORA.ivory, textShadow: `0 0 80px ${AURORA.purple}30` }}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-xs md:text-sm tracking-[0.35em] uppercase max-w-md leading-relaxed"
          style={{ fontFamily: '"Jost", sans-serif', color: AURORA.muted }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {couple.heroSub}
        </motion.p>

        {/* Date */}
        <motion.div
          className="mt-6 text-sm tracking-[0.4em]"
          style={{ fontFamily: '"Jost", sans-serif', color: AURORA.teal }}
          initial={{ opacity: 0, letterSpacing: '1em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ delay: 1.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {couple.dateTR}
        </motion.div>

        {/* Aurora line */}
        <motion.div
          className="mt-8 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${AURORA.green}, ${AURORA.teal}, ${AURORA.blue}, ${AURORA.purple}, transparent)` }}
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 1.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <motion.div
          className="w-px h-8"
          style={{ background: `linear-gradient(180deg, ${AURORA.teal}60, transparent)` }}
          animate={{ scaleY: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: `${AURORA.muted}80`, fontFamily: '"Jost", sans-serif' }}>
          AŞAĞI KAYDIR
        </span>
      </motion.div>
    </div>
  );
}

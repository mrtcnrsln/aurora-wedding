'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AURORA } from '@/lib/aurora';

// ═══════════════════════════════════════════════════════════════
// AURORA — Northern Lights Opening Animation
// ═══════════════════════════════════════════════════════════════

function StarField() {
  const stars = useMemo(() =>
    Array.from({ length: 180 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 6,
      dur: Math.random() * 3 + 2,
      brightness: Math.random() * 0.5 + 0.5,
    })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map(s => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            backgroundColor: '#fff',
          }}
          animate={{
            opacity: [s.brightness * 0.3, s.brightness, s.brightness * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: s.dur,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

function AuroraRibbons({ intensity = 1 }: { intensity?: number }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[60%] overflow-hidden pointer-events-none">
      {/* Green ribbon */}
      <motion.div
        className="absolute bottom-[10%] left-[-20%] right-[-20%] h-[200px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${AURORA.green}40, ${AURORA.teal}50, ${AURORA.green}30, transparent)`,
          filter: 'blur(50px)',
          borderRadius: '50%',
        }}
        animate={{
          x: ['-5%', '5%', '-3%', '7%', '-5%'],
          scaleY: [1, 1.4, 0.9, 1.3, 1],
          opacity: [0.4 * intensity, 0.7 * intensity, 0.5 * intensity, 0.8 * intensity, 0.4 * intensity],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Blue ribbon */}
      <motion.div
        className="absolute bottom-[20%] left-[-15%] right-[-15%] h-[150px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${AURORA.blue}35, ${AURORA.purple}40, ${AURORA.blue}25, transparent)`,
          filter: 'blur(60px)',
          borderRadius: '50%',
        }}
        animate={{
          x: ['3%', '-4%', '6%', '-2%', '3%'],
          scaleY: [1.1, 0.8, 1.3, 1, 1.1],
          opacity: [0.3 * intensity, 0.5 * intensity, 0.4 * intensity, 0.6 * intensity, 0.3 * intensity],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      {/* Purple/pink ribbon */}
      <motion.div
        className="absolute bottom-[5%] left-[-10%] right-[-10%] h-[180px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${AURORA.purple}30, ${AURORA.pink}25, ${AURORA.purple}20, transparent)`,
          filter: 'blur(55px)',
          borderRadius: '50%',
        }}
        animate={{
          x: ['-2%', '4%', '-5%', '3%', '-2%'],
          scaleY: [0.9, 1.2, 1, 1.4, 0.9],
          opacity: [0.25 * intensity, 0.45 * intensity, 0.35 * intensity, 0.55 * intensity, 0.25 * intensity],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      {/* Subtle green haze at very bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[100px]"
        style={{
          background: `linear-gradient(180deg, transparent, ${AURORA.green}20)`,
          filter: 'blur(30px)',
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

interface Props {
  onOpen: () => void;
}

export default function AuroraEntry({ onOpen }: Props) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3500),
      setTimeout(() => setPhase(4), 5000),
      setTimeout(() => setPhase(5), 6500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      style={{ backgroundColor: AURORA.sky }}
      onClick={phase >= 5 ? onOpen : undefined}
    >
      {/* Stars */}
      <StarField />

      {/* Aurora ribbons */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 1 : 0 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      >
        <AuroraRibbons intensity={phase >= 4 ? 1.5 : 1} />
      </motion.div>

      {/* Ambient glow at center */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${AURORA.green}15, ${AURORA.blue}08, transparent 70%)`,
          filter: 'blur(60px)',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: phase >= 1 ? [0.3, 0.6, 0.3] : 0,
          scale: phase >= 1 ? [0.8, 1.2, 0.8] : 0.5,
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Couple initials */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <AnimatePresence>
          {phase >= 2 && (
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {/* E */}
              <motion.span
                className="text-7xl md:text-9xl font-serif tracking-wider"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  color: AURORA.ivory,
                  textShadow: `0 0 60px ${AURORA.green}80, 0 0 120px ${AURORA.blue}40`,
                }}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                E
              </motion.span>

              {/* & */}
              <motion.span
                className="text-4xl md:text-6xl font-light italic"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  color: AURORA.teal,
                  textShadow: `0 0 40px ${AURORA.teal}60`,
                }}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                &
              </motion.span>

              {/* K */}
              <motion.span
                className="text-7xl md:text-9xl font-serif tracking-wider"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  color: AURORA.ivory,
                  textShadow: `0 0 60px ${AURORA.purple}80, 0 0 120px ${AURORA.pink}40`,
                }}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                K
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Date */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.div
              className="text-sm md:text-base tracking-[0.5em] mt-2"
              style={{
                fontFamily: '"Jost", sans-serif',
                color: AURORA.muted,
              }}
              initial={{ opacity: 0, letterSpacing: '1em' }}
              animate={{ opacity: 1, letterSpacing: '0.5em' }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              24.08.2026
            </motion.div>
          )}
        </AnimatePresence>

        {/* Thin line */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.div
              className="mt-4"
              style={{ backgroundColor: `${AURORA.teal}40` }}
              initial={{ width: 0, height: 1 }}
              animate={{ width: 60, height: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
        </AnimatePresence>

        {/* CTA */}
        <AnimatePresence>
          {phase >= 5 && (
            <motion.div
              className="mt-8 flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="px-8 py-3 border text-sm tracking-[0.3em] uppercase"
                style={{
                  fontFamily: '"Jost", sans-serif',
                  borderColor: `${AURORA.teal}50`,
                  color: AURORA.ivory,
                }}
                whileHover={{
                  borderColor: AURORA.teal,
                  boxShadow: `0 0 30px ${AURORA.teal}30`,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen();
                }}
              >
                {AURORA_RIA.cta}
              </motion.div>
              <motion.p
                className="text-xs tracking-[0.2em] mt-2"
                style={{ color: `${AURORA.muted}90`, fontFamily: '"Jost", sans-serif' }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                IŞIKLARIN DANSINI SEYREDİN
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom aurora glow pulse */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(90deg, transparent, ${AURORA.green}, ${AURORA.teal}, ${AURORA.blue}, ${AURORA.purple}, transparent)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 4 ? [0, 0.6, 0] : 0 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}

const AURORA_RIA = {
  cta: 'DAVETİYEMİZİ AÇ',
};

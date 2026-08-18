'use client';

import { motion } from 'framer-motion';
import { AURORA, couple } from '@/lib/aurora';

export default function AuroraDate() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${AURORA.sky}, ${AURORA.deep})` }}>
      {/* Giant aurora glow behind the number */}
      <div className="absolute pointer-events-none" style={{
        width: '500px', height: '500px',
        background: `radial-gradient(circle, ${AURORA.green}15, ${AURORA.purple}08, transparent 70%)`,
        filter: 'blur(80px)',
      }} />

      <div className="relative z-10 flex flex-col items-center">
        {/* Day number */}
        <motion.div
          className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-serif leading-none"
          style={{
            fontFamily: '"Playfair Display", serif',
            color: 'transparent',
            WebkitTextStroke: `1px ${AURORA.teal}60`,
            textShadow: `0 0 80px ${AURORA.teal}20`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          24
        </motion.div>

        {/* Month */}
        <motion.div
          className="text-3xl md:text-5xl tracking-[0.4em] -mt-6 md:-mt-10"
          style={{ fontFamily: '"Playfair Display", serif', color: AURORA.ivory }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          AĞUSTOS
        </motion.div>

        {/* Year */}
        <motion.div
          className="text-lg tracking-[0.6em] mt-2"
          style={{ fontFamily: '"Jost", sans-serif', color: AURORA.purple }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          2026
        </motion.div>

        {/* Aurora gradient line */}
        <motion.div
          className="mt-6 h-px"
          style={{ background: `linear-gradient(90deg, ${AURORA.green}, ${AURORA.teal}, ${AURORA.blue}, ${AURORA.purple})` }}
          initial={{ width: 0 }}
          animate={{ width: 160 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Day and time */}
        <motion.div
          className="mt-6 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: '"Jost", sans-serif', color: AURORA.muted }}>
            {couple.day}
          </span>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: AURORA.teal }} />
          <span className="text-xs tracking-[0.3em]" style={{ fontFamily: '"Jost", sans-serif', color: AURORA.teal }}>
            {couple.time}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { AURORA, story } from '@/lib/aurora';

export default function AuroraStory() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden px-8" style={{ background: `linear-gradient(180deg, ${AURORA.sky}, ${AURORA.deep})` }}>
      {/* Title */}
      <motion.h2
        className="text-xs tracking-[0.5em] uppercase mb-12"
        style={{ fontFamily: '"Jost", sans-serif', color: AURORA.teal }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        HİKÂYEMİZ
      </motion.h2>

      {/* Timeline */}
      <div className="relative flex flex-col gap-8 max-w-2xl w-full">
        {/* Vertical line */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
          style={{ background: `linear-gradient(180deg, transparent, ${AURORA.teal}30, ${AURORA.purple}30, transparent)` }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {story.map((s, i) => (
          <motion.div
            key={s.year}
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 + 0.3 }}
          >
            {/* Content - alternating sides */}
            <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left order-3'}`}>
              <p className="text-sm tracking-[0.2em] mb-1" style={{ fontFamily: '"Jost", sans-serif', color: s.color }}>
                {s.year}
              </p>
              <p className="text-lg md:text-xl font-serif" style={{ fontFamily: '"Playfair Display", serif', color: AURORA.ivory }}>
                {s.title}
              </p>
              <p className="text-xs mt-1 tracking-wide" style={{ color: AURORA.muted, fontFamily: '"Jost", sans-serif' }}>
                {s.desc}
              </p>
            </div>

            {/* Center node */}
            <div className="relative order-2 flex-shrink-0">
              <motion.div
                className="w-3 h-3 rounded-full relative z-10"
                style={{ backgroundColor: s.color, boxShadow: `0 0 15px ${s.color}60, 0 0 30px ${s.color}30` }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
              />
            </div>

            {/* Empty spacer for alternating */}
            <div className={`flex-1 ${i % 2 === 0 ? 'order-3' : ''}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

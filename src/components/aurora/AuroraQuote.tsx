'use client';

import { motion } from 'framer-motion';
import { AURORA, couple } from '@/lib/aurora';

export default function AuroraQuote() {
  const lines = couple.quote.split('\n');

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden px-8" style={{ background: `linear-gradient(180deg, ${AURORA.deep}, ${AURORA.sky})` }}>
      {/* Subtle aurora backdrop */}
      <div className="absolute top-[30%] left-[10%] w-[600px] h-[300px] rounded-full opacity-10 pointer-events-none" style={{ background: `radial-gradient(ellipse, ${AURORA.purple}50, transparent 70%)`, filter: 'blur(80px)' }} />

      <div className="relative z-10 max-w-3xl text-center">
        {/* Quote */}
        {lines.map((line, li) => (
          <div key={li} className="overflow-hidden mb-4">
            <motion.div
              className="text-3xl md:text-5xl lg:text-6xl font-serif leading-snug"
              style={{ fontFamily: '"Playfair Display", serif', color: AURORA.ivory }}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: li * 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.div>
          </div>
        ))}

        {/* Divider */}
        <motion.div
          className="mx-auto mt-8 mb-6"
          style={{ background: `linear-gradient(90deg, transparent, ${AURORA.teal}60, transparent)` }}
          initial={{ width: 0, height: 1 }}
          animate={{ width: 80, height: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />

        {/* Small text */}
        <motion.p
          className="text-sm md:text-base leading-relaxed max-w-lg mx-auto"
          style={{ fontFamily: '"Jost", sans-serif', color: AURORA.muted }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {couple.quoteSmall}
        </motion.p>
      </div>
    </div>
  );
}

'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { AURORA, couple } from '@/lib/aurora';

export default function AuroraFinal() {
  const stars = useMemo(() =>
    Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
    })), []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ background: AURORA.sky }}>
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map(s => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: Math.random() * 3 + 2, delay: s.delay, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Intensifying aurora */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[15%] left-[-10%] right-[-10%] h-[250px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${AURORA.green}40, ${AURORA.teal}50, ${AURORA.blue}40, ${AURORA.purple}30, transparent)`,
            filter: 'blur(50px)',
          }}
          animate={{
            x: ['-5%', '5%', '-3%', '5%', '-5%'],
            scaleY: [1, 1.3, 0.9, 1.2, 1],
            opacity: [0.5, 0.8, 0.6, 0.9, 0.5],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[-5%] right-[-5%] h-[200px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${AURORA.purple}30, ${AURORA.pink}25, ${AURORA.blue}30, transparent)`,
            filter: 'blur(60px)',
          }}
          animate={{
            x: ['3%', '-4%', '6%', '-2%', '3%'],
            scaleY: [0.9, 1.2, 1, 1.4, 0.9],
            opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <motion.p
          className="text-2xl md:text-4xl lg:text-5xl font-serif leading-snug mb-8"
          style={{ fontFamily: '"Playfair Display", serif', color: AURORA.ivory, textShadow: `0 0 40px ${AURORA.green}20` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          {couple.finalText.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </motion.p>

        {/* Names */}
        <motion.p
          className="text-lg md:text-xl tracking-[0.3em] mb-2"
          style={{ fontFamily: '"Playfair Display", serif', color: AURORA.teal }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          {couple.name1} & {couple.name2}
        </motion.p>

        {/* Aurora line */}
        <motion.div
          className="h-px my-4"
          style={{ background: `linear-gradient(90deg, ${AURORA.green}, ${AURORA.teal}, ${AURORA.blue}, ${AURORA.purple})` }}
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 2, duration: 1 }}
        />

        {/* Date */}
        <motion.p
          className="text-sm tracking-[0.4em]"
          style={{ fontFamily: '"Jost", sans-serif', color: AURORA.muted }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          24 · 08 · 2026
        </motion.p>
      </div>

      {/* Footer signature */}
      <motion.div
        className="absolute bottom-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <p className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: '"Jost", sans-serif', color: `${AURORA.muted}60` }}>
          {couple.footerSub}
        </p>
        <p className="text-[9px] tracking-[0.2em] mt-1" style={{ fontFamily: '"Jost", sans-serif', color: `${AURORA.muted}40` }}>
          davetimigor.com
        </p>
      </motion.div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AURORA } from '@/lib/aurora';

function useCountdown(target: string) {
  const [diff, setDiff] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  useEffect(() => {
    const calc = () => {
      const now = Date.now();
      const end = new Date(target).getTime();
      const d = Math.max(0, end - now);
      setDiff({
        days: Math.floor(d / 86400000),
        hours: Math.floor((d % 86400000) / 3600000),
        mins: Math.floor((d % 3600000) / 60000),
        secs: Math.floor((d % 60000) / 1000),
      });
    };
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [target]);
  return diff;
}

export default function AuroraCountdown() {
  const { days, hours, mins, secs } = useCountdown('2026-08-24T19:00:00+03:00');

  const units = [
    { value: days, label: 'GÜN', color: AURORA.green },
    { value: hours, label: 'SAAT', color: AURORA.teal },
    { value: mins, label: 'DAKİKA', color: AURORA.blue },
    { value: secs, label: 'SANİYE', color: AURORA.purple },
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden px-8" style={{ background: `linear-gradient(180deg, ${AURORA.sky}, ${AURORA.deep})` }}>
      <motion.h2
        className="text-xs tracking-[0.5em] uppercase mb-16"
        style={{ fontFamily: '"Jost", sans-serif', color: AURORA.teal }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        BULUŞMAMIZA KALAN
      </motion.h2>

      <div className="flex items-start gap-6 md:gap-12">
        {units.map((u, i) => (
          <motion.div
            key={u.label}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.2 }}
          >
            <motion.span
              className="text-5xl md:text-7xl lg:text-8xl font-serif leading-none"
              style={{
                fontFamily: '"Playfair Display", serif',
                color: AURORA.ivory,
                textShadow: `0 0 40px ${u.color}30, 0 0 80px ${u.color}15`,
              }}
              key={u.value}
              initial={{ opacity: 0.7, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {String(u.value).padStart(2, '0')}
            </motion.span>
            <div className="w-6 h-px mt-3 mb-2" style={{ backgroundColor: `${u.color}40` }} />
            <span className="text-[10px] tracking-[0.3em]" style={{ fontFamily: '"Jost", sans-serif', color: `${u.color}90` }}>
              {u.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

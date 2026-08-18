'use client';

import { motion } from 'framer-motion';
import { AURORA, events } from '@/lib/aurora';

export default function AuroraEvents() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden px-8" style={{ background: `linear-gradient(180deg, ${AURORA.deep}, ${AURORA.sky})` }}>
      <motion.h2
        className="text-xs tracking-[0.5em] uppercase mb-12"
        style={{ fontFamily: '"Jost", sans-serif', color: AURORA.teal }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        PROGRAM AKIŞI
      </motion.h2>

      <div className="flex flex-col items-center gap-0 max-w-lg w-full">
        {events.map((ev, i) => (
          <div key={ev.time} className="flex flex-col items-center">
            <motion.div
              className="flex items-center gap-6 md:gap-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 + 0.2, duration: 0.6 }}
            >
              {/* Time */}
              <span className="text-2xl md:text-3xl font-serif w-20 text-right" style={{ fontFamily: '"Playfair Display", serif', color: AURORA.ivory }}>
                {ev.time}
              </span>

              {/* Node */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: [AURORA.green, AURORA.teal, AURORA.blue, AURORA.purple][i],
                    boxShadow: `0 0 15px ${[AURORA.green, AURORA.teal, AURORA.blue, AURORA.purple][i]}60`,
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>

              {/* Label */}
              <span className="text-sm tracking-[0.3em] uppercase w-32" style={{ fontFamily: '"Jost", sans-serif', color: AURORA.muted }}>
                {ev.label}
              </span>
            </motion.div>

            {/* Connecting line */}
            {i < events.length - 1 && (
              <motion.div
                className="w-px h-10 my-1"
                style={{ background: `linear-gradient(180deg, ${[AURORA.green, AURORA.teal, AURORA.blue, AURORA.purple][i]}40, ${[AURORA.green, AURORA.teal, AURORA.blue, AURORA.purple][i + 1]}40)` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.2 + 0.4, duration: 0.4 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

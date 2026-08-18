'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { AURORA } from '@/lib/aurora';

// ═══════════════════════════════════════════════════════════════
// AURORA CURSOR — Soft glow follower with color trail
// ═══════════════════════════════════════════════════════════════

export default function AuroraCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('ontouchstart' in window) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      {/* Main glow */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          width: 16,
          height: 16,
          marginLeft: -8,
          marginTop: -8,
          background: `radial-gradient(circle, ${AURORA.teal}90, ${AURORA.blue}60, transparent 70%)`,
          boxShadow: `0 0 20px ${AURORA.teal}40, 0 0 40px ${AURORA.blue}20`,
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full mix-blend-screen"
        style={{
          x: useSpring(x, { stiffness: 40, damping: 25 }),
          y: useSpring(y, { stiffness: 40, damping: 25 }),
          width: 40,
          height: 40,
          marginLeft: -20,
          marginTop: -20,
          border: `1px solid ${AURORA.purple}30`,
          boxShadow: `0 0 15px ${AURORA.purple}15`,
        }}
      />
    </>
  );
}

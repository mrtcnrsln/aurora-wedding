'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TransitionType = 'aurora-wave' | 'starfield' | 'glow-expand' | 'slide-deep' | 'fade-light' | 'color-shift';

interface TransitionVariant {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  exit: Record<string, unknown>;
}

const TRANSITION_VARIANTS: Record<TransitionType, TransitionVariant> = {
  'aurora-wave': {
    initial: { opacity: 0, clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
    animate: { opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -60, transition: { duration: 0.5 } },
  },
  'starfield': {
    initial: { opacity: 0, scale: 1.1, filter: 'blur(8px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.95, filter: 'blur(4px)', transition: { duration: 0.6 } },
  },
  'glow-expand': {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 1.1, transition: { duration: 0.5 } },
  },
  'slide-deep': {
    initial: { opacity: 0, x: '100%', rotateY: -15 },
    animate: { opacity: 1, x: '0%', rotateY: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, x: '-50%', rotateY: 15, transition: { duration: 0.6 } },
  },
  'fade-light': {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  },
  'color-shift': {
    initial: { opacity: 0, y: 40, filter: 'hue-rotate(30deg)' },
    animate: { opacity: 1, y: 0, filter: 'hue-rotate(0deg)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -40, filter: 'hue-rotate(-30deg)', transition: { duration: 0.5 } },
  },
};

interface PanelDef {
  id: string;
  transition?: TransitionType;
}

interface Props {
  panels: PanelDef[];
  children: React.ReactNode[];
}

export default function AuroraPanel({ panels, children }: Props) {
  const [current, setCurrent] = useState(0);
  const [transitionType, setTransitionType] = useState<TransitionType>('starfield');
  const lockRef = useRef(false);
  const touchRef = useRef({ startY: 0 });

  const goTo = useCallback((idx: number) => {
    if (lockRef.current || idx < 0 || idx >= panels.length || idx === current) return;
    lockRef.current = true;
    setTransitionType(panels[idx].transition || 'starfield');
    setCurrent(idx);
    setTimeout(() => { lockRef.current = false; }, 1100);
  }, [current, panels]);

  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 20) next();
      else if (e.deltaY < -20) prev();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight', ' ', 'PageDown'].includes(e.key)) { e.preventDefault(); next(); }
      if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); prev(); }
      if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      if (e.key === 'End') { e.preventDefault(); goTo(panels.length - 1); }
    };
    const onTouchStart = (e: TouchEvent) => { touchRef.current.startY = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      const dy = touchRef.current.startY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 50) { dy > 0 ? next() : prev(); }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [next, prev, goTo, panels.length]);

  const v = TRANSITION_VARIANTS[transitionType];

  return (
    <div className="relative h-screen w-screen overflow-hidden" style={{ perspective: '1200px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={v.initial as never}
          animate={v.animate as never}
          exit={v.exit as never}
        >
          {children[current]}
        </motion.div>
      </AnimatePresence>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2">
        {panels.map((p, i) => (
          <button
            key={p.id}
            onClick={() => goTo(i)}
            className="group relative flex items-center"
            aria-label={`Panel: ${p.id}`}
          >
            <div
              className="w-[3px] rounded-full transition-all duration-500"
              style={{
                backgroundColor: i === current ? '#4FA8E0' : '#4FA8E030',
                height: i === current ? 28 : 12,
                boxShadow: i === current ? '0 0 12px #4FA8E050' : 'none',
              }}
            />
            <span
              className="absolute right-6 text-[10px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{ fontFamily: '"Jost", sans-serif', color: '#7A7B8A' }}
            >
              {p.id}
            </span>
          </button>
        ))}
      </div>

      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3"
        style={{ fontFamily: '"Jost", sans-serif' }}
      >
        <span className="text-xs tracking-[0.2em]" style={{ color: '#4FA8E0' }}>
          {String(current + 1).padStart(2, '0')}
        </span>
        <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #4FA8E0, #8B5CF6)' }} />
        <span className="text-xs tracking-[0.2em]" style={{ color: '#7A7B8A' }}>
          {String(panels.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

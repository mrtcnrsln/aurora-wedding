'use client';

import { motion } from 'framer-motion';
import { AURORA, galleryImages } from '@/lib/aurora';

export default function AuroraMemories() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden px-6 md:px-12" style={{ background: `linear-gradient(180deg, ${AURORA.deep}, ${AURORA.sky})` }}>
      <motion.h2
        className="text-xs tracking-[0.5em] uppercase mb-8"
        style={{ fontFamily: '"Jost", sans-serif', color: AURORA.teal }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        BİRLİKTE GEÇEN GÜNLERDEN
      </motion.h2>

      <div
        className="grid gap-3 w-full max-w-4xl h-[60vh]"
        style={{
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
        }}
      >
        {galleryImages.map((img, i) => (
          <motion.div
            key={img.id}
            className="relative overflow-hidden group cursor-pointer"
            style={{
              gridArea: img.gridArea,
              borderRadius: '4px',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Photo placeholder with aurora gradient */}
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              style={{
                background: `linear-gradient(${135 + i * 30}deg, ${AURORA.deep}, ${AURORA.sky}, ${AURORA.deep})`,
              }}
            />

            {/* Aurora overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(180deg, transparent, ${[AURORA.green, AURORA.teal, AURORA.blue, AURORA.purple, AURORA.pink, AURORA.green][i]}25)`,
              }}
            />

            {/* Photo ID number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-serif opacity-10" style={{ fontFamily: '"Playfair Display", serif', color: AURORA.ivory }}>
                {String(img.id).padStart(2, '0')}
              </span>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: `linear-gradient(transparent, ${AURORA.sky}80)` }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

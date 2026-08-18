'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AURORA, couple } from '@/lib/aurora';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function AuroraRSVP() {
  const [step, setStep] = useState<'choice' | 'form'>('choice');
  const [attending, setAttending] = useState<boolean | null>(null);
  const [name, setName] = useState('');
  const [count, setCount] = useState('1');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const createRsvp = useMutation(api.rsvps.submit);

  const handleSubmit = async () => {
    if (!name.trim()) return;
    await createRsvp({
      name: name.trim(),
      attending: attending!,
      guestCount: parseInt(count) || 1,
      note: note.trim() || undefined,
    });
    setSubmitted(true);
  };

  const inputStyle = {
    fontFamily: '"Jost", sans-serif',
    backgroundColor: 'transparent',
    borderBottom: `1px solid ${AURORA.teal}30`,
    color: AURORA.ivory,
    outline: 'none',
    padding: '8px 0',
    fontSize: '14px',
    letterSpacing: '0.05em',
    width: '100%',
  };

  if (submitted) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center" style={{ background: `linear-gradient(180deg, ${AURORA.sky}, ${AURORA.deep})` }}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-6xl mb-6"
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✦
          </motion.div>
          <p className="text-2xl md:text-3xl font-serif mb-4" style={{ fontFamily: '"Playfair Display", serif', color: AURORA.ivory }}>
            Teşekkürler
          </p>
          <p className="text-sm" style={{ color: AURORA.muted, fontFamily: '"Jost", sans-serif' }}>
            {attending ? 'Sizi de aramızda görmek bizi çok mutlu edecek.' : 'Anlıyoruz, yine de en güzel dileklerimiz sizinle.'}
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden px-8" style={{ background: `linear-gradient(180deg, ${AURORA.deep}, ${AURORA.sky})` }}>
      <motion.h2
        className="text-xs tracking-[0.5em] uppercase mb-4"
        style={{ fontFamily: '"Jost", sans-serif', color: AURORA.teal }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {couple.rsvpTitle}
      </motion.h2>

      <motion.p
        className="text-sm text-center max-w-md mb-10 leading-relaxed"
        style={{ fontFamily: '"Jost", sans-serif', color: AURORA.muted }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {couple.rsvpText}
      </motion.p>

      {step === 'choice' ? (
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { label: 'KATILACAĞIM', value: true, color: AURORA.green },
            { label: 'KATILAMAYACAĞIM', value: false, color: AURORA.pink },
          ].map((opt) => (
            <motion.button
              key={opt.label}
              className="px-8 py-4 border text-xs tracking-[0.2em] uppercase"
              style={{
                fontFamily: '"Jost", sans-serif',
                borderColor: `${opt.color}40`,
                color: AURORA.ivory,
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
              whileHover={{
                borderColor: opt.color,
                boxShadow: `0 0 25px ${opt.color}20`,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { setAttending(opt.value); setStep('form'); }}
            >
              {opt.label}
            </motion.button>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="w-full max-w-sm flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <input
            type="text"
            placeholder="Ad Soyad"
            value={name}
            onChange={e => setName(e.target.value)}
            style={inputStyle}
          />
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-[10px] tracking-[0.2em] uppercase mb-1 block" style={{ color: AURORA.muted, fontFamily: '"Jost", sans-serif' }}>
                Kişi Sayısı
              </label>
              <select
                value={count}
                onChange={e => setCount(e.target.value)}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                {[1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n} style={{ background: AURORA.deep, color: AURORA.ivory }}>{n}</option>
                ))}
              </select>
            </div>
          </div>
          <textarea
            placeholder="Not (isteğe bağlı)"
            value={note}
            onChange={e => setNote(e.target.value)}
            rows={3}
            style={{ ...inputStyle, resize: 'none' as const }}
          />
          <motion.button
            className="mt-2 px-8 py-3 text-xs tracking-[0.2em] uppercase border self-center"
            style={{
              fontFamily: '"Jost", sans-serif',
              borderColor: `${AURORA.teal}50`,
              color: AURORA.ivory,
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
            whileHover={{ borderColor: AURORA.teal, boxShadow: `0 0 25px ${AURORA.teal}20` }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSubmit}
          >
            GÖNDER
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

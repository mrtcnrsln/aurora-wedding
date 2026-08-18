'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AURORA, couple } from '@/lib/aurora';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function AuroraGuestMessage() {
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const createMessage = useMutation(api.guestMessages.submit);

  const handleSubmit = async () => {
    if (!sender.trim() || !message.trim()) return;
    await createMessage({
      sender: sender.trim(),
      message: message.trim(),
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

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden px-8" style={{ background: `linear-gradient(180deg, ${AURORA.sky}, ${AURORA.deep})` }}>
      <motion.h2
        className="text-xs tracking-[0.5em] uppercase mb-4"
        style={{ fontFamily: '"Jost", sans-serif', color: AURORA.teal }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {couple.messageTitle}
      </motion.h2>

      {!submitted ? (
        <motion.div
          className="w-full max-w-md flex flex-col gap-5 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-center leading-relaxed" style={{ color: AURORA.muted, fontFamily: '"Jost", sans-serif' }}>
            {couple.messagePlaceholder}
          </p>
          <input
            type="text"
            placeholder="Adınız"
            value={sender}
            onChange={e => setSender(e.target.value)}
            style={inputStyle}
          />
          <textarea
            placeholder="Mesajınız..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={4}
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
      ) : (
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-4xl mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✦
          </motion.div>
          <p className="text-lg font-serif" style={{ fontFamily: '"Playfair Display", serif', color: AURORA.ivory }}>
            Mesajınız iletildi
          </p>
          <p className="text-sm mt-2" style={{ color: AURORA.muted, fontFamily: '"Jost", sans-serif' }}>
            Güzel sözleriniz için teşekkürler
          </p>
        </motion.div>
      )}
    </div>
  );
}

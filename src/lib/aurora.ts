// ═══════════════════════════════════════════════════════════════
// AURORA — Northern Lights Wedding Design System
// ═══════════════════════════════════════════════════════════════

export const AURORA = {
  sky: '#06091A',
  deep: '#0A0E24',
  green: '#47D18C',
  teal: '#2ECFAA',
  blue: '#4FA8E0',
  purple: '#8B5CF6',
  pink: '#D946B8',
  ivory: '#E8E6F0',
  warm: '#F0C878',
  muted: '#7A7B8A',
  glow: (color: string, intensity = 0.6) => `0 0 40px ${color}${Math.round(intensity * 255).toString(16).padStart(2, '0')}`,
} as const;

export const couple = {
  name1: 'ELİF',
  name2: 'KEREM',
  initials: ['E', 'K'],
  date: '24.08.2026',
  dateTR: '24 AĞUSTOS 2026',
  day: 'CUMARTESİ',
  time: '19:00',
  quote: `Gökyüzünde dans eden ışıklar gibi,\nbirbirimize çekecek güçteyiz.`,
  quoteSmall: `Hayatımızın en güzel başlangıçlarından birine adım atarken bu özel günü bizimle paylaşmanızı diliyoruz.`,
  heroSub: 'BİRLİKTE YAZACAĞIMIZ YENİ HİKÂYENİN İLK SAYFASI',
  cta: 'DAVETİYEMİZİ KEŞFEDİN',
  rsvpTitle: 'SİZİ DE BEKLİORUZ',
  rsvpText: 'Bu özel günümüzde bizimle olup olmayacağınızı paylaşmanız bizi çok mutlu eder.',
  messageTitle: 'BİZE BİR NOT BIRAKIN',
  messagePlaceholder: 'Dilekleriniz, güzel sözleriniz ve tebrikleriniz...',
  finalText: 'BUGÜNÜ BİRLİKTE\nUNUTULMAZ KILALIM.',
  footerSub: 'Aşkla, Elif & Kerem',
} as const;

export const story = [
  { year: '2019', title: 'İlk karşılaşma', desc: 'Kaderin bizi buluşturduğu an', color: AURORA.green },
  { year: '2021', title: 'Birlikte ilk büyük yolculuk', desc: 'Dünyayı birlikte keşfettik', color: AURORA.teal },
  { year: '2024', title: 'Hayatımızı birleştirmeye karar verdiğimiz gün', desc: 'Ömür boyu sözümüz', color: AURORA.blue },
  { year: '2026', title: 'Yeni bir başlangıç', desc: 'Birlikte yazacağımız yeni hikâye', color: AURORA.purple },
] as const;

export const events = [
  { time: '19:00', label: 'NİKÂH', icon: 'ring' as const },
  { time: '20:00', label: 'AKŞAM YEMEĞİ', icon: 'plate' as const },
  { time: '21:30', label: 'İLK DANS', icon: 'dance' as const },
  { time: '22:00', label: 'EĞLENCE', icon: 'music' as const },
] as const;

export const venue = {
  name: 'LALUNA GARDEN',
  location: 'SARIYER · İSTANBUL',
  address: 'Kemerburgaz Caddesi No:123',
  mapUrl: 'https://maps.google.com/?q=Laluna+Garden+Sarıyer+İstanbul',
};

export const galleryImages = [
  { id: 1, aspect: '3/4' as const, gridArea: '1 / 1 / 3 / 2' },
  { id: 2, aspect: '16/9' as const, gridArea: '1 / 2 / 2 / 4' },
  { id: 3, aspect: '1/1' as const, gridArea: '2 / 2 / 3 / 3' },
  { id: 4, aspect: '4/5' as const, gridArea: '2 / 3 / 3 / 4' },
  { id: 5, aspect: '2/1' as const, gridArea: '3 / 1 / 4 / 3' },
  { id: 6, aspect: '3/4' as const, gridArea: '3 / 3 / 4 / 4' },
];

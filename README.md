# Aurora — Northern Lights Wedding Invitation

A cinematic, immersive digital wedding invitation themed around the Aurora Borealis (Northern Lights).

## Design Concept

The entire experience is built around flowing aurora ribbons, twinkling starfields, and ethereal glow effects. The visitor enters through a cosmic starfield that transforms into dancing aurora lights, then discovers the couple's story through 11 uniquely-transitioned panels.

## Features

- **Opening**: Starfield → Aurora ribbons → Initials reveal → Interactive CTA
- **11 Full-screen panels** with unique aurora-themed transitions
- **Aurora cursor**: Soft glow follower with color trail
- **Starfield backgrounds**: Animated twinkling stars
- **Aurora ribbons**: Flowing CSS gradient animations
- **RSVP form** with Convex backend
- **Guest message system**
- **Live countdown**
- **Photo gallery** with aurora overlays
- **Responsive design** for mobile

## Transition Effects

| Panel | Effect |
|-------|--------|
| Entry → Hero | Starfield (blur + scale) |
| Hero → Quote | Aurora Wave (clip-path reveal) |
| Quote → Story | Fade Light |
| Story → Date | Glow Expand |
| Date → Events | Color Shift (hue-rotate) |
| Events → Venue | Slide Deep (3D rotateY) |
| Venue → Countdown | Starfield |
| Countdown → Memories | Glow Expand |
| Memories → RSVP | Fade Light |
| RSVP → Messages | Aurora Wave |
| Messages → Final | Starfield |

## Tech Stack

- React 19 + TypeScript
- Vite
- Convex (backend/database)
- Framer Motion (animations)
- Tailwind CSS
- Playfair Display + Jost fonts

## Getting Started

```bash
git clone https://github.com/mrtcnrsln/aurora-wedding.git
cd aurora-wedding
npm install
npm run dev
```

## Design System

| Color | Hex | Usage |
|-------|-----|-------|
| Sky | #06091A | Primary background |
| Deep | #0A0E24 | Secondary dark |
| Green | #47D18C | Aurora green |
| Teal | #2ECFAA | Aurora teal (accent) |
| Blue | #4FA8E0 | Aurora blue |
| Purple | #8B5CF6 | Aurora purple |
| Pink | #D946B8 | Aurora pink |
| Ivory | #E8E6F0 | Text |
| Muted | #7A7B8A | Secondary text |

## Fonts

- **Playfair Display** — Serif display for emotional statements
- **Jost** — Clean sans-serif for supporting text

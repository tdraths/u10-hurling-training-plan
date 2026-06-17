# U10 Hurling Coaching Plan

32-week coaching plan for Under 10 hurling. 1-hour sessions, ~20 players.
Skill priority: First touch & catching → Striking → Soloing → Teamwork → Blocking.
Built with Vite + React. Edits persist to localStorage per device.

## Deploy to Vercel (5 minutes, free)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import at vercel.com — it auto-detects Vite.

## Local dev

```bash
npm install
npm run dev
```

## Adding Supabase later

See the soccer plan README for the full Supabase migration guide.
The useStorage hook in src/hooks/useStorage.js is the only file that changes.

## Structure

```
src/
  data/data.js          — 32 weeks + drill library (edit content here)
  lib/diagrams.jsx      — SVG hurling pitch diagrams
  hooks/useStorage.js   — persistence layer
  components/
    WeekGrid.jsx
    SessionModal.jsx
    DrillPicker.jsx
  App.jsx
```

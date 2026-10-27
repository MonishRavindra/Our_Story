# Our Forever — React proposal website

A romantic, cinematic, mobile-first multi-page proposal experience built with React, Vite, React Router, Framer Motion, and Lucide icons.

## Pages

- `/` — cinematic opening page
- `/letter` — interactive envelope and love letter
- `/memories` — clickable memory cards and animated Polaroid gallery
- `/reasons` — tap-to-reveal reasons
- `/forever` — final “Will you be my forever?” proposal and celebratory animation

## Requirements

- Node.js 18+ (Node 20+ recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Personalize it

1. Open `src/content.js`.
2. Replace `[her name]` and `[your name]`.
3. Rewrite the letter, memories, and reasons in your own words.
4. Replace the sample remote images with your own photos. Recommended: add photos to `public/images/` and use paths like `/images/first-date.jpg`.
5. To add music, put a song you have permission to use at `public/music/our-song.mp3`, then set `MUSIC_URL = "/music/our-song.mp3"` in `src/content.js`.
6. Test on a phone before sharing. The browser will not autoplay music; she needs to tap the music button.

## Deploy

### Vercel
1. Push this project to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy and share the generated URL.

### Netlify
1. Push to GitHub and import the repository into Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. For React Router deep links, add a file at `public/_redirects` with:
   ```
   /* /index.html 200
   ```
   (The included `vercel.json` handles the equivalent rewrite for Vercel.)

### GitHub Pages
Possible, but needs a base path and SPA routing configuration. Vercel or Netlify is the simpler option for this project.

## Notes

- Unsplash URLs are starter placeholders; use your own images for a more personal experience.
- The proposal “Yes” action displays the celebratory ending locally. It does not send a message or store her response.
- The background song is intentionally off by default because browsers block autoplay and the song should be something you choose.
- The project respects the `prefers-reduced-motion` setting at the CSS level.

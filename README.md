# A little infinity

A React + Vite love letter in six acts. Uses React Three Fiber, drei, GSAP/ScrollTrigger, Lenis, Framer Motion and Tailwind CSS.

## Run
Requires Node.js 22.14+ and npm.

    npm install
    npm run dev

Production: `npm run build`. Deploy the resulting `dist/` directory to any static host.

## Make it yours
Edit `app/content.js`. Replace every bracketed field and the sample reason/letter copy. Put your photos in `public/photos/` and set the photo fields to `/photos/filename.jpg`. Empty photo fields intentionally render labeled placeholders. The sample content is fictional, not a record of your relationship.

The six components Hero, Reasons, Timeline, Letter, Question and Closing live in `app/main.jsx`. Three.js scenes and the commented grain/gradient shader live in `app/scenes.jsx`. Change the theme colors in `app/globals.css` and the material colors in `app/scenes.jsx` together.

## Interaction notes
Desktop reasons are pinned to a horizontal scroll. Mobile and reduced-motion mode use native horizontal scrolling. Memories also have ordinary keyboard-accessible buttons. The No button dodges twice on mouse approach; it never dodges touch or keyboard input. Choosing Yes reveals a message and confetti; answers are not stored or sent anywhere.

Sound is a locally synthesized ambient chord, off by default, with no external audio files. Photos are yours to add. Fonts load from Google Fonts with serif/sans fallbacks. Offscreen canvases pause, mobile pixel density and geometry are reduced, and reduced-motion settings disable camera motion and decorative effects. Actual frame rate depends on device hardware; no 50fps guarantee has been measured.

The letter uses CSS perspective and a scroll-driven unfolding tilt so its text stays selectable and accessible. The hero and memory constellation are real WebGL scenes. WebGL failure displays a text fallback and keeps every memory accessible through ordinary buttons.

## GitHub and Vercel
See [CUSTOMIZE.md](CUSTOMIZE.md) for the exact fields, photo examples, GitHub editing instructions and Vercel import settings. Vercel configuration is included; importing the repository and deploying it in Vercel remains a separate step.

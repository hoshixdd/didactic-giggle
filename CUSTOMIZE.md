# Personalize your love letter

## Names and text
Open `app/content.js`. Everything personal is in this file:

| Field | What it changes |
| --- | --- |
| `from` | Your name, letter signature and footer |
| `to` | Your partner's name in the opening and letter |
| `date` | Closing signature date |
| `opening` | Three opening headline lines |
| `reasons` | The seven reason cards (headline, then supporting text) |
| `memories` | Each memory's date, title, text and photo |
| `letter` | The letter paragraphs |
| `letterAccent` | Handwritten highlighted sentence |
| `question` | The big question |
| `yesMessage` | Message revealed after Yes |
| `closing` | Final closing sentence |
| `closingPhoto` | Final photo |

Keep the quotes, commas and brackets around the values. For text containing apostrophes, use double quotes, for example `from: "Alex O'Connor"`.

## Add pictures
1. Add your image files inside `public/photos/`. Lowercase filenames with hyphens are easiest, e.g. `first-date.jpg`.
2. In `app/content.js`, update the matching memory:

```js
{ date: 'June 12, 2026',
  title: 'Our first date',
  text: 'The evening I wished would never end.',
  photo: '/photos/first-date.jpg' }
```

3. For the final photograph, set:

```js
closingPhoto: '/photos/us.jpg'
```

Use `/photos/...` in code, not `/public/photos/...`. File names and extensions must match exactly, including capitalization. JPG, PNG and WebP work. Empty strings keep the labeled photo placeholders. The frame crops to fit; choose photos with the important part near the center. In GitHub, upload images using Add file > Upload files and edit content.js with the pencil button, then commit the changes.

## Change the visual design
- `app/globals.css`: palette, fonts, spacing, photo frames, desktop/mobile layout.
- `app/main.jsx`: six sections, buttons, animations, confetti and ambient sound.
- `app/scenes.jsx`: 3D heart shape, glass material, lights, constellation, shader.
- `index.html`: browser-tab title, page description and font imports.

## Connect to Vercel later
Import this GitHub repository as a new Vercel project. Use the repository root, Vite framework, Node 22.x, `npm ci` install command, `npm run build` build command, and `dist` output directory. `vercel.json` already declares the framework and build settings. No environment variables are required. There is no backend or database.

Vercel's Git integration can deploy subsequent commits automatically. The existing ChatGPT Sites copy is a separate deployment; GitHub edits will not update it automatically.

Official guide: https://vercel.com/docs/frameworks/frontend/vite

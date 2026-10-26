# Chandreshekar M. G. — Developer Portfolio

A responsive software engineering portfolio built with React, Vite, and CSS. Personal, education, skill, project, and profile data live in `src/data/portfolio.js`. The contact form opens a prefilled WhatsApp message; it does not send messages automatically.

The portfolio supports light and dark themes, follows the system preference on first visit, and saves the selected theme in the browser. Project cards only display repository or demo links when a URL is configured.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build and preview

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Personalize content and assets

- Edit `src/data/portfolio.js` to update profile details, skills, projects, education, and learning interests.
- Update `profile.linkedin` and `profile.whatsapp` / `profile.whatsappNumber` in `src/data/portfolio.js` if your contact details change. The WhatsApp link uses the `+91` country code.
- Verify the education CGPA and graduation date in `src/data/portfolio.js` against current official records.
- The resume PDF is imported from the project root and used in the preview and download button.
- Add verified project repository and demo URLs to project entries when available. Links without configured URLs are omitted.
- The profile image is served from `public/images/profile.jpeg`.

## Deploy to Vercel

1. Push the project to a GitHub repository (do not include `node_modules/` or `dist/`).
2. Import that repository in Vercel and select the Vite framework preset.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy. No environment variables are required by the current application.

## Available scripts

- `npm run dev` — start the local development server.
- `npm run build` — build the production files into `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint.

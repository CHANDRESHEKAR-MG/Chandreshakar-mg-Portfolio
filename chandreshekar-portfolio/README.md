# Chandreshekar M. G. — Developer Portfolio

A responsive recruiter-focused portfolio built with React, Vite, and CSS. All personal, education, skill, project, and profile data are kept in `src/data/portfolio.js`. The site does not use external APIs or a backend.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To verify a production build, run:

```bash
npm run build
```

## Personalize the portfolio

- Edit `src/data/portfolio.js` to update profile details, skills, projects, education, and learning interests.
- Replace the email placeholder in the `profile.email` value.
- Update `profile.linkedin` and `profile.whatsapp` / `profile.whatsappNumber` in `src/data/portfolio.js` if your contact details change. The WhatsApp link uses the `+91` country code.
- Edit the BE CGPA and graduation details in the education entry if they change.
- The supplied `ChandreshekarM-g-resume (1).pdf` is imported as a Vite asset and shown in the resume preview and download button. To replace it, update the PDF import and `profile.resumePdf` in `src/data/portfolio.js`.
- Add real project repository and demo URLs to each project entry when available. Until then, the cards show that those links were not provided.
- The contact section uses profile links and an email placeholder. A working contact form would require a backend or configured form service.

## Available scripts

- `npm run dev` — start the local development server.
- `npm run build` — build the production files into `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint.

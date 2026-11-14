# Cashflow Wealth Builders

Responsive redesign for Erin Frigo. Static HTML, CSS, and JavaScript; no runtime framework, backend, secrets, or npm dependencies.

## Build and verify

Requires Node.js 20 or later.

```sh
npm run build
npm run check
```

Build output: `dist/`. Serve this directory with any static HTTP server.

## Deploy on Vercel

Import **appsroket/Erin** from GitHub. Use the repository root and the **Other** framework preset. `vercel.json` sets the build command to `npm run build` and the output directory to `dist`. No environment variables are required. Deploy `main`, then connect the custom domain when ready. Existing `/about`, `/invest-with-me`, `/portfolio`, and `/contact` routes redirect to their new sections; legal pages keep their paths.

## Content and integrations

- Reviewed the original home, about, invest-with-me, portfolio, contact, privacy and terms pages on November 14, 2026.
- Biography, contact details, social links, portrait, images and portfolio counts come from cashflowwealthbuilder.com. LinkedIn did not expose profile content publicly; no additional credentials or claims were inferred.
- Portfolio images are the original project previews, not completed-property photographs. Current investment availability is not asserted.
- Investor CTAs open the existing investor questionnaire. Email CTAs open the visitor's email client. There is no fabricated booking, newsletter, or submission success flow.
- The legacy newsletter had no configured storage. It was removed rather than replaced with a nonfunctional collection form.
- Original privacy policy, terms and full portfolio disclosure were preserved. The owner should review these existing policies for the new hosting arrangement.
- Google Fonts is an external stylesheet with system fallbacks. All photography is stored locally.

## Brand direction

Forest green, warm ivory, and brass accents, paired with editorial serif typography and a custom architectural emblem. The emblem is shared across the wordmark, favicon, hero seal, and closing section. Responsive layouts include a cinematic hero, founder profile, lifestyle photography, property inquiry links, and investor education. The vector social-card artwork is supplied in `public/images/social-card.svg` for future marketing use.

## Editing

`public/index.html` contains content. `public/styles.css` contains design and responsive rules. `public/app.js` handles the accessible mobile menu and copyright year. `public/images` contains original-site assets. The `build` script copies `public` into `dist`.

## Verification

Production build and static checks cover every HTML page, local asset reference, internal section anchor and Vercel output settings. Browser tooling was not available in the task session, so visual browser QA has not been completed.

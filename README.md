# Mediaveien demo

Markedsføringsside for Mediaveien bygget med Astro, med innhold fra Sanity og hosting på Netlify.

- **Studio:** https://mediaveien-demo.sanity.studio
- **Sanity-prosjekt:** `1bzgbepc`, datasett `production` (offentlig)
- **Netlify-prosjekt:** `mediaveien-demo`

## Innhold i Sanity

| Type | Brukes til |
| --- | --- |
| Tjeneste | Kortene på forsiden og hver side under `/tjenester/[slug]` |
| Forside | Hero, overskrifter og tekster på forsiden |
| Ansatt | «Hvem er vi»-seksjonen |
| Kundeomtale | Kundeomtalene |

Nye tjenester dukker opp automatisk ved neste bygg. Rekkefølgen styres med feltet «Rekkefølge».

## Kjøre lokalt

```bash
npm install
npm run dev
```

Siden kjører på http://localhost:4321 (lagt inn som CORS-origin i Sanity).

## Deploy til Netlify

Siden er statisk og henter innholdet fra Sanity når Netlify bygger. Fra denne mappen:

```bash
npx -y @netlify/mcp@latest --site-id 43fd8d56-51cf-4ea1-9fc4-5efed2f800a9 --proxy-path "<proxy-path fra Netlify MCP>"
```

Eller med Netlify CLI: `npx netlify deploy --build --prod`

### Oppdatere siden når innhold publiseres

1. Netlify: Project configuration → Build & deploy → Build hooks → legg til en hook og kopier URL-en.
2. Sanity: sanity.io/manage → prosjektet → API → Webhooks → ny webhook med build hook-URL-en, filter `_type in ["service", "homePage", "teamMember", "testimonial"]`.

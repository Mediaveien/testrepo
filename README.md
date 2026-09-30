# Mediaveien demo

Markedsføringsside for Mediaveien bygget med Astro, med innhold fra Sanity og hosting på Netlify.

- **Nettside:** https://mediaveien-demo.netlify.app
- **Studio:** https://mediaveien-demo.sanity.studio
- **Sanity-prosjekt:** `1bzgbepc`, datasett `production` (offentlig)
- **Netlify-prosjekt:** `mediaveien-demo`

```
/            Astro-nettsiden (bygges av Netlify)
/studio      Sanity Studio (deployes til sanity.studio)
```

## Innhold i Sanity

| Type | Brukes til |
| --- | --- |
| Forside | Hero (tekst, video, bilde), seksjonstekster og kontaktinfo |
| Tjeneste | Kortene på forsiden og hver side under `/tjenester/[slug]` |
| Ansatt | «Hvem er vi»-seksjonen |
| Kundeomtale | Kundeomtalene |

Forsiden finnes i ett eksemplar og ligger øverst i Studio-menyen.

## Nettsiden

```bash
npm install
npm run dev     # http://localhost:4321
```

Hver push til `main` bygges og publiseres av Netlify. En webhook i Sanity starter også et nytt bygg når innhold publiseres.

## Studio

Skjemaet ligger i `studio/schemaTypes/`, én fil per type.

```bash
cd studio
npm install
npm run dev     # http://localhost:3333
npm run deploy  # publiserer Studio og skjema
```

### Legge til et felt

1. Legg til en `defineField(...)` i riktig fil i `studio/schemaTypes/`.
2. Kjør `npm run deploy` i `studio/`.
3. Hent feltet i spørringen i `src/lib/sanity.ts` og vis det i riktig side under `src/pages/`.
4. Push til `main`.

Et nytt felt vises ikke på nettsiden før steg 3 er gjort.

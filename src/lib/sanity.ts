import { createClient } from '@sanity/client';

// Offentlig datasett, så ingen token trengs for publisert innhold.
const apiHost = process.env.SANITY_API_HOST; // kun for lokal testing mot en mock-server

export const client = createClient({
  projectId: '1bzgbepc',
  dataset: 'production',
  apiVersion: '2026-03-01',
  useCdn: false,
  perspective: 'published',
  ...(apiHost ? { apiHost, useProjectHostname: false } : {}),
});

export const studioUrl = 'https://mediaveien-demo.sanity.studio';

export interface SanityImage {
  asset?: { _id: string; url: string; metadata?: { lqip?: string } };
}

export interface Service {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  intro?: string;
  body?: any[];
  highlights?: string[];
  seoDescription?: string;
}

export interface Content {
  home: {
    heroEyebrow?: string;
    heroTitle?: string;
    heroText?: string;
    heroImage?: SanityImage;
    heroVideo?: { asset?: { url: string } };
    servicesTitle?: string;
    servicesText?: string;
    aboutTitle?: string;
    aboutText?: string;
    regionTitle?: string;
    regionText?: string;
    ctaTitle?: string;
    ctaText?: string;
    contactEmail?: string;
    address?: string;
  };
  services: Service[];
  team: { _id: string; name: string; role?: string; email?: string; phone?: string; image?: SanityImage }[];
  testimonials: { _id: string; quote: string; name?: string; role?: string; image?: SanityImage }[];
}

const CONTENT_QUERY = `{
  "home": *[_id == "homePage"][0]{
    ..., heroImage{asset->{_id, url, metadata{lqip}}}, heroVideo{asset->{url}}
  },
  "services": *[_type == "service" && defined(coalesce(slug.current, slug))] | order(order asc, title asc){
    _id, title, "slug": coalesce(slug.current, slug), excerpt, intro, body, highlights, seoDescription
  },
  "team": *[_type == "teamMember"] | order(order asc){
    _id, name, role, email, phone, image{asset->{_id, url}}
  },
  "testimonials": *[_type == "testimonial"] | order(order asc){
    _id, quote, name, role, image{asset->{_id, url}}
  }
}`;

let cached: Promise<Content> | undefined;

/** Henter alt innhold én gang per bygg og deler det mellom sidene. */
export function getContent(): Promise<Content> {
  cached ??= client.fetch<Content>(CONTENT_QUERY).then((c) => ({
    ...c,
    home: c.home ?? {},
    services: c.services ?? [],
    team: c.team ?? [],
    testimonials: c.testimonials ?? [],
  }));
  return cached;
}

/** Sanity image CDN med størrelse og automatisk format. */
export function img(image: SanityImage | undefined, width: number, height?: number): string | undefined {
  const url = image?.asset?.url;
  if (!url) return undefined;
  const params = new URLSearchParams({ w: String(width), auto: 'format', q: '80' });
  if (height) {
    params.set('h', String(height));
    params.set('fit', 'crop');
  }
  return `${url}?${params}`;
}

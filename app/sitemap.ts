import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://guitarguide.app';
  
  const routes = [
    '',
    '/learn',
    '/chords',
    '/tabs',
    '/practice',
    '/practice/metronome',
    '/practice/tuner',
    '/practice/exercises',
    '/practice/progression',
    '/theory',
    '/progress',
    '/settings',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
import content from '@/content/site.ru.json';

export type SiteContent = typeof content;

export function getContent(): SiteContent {
  return content;
}

import type { Content } from './content';
import { en } from './en';
import { ar } from './ar';
import type { Locale } from '../data/site';

const DICTS: Record<Locale, Content> = { en, ar };

export function getContent(lang: Locale): Content {
  return DICTS[lang];
}

/** Path to the same page in the other locale (used by the language toggle). */
export function altLocalePath(lang: Locale, base: string): string {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  return lang === 'ar' ? `${b}/` : `${b}/ar/`;
}

export type { Content };
export type { Locale };

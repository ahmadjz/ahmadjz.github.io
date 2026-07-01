/**
 * Language-neutral site constants: identity, links, and the Nabta
 * architecture graph. Localized prose lives in src/i18n/{en,ar}.ts.
 */

export const SITE_URL = 'https://ahmadjz.github.io';

export const IDENTITY = {
  name: 'Ahmad Jumaa Zabadneh',
  nameAr: 'أحمد جمعة زبادنة',
  email: 'Ahmadjzz99@gmail.com',
  phone: '+963 932 793 456',
  location: 'Damascus, Syria',
} as const;

export const SOCIALS = {
  github: 'https://github.com/ahmadjz',
  linkedin: 'https://linkedin.com/in/ahmad-jzz',
  email: `mailto:${IDENTITY.email}`,
} as const;

/** Company / project URLs referenced across experience + projects. */
export const LINKS = {
  nabtaLive: 'https://ahmadjz.github.io/nabta-web-landing/',
  cellusys: 'https://cellusys.com/',
  iris: 'https://iris-digital.net/',
  zariot: 'https://www.zariot.com/',
  annecto: 'https://www.annecto.com/',
  ecomundo: 'https://www.ecomundo.eu/en',
  myslide: 'https://myslide.net/',
  hatlakdeals: 'https://play.google.com/store/apps/details?id=com.arbach.hatlakdeals&hl=en',
} as const;

/** Public CV PDFs live in /public (copied from the CV repo's latest release). */
export const CV_PDF = 'Ahmad-Jumaa-Zabadneh-CV.pdf';
export const CV_PDF_AR = 'Ahmad-Jumaa-Zabadneh-CV-Arabic.pdf';
export const PHOTO = 'ahmad.jpg';
export const CV_LAST_UPDATED = 'June 2026';

/**
 * Nabta 8-repo polyrepo — the scroll-reveal architecture centerpiece.
 * Grouped into tiers; edges express the OpenAPI-driven client generation
 * and the shared infra. Repo labels stay in English in both locales.
 */
export const NABTA_ARCH = {
  tiers: [
    {
      id: 'clients',
      nodes: [
        { id: 'customer', label: 'Customer app', sub: 'Flutter · BLoC', kind: 'client' },
        { id: 'admin-mobile', label: 'Admin console', sub: 'Flutter · BLoC', kind: 'client' },
        { id: 'web-admin', label: 'Web admin', sub: 'React 19 · Vite', kind: 'client' },
        { id: 'landing', label: 'Landing site', sub: 'Astro · Pages', kind: 'client' },
      ],
    },
    {
      id: 'shared',
      nodes: [
        { id: 'mobile-shared', label: 'Mobile shared', sub: 'DI · net · theming', kind: 'shared' },
        { id: 'openapi', label: 'OpenAPI spec', sub: 'typed clients', kind: 'contract' },
      ],
    },
    {
      id: 'backend',
      nodes: [
        { id: 'api', label: 'Backend API', sub: 'NestJS 11 · Prisma 6', kind: 'backend' },
      ],
    },
    {
      id: 'infra',
      nodes: [
        { id: 'infra', label: 'VPS infra', sub: 'Docker · Ansible', kind: 'infra' },
        { id: 'pg', label: 'PostgreSQL 16', sub: 'Redis · MinIO', kind: 'data' },
      ],
    },
  ],
  /** logical edges (from -> to) for the connective lines */
  edges: [
    ['customer', 'mobile-shared'],
    ['admin-mobile', 'mobile-shared'],
    ['mobile-shared', 'openapi'],
    ['web-admin', 'openapi'],
    ['landing', 'api'],
    ['openapi', 'api'],
    ['api', 'pg'],
    ['api', 'infra'],
    ['pg', 'infra'],
  ] as [string, string][],
} as const;

export type Locale = 'en' | 'ar';
export const LOCALES: Locale[] = ['en', 'ar'];
export const DEFAULT_LOCALE: Locale = 'en';
export const dir = (lang: Locale): 'ltr' | 'rtl' => (lang === 'ar' ? 'rtl' : 'ltr');

/** Build an absolute-from-base path honoring astro base. */
export function withBase(path: string, base: string): string {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}`;
}

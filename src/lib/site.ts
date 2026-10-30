import business from '../content/business.json';
export const biz = business;
export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Service Areas', href: '/service-areas/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
export function abs(path: string) {
  return new URL(path, biz.siteUrl).toString();
}

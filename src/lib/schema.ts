import { abs, biz } from './site';
export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  const list = [{ label: 'Home', href: '/' }, ...items];
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: list.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, ...(c.href ? { item: abs(c.href) } : {}) })),
  };
}
export function faqSchema(faqs: { q: string; a: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
}
export function serviceSchema(s: { title: string; slug: string; summary: string }) {
  return {
    '@context': 'https://schema.org', '@type': 'Service', name: s.title, description: s.summary, serviceType: s.title,
    url: abs(`/services/${s.slug}/`),
    provider: { '@id': abs('/#business') },
    areaServed: biz.serviceAreas.map(a => ({ '@type': 'Place', name: a.name })),
  };
}

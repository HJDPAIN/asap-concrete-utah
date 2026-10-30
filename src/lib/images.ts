import type { ImageMetadata } from 'astro';
const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*.{jpg,png}', { eager: true });
export const images: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(modules)) {
  const key = path.split('/').pop()!.replace(/\.(jpg|png)$/, '');
  images[key] = mod.default;
}
export function img(key: string | null | undefined): ImageMetadata | undefined {
  return key ? images[key] : undefined;
}

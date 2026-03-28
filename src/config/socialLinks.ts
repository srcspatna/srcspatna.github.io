import socialLinksData from '../content/data/social_links.json';

export function getSocialLinksArray() {
  // Convert { Facebook: url, ... } to [{ label: 'Facebook', href: url }, ...]
  return Object.entries(socialLinksData.social_links).map(([label, href]) => ({ label, href }));
}

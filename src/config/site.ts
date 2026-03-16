import faviconImage from '../assets/logo_favicon.png';
import logoImage from '../assets/logo_50.png';
import wordmarkImage from '../assets/logo_name_150.png';

export const siteConfig = {
  site: {
    name: 'Shri Ram Centenary School, Patna',
    shortName: 'SRCS, Patna',
    url: 'https://srcspatna.in',
    domain: 'srcspatna.in',
    locale: 'en',
    themeColor: '#0f172a',
  },
  branding: {
    eyebrow: 'Joie de vivre',
    logo: {
      src: logoImage.src,
      alt: 'Shri Ram Centenary School logo',
      width: 48,
      height: 48,
    },
    wordmark: {
      src: wordmarkImage.src,
      alt: 'Shri Ram Centenary School wordmark',
    },
    favicon: {
      src: faviconImage.src,
      type: 'image/png',
    },
    previewImage: {
      src: faviconImage.src,
      alt: 'Shri Ram Centenary School preview image',
    },
  },
  seo: {
    defaultTitle: 'Shri Ram Centenary School, Patna',
    defaultDescription: 'Shri Ram Centenary School, Patna portal for announcements, school pages, and parent-student updates.',
    titleSeparator: ' | ',
    twitterCard: 'summary',
    robots: 'index,follow',
  },
  features: {
    breadcrumbs: true, // set to false to disable breadcrumbs site-wide
    search: true, // set to false to disable global search UI and behavior
  },
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/pages', label: 'Pages' },
    { href: '/posts', label: 'Posts' },
  ],
  socialLinks: [
    { label: 'Facebook', href: '' },
    { label: 'Instagram', href: '' },
    { label: 'YouTube', href: '' },
  ],
  contact: {
    email: 'info@srcspatna.com',
    mobile: '+918873002602',
    phone: '+918873002603',
    address: 'Bhogipur, Near Shahpur, Jaganpura, Patna, Bihar, 804453',
    officeTime: 'Mon-Sat : 09:00am - 03:30pm',
  },
  footer: {
    primaryText: 'Thoughtful learning, clear communication, and modern school operations.',
    secondaryText: 'Pages and posts are organized for quick access to school updates and information.',
  },
} as const;

export const buildPageTitle = (pageTitle?: string) => {
  if (!pageTitle) {
    return siteConfig.seo.defaultTitle;
  }

  return `${pageTitle}${siteConfig.seo.titleSeparator}${siteConfig.site.name}`;
};

export const resolveSiteUrl = (pathname = '/') => new URL(pathname, siteConfig.site.url).toString();
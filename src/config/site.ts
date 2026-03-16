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
    themeToggle: true, // set to false to hide dark/light toggle UI
    topBar: true, // set to false to hide the contact/social info row above navbar
    topBarShowOnSmallScreen: true, // show top bar on small screens
    topBarShowOnLargeScreen: true, // show top bar on large screens
    topBarContactInfo: true, // set to false to hide contact info block in top bar
    topBarContactInfoShowOnSmallScreen: false, // show contact info on small screens
    topBarContactInfoShowOnLargeScreen: true, // show contact info on large screens
    topBarSocialIcons: true, // set to false to hide social icons in top bar
    topBarSocialIconsShowOnSmallScreen: true, // show social icons on small screens
    topBarSocialIconsShowOnLargeScreen: true, // show social icons on large screens
    navbarSticky: true, // set to false to make the navbar scroll with page
  },
  appearance: {
    defaultTheme: 'system', // 'light' | 'dark' | 'system'
    enableLightTheme: true, // allow light mode option
    enableDarkTheme: true, // allow dark mode option
    enableSystemTheme: true, // allow device automatic mode option
  },
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/pages', label: 'Pages' },
    { href: '/posts', label: 'Posts' },
  ],
  socialLinks: [
    { label: 'Facebook', href: 'https://www.facebook.com/patna.srcs' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/srcspatna' },
    { label: 'Instagram', href: 'https://instagram.com/srcs_patna' },
    { label: 'YouTube', href: 'https://www.youtube.com/@srcs_patna' },
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
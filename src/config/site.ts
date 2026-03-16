import faviconImage from '../assets/logo_favicon.png';
import backgroundImage from '../assets/background.svg';
import campusImage from '../assets/logo.png';
import logoImage from '../assets/logo_50.png';
import fullWordmarkImage from '../assets/logo_name.png';
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
    watermark: {
      src: '/src/assets/logo_name_150.png', // Add watermark image path when ready
      alt: 'Shri Ram Centenary School watermark',
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
    defaultTheme: 'light', // 'light' | 'dark' | 'system'
    enableLightTheme: true, // allow light mode option
    enableDarkTheme: true, // allow dark mode option
    enableSystemTheme: true, // allow device automatic mode option
    showBrandName: true, // set to false to show only logo without name/eyebrow
    brandLogoImage: 'logo' as 'logo' | 'wordmark', // which image to use as brand logo
    showSiteName: false, // set to false to hide 'Shri Ram Centenary School, Patna'
    showEyebrow: false, // set to false to hide 'Joie de vivre'
    showWatermark: true, // set to false to hide watermark image in header
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
  home: {
    marqueeItems: [
      'Admissions open for 2026-27 session',
      'Safe campus with modern learning spaces',
      'Transport, hostel, sports, and activity support',
      'Parent-friendly updates, circulars, and notices',
      'Academic focus with co-curricular growth',
    ],
    activitySlides: [
      {
        imageSrc: backgroundImage.src,
        imageAlt: 'Creative student activity showcase graphic',
        title: 'Creative classroom activities',
        description: 'Art, storytelling, and guided learning moments can be highlighted here with real activity photographs.',
        href: '/pages/beyond-academics/hobbies-cultural-activities/',
      },
      {
        imageSrc: campusImage.src,
        imageAlt: 'School activity and campus placeholder image',
        title: 'Games, movement, and team play',
        description: 'Use this slide for sports day, indoor games, and outdoor participation visuals.',
        href: '/pages/beyond-academics/games-sports/',
      },
      {
        imageSrc: fullWordmarkImage.src,
        imageAlt: 'School identity placeholder for student achievements',
        title: 'Cultural and achievement moments',
        description: 'Replace this with annual function, achievers gallery, or celebration images as they become available.',
        href: '/pages/blog/achievers-gallery/',
      },
    ],
    sliderSlides: [
      {
        eyebrow: 'Admissions',
        title: 'Start your child\'s journey with a school built for clarity and care.',
        description: 'Explore admissions, fee structure, hostel facilities, and school policies from one streamlined experience.',
        ctaLabel: 'Open Admission Pages',
        ctaHref: '/pages/admission/',
        secondaryLabel: 'Fee Structure',
        secondaryHref: '/pages/admission/fee-structure/',
        statLabel: 'Support',
        statValue: 'Parents, hostel, transport',
        accent: 'amber',
      },
      {
        eyebrow: 'School Life',
        title: 'See academics, activities, and infrastructure without digging through the site.',
        description: 'Browse facilities, curriculum, holiday lists, annual reports, and beyond-academics pages in a single flow.',
        ctaLabel: 'View Facilities',
        ctaHref: '/pages/facilities/',
        secondaryLabel: 'Browse Categories',
        secondaryHref: '/pages/',
        statLabel: 'Coverage',
        statValue: 'Academics, sports, culture',
        accent: 'emerald',
      },
      {
        eyebrow: 'Updates',
        title: 'Keep announcements and circulars visible right from the first screen.',
        description: 'Recent posts, job opportunities, circulars, and important notices stay one click away for parents and students.',
        ctaLabel: 'Read Circulars',
        ctaHref: '/pages/circular/',
        secondaryLabel: 'Latest Posts',
        secondaryHref: '/posts/',
        statLabel: 'Access',
        statValue: 'Quick, organized, current',
        accent: 'blue',
      },
    ],
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
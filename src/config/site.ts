import faviconImage from '../assets/logo_favicon.png';
import backgroundImage from '../assets/background.svg';
import campusImage from '../assets/logo.png';
import logoImage from '../assets/logo_50.png';
import fullWordmarkImage from '../assets/logo_name.png';
import wordmarkImage from '../assets/logo_name_150.png';

type CustomTagPlacement = 'head' | 'body-start' | 'body-end';

type CustomTagConfig = {
  id: string;
  enabled: boolean;
  placement: CustomTagPlacement;
  html: string;
};

type ContactFormConfig = {
  enabled: boolean;
  endpoint: string;
  method: 'POST' | 'PUT';
  successMessage: string;
  errorMessage: string;
  serverUnavailableMessage: string;
};

export const siteConfig = {
  site: {
    name: 'Shri Ram Centennial School, Patna',
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
      alt: 'Shri Ram Centennial School logo',
      width: 48,
      height: 48,
    },
    wordmark: {
      src: wordmarkImage.src,
      alt: 'Shri Ram Centennial School wordmark',
    },
    favicon: {
      src: faviconImage.src,
      type: 'image/png',
    },
    previewImage: {
      src: faviconImage.src,
      alt: 'Shri Ram Centennial School preview image',
    },
    watermark: {
      src: wordmarkImage.src,
      alt: 'Shri Ram Centennial School watermark',
    },
  },
  seo: {
    defaultTitle: 'Shri Ram Centennial School, Patna',
    defaultDescription: 'Shri Ram Centennial School, Patna portal for announcements, school pages, and parent-student updates.',
    titleSeparator: ' | ',
    twitterCard: 'summary',
    robots: 'index,follow',
  },
  tracking: {
    gtm: {
      enabled: true,
      containerId: import.meta.env.PUBLIC_GTM_ID ?? '',
      dataLayerName: 'dataLayer',
    },
    ga4: {
      enabled: true,
      measurementId: import.meta.env.PUBLIC_GA4_ID ?? '',
      viaTagManager: true,
      sendPageView: true,
    },
    customTags: [
      // Add any custom provider snippet here without touching layout code.
      // Example:
      // {
      //   id: 'meta-pixel-base',
      //   enabled: false,
      //   placement: 'head',
      //   html: '<script>/* provider snippet */</script>',
      // },
    ] as CustomTagConfig[],
  },
  forms: {
    contact: {
      enabled: true,
      endpoint: import.meta.env.PUBLIC_CONTACT_FORM_ENDPOINT ?? 'https://erp.srcspatna.com/api/website-enquiries',
      method: 'POST' as const,
      successMessage: 'Thanks for contacting us. Our team will get back to you shortly.',
      errorMessage: 'Unable to submit your form right now. Please try again after some time.',
      serverUnavailableMessage: 'Our enquiry service is temporarily unavailable. Please try again after some time.',
    } as ContactFormConfig,
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
    showSiteName: false, // set to false to hide 'Shri Ram Centennial School, Patna'
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
  },
} as const;

export const buildPageTitle = (pageTitle?: string) => {
  if (!pageTitle) {
    return siteConfig.seo.defaultTitle;
  }

  return `${pageTitle}${siteConfig.seo.titleSeparator}${siteConfig.site.name}`;
};

export const resolveSiteUrl = (pathname = '/') => new URL(pathname, siteConfig.site.url).toString();
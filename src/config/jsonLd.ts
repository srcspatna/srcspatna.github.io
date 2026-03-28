import { siteConfig } from "./site";

// Central JSON-LD config for use across the site

export const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "School Updates and Academic Excellence",
  "datePublished": "2026-03-01",
  "author": {
    "@type": "Person",
    "name": "SRCS Administration"
  }
};

export const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Admission Open 2026-27",
  "startDate": "2026-03-01",
  "location": {
    "@type": "Place",
    "name": "SRCS Patna Campus",
    "address": siteConfig.contact.address
  }
};


// Advanced Organization & EducationalOrganization JSON-LD
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization", "School"],
  "@id": `${siteConfig.site.url}/#organization`,
  "name": siteConfig.site.name,
  "alternateName": siteConfig.site.shortName,
  "url": siteConfig.site.url,
  "logo": {
    "@type": "ImageObject",
    "url": siteConfig.branding.logo.src,
    "width": "512",
    "height": "512"
  },
  "image": siteConfig.branding.previewImage.src,
  "description": siteConfig.seo.defaultDescription,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.contact.address,
    "addressLocality": "Patna",
    "addressRegion": "Bihar",
    "postalCode": "804453",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.5512", // Replace with actual if known
    "longitude": "85.1812" // Replace with actual if known
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.mobile,
      "contactType": "Admissions",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.phone,
      "contactType": "General Enquiry",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"]
    }
  ],
  "sameAs": [
    "https://www.facebook.com/patna.srcs",
    "https://www.linkedin.com/company/srcspatna",
    "https://instagram.com/srcs_patna",
    "https://www.youtube.com/@srcs_patna"
  ]
};

// Person JSON-LD (example principal)
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Principal",
  "jobTitle": "Principal",
  "worksFor": {
    "@id": `${siteConfig.site.url}/#organization`
  }
};

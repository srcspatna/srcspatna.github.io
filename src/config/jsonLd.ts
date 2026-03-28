// Central JSON-LD config for use across the site

export const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Prepare for Exams",
  "datePublished": "2026-03-01",
  "author": {
    "@type": "Person",
    "name": "Principal Sharma"
  }
};

export const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Spring Fest 2026",
  "startDate": "2026-04-10",
  "location": {
    "@type": "Place",
    "name": "School Auditorium"
  }
};


// Organization JSON-LD
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Springfield Public School",
  "url": "https://srcspatna.github.io/",
  "logo": "https://srcspatna.github.io/public/logo.png"
};

// Person JSON-LD (example principal)
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Principal Sharma",
  "jobTitle": "Principal",
  "worksFor": {
    "@type": "Organization",
    "name": "Springfield Public School"
  }
};

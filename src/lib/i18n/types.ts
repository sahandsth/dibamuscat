export type Locale = "en" | "fa" | "ar";

export type ServiceItem = {
  title: string;
  desc: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ReviewItem = {
  text: string;
  name: string;
  service: string;
};

export type PortfolioItem = {
  alt: string;
  tag: string;
  caption: string;
};

export type AboutHighlight = {
  label: string;
  value: string;
};

export type BookingDetail = {
  label: string;
};

export type Dictionary = {
  locale: {
    en: string;
    fa: string;
    ar: string;
  };
  languagePicker: {
    title: string;
    subtitle: string;
  };
  nav: {
    services: string;
    about: string;
    gallery: string;
    book: string;
    bookNow: string;
    bookAppointment: string;
    openMenu: string;
    closeMenu: string;
    home: string;
  };
  preloader: {
    tagline: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    bookVisit: string;
    exploreServices: string;
    scrollDown: string;
    stats: StatItem[];
  };
  marquee: string[];
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  about: {
    cardTitle: string;
    cardSubtitle: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    paragraph1: string;
    paragraph2: string;
    highlights: AboutHighlight[];
    imageAlt: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: string[];
    portfolio: PortfolioItem[];
    seeMore: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    reviews: ReviewItem[];
  };
  booking: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    details: BookingDetail[];
    bookWhatsApp: string;
    followInstagram: string;
    call: string;
  };
  footer: {
    location: string;
    rights: string;
  };
};

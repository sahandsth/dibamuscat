"use client";

import { Camera, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-wine/8 bg-charcoal px-5 py-12 text-cream/70">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-start">
            <p className="font-display text-2xl tracking-[0.2em] text-cream">
              <span dir="ltr" className="inline-block [unicode-bidi:isolate]">
                DIBA
              </span>
            </p>
            <p dir="ltr" className="mt-1 inline-block text-xs tracking-[0.3em] text-rose-light uppercase [unicode-bidi:isolate]">
              {site.tagline}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors hover:text-gold"
              aria-label="Instagram"
            >
              <Camera size={18} />
              @{site.instagram.handle}
            </a>
            <a
              href={`tel:${site.phone.tel}`}
              className="flex items-center gap-2 text-sm transition-colors hover:text-gold"
            >
              <Phone size={18} />
              {site.phone.display}
            </a>
            <a
              href={`https://maps.google.com/?q=${site.location.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors hover:text-gold"
            >
              <MapPin size={18} />
              {t.footer.location}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-xs tracking-wide">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Phone, Clock, Camera } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { site } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";

const detailIcons = [MapPin, Clock, Phone, Camera];

const detailValues = [
  site.location.short,
  site.hours,
  site.phone.display,
  `@${site.instagram.handle}`,
];

const detailLinks = [
  `https://maps.google.com/?q=${site.location.mapsQuery}`,
  undefined,
  `tel:${site.phone.tel}`,
  site.instagram.url,
];

export function Booking() {
  const { t } = useLanguage();

  return (
    <section id="book" className="relative overflow-hidden px-5 py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-blush/30 to-cream" />
      <motion.div
        className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-rose-light/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <AnimatedSection className="text-center">
          <p className="mb-3 text-xs tracking-[0.3em] text-rose uppercase">
            {t.booking.eyebrow}
          </p>
          <h2 className="font-display text-4xl text-wine md:text-6xl">
            {t.booking.titleLine1}
            <br />
            <span className="gradient-text italic">{t.booking.titleLine2}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            {t.booking.subtitle}{" "}
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-rose transition-colors hover:text-wine"
            >
              @{site.instagram.handle}
            </a>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div
            className="relative mx-auto mt-10 max-w-lg overflow-hidden rounded-[2rem] glass shadow-xl shadow-wine/5"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,169,98,0.15), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
            <div className="relative bg-gradient-to-r from-wine to-rose p-6 text-cream">
              <h3 className="font-display text-2xl">{site.name}</h3>
              <p className="mt-1 text-sm text-cream/70">{site.location.short}</p>
            </div>

            <div className="relative space-y-4 p-6">
              {t.booking.details.map((item, i) => {
                const Icon = detailIcons[i];
                const value = detailValues[i];
                const href = detailLinks[i];

                return (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <motion.div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blush text-rose"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <p className="text-xs tracking-wider text-muted uppercase">
                        {item.label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-medium text-wine transition-colors hover:text-rose"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-medium text-wine">{value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              <motion.a
                href={`https://wa.me/${site.phone.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-wine py-4 text-sm font-medium tracking-wide text-cream"
                whileHover={{ scale: 1.02, backgroundColor: "#b76e79" }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar size={18} />
                {t.booking.bookWhatsApp}
              </motion.a>

              <motion.a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-wine/15 py-4 text-sm font-medium tracking-wide text-wine"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 230, 232, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Camera size={18} />
                {t.booking.followInstagram} @{site.instagram.handle}
              </motion.a>

              <motion.a
                href={`tel:${site.phone.tel}`}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-wine/15 py-4 text-sm font-medium tracking-wide text-wine"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 230, 232, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={18} />
                {t.booking.call} {site.phone.display}
              </motion.a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

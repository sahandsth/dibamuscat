"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Scissors,
  Sparkles,
  Flower2,
  Hand,
  Palette,
  Wind,
  Star,
} from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { TiltCard } from "./TiltCard";

const services = [
  {
    icon: Eye,
    title: "Lash Extensions",
    desc: "Classic, volume & hybrid sets tailored to your eye shape.",
    accent: "from-rose/20 to-rose-light/10",
    span: "col-span-1 md:col-span-2 md:row-span-2",
  },
  {
    icon: Hand,
    title: "Nail Art",
    desc: "Gel, acrylic & bespoke designs.",
    accent: "from-gold-light/30 to-gold/10",
    span: "col-span-1",
  },
  {
    icon: Flower2,
    title: "Pedicure",
    desc: "Spa pedicure with premium care.",
    accent: "from-blush to-rose-light/20",
    span: "col-span-1",
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    desc: "Cuts, color, blowouts & treatments.",
    accent: "from-wine/10 to-rose/10",
    span: "col-span-1",
  },
  {
    icon: Palette,
    title: "Brow & Lash Tint",
    desc: "Sculpted brows, lifted lashes.",
    accent: "from-gold/10 to-gold-light/20",
    span: "col-span-1",
  },
  {
    icon: Sparkles,
    title: "Facial Glow",
    desc: "Rejuvenating skin treatments.",
    accent: "from-rose-light/20 to-blush",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Wind,
    title: "Keratin & Smoothing",
    desc: "Silky, frizz-free hair transformations.",
    accent: "from-wine/5 to-gold-light/15",
    span: "col-span-1",
  },
  {
    icon: Star,
    title: "Bridal Packages",
    desc: "Full glam for your special day.",
    accent: "from-rose/15 to-gold/10",
    span: "col-span-1",
  },
];

export function Services() {
  return (
    <section id="services" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs tracking-[0.3em] text-rose uppercase">
            What We Offer
          </p>
          <h2 className="font-display text-4xl text-wine md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            From fluttery lashes to flawless nails — every detail is handled with
            precision and care.
          </p>
        </AnimatedSection>

        <AnimatedSection
          stagger
          className="grid grid-cols-2 gap-3 auto-rows-fr md:grid-cols-4 md:gap-4 md:auto-rows-[minmax(10rem,auto)]"
        >
          {services.map((service, i) => (
            <AnimatedItem key={service.title} className="h-full min-h-0">
              <TiltCard
                className={`group relative h-full min-h-[7.5rem] overflow-hidden rounded-2xl bg-gradient-to-br md:min-h-0 md:rounded-3xl ${service.accent} ${service.span}`}
                intensity={service.span.includes("row-span-2") ? 8 : 10}
              >
                <motion.div
                  className="relative flex h-full flex-col p-4 md:p-6"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <service.icon
                    size={20}
                    className="mb-2 shrink-0 text-rose md:mb-3"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-base leading-snug text-wine md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-1 flex-1 text-[11px] leading-relaxed text-muted md:text-sm">
                    {service.desc}
                  </p>
                  <span className="mt-2 hidden text-[10px] tracking-widest text-wine/25 md:block">
                    0{i + 1}
                  </span>
                </motion.div>
              </TiltCard>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

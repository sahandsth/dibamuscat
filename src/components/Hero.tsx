"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef } from "react";
import { FloatingParticles } from "./FloatingParticles";
import { TextReveal } from "./TextReveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const orbX = useTransform(smoothX, [-1, 1], [-40, 40]);
  const orbY = useTransform(smoothY, [-1, 1], [-30, 30]);
  const orbXNeg = useTransform(orbX, (v) => -v * 0.6);
  const orbYNeg = useTransform(orbY, (v) => -v * 0.6);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden"
    >
      <motion.div style={{ scale, rotate }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blush/60 via-cream/30 to-cream" />
        <motion.div
          style={{ x: orbX, y: orbY }}
          className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-rose-light/40 blur-3xl animate-pulse-glow"
        />
        <motion.div
          style={{ x: orbXNeg, y: orbYNeg }}
          className="absolute top-1/3 -left-16 h-64 w-64 rounded-full bg-gold-light/30 blur-3xl animate-pulse-glow"
        />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-rose/20 blur-2xl animate-orbit" />
        <FloatingParticles />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--wine) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 px-5 pb-28 pt-32 md:pb-36 md:pt-40">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose/20 bg-white/50 px-4 py-2 text-xs tracking-widest text-muted uppercase backdrop-blur-sm"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Sparkles size={12} className="text-gold" />
            </motion.span>
            Grand Millennium · Muscat
          </motion.div>

          <h1 className="max-w-full pb-1 font-display text-[clamp(2.5rem,min(10vw,14vh),6.5rem)] leading-[1.25] font-medium tracking-tight">
            <TextReveal text="Diba" className="block text-wine" delay={0.4} as="span" />
            <TextReveal
              text="Beauty"
              className="gradient-text block italic"
              delay={0.7}
              as="span"
              splitLetters={false}
            />
          </h1>

          <motion.p
            className="mt-6 max-w-sm text-lg leading-relaxed text-muted md:max-w-lg md:text-xl"
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 1.1 }}
          >
            Lashes, nails, hair, pedicure &amp; everything your glow deserves —
            at Grand Millennium Muscat.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.a
              href="#book"
              className="group relative overflow-hidden rounded-full bg-wine px-8 py-4 text-center text-sm font-medium tracking-wide text-cream"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Book Your Visit</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-rose via-gold to-rose"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            <motion.a
              href="#services"
              className="rounded-full border border-wine/20 bg-white/40 px-8 py-4 text-center text-sm font-medium tracking-wide text-wine backdrop-blur-sm"
              whileHover={{ scale: 1.03, borderColor: "rgba(183, 110, 121, 0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-14 grid grid-cols-3 gap-3 border-t border-wine/10 pt-8 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {[
              { value: "12+", label: "Services" },
              { value: "5★", label: "Rated" },
              { value: "Al Khuwair", label: "Muscat" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="min-w-0 text-center sm:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.1 }}
              >
                <p className="font-display text-lg leading-tight text-wine sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] tracking-wider text-muted uppercase sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#services"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.8 },
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
        }}
        aria-label="Scroll down"
      >
        <motion.div
          className="flex h-10 w-6 items-start justify-center rounded-full border border-wine/20 p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div
            className="h-2 w-0.5 rounded-full bg-rose"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.a>
    </section>
  );
}

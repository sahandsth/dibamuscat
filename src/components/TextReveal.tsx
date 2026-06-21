"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
  splitLetters?: boolean;
  ltr?: boolean;
};

export function TextReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
  splitLetters = true,
  ltr = false,
}: TextRevealProps) {
  const letters = text.split("");
  const directionProps = ltr ? { dir: "ltr" as const } : {};

  if (!splitLetters) {
    return (
      <Tag
        {...directionProps}
        className={`max-w-full ${ltr ? "[unicode-bidi:isolate] " : ""}${className}`}
        aria-label={text}
      >
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {text}
        </motion.span>
      </Tag>
    );
  }

  return (
    <Tag
      {...directionProps}
      className={`max-w-full ${ltr ? "[unicode-bidi:isolate] " : ""}${className}`}
      aria-label={text}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          className="inline-block pb-[0.08em]"
          style={{ whiteSpace: letter === " " ? "pre" : undefined }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.035,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </Tag>
  );
}

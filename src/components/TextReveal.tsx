"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
  splitLetters?: boolean;
};

export function TextReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
  splitLetters = true,
}: TextRevealProps) {
  const letters = text.split("");

  if (!splitLetters) {
    return (
      <Tag className={`max-w-full ${className}`} aria-label={text}>
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
      className={`max-w-full ${className}`}
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

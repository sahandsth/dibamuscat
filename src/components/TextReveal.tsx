"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
};

export function TextReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
}: TextRevealProps) {
  const letters = text.split("");

  return (
    <Tag className={className} aria-label={text}>
      <span className="inline-flex max-w-full flex-wrap">
        {letters.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            className="inline-block pb-[0.12em]"
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
      </span>
    </Tag>
  );
}

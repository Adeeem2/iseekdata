"use client";

import { motion } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

export default function TextGenerateEffect({ words, className }: TextGenerateEffectProps) {
  const wordsArray = words.split(" ");

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          variants={{
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

"use client";

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface AnimatedTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  variants?: Variants;
  delay?: number;
  staggerChildren?: number;
  charAnimation?: boolean; // If true, animates character by character
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.05, duration: 0.5, ease: 'easeOut' },
  }),
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Wrapper = 'p',
  className,
  variants = defaultVariants,
  delay = 0,
  staggerChildren = 0.05,
  charAnimation = false,
}) => {
  if (charAnimation) {
    return (
      <Wrapper className={className}>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren } } }}
          aria-label={text}
        >
          {text.split('').map((char, index) => (
            <motion.span key={index} variants={variants} custom={delay + index * staggerChildren} style={{ display: 'inline-block' }}>
              {char === ' ' ? '\u00A0' : char} {/* Preserve spaces */}
            </motion.span>
          ))}
        </motion.span>
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className}>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={delay}
      >
        {text}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;

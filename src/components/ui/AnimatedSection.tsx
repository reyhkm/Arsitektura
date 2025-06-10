"use client";

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  once?: boolean;
  amount?: number | 'some' | 'all';
  tag?: keyof JSX.IntrinsicElements;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  variants = defaultVariants,
  once = true,
  amount = 0.2, // Trigger when 20% of the element is in view
  tag: Tag = 'section',
}) => {
  return (
    <motion.div
      // @ts-ignore - Framer Motion's types for `as` prop can be tricky with custom tags
      as={Tag} 
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

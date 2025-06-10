"use client";

import { AnimatePresence } from 'framer-motion';
import React from 'react';

interface PageAnimatorProps {
  children: React.ReactNode;
}

export default function PageAnimator({ children }: PageAnimatorProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  );
}

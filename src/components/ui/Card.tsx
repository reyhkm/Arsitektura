"use client";

import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <motion.div
      className={`bg-card dark:bg-dark-card text-card-foreground dark:text-dark-card-foreground rounded-lg shadow-lg overflow-hidden ${className}`}
      whileHover={hoverEffect ? { y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;

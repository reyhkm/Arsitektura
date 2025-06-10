"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-background';
  
  const variantStyles = {
    primary: 'bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent',
    secondary: 'bg-primary-foreground text-primary dark:bg-dark-primary-foreground dark:text-dark-primary hover:bg-primary-foreground/90 dark:hover:bg-dark-primary-foreground/90 focus:ring-primary-foreground',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-accent-foreground focus:ring-accent',
    ghost: 'hover:bg-accent/10 text-accent focus:ring-accent',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (asLink && href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a {...motionProps} className={combinedClassName}>
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button {...motionProps} className={combinedClassName} {...props}>
      {children}
    </motion.button>
  );
};

export default Button;

"use client";

import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

// Base props common to both button and link
interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

// Props to omit from standard HTML attributes to avoid conflicts with Framer Motion
type PropsToOmit = 'children' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration';

// Props for when the component is a button
interface ActualButtonProps extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, PropsToOmit> {
  asLink?: false;
  href?: never;
}

// Props for when the component is a link
interface LinkButtonProps extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, PropsToOmit> {
  asLink: true;
  href: string;
}

type ButtonProps = ActualButtonProps | LinkButtonProps;

const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', size = 'md', children, className = '' } = props;

  const baseStyles = 'font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-background';
  
  const variantStyles = {
    primary: 'bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent',
    secondary: 'bg-primary-foreground text-primary dark:bg-dark-primary-foreground dark:text-dark-primary hover:bg-primary-foreground/90 dark:hover:bg-dark-primary-foreground/90 focus:ring-primary-foreground',
    outline: 'ring-1 ring-inset ring-accent text-accent hover:bg-accent hover:text-accent-foreground focus:ring-accent dark:ring-dark-accent',
    ghost: 'hover:bg-accent/10 text-accent focus:ring-accent',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const fmMotionProps: HTMLMotionProps<any> = { 
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (props.asLink) {
    const { asLink, href, variant: _variant, size: _size, children: _children, className: _className, ...anchorProps } = props;
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a {...fmMotionProps} className={combinedClassName} {...anchorProps}>
          {children}
        </motion.a>
      </Link>
    );
  } else {
    const { asLink, variant: _variant, size: _size, children: _children, className: _className, ...buttonProps } = props;
    return (
      <motion.button {...fmMotionProps} className={combinedClassName} {...buttonProps}>
        {children}
      </motion.button>
    );
  }
};

export default Button;

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = 'mb-12 text-center',
  titleClassName = 'text-3xl md:text-4xl font-bold text-foreground dark:text-dark-foreground',
  subtitleClassName = 'mt-2 text-lg text-gray-600 dark:text-gray-400',
}) => {
  return (
    <div className={className}>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;

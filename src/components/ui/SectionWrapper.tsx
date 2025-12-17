import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  darker?: boolean;
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = '',
  darker = false,
}: SectionWrapperProps) {
  const bgClass = darker ? 'bg-slate-50' : 'bg-white';

  return (
    <section
      id={id}
      className={`scroll-mt-20 ${bgClass} py-16 md:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-slideUp">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-600 max-w-3xl mx-auto animate-slideUp animation-delay-150">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

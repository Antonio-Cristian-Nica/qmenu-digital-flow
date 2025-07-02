import React, { useEffect, useRef, useState } from 'react';

interface SplitRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
}

const SplitReveal: React.FC<SplitRevealProps> = ({ 
  children, 
  direction = 'left',
  delay = 0, 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const translateClass = direction === 'left' ? '-translate-x-8' : 'translate-x-8';

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : `opacity-0 ${translateClass}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default SplitReveal;
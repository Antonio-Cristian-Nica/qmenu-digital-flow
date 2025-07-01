import React, { useEffect, useRef, useState } from 'react';

interface SplitRevealProps {
  colorLeft?: string;
  colorRight?: string;
  height?: string;
}

const SplitReveal: React.FC<SplitRevealProps> = ({
  colorLeft = 'bg-purple-600',
  colorRight = 'bg-cyan-600',
  height = 'h-24',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative w-full ${height} overflow-hidden my-8`}>
      <div className={`absolute left-0 top-0 w-1/2 h-full transition-transform duration-1000 ${colorLeft} ${visible ? 'translate-x-0' : '-translate-x-full'}`}></div>
      <div className={`absolute right-0 top-0 w-1/2 h-full transition-transform duration-1000 ${colorRight} ${visible ? 'translate-x-0' : 'translate-x-full'}`}></div>
    </div>
  );
};

export default SplitReveal;

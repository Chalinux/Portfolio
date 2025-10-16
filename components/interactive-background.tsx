'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useEffect } from 'react';

interface InteractiveBackgroundProps {
  children: React.ReactNode;
}

export default function InteractiveBackground({ children }: InteractiveBackgroundProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const center = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      x.set(width / 2);
      y.set(height / 2);
    };

    center();
    window.addEventListener('resize', center);
    return () => window.removeEventListener('resize', center);
  }, [x, y]);

  const springX = useSpring(x, { stiffness: 120, damping: 30, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 30, mass: 0.6 });

  const glow = useMotionTemplate`radial-gradient(520px circle at ${springX}px ${springY}px, rgba(99,102,241,0.26), transparent 70%)`;
  const trace = useMotionTemplate`radial-gradient(320px circle at ${springX}px ${springY}px, rgba(56,189,248,0.14), transparent 75%)`;

  const handlePointerMove = useCallback<React.PointerEventHandler<HTMLDivElement>>(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
    },
    [x, y]
  );

  const handlePointerLeave = useCallback<React.PointerEventHandler<HTMLDivElement>>(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      x.set(rect.width / 2);
      y.set(rect.height / 2);
    },
    [x, y]
  );

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-background"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div aria-hidden className="pointer-events-none fixed inset-0 opacity-80" style={{ backgroundImage: glow }} />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-80 mix-blend-screen"
        style={{ backgroundImage: trace }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

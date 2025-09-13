import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  opacity: number;
}

export const FloatingParticles = ({ count = 20 }: { count?: number }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ['magical-gold', 'magical-pink', 'magical-blue', 'magical-purple'];
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 0.5 + Math.random() * 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full animate-float particle-float`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size * 4}px`,
            height: `${particle.size * 4}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            backgroundColor: `hsl(var(--${particle.color}))`,
            opacity: particle.opacity,
            filter: `drop-shadow(0 0 ${particle.size * 6}px hsl(var(--${particle.color}) / 0.6))`,
            boxShadow: `0 0 ${particle.size * 8}px hsl(var(--${particle.color}) / 0.3)`,
          }}
        />
      ))}
    </div>
  );
};
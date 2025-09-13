import { useEffect, useState } from "react";

interface Firefly {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  color: string;
  life: number;
}

export const CursorFireflies = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const colors = ['magical-gold', 'magical-pink', 'magical-purple', 'magical-blue'];
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Add new firefly at cursor position with random color
      const newFirefly: Firefly = {
        id: Date.now() + Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 20,
        y: e.clientY + (Math.random() - 0.5) * 20,
        opacity: 1,
        scale: 0.8 + Math.random() * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
      };

      setFireflies(prev => [...prev.slice(-20), newFirefly]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Animate fireflies with more complex behavior
    const interval = setInterval(() => {
      setFireflies(prev => 
        prev.map(firefly => ({
          ...firefly,
          opacity: firefly.opacity * 0.96,
          scale: firefly.scale * 0.99,
          life: firefly.life * 0.98,
          x: firefly.x + (Math.random() - 0.5) * 2,
          y: firefly.y + (Math.random() - 0.5) * 2,
        })).filter(firefly => firefly.opacity > 0.05)
      );
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {fireflies.map((firefly) => (
        <div
          key={firefly.id}
          className="absolute rounded-full transition-all duration-100"
          style={{
            left: firefly.x - 3,
            top: firefly.y - 3,
            width: `${4 + firefly.scale * 2}px`,
            height: `${4 + firefly.scale * 2}px`,
            opacity: firefly.opacity,
            transform: `scale(${firefly.scale})`,
            backgroundColor: `hsl(var(--${firefly.color}))`,
            filter: `drop-shadow(0 0 ${8 + firefly.scale * 4}px hsl(var(--${firefly.color}) / 0.8))`,
            boxShadow: `0 0 ${6 + firefly.scale * 3}px hsl(var(--${firefly.color}) / 0.4)`,
          }}
        />
      ))}
    </div>
  );
};
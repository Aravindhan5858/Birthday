import { useMemo } from 'react';
import './ParticlesBg.css';

export default function ParticlesBg({ count = 50, color = 'rgba(255,255,255,0.3)' }) {
  const dots = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
    })), [count]);

  return (
    <div className="particles-bg">
      {dots.map((d) => (
        <span
          key={d.id}
          className="particle-dot"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            background: color,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

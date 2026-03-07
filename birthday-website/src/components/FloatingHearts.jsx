import { useMemo } from 'react';
import './FloatingHearts.css';

export default function FloatingHearts({ count = 15 }) {
  const hearts = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 18 + 12,
      delay: Math.random() * 10,
      duration: Math.random() * 6 + 8,
      opacity: Math.random() * 0.4 + 0.2,
    })), [count]);

  return (
    <div className="floating-hearts-container">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: h.left,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            opacity: h.opacity,
          }}
        >
          {Math.random() > 0.5 ? '💖' : '✨'}
        </span>
      ))}
    </div>
  );
}

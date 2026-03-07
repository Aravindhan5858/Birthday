import { useMemo } from 'react';
import './Balloons.css';

const BALLOON_COLORS = [
  '#ff6b9d', '#c44dff', '#ffd700', '#4dc9f6', '#ff6f61',
  '#00d2ff', '#ff9ec6', '#7b2ff7', '#f093fb', '#fee140',
];

export default function Balloons({ count = 12 }) {
  const balloons = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      color: BALLOON_COLORS[i % BALLOON_COLORS.length],
      left: `${Math.random() * 100}%`,
      size: Math.random() * 30 + 40,
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 10,
    })), [count]);

  return (
    <div className="balloons-container">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="balloon"
          style={{
            left: b.left,
            width: `${b.size}px`,
            height: `${b.size * 1.2}px`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        >
          <div className="balloon-body" style={{ background: b.color }}>
            <div className="balloon-shine" />
          </div>
          <div className="balloon-string" />
        </div>
      ))}
    </div>
  );
}

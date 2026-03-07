import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesBg from '../components/ParticlesBg';
import './MemoriesPage.css';

/* Slideshow photos — 20 photos */
const photos = [
  { url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop', caption: 'Every moment with you is a celebration 🎉' },
  { url: 'https://images.unsplash.com/photo-1464349153159-4b26eff5e144?w=800&h=600&fit=crop', caption: 'Through every season, side by side 🌸' },
  { url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=600&fit=crop', caption: 'The laughs we shared are my treasure 💎' },
  { url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop', caption: 'Birthday vibes and confetti dreams 🎊' },
  { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop', caption: 'Growing up together, forever grateful 💖' },
  { url: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&h=600&fit=crop', caption: 'Adventures, memories, and endless love 🌟' },
  { url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=600&fit=crop', caption: 'Our first adventure together 🌄' },
  { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop', caption: 'Dance like nobody is watching 💃' },
  { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop', caption: 'Team spirit, always! 🤝' },
  { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', caption: 'Chasing sunsets with you 🌅' },
  { url: 'https://images.unsplash.com/photo-1501238295340-c810d3c156d2?w=800&h=600&fit=crop', caption: 'Laughing until our cheeks hurt 😂' },
  { url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop', caption: 'Road trips and good vibes 🚗' },
  { url: 'https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=800&h=600&fit=crop', caption: 'Summer memories never fade ☀️' },
  { url: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=800&h=600&fit=crop', caption: 'Warm hugs on cold days 🤗' },
  { url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop', caption: 'Party time with my favorite person 🎉' },
  { url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&h=600&fit=crop', caption: 'Stargazing and dreaming big ✨' },
  { url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop', caption: 'Foodie adventures together 🍕' },
  { url: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800&h=600&fit=crop', caption: 'Beach days are the best days 🏖️' },
  { url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=600&fit=crop', caption: 'Celebrating every little win 🏆' },
  { url: 'https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?w=800&h=600&fit=crop', caption: 'Forever grateful for you 🙏💖' },
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 800 : -800, opacity: 0, scale: 0.85 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -800 : 800, opacity: 0, scale: 0.85 }),
};

export default function MemoriesPage() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % photos.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  }, []);

  // Auto-advance every 15 seconds
  useEffect(() => {
    const timer = setInterval(goNext, 15000);
    return () => clearInterval(timer);
  }, [goNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  return (
    <div className="memories-page">
      <ParticlesBg count={50} color="rgba(255, 215, 0, 0.15)" />

      {/* Ambient glow */}
      <div className="memories-glow memories-glow-1" />
      <div className="memories-glow memories-glow-2" />

      <div className="memories-container">
        <motion.div
          className="memories-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="memories-title">Our Memories</h1>
          <p className="memories-subtitle">A journey through our beautiful moments together 📸</p>
          <div className="title-underline" />
        </motion.div>

        {/* Slideshow */}
        <div className="slideshow-wrapper" onClick={goNext}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              className="slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              <div className="slide-frame">
                <img src={photos[current].url} alt={photos[current].caption} className="slide-img" />
                <div className="slide-overlay" />
              </div>
              <motion.p
                className="slide-caption"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {photos[current].caption}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="slide-dots">
            {photos.map((_, i) => (
              <button
                key={i}
                className={`slide-dot ${i === current ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="slide-controls">
          <button className="slide-btn" onClick={goPrev}>
            ◀ Prev
          </button>
          <span className="slide-counter">
            {current + 1} / {photos.length}
          </span>
          <button className="slide-btn" onClick={goNext}>
            Next ▶
          </button>
        </div>

        {/* Navigation */}
        <motion.div
          className="memories-nav"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button className="nav-btn nav-btn-back" onClick={() => navigate('/quotes')}>
            ← Quotes
          </button>
          <button className="nav-btn nav-btn-next" onClick={() => navigate('/gifts')}>
            🎁 Next Gift →
          </button>
        </motion.div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import ParticlesBg from '../components/ParticlesBg';
import FloatingHearts from '../components/FloatingHearts';
import './GiftsPage.css';

const gifts = [
  {
    id: 1,
    color: 'linear-gradient(135deg, #ff6b9d, #c44dff)',
    ribbon: '#ffd700',
    emoji: '🎁',
    image: 'https://via.placeholder.com/500x500/ff6b9d/ffffff?text=Promise',
    title: 'A Promise',
    message:
      "I promise to always be there for you — through every high, every low, and every silly moment in between. You're not just my sibling, you're my forever best friend. 💖",
  },
  {
    id: 2,
    color: 'linear-gradient(135deg, #4dc9f6, #7b2ff7)',
    ribbon: '#ff6b9d',
    emoji: '💌',
    image: 'https://via.placeholder.com/500x500/4dc9f6/ffffff?text=Letter',
    title: 'A Letter of Love',
    message:
      'If I could give you one thing in life, I would give you the ability to see yourself through my eyes. Only then would you realize how special you are to me. Happy 20th! 🥺💕',
  },
  {
    id: 3,
    color: 'linear-gradient(135deg, #ffd700, #ff6f61)',
    ribbon: '#c44dff',
    emoji: '🌟',
    image: 'https://via.placeholder.com/500x500/ffd700/ffffff?text=Wish',
    title: 'My Wish for You',
    message:
      'May your 20s bring you adventures that take your breath away, friendships that fill your heart, and dreams that exceed your imagination. You deserve the world! ✨🌍',
  },
  {
    id: 4,
    color: 'linear-gradient(135deg, #f093fb, #f5576c)',
    ribbon: '#4dc9f6',
    emoji: '👫',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop',
    title: 'Sibling Bond',
    message:
      'From fighting over the TV remote to sharing our deepest secrets — our bond is unbreakable. No distance, no time, nothing can ever change what we mean to each other. 🤗💝',
  },
  {
    id: 5,
    color: 'linear-gradient(135deg, #00d2ff, #3a7bd5)',
    ribbon: '#ffd700',
    emoji: '🎂',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814a69f?w=500&h=500&fit=crop',
    title: 'Birthday Crown',
    message:
      "Today you wear the crown! 👑 You've grown into the most amazing person and I couldn't be prouder. Here's to 20 years of being absolutely wonderful. Cheers to many more! 🥂🎉",
  },
  {
    id: 6,
    color: 'linear-gradient(135deg, #c44dff, #ff6b9d)',
    ribbon: '#00d2ff',
    emoji: '🎆',
    image: 'https://images.unsplash.com/photo-1519415852116-da7d5e94fdb8?w=500&h=500&fit=crop',
    title: 'Forever & Always',
    message:
      "No matter where life takes us, you'll always have a piece of my heart. Thank you for being you. Happy 20th Birthday! I love you more than words can say. 💖🎇✨",
  },
  {
    id: 7,
    color: 'linear-gradient(135deg, #f7971e, #ffd200)',
    ribbon: '#ff6b9d',
    emoji: '☀️',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
    title: 'My Sunshine',
    message:
      'You light up every room you walk into. Your smile is my favorite thing in this world. Never stop shining — the world needs your glow! ☀️💛',
  },
  {
    id: 8,
    color: 'linear-gradient(135deg, #11998e, #38ef7d)',
    ribbon: '#ffd700',
    emoji: '🌱',
    image: 'https://via.placeholder.com/500x500/4dc9f6/ffffff?text=Letter',
    title: 'Growth Together',
    message:
      'Watching you grow from a tiny troublemaker into this incredible human has been the greatest privilege. Here is to growing together, always. 🌿💚',
  },
  {
    id: 9,
    color: 'linear-gradient(135deg, #fc5c7d, #6a82fb)',
    ribbon: '#38ef7d',
    emoji: '🎵',
    image: 'https://images.unsplash.com/photo-1514502519975-7ba6f284a4b0?w=500&h=500&fit=crop',
    title: 'Our Playlist',
    message:
      'Every song reminds me of a moment with you — the car singalongs, the late-night jam sessions, the silly dance-offs. Our playlist is my most treasured collection. 🎶🎤',
  },
  {
    id: 10,
    color: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    ribbon: '#ffd700',
    emoji: '🦋',
    image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=500&fit=crop',
    title: 'Beautiful Soul',
    message:
      'You have the most beautiful soul I know. Kind, generous, funny, and fiercely loving. The world is lucky to have you — but not as lucky as I am. 🦋💜',
  },
  {
    id: 11,
    color: 'linear-gradient(135deg, #ff9966, #ff5e62)',
    ribbon: '#c44dff',
    emoji: '🔥',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=500&fit=crop',
    title: 'Unstoppable You',
    message:
      'At 20, you are unstoppable. Every dream you chase, every obstacle you crush — you do it with grace and fire. Keep burning bright! 🔥🚀',
  },
  {
    id: 12,
    color: 'linear-gradient(135deg, #667eea, #764ba2)',
    ribbon: '#ff9966',
    emoji: '📖',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&h=500&fit=crop',
    title: 'Our Story',
    message:
      'If our story was a book, it would be a bestseller — full of laughter, tears, plot twists, and the deepest love. Here is to writing many more chapters together. 📖✨',
  },
  {
    id: 13,
    color: 'linear-gradient(135deg, #f857a6, #ff5858)',
    ribbon: '#4dc9f6',
    emoji: '🏠',
    image: 'https://images.unsplash.com/photo-1495949109806-8bc02ecc8dc5?w=500&h=500&fit=crop',
    title: 'Home Is You',
    message:
      'Home is not a place — it is a feeling. And wherever you are, that is where I feel most at home. You are my comfort zone, my safe space, my person. 🏡💗',
  },
  {
    id: 14,
    color: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    ribbon: '#f857a6',
    emoji: '🧩',    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&h=500&fit=crop',    title: 'Missing Piece',
    message:
      'You complete our family puzzle in a way no one else could. Without you, nothing makes sense. You are the piece that holds us all together. 🧩💙',
  },
  {
    id: 15,
    color: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    ribbon: '#ffd700',
    emoji: '🌈',
    image: 'https://images.unsplash.com/photo-1509919886274-54ef83e63313?w=500&h=500&fit=crop',
    title: 'After Every Storm',
    message:
      'You taught me that after every storm, there is a rainbow. Thank you for being my rainbow on the darkest days. I love you endlessly. 🌈🤍',
  },
  {
    id: 16,
    color: 'linear-gradient(135deg, #fa709a, #fee140)',
    ribbon: '#43e97b',
    emoji: '🍰',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop',
    title: 'Sweet Memories',
    message:
      'Remember all the cakes we destroyed, the candles we blew out together, the wishes we made? Every birthday with you is sweeter than the last. 🍰🎂',
  },
  {
    id: 17,
    color: 'linear-gradient(135deg, #a8c0ff, #3f2b96)',
    ribbon: '#fee140',
    emoji: '🌙',
    image: 'https://images.unsplash.com/photo-1503891046810-b80d75dc686d?w=500&h=500&fit=crop',
    title: 'Midnight Talks',
    message:
      'Our midnight conversations, the secrets shared under the blanket, the whispered laughs — those are the moments I treasure most. Never stop talking to me. 🌙💫',
  },
  {
    id: 18,
    color: 'linear-gradient(135deg, #f6d365, #fda085)',
    ribbon: '#a8c0ff',
    emoji: '🛡️',
    image: 'https://images.unsplash.com/photo-1523365335684-37898b6baf30?w=500&h=500&fit=crop',
    title: 'Your Protector',
    message:
      'I may annoy you, tease you, and drive you crazy — but let anyone else try, and they will have to deal with me. I will always protect you. Always. 🛡️⚔️💖',
  },
  {
    id: 19,
    color: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
    ribbon: '#fda085',
    emoji: '✈️',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=500&fit=crop',
    title: 'Future Adventures',
    message:
      'The best adventures are still ahead of us. Road trips, travel plans, new experiences — I cannot wait to explore the world with you by my side. ✈️🗺️🌟',
  },
  {
    id: 20,
    color: 'linear-gradient(135deg, #ff6b9d, #ffd700, #c44dff)',
    ribbon: '#89f7fe',
    emoji: '👑',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&h=500&fit=crop',
    title: 'The Final Gift: My Heart',
    message:
      'This is my biggest gift — my whole heart, forever yours. Thank you for 20 years of being the most amazing sibling. I love you to the moon, the stars, and beyond. Happy Birthday! 👑🎆💖🎉✨',
  },
];

export default function GiftsPage() {
  const navigate = useNavigate();
  const [openedGifts, setOpenedGifts] = useState(new Set());
  const [celebrationMode, setCelebrationMode] = useState(false);

  const openGift = (id) => {
    if (openedGifts.has(id)) return;
    const next = new Set(openedGifts);
    next.add(id);
    setOpenedGifts(next);

    // Mini confetti burst
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#ff6b9d', '#c44dff', '#ffd700', '#4dc9f6'],
    });
  };

  // Trigger celebration when all gifts opened
  useEffect(() => {
    if (openedGifts.size === gifts.length && !celebrationMode) {
      setCelebrationMode(true);
      // Fireworks sequence
      const duration = 5000;
      const end = Date.now() + duration;
      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval);
          return;
        }
        confetti({
          particleCount: 80,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: Math.random(),
            y: Math.random() * 0.4,
          },
          colors: ['#ff6b9d', '#c44dff', '#ffd700', '#4dc9f6', '#ff6f61', '#00d2ff'],
          ticks: 60,
        });
      }, 300);
    }
  }, [openedGifts, celebrationMode]);

  return (
    <div className="gifts-page">
      <ParticlesBg count={45} color="rgba(196, 77, 255, 0.15)" />
      <FloatingHearts count={12} />

      <div className="gifts-container">
        <motion.div
          className="gifts-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="gifts-title">
            {celebrationMode ? '🎆 Celebration Time! 🎆' : 'Your Birthday Gifts'}
          </h1>
          <p className="gifts-subtitle">
            {celebrationMode
              ? 'All gifts unwrapped! Happy 20th Birthday! 🥳💖'
              : 'Click each gift box to reveal a special message 🎁'}
          </p>
          <div className="title-underline" />
          <p className="gifts-progress">
            {openedGifts.size} / {gifts.length} gifts opened
          </p>
        </motion.div>

        <motion.div
          className="gifts-grid"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {gifts.map((gift) => {
            const isOpen = openedGifts.has(gift.id);
            return (
              <motion.div
                key={gift.id}
                className="gift-card"
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } },
                }}
              >
                <div className="gift-card-inner">
                  {/* Image Section */}
                  <div className="gift-image-section" style={{ background: gift.color }}>
                    {isOpen ? (
                      <motion.img
                        src={gift.image}
                        alt={gift.title}
                        className="gift-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    ) : (
                      <div className="gift-emoji-display">{gift.emoji}</div>
                    )}
                    <div className="gift-image-overlay" />
                  </div>

                  {/* Content Section */}
                  <div className="gift-content-section">
                    <h3 className="gift-card-title">{gift.title}</h3>
                    <p className="gift-card-description">{gift.message}</p>
                    <motion.button
                      className={`gift-card-button ${isOpen ? 'opened' : ''}`}
                      onClick={() => openGift(gift.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isOpen}
                    >
                      {isOpen ? '✓ Opened' : 'Open Gift'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Celebration banner */}
        <AnimatePresence>
          {celebrationMode && (
            <motion.div
              className="celebration-banner"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <div className="celebration-content">
                <h2 className="celebration-text">🎉 Happy 20th Birthday! 🎉</h2>
                <p className="celebration-sub">
                  With all my love — your sibling forever 💕
                </p>
                <div className="celebration-emojis">
                  🎂🎈🎁🎊🥳🎆💖✨🌟👫
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="gifts-nav"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button className="nav-btn nav-btn-back" onClick={() => navigate('/memories')}>
            ← Memories
          </button>
          <button className="nav-btn nav-btn-next" onClick={() => navigate('/')}>
            🏠 Start Over
          </button>
        </motion.div>
      </div>
    </div>
  );
}

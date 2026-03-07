import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingHearts from '../components/FloatingHearts';
import ParticlesBg from '../components/ParticlesBg';
import './QuotesPage.css';

const quotes = [
  {
    text: "Twenty looks good on you! Here's to the next chapter of adventures, laughter, and dreams coming true.",
    emoji: '🎂',
  },
  {
    text: 'A sister/brother like you is a gift that keeps on giving — your love, your support, your crazy humor. Happy 20th!',
    emoji: '💝',
  },
  {
    text: "Growing up together was the best part of my life. Turning 20 is just the beginning of your most amazing years.",
    emoji: '🌟',
  },
  {
    text: 'You went from stealing my toys to stealing my heart every single day. Happy Birthday to the best sibling ever!',
    emoji: '🎁',
  },
  {
    text: "No matter how old we get, you'll always be my favorite person to annoy and love unconditionally. Cheers to 20!",
    emoji: '🥂',
  },
  {
    text: 'Siblings by blood, best friends by choice. Here\u2019s to 20 years of irreplaceable memories and a lifetime more.',
    emoji: '💖',
  },
  {
    text: "At 20, the world is yours. But remember — no matter where life takes you, I'll always have your back.",
    emoji: '🌍',
  },
  {
    text: "You are not just a year older — you are braver, wiser, and even more wonderful. Proud of the person you've become.",
    emoji: '✨',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

export default function QuotesPage() {
  const navigate = useNavigate();

  return (
    <div className="quotes-page">
      <ParticlesBg count={40} color="rgba(255, 107, 157, 0.2)" />
      <FloatingHearts count={18} />

      <div className="quotes-container">
        <motion.div
          className="quotes-header"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="quotes-title">Birthday Wishes</h1>
          <p className="quotes-subtitle">Words from the heart for your special day 💕</p>
          <div className="title-underline" />
        </motion.div>

        <motion.div
          className="quotes-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              className="quote-card"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="quote-emoji">{q.emoji}</div>
              <div className="quote-mark">"</div>
              <p className="quote-text">{q.text}</p>
              <div className="quote-mark quote-mark-end">"</div>
              <div className="quote-glow" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="quotes-nav"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <button className="nav-btn nav-btn-back" onClick={() => navigate('/')}>
            ← Back
          </button>
          <button className="nav-btn nav-btn-next" onClick={() => navigate('/memories')}>
            📸 Memories →
          </button>
        </motion.div>
      </div>
    </div>
  );
}

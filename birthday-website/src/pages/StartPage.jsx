import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Balloons from '../components/Balloons';
import Confetti from '../components/Confetti';
import ParticlesBg from '../components/ParticlesBg';
import './StartPage.css';

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="start-page">
      <ParticlesBg count={60} />
      <Balloons count={14} />
      <Confetti active density={50} />

      {/* Glowing orbs background */}
      <div className="glow-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <motion.div
        className="start-content"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Cake animation */}
        <motion.div
          className="cake-wrapper"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="birthday-cake">
            <div className="candle-row">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="candle">
                  <div className="flame">
                    <div className="flame-inner" />
                  </div>
                </div>
              ))}
            </div>
            <div className="cake-tier cake-top">
              <div className="frosting frosting-top" />
            </div>
            <div className="cake-tier cake-middle">
              <div className="frosting frosting-mid" />
              <div className="cake-decoration">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="cake-dot" />
                ))}
              </div>
            </div>
            <div className="cake-tier cake-bottom">
              <div className="frosting frosting-bottom" />
              <div className="cake-decoration">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className="cake-dot cake-dot-alt" />
                ))}
              </div>
            </div>
            <div className="cake-plate" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="start-title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Happy 20th Birthday!
        </motion.h1>

        <motion.p
          className="start-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          🎉 A celebration of love, joy & beautiful memories 🎉
        </motion.p>

        {/* Sparkle ring */}
        <motion.div className="sparkle-ring">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="sparkle-star"
              style={{ '--i': i }}
            >
              ✦
            </span>
          ))}
        </motion.div>

        {/* Get Started Button */}
        <motion.button
          className="get-started-btn"
          onClick={() => navigate('/quotes')}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="btn-text">🎂 Get Started</span>
          <span className="btn-glow" />
        </motion.button>

        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="scroll-emoji">🎈🎁🎊</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

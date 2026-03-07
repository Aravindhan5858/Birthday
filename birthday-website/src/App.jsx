import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MusicPlayer from './components/MusicPlayer';
import StartPage from './pages/StartPage';
import QuotesPage from './pages/QuotesPage';
import MemoriesPage from './pages/MemoriesPage';
import GiftsPage from './pages/GiftsPage';

const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      <MusicPlayer />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<AnimatedPage><StartPage /></AnimatedPage>}
          />
          <Route
            path="/quotes"
            element={<AnimatedPage><QuotesPage /></AnimatedPage>}
          />
          <Route
            path="/memories"
            element={<AnimatedPage><MemoriesPage /></AnimatedPage>}
          />
          <Route
            path="/gifts"
            element={<AnimatedPage><GiftsPage /></AnimatedPage>}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

import { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button className="music-player-btn" onClick={toggle} title={playing ? 'Pause Music' : 'Play Music'}>
      <span className={`music-icon ${playing ? 'playing' : ''}`}>
        {playing ? '🎵' : '🔇'}
      </span>
      <span className="music-label">{playing ? 'Pause' : 'Music'}</span>
      {playing && (
        <div className="music-bars">
          <span /><span /><span /><span />
        </div>
      )}
    </button>
  );
}

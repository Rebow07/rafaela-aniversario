import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { config, createMediaSequence, getRandomMessage } from "../lib/config";

interface SlideshowProps {
  onComplete?: () => void;
}

export default function Slideshow({ onComplete }: SlideshowProps) {
  const mediaSequence = createMediaSequence() || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [message, setMessage] = useState<string>(() => getRandomMessage());
  const audioRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentMedia = mediaSequence[currentIndex];
  const isVideo = currentMedia?.type === "video";

  useEffect(() => {
    if (!isPlaying) return;

    const duration = isVideo ? 8000 : config.slideShowDuration;

    timerRef.current = setTimeout(() => {
      if (currentIndex < mediaSequence.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setMessage(getRandomMessage());
        setShowMessage(true);
      } else {
        setIsPlaying(false);
        onComplete?.();
      }
    }, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isPlaying, isVideo, mediaSequence.length, onComplete]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      if (isPlaying && !isMuted) {
        audioRef.current.play().catch(() => {
          // Autoplay foi bloqueado pelo navegador
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isMuted]);

  const handleNext = () => {
    if (currentIndex < mediaSequence.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setMessage(() => getRandomMessage());
      setShowMessage(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setMessage(() => getRandomMessage());
      setShowMessage(true);
    }
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        {currentMedia && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: config.transitionDuration / 1000 }}
            className="absolute inset-0"
          >
            {isVideo ? (
              <video
                src={currentMedia.url}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop={false}
              />
            ) : (
              <img
                src={currentMedia.url}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            )}

            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mensagem de Parabéns */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onAnimationComplete={() => {
              setTimeout(() => setShowMessage(false), 2000);
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="text-center px-4">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground drop-shadow-lg">
                {message}
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controles */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 z-20">
        <div className="flex items-center justify-between gap-4 max-w-4xl mx-auto flex-wrap">
          {/* Botões de navegação */}
          <div className="flex gap-3 md:gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span className="text-foreground text-lg">←</span>
            </button>

            <button
              onClick={handleTogglePlay}
              className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-all"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-foreground" />
              ) : (
                <Play className="w-5 h-5 text-foreground" />
              )}
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === mediaSequence.length - 1}
              className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span className="text-foreground text-lg">→</span>
            </button>
          </div>

          {/* Contador */}
          <div className="text-foreground/70 font-body text-xs md:text-sm whitespace-nowrap">
            {currentIndex + 1} / {mediaSequence.length}
          </div>

          {/* Volume */}
          <button
            onClick={handleToggleMute}
            className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-all"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-foreground" />
            ) : (
              <Volume2 className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Barra de progresso */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20">
        <motion.div
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentIndex + 1) / mediaSequence.length) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
          className="h-full bg-primary"
        />
      </div>

      {/* Logo KL */}
      <a
        href="https://www.linkedin.com/in/kelvin-loureiro-6a0714149"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 logo-kl"
        title="Criado por Kelvin Loureiro"
      >
        <span className="logo-kl-text">KL</span>
      </a>

      {/* Áudio de fundo */}
      <audio
        ref={audioRef}
        src={config.backgroundMusic}
        loop
      />
    </div>
  );
}

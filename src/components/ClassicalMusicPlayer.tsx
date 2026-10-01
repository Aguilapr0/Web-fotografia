import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, SkipForward, ChevronUp, ChevronDown } from 'lucide-react';

interface ClassicalTrack {
  id: string;
  title: string;
  composer: string;
  url: string;
  duration: string;
}

const CLASSICAL_PLAYLIST: ClassicalTrack[] = [
  {
    id: 'debussy',
    title: 'Clair de Lune',
    composer: 'Claude Debussy',
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/2/29/Debussy_-_Clair_de_Lune.ogg/Debussy_-_Clair_de_Lune.ogg.mp3',
    duration: '5:04',
  },
  {
    id: 'satie',
    title: 'Gymnopédie No. 1',
    composer: 'Erik Satie',
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/e0/Erik_Satie_-_Gymnopedie_No._1.ogg/Erik_Satie_-_Gymnopedie_No._1.ogg.mp3',
    duration: '3:08',
  },
  {
    id: 'beethoven',
    title: 'Claro de Luna (Sonata No. 14)',
    composer: 'Ludwig van Beethoven',
    url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/eb/Beethoven_Moonlight_1st_movement.ogg/Beethoven_Moonlight_1st_movement.ogg.mp3',
    duration: '5:15',
  },
];

export const ClassicalMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.65);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthIntervalRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const currentTrack = CLASSICAL_PLAYLIST[currentTrackIndex];

  // Web Audio API Fallback: Plays soft classical acoustic piano arpeggios if audio file is offline/blocked
  const startSynthFallback = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Satie / Debussy chord notes in Hz (G major / D minor serene progression)
      const notes = [261.63, 329.63, 392.00, 493.88, 392.00, 329.63, 293.66, 349.23, 440.00, 523.25, 440.00, 349.23];
      let noteIndex = 0;

      if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);

      synthIntervalRef.current = window.setInterval(() => {
        if (!ctx || ctx.state !== 'running') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[noteIndex % notes.length], ctx.currentTime);

        const now = ctx.currentTime;
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.08 * (isMuted ? 0 : volume), now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 2.6);

        noteIndex++;
      }, 1200);
    } catch {
      // Audio context not allowed or supported
    }
  };

  const stopSynthFallback = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  const togglePlay = () => {
    setHasInteracted(true);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      stopSynthFallback();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If network error, start peaceful classical synthesizer fallback
          startSynthFallback();
          setIsPlaying(true);
        });
    }
  };

  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % CLASSICAL_PLAYLIST.length;
    setCurrentTrackIndex(nextIndex);
    if (isPlaying && audioRef.current) {
      setTimeout(() => {
        audioRef.current?.play().catch(() => startSynthFallback());
      }, 100);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    return () => {
      stopSynthFallback();
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack.url}
        preload="metadata"
        onEnded={handleNextTrack}
        onError={() => {
          if (isPlaying) {
            startSynthFallback();
          }
        }}
      />

      {/* REPRODUCTOR FLOTANTE DE MÚSICA CLÁSICA */}
      <aside
        className="fixed bottom-4 right-4 z-40 transition-all duration-300 max-w-sm sm:max-w-md w-[calc(100vw-2rem)] sm:w-auto"
        aria-label="Reproductor de música clásica de fondo"
      >
        <div className="bg-[#FAF8F5] border border-[#1F1F1F]/20 rounded-2xl shadow-xl p-3.5 sm:p-4 backdrop-blur-md space-y-3">
          {/* Fila principal y visible siempre */}
          <div className="flex items-center justify-between gap-3">
            {/* Información del tema y animación */}
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isPlaying ? 'bg-[#1F1F1F] text-[#FAF8F5]' : 'bg-[#1F1F1F]/10 text-[#1F1F1F]'
                }`}
              >
                <Music className={`w-5 h-5 ${isPlaying ? 'animate-bounce' : ''}`} aria-hidden="true" />
              </div>

              <div className="flex flex-col min-w-0 pr-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1F1F1F]/60 flex items-center gap-1.5">
                  <span>Música clásica de fondo</span>
                  {isPlaying && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E07A1F] animate-ping" />
                  )}
                </span>
                <span className="text-sm font-serif font-bold text-[#1F1F1F] truncate leading-tight">
                  {currentTrack.title}
                </span>
                <span className="text-xs text-[#1F1F1F]/75 truncate">
                  {currentTrack.composer}
                </span>
              </div>
            </div>

            {/* Controles rápidos (Play/Pause y desplegar) */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={togglePlay}
                className="min-h-[48px] min-w-[48px] px-3.5 py-2 bg-[#E07A1F] text-[#FAF8F5] font-semibold text-sm rounded-lg hover:bg-[#C45F0F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] flex items-center justify-center gap-1.5 shadow-sm"
                aria-label={isPlaying ? 'Pausar música clásica' : 'Reproducir música clásica'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" aria-hidden="true" />
                    <span className="hidden sm:inline">Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" aria-hidden="true" />
                    <span className="hidden sm:inline">Escuchar</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-[#1F1F1F]/70 hover:bg-[#1F1F1F]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F]"
                aria-label={isExpanded ? 'Contraer controles de audio' : 'Expandir controles de audio'}
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <ChevronUp className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Panel desplegable con volumen y selector de temas */}
          {isExpanded && (
            <div className="pt-2 border-t border-[#1F1F1F]/10 space-y-3">
              {/* Control de volumen */}
              <div className="flex items-center gap-3 px-1">
                <button
                  onClick={toggleMute}
                  className="text-[#1F1F1F]/80 hover:text-[#1F1F1F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A1F] rounded p-1"
                  aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-red-600" aria-hidden="true" />
                  ) : (
                    <Volume2 className="w-4 h-4" aria-hidden="true" />
                  )}
                </button>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1.5 bg-[#1F1F1F]/20 rounded-lg appearance-none cursor-pointer accent-[#E07A1F]"
                  aria-label="Control de volumen"
                />

                <span className="text-xs font-mono text-[#1F1F1F]/70 w-8 text-right">
                  {Math.round((isMuted ? 0 : volume) * 100)}%
                </span>
              </div>

              {/* Lista de temas clásicos para alternar */}
              <div className="space-y-1 pt-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1F1F1F]/60 px-1">
                  Piezas clásicas disponibles:
                </span>
                <div className="space-y-1">
                  {CLASSICAL_PLAYLIST.map((track, idx) => {
                    const isCurrent = idx === currentTrackIndex;
                    return (
                      <button
                        key={track.id}
                        onClick={() => {
                          setCurrentTrackIndex(idx);
                          setHasInteracted(true);
                          if (audioRef.current) {
                            setTimeout(() => {
                              audioRef.current?.play().catch(() => startSynthFallback());
                              setIsPlaying(true);
                            }, 50);
                          }
                        }}
                        className={`w-full px-2.5 py-1.5 rounded-md text-left text-xs flex items-center justify-between transition-colors ${
                          isCurrent
                            ? 'bg-[#1F1F1F]/10 font-bold text-[#1F1F1F]'
                            : 'hover:bg-[#1F1F1F]/5 text-[#1F1F1F]/80'
                        }`}
                      >
                        <span className="truncate pr-2">
                          {idx + 1}. {track.title} · {track.composer}
                        </span>
                        <span className="font-mono text-[11px] text-[#1F1F1F]/60 shrink-0">
                          {track.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Botón siguiente pista */}
              <div className="pt-1 flex justify-end">
                <button
                  onClick={handleNextTrack}
                  className="text-xs font-medium text-[#E07A1F] hover:underline flex items-center gap-1 min-h-[36px] px-2"
                >
                  <span>Siguiente obra clásica</span>
                  <SkipForward className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}

          {/* Mensaje sutil si aún no ha reproducido */}
          {!hasInteracted && !isPlaying && (
            <p className="text-[11px] text-[#1F1F1F]/60 text-center pt-0.5">
              Presiona <strong>Escuchar</strong> para acompañar tu estudio con música clásica.
            </p>
          )}
        </div>
      </aside>
    </>
  );
};

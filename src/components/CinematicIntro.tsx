import React, { useEffect, useState } from 'react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [word, setWord] = useState<string>('');
  const [showWord, setShowWord] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const words = ['こんにちは。', 'Hello.', 'Halo.', 'HANIF DAFFA DZULFAHMI'];
    let idx = 0;
    let timer1: number;
    let timer2: number;
    let timer3: number;

    const runStep = () => {
      if (idx >= words.length) {
        setFadeOut(true);
        timer3 = setTimeout(() => {
          setHidden(true);
          onComplete();
        }, 900);
        return;
      }

      setWord(words[idx]);
      setShowWord(true);
      setProgress((idx + 1) * 25);

      timer1 = setTimeout(() => {
        setShowWord(false);
        idx++;
        timer2 = setTimeout(runStep, 320);
      }, 1100);
    };

    const startTimer = setTimeout(runStep, 400);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      id="intro"
      className={fadeOut ? 'fade-out' : ''}
      onClick={() => {
        setFadeOut(true);
        setTimeout(() => {
          setHidden(true);
          onComplete();
        }, 300);
      }}
      title="Click to skip"
    >
      <p id="intro-word" className={`intro-word ${showWord ? 'show' : ''}`}>
        {word}
      </p>
      <div className="intro-progress">
        <div id="intro-bar" className="intro-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

import React, { useEffect, useState, forwardRef } from 'react';

const DecryptedText = forwardRef(
  (
    {
      text = '',
      duration = 1500,
      interval = 50,
      characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*',
      className = '',
      encryptedClassName = 'text-gray-400',
    },
    ref
  ) => {
    const [displayText, setDisplayText] = useState('');
    const [revealed, setRevealed] = useState([]);

    useEffect(() => {
      let frame = 0;
      const totalFrames = Math.ceil(duration / interval);
      const textArray = text.split('');
      let animation;

      animation = setInterval(() => {
        const progress = frame / totalFrames;
        const revealCount = Math.floor(progress * text.length);

        const nextText = textArray.map((char, idx) => {
          if (idx < revealCount) return char;
          if (char === ' ') return ' ';
          return characters[Math.floor(Math.random() * characters.length)];
        });

        setDisplayText(nextText.join(''));
        setRevealed(textArray.map((_, i) => i < revealCount));
        frame++;

        if (frame > totalFrames) {
          clearInterval(animation);
          setDisplayText(text);
          setRevealed(textArray.map(() => true));
        }
      }, interval);

      return () => clearInterval(animation);
    }, [text, duration, interval, characters]);

    return (
      <span ref={ref} className={className}>
        {displayText.split('').map((char, idx) => (
          <span
            key={idx}
            className={revealed[idx] ? '' : encryptedClassName}
          >
            {char}
          </span>
        ))}
      </span>
    );
  }
);

export default DecryptedText;

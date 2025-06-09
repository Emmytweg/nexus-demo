'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './LiquidCursor.module.css';

const LiquidCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const pulse = pulseRef.current;

    if (!cursor || !follower || !pulse) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    gsap.set(cursor, { x: pos.x, y: pos.y });
    gsap.set(follower, { x: pos.x, y: pos.y });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Pulse on click
      pulse.style.left = `${e.clientX - 25}px`;
      pulse.style.top = `${e.clientY - 25}px`;
      pulse.classList.add(styles.pulse);
      setTimeout(() => pulse.classList.remove(styles.pulse), 400);
    });

    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;
      gsap.set(cursor, { x: mouse.x, y: mouse.y });
      gsap.set(follower, { x: pos.x, y: pos.y });
    });

    return () => {
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <>
      <div className={styles.cursor} ref={cursorRef}></div>
      <div className={styles.follower} ref={followerRef}></div>
      <div className={styles.pulseContainer}>
        <div className={styles.pulse} ref={pulseRef}></div>
      </div>
      <svg className="hidden">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  
                    0 1 0 0 0  
                    0 0 1 0 0  
                    0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
    </>
  );
};

export default LiquidCursor;

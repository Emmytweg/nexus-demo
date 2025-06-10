'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate text in
    tl.fromTo(textRef.current, {
      y: 20,
      opacity: 0,
      scale: 0.8
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate orb
    tl.to(orbRef.current, {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      duration: 1
    }, "<");

    // Listen for full window load
    const handleWindowLoad = () => {
      const fadeOutTl = gsap.timeline();

      fadeOutTl.to(loaderRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 1,
        onComplete: () => {
          if (loaderRef.current) {
            (loaderRef.current as HTMLElement).style.display = 'none';
          }
        }
      });
    };

    window.addEventListener('load', handleWindowLoad);

    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center text-white transition-opacity duration-500"
    >
      <div className="text-center">
        <div
          ref={orbRef}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-blue-500 blur-md mb-4 animate-pulse"
        ></div>
        <h1
          ref={textRef}
          className="text-4xl font-extrabold tracking-widest"
        >
          NEXUS
        </h1>
        <p className="text-sm mt-2 tracking-widest text-gray-400">
          Empowering Connections...
        </p>
      </div>
    </div>
  );
};

export default Preloader;

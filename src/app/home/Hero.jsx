'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';
import DecryptedText from './../components/DecryptedText';

const floatingTags = [
  'Healthcare modernization',
  'Electronic Health Records (EHR)',
  'Data Analysis',
  'Interoperability',
  'Digital Health',
  'Healthcare AI',
  'Telemedicine',
  'Medical IoT',
  'Blockchain Health',
  'Cloud EHR',
  'Remote Monitoring',
  'Big Data',
  'Population Health',
  'Health Analytics',
  'Predictive Care',
];

const Hero = () => {
  const containerRef = useRef(null);
  const tagRefs = useRef([]);
  const decryptedTextRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      tl.from(
        [
          decryptedTextRefs.current[0],
          decryptedTextRefs.current[1],
          decryptedTextRefs.current[2],
          ...containerRef.current.querySelectorAll('button'),
        ],
        {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.5'
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up animations on component unmount
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const centerElement = containerRef.current?.querySelector('#headline-center');
      if (!centerElement) return;

      const centerRect = centerElement.getBoundingClientRect();
      const centerX = centerRect.left + centerRect.width / 2;
      const centerY = centerRect.top + centerRect.height / 2;

      tagRefs.current.forEach((el, index) => {
        if (!el) return;

        const orbitSide = window.innerWidth > 768 ? 1000 : 300;
        const baseAngle = (index / tagRefs.current.length) * Math.PI * 2;

        gsap.set(el, {
          x: centerX + orbitSide * Math.cos(baseAngle),
          y: centerY + orbitSide * Math.sin(baseAngle),
          opacity: 0.3,
          filter: 'blur(6px)',
          scale: 0.95,
        });

        gsap.to({}, {
          duration: 30 + Math.random() * 10,
          repeat: -1,
          ease: 'none',
          onUpdate: () => {
            const time = performance.now() / 20000;
            const angle = time + index * 0.2;

            const x = centerX + orbitSide * Math.cos(angle);
            const y = centerY + orbitSide * Math.sin(angle);

            const depthFactor = (Math.cos(angle) + 1) / 2;
            const blur = 6 - 5 * depthFactor;
            const opacity = 0.3 + 0.6 * depthFactor;

            gsap.set(el, {
              x,
              y,
              opacity,
              filter: `blur(${blur}px)`,
            });
          },
        });
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up animations on component unmount
  }, []);

  return (
    <section
      ref={containerRef}
      className="md:min-h-[100svh] h-[40svh]   w-full  p-8 -mt-10  bg-gradient-to-r from-blue-200 via-white to-purple-200 flex items-center justify-center text-center overflow-hidden"
    >
      {floatingTags.map((tag, index) => (
        <div
          key={index}
          ref={(el) => (tagRefs.current[index] = el)}
          className="absolute bg-white bg-opacity-70 text-sm text-gray-800 px-3 py-1 rounded-full border border-blue-300 shadow-sm backdrop-blur-md whitespace-nowrap pointer-events-none"
        >
          {tag}
        </div>
      ))}

      <div id="headline-center" className="z-10 relative top-5 w-full px-4 sm:px-6 md:px-10">
        <DecryptedText
          ref={(el) => (decryptedTextRefs.current[0] = el)}
          characters="YOUR ENEMY"
          text="YOUR PARTNER"
          className={`${styles.title} text-[clamp(24px,6vw,64px)] font-extrabold text-gray-900 leading-tight w-fit`}
        />
        <br />

        <DecryptedText
          ref={(el) => (decryptedTextRefs.current[1] = el)}
          characters="IN HEALTH-TECH"
          text=" IN HEALTH-TECH"
          className={`${styles.title} text-[clamp(24px,6vw,64px)] sm:text-[72px] md:text-6xl font-extrabold text-gray-900 md:leading-[64px] tracking-tight `}
        />
        <br />

        <DecryptedText
          ref={(el) => (decryptedTextRefs.current[2] = el)}
          characters="NONSENSE"
          text="EXCELLENCE"
          className="text-[clamp(24px,6vw,64px)] md:leading-[96px] md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#000] via-[#00B5FF] to-[#000] drop-shadow-[0_0_10px_rgba(2,142,200,0.5)]"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="bg-[#00aeef] text-white px-6 py-3 border rounded-full font-medium w-full sm:max-w-[300px]">
            Contact us
          </button>
          <button className="border w-full sm:max-w-[300px] border-[#00AEEF] text-blue-500 hover:bg-blue-50 font-medium px-6 py-3 rounded-full">
            About NexusData intelligence →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

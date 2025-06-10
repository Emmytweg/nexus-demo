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
const textRef = useRef()

// useEffect(()=> {
//     gsap.to(textRef.current, {
//         textShadow: ' 0 0 10px #028EC8',
//         repeat: -1,
//         yoyo: true,
//         duration: .5,
//         ease: 'power1.inOut'
//     })
// }, [])

useEffect(() => {
  // Existing orbit animation...

  // Hero entrance animation
  const tl = gsap.timeline({ delay: 0.2 });

  tl.from(containerRef.current, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });

  tl.from(
    containerRef.current.querySelectorAll('h1, button, .DecryptedText'),
    {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
    },
    '-=0.5'
  );
}, []);

  useEffect(() => {
    const centerElement = containerRef.current?.querySelector('#headline-center');
    if (!centerElement) return;

    const centerRect = centerElement.getBoundingClientRect();
    const centerX = centerRect.left + centerRect.width / 2;
    const centerY = centerRect.top + centerRect.height / 2;

    tagRefs.current.forEach((el, index) => {
      if (!el) return;

      const orbitSide = 1000 // alternate radius: right/left
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

          // Depth perception: sharp when front, blurry when back
          const depthFactor = (Math.cos(angle) + 1) / 2;
          const blur = 6 - 5 * depthFactor; // 6px (back) to 1px (front)
          const opacity = 0.3 + 0.6 * depthFactor; // 0.3 to 0.9

          gsap.set(el, {
            x,
            y,
            opacity,
            filter: `blur(${blur}px)`,
          });
        },
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className={`${styles.mainCon}  h-[70vh] sm:h-screen  relative w-full min-h-screen bg-gradient-to-r from-blue-100 via-white to-purple-100 px-4 flex items-center justify-center text-center overflow-hidden`}
    >
      {/* Floating Tags */}
      {floatingTags.map((tag, index) => (
        <div
          key={index}
          ref={(el) => (tagRefs.current[index] = el)}
          className="absolute bg-white bg-opacity-70 text-sm text-gray-800 px-3 py-1 rounded-full border border-blue-300 shadow-sm backdrop-blur-md whitespace-nowrap pointer-events-none"
        >
          {tag}
        </div>
      ))}

      {/* Headline & CTA */}
      
      <div id="headline-center" className="z-10">
      <h1>  <DecryptedText speed={30}
        characters='YOUR ENEMY ' text='YOUR PARTNER '
          className={`${styles.title} sm:text-5xl md:text-6xl font-extrabold text-gray-900 md:leading-[32px] tracking-tight w-[50px]`}
        /></h1>
        <h1>
         <DecryptedText speed={30}
        characters='IN HEALTH-TECH' text=' IN HEALTH-TECH'
          className={`${styles.title} sm:text-3xl md:text-6xl font-extrabold text-gray-900 md:leading-[64px] tracking-tight `}
        /></h1>
        
        <DecryptedText
  ref={textRef}
  className={`${styles.title} md:leading-[96px]  sm:text-3xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#000] via-[#00B5FF] to-[#000] drop-shadow-[0_0_10px_rgba(2,142,200,0.5)]`}
  text="EXCELLENCE"
  characters="NONSENSE"
/>

        


        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="sm:w-[310px] bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow transition">
            Contact us
          </button>
          <button className="border sm:w-96 border-blue-500 text-blue-500 hover:bg-blue-50 font-medium px-6 py-3 rounded-full transition">
            About NexusData intelligence →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

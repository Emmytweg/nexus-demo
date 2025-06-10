'use client';

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import styles from './Nav.module.css';
import { gsap } from 'gsap';
import {
  FaHome,
  FaServicestack,
  FaSchool,
  FaPeopleCarry,
  FaDiscourse,
  FaBoxOpen,
  FaDice,
  FaHeart,
  FaShoppingCart,
  FaArrowDown,
} from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarRef = useRef(null);

  useEffect(() => {
    if (sideBarRef.current) {
      const tl = gsap.timeline();

      if (isOpen) {
        tl.to(sideBarRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          pointerEvents: 'auto',
        })
          .from('.nav-link', {
            x: -40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.out',
          }, "-=0.3")
          .fromTo('.nav-icon', 
            { scale: 0.6, rotate: -10, opacity: 0 },
            { scale: 1, rotate: 0, opacity: 1, stagger: 0.1, ease: 'back.out(1.7)', duration: 0.4 },
            "-=0.6"
          );
      } else {
        tl.to(sideBarRef.current, {
          y: '100%',
          opacity: 0,
          duration: 0.4,
          ease: 'power3.in',
          onComplete: () => {
if (sideBarRef.current) {
  sideBarRef.current.style.pointerEvents = 'none';
}
          },
        });
      }
    }
  }, [isOpen]);

  // idle icon pulse effect
  useEffect(() => {
    const pulse = gsap.to('.nav-icon', {
      scale: 1.05,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: 'sine.inOut',
    });

    return () => pulse.kill(); // cleanup
  }, []);

  const openSideBar = () => {
    setIsOpen(!isOpen);
  };

  const NavContents = [
    { label: 'Home', icons: <FaHome />, link: '/' },
    { label: 'Services', icons: <FaServicestack />, link: '/services' },
    { label: 'Academy', icons: <FaSchool />, link: '/academy' },
    { label: 'About Us', icons: <FaPeopleCarry />, link: '/about-us' },
    { label: 'NDI Blog', icons: <FaDiscourse />, link: '/ndi-blog' },
    { label: 'NexaVida+', icons: <FaDice />, link: '/nexavida' },
    { label: 'Products', icons: <FaBoxOpen />, link: '/products' },
  ];

  return (
    <>
      <div className={styles.hamburgerCircle}>
        <HiMenu onClick={openSideBar} className='cursor-pointer fixed bottom-0 left-12 top-[85%]  sm:h-10 sm:w-10 md:h-12 md:w-12' />
      </div>

      <aside
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        className={`${styles.card} sm:w-[280px] h-[100vh]`}
        ref={sideBarRef}
      >
        <div className={styles.bg}>
          <div className='flex items-center justify-center border border-[transparent] rounded-none overflow-none md:h-[70px] md:w-[70px] '>
            <img src='/nexus.png' alt='Nexus Logo' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>

          <hr style={{ width: '100%', borderColor: 'rgba(255,255,255,0.3)', margin: '16px 0' }} />

          <ul style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start', width: '100%', zIndex: 10, paddingLeft: 0 }} className='flex sm:items-center '>
            {NavContents.map((link, index) => (
              <li key={index} className="nav-link" style={{ width: '100%', listStyle: 'none' }}>
                <Link href={link.link} style={{ textDecoration: 'none', width: '100%' }}>
                  <div
                    className="group icon-container"
                    style={{
                      display: 'flex',
                      gap: 16,
                      alignItems: 'center',
                      opacity: 0.7,
                      transition: 'opacity 0.3s, transform 0.3s',
                      cursor: 'pointer',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.opacity = '0.7';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <span className='nav-icon glow' style={{ fontSize: 20 }}>{link.icons}</span>
                    <span className='hidden sm:inline' style={{ fontSize: 14, fontWeight: 500 }}>{link.label}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <hr style={{ width: '80%', borderColor: 'rgba(255,255,255,0.3)', margin: '16px 0' }} />
          <div className="flex gap-3 items-center mt-4 flex-wrap justify-center sm:justify-start sm:items-start">
           <div className="w-12 h-12 rounded-full bg-[#F93C65] opacity-50 flex justify-center items-center">
  <FaHeart className="text-white" />
</div>

            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#00ADEF', opacity: 0.5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <FaShoppingCart style={{ color: '#fff' }} />
            </div>
            <div style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'green' }}>
              <img src='/vercel.svg' alt='User' style={{ width: 24, height: 24 }} />
            </div>

            {/* <div
              className="magnetic"
              onMouseMove={(e) => {
                const btn = e.currentTarget;
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, {
                  x: x * 0.2,
                  y: y * 0.2,
                  ease: 'power2.out',
                  duration: 0.3,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.3 });
              }}
            >
              <button style={{
                background: '#F93C65',
                color: '#fff',
                borderRadius: '50px',
                padding: '10px 16px',
                border: 'none',
                marginLeft: 8,
                cursor: 'pointer'
              }}>
                Contact us
              </button>
            </div> */}
          </div>
        </div>
        <div className={styles.blob}></div>
      </aside>
    </>
  );
};

export default Nav;

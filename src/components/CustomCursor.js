'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const cursor = cursorRef.current;

    const half = cursor.offsetWidth / 2;
    const onMove = (e) => {
      cursor.style.transform = `translate(${e.clientX - half}px, ${e.clientY - half}px)`;
      cursor.style.opacity = '1';
    };

    const onLeave = () => { cursor.style.opacity = '0'; };
    const onEnter = () => { cursor.style.opacity = '1'; };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 rounded-full border-[3px] border-white/65 pointer-events-none opacity-0 transition-opacity duration-150"
      style={{
        zIndex: 9999,
        willChange: 'transform',
        boxShadow: '0 0 12px rgba(255,255,255,0.08)',
      }}
    />
  );
}

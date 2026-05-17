'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const cursor = cursorRef.current;

    const half = cursor.offsetWidth / 2;
    let isHovering = false;

    const onMove = (e) => {
      cursor.style.transform = `translate3d(${e.clientX - half}px, ${e.clientY - half}px, 0)`;
      cursor.style.opacity = '1';

      const nowHovering = !!e.target.closest('a, button, [role="button"], input, select, textarea, label, [tabindex]');
      if (nowHovering !== isHovering) {
        isHovering = nowHovering;
        cursor.style.backgroundColor = isHovering ? 'rgba(180, 180, 180, 0.45)' : '';
        cursor.style.borderColor    = isHovering ? 'rgba(210, 210, 210, 0.65)' : '';
      }
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
        transition: 'background-color 120ms ease, border-color 120ms ease',
      }}
    />
  );
}

'use client';
import { useEffect, useRef } from 'react';

export default function BlackHole() {
  const ref = useRef(null);

  useEffect(() => {
    let rafId;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const onMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth  - 0.5) * 20;
      targetY = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      if (ref.current) {
        ref.current.style.transform =
          `translate(calc(-50% + ${currentX.toFixed(2)}px), calc(-50% + ${currentY.toFixed(2)}px)) rotate(-22deg)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="bh-pulse absolute pointer-events-none select-none"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-22deg)',
        willChange: 'transform, opacity',
      }}
    >
      <svg
        width="640"
        height="640"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bhGlow" cx="50%" cy="54%" r="48%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="40%"  stopColor="#aaaaaa" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#080808" stopOpacity="0" />
          </radialGradient>
          <filter id="diskBlur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <filter id="haloBlur">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          {/* Lato lontano (dietro il BH): metà superiore del disco */}
          <clipPath id="farSide">
            <rect x="0" y="0" width="500" height="262" />
          </clipPath>
          {/* Lato vicino (davanti al BH): metà inferiore del disco */}
          <clipPath id="nearSide">
            <rect x="0" y="262" width="500" height="238" />
          </clipPath>
        </defs>

        {/* Alone esterno */}
        <ellipse cx="250" cy="268" rx="210" ry="65"
          fill="url(#bhGlow)" filter="url(#haloBlur)" />

        {/* ══ FAR SIDE — PRIMA del cerchio nero (va dietro) ══ */}

        {/* Gruppo C — anelli interni, fievoli */}
        <ellipse cx="250" cy="262" rx="114" ry="28" fill="none"
          stroke="white" strokeWidth="1.5" strokeOpacity="0.13"
          filter="url(#diskBlur)" clipPath="url(#farSide)" strokeDasharray="446 10">
          <animate attributeName="stroke-dashoffset" from="456" to="0" dur="7s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="122" ry="30" fill="none"
          stroke="white" strokeWidth="1.5" strokeOpacity="0.18"
          filter="url(#diskBlur)" clipPath="url(#farSide)" strokeDasharray="477 10">
          <animate attributeName="stroke-dashoffset" from="487" to="0" dur="8s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="132" ry="33" fill="none"
          stroke="white" strokeWidth="1.5" strokeOpacity="0.14"
          filter="url(#diskBlur)" clipPath="url(#farSide)" strokeDasharray="524 10">
          <animate attributeName="stroke-dashoffset" from="534" to="0" dur="9s" repeatCount="indefinite" />
        </ellipse>

        {/* Gruppo B — anelli principali, brillanti */}
        <ellipse cx="250" cy="262" rx="150" ry="37" fill="none"
          stroke="white" strokeWidth="2" strokeOpacity="0.27"
          filter="url(#diskBlur)" clipPath="url(#farSide)" strokeDasharray="587 10">
          <animate attributeName="stroke-dashoffset" from="597" to="0" dur="10s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="160" ry="40" fill="none"
          stroke="white" strokeWidth="3.5" strokeOpacity="0.46"
          filter="url(#diskBlur)" clipPath="url(#farSide)" strokeDasharray="627 10">
          <animate attributeName="stroke-dashoffset" from="637" to="0" dur="11s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="168" ry="42" fill="none"
          stroke="white" strokeWidth="3" strokeOpacity="0.38"
          filter="url(#diskBlur)" clipPath="url(#farSide)" strokeDasharray="659 10">
          <animate attributeName="stroke-dashoffset" from="669" to="0" dur="12s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="178" ry="44" fill="none"
          stroke="white" strokeWidth="2" strokeOpacity="0.25"
          filter="url(#diskBlur)" clipPath="url(#farSide)" strokeDasharray="697 10">
          <animate attributeName="stroke-dashoffset" from="707" to="0" dur="13s" repeatCount="indefinite" />
        </ellipse>

        {/* Gruppo A — anelli esterni, sfumati */}
        <ellipse cx="250" cy="262" rx="192" ry="47" fill="none"
          stroke="white" strokeWidth="1.5" strokeOpacity="0.18"
          filter="url(#diskBlur)" clipPath="url(#farSide)" strokeDasharray="752 10">
          <animate attributeName="stroke-dashoffset" from="762" to="0" dur="14s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="204" ry="50" fill="none"
          stroke="white" strokeWidth="1.5" strokeOpacity="0.14"
          filter="url(#diskBlur)" clipPath="url(#farSide)" strokeDasharray="799 10">
          <animate attributeName="stroke-dashoffset" from="809" to="0" dur="15s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="213" ry="52" fill="none"
          stroke="white" strokeWidth="1" strokeOpacity="0.11"
          filter="url(#diskBlur)" clipPath="url(#farSide)" strokeDasharray="834 10">
          <animate attributeName="stroke-dashoffset" from="844" to="0" dur="16s" repeatCount="indefinite" />
        </ellipse>

        {/* Event horizon */}
        <circle cx="250" cy="250" r="93" fill="#030303" />

        {/* ══ NEAR SIDE — DOPO il cerchio nero (rimane davanti) ══ */}

        {/* Gruppo C */}
        <ellipse cx="250" cy="262" rx="114" ry="28" fill="none"
          stroke="white" strokeWidth="1.5" strokeOpacity="0.22"
          filter="url(#diskBlur)" clipPath="url(#nearSide)" strokeDasharray="446 10">
          <animate attributeName="stroke-dashoffset" from="456" to="0" dur="7s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="122" ry="30" fill="none"
          stroke="white" strokeWidth="1.5" strokeOpacity="0.30"
          filter="url(#diskBlur)" clipPath="url(#nearSide)" strokeDasharray="477 10">
          <animate attributeName="stroke-dashoffset" from="487" to="0" dur="8s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="132" ry="33" fill="none"
          stroke="white" strokeWidth="1.5" strokeOpacity="0.24"
          filter="url(#diskBlur)" clipPath="url(#nearSide)" strokeDasharray="524 10">
          <animate attributeName="stroke-dashoffset" from="534" to="0" dur="9s" repeatCount="indefinite" />
        </ellipse>

        {/* Gruppo B */}
        <ellipse cx="250" cy="262" rx="150" ry="37" fill="none"
          stroke="white" strokeWidth="2" strokeOpacity="0.45"
          filter="url(#diskBlur)" clipPath="url(#nearSide)" strokeDasharray="587 10">
          <animate attributeName="stroke-dashoffset" from="597" to="0" dur="10s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="160" ry="40" fill="none"
          stroke="white" strokeWidth="3.5" strokeOpacity="0.80"
          filter="url(#diskBlur)" clipPath="url(#nearSide)" strokeDasharray="627 10">
          <animate attributeName="stroke-dashoffset" from="637" to="0" dur="11s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="168" ry="42" fill="none"
          stroke="white" strokeWidth="3" strokeOpacity="0.65"
          filter="url(#diskBlur)" clipPath="url(#nearSide)" strokeDasharray="659 10">
          <animate attributeName="stroke-dashoffset" from="669" to="0" dur="12s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="178" ry="44" fill="none"
          stroke="white" strokeWidth="2" strokeOpacity="0.42"
          filter="url(#diskBlur)" clipPath="url(#nearSide)" strokeDasharray="697 10">
          <animate attributeName="stroke-dashoffset" from="707" to="0" dur="13s" repeatCount="indefinite" />
        </ellipse>

        {/* Gruppo A */}
        <ellipse cx="250" cy="262" rx="192" ry="47" fill="none"
          stroke="white" strokeWidth="1.5" strokeOpacity="0.30"
          filter="url(#diskBlur)" clipPath="url(#nearSide)" strokeDasharray="752 10">
          <animate attributeName="stroke-dashoffset" from="762" to="0" dur="14s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="204" ry="50" fill="none"
          stroke="white" strokeWidth="1.5" strokeOpacity="0.24"
          filter="url(#diskBlur)" clipPath="url(#nearSide)" strokeDasharray="799 10">
          <animate attributeName="stroke-dashoffset" from="809" to="0" dur="15s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="250" cy="262" rx="213" ry="52" fill="none"
          stroke="white" strokeWidth="1" strokeOpacity="0.18"
          filter="url(#diskBlur)" clipPath="url(#nearSide)" strokeDasharray="834 10">
          <animate attributeName="stroke-dashoffset" from="844" to="0" dur="16s" repeatCount="indefinite" />
        </ellipse>

        {/* Fotone ring — statico */}
        <circle cx="250" cy="250" r="97" fill="none"
          stroke="white" strokeWidth="2.5" strokeOpacity="0.35" />
      </svg>
    </div>
  );
}

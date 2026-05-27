/**
 * About Page — Badge with lanyard strap visible from the top of the screen.
 *
 * Architecture:
 * - The Navigation component removes its solid background on the About page
 *   so the lanyard strap is visible through the transparent navbar area.
 * - The badge is pulled upward with a negative margin equal to the navbar
 *   height, so the top of the badge image aligns with the top of the viewport.
 * - The badge has z-index: 10, the navbar has z-index: 50.
 * - On mount, the badge drops in using a JS-driven spring simulation for
 *   buttery-smooth motion (inspired by Framer Motion spring physics).
 * - The spring animation waits for the badge image to be fully loaded and
 *   decoded before starting, ensuring smooth first-load experience.
 */
import { useState, useEffect, useRef, useCallback } from 'react';
import badgeImg from '../../assets/badge.png';

const BADGE_W = 381;
const BADGE_H = 589;

/* ─── Spring simulation ─── */

/**
 * Simulates a damped spring. Returns a function that, given elapsed time (s),
 * produces the current value in [0, 1] with natural overshoot and settle.
 *
 * Parameters mirror Framer Motion's spring:
 *   stiffness — spring constant (higher = snappier)
 *   damping   — friction (higher = less bounce)
 *   mass      — inertia  (higher = slower)
 */
function springValue(t: number, stiffness = 120, damping = 14, mass = 1): number {
  const omega0 = Math.sqrt(stiffness / mass);          // natural frequency
  const zeta   = damping / (2 * Math.sqrt(stiffness * mass)); // damping ratio

  if (zeta < 1) {
    // Under-damped — oscillates
    const omegaD = omega0 * Math.sqrt(1 - zeta * zeta);
    return 1 - Math.exp(-zeta * omega0 * t) *
      (Math.cos(omegaD * t) + (zeta * omega0 / omegaD) * Math.sin(omegaD * t));
  }
  // Critically/over-damped — no oscillation
  return 1 - (1 + omega0 * t) * Math.exp(-omega0 * t);
}

/**
 * Same spring but for the pendulum rotation.
 * Separate parameters let us tune the swing independently.
 */
function springRotation(t: number): number {
  const stiffness = 90;
  const damping = 10;
  const mass = 1.2;
  const amplitude = 8; // max degrees of swing

  const omega0 = Math.sqrt(stiffness / mass);
  const zeta = damping / (2 * Math.sqrt(stiffness * mass));
  const omegaD = omega0 * Math.sqrt(Math.max(0, 1 - zeta * zeta));

  // Oscillatory decay — starts at +amplitude and settles to 0
  return amplitude * Math.exp(-zeta * omega0 * t) * Math.sin(omegaD * t);
}

export function AboutPage() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef(0);
  const [navHeight, setNavHeight] = useState(0);
  const [ready, setReady] = useState(false);
  const animStartedRef = useRef(false);

  const animate = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const startTime = performance.now();
    const duration = 3000; // ms — generous window for the spring to settle

    const tick = (now: number) => {
      const t = (now - startTime) / 1000; // elapsed seconds

      // Spring progress for Y translation: 0 → 1 (with overshoot)
      const yProgress = springValue(t, 120, 14, 1);
      // Y goes from -105% to 0%
      const yPercent = -105 * (1 - yProgress);

      // Pendulum rotation (separate spring)
      const rotation = springRotation(t);

      // Opacity: quick fade-in over first 0.25s
      const opacity = Math.min(1, t / 0.25);

      el.style.transform = `translateY(${yPercent}%) rotate(${rotation}deg)`;
      el.style.opacity = String(opacity);

      if ((now - startTime) < duration) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Snap to final state
        el.style.transform = 'translateY(0%) rotate(0deg)';
        el.style.opacity = '1';
        el.style.willChange = 'auto';
      }
    };

    el.style.willChange = 'transform, opacity';
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  // Start animation only when the image is fully loaded + decoded
  const startAnimation = useCallback(() => {
    if (animStartedRef.current) return;
    animStartedRef.current = true;

    // Wait one frame for layout, then start the spring
    requestAnimationFrame(() => {
      setReady(true);
      animate();
    });
  }, [animate]);

  useEffect(() => {
    // Measure navbar
    const navEl = document.querySelector('.sticky.top-0.z-50');
    if (navEl) {
      setNavHeight(navEl.getBoundingClientRect().height);
    }

    // Check if the image is already loaded (e.g. preloaded by App.tsx)
    const imgEl = imgRef.current;
    if (imgEl && imgEl.complete && imgEl.naturalHeight > 0) {
      // Image already cached — decode it and start immediately
      if (imgEl.decode) {
        imgEl.decode().then(startAnimation).catch(startAnimation);
      } else {
        startAnimation();
      }
    }
    // If not loaded yet, the onLoad handler on the <img> will trigger it

    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, startAnimation]);

  const handleImageLoad = useCallback(() => {
    const imgEl = imgRef.current;
    if (imgEl && imgEl.decode) {
      // Decode off main thread, then animate
      imgEl.decode().then(startAnimation).catch(startAnimation);
    } else {
      startAnimation();
    }
  }, [startAnimation]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '80vh',
        position: 'relative',
        marginTop: navHeight > 0 ? -navHeight : -100,
        zIndex: 10,
      }}
    >
      {/* Animated dangling badge */}
      <div
        ref={wrapperRef}
        style={{
          transformOrigin: 'top center',
          width: BADGE_W,
          height: BADGE_H,
          position: 'relative',
          flexShrink: 0,
          // Hidden until the animation starts
          ...(!ready && {
            transform: 'translateY(-105%) rotate(0deg)',
            opacity: 0,
          }),
        }}
      >
        <img
          ref={imgRef}
          alt="Hi, I'm Sujay — Product Designer badge with lanyard"
          src={badgeImg}
          // @ts-ignore — fetchpriority is valid HTML but not in React's types yet
          fetchpriority="high"
          decoding="async"
          onLoad={handleImageLoad}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Bio text block */}
      <div
        className="w-full max-w-[624px] px-[24px] md:px-0 flex flex-col gap-[24px] text-[rgba(30,30,30,0.82)] font-['SF_Pro_Text:Regular',sans-serif] md:text-[20px] text-[16px] leading-[1.6]"
        style={{
          marginTop: 80,
          marginBottom: 120,
          opacity: ready ? 1 : 0,
          transition: 'opacity 800ms ease-out 600ms',
        }}
      >
        <p className="m-0">
          👋 Hey there! I'm Sujay, a product designer, creator, and strategic problem solver.
        </p>
        <p className="m-0">
          My journey into design began with creative experimentation - editing photos, producing music videos, and diving deep into game design and development. Building interactive experiences early on taught me how to capture attention and design for pure user engagement.
        </p>
        <p className="m-0">
          Today, I look beyond the screen. My past experiences have taught me to connect design decisions directly to business outcomes, product metrics, and sustainable growth. Currently, I'm focusing on designing for conversational AI.
        </p>
      </div>
    </div>
  );
}

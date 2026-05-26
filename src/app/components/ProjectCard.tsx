import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { type ProjectData } from '../../data/projects';

// Kolo — background + 3 Android phones
import imgKoloBg from "../../imports/Frame1410137295/903555daa4d15991cc51468d9441342131f10d0f.png";
import imgAndroid148 from "../../imports/Desktop3/c5bbaacf0ac72068973a6990ff43c1ad7ad4aadc.png";
import imgAndroid150 from "../../imports/Desktop3/7b5812de4c7048fd3e6554ff8ba579bbe9198755.png";
import imgAndroid147 from "../../imports/Desktop3/dd2bb63be0f0d6fdb565e96b59ef627cf846a780.png";

// GPay — 3 iPhones
import imgIPhone21 from "../../imports/Frame1410137314/f65a248edb446fd96d7e765dd405d499d63106cf.png";
import imgIPhonePNE from "../../imports/Frame1410137314/90d4ca5a34d56ef58af0cd9a1cd11cc3df5cee23.png";
import imgIPhone38 from "../../imports/Frame1410137314/d51c2f9765f3d9ea376f0fd1a94abbe1a2a9e2e3.png";

// Kirana — 2 Redmi phones (cropped mockup shots)
import imgKiranaA from "../../imports/Frame1410137317/7e8b0d71784be311fb7ef076f4b9d403063ca394.png";
import imgKiranaB from "../../imports/Frame1410137317/4b60d5646b0a04ee6080b390815fe25de6610fbc.png";

interface ProjectCardProps {
  project: ProjectData;
}

// All positions in this file use the 806px-wide Figma canvas coordinate system.
// The thumbnail div is w-full (≈640px) with overflow-hidden, so the 806px canvas
// is centered inside it — 83px clipped on each side.
// React converts numeric style values to px automatically.

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

// Separator line between company and category
function Pipe() {
  return (
    <div style={{ display: 'flex', width: 0, height: 24, alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <div style={{ transform: 'rotate(90deg)' }}>
        <svg width="24" height="1" viewBox="0 0 24 1" fill="none">
          <line x1="0" y1="0.5" x2="24" y2="0.5" stroke="#1E1E1E" strokeOpacity="0.54" />
        </svg>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  const variant = project.thumbnailVariant;
  const isComingSoon = project.slug === 'gpay' || project.slug === 'kirana';

  const cardRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const entryPos = useRef({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    entryPos.current = { x: e.clientX, y: e.clientY };
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    if (!hovered || !isComingSoon || !cardRef.current) return;

    const cursor = cursorRef.current;
    const card = cardRef.current;
    if (!cursor) return;

    // Apply initial position immediately
    cursor.style.transform = `translate3d(${entryPos.current.x}px, ${entryPos.current.y}px, 0) translate(-50%, -50%)`;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hovered, isComingSoon]);

  const cardContent = (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        padding: 20,
        background: '#fff',
        borderRadius: 24,
        width: '100%',
        maxWidth: 846,
        margin: '0 auto',
        cursor: isComingSoon ? 'none' : 'pointer',
        boxShadow: hovered
          ? '0 16px 40px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.05)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: `box-shadow 0.5s ${EASE}, transform 0.5s ${EASE}`,
      }}
    >
      {/* Card border */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: 24, border: '1px solid rgba(0,0,0,0.12)', pointerEvents: 'none' }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1, minWidth: 0 }}>
          <p style={{
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro', sans-serif",
            fontSize: 24,
            fontWeight: 400,
            lineHeight: 1.25,
            color: '#1E1E1E',
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {project.title}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro', sans-serif",
              fontSize: 20,
              fontWeight: 400,
              lineHeight: 'normal',
              color: 'rgba(30, 30, 30, 0.54)',
              whiteSpace: 'nowrap'
            }}>{project.company}</span>
            <Pipe />
            <span style={{
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro', sans-serif",
              fontSize: 20,
              fontWeight: 400,
              lineHeight: 'normal',
              color: 'rgba(30, 30, 30, 0.54)',
              whiteSpace: 'nowrap'
            }}>{project.category}</span>
          </div>
        </div>

        {/* Tag pills */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexShrink: 0 }}>
          {project.tags.map((tag, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                padding: '10px 14px',
                borderRadius: 24,
                flexShrink: 0,
                background: tag.bgColor ?? 'transparent',
                border: tag.bgColor ? 'none' : '1px solid rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro', sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 'normal',
                  whiteSpace: 'nowrap',
                  color: '#000000',
                }}
              >
                {tag.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: variant === 'gpay' ? 549 : 542,
        borderRadius: 16,
        overflow: 'hidden'
      }}>
        {variant === 'kolo'   && <KoloThumbnail   hovered={hovered} />}
        {variant === 'gpay'   && <GPayThumbnail   hovered={hovered} />}
        {variant === 'kirana' && <KiranaThumbnail hovered={hovered} />}
        {variant === 'generic' && <GenericThumbnail />}
        {/* Inset shadow on top of images */}
        <div style={{ position: 'absolute', inset: 0, borderRadius: 16, boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.12)', pointerEvents: 'none', zIndex: 2 }} />
      </div>

      {/* Custom Floating Cursor for Coming Soon Cards */}
      {hovered && isComingSoon && (
        <div
          ref={cursorRef}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            transform: 'translate3d(-100%, -100%, 0)', // initially offscreen, positioned immediately by useEffect
            pointerEvents: 'none',
            zIndex: 999999,
            background: '#f60',
            borderRadius: 45,
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(255, 102, 0, 0.4)',
            willChange: 'transform',
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
              fontSize: 20,
              fontWeight: 400,
              color: '#ffffff',
              whiteSpace: 'nowrap',
              lineHeight: 'normal',
            }}
          >
            COMING SOON
          </span>
        </div>
      )}
    </div>
  );

  if (isComingSoon) {
    return (
      <div style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="no-underline"
      style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}
    >
      {cardContent}
    </Link>
  );
}

// ─── Generic thumbnail for new projects ────────────────────────────────────────
function GenericThumbnail() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        fontSize: 16,
        color: 'rgba(30, 30, 30, 0.4)'
      }}>
        Thumbnail — replace with your Figma design
      </p>
    </div>
  );
}

// ─── Shared canvas wrapper ────────────────────────────────────────────────────
// Creates a centered 806px-wide canvas inside the overflow-hidden thumbnail div.
// All phone positions use 806px Figma coordinates directly.
function Canvas({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: bg }}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 806, transform: 'translateX(-50%)' }}>
        {children}
      </div>
    </div>
  );
}

// ─── Kolo Thumbnail ───────────────────────────────────────────────────────────
// Static : side phones stacked behind center (all at x≈269, y≈44)
// Hover  : left phone → x=88, right phone → x=453 (fan out)
// Only `left` animates — no mixed-unit transitions.
function KoloThumbnail({ hovered }: { hovered: boolean }) {
  const T = `left 0.55s ${EASE}`;
  return (
    <Canvas bg="#f0f0f0">
      {/* Sky / cloud background */}
      <img src={imgKoloBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />

      {/* Left phone (148) — left edge animates 269→88 */}
      <div style={{ position: 'absolute', left: hovered ? 88 : 269, top: 46, width: 268, height: 465, transition: T }}>
        <img src={imgAndroid148} alt="" style={{ width: 242, height: 452, objectFit: 'cover', display: 'block', transform: 'rotate(-3.32deg)', margin: '6px 13px' }} />
      </div>

      {/* Right phone (150) — left edge animates 269→453 */}
      <div style={{ position: 'absolute', left: hovered ? 453 : 269, top: 42, width: 268, height: 465, transition: T }}>
        <img src={imgAndroid150} alt="" style={{ width: 242, height: 452, objectFit: 'cover', display: 'block', transform: 'rotate(3.32deg)', margin: '6px 13px' }} />
      </div>

      {/* Center phone (147) — always centered, no animation */}
      <div style={{ position: 'absolute', left: '50%', top: 23, transform: 'translateX(-50%)', width: 270, height: 504 }}>
        <img src={imgAndroid147} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
    </Canvas>
  );
}

// ─── GPay Thumbnail ───────────────────────────────────────────────────────────
function GPayThumbnail({ hovered }: { hovered: boolean }) {
  const T_POS  = `left 0.55s ${EASE}, opacity 0.4s ${EASE}`;
  return (
    <Canvas bg="#f3f3f3">
      {/* Left phone (PNE) — slides from center (403) to left (204) */}
      <div style={{
        position: 'absolute',
        left: hovered ? 204 : 403,
        top: 287.24,
        width: 232,
        height: 426,
        transform: 'translate(-50%, -50%) rotate(-3deg)',
        opacity: hovered ? 1 : 0,
        transition: T_POS,
      }}>
        <img src={imgIPhonePNE} alt="" style={{ width: 211, height: 416, objectFit: 'cover', display: 'block', margin: '5px 10.5px' }} />
      </div>

      {/* Right phone (38) — slides from center (403) to right (601) */}
      <div style={{
        position: 'absolute',
        left: hovered ? 601 : 403,
        top: 287.24,
        width: 232,
        height: 426,
        transform: 'translate(-50%, -50%) rotate(3deg)',
        opacity: hovered ? 1 : 0,
        transition: T_POS,
      }}>
        <img src={imgIPhone38} alt="" style={{ width: 211, height: 416, objectFit: 'cover', display: 'block', margin: '5px 10.5px' }} />
      </div>

      {/* Center phone (21) — matching Figma position & scale */}
      <div style={{
        position: 'absolute',
        left: 403,
        top: hovered ? 274.5 : 32,
        width: hovered ? 250 : 401.949,
        height: hovered ? 493 : 792,
        transform: hovered ? 'translate(-50%, -50%)' : 'translateX(-50%)',
        transformOrigin: 'center center',
        transition: `top 0.55s ${EASE}, width 0.55s ${EASE}, height 0.55s ${EASE}, transform 0.55s ${EASE}`,
        zIndex: 1,
      }}>
        <img src={imgIPhone21} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
    </Canvas>
  );
}

// ─── Kirana Thumbnail ─────────────────────────────────────────────────────────
function KiranaThumbnail({ hovered }: { hovered: boolean }) {
  const T = `left 0.55s ${EASE}, top 0.55s ${EASE}, opacity 0.4s ${EASE}`;
  return (
    <Canvas bg="#f3f3f3">
      {/* Phone A (left) — rises from 391→271, spreads from 403→307 */}
      <div style={{
        position: 'absolute',
        left: hovered ? 307 : 403,
        top: hovered ? 271 : 391,
        width: 248,
        height: 510,
        transform: 'translate(-50%, -50%) rotate(-2deg)',
        opacity: hovered ? 1 : 0,
        transition: T,
        zIndex: 1,
      }}>
        <CroppedPhone
          src={imgKiranaA}
          w={231} h={502}
          imgW="375.51%" imgH="129.83%" imgLeft="-200.5%" imgTop="-14.37%"
        />
      </div>

      {/* Phone B (right) — rises from 391→271, spreads from 403→518 */}
      <div style={{
        position: 'absolute',
        left: hovered ? 518 : 403,
        top: hovered ? 271 : 391,
        width: 238,
        height: 487,
        transform: 'translate(-50%, -50%) rotate(2deg)',
        opacity: hovered ? 1 : 0,
        transition: T,
        zIndex: 1,
      }}>
        <CroppedPhone
          src={imgKiranaB}
          w={222} h={480}
          imgW="372.75%" imgH="129.27%" imgLeft="-198.87%" imgTop="-13.77%"
        />
      </div>

      {/* Static single phone (A) — visible at rest, fades+drops on hover */}
      <div style={{
        position: 'absolute',
        left: 403,
        top: hovered ? 391 : 271,
        width: 231,
        height: 502,
        transform: 'translate(-50%, -50%)',
        opacity: hovered ? 0 : 1,
        transition: T,
        zIndex: 1,
      }}>
        <CroppedPhone
          src={imgKiranaA}
          w={231} h={502}
          imgW="375.51%" imgH="129.83%" imgLeft="-200.5%" imgTop="-14.37%"
        />
      </div>
    </Canvas>
  );
}

// ─── Cropped phone helper ─────────────────────────────────────────────────────
function CroppedPhone({ src, w, h, imgW, imgH, imgLeft, imgTop }: {
  src: string; w: number; h: number;
  imgW: string; imgH: string; imgLeft: string; imgTop: string;
}) {
  return (
    <div style={{ width: w, height: h, overflow: 'hidden', position: 'relative' }}>
      <img src={src} alt="" style={{ position: 'absolute', width: imgW, height: imgH, left: imgLeft, top: imgTop, maxWidth: 'none', display: 'block' }} />
    </div>
  );
}

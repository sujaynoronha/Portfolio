import { useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    // Total animation timeline:
    // 0.0s - 0.5s: Text fades in
    // 1.0s - 2.2s: Light screen sweeps left to right
    // 2.2s - 2.8s: Hold light screen
    // 2.8s - 3.4s: Entire loading screen fades out
    // 3.4s: Animation complete, unmount component
    const timer = setTimeout(() => {
      onComplete();
    }, 3400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] select-none overflow-hidden pointer-events-auto"
      style={{
        animation: 'mainFadeOut 0.6s cubic-bezier(0.25, 1, 0.5, 1) 2.8s forwards',
      }}
    >
      {/* Styles for Animations */}
      <style>{`
        @keyframes textFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes parentReveal {
          from { transform: translateX(-100%); }
          to { transform: translateX(0%); }
        }
        @keyframes childCounter {
          from { transform: translateX(100%); }
          to { transform: translateX(0%); }
        }
        @keyframes mainFadeOut {
          0% { opacity: 1; pointer-events: auto; }
          99% { opacity: 0; pointer-events: auto; }
          100% { opacity: 0; pointer-events: none; }
        }
        @keyframes premiumDot {
          0%, 60%, 100% {
            transform: translateY(0) scale(0.9);
            opacity: 0.25;
          }
          30% {
            transform: translateY(-4px) scale(1.15);
            opacity: 1;
          }
        }
        .dot {
          display: inline-block;
          animation: premiumDot 1.6s infinite ease-in-out;
        }
        .dot-1 {
          animation-delay: 0.0s;
        }
        .dot-2 {
          animation-delay: 0.15s;
        }
        .dot-3 {
          animation-delay: 0.3s;
        }
      `}</style>

      {/* Screen 1: Black base layer */}
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        <div
          className="flex flex-col gap-[24px] items-center text-white w-[440px] max-w-full text-center"
          style={{
            animation: 'textFadeIn 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',
          }}
        >
          <p
            className="font-medium text-[24px] leading-normal"
            style={{
              fontFamily: "'SF_Pro_Display:Medium', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            Design adds value faster than it adds costs
          </p>
          <p
            className="text-[16px] tracking-[0.05em]"
            style={{
              fontFamily: "'JetBrains_Mono:Light', 'JetBrains Mono:Light', 'JetBrains Mono', monospace",
              fontWeight: 300,
            }}
          >
            LOADING<span className="dot dot-1">.</span><span className="dot dot-2">.</span><span className="dot dot-3">.</span>
          </p>
        </div>
      </div>

      {/* Screen 2: Light reveal layer (#f7f5f3 background) */}
      <div
        className="absolute inset-0 bg-[#f7f5f3] flex items-center justify-center overflow-hidden"
        style={{
          border: 'none',
          transform: 'translateX(-100%)',
          animation: 'parentReveal 1.2s cubic-bezier(0.86, 0, 0.07, 1) 1.0s forwards',
        }}
      >
        {/* Child container matches screen dimensions to prevent layout shifting during translation wipe */}
        <div
          className="absolute inset-0 flex items-center justify-center w-screen h-screen"
          style={{
            border: 'none',
            transform: 'translateX(100%)',
            animation: 'childCounter 1.2s cubic-bezier(0.86, 0, 0.07, 1) 1.0s forwards',
          }}
        >
          <div className="flex flex-col gap-[24px] items-center text-[#1e1e1e] w-[440px] max-w-full text-center">
            <p
              className="font-medium text-[24px] leading-normal"
              style={{
                fontFamily: "'SF_Pro_Display:Medium', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              Design adds value faster than it adds costs
            </p>
            <p
              className="text-[16px] tracking-[0.05em]"
              style={{
                fontFamily: "'JetBrains_Mono:Light', 'JetBrains Mono:Light', 'JetBrains Mono', monospace",
                fontWeight: 300,
              }}
            >
              LOADING<span className="dot dot-1">.</span><span className="dot dot-2">.</span><span className="dot dot-3">.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

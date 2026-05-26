import { useEffect, useRef, useState } from 'react';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../../data/projects';
import { smoothScrollTo } from '../utils/scroll';

export function HomePage() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalCards = projects.length;

  useEffect(() => {
    if (sessionStorage.getItem('scrollToWork') === 'true') {
      sessionStorage.removeItem('scrollToWork');
      const workSection = document.getElementById('featured-work');
      if (workSection) {
        const timer = setTimeout(() => {
          const targetY = workSection.offsetTop - 80;
          smoothScrollTo(targetY, 900);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled into the container
      // When top === 0, scrollProgress is 0
      // When top === -(height - windowHeight), scrollProgress is 1
      const maxScroll = height - windowHeight;
      let progress = -top / maxScroll;
      
      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      
      // Determine index based on progress
      let newIndex = Math.round(progress * (totalCards - 1));
      newIndex = Math.max(0, Math.min(totalCards - 1, newIndex));
      
      setActiveCardIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalCards]);

  return (
    <div className="content-stretch flex flex-col items-center px-[80px] pb-[120px] relative max-w-[1440px] mx-auto w-full">

      {/* Hero Section */}
      <div className="mt-[64px] mb-[140px] flex justify-center w-full">
        <Hero />
      </div>

      {/* Featured Work Section - Tall Container for scroll-scrubbing */}
      <div
        id="featured-work"
        ref={containerRef}
        className="w-full relative"
        // Give the section enough height to allow scrolling through all cards comfortably.
        // We use totalCards * 120vh to ensure enough scroll distance per card.
        style={{ height: `${totalCards * 120}vh` }}
      >
        {/* Sticky container that stays centered while scrolling */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
          
          <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[32px] whitespace-nowrap mb-[48px]">
            Featured Work
          </p>

          {/* Carousel Container with Indicators */}
          <div className="relative">
            {/* Carousel Indicators - positioned to the left */}
            <div className="absolute left-[-58px] top-1/2 -translate-y-1/2 h-[72px] w-[16px] z-10">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={`0 0 16 ${8 + (totalCards - 1) * 28 + 8}`}>
                <g>
                  {projects.map((_, index) => (
                    <circle
                      key={index}
                      cx="8"
                      cy={8 + index * 28}
                      fill={activeCardIndex === index ? "#FF6600" : "#D9D9D9"}
                      r="8"
                      style={{
                        transition: 'fill 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: activeCardIndex === index ? 'scale(1)' : 'scale(0.875)',
                        transformOrigin: 'center'
                      }}
                    />
                  ))}
                </g>
              </svg>
            </div>

            {/* Project Cards */}
            <div className="relative w-[846px]">
              {/* Invisible spacer to give the container layout height */}
              <div className="opacity-0 pointer-events-none w-full invisible">
                <ProjectCard project={projects[0]} />
              </div>

              {/* All cards absolutely positioned for smooth transitions */}
              {projects.map((project, index) => {
                const isActive = activeCardIndex === index;
                
                // Animate entry and exit based on index distance
                const offset = index - activeCardIndex;
                let transform = 'translateY(0px) scale(1)';
                let opacity = 1;
                let filter = 'blur(0px)';
                let zIndex = totalCards - Math.abs(offset);

                if (offset < 0) {
                  // Scrolling past (card goes up and blurs away)
                  transform = `translateY(-80px) scale(0.94)`;
                  opacity = 0;
                  filter = 'blur(10px)';
                } else if (offset > 0) {
                  // Coming up (card stays down waiting to come up)
                  transform = `translateY(80px) scale(0.94)`;
                  opacity = 0;
                  filter = 'blur(10px)';
                }

                return (
                  <div
                    key={index}
                    className="absolute inset-0 w-full"
                    style={{
                      transform,
                      opacity,
                      filter,
                      zIndex,
                      pointerEvents: isActive ? 'auto' : 'none',
                      transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), filter 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
                      willChange: 'transform, opacity, filter'
                    }}
                  >
                    <ProjectCard project={project} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

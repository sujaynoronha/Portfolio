import { useEffect } from 'react';
import { Link } from 'react-router';
import '../../styles/KoloCaseStudy.css';

export function KoloCaseStudy() {
  useEffect(() => {
    // Hide main layout background and disable scrolling on the body
    const layout = document.querySelector('.bg-\\[\\#f7f5f3\\]');
    if (layout) {
      (layout as HTMLElement).style.background = 'transparent';
    }
    document.body.style.overflow = 'hidden';
    
    return () => {
      if (layout) {
        (layout as HTMLElement).style.background = '';
      }
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="kolo-page kolo-fullscreen-proto-page">
      {/* FLOATING BACK TO PORTFOLIO BUTTON */}
      <Link to="/" className="kolo-floating-back-btn" title="Back to Portfolio">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Back to portfolio</span>
      </Link>

      {/* FULLSCREEN FIGMA PROTOTYPE EMBED */}
      <iframe 
        title="Kolo Interactive Figma Prototype"
        src="https://embed.figma.com/proto/IcpXwEHXwkTAmoCs8Kwuqe/Portfolio?node-id=2865-8&viewport=264%2C363%2C0.06&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2865%3A8&page-id=2807%3A15922&embed-host=share" 
        allowFullScreen
        className="kolo-fullscreen-iframe"
      />
    </div>
  );
}

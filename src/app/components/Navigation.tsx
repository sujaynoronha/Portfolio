import { useNavigate, useLocation } from 'react-router';
import { smoothScrollTo } from '../utils/scroll';

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    if (location.pathname === '/') {
      smoothScrollTo(0, 900);
    } else {
      navigate('/');
    }
  };

  const goToWork = () => {
    if (location.pathname === '/') {
      // Already on home — smooth scroll to featured work
      const workSection = document.getElementById('featured-work');
      if (workSection) {
        const targetY = workSection.offsetTop - 80;
        smoothScrollTo(targetY, 900);
      }
    } else {
      // Set flag in sessionStorage and navigate home
      sessionStorage.setItem('scrollToWork', 'true');
      navigate('/');
    }
  };

  const goToAbout = () => {
    navigate('/about');
  };

  const isTransparentBg = location.pathname === '/about' || location.pathname.startsWith('/projects/');

  return (
    <div className={`sticky top-0 z-50 py-[24px] flex items-center justify-center shrink-0 ${isTransparentBg ? '' : 'bg-[#f7f5f3]'}`}>
      <div className="bg-white border border-[rgba(0,0,0,0.12)] border-solid flex gap-[20px] items-center justify-center px-[20px] py-[16px] relative rounded-[16px] shrink-0">
        {/* Logo */}
        <button
          onClick={goHome}
          className="cursor-pointer font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic text-[#f60] text-[16px] tracking-[0.32px] whitespace-nowrap hover:bg-[#fcf0da] rounded-[8px] px-[10px] py-[6px] mx-[-10px] my-[-6px] transition-colors duration-200 ease-out"
        >
          SN.
        </button>

        {/* Work */}
        <button
          onClick={goToWork}
          className="cursor-pointer font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black tracking-[0.32px] whitespace-nowrap hover:bg-[#fcf0da] rounded-[8px] px-[10px] py-[6px] mx-[-10px] my-[-6px] transition-colors duration-200 ease-out"
        >
          Work
        </button>

        {/* About */}
        <button
          onClick={goToAbout}
          className="cursor-pointer font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[16px] text-black tracking-[0.32px] whitespace-nowrap hover:bg-[#fcf0da] rounded-[8px] px-[10px] py-[6px] mx-[-10px] my-[-6px] transition-colors duration-200 ease-out"
        >
          About
        </button>

      </div>
    </div>
  );
}

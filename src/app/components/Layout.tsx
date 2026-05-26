import { Outlet, useLocation } from 'react-router';
import { Navigation } from './Navigation';
import { ContactCard } from './ContactCard';
import { useEffect } from 'react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <div className="bg-[#f7f5f3] min-h-screen flex flex-col overflow-x-clip" style={{ WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
      <ScrollToTop />
      <Navigation />

      {/* Floating global Contact Card Overlay */}
      <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] pointer-events-none z-50">
        <ContactCard />
      </div>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full max-w-[1440px] mx-auto px-[80px] pb-[64px] mt-auto">
        <div className="flex flex-col gap-[32px] w-full border-t border-[rgba(30,30,30,0.12)] pt-[32px]">
          <div className="flex items-center justify-between w-full font-['Inter:Regular',sans-serif] font-normal text-[20px] text-[rgba(30,30,30,0.82)] whitespace-nowrap">
            <p>© 2026 Sujay Noronha. All rights reserved</p>
            <p>Bye, See you Soon 👋</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

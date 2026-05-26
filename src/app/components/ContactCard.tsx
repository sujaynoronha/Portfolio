import { useState } from 'react';

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const TickIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#007bff"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function ContactCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute top-0 right-0 w-[280px] h-[260px] pointer-events-auto xl:block hidden z-[60]"
    >
      <div
        className="absolute bg-[#ffda00] flex flex-col font-['SF_Pro_Text:Regular',sans-serif] items-start justify-between p-[20px] w-[233px] h-[211px] rounded-[16px] text-[16px] text-[#1e1e1e] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
        style={{
          top: '37px',
          right: '29px',
          transform: isHovered
            ? 'translate(0px, 0px) rotate(0deg)'
            : 'translate(145px, -190px) rotate(12deg)',
        }}
      >
        <div className="flex flex-col gap-[16px] items-start w-full">
          <p className="text-[#1e1e1e] select-none font-['SF_Pro_Text:Regular',sans-serif] font-normal leading-[19px] text-[16px] m-0 p-0">
            Reach me at
          </p>
          <div className="flex flex-col gap-[12px] items-start font-['SF_Pro_Text:Regular',sans-serif] font-normal text-[#007bff] w-full text-[16px]">
            {/* Phone */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard('+919136131070', 'phone');
              }}
              className="group relative flex items-center cursor-pointer hover:underline w-full text-left font-['SF_Pro_Text:Regular',sans-serif] font-normal text-[#007bff] p-0 m-0 bg-transparent border-none focus:outline-none h-[19px] leading-[19px] text-[16px]"
            >
              <span>+919136131070</span>
              <span className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center h-4 w-4 justify-center bg-[#ffda00]">
                {copiedPhone ? <TickIcon /> : <CopyIcon />}
              </span>
            </button>

            {/* Email */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard('sujaynoronha@gmail.com', 'email');
              }}
              className="group relative flex items-center cursor-pointer hover:underline w-full text-left font-['SF_Pro_Text:Regular',sans-serif] font-normal text-[#007bff] p-0 m-0 bg-transparent border-none focus:outline-none h-[19px] leading-[19px] text-[16px]"
            >
              <span>sujaynoronha@gmail.com</span>
              <span className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center h-4 w-4 justify-center bg-[#ffda00]">
                {copiedEmail ? <TickIcon /> : <CopyIcon />}
              </span>
            </button>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sujay-noronha-6868151b5/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group flex items-center cursor-pointer hover:underline w-full text-left font-['SF_Pro_Text:Regular',sans-serif] font-normal text-[#007bff] no-underline h-[19px] leading-[19px] text-[16px]"
            >
              <span>Linkedin ↗</span>
            </a>
          </div>
        </div>
        <p className="font-['SF_Pro_Text:Regular',sans-serif] font-normal text-[#1e1e1e] select-none leading-[19px] text-[16px] m-0 p-0">
          Contact
        </p>
      </div>
    </div>
  );
}

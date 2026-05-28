import imgImage from "../../imports/Desktop3/222fc13c4f6d459d89793a0322caad96b4fe3c44.png";
import svgPaths from "../../imports/Frame12/svg-p25kzy92kh";
import checkSvgPaths from "../../imports/Frame13/svg-somaab06db";
import { useState, useEffect } from 'react';
import { smoothScrollTo } from '../utils/scroll';

export function Hero() {
  const [isCopyHovered, setIsCopyHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('featured-work');
    if (workSection) {
      const targetY = workSection.offsetTop - 80;
      smoothScrollTo(targetY, 900);
    }
  };

  const copyEmail = () => {
    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('sujaynoronha@gmail.com').then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      }).catch(() => {
        // Fallback: use the visual feedback even if copy fails
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      });
    } else {
      // Fallback for environments where clipboard API is not available
      const textArea = document.createElement('textarea');
      textArea.value = 'sujaynoronha@gmail.com';
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        setIsCopied(true);
      } catch (err) {
        setIsCopied(true);
      }

      document.body.removeChild(textArea);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 max-w-[680px] mx-auto w-full md:px-0 px-[16px]">
      {/* Avatar */}
      <div className="bg-[#e8e8e8] h-[62px] overflow-clip relative rounded-[32px] shadow-[0px_4px_8px_1px_rgba(0,0,0,0.25)] shrink-0 w-[88px]">
        <div className="-translate-x-1/2 absolute left-[calc(50%-1px)] pointer-events-none rounded-[12px] size-[92px] top-px" data-name="image">
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <img alt="" className="absolute h-[181.22%] left-[-4.47%] max-w-none top-[-25.05%] w-[135.16%]" src={imgImage} />
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 rounded-[12px]" />
        </div>
      </div>

      {/* Title Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
          <p className="font-['SF_Pro_Text:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 md:text-[20px] text-[12px] text-[rgba(30,30,30,0.82)] text-right md:w-[165px] w-[99px]">Sujay Noronha</p>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[18px]">
            <p className="font-['SF_Pro_Text:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#ffb811] md:text-[20px] text-[12px] text-center w-full">✦</p>
          </div>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 md:text-[20px] text-[12px] text-[rgba(30,30,30,0.82)] text-left md:w-[165px] w-[99px] whitespace-nowrap">Product Designer</p>
        </div>

        <div className="content-stretch flex flex-col md:gap-[12px] gap-[2px] items-center not-italic relative shrink-0 text-[#1e1e1e] text-center whitespace-nowrap">
          <p className="font-instrument font-normal leading-[normal] relative shrink-0 md:text-[48px] text-[32px] md:tracking-[1.92px] tracking-[0.64px]">Creating Engaging experiences for</p>
          <p className="font-instrument font-normal leading-[0] relative shrink-0 md:text-[48px] text-[32px] md:tracking-[0.96px] tracking-[0.64px]">
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] line-through md:text-[48px] text-[32px]">Users</span>
            <span className="leading-[normal] md:text-[48px] text-[32px]"> </span>
            <span className="leading-[normal] text-[#f60] md:text-[48px] text-[32px]">People</span>
          </p>
        </div>

        <p className="font-['SF_Pro_Text:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[rgba(30,30,30,0.82)] text-center w-full max-w-[343px] md:max-w-none md:w-[543px] md:text-[20px] text-[14px]">{`Focusing on designing consumer, B2B SaaS & internal products for early & growth stage teams`}</p>
      </div>

      {/* CTA Buttons */}
      <div className="content-stretch flex md:flex-row flex-col md:w-auto w-full md:gap-[16px] gap-[16px] md:items-center items-stretch mt-[8px]">
        <button
          onClick={scrollToWork}
          className="bg-[#111] border border-solid border-[#111] content-stretch flex h-[48px] items-center justify-center px-[20px] relative rounded-[16px] shrink-0 md:w-[134px] w-full cursor-pointer group transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
        >
          <p className="font-['SF_Pro_Text:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-white group-hover:text-[#ffb811] whitespace-nowrap transition-colors duration-300 ease-out">View work</p>
        </button>
        <button
          onClick={copyEmail}
          onMouseEnter={() => !isCopied && setIsCopyHovered(true)}
          onMouseLeave={() => setIsCopyHovered(false)}
          className="bg-white border border-solid border-[rgba(0,0,0,0.12)] flex h-[48px] items-center shrink-0 cursor-pointer overflow-hidden hover:scale-[1.02] active:scale-[0.98] rounded-[16px]"
          style={{
            justifyContent: isMobile ? 'center' : 'flex-start',
            paddingLeft: isMobile ? '20px' : (isCopied || isCopyHovered ? '14px' : '20.5px'),
            paddingRight: isMobile ? '20px' : (isCopied || isCopyHovered ? '14px' : '20.5px'),
            width: isMobile ? '100%' : (isCopied ? '127px' : (isCopyHovered ? '303px' : '134px')),
            gap: isMobile 
              ? (isCopied ? '8px' : '0px')
              : (isCopied ? '8px' : (isCopyHovered ? '10px' : '0px')),
            transition: 'width 500ms cubic-bezier(0.34, 1.56, 0.64, 1), padding-left 500ms cubic-bezier(0.34, 1.56, 0.64, 1), padding-right 500ms cubic-bezier(0.34, 1.56, 0.64, 1), gap 500ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 300ms ease-out, background-color 300ms ease-out'
          }}
        >
          {/* Icon container */}
          <div
            className="relative shrink-0 flex items-center justify-center"
            style={{
              width: isMobile 
                ? (isCopied ? '24px' : '0px') 
                : (isCopied || isCopyHovered ? '24px' : '0px'),
              height: '24px',
              opacity: isMobile 
                ? (isCopied ? 1 : 0) 
                : (isCopied || isCopyHovered ? 1 : 0),
              transform: isMobile 
                ? (isCopied ? 'scale(1)' : 'scale(0.8)') 
                : (isCopied || isCopyHovered ? 'scale(1)' : 'scale(0.8)'),
              transition: 'width 500ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 350ms ease-out, transform 350ms ease-out'
            }}
          >
            {isCopied ? (
              <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <mask height="24" id="mask0_73_42" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                  <rect fill="#D9D9D9" height="24" width="24" />
                </mask>
                <g mask="url(#mask0_73_42)">
                  <path d={checkSvgPaths.p217bb200} fill="#1E1E1E" />
                </g>
              </svg>
            ) : (
              <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.pdbc1d00} fill="#1E1E1E" fillRule="evenodd" />
              </svg>
            )}
          </div>

          {/* Text container */}
          <div
            className="relative shrink-0 h-[24px]"
            style={{
              width: isMobile 
                ? (isCopied ? '67px' : '93px')
                : (isCopied ? '67px' : (isCopyHovered ? '241px' : '93px')),
              transition: 'width 500ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            {/* Copy Mail (Idle) */}
            <p
              className="font-['SF_Pro_Text:Regular',sans-serif] font-normal leading-[24px] not-italic absolute left-0 top-0 text-[20px] text-[#1e1e1e] whitespace-nowrap"
              style={{
                opacity: isCopied ? 0 : (isCopyHovered && !isMobile ? 0 : 1),
                visibility: (isCopied || (isCopyHovered && !isMobile)) ? 'hidden' : 'visible',
                transform: `translateY(${isCopied || (isCopyHovered && !isMobile) ? '-10px' : '0px'})`,
                transition: 'opacity 300ms ease-out, transform 300ms ease-out, visibility 300ms'
              }}
            >
              Copy mail
            </p>

            {/* Email (Hovered) */}
            {!isMobile && (
              <p
                className="font-['SF_Pro_Text:Regular',sans-serif] font-normal leading-[24px] not-italic absolute left-0 top-0 text-[20px] text-[#1e1e1e] whitespace-nowrap"
                style={{
                  opacity: isCopyHovered && !isCopied ? 1 : 0,
                  visibility: (isCopyHovered && !isCopied) ? 'visible' : 'hidden',
                  transform: `translateY(${isCopyHovered && !isCopied ? '0px' : '10px'})`,
                  transition: 'opacity 300ms ease-out, transform 300ms ease-out, visibility 300ms'
                }}
              >
                sujaynoronha@gmail.com
              </p>
            )}

            {/* Copied (Copied) */}
            <p
              className="font-['SF_Pro_Text:Regular',sans-serif] font-normal leading-[24px] not-italic absolute left-0 top-0 text-[20px] text-[#1e1e1e] whitespace-nowrap"
              style={{
                opacity: isCopied ? 1 : 0,
                visibility: isCopied ? 'visible' : 'hidden',
                transform: `translateY(${isCopied ? '0px' : '10px'})`,
                transition: 'opacity 300ms ease-out, transform 300ms ease-out, visibility 300ms'
              }}
            >
              Copied
            </p>
          </div>
        </button>
      </div>

      {/* Availability Badge */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 mt-[16px]">
        <div className="relative shrink-0 size-[10px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="var(--fill-0, #00CD00)" id="Ellipse 1" r="5" />
          </svg>
        </div>
        <p className="font-['SF_Pro_Text:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 md:text-[16px] text-[14px] text-[#1e1e1e] whitespace-nowrap">Open to projects from Q2 2026</p>
      </div>
    </div>
  );
}

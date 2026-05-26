import imgFrame1410137304 from "./903555daa4d15991cc51468d9441342131f10d0f.png";
import imgAndroidLarge148Portrait from "./c5bbaacf0ac72068973a6990ff43c1ad7ad4aadc.png";
import imgAndroidLarge150Portrait from "./7b5812de4c7048fd3e6554ff8ba579bbe9198755.png";
import imgAndroidLarge147Portrait from "./dd2bb63be0f0d6fdb565e96b59ef627cf846a780.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-[rgba(30,30,30,0.54)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Kolo.app
      </p>
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Line 2" stroke="var(--stroke-0, #1E1E1E)" strokeOpacity="0.54" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-[rgba(30,30,30,0.54)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Live QNA `}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[386px]">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[#1e1e1e] text-[24px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        150% increase in weekly engagement
      </p>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex items-center justify-center px-[14px] py-[12px] relative rounded-[24px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Engagement optimisation
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[806px]">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[542px] overflow-clip relative rounded-[16px] shrink-0 w-[806px]">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[549px] items-center left-[calc(50%+0.5px)] pb-[22px] pl-[283px] pr-[282px] pt-[23px] top-[calc(50%+0.5px)] w-[835px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1410137304} />
        <div className="absolute flex h-[465.212px] items-center justify-center left-[102px] top-[45.65px] w-[267.8px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-3.32deg]">
            <div className="h-[451.939px] relative w-[242px]" data-name="Android Large - 148-portrait">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAndroidLarge148Portrait} />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[465.195px] items-center justify-center left-[467px] top-[42px] w-[267.767px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[3.32deg]">
            <div className="h-[451.939px] relative w-[242px]" data-name="Android Large - 150-portrait">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAndroidLarge150Portrait} />
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute h-[504.224px] left-[calc(50%+0.5px)] top-[22.89px] w-[269.997px]" data-name="Android Large - 147-portrait">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAndroidLarge147Portrait} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_8px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[20px] relative rounded-[24px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame3 />
      <Frame5 />
    </div>
  );
}
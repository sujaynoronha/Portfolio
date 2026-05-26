import imgFreeIPhoneAir from "./097b6ce4147151642b56f53c7de885d32473b8b1.png";

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-[rgba(30,30,30,0.54)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Google Pay
      </p>
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-[rgba(30,30,30,0.54)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Group Bill Splitting
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[386px]">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1e1e1e] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Simplifying unequal bill splitting `}</p>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Personal project
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#ececec] content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Retention optimisation
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame3 />
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[806px]">
      <Frame4 />
      <Frame9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f3f3f3] content-stretch flex flex-col items-center left-1/2 overflow-clip top-1/2 w-[806px]">
      <div className="h-[563px] relative shrink-0 w-[482px]" data-name="Free iPhone Air">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFreeIPhoneAir} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[549px] overflow-clip relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]" />
      <Frame1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_8px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[20px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame5 />
      <Frame />
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="content-stretch flex items-center relative size-full">
      <Frame6 />
    </div>
  );
}
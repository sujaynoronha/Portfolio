function Frame1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[20px] py-[16px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f60] text-[16px] tracking-[0.32px] whitespace-nowrap">SN.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[86px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black tracking-[0.32px] whitespace-nowrap">Work</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-[86px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black tracking-[0.32px] whitespace-nowrap">About</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[12px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black tracking-[0.32px] whitespace-nowrap">Resume</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative size-full">
      <Frame1 />
      <Frame />
    </div>
  );
}
import imgRedmiNote11Pro from "./4b60d5646b0a04ee6080b390815fe25de6610fbc.png";
import imgRedmiNote11Pro1 from "./7e8b0d71784be311fb7ef076f4b9d403063ca394.png";

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-[rgba(30,30,30,0.54)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Kirana club
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
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-[rgba(30,30,30,0.54)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        In-app landing page
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1e1e1e] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Loyalty program for Kirana store owners
      </p>
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#ececec] content-stretch flex items-center justify-center px-[14px] py-[10px] relative rounded-[24px] shrink-0">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Conversion and retention `}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[806px]">
      <Frame3 />
      <Frame6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%+92px)]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[479.841px] left-[calc(50%-33.74px)] top-[calc(50%+106.92px)] w-[221.913px]" data-name="Redmi Note 11 Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.27%] left-[-198.87%] max-w-none top-[-13.77%] w-[372.75%]" src={imgRedmiNote11Pro} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[634px] left-1/2 top-[calc(50%+92px)] w-[292px]" data-name="Redmi Note 11 Pro">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.83%] left-[-200.5%] max-w-none top-[-14.37%] w-[375.51%]" src={imgRedmiNote11Pro1} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%+92px)]">
      <Group1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f3f3f3] h-[542px] left-1/2 overflow-clip top-1/2 w-[806px]">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[542px] overflow-clip relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]" />
      <Frame1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_8px_0px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[20px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.12)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame4 />
      <Frame />
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="content-stretch flex items-center relative size-full">
      <Frame5 />
    </div>
  );
}
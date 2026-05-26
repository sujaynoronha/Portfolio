import svgPaths from "./svg-p25kzy92kh";

function Frame() {
  return (
    <div className="bg-[#111] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[16px] shrink-0 w-[134px]">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ffb811] text-[20px] whitespace-nowrap">View work</p>
    </div>
  );
}

function SolarCopyOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="solar:copy-outline">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:copy-outline">
          <path clipRule="evenodd" d={svgPaths.pdbc1d00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center px-[14px] py-[12px] relative rounded-[16px] shrink-0">
      <SolarCopyOutline />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.82)] whitespace-nowrap">sujaynoronha@gmail.com</p>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full">
      <Frame />
      <Frame1 />
    </div>
  );
}
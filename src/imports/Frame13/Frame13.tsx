import svgPaths from "./svg-somaab06db";

function Frame() {
  return (
    <div className="bg-[#111] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[16px] shrink-0 w-[134px]">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ffb811] text-[20px] whitespace-nowrap">View work</p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <mask height="24" id="mask0_73_42" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_73_42)">
            <path d={svgPaths.p217bb200} fill="var(--fill-0, #1E1E1E)" id="check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[12px] relative rounded-[16px] shrink-0">
      <Check />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[20px] whitespace-nowrap">Copied</p>
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
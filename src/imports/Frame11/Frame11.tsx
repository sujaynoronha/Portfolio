function Frame() {
  return (
    <div className="bg-[#111] content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[16px] shrink-0 w-[134px]">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">View work</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[16px] shrink-0 w-[134px]">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Copy mail</p>
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
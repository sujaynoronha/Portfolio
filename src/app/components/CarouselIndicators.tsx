interface CarouselIndicatorsProps {
  activeIndex: number;
  total: number;
}

export function CarouselIndicators({ activeIndex, total }: CarouselIndicatorsProps) {
  return (
    <div className="-translate-y-1/2 absolute h-[72px] left-[239px] top-[calc(50%+323px)] w-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 72">
        <g>
          {[0, 1, 2].map((index) => (
            <circle
              key={index}
              cx="8"
              cy={8 + index * 28}
              fill={activeIndex === index ? "#FF6600" : "#D9D9D9"}
              r="8"
              style={{ transition: 'fill 0.3s ease' }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

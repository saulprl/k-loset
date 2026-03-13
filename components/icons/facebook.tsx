import { cn } from "@/lib/utils";
import { SVGProps } from "react";
export const FacebookIcon = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 41"
    fill="none"
    className={cn("", className)}
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#000"
        d="M21.85.006 16.891 0c-4.809 0-7.915 3.186-7.915 8.123v3.742H4v6.772h4.976L8.969 33h6.962l.006-14.363h5.709l-.005-6.77h-5.704V8.69c0-1.527.362-2.3 2.349-2.3l3.549-.001.015-6.384Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={25.85}
        height={41}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_736_203" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_736_203"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

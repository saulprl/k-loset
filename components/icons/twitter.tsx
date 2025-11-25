import { cn } from "@/lib/utils"
import { SVGProps } from "react"
export const TwitterIcon = ({className, ...props}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 33 33"
    className={cn("", className)}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M19.643 13.975 31.93 0h-2.91L18.345 12.132 9.827 0H0l12.884 18.347L0 33h2.91l11.265-12.814L23.173 33H33M3.961 2.148h4.472l20.584 28.81h-4.473"
    />
  </svg>
)

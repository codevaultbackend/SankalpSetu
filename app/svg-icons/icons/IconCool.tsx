import React from "react";

type IconProps = {
  size?: number;
  className?: string;
};

export default function IconCool({
  size = 32,
  className,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M25.333 25.334H6.667v-2.667h18.667v2.667zm-12-6.107L8 13.894l1.88-1.88 3.453 3.44 8.787-8.787L24 8.56 13.333 19.227z" />
    </svg>
  );
}

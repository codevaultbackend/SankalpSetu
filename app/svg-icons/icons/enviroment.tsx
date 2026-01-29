import React from "react";

type IconProps = {
  size?: number;
  className?: string;
};

export default function enviroment({ size = 32, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0" transform="scale(0.00390625)" />
        </pattern>

        <image
          id="image0"
          width="256"
          height="256"
          preserveAspectRatio="none"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAQAElEQVR4AexdCZwcRbnv6tnsEgQRYpLdTWISInLKIWdIdqdnNwd5goAYeYAGkQeCF7c8Aw+CiOYBCsZnABEQQUCCAiIEkuxuzyYcyiGinAIBkuyREAQjbjYz0/X+37DdmSx7zHT39FR3f/ur2uqurvrq+/5V9a+jj9E1/mMEG..."
        />
      </defs>

      <rect width="32" height="32" fill="url(#pattern0)" />
    </svg>
  );
}

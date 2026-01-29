import React from "react";

type IconProps = {
  size?: number;
  className?: string;
};

export default function leadership({
  size = 32,
  className,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="iconPattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            href="#iconImage"
            transform="scale(0.00390625)"
          />
        </pattern>

        <image
          id="iconImage"
          width="256"
          height="256"
          preserveAspectRatio="none"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAQAElEQVR4AeydCXxcRf3A32zStIVy0zZJKZVLVDwQRDlKs5u0hXIqUOSPoiCoyCHKjaAUBLmEohyCnHIKFREQetBmNymngiByKKi1tE3SFlBoaZtkd+f//W2TsEn3zXu7+/ZIdvKZyb4385vfzPxmfr/5zW+OF3Lsn6WApUDFUsAKgIpteltxSwH..."
        />
      </defs>

      <rect width="32" height="32" fill="url(#iconPattern)" />
    </svg>
  );
}

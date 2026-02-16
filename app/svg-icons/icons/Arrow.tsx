import React from "react";

type IconProps = {
    size?: number;
    className?: string;
};

export default function Arrow({ size = 32, className }: IconProps) {
    return (
        <svg width="117" height="151" viewBox="0 0 117 151" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
<path d="M47 1L114.68 75.5L47 150" stroke="#666666" stroke-width="2"/>
<path d="M24 1L91.6797 75.5L24 150" stroke="#95B562" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 1L68.6797 75.5L1 150" stroke="#BFA031" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    );
}

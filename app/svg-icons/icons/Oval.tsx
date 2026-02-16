import React from "react";

type IconProps = {
    size?: number;
    className?: string;
};

export default function Oval({ size = 32, className }: IconProps) {
    return (
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none"  className={className} xmlns="http://www.w3.org/2000/svg">
<path d="M179.82 32.3984C98.4026 32.3984 32.4004 98.4006 32.4004 179.818" stroke="#BFA031" stroke-width="64.8"/>
</svg>
    );
}

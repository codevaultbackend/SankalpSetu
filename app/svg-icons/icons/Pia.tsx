import React from "react";

type IconProps = {
    size?: number;
    className?: string;
};

export default function Pia({ size = 32, className }: IconProps) {
    return (
   <svg width="180" height="204" className={className} viewBox="0 0 180 204" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77.2002 184C122.457 184 159.145 147.287 159.145 102C159.145 56.7127 122.457 20 77.2002 20C52.399 20 30.1712 31.0255 15.1445 48.4456" stroke="#C2A037" stroke-width="40"/>
<path d="M79.6917 130C95.4057 130 108.145 117.464 108.145 102C108.145 86.536 95.4057 74 79.6917 74C71.0801 74 63.3621 77.7648 58.1445 83.7131" stroke="#77C377" stroke-width="40"/>
</svg>


    );
}

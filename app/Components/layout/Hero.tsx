"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative max-[600px]:!h-[270px] lg:!h-[767px] w-full overflow-hidden object-cover">
      {/* Background Video */}
      <div className="relative w-full h-[767px] max-[600px]:h-[270px] lg:h-screen">
        {/* Desktop banner */}
        <Image
          src="/Home-Banner.png"
          alt="Banner"
          fill
          priority
          className="hidden sm:block h-full "
        />

        {/* Mobile banner */}
        <Image
          src="/MobileBanner.png"
          alt="Banner"
          fill
          priority
          className="block sm:hidden h-full "
        />
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <span className="text-[#000] text-xs sm:text-sm">
            23,800 trees planted
          </span>

          <div className="hidden sm:block flex-1 h-px bg-[#000]" />

          <span className="text-[#000] text-xs sm:text-sm">
            5840 donations collected
          </span>
        </div>
      </div>
    </section>
  );
}

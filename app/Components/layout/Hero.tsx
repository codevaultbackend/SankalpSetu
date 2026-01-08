"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[85vh] lg:h-[90vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        src="https://res.cloudinary.com/dfixlpc1b/video/upload/q_auto:low,f_auto/v1758605308/floodvideo_xwb2oa.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col justify-center max-w-full sm:max-w-3xl">
          <h1 className="text-white text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-tight">
            Save the environment <br />
            today for a better <br />
            tomorrow
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <Link
              href="/what-we-do"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
            >
              What we do
            </Link>

            <button className="flex items-center gap-2 text-white font-medium hover:opacity-80 transition">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white">
                <Play size={16} fill="white" />
              </span>
              Play Video
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <span className="text-white text-xs sm:text-sm">
            23,800 trees planted
          </span>

          <div className="hidden sm:block flex-1 h-px bg-white/40" />

          <span className="text-white text-xs sm:text-sm">
            5840 donations collected
          </span>
        </div>
      </div>
    </section>
  );
}

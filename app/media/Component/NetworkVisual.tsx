"use client";

import Image from "next/image";

type AvatarConfig = {
  x: number;
  y: number;
  size: number;
};

const leftAvatars: AvatarConfig[] = [
  { x: 260, y: 140, size: 96 }, // top big
  { x: 240, y: 300, size: 64 }, // mid
  { x: 240, y: 460, size: 64 }, // mid
  { x: 260, y: 620, size: 72 }, // bottom
];

const rightAvatars: AvatarConfig[] = [
  { x: 1180, y: 140, size: 96 }, // top big
  { x: 1200, y: 300, size: 64 },
  { x: 1200, y: 460, size: 64 },
  { x: 1180, y: 620, size: 72 },
];

export default function NetworkVisual() {
  return (
    <section className="relative w-full min-h-screen bg-[#1e1b3a] flex items-center justify-center overflow-hidden">
      <div className="relative w-[1440px] h-[800px] scale-[0.85] xl:scale-100">
        
        {/* SVG CURVES */}
        <svg className="absolute inset-0" viewBox="0 0 1440 800" fill="none">
          {/* LEFT */}
          <path d="M260 140 C 520 40, 560 360, 720 400" stroke="rgba(255,255,255,0.35)" />
          <path d="M240 300 C 520 260, 600 360, 720 400" stroke="rgba(255,255,255,0.35)" />
          <path d="M240 460 C 520 540, 600 440, 720 400" stroke="rgba(255,255,255,0.35)" />
          <path d="M260 620 C 520 700, 600 500, 720 400" stroke="rgba(255,255,255,0.35)" />

          {/* RIGHT */}
          <path d="M1180 140 C 920 40, 880 360, 720 400" stroke="rgba(255,255,255,0.35)" />
          <path d="M1200 300 C 920 260, 840 360, 720 400" stroke="rgba(255,255,255,0.35)" />
          <path d="M1200 460 C 920 540, 840 440, 720 400" stroke="rgba(255,255,255,0.35)" />
          <path d="M1180 620 C 920 700, 840 500, 720 400" stroke="rgba(255,255,255,0.35)" />
        </svg>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white p-10 rounded-2xl shadow-2xl">
            <Image
              src="/SankalpSetuLogo.png"
              alt="Logo"
              width={140}
              height={140}
            />
          </div>
        </div>

        {/* LEFT AVATARS */}
        {leftAvatars.map((a, i) => (
          <Avatar key={i} {...a} />
        ))}

        {/* RIGHT AVATARS */}
        {rightAvatars.map((a, i) => (
          <Avatar key={i} {...a} />
        ))}
      </div>
    </section>
  );
}

function Avatar({ x, y, size }: AvatarConfig) {
  return (
    <div
      className="absolute"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        width: size,
        height: size,
      }}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden border border-white shadow-lg">
        <Image
          src="/HeroBg.png"
          alt="Avatar"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

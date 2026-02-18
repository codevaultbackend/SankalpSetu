"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-4 px-4 max-[600px]:!px-1 bg-white">

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid max-w-[1440px] mx-auto grid-cols-3 xl:grid-cols-5 gap-8">

        <div className="hidden xl:flex flex-col gap-8">
          <Card95 />
          <SpreadLove />
          <GallerySmall />
          <MedicationCard />
        </div>

        <div className="flex flex-col gap-8 justify-center">
          <GalleryBig />
          <EducationCard />
        </div>

        <div className="flex flex-col gap-8 justify-center">
          <DonateCard />
          <DonateCard />
        </div>

        <div className="flex flex-col gap-8 justify-center">
          <EducationCard />
          <GalleryBig />
        </div>

        <div className="hidden xl:flex flex-col gap-8">
          <MedicationCard />
          <GallerySmall />
          <SpreadLove />
          <Card95 />
        </div>
      </div>

      {/* ================= MOBILE – FIXED ================= */}
      <div className="lg:hidden md-hidden mx-auto w-full grid grid-cols-3 gap-[14px] auto-rows-auto">

        <div className="row-span-2">
          <GalleryBig mobile />
        </div>

        <DonateCard mobile />

        <div className="row-span-2">
          <GalleryBig mobile />
        </div>

        <HomeMaternalCard />

        <div className="row-span-2">
          <Card95 mobile />
        </div>

        <div className="row-span-1">
          <SpreadLove mobile />
        </div>

        <div className="row-span-2">
          <Education95 />
        </div>

        <div className="col-start-2">
          <DonateCard mobile />
        </div>
      </div>
    </section>
  );
}

/* ===================== COMPONENTS ===================== */

function GalleryBig({ mobile = false }) {
  return (
    <div
      className={`rounded-[32px] overflow-hidden ${
        mobile ? "aspect-[3/5]" : "h-[420px]"
      }`}
    >
      <img
        src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769165864/Frame_414_tjoala.png"
        className="w-full h-full object-fill"
        alt=""
      />
    </div>
  );
}

function Card95({ mobile = false }) {
  return (
   <div className="rounded-[32px] bg-[#0d3b2e] p-5 max-[600px]:!p-[11px] text-white flex flex-col justify-between aspect-[3/5]">
      <h3 className="text-[15px] min-[600px]:text-[27px] font-bold">96%</h3>
      <p className="text-[7px] leading-snug min-[600px]:text-[17px] line-clamp-5">
        Sankalp Setu Foundation organized a community-driven event focused on education and awareness.
      </p>
      <div className="flex justify-between items-center">
        <span className="text-[7px] min-[600px]:text-[15px]">Learn More</span>
        <span className="bg-lime-400 text-black w-6 h-6 flex items-center justify-center rounded-full">
          ↗
        </span>
      </div>
    </div>
  );
}

function SpreadLove({ mobile = false }) {
  return (
    <div
      className={`rounded-[32px] overflow-hidden `}
    >
      <img
        src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168055/ss_page_assets/zn5jvdca3evdjld0gzur.png"
        className="w-full h-full object-cover max-[600px]:object-fill"
        alt=""
      />
    </div>
  );
}

function DonateCard({ mobile = false }) {
  return (
    <div
      className={`rounded-[28px] overflow-hidden ${
        mobile ? "aspect-[3/3]" : "h-[220px]"
      }`}
    >
      <img
        src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085323/ss_page_assets/twtiedy19vcpvfjbanee.png"
        className="w-full h-full object-cover max-[600px]:!object-fill"
        alt=""
      />
    </div>
  );
}

function Education95() {
  return (
    <div className="rounded-[32px] bg-[#0d3b2e] p-5 text-white flex flex-col justify-between aspect-[3/5]">
      <h3 className="text-[17px] font-bold">96%</h3>
      <p className="text-[7px] leading-snug min-[600px]:text-[17px] line-clamp-5">
        Sankalp Setu Foundation organized a community-driven event focused on education and awareness.
      </p>
      <div className="flex justify-between items-center">
        <span className="text-[8px]">Learn More</span>
        <span className="bg-lime-400 text-black w-7 h-7 flex items-center justify-center rounded-full">
          ↗
        </span>
      </div>
    </div>
  );
}

function EducationCard() {
  return (
    <div className="relative h-[360px] rounded-[40px] overflow-hidden">
      <Image
        src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089223/ss_page_assets/pdj9wx0oygwbgeekysza.png"
        fill
        className="object-cover"
        alt=""
      />
    </div>
  );
}

function MedicationCard() {
  return (
    <div className="relative h-[360px] rounded-[40px] overflow-hidden">
      <Image
        src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089212/ss_page_assets/yikgr1anqgi0eh3zuyop.png"
        fill
        className="object-cover"
        alt=""
      />
    </div>
  );
}

function GallerySmall() {
  return (
    <div className="h-[195px] rounded-[40px] overflow-hidden">
      <img
        src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168055/ss_page_assets/aa6zuovwopbho1kfg8kx.png"
        className="w-full h-full object-cover"
        alt=""
      />
    </div>
  );
}

function HomeMaternalCard() {
  return (
    <div className="rounded-[28px] bg-[#2f2f2f] flex flex-col items-center justify-center text-center px-3 aspect-[3/2]">
      <span className="text-lime-400 text-xl mb-1">♡</span>
      <p className="text-lime-400 font-semibold text-[12px] leading-tight">
        Home for<br />Maternal Help
      </p>
    </div>
  );
}

"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-14 px-4">

      {/* ================= DESKTOP / LG / XL ================= */}
      <div className="hidden lg:grid max-w-[1440px] mx-auto grid-cols-3 xl:grid-cols-5 gap-8">

        {/* COLUMN 1 — XL ONLY */}
        <div className="hidden xl:flex flex-col gap-8">
          <Card95 />
          <SpreadLove />
          <GallerySmall />
          <MedicationCard />
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-8 justify-center">
          <GalleryBig />
          <EducationCard />
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-8 justify-center">
          <DonateCard />
          <DonateCard />
        </div>

        {/* COLUMN 4 */}
        <div className="flex flex-col gap-8 justify-center">
          <EducationCard />
          <GalleryBig />
        </div>

        {/* COLUMN 5 — XL ONLY */}
        <div className="hidden xl:flex flex-col gap-8">
          <MedicationCard />
          <GallerySmall />
          <SpreadLove />
          <Card95 />
        </div>
      </div>

      {/* ================= MOBILE (EXACT IMAGE MATCH) ================= */}
      <div className="lg:hidden max-w-md mx-auto grid grid-cols-3 gap-4 auto-rows-[120px]">

        {/* LEFT IMAGE */}
        <div className="row-span-2">
          <GalleryBig mobile />
        </div>

        {/* TOP CENTER */}
        <div>
          <DonateCard mobile />
        </div>

        {/* RIGHT IMAGE */}
        <div className="row-span-2">
          <GalleryBig mobile />
        </div>

        {/* CENTER CARD */}
        <div>
          <HomeMaternalCard />
        </div>

        {/* LOWER LEFT */}
        <div className="row-span-2">
          <Card95 mobile />
        </div>

        {/* LOWER CENTER */}
        <div className="row-span-2">
          <SpreadLove mobile />
        </div>

        {/* LOWER RIGHT */}
        <div className="row-span-2">
          <Education95 />
        </div>

        {/* BOTTOM CENTER */}
        <div className="col-start-2">
          <DonateCard mobile />
        </div>

      </div>
    </section>
  );
}

/* ===================== CARDS ===================== */

function Card95({ mobile = false }) {
  return (
    <div className={`${mobile ? "h-full min-h-[260px]" : "h-[400px]"} rounded-[40px] overflow-hidden`}>
      <img src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089201/ss_page_assets/n2qkiqi4w1vsrloigdz4.png" className="w-full h-full object-cover" />
    </div>
  );
}

function EducationCard() {
  return (
    <div className="relative h-[360px] rounded-[40px] overflow-hidden">
      <Image src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089223/ss_page_assets/pdj9wx0oygwbgeekysza.png" fill className="object-cover" alt="" />
    </div>
  );
}

function Education95() {
  return (
    <div className="h-full min-h-[260px] rounded-[40px] overflow-hidden bg-[#0d3b2e] p-5 text-white flex flex-col justify-between">
      <h3 className="text-4xl font-bold">96%</h3>
      <p className="text-sm">
        Sankalp Setu Foundation organized a community-driven event focused on education and awareness.
      </p>
      <div className="flex justify-between items-center">
        <span>Learn More</span>
        <span className="bg-lime-400 text-black w-8 h-8 flex items-center justify-center rounded-full">↗</span>
      </div>
    </div>
  );
}

function MedicationCard() {
  return (
    <div className="relative h-[360px] rounded-[40px] overflow-hidden">
      <Image src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089212/ss_page_assets/yikgr1anqgi0eh3zuyop.png" fill className="object-cover" alt="" />
    </div>
  );
}

function DonateCard({ mobile = false }) {
  return (
    <div className={`${mobile ? "h-full min-h-[140px]" : "h-[220px]"} rounded-[40px] overflow-hidden`}>
      <img src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085323/ss_page_assets/twtiedy19vcpvfjbanee.png" className="w-full h-full object-cover" />
    </div>
  );
}

function GalleryBig({ mobile = false }) {
  return (
    <div className={`${mobile ? "h-full min-h-[260px]" : "h-[420px]"} rounded-[40px] overflow-hidden`}>
      <img src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769165864/Frame_414_tjoala.png" className="w-full h-full object-cover" />
    </div>
  );
}

function GallerySmall() {
  return (
    <div className="h-[195px] rounded-[40px] overflow-hidden">
      <img src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168055/ss_page_assets/aa6zuovwopbho1kfg8kx.png" className="w-full h-full object-cover" />
    </div>
  );
}

function SpreadLove({ mobile = false }) {
  return (
    <div className={`${mobile ? "h-full min-h-[260px]" : "h-[195px]"} rounded-[40px] overflow-hidden bg-black`}>
      <img src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168055/ss_page_assets/zn5jvdca3evdjld0gzur.png" className="w-full h-full object-cover" />
    </div>
  );
}

function HomeMaternalCard() {
  return (
    <div className="h-full min-h-[140px] rounded-[36px] bg-[#2f2f2f] flex flex-col items-center justify-center text-center px-4">
      <span className="text-lime-400 text-3xl mb-2">♡</span>
      <p className="text-lime-400 font-semibold">Home for<br />Maternal Help</p>
    </div>
  );
}

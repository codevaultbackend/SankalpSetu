import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-14 px-4">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

        {/* COLUMN 1 — ONLY XL */}
        <div className="hidden xl:flex flex-col gap-8">
          <Card95 />
          <SpreadLove />
          <GallerySmall />
          <MedicationCard />
        </div>

        {/* COLUMN 2 — LG+ */}
        <div className="hidden lg:flex flex-col gap-8 justify-center">
          <GalleryBig />
          <EducationCard />
        </div>

        {/* COLUMN 3 — ALWAYS */}
        <div className="flex flex-col gap-8 justify-center">
          <DonateCard />
          <DonateCard />
        </div>

        {/* COLUMN 4 — LG+ */}
        <div className="hidden lg:flex flex-col gap-8 justify-center">
          <EducationCard />
          <GalleryBig />
        </div>

        {/* COLUMN 5 — ONLY XL */}
        <div className="hidden xl:flex flex-col gap-8">
          <MedicationCard />
          <GallerySmall />
          <SpreadLove />
          <Card95 />
        </div>
      </div>
    </section>
  );
}

/* ===================== CARDS ===================== */

function Card95() {
  return (
    <div className="h-[400px] rounded-[40px] overflow-hidden">
      <img src="/hero1.png" alt="" className="w-full h-full object-cover" />
    </div>
  );
}

function EducationCard() {
  return (
    <div className="relative h-[360px] rounded-[40px] overflow-hidden">
      <Image src="/hero5.png" fill alt="" className="object-cover" />
    </div>
  );
}

function MedicationCard() {
  return (
    <div className="relative h-[360px] rounded-[40px] overflow-hidden">
      <Image src="/hero4.png" fill alt="" className="" />
    </div>
  );
}

function DonateCard() {
  return (
    <div className="h-[220px] rounded-[40px] overflow-hidden">
      <img src="/hero7.png" alt="" className="w-full h-full " />
    </div>
  );
}

function GalleryBig() {
  return (
    <div className="h-[420px] rounded-[40px] overflow-hidden">
      <img src="/hero6.png" alt="" className="w-full h-full " />
    </div>
  );
}

function GallerySmall() {
  return (
    <div className="h-[195px] rounded-[40px] overflow-hidden">
      <img src="/hero3.png" alt="" className="w-full h-full " />
    </div>
  );
}

function SpreadLove() {
  return (
    <div className="h-[195px] rounded-[40px] overflow-hidden bg-black border border-gray-800">
      <img src="/hero2.png" alt="" className="w-full h-full " />
    </div>
  );
}

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
        <div className=" lg:flex flex-col gap-8 justify-center">
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
    <div className="h-[400px] rounded-[40px] mt-[12px] overflow-hidden">
      <img src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089201/ss_page_assets/n2qkiqi4w1vsrloigdz4.png" alt="" className="w-full h-full object-cover" />
    </div>
  );
}

function EducationCard() {
  return (
    <div className="relative h-[360px] mt-[12px] rounded-[40px] overflow-hidden">
      <Image src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089223/ss_page_assets/pdj9wx0oygwbgeekysza.png" fill alt="Meternity Programs" className="object-cover" />
    </div>
  );
}

function MedicationCard() {
  return (
    <div className="relative h-[360px] mt-[12px] rounded-[40px] overflow-hidden">
      <Image src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089212/ss_page_assets/yikgr1anqgi0eh3zuyop.png" fill alt="" className="" />
    </div>
  );
}

function DonateCard() {
  return (
    <div className="h-[220px] mt-[12px] rounded-[40px] overflow-hidden">
      <img src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085323/ss_page_assets/twtiedy19vcpvfjbanee.png" alt="" className="w-full h-full " />
    </div>
  );
}

function GalleryBig() {
  return (
    <div className="h-[420px] mt-[12px] rounded-[40px] overflow-hidden">
      <img src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769165864/Frame_414_tjoala.png" alt="" className="w-full h-full " />
    </div>
  );
}

function GallerySmall() {
  return (
    <div className="h-[195px] mt-[12px] rounded-[40px] overflow-hidden">
      <img src="/hero3.png" alt="" className="w-full h-full " />
    </div>
  );
}

function SpreadLove() {
  return (
    <div className="h-[195px] mt-[12px] rounded-[40px] overflow-hidden bg-black border border-gray-800">
      <img src="/hero2.png" alt="" className="w-full h-full " />
    </div>
  );
}

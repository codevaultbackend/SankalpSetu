import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function AboutNonProfitSection() {
  return (
    <section className="w-full bg-white py-16 relative">
      <div className="green-overlay bg-[#EFF7F2] absolute w-full bottom-0 h-[60%]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* ================= HEADER ================= */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[1px] w-[72px] bg-[#1D2130]" />
            <span className="text-[16px] font-[700] uppercase tracking-widest text-[#1D2130]">
              Know About Us
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-start  mx-auto max-[600px]:gap-5">
            <h2 className="text-[56px] font-[700] leading-[120%] text-[#1D2130] md:text-4xl max-[600px]:text-[31px]">
              We are a nonprofit team working worldwide
            </h2>

            <div className="text-sm leading-relaxed text-gray-600">
              <p className="mb-4 font-medium text-gray-800">
                We are a purpose-driven nonprofit organization committed to
                creating meaningful and lasting change in communities around the
                world.
              </p>
              <p>
                We believe that real change begins when people come together
                with a shared vision.
              </p>
            </div>
          </div>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="relative mt-[96px] overflow-hidden rounded-xl max-[600px]:mt-[54px]">
          <Image
            src="/AboutBanner.png"
            alt="Nonprofit Team"
            width={1400}
            height={448}
            className="h-[448px] w-full object-cover sm:h-[360px] md:h-[420px]"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg hover:scale-105 transition">
              <PlayIcon className="h-7 w-7 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="mt-[40px] grid gap-10 md:grid-cols-2 max-w-[1080px] mx-auto">
          {/* ================= VISION ================= */}
          <div className="relative rounded-[32px] border border-[#7BC47F] bg-[#F3FAF4] px-10 max-[600px]:px-5 max-[600px]:pt-[70px] pt-[120px] pb-10 max-w-[520px] overflow-hidden">
            {/* diagonal background lines */}
            <img
              src="/vissionbg.png"
              alt=""
              className="absolute top-0 left-0 w-full h-[186px] max-[600px]:h-[142px]  object-cover opacity-100 z-0"
            />

            {/* floating icon */}
            <div className="absolute top-[7px] left-[40px]   z-10">
              <img
                src="/vissionIcon.png"
                alt="Vision icon"
                className="object-contain max-[600px]:!w-[120px] max-[600px]:!h-[130px] !w-[145px] !h-[166px]"
              />
            </div>

            <div className="mt-[75px]">
              <h3 className="relative z-10 mt-[90px] max-[600px]:mt-[10px] mb-4 text-[40px] font-serif font-semibold text-[#3E7B2C]">
                Vision
              </h3>

              <p className="relative z-10 text-[16px] leading-[165%] text-[#1D2130] mb-6 max-w-[420px]">
                A Bihar where every individual has the opportunity to live with
                purpose, dignity, and hope.
              </p>

              <ul className="relative z-10 space-y-2 text-[16px] text-[#1D2130]">
                <li>
                  • Empowering communities to create a better and more equal
                  future.
                </li>
                <li>
                  • A future where dignity, opportunity, and hope are accessible
                  to all.
                </li>
              </ul>
            </div>
          </div>

          {/* ================= MISSION ================= */}
          <div className="relative rounded-[32px] border border-[#7BC47F] bg-[#F3FAF4] px-10 pt-14 pb-[140px] max-w-[520px] overflow-hidden">
            {/* curved background lines */}
            <img
              src="/missionbg.png"
              alt=""
              className="absolute bottom-0 right-0 w-full h-[252px] max-[600px]:h-[152px] object-cover z-0"
            />

            <h3 className="relative z-10 mb-6 text-[40px] font-serif font-semibold text-[#3E7B2C]">
              Mission
            </h3>

            <ul className="relative z-10 space-y-4 text-[16px] leading-[165%] text-[#1D2130] max-w-[440px]">
              <li>
                • Empowering underserved communities in Bihar by bridging gaps
                in education, healthcare, and opportunity.
              </li>
              <li>
                • Creating sustainable change in Bihar through compassion,
                inclusion, and community-driven action.
              </li>
            </ul>

            {/* target icon */}

            <img
              src="/MissionIcon.png"
              alt="mission"
              className="absolute bottom-[36px] right-[36px] w-[120px] h-[120px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

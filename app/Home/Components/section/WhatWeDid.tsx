"use client";

import Image from "next/image";
import Link from "next/link";
import { useServices } from "../../../context/ServicesContext";

export default function WhatWeDid() {
  const { whatWeDid } = useServices();

  // Convert object → array and take only 3 items
  const projects = Object.entries(whatWeDid)
    .map(([slug, item]) => ({
      slug,
      ...item,
    }))
    .slice(0, 3);

  return (
    <section className="bg-white relative max-w-[97%] mx-auto">
      <div className="bg-gradient-to-b from-[#1A1A1A] to-black absolute !h-[60%] max-[760px]:!h-[80%] bottom-0 w-full"></div>

      <div className="max-w-[1287px] mx-auto px-6 py-28 max-[600px]:pb-0 !pt-[32px] relative z-[9999]">
        {/* Header */}
        <span className="text-[24px] font-[500] tracking-[0.25em] leading-[100%] text-gray-400 block mb-4">
          DONE PROJECTS
        </span>

        <div className="flex items-start justify-between gap-10 mb-8">
          <div className="max-w-[900px]">
            <div className="flex items-center gap-6 mb-6">
              <h2 className="!text-[48px] max-[600px]:!text-[24px] font-[700] tracking-tight">
                WHAT WE DID
              </h2>
              <span className="h-[1px] w-20 bg-black/30" />
            </div>

            <p className="text-[20px] font-[500] leading-7 text-[#151414] leading-[150%]">
              We create real impact where it matters most. From skill training to
              health camps and women's economic freedom, our work transforms
              lives at the grassroots level.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item) => (
            <div key={item.slug} className="relative z-[9999] max-[800px]:max-w-[420px] max-[800px]:mx-auto">
              <div className="relative h-[430px] !max-w-[420px] w-full  ">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover max-[600px]:!w-fit max-[600px]:h-[430px] max-[600px]:max-w-auto"
                />
              </div>

              <div className="bg-transparent text-[#ffffff] px-6 py-8">
                <h3 className="text-[24px] font-[700] leading-[190%] tracking-widest mb-4 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-[16px] font-[700] leading-[150%] tracking-tight text-white leading-6 mb-6 line-clamp-3">
                  {item.tagline}
                </p>

                {/* CTA → Dynamic Slug */}
                <Link
                  href={`/what-we-did/${item.slug}`}
                  className="w-10 h-10 border border-white/30 !rounded-full !-rotate-[48deg] flex items-center justify-center hover:!bg-white  hover:!text-black text-white transition !no-underline"
                >
                  →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="pb-[10px] text-white relative z-[9999]">
        <div className="max-w-[900px] mx-auto text-center px-6">
          <p className="text-[26px] leading-[190%] font-[700] mb-12 max-[600px]:!text-[16px]">
            "WE BELIEVE EVERY YOUNG PERSON DESERVES A CHANCE TO SUCCEED. AT
            SANKALP SETU, WE'RE NOT JUST TEACHING SKILLS—WE'RE BUILDING
            CONFIDENCE, CREATING OPPORTUNITIES, AND EMPOWERING COMMUNITIES TO
            RISE TOGETHER."
          </p>

          <div className="flex items-center justify-center gap-6 mb-4 !text-[26px] max-[600px]:!text-[21px] font-[700]">
            <span className="w-10 h-[1px] bg-[#4F4F4F]" />
            <span className="text-[#4F4F4F] uppercase tracking-widest">
              Deepak Kumar
            </span>
            <span className="w-10 h-[1px] bg-[#4F4F4F]" />
          </div>

          <p className="text-[#4F4F4F] !text-[26px]">(Founder & Chairperson)</p>
        </div>
      </div>
    </section>
  );
}

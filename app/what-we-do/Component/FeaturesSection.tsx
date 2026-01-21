"use client";

import Link from "next/link";
import Image from "next/image";
import { useServices } from "@/app/context/ServicesContext";

export default function FeaturesSection() {
  const { services } = useServices();
  const serviceArray = Object.entries(services).map(([slug, service]) => ({
    slug,
    title: service.title,
    description: service.des,
    image: service.image,
    tagline: service.tagline,
    icon: "▭", // You can customize icons per service if needed
    bg: "bg-red-100",
    color: "text-red-500",
  }));

  return (
    <section className="w-full bg-white py-20" id="ourimpactAreas">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="relative text-center mb-20">
          <div className="absolute left-0 top-1/2 flex flex-col -translate-y-1/2 hidden md:flex gap-2">
            <span className="w-34 h-[3px] bg-[#FF9933] rounded" />
            <span className="w-34 h-[3px] bg-[#E8E8E8] rounded" />
            <span className="w-34 h-[3px] bg-[#138808] rounded" />
          </div>

          <div className="absolute right-0 top-1/2 flex flex-col -translate-y-1/2 hidden md:flex gap-2">
            <span className="w-34 h-[3px] bg-[#FF9933] rounded" />
            <span className="w-34 h-[3px] bg-[#E8E8E8] rounded" />
            <span className="w-34 h-[3px] bg-[#138808] rounded" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            OUR IMPACT AREAS
          </h2>
        </div>

        {/* Responsive Zig-Zag Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
          {[0, 1, 2, 3].map((col) => (
            <div
              key={col}
              className={`flex flex-col gap-14 ${
                col % 2 === 1 ? "lg:mt-24 sm:mt-10" : ""
              }`}
            >
              {serviceArray
                .filter((_, i) => i % 4 === col)
                .map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/ServiceDetails/${item.slug}`}
                    className="bg-white w-full max-w-[230px] mx-auto rounded-xl shadow-md px-[13px] py-8 text-center hover:shadow-lg transition !no-underline"
                  >
                    {/* Icon */}
                    <div
                      className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg ${item.bg}`}
                    >
                      <span className={`text-xl font-bold ${item.color}`}>
                        {item.icon}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="!text-[16px] !font-semibold !leading-[24px] !text-[#252B42] mb-3">
                      {item.title}
                    </h3>

                    {/* Divider */}
                    <div className="mx-auto mb-4 h-[2px] w-6 bg-red-400" />

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.tagline}
                    </p>
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

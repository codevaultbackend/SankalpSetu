"use client";

import Image from "next/image";
import Link from "next/link";
import { useServices } from "@/app/context/ServicesContext";

export default function ServicesGrid() {
  const { latestWork } = useServices();

  // Convert object → array
  const cards = Object.entries(latestWork).map(([slug, item]) => ({
    slug,
    ...item,
  }));

  return (
    <section className="!py-[10px] !pt-[60px] max-[600px]:!pt-[48px] mb-[33px]">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-center text-[18px] sm:text-[20px] font-[600] text-black leading-[100%]">
          Latest Work
        </h2>
        <div className="h-[3px] border-t-[0.5px] border-b-[0.5px] border-[#133700] max-w-[160px] max- mx-auto mb-10 sm:mb-[55px]" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 place-items-center">
          {cards.map((card) => (
            <div
              key={card.slug}
              className="
                overflow-hidden
                rounded-[10px]
                bg-[#E6F2D3]
                transition-transform
                duration-300
                hover:-translate-y-1
                w-full
                max-w-[343px]
                max-h-[300px]
                shadow-[2px_3px_4px_#807f7f]
                pb-[10px]
              "
            >
              {/* Image */}
              <div className="relative h-[160px] sm:h-[170px] w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-5 sm:!px-6 sm:!py-6 max-[600px]:py-6">
                <h3 className="text-[18px] sm:!text-[17px] font-[400] mb-3 !text-black line-clamp-2">
                  {card.title}
                </h3>

                {/* CTA → Dynamic Link */}
                <Link className=" !text-[#133700] text-[12px] font-[400] !no-underline" href={`/latestwork/${card.slug}`}>Know More →</Link>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom right “More →” (optional) */}
        {/* <div className="flex justify-center sm:justify-end mt-10 sm:mt-12">
          <button className="text-[#133700] text-[15px] sm:text-[16px] font-[500] flex items-center gap-2 sm:mr-[30px]">
            More <span className="text-[18px]">→</span>
          </button>
        </div> */}
      </div>
    </section>
  );
}

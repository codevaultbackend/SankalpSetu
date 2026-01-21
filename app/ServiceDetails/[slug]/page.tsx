"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { useServices } from "@/app/context/ServicesContext";
import { use } from "react";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function ServiceDetailsPage({ params }: Props) {
  const resolvedParams = use(params); // unwrap Promise
  const { getServiceBySlug } = useServices();
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) return notFound();

  return (
    <section className="bg-white py-16 lg:!py-8">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col gap-2">
        {/* Title & subtitle */}
        <h1 className="text-4xl lg:text-5xl font-bold !mb-12 text-center">
          {service.title}
        </h1>
        <div className="lg:flex lg:flex-row w-full ">
          <div className="w-[50%] max-[650px]:!w-full">
            <p className="text-[#0e7a7a] font-bold leading-[150%] text-sm lg:text-[25px] mb-8">
              {service.tagline}
            </p>
            <p className="text-gray-600 text-sm lg:text-[17px] mb-8">
              {service.des}
            </p>
          </div>

          <div className="w-[50%] max-[650px]:w-full h-[320px] lg:h-[420px]  relative rounded-xl overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover rounded-xl w-full"
            />
          </div>
        </div>

        {/* Sections */}
        {service.sections.map((section, index) => (
          <div className="">
            <div key={index} className=" ">
              {/* CONTENT */}
              <div className="flex flex-col gap-4 w-full">
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  {index === 0 ? service.title : section.title}
                </h2>

                {index === 0 && (
                  <p className="text-gray-600 leading-relaxed">
                    {service.tagline}
                  </p>
                )}

                {index !== 0 && (
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="w-[90%] h-[2px] max-w-[1180px] mx-auto my-[50px]" />
      <Link href="/ContactUs" className="!no-underline">
      <button className="mx-auto mt-2 !block !rounded-md bg-[#1C1D28] px-5 py-2 text-sm font-semibold text-white text-center hover:bg-black transition">Contact Us</button></Link>
      
    </section>
  );
}

"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { useServices } from "@/app/context/ServicesContext";
import Link from "next/link";

type Props = {
  params: { slug: string }; // <- fixed: remove Promise
};

export default function WhatWeDidDetailPage({ params }: Props) {
  const resolvedParams = params; // <- fixed: no use() here
  const { getWhatWeDidBySlug } = useServices();
  const project = getWhatWeDidBySlug(resolvedParams.slug);

  if (!project) return notFound();

  return (
    <section className="bg-white py-16 lg:!py-8">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col gap-2">
        {/* Title & Subtitle */}
        <h1 className="text-4xl lg:text-5xl font-bold !mb-12 text-center">
          {project.title}
        </h1>
        <p className="text-[#0e7a7a] font-bold leading-[150%] text-sm lg:text-[25px] mb-8 text-center">
          {project.tagline}
        </p>

        {/* Image & Description */}
        <div className="lg:flex lg:flex-row w-full gap-8 items-start">
          <div className="w-full lg:w-[50%]">
            <p className="text-gray-600 text-sm lg:text-[17px] mb-8">
              {project.des}
            </p>
          </div>
          <div className="w-full lg:w-[50%] h-[320px] lg:h-[420px] relative rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Sections */}
        {project.sections.map((section, index) => (
          <div key={index} className="mt-8">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
              {index === 0 ? project.title : section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {index === 0 ? project.tagline : section.content}
            </p>
          </div>
        ))}
      </div>
      <div className=" !-h-[450px] !w-[1140px] w-full mx-auto  relative rounded-xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-xl w-full"
        />
      </div>
      <hr className="w-[90%] h-[2px] max-w-[1180px] mx-auto my-[50px]" />

      {/* CTA Button */}
      <Link href="/ContactUs" className="!no-underline">
        <button className="mx-auto mt-2 !block !rounded-md bg-[#1C1D28] px-5 py-2 text-sm font-semibold text-white text-center hover:bg-black transition">
          Contact Us
        </button>
      </Link>
    </section>
  );
}

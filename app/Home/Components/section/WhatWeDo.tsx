"use client";

import Link from "next/link";
import Image from "next/image";
import { useServices } from "@/app/context/ServicesContext";

export default function WhatWeDo() {
  const { services } = useServices();

  const visibleServices = Object.entries(services).slice(0, 3);

  return (
    <section className="bg-white sm:pb-24  pb-0 relative">
      {/* Background Decoration */}
      <img
        src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168056/ss_page_assets/wgkex80xyrs5gurrzsne.png"
        alt="CircularArrow"
        className="absolute max-[1000px]:h-[145px] max-[1000px]:w-[181px] max-[1000px]:top-[0px] max-[600px]:top-[-2%] h-[317px] w-[450px] right-0 -top-[8%] max-[900px]:top-0 "
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-16 sm:mb-20 lg:mb-[130px] max-[600px]:mb-[34px] grid grid-cols-1 lg:grid-cols-2 gap-12 max-[600px]:gap-0 lg:gap-20 items-start">
          <div>
            <h2 className="text-[48px] max-[600px]:!text-[24px]   sm:text-[38px] lg:text-[44px] font-[700] tracking-[0.21em] mb-6 flex flex-wrap gap-2 items-center max-[600px]:!mt-[40px] max-[600px]:tracking-[0.11em] ">
              WHAT WE DO ? 
              <span className="h-[1.5px] w-[80px] sm:w-[100px] bg-black"></span>
            </h2>

            <p className="text-[13px] font-semibold leading-[150%] text-black/70 max-w-md">
              At Sankalp Setu Foundation, we create meaningful change in
              Education and Healthcare for underserved communities in India.
            </p>
          </div>

          <div className="max-w-md lg:mt-auto lg:mb-[15px]">
            <p className="text-[16px] sm:text-[15px] leading-[150%] font-[500] text-black/70 mb-6">
              We believe in sustainable solutions over temporary fixes.
            </p>
            <Link
              href="/what-we-do#ourimpactAreas"
              scroll={true}
              className="!no-underline !text-black"
            >
              <button className="text-[14px] font-bold tracking-[0.1em] uppercase">
                FREE GUIDE
                <span className="h-[1px] bg-black block w-[50%] mr-auto mt-1"></span>
              </button>
            </Link>
          </div>
        </div>

        {/* SERVICES */}
        <div className="flex flex-col gap-24 max-[600px]:gap-10 sm:gap-28 lg:gap-[137px] max-w-[1043px] mx-auto">
          {visibleServices.map(([slug, service], index) => {
            const isEven = index % 2 !== 0;

            return (
              <div
                key={slug}
                className={`flex flex-col lg:flex-row items-center !gap-[126px] max-[600px]:!gap-8 lg:gap-24 ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px]">
                  <div
                    className={`absolute top-4 ${
                      isEven ? "-right-4" : "-left-4"
                    } w-full h-full bg-[#A6F77B]`}
                  />

                  <div className="relative w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="max-w-md text-center lg:!text-left">
                  <h3 className="relative mb-6 font-semibold !text-[40px] !leading-[130%] max-[600px]:!text-[22px] max-[600px]:!my-[3px] max-[600px]:!mb-[8px] max-[900px]:justify-center lg:text-[28px] flex flex-wrap gap-1">
                    {/* Outline / Shadow Text */}

                    {/* Main Visible Text */}
                    
                    <span
                      aria-hidden
                      className=" pointer-events-none select-none max-[600px]:!mx-auto !tracking-[0.06em] max-[800px]:text-center"
                      style={{
                        WebkitTextStroke: "1px #535353",
                        color: "transparent",
                      }}
                    >
                      {service.title}
                    </span>
                  </h3>

                  <p className="text-[16px] leading-[150%] text-black/70 mb-8  font-[500] line-clamp-7">
                    {service.des}
                  </p>

                  <Link
                    href="/what-we-do#ourimpactAreas"
                    scroll={true}
                    className="w-[44px] h-[44px] -rotate-[48deg] !text-[#151414] rounded-full border border-black flex items-center justify-center mx-auto lg:!mx-0 !no-underline"
                  >
                    →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type EventsCrouselProps = {
  reverse?: boolean;
};

const slides = [
  {
    tag: "Taste",
    title: "Flavours from Around the Globe: Culinary Adventures",
    desc: "Us to embark on a culinary adventure, experiencing the rich tapestry of flavours that various cultures offer. From the spicy curries of India to the delicate sushi of Japan.",
    author: "Norma Durham",
    date: "11 Jun 2024",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
  },
  {
    tag: "Travel",
    title: "Journey Beyond Borders: Discover Hidden Places",
    desc: "Explore untouched destinations, scenic coastlines, and hidden villages that redefine travel experiences across the globe.",
    author: "Alex Morgan",
    date: "22 Jun 2024",
    image: "https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg",
  },
  {
    tag: "Nature",
    title: "Into the Wild: Nature’s Most Scenic Escapes",
    desc: "Reconnect with nature through mountains, forests, and oceans that offer peace, thrill, and inspiration.",
    author: "Emma Stone",
    date: "30 Jun 2024",
    image: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg",
  },
];

export default function EventsCrousel({ reverse = false }: EventsCrouselProps) {
  return (
    <section className="relative max-w-[1440px]   mx-auto px-4 lg:px-12 py-24 max-[600px]:py-5 overflow-hidden">
      {/* Header */}
      {!reverse && (
        <div className="flex items-center justify-between mb-14 max-[600px]:mb-8 max-w-[983px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold max-w-xl leading-tight">
            Embark on Life&apos;s Greatest Travel Adventures Today
          </h2>
        </div>
      )}

      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={40}
        initialSlide={reverse ? 1 : 0}
        loop={true}
        navigation={{
          nextEl: reverse ? ".next-reverse" : ".next-normal",
          prevEl: reverse ? ".prev-reverse" : ".prev-normal",
        }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex  gap-14  items-center justify-center overflow-hidden ${
                reverse ? "lg:flex-row-reverse" : ""
              } max-[600px]:flex-none `}
            >
              {/* IMAGE */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={650}
                  height={664}
                  className="w-full h-[664px] lg:h-[664px] max-[600px]:max-w-full object-cover max-w-[548px]"
                />
              </div>

              {/* CONTENT CARD */}
              <div
                className={` relative max-[600px]:absolute max-[600px]:bottom-0 ${reverse ? "lg:-mr-32" : "lg:-ml-32"} rounded-2xl overflow-hidden`}
              >
                <div
                  className={`absolute top-4 right-0 flex gap-3 z-40 ${
                    reverse ? "right-4 " : ""
                  }`}
                >
                  <button
                    className={`${
                      reverse ? "prev-reverse" : "prev-normal"
                    } w-[44px] h-[44px] rounded-[8px] max-[600px]:!text-black max-[600px]:!border-[1px solid black] border max-[600px]:text-white flex items-center justify-center`}
                  >
                    <i className="fa-solid fa-chevron-left text-[16px]"></i>
                  </button>

                  <button
                    className={`${
                      reverse ? "next-reverse" : "next-normal"
                    } w-[44px] h-[44px] rounded-[8px]  bg-orange-400 text-white flex items-center justify-center`}
                  >
                    <i className="fa-solid fa-chevron-right text-[16px]"></i>
                  </button>
                </div>
                <div className="bg-white shadow-xl !rounded-2xl p-8 max-w-lg  overflow-hidden">
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-gray-100 mb-4">
                    {item.tag}
                  </span>

                  <h3 className="text-xl font-semibold mb-4 line-clamp-2">{item.title}</h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>By {item.author}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation */}
      </Swiper>
    </section>
  );
}

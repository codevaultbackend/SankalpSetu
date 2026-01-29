"use client";

import Link from "next/link";
import Slider from "react-slick";

export default function EventHero() {
  const banners = [
    {
      image:
        "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769511944/image_10.jpg_qtvdub.jpg",
      img2: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769511943/Ellipse_6_jsqgos.png",
      img3: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769511943/image_5_dtoqli.png", // use local image for exact match
      tag: "Sarswati Pooja Events  ||  Skill Development Training Center",
      title:
        "Celebrating Saraswati Pooja: Honouring Knowledge, Wisdom & Learning",
      description:
        "Sankalp Setu Foundation Organized Saraswati Pooja To Celebrate Knowledge, Learning, And Cultural Values. The Event Brought Together Children, Volunteers, And The Community In A Spirit Of Devotion, Unity, And Inspiration, Reinforcing The Importance Of Education And Wisdom.",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      <Slider {...settings}>
        {banners.map((item, index) => (
          <div key={index}>
            <div className="max-w-[1280px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-24">
              {/* LEFT IMAGE AREA */}
              <div className="relative w-full lg:w-1/2 flex justify-center">
                {/* MAIN PILL IMAGE */}
                <div className="relative w-[420px] h-[620px] rounded-[220px] overflow-hidden shadow-2xl">
                  <img
                    src={item.image}
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* SMALL FLOATING IMAGE */}
                <div className="absolute top-[85px] right-[50px] w-[140px] h-[140px] rounded-full overflow-hidden bg-white shadow-lg z-10">
                  <img
                    src={item.img3}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* OUTLINE RING */}
                <div className="absolute top-[45px] right-[10px] w-[220px] h-[220px] rounded-full border border-gray-300" />

                {/* BOTTOM BADGE */}
                <div className="absolute bottom-[30px] left-[20px] bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-600">
                    <img
                      src={item.img2}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    Join with skill development <br /> Training center
                  </span>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-semibold text-[#a0601a] mb-5">
                  {item.tag}
                </p>

                <h1 className="text-[40px] leading-[1.2] font-bold text-black mb-6">
                  {item.title}
                </h1>

                <p className="text-[16px] text-gray-600 leading-[1.9] max-w-[560px] mb-10">
                  {item.description}
                </p>

                <Link href="/ContactUs">
                  <button className="px-10 py-4 rounded-xl bg-[#7cc576] text-white font-medium shadow-md hover:bg-[#6bb765] transition">
                    Connect us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

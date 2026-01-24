"use client";

import Slider from "react-slick";

export default function EventHero() {
  const banners = [
    {
      image:
        "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769162512/ChatGPT_Image_Jan_23_2026_03_29_29_PM_px4vfz.png",
      title: "Celebrating Saraswati Pooja: Honouring Knowledge, Wisdom & Learning",
      subtitle: "Sarswati Pooja Events  ||  Skill Development Training Center",
      description:
        "Sankalp Setu Foundation organized Saraswati Pooja to celebrate knowledge, learning, and cultural values. The event brought together children, volunteers, and the community in a spirit of devotion, unity, and inspiration.",
    },
    {
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
      title: "Empowering Communities Through Education",
      subtitle: "Community Learning Initiative",
      description:
        "Our programs focus on holistic growth, skill development, and lifelong learning for children and adults alike.",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      <Slider {...settings}>
        {banners.map((item, index) => (
          <div key={index}>
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-14 min-h-[640px]">
              
              {/* LEFT IMAGE */}
              <div className="relative w-full lg:w-1/2 flex justify-center">
                <div className="relative w-[360px] h-[520px] rounded-[200px] overflow-hidden shadow-xl">
                  <img
                    src={item.image}
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* FLOATING CIRCLE IMAGE */}
                <div className="absolute top-10 right-4 w-[130px] h-[130px] rounded-full overflow-hidden border border-gray-300 bg-white">
                  <img
                    src={item.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* OUTLINE RING */}
                <div className="absolute top-6 right-[-10px] w-[200px] h-[200px] rounded-full border border-gray-300" />
              </div>

              {/* RIGHT CONTENT */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p className="text-sm font-semibold text-[#a0601a] uppercase tracking-wide mb-4">
                  {item.subtitle}
                </p>

                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black leading-tight mb-6">
                  {item.title}
                </h1>

                <p className="text-gray-600 leading-relaxed max-w-xl mb-8">
                  {item.description}
                </p>

                <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-green-400 text-white font-medium hover:bg-green-500 transition">
                  Connect us
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

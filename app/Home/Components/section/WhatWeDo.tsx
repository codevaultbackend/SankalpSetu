import Image from "next/image";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "UI/UX",
    description:
      "Our team of experienced and certified UI/UX designers will work with you to create a design that is both visually appealing and easy to use. We will also conduct user testing to ensure that your design is user-friendly and meets the needs of your target audience.",
    image: "/WHATWEDO.png",
  },
  {
    title: "SEO",
    description:
      "D.CAL SEO service is designed to help you improve your website’s visibility in search engine results pages (SERPs), so that you can reach more potential customers and grow your business.",
    image: "/WHATWEDO.png",
  },
  {
    title: "CONTENT",
    description:
      "We believe that content is a powerful tool that can help businesses achieve their marketing and communication goals.",
    image: "/WHATWEDO.png",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white pb-20 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-16 sm:mb-20 lg:mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-[18px] sm:text-[21px] font-medium tracking-[0.2em] text-black/40 uppercase mb-4">
              Our services
            </p>

            <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-bold tracking-[0.2em] mb-6 flex flex-wrap gap-2 items-center">
              WHAT WE DO ?
              <span className="h-[1.5px] w-[80px] sm:w-[100px] bg-black"></span>
            </h2>

            <p className="text-[13px] font-semibold leading-[150%] text-black/70 max-w-md">
              At D.CAL, we believe that digital marketing is essential for any
              business that wants to succeed in today's competitive online
              landscape.
            </p>
          </div>

          <div className="max-w-md lg:mt-auto lg:mb-[15px]">
            <p className="text-[14px] sm:text-[15px] leading-[150%] font-medium text-black/70 mb-6">
              That’s why we offer a wide range of digital marketing services,
              including UI/UX design, content marketing, SEO, and more.
            </p>

            <button className="text-[14px] font-bold tracking-[0.1em] uppercase">
              FREE GUIDE
              <span className="h-[1px] bg-black block w-[50%] mr-auto mt-1"></span>
            </button>
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="flex flex-col gap-24 sm:gap-28 lg:gap-36 max-w-[1043px] mx-auto">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center"
              >
                {/* IMAGE */}
                <div
                  className={`relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] mx-auto lg:mx-0 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Accent block */}
                  <div
                    className={`absolute ${
                      isEven ? "-right-4 top-4" : "-left-4 top-4"
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
                <div
                  className={`max-w-md text-center lg:text-left mx-auto lg:mx-0 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h3 className="text-[24px] sm:text-[26px] lg:text-[28px] font-semibold mb-6 tracking-tight">
                    {service.title}
                    <span className="ml-2 text-black/10">
                      {service.title}
                    </span>
                  </h3>

                  <p className="text-[14px] leading-[1.7] text-black/70 mb-8">
                    {service.description}
                  </p>

                  <button className="w-[44px] h-[44px] -rotate-[48deg] rounded-full text-[20px] border border-black flex items-center justify-center mx-auto lg:mx-0">
                    →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

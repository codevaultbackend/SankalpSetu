import Image from "next/image";

const projects = [
  {
    title: "GOOGLE",
    image: "/WHATWEDO.png",
    desc: "We helped Google Corporation improve their website’s SEO by optimizing their title tags, meta descriptions, and header tags...",
  },
  {
    title: "MICROSOFT",
    image: "/WHATWEDO.png",
    desc: "We helped ABC Nonprofit increase brand awareness by creating and distributing engaging content on social media...",
  },
  {
    title: "LENOVO",
    image: "/WHATWEDO.png",
    desc: "We helped Lenovo Company create a new website that was visually appealing and easy to navigate...",
  },
];

export default function WhatWeDid() {
  return (
    <section className="bg-white relative max-w-[97%] mx-auto">
      <div className="bg-gradient-to-b from-[#1A1A1A] to-black absolute !h-[60%] bottom-0  w-full"></div>
      <div className="max-w-[1287px] mx-auto px-6 py-28">
        {/* Header */}
        <span className="text-[12px] tracking-[0.25em] text-gray-400 block mb-4">
          DONE PROJECTS
        </span>

        <div className="flex items-start justify-between gap-10 mb-8">
          <div className="max-w-[900px]">
            <div className="flex items-center gap-6 mb-6">
              <h2 className="text-[48px] font-semibold tracking-tight">
                WHAT WE DID
              </h2>
              <span className="h-[1px] w-20 bg-black/30" />
            </div>

            <p className="text-[16px] leading-7 text-gray-600">
              We are proud to have helped all of our previous clients achieve
              their online marketing goals. We are committed to providing our
              clients with the highest quality services and helping them succeed
              in today's competitive online landscape.
            </p>
          </div>

          <p className="text-[13px] tracking-widest text-black mt-4 cursor-pointer">
            SEE ALL
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {projects.map((item) => (
            <div key={item.title} className=" relative z-[9999]">
              <div className="relative h-[320px] max-w-[422px] bg-red-700 w-full ">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-transparent text-[#ffffff] px-6 py-8">
                <h3 className="text-[24px] font-[700] tracking-widest mb-4">
                  {item.title}
                </h3>

                <p className="text-[16px] font-[700] leading-[150%] tracking-tight text-white leading-6 mb-6">
                  {item.desc}
                </p>

                <button className="w-10 h-10 border border-white/30 !rounded-full !-rotate-[48deg]  flex items-center justify-center hover:bg-white hover:text-black transition">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className=" pb-28 text-white relative z-[9999]">
        <div className="max-w-[900px] mx-auto text-center px-6">
          <p className="text-[28px] leading-relaxed font-medium mb-12">
            “ EVERYONE'S ON THE SAME PAGE. MANY OF OUR PEOPLE ARE NOT VERY
            ORGANIZED NATURALLY, SO D.CAL AGENCY IS A GODSEND! ”
          </p>

          <div className="flex items-center justify-center gap-6 mb-4">
            <span className="w-10 h-[1px] bg-white/30" />
            <span className="text-gray-400 uppercase tracking-widest text-[14px]">
              GARY N. ROTH
            </span>
            <span className="w-10 h-[1px] bg-white/30" />
          </div>

          <p className="text-gray-500 text-[13px]">(CEO)</p>
        </div>
      </div>
    </section>
  );
}

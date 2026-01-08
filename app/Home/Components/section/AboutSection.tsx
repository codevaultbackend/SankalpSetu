import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">


        <div className="relative mx-auto w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px]">

          {/* Top-left */}
          <div className="absolute left-0 top-0 w-[130px] h-[130px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] overflow-hidden rounded-tl-[60px]">
            <Image src="/img1.png" fill className="object-cover" alt="" />
          </div>

          {/* Top small */}
          <div className="absolute left-[140px] top-[20px] sm:left-[200px] sm:top-[30px] lg:left-[240px] lg:top-[40px] w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] lg:w-[76px] lg:h-[76px] overflow-hidden rounded-[20px]">
            <Image src="/img1.png" fill className="object-cover" alt="" />
          </div>

          {/* Top-right */}
          <div className="absolute right-0 top-0 w-[100px] h-[120px] sm:w-[130px] sm:h-[150px] lg:w-[150px] lg:h-[180px] overflow-hidden rounded-tr-[60px]">
            <Image src="/img1.png" fill className="object-cover" alt="" />
          </div>

          {/* Center */}
          <div className="absolute left-[90px] top-[90px] sm:left-[130px] sm:top-[130px] lg:left-[160px] lg:top-[160px] w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] lg:w-[182px] lg:h-[182px] overflow-hidden rounded-l-[100px]">
            <Image src="/img1.png" fill className="object-cover" alt="" />
          </div>

          {/* Bottom-left */}
          <div className="absolute left-0 bottom-0 w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] lg:w-[160px] lg:h-[160px] overflow-hidden rounded-bl-[60px]">
            <Image src="/img1.png" fill className="object-cover" alt="" />
          </div>

          {/* Bottom-center */}
          <div className="absolute left-[110px] bottom-[10px] sm:left-[150px] sm:bottom-[15px] lg:left-[180px] lg:bottom-[20px] w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] lg:w-[130px] lg:h-[130px] overflow-hidden">
            <Image src="/img1.png" fill className="object-cover" alt="" />
          </div>

          {/* Bottom-right */}
          <div className="absolute -right-[6px] bottom-[20px] sm:-right-[8px] sm:bottom-[30px] lg:-right-[10px] lg:bottom-[40px] w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] lg:w-[166px] lg:h-[166px] overflow-hidden rounded-r-[100px]">
            <Image src="/img1.png" fill className="object-cover" alt="" />
          </div>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col gap-8 lg:gap-10 max-w-full lg:max-w-[560px]">

          <div>
            <h2 className="text-[36px] sm:text-[48px] lg:!text-[72px] font-semibold leading-[1.05] mb-4 lg:mb-6 text-black">
              About us
            </h2>

            <p className="text-[15px] sm:text-[16px] leading-[1.45] text-black">
              Welcome to the National Hookah Community Association "NHCA".
              We are a diverse alliance of businesses from all ends of the
              Hookah experience, from manufacturers and importers of molasses,
              pipes and accessories to distributors, Hookah lounges and
              Hookah/shisha retail stores.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {["Join us", "Donate", "Join as volunteer"].map((text) => (
              <button
                key={text}
                className="
                  h-[46px]
                  px-6 sm:px-8
                  rounded-full
                  text-[15px] sm:text-[16px]
                  font-medium
                  border
                  border-black
                  bg-[#F4F4F4]
                  text-black
                  hover:bg-black
                  hover:text-[#F4F4F4]
                  transition
                "
              >
                {text}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-black/20" />
        </div>
      </div>
    </section>
  );
}

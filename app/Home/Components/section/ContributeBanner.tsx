import Image from "next/image";
import Link from "next/link";

export default function ContributeBanner() {
  return (
    <section className="max-w-[1440px] mx-auto relative w-full h-[280px] sm:h-[320px] lg:h-[384px] my-8 lg:my-[48px] overflow-hidden rounded-[12px]">
      {/* Background Image */}
      <Image
        src="/HomePageBanner.png"
        alt="Wind turbines environment"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center max-w-[900px] px-4 sm:px-6">
          <h1 className="text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-tight font-bold mb-6 sm:mb-8 lg:mb-10">
            You can contribute to make the <br className="hidden sm:block" />
            environment greener!
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href='/volunteer'>
              <button className="w-full sm:w-auto bg-[#76C776] hover:bg-[#67b867] transition text-white px-8 sm:px-10 h-[46px] sm:h-[49px] !rounded-[4px] text-[15px] sm:text-[16px] font-semibold">
                Join as a volunteer
              </button>
            </Link>
            <Link href='/ContactUs'>
            <button className="w-full sm:w-auto bg-white hover:bg-gray-100 transition text-[#1F2937] px-8 sm:px-10 h-[46px] sm:h-[49px] !rounded-[4px] text-[15px] sm:text-[16px] font-semibold">
              Donate
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

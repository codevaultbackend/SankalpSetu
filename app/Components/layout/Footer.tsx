import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#1c1b1b] text-white overflow-hidden max-w-[1440px] mx-auto">
      {/* Background Text */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute right-6 sm:right-24 top-10 sm:top-16 text-[80px] sm:text-[120px] lg:text-[200px] font-bold tracking-[0.2em] text-white/5">
          SANLAP
        </span>
        <span className="absolute right-6 sm:right-24 bottom-10 sm:bottom-24 text-[80px] sm:text-[120px] lg:text-[200px] font-bold tracking-[0.2em] text-white/5">
          SETU
        </span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-[51px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* LEFT */}
          <div className="max-w-full lg:max-w-md">
            <div className="flex flex-col gap-3 mb-6 lg:mb-8">
              <Image
                src="/SankalpSetuLogo.png"
                alt="Sankalp Setu"
                width={42}
                height={42}
              />
              <span className="text-[26px] sm:text-[28px] lg:text-[32px] font-bold tracking-wide">
                Sankalp Setu
              </span>
            </div>

            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-white/80 mb-8 lg:mb-10">
              At D.CAL, we believe that every brand has a story to tell.
              And that story is unique. Sometimes, it's even a little weird.
              But that's okay. In fact, we kind of love weird brands.
              They're the ones that make the world a more interesting place.
            </p>

            {/* EMAIL INPUT */}
            <div className="border border-white/60 px-3 w-full lg:max-w-[70%]">
              <input
                type="email"
                placeholder="EMAIL TO SUBSCRIBE"
                className="w-full bg-transparent outline-none placeholder:text-white tracking-[0.15em] h-[54px] text-sm"
              />
            </div>

            <button className="uppercase tracking-[0.2em] mt-8 lg:mt-[40px] text-[15px] lg:text-[16px] font-bold border-b border-white pb-1">
              Submit
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-12 sm:gap-20 lg:gap-32">
            {/* MAIN */}
            <div>
              <h4 className="tracking-[0.3em] mb-6 lg:mb-10 text-sm">
                MAIN
              </h4>
              <ul className="space-y-4 lg:space-y-6 text-sm tracking-[0.15em] p-0">
                <li>HOME</li>
                <li>SERVICES</li>
                <li>CONTRACT</li>
                <li>ABOUT</li>
                <li>MAGAZINE</li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="tracking-[0.3em] mb-6 lg:mb-10 text-sm">
                SOCIAL
              </h4>
              <ul className="space-y-4 lg:space-y-6 text-sm tracking-[0.15em] p-0">
                <li>TWITTER</li>
                <li>LINKEDIN</li>
                <li>FACEBOOK</li>
                <li>YOUTUBE</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 lg:mt-[61px] flex flex-col lg:flex-row justify-between items-center text-xs sm:text-sm text-white/60 gap-4">
          <p className="text-center lg:text-left">
            © 2022 ONE AGENCY, LLC. All rights reserved
          </p>

          <div className="flex gap-4 sm:gap-6">
            <span>TERMS OF USE</span>
            <span>|</span>
            <span>PRIVACY POLICY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

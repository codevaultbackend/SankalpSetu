import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-24 max-[600px]:pt-[48px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-[600px]:gap-5">
          {/* LEFT */}
          <div>
            <div className="relative mb-[4px] flex items-center">
              <div className="flex flex-col gap-[3.5px]">
                <span className="block w-20 h-[2px] bg-[#7BC47F]" />
                <span className="block w-16 h-[2px] bg-[#7BC47F]" />
              </div>

              <p className="tracking-[0.35em] text-[22px] sm:text-[26px] text-gray-500 font-[700] ml-[19px]">
                WHAT WE DO
              </p>
            </div>

            <h1 className="!text-[44px] max-[600px]:!text-[32px] max-[600px]:text-center max-[600px]:tracking-[.1em] md:text-[72px] font-[700] leading-[1.1] !text-gray-700">
              "Empowering India's Youth with Skills, Healthcare & Opportunities"
            </h1>

            <div className="relative mt-14 ml-[94px] max-[650px]:ml-0 ">
              <img
                src="/ContactUsCircle.png"
                alt="circle"
                className="w-[220px] sm:w-[260px] lg:w-[307px] max-[650px]:w-[90%] max-[650px]:mx-auto "
              />
            </div>
          </div>

          {/* RIGHT GALLERY */}
          <div
            className="relative flex items-center justify-center
                          h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px]"
          >
            {/* CENTER */}
            <Avatar
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085324/ss_page_assets/atftel3fubp51k9trbfx.png"
              size="main"
              className="z-10"
            />

            {/* TOP */}
            <Avatar
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085324/ss_page_assets/hgmbkwm4at08yr03zjxx.png"
              size="sm"
              className="top-0 left-[45%]"
            />

            <Avatar
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085323/ss_page_assets/gcuoycahui5h9jqmfsfj.png"
              size="xs"
              className="top-[70px] right-[20px] lg:right-[40px]"
            />

            <Avatar
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085323/ss_page_assets/ttk2wyjnux3pnu20rctv.png"
              size="sm"
              className="top-[200px] right-0"
            />

            {/* BOTTOM */}
            <Avatar
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085323/ss_page_assets/s0k2qbtnskcu6ar0jmhg.png"
              size="xs"
              className="bottom-[30px] right-[90px] lg:right-[120px]"
            />

            <Avatar
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085325/ss_page_assets/ucbsulc5djjgkhtohiue.png"
              size="xs"
              className="bottom-[100px] left-[20px] lg:left-[40px]"
            />
            <Avatar
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085324/ss_page_assets/l4zshtawsjvfx8pdq4nu.png"
              size="xs"
              className="bottom-[0px] !left-[130px] lg:left-[40px]"
            />

            <Avatar
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085323/ss_page_assets/gytteceve27t0xhmcm2b.png"
              size="sm"
              className="top-[137px] left-0"
            />

            <Avatar
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085323/ss_page_assets/m5m3wkv8pzauyxgysypb.png"
              size="xs"
              className="bottom-0 left-[45%]"
            />
            <Avatar
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085324/ss_page_assets/dvl4wktksfsiyiwlhe9t.png"
              size="sm"
              className="top-[27px] left-[110px]"
            />

            <Avatar
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              size="xs"
              className="bottom-0 left-[45%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* Avatar Component (Responsive) */
/* -------------------------------- */

interface AvatarProps {
  src: string;
  size: "main" | "sm" | "xs";
  className?: string;
}

function Avatar({ src, size, className }: AvatarProps) {
  const sizes = {
    main: "w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px]",
    sm: "w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px]",
    xs: "w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] lg:w-[95px] lg:h-[95px]",
  };

  return (
    <div
      className={`absolute rounded-full overflow-hidden shadow-xl 
                  border-[4px] sm:border-[5px] lg:border-[6px] border-white
                  ${sizes[size]} ${className}`}
    >
      <Image src={src} alt="Team member" fill className="object-cover" />
    </div>
  );
}

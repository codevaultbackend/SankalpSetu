import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function AboutNonProfitSection() {
  const Logos = [
    {
      img: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605214/SSA_Logo_png_qrzh36.png",
    },
    {
      img: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605212/Athratech_Logo_png_aalonu.png",
    },
    {
      img: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605211/Manpower_Logo_png_zhavrl.png",
    },
    {
      img: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605212/Sankalp_Setu_Logo_png_c9dokb.png",
    },
    {
      img: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605210/Construct_Ability_png_cxisnq.png",
    },
    {
      img: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605211/Gengross_Logo_png_tknk1h.png",
    },
    {
      img: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605211/JD_poulgrow_Logo_png_uhqzwf.png",
    },
    {
      img: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605210/Chugen_Logo_png_u4tihj.png",
    },
    {
      img: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769605210/Decovista_logo_png_gkqzqy.webp",
    },
  ];

  return (
    <section className="w-full bg-white py-16 relative">
      <div className="green-overlay bg-[#EFF7F2] absolute w-full bottom-0 h-[60%]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* ================= HEADER ================= */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[1px] w-[72px] bg-[#1D2130]" />
            <span className="text-[16px] font-[700] uppercase tracking-widest text-[#1D2130]">
              Know About Us
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-start  mx-auto max-[600px]:gap-5">
            <h2 className="text-[56px] font-[700] leading-[120%] text-[#1D2130] md:text-4xl max-[600px]:text-[31px]">
              We are a nonprofit team working worldwide
            </h2>

            <div className="text-sm leading-relaxed text-gray-600">
              <p className="mb-4 font-medium text-gray-800">
                We are a purpose-driven nonprofit organization committed to
                creating meaningful and lasting change in communities around the
                world.
              </p>
              <p>
                We believe that real change begins when people come together
                with a shared vision.
              </p>
            </div>
          </div>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="relative mt-[96px] overflow-hidden rounded-xl max-[600px]:mt-[54px]">
          <video
            autoPlay
            loop
            muted
            src="https://res.cloudinary.com/ddcy9noqo/video/upload/v1769090507/ss_page_assets/wkinilvllryvqzkx6jzy.mp4"
            className="h-[448px] w-full object-cover max-[600px]:h-full md:h-[420px]"
          ></video>
        </div>

        {/* Vision & Mission Cards */}
        <div className="mt-[40px] grid gap-10 md:grid-cols-2 max-w-[1080px] mx-auto">
          {/* ================= VISION ================= */}
          <div className="relative rounded-[32px] border border-[#7BC47F] bg-[#F3FAF4] px-10 max-[600px]:px-5 max-[600px]:pt-[70px] pt-[120px] pb-10 max-w-[520px] overflow-hidden">
            {/* diagonal background lines */}
            <img
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168056/ss_page_assets/qjaeq0rdypwgfvnnno5m.png"
              alt=""
              className="absolute top-0 left-0 w-full h-[186px] max-[600px]:h-[142px]  object-cover opacity-100 z-0"
            />

            {/* floating icon */}
            <div className="absolute top-[7px] left-[40px]   z-10">
              <img
                src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168056/ss_page_assets/teeeav9vxwnhabzx0cyg.png"
                alt="Vision icon"
                className="object-contain max-[600px]:!w-[120px] max-[600px]:!h-[130px] !w-[145px] !h-[166px]"
              />
            </div>

            <div className="mt-[75px]">
              <h3 className="relative z-10 mt-[90px] max-[600px]:mt-[10px] mb-4 text-[40px] font-serif font-semibold text-[#3E7B2C]">
                Vision
              </h3>

              <p className="relative z-10 text-[16px] leading-[165%] text-[#1D2130] mb-6 max-w-[420px]">
                A Bihar where every individual has the opportunity to live with
                purpose, dignity, and hope.
              </p>

              <ul className="relative z-10 space-y-2 text-[16px] text-[#1D2130]">
                <li>
                  • Empowering communities to create a better and more equal
                  future.
                </li>
                <li>
                  • A future where dignity, opportunity, and hope are accessible
                  to all.
                </li>
              </ul>
            </div>
          </div>

          {/* ================= MISSION ================= */}
          <div className="relative rounded-[32px] border border-[#7BC47F] bg-[#F3FAF4] px-10 pt-14 pb-[140px] max-w-[520px] overflow-hidden">
            {/* curved background lines */}
            <img
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168057/ss_page_assets/smtso0qeglz5wmmq6z7n.png"
              alt=""
              className="absolute bottom-0 right-0 w-full h-[252px] max-[600px]:h-[152px] object-cover z-0"
            />

            <h3 className="relative z-10 mb-6 text-[40px] font-serif font-semibold text-[#3E7B2C]">
              Mission
            </h3>

            <ul className="relative z-10 space-y-4 text-[16px] leading-[165%] text-[#1D2130] max-w-[440px]">
              <li>
                • Empowering underserved communities in Bihar by bridging gaps
                in education, healthcare, and opportunity.
              </li>
              <li>
                • Creating sustainable change in Bihar through compassion,
                inclusion, and community-driven action.
              </li>
            </ul>

            {/* target icon */}

            <img
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168056/ss_page_assets/teeeav9vxwnhabzx0cyg.png"
              alt="mission"
              className="absolute bottom-[36px] right-[36px] w-[120px] h-[120px] "
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex items-center gap-6 mb-10">
            <h1 className="text-sm tracking-[0.3em] font-semibold text-gray-500 uppercase whitespace-nowrap">
              Our Supporters
            </h1>
            <span className="h-[1px] flex-1 bg-gray-700" />
          </div>

          {/* Logos */}
          <div className="flex items-center justify-between gap-10">
            {Logos.map((logo, index) => (
              <img
                key={index}
                src={logo.img}
                alt="Supporter logo"
                className="h-8 w-auto object-contain grayscale opacity-60"
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const trustees = [
  { name: "Mr. Deepak Kumar", role: "Founder & Chairperson", image: "/WHATWEDO.png" },
  { name: "Mr. Jagannath Kumar", role: "Secretariat", image: "/WHATWEDO.png" },
  { name: "Mr. Nihal Kumar Gupta", role: "Treasurer", image: "/WHATWEDO.png" },
  { name: "Mr. Sarvan Jha", role: "Team Member", image: "/WHATWEDO.png" },
  { name: "Mr. Raman Srivastav", role: "Team Member", image: "/WHATWEDO.png" },
  { name: "Ms. Sangita Kumari", role: "Team Member", image: "/WHATWEDO.png" },
  { name: "Mr. Nitish Kumar", role: "Team Member", image: "/WHATWEDO.png" },
];

export default function BoardOfTrustees() {
  const topTrustees = trustees.slice(0, 3);
  const bottomTrustees = trustees.slice(3);

  return (
    <section className="bg-white py-[96px] max-[600px]:py-[43px] max-[600px]:pt-[0px]">
      <div className="max-w-[1280px] mx-auto px-6 max-[600px]:px-1">

        {/* ================= HEADER ================= */}
        <div className="relative text-center mb-[80px] max-[600px]:mb-[32px]">
          <h2 className="text-[40px] max-[600px]:text-[28px] leading-[120%] font-[700] text-[#1D2130]">
            Board Of Trustees
          </h2>

          <p className="mt-[12px] max-w-[520px] mx-auto text-[14px] leading-[160%] text-[#525560]">
          The Board of Trustees at Sankalp Setu brings together individuals who share a deep commitment to social change and community development.
          </p>

          <div className="hidden lg:block absolute left-[-160px] top-1/2 -translate-y-1/2">
            <Image src="/forLeft.png" width={320} height={220} alt="left arrow" />
          </div>
          <div className="hidden lg:block absolute right-[-144px] top-1/2 -translate-y-1/2">
            <Image src="/forRight.png" width={320} height={220} alt="right arrow" />
          </div>
        </div>

        {/* ================= TOP TRUSTEES (SINGLE ROW) ================= */}
        <div className="flex flex-col lg:flex-row justify-around gap-[48px] mb-[88px] mt-[108px] max-[600px]:!mt-[0px]">
          {topTrustees.map((t, i) => (
            <div key={i} className="relative flex flex-col items-center text-center max-[600px]:mt-[32px] ">

              {/* Golden hat */}
              <div className="absolute top-[-42px] max-w-[360px] !w-full h-[75px] bg-[#7A6A00] rounded-[12px]" />

              <div className="relative w-[296px] h-[320px] overflow-hidden rounded-[8px] bg-[#F4F5F7] max-[600px]:!mx-[35px]">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>

              <p className="mb-0 text-[20px] font-[500] text-[#1D2130] !mt-[16px] leading-[160%]">
                {t.name}
              </p>
              <p className="text-[12px] text-[#1D2130] font-[500] !leading-[190%] ">{t.role}</p>

              <div className="flex gap-[14px]  text-[#525560] leading-[100%]">
                <FaFacebookF size={20} />
                <FaTwitter size={20} />
                <FaLinkedinIn size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM TRUSTEES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[32px] gap-y-[72px]">
          {bottomTrustees.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center">

              <div className="relative w-[200px] h-[220px] overflow-hidden rounded-[8px] bg-[#F4F5F7]">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>

              <p className=" text-[20px] leading-[160%] mt-[16px] font-[500] text-[#1D2130]">
                {t.name}
              </p>
              <p className="text-[12px] text-[#525560]">{t.role}</p>

              <div className="flex gap-[14px] mt-[9px] text-[#1D2130]">
                <FaFacebookF size={20} />
                <FaTwitter size={20} />
                <FaLinkedinIn size={20} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

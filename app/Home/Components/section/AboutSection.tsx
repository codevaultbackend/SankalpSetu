import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 lg:py-28  lg:pt-0 max-[600px]:py-10">
      <div className="mx-auto max-w-[1280px] px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 max-[600px]:gap-8 items-center !mt-[78px] max-[600px]:!mt-[0px]">
        {/* ================= IMAGE COLLAGE ================= */}
        <div className="flex justify-center">
          {/* SCALE WRAPPER */}
          <div
            className="
              relative
              w-[320px] h-[320px]
              sm:w-[420px] sm:h-[420px]
              lg:w-[560px] lg:h-[560px]
            "
          >
            {/* inner fixed design */}
            <div className="absolute inset-0 scale-[0.57] sm:scale-[0.75] lg:scale-100 origin-top-left">
              <div className="relative w-[560px] h-[560px]">
                {/* Top Left */}
                <div className="absolute left-0 top-0 w-[220px] h-[220px] overflow-hidden ">
                  <Image  src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085324/ss_page_assets/devbr6dzm5dvx9qxwl2h.png" fill className="object-cover" alt="" />
                </div>

                {/* Top Center */}
                <div className="absolute left-[260px] top-[40px] w-[86px] h-[86px] overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769247810/Rectangle_67_a7haxw.png"
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>

                {/* Top Right */}
                <div className="absolute right-[20px] top-0 w-[106px] h-[106px] overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085323/ss_page_assets/bmyaappf4jdm7dvuixm5.png"
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>

                {/* Mid Left */}
                <div className="absolute left-[106px] top-[260px] w-[114px] h-[114px] overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085323/ss_page_assets/wr5mt6cv4q6wysr6glnt.png"
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>

                {/* Center Large */}
                <div className="absolute left-[276px] top-[145px] w-[182px] h-[182px] overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085325/ss_page_assets/grybw7ybm1oxebnwaubr.png"
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>

                {/* Bottom Left */}
                <div className="absolute left-0 bottom-0 w-[160px] h-[160px] overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085324/ss_page_assets/zczikqyf9rdeouvidjdz.png"
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>

                {/* Bottom Center */}
                <div className="absolute left-[200px] bottom-[30px] w-[120px] h-[120px] overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085323/ss_page_assets/ayhpgwhsmk8zrma9fpmi.png"
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>

                {/* Bottom Right */}
                <div className="absolute right-0 max-[600px]:right-[-10px] bottom-[10px] w-[200px] h-[200px] overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769085324/ss_page_assets/t9iinlgemfns8uo5ngtc.png"
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="max-w-[560px] max-[900px]:mx-auto flex flex-col gap-10 max-[600px]:!gap-1 text-center lg:!text-left mx-auto">
          <div>
            <h2 className="text-[42px] sm:text-[56px] lg:!text-[72px] font-semibold leading-[100%] mb-[19px] text-black">
              About us
            </h2>

            <p className="text-[18px] !mb-[44px] sm:text-[18px] font-[400] leading-[135%] text-[#000000] mt-[11px] ">
              Building Bridges. Transforming Lives. Welcome to Sankalp Setu
              Foundation – a grassroots social organization dedicated to
              creating real change in Education and Healthcare across India. The
              word "Setu" means bridge – and that's exactly what we do. We
              bridge the gap between need and support, dreams and reality,
              connecting underserved communities with the opportunities they
              deserve.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 max-[600px]:!gap-1 max-[600px]:!gap-y-3 justify-center lg:justify-start">
            {[
              { text: "Join As Volunteer", href: "/volunteer" },
              { text: "Donate", href: "/ContactUs" },
              { text: "Join As NGO", href: "/ngo-registration" },
            ].map((item, index) => (
              <Link key={index} href={item.href} className=" !no-underline">
                <button
                  className={`
        h-[52px] max-[600px]:!h-[50px]
        w-[155px] max-[600px]:!w-[114px]
        !rounded-full
        !text-[12px]
        max-[600px]:!text-[10px]
        font-medium
        border border-black
        bg-[#F4F4F4]
        text-black
        
        hover:bg-black hover:!text-[#F4F4F4]
        ${index === 0 && "bg-black text-white"}
        transition
      `}
                >
                  {item.text}
                </button>
              </Link>
            ))}
          </div>

          <div className="h-px w-full bg-black/20 max-[600px]:hidden" />
        </div>
      </div>
    </section>
  );
}

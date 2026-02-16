import Image from "next/image";

export default function ContactDetails() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-16">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center items-end">
            <Image
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168065/ss_page_assets/nektdcr9qkysmfzmjyhu.png"
              alt="Contact visual"
              width={520}
              height={520}
              className="relative z-10 object-contain"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-16 mb-[159px] mt-[74px]">
            {/* HEAD OFFICE */}
            <div>
              <h3 className="text-[32px] font-bold !text-[#FFA34D] mb-6">
                Head Office:
              </h3>

              <ul className="space-y-4 text-[#1A1A1A] text-[16px] ">
                <li className="flex items-center gap-4 !mt-[14px]">
                  <i className="fa-solid fa-phone text-[#1A1A1A]" />
                  <a href="tel:+91 9211621996" className="!text-[#1A1A1A] !no-underline">
                    <span className=" tracking-wide  !leading-auto">+91 9211621996</span></a>
                </li>

                <li className="flex items-center gap-4 !mt-[14px]">
                  <i className="fa-solid fa-envelope text-[#1A1A1A]" />
                  <a href="emailto:sankalpsetufoundatation@gmail.com" className="!text-[#1A1A1A] !no-underline">
                    <span>sankalpsetufoundatation@gmail.com </span>
                  </a>

                </li>

                <li className="flex items-center gap-4 !mt-[14px]">
                  <i className="fa-solid fa-location-dot text-[#1A1A1A]" />
                  <a
                    href="https://www.google.com/maps/place/Janki+Villa+Palace/@25.5938384,85.1767344,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed58af8b7138df:0x61793774a6ed1dda!8m2!3d25.5938384!4d85.1793093!16s%2Fg%2F11bxgzdk_d?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-primary !text-[#1A1A1A] !no-underline"
                  >
                    Janki Palace, Near-Nand Garden, Kachhuara Road,
                    Nandlal Chapra, Patna, Bihar 800030
                  </a>
                </li>
              </ul>
            </div>

            {/* BRANCH OFFICE */}
            <div>
              <h3 className="text-[32px] font-bold !text-[#FFA34D] mb-6">
                Branch Office:
              </h3>

              <ul className="space-y-4 text-[#1A1A1A] text-[16px] ">
                <li className="flex items-center gap-4 !mt-[14px]">
                  <i className="fa-solid fa-phone text-[#1A1A1A]" />
                  <a href="tel:+91 9211621996" className="!text-[#1A1A1A] !no-underline">
                    <span className=" tracking-wide  !leading-auto">+91 9211621996</span></a>
                </li>

                <li className="flex items-center gap-4 !mt-[14px]">
                  <i className="fa-solid fa-envelope text-[#1A1A1A]" />
                  <a href="emailto:sankalpsetufoundatation@gmail.com" className="!text-[#1A1A1A] !no-underline">
                    <span>sankalpsetufoundatation@gmail.com </span>
                  </a>

                </li>

                <li className="flex items-center gap-4 !mt-[14px]">
                  <i className="fa-solid fa-location-dot text-[#1A1A1A]" />
                  <a
                    href="https://www.google.com/maps/search/Coaching+Mandi,+Baghdulhan+Road,+Rambalak+Chowk,+Hajipur,+Bihar+-+844101/@25.6925719,85.2067171,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-primary !text-[#1A1A1A] !no-underline"
                  >
                    Coaching Mandi, Baghdulhan Road, Rambalak Chowk, Hajipur, Bihar - 844101
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

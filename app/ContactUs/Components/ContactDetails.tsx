import Image from "next/image";

export default function ContactDetails() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-16">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center items-end">
            <Image
              src="/contactus.png"
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
                  <span className=" tracking-wide  !leading-auto">+447473997191</span>
                </li>

                <li className="flex items-center gap-4 !mt-[14px]">
                  <i className="fa-solid fa-envelope text-[#1A1A1A]" />
                  <span>Parthdesigns@gmail.com</span>
                </li>

                <li className="flex items-center gap-4 !mt-[14px]">
                  <i className="fa-solid fa-location-dot text-[#1A1A1A]" />
                  <span>2068 Boulevard Henri - Bourassa Est</span>
                </li>
              </ul>
            </div>

            {/* BRANCH OFFICE */}
            <div>
              <h3 className="text-[32px] font-bold !text-[#FFA34D] mb-6">
                Branch Office:
              </h3>

              <ul className="space-y-4 text-[#1A1A1A] text-[17px]">
                <li className="flex items-center gap-4 !mt-[14px]">
                  <i className="fa-solid fa-phone text-[#1A1A1A]" />
                  <span>+91 92116 21996</span>
                </li>

                <li className="flex items-center gap-4 !mt-[14px]">
                  <i className="fa-solid fa-envelope text-[#1A1A1A] " />
                  <span>Parthdesigns@gmail.com</span>
                </li>

                <li className="flex items-center gap-4 !mt-[14px]">
                  <i className="fa-solid fa-location-dot text-[#1A1A1A]" />
                  <span>2068 Boulevard Henri - Bourassa Est</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

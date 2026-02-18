"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full max-h-[820px] overflow-hidden bg-gradient-to-b from-[#93A374] to-[#EBEABE]">
      {/* ================= BACKGROUND BLOB ================= */}

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-[140px] max-[1010px]:p-[30px] grid grid-cols-1 lg:grid-cols-2 gap-10 max-[600px]:gap-1 max-[600px]:flex-col-reverse max-[600px]:flex max-[600px]:py-[29px] ">
        {/* -------- LEFT TEXT -------- */}
        <div>
          <span className="inline-block mb-5 max-[600px]:!mb-3 px-5 py-2 rounded-full bg-[#a9b78a] text-sm font-medium text-[#3f4f1f]">
            Learning Today, Leading Tomorrow
          </span>

          <h1 className="text-[36px] max-[600px]:!text-[20px] leading-tight font-semibold text-[#4a3b08] max-w-xl">
            “Empowering Every Child With <br />
            The Gift Of Knowledge.”
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#5b5b3b]">
            We Believe Education Is The Most Powerful Weapon Which You Can Use
            To Change The World. Help Us Bridge The Gap For Underprivileged
            Children Today.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <Link
              href="/volunteer"
              className="rounded-full bg-[#5f7a3b] px-7 py-3 text-white text-sm font-medium shadow hover:bg-[#4f682f] !no-underline max-[600px]:!text-[13px] max-[600px]:px-3"
            >
              Join as volunteer
            </Link>

            <Link
              href="/ContactUs"
              className="rounded-full bg-[#7f9a52] px-7 py-3 text-white text-sm font-medium shadow hover:bg-[#6b8346] !no-underline max-[600px]:!text-[14px] max-[600px]:px-5"
            >
              Donate Us
            </Link>
          </div>
        </div>
       <div className="h-[500px] absolute w-full rotate-[327deg] bg-white z-[99999] !right-[-384px] !top-[422px] max-[600px]:hidden "></div>   

        {/* -------- RIGHT VISUAL -------- */}
        <div className="relative flex justify-center items-end max-[1010px]:justify-end">
          {/* Light blob behind child */}

          {/* Child Image */}
          <Image
            src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168061/ss_page_assets/eqeelsiv4bbw7rlyc6vv.png"
            alt="Child with education board"
            width={663}
            height={529}
            priority
            className="relative z-[9999999999] object-cover max-w-[663px] w-full h-auto max-[1010px]:max-w-[363px]"
          />

          {/* Floating cards */}
        </div>
      </div>

      {/* ================= DECOR DOTS ================= */}
      <div className="absolute right-40 top-52 grid grid-cols-5 gap-2 opacity-40">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-2 h-2 rounded-full bg-white" />
        ))}
      </div>
    </section>
  );
}

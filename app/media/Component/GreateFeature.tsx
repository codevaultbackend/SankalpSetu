import Link from "next/link";

export default function GreateFeature() {
  return (
    <section className="w-full px-4 sm:px-6 py-14 max-[600px]:py-7">
      <div className="max-w-5xl mx-auto text-center">
        {/* HEADING */}
        <h3
          className="
            font-bold text-[#1D1D1D]
            text-3xl max-[600px]:text-2xl sm:text-4xl md:text-[50px]
            leading-tight md:leading-[1.2]
          "
        >
          "Grassroots <span className="text-[#023F2D]">education</span> and{" "}
          <span className="text-[#023F2D]">healthcare</span> programs{" "}
          <br className="hidden md:block" /> creating lasting change for{" "}
          <span className="text-[#023F2D]"> India's youth</span> and
          communities"
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-4 text-[#1D1D1D] font-medium
            text-base sm:text-lg md:text-[21px]
            leading-relaxed
          "
        >
          Building stronger futures by nurturing knowledge, wellness, and hope
          at the grassroots level.
        </p>

        {/* IMAGE */}
        <Link href="/ContactUs">
          <img
            src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168056/ss_page_assets/dfo1d9ifdi5b4kj1lsjd.png"
            alt="ContactUs"
            className="
            mx-auto mt-8 mb-16
            w-[240px] sm:w-[300px] md:w-[403px]
            h-auto
          "
          />
        </Link>
      </div>
    </section>
  );
}

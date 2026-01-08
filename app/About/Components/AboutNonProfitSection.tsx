import Image from "next/image";

export default function AboutNonProfitSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-gray-900" />
              <span className="text-xs font-semibold tracking-widest text-gray-900 uppercase">
                Know about us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We are a nonprofit team <br className="hidden sm:block" />
              working worldwide
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 text-gray-600">
            <p className="font-medium text-gray-800">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>

            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              Suspendisse varius enim elementum tristique.
            </p>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className="relative mt-16 overflow-hidden rounded-xl">
          {/* Image */}
          <Image
            src="/images/about-video.jpg" // replace with your image
            alt="Nonprofit team"
            width={1280}
            height={600}
            className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[500px] object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Play Button */}
          <button
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105">
              <svg
                className="ml-1 h-6 w-6 sm:h-7 sm:w-7 text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.5 5.5l8 4.5-8 4.5v-9z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

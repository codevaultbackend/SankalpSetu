import Image from "next/image";

const awards = [
  { year: "2021", title: "Best NGO Award", place: "Berlin, Germany" },
  { year: "2018", title: "Global Award", place: "New York, USA" },
  { year: "2014", title: "Forbes Award", place: "New Delhi, India" },
  { year: "2010", title: "Earth Saver Award", place: "Sydney, Australia" },
];

export default function AwardsAndJourney() {
  return (
    <section className="relative bg-white py-14 sm:py-20 overflow-hidden">
      {/* WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[120px] sm:text-[180px] lg:text-[240px] font-extrabold text-black/5 tracking-widest">
          AWARDS
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* JOURNEY CARD */}
        <div className="rounded-2xl bg-black text-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="p-6 sm:p-10 lg:p-12">
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Our Journey
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold mt-3">
               How Sankalp Setu Is Creating Change
              </h3>

              <p className="text-sm text-gray-300 mt-4 max-w-md">
                Since its inception, Sankalp Setu has been driven by a simple belief — meaningful change begins with collective effort. What started as a small initiative in Bihar has grown into a movement powered by compassion, community participation, and shared responsibility.
              </p>

              {/* STATS */}
              <div className="flex flex-wrap gap-6 sm:gap-8 mt-8">
                <Stat value="34M+" label="Donations" />
                <Stat value="400+" label="Volunteers" />
                <Stat value="40K+" label="People Impacted" />
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative h-[240px] sm:h-[300px] lg:h-full">
              {/* <Image
                src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769164887/WhatsApp_Image_2026-01-23_at_16.10.12_cj1kii.jpg"
                alt="Our Team"
                fill
                className="object-cover"
                priority
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* STAT ITEM */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  );
}

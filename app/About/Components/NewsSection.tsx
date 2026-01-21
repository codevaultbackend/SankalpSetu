import Image from "next/image";

const newsData = [
  {
    title: "150 Youth Trained in Digital Skills",
    image: "https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg",
    des: "Empowering unemployed youth with job-ready technology training",
  },
  {
    title: "Free Health Camp Reaches 500 Families",
    image: "https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg",
    des: "Medical screening and awareness drive in rural communities",
  },
  {
    title: "40 Women Launch Their Own Businesses",
    image: "https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg",
    des: "Financial literacy program creates new women entrepreneurs",
  },
  {
    title: "Sankalp Setu Celebrates 2 Years of Impact",
    image: "https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg",
    des: "Two years of transforming lives through education and healthcare",
  },
];

export default function NewsSection() {
  return (
    <section className=" py-20 max-[600px]:py-1">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex items-center gap-6">
          <h2 className="text-3xl font-bold text-slate-800 whitespace-nowrap">
            Read Our News
          </h2>
          <span className="h-px w-full bg-neutral-700"></span>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-[600px]:justify-center">
          {newsData.map((item, index) => (
            <article key={index} className="w-[290px] h-[328px]">
              <div className="relative mb-6 h-[192px] w-full overflow-hidden !rounded-xl">
                <img src={item.image} alt="" />
              </div>

              <h3 className="mb-3 text-[20px] leading-[150%] font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="text-[16px]  leading-[160%] text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

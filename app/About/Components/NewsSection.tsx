import Image from "next/image";

const newsData = [
  {
    title: "Grand Inauguration of Hajipur Free Skill Training Center",
    image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769496391/WhatsApp_Image_2026-01-27_at_12.06.54_1_dxcogs.jpg",
    des: "Empowering Hajipur Through Skill Development",
  },
  {
    title: "A Step Towards Self-Reliance: Hajipur Free Skill Training Center",
    image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769496391/WhatsApp_Image_2026-01-27_at_12.06.54_uhnk5h.jpg",
    des: "Skills for a Better Tomorrow",
  },
  {
    title: "Supporting Women on the Path to Self-Reliance",
    image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168058/ss_page_assets/hypim0a6dypstbgjkdnt.png",
    des: "Financial literacy program creates new women entrepreneurs",
  },
  {
    title: "Sankalp Setu Launches Its Mission for Community Empowerment",
    image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168061/ss_page_assets/rvqkn61aksgm9u4dp8nw.png",
    des: "Sankalp Setu is dedicated to creating pathways for skill development, self-reliance, and inclusive growth.",
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
            <article key={index} className="w-[290px] h-[328px] max-[600px]:!mb-[40px]">
              <div className="relative mb-6 h-[192px] w-full overflow-hidden !rounded-xl">
                <img src={item.image} alt="" />
              </div>

              <h3 className="mb-3 text-[20px] leading-[150%] font-semibold text-slate-900 line-clamp-2">
                {item.title}
              </h3>

              <p className="text-[16px]  leading-[160%] text-slate-500 line-clamp-2">
                {item.des}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

type Card = {
  title: string;
  image: string;
};

const cards: Card[] = [
  { title: "Waste Management", image: "/WHATWEDO.png" },
  { title: "E-waste EPR", image: "/WHATWEDO.png" },
  { title: "Plastic waste EPR", image: "/WHATWEDO.png" },
  { title: "Battery waste EPR", image: "/WHATWEDO.png" },
  { title: "TYRE WASTE EPR", image: "/WHATWEDO.png" },
  { title: "RECYCLER REGISTRATION", image: "/WHATWEDO.png" },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        
        {/* Heading */}
        <h2 className="text-center text-[18px] sm:text-[20px] font-[600] text-black leading-[100%]">
          Latest Work
        </h2>
        <div className="h-[3px] border-t-[0.5px] border-b-[0.5px] border-[#133700] max-w-[160px] mx-auto mb-10 sm:mb-[55px]" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 place-items-center">
          {cards.map((card) => (
            <div
              key={card.title}
              className="
                overflow-hidden
                rounded-[10px]
                bg-[#E6F2D3]
                transition-transform
                duration-300
                hover:-translate-y-1
                w-full
                max-w-[343px]
                max-h-[300px]
                shadow-[0px_0px_8px_0px_#00000040]
              "
            >
              {/* Image */}
              <div className="relative h-[160px] sm:h-[170px] w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-5 sm:px-6 py-5 sm:py-6">
                <h3 className="text-[16px] sm:!text-[17px] font-[400] mb-3 text-black">
                  {card.title}
                </h3>

                <button className="text-[12px] text-[#133700] font-[400] flex items-center gap-1">
                  Know More <span className="text-[16px]">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom right “More →” */}
        <div className="flex justify-center sm:justify-end mt-10 sm:mt-12">
          <button className="text-[#133700] text-[15px] sm:text-[16px] font-[500] flex items-center gap-2 sm:mr-[30px]">
            More <span className="text-[18px]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

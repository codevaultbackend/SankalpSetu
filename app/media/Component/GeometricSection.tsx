import React from 'react';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  image: string;
}

const team: TeamMember[] = [
  { id: 1, name: "Member 1", image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089315/ss_page_assets/sxzwexd84fkg4w3i3yre.png" },
  { id: 2, name: "Member 2", image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089268/ss_page_assets/uxmzl1pilqbc6ftfdw40.png" },
  { id: 3, name: "Member 3", image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089318/ss_page_assets/ftxrbsv8wxm7om9awiyb.png" },
  { id: 4, name: "Member 4", image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089327/ss_page_assets/cyn2xu22xzknreneamj9.png" },
  { id: 5, name: "Member 5", image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089292/ss_page_assets/e5o2az8dgnhk4lxbprr6.png" },
  { id: 6, name: "Member 6", image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089265/ss_page_assets/br7buqppm7c6jvzwrnbc.png" },
  { id: 7, name: "Member 7", image: "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769089321/ss_page_assets/ecbgdjx1sid3os7b0vn3.png" },
];

const DiamondImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative group">
    {/* Outer container rotated 45deg */}
    <div className="w-32 h-32 md:w-48 md:h-48 rotate-45 overflow-hidden border-4 border-white shadow-lg bg-gray-100 transition-transform duration-300 group-hover:scale-105 group-hover:z-10">
      {/* Inner image rotated back -45deg and scaled up to fill the diamond corners */}
      <div className="absolute inset-0 -rotate-45 scale-[1.42] flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </div>
);

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-4 px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight ">Our Work for a Better Tomorrow</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* Interlocking Diamond Layout */}
      <div className="flex flex-col items-center gap-2 md:gap-4">
        
        {/* Row 1: 3 Diamonds */}
        <div className="flex gap-12 md:gap-24">
          <DiamondImage src={team[0].image} alt={team[0].name} />
          <DiamondImage src={team[1].image} alt={team[1].name} />
          <DiamondImage src={team[2].image} alt={team[2].name} />
        </div>

        {/* Row 2: 2 Diamonds (Shifted up with negative margin to interlock) */}
        <div className="flex gap-12 md:gap-24 -mt-16 md:-mt-24">
          <DiamondImage src={team[3].image} alt={team[3].name} />
          <DiamondImage src={team[4].image} alt={team[4].name} />
        </div>

        {/* Row 3: 2 Diamonds (Shifted up again) */}
        <div className="flex gap-12 md:gap-24 -mt-16 md:-mt-24">
          <DiamondImage src={team[5].image} alt={team[5].name} />
          <DiamondImage src={team[6].image} alt={team[6].name} />
        </div>
        
      </div>
    </section>
  );
}
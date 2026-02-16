"use client";
import LetterBox from '../../svg-icons/icons/LetterBox'

export default function JoinCommunitySection() {
  return (
    <section className="relative w-full bg-[#fff] py-[120px] px-4 overflow-hidden">
      <div className="max-w-[1100px] mx-auto text-center relative z-10">

        {/* Top heading */}
        <p className="text-[#0D0D0D] text-[29px] font-[600] leading-[140%] tracking-[-2%]  ">
          Join Our Community of Donors and Volunteers:
        </p>

        <h2 className="text-[#0D0D0D] text-[29px] font-[600] leading-[140%] tracking-[-2%]  mb-12">
          Be Part of Positive Change in the World
        </h2>

        {/* Big count */}
        <h1 className="text-[64px] md:text-[74px] font-bold text-[#1f1f1f] leading-none mb-12">
          154,859+
        </h1>

        {/* Sub heading */}
        <p className="text-[#9B9898] text-[22px] font-[500] md:text-2xl mb-10 leading-[140%]">
          Join the Many Who Already Support
          <br className="hidden md:block" />
          Our Mission
        </p>

        {/* CTA */}
        <button className="bg-[#094C3B] hover:bg-[#13614a] transition text-white px-8 py-4 rounded-full text-lg font-medium">
          Join our Community
        </button>
      </div>

      {/* Decorative icons */}
      <LetterBox className="absolute !left-[8%] !bottom-[20%] !w-20 md:!w-24 !text-lime-400 !opacity-80" />
      <LetterBox className="absolute !right-[10%] top-[20%] w-20 md:w-24 text-lime-400 opacity-80" />
    </section>
  );
}

/* Envelope SVG */
function EnvelopeIcon({ className }: { className?: string }) {
  return (
   <LetterBox />
  );
}

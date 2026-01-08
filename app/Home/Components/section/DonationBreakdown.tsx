import React from "react";

export default function DonationBreakdown() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* LEFT CONTENT */}
        <div className="max-w-full lg:max-w-[560px]">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.2] font-bold text-black mb-4 sm:mb-6">
            How we spend your <br className="hidden sm:block" />
            donations and where it goes
          </h2>

          <p className="text-[14px] sm:text-[15px] text-gray-600 leading-7 mb-8 sm:mb-10">
            We understand that when you make a donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>

          {/* LEGEND */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm font-medium text-black">
            <Legend color="bg-[#B9F5C0]" text="40% planting trees" />
            <Legend color="bg-[#B39DFA]" text="35% cleanliness program" />
            <Legend color="bg-[#F9D36A]" text="10% animal safety" />
            <Legend color="bg-[#F78FB3]" text="5% feeding the poor" />
            <Legend color="bg-[#FFE6A6]" text="10% helping people" />
          </div>
        </div>

        {/* RIGHT DONUT */}
        <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px]">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full rotate-[-90deg]"
          >
            {/* Base */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#F3F4F6"
              strokeWidth="24"
            />

            {/* 40% Planting trees */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#B9F5C0"
              strokeWidth="24"
              strokeDasharray="201 502"
              strokeDashoffset="0"
            />

            {/* 35% Cleanliness */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#B39DFA"
              strokeWidth="24"
              strokeDasharray="176 502"
              strokeDashoffset="-201"
            />

            {/* 10% Helping people */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#FFE6A6"
              strokeWidth="24"
              strokeDasharray="50 502"
              strokeDashoffset="-377"
            />

            {/* 10% Animal safety */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#F9D36A"
              strokeWidth="24"
              strokeDasharray="50 502"
              strokeDashoffset="-427"
            />

            {/* 5% Feeding poor */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#F78FB3"
              strokeWidth="24"
              strokeDasharray="25 502"
              strokeDashoffset="-477"
            />
          </svg>

          {/* CENTER TEXT */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-black">
              $85k
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* LEGEND ITEM */
function Legend({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`w-3 h-3 rounded-sm ${color}`} />
      <span>{text}</span>
    </div>
  );
}

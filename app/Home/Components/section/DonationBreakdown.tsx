"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent } from "../../../Components/ui/card";
import type { ApexOptions } from "apexcharts";

/* ApexCharts MUST be dynamic (no SSR) */
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function DonationBreakdown() {
  const series: number[] = [55, 7, 16, 22];

 const options: ApexOptions = {
  chart: {
    type: "donut",
  },
  labels: ["Purple", "Pink", "Green", "Yellow"],
  colors: ["#B5A5F8", "#F79AC0", "#C8F7C5", "#FFD66E"],
  legend: { show: false },
  plotOptions: {
    pie: {
      donut: {
        size: "70%",
      },
      expandOnClick: false, // prevents default expand on click
      offsetX: 0,
      offsetY: 0,
      // ACTIVE SLICE SETTINGS
      dataLabels: {
        minAngleToShowLabel: 0,
      },
      // THIS makes the green slice “offset”
      customScale: 1, // optional global scaling
    },
  },
  states: {
    normal: {
      filter: {
        type: "none", // keep default slices normal
      },
    },
    active: {
      filter: {
        type: "none", // prevent default hover darkening
      },
      // offset the 3rd slice (green) by 10px
      offset: 10,
    },
  },
  dataLabels: { enabled: false },
  stroke: { width: 0 },
};


  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 min-h-[560px]">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* LEFT CONTENT */}
        <div className="max-w-full lg:max-w-[633px]">
          <h2 className="text-[32px] sm:text-[36px] lg:text-[44px] leading-[1.2] font-bold text-black mb-4 sm:mb-6">
            How we spend your <br className="hidden sm:block" />
            donations and where it goes
          </h2>

          <p className="text-[15px] sm:text-[16px] text-gray-600 leading-[160%] font-normal mb-8 sm:mb-10">
            We understand that when you make a donation, you want to know exactly
            where your money is going and we pledge to be transparent.
          </p>

          {/* LEGEND */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-2 text-[15px] font-medium text-black">
            <Legend color="bg-[#B9F5C0]" text="40% Skill Developement" />
            <Legend color="bg-[#B39DFA]" text="35% Education" />
            <Legend color="bg-[#F9D36A]" text="10% Women Empowerment" />
            <Legend color="bg-[#F78FB3]" text="10% Old age Care" />
            <Legend color="bg-[#FFE6A6]" text="5% Food safty" />
          </div>
        </div>

        {/* RIGHT DONUT */}
        <Card className="w-[240px] sm:w-[300px] lg:w-[360px] !border-none !shadow-none">
          <CardContent className="flex items-center justify-center p-0">
            <div className="relative w-full h-full">
              <Chart
                options={options}
                series={series}
                type="donut"
                height={300}
              />

              {/* CENTER TEXT */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-black">
                  $85k
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* LEGEND ITEM (TYPE SAFE) */
type LegendProps = {
  color: string;
  text: string;
};

function Legend({ color, text }: LegendProps) {
  return (
    <div className="flex items-center gap-3">
      <span className={`w-3 h-3 rounded-sm ${color}`} />
      <span>{text}</span>
    </div>
  );
}

"use client";

import { useState } from "react";
import Book from "./Book";
import { DiaryEvent } from "../data/events";

export default function DiaryBook() {
  const [activeEvent, setActiveEvent] = useState<DiaryEvent | null>(null);

  return (
    <div
      className="w-full flex flex-col items-center justify-center py-20 max-[600px]:py-8 "
      id="Diary"
    >
      <div className="relative text-center mb-20 max-[600px]:mb-5 w-full max-w-[1200px]">
        {/* Decorative lines */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 scale-x-[-1]">
          <span className="flag saffron-left max-w-[250px] md:max-w-[180px]" />
          <span className="flag white-left max-w-[250px] md:max-w-[180px]" />
          <span className="flag green-left max-w-[250px] md:max-w-[180px]" />
        </div>
        {/* Decorative flag bars – left */}

        {/* Decorative flag bars – right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 scale-x-[-1]">
          <span className="flag saffron-right max-w-[250px] md:max-w-[180px]" />
          <span className="flag white-right max-w-[250px] md:max-w-[180px]" />
          <span className="flag green-right max-w-[250px] md:max-w-[180px] w-full" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 text-center scale-x-[1]">
          <strong className="uppercase">Community Events Diary</strong> <br />{" "}
          <span className="!text-[18px]">
            Moments of Hope, Service, and Smiles
          </span>
        </h2>
      </div>
      <Book activeEvent={activeEvent} setActiveEvent={setActiveEvent} />
    </div>
  );
}

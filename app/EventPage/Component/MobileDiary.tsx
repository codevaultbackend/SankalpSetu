"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../../Components/figma/ImageWithFallback";

type PageState = "cover" | "calendar" | "details";

export default function MobileDiary({
  monthName,
  year,
  dayName,
  dayNumber,
  events,
}: any) {
  const [page, setPage] = useState<PageState>("cover");

  return (
    <div className="w-[95%] mx-auto perspective">
      <div className="relative h-[552px] bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden rounded-xl shadow-xl">

        {/* ================= HEADER ================= */}
        <div className="sticky top-0 z-30 bg-[#716400] text-amber-100 px-4 py-3 text-center">
          <div className="text-xs tracking-widest">SANKALP SETU</div>
          <div className="text-lg font-bold tracking-widest">
            DIARY {year}
          </div>
        </div>

        {/* ================= BOOK ================= */}
        <div className="relative w-full h-full preserve-3d h-[485px] relative overflow-y-scroll">

          {/* ================= BOOK COVER ================= */}
          <motion.div
            className="absolute inset-0 backface-hidden preserve-3d origin-left z-30"
            animate={{ rotateY: page === "cover" ? 0 : -180 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              onClick={() => setPage("calendar")}
              className=" min-h-[485px] h-fit w-full bg-[#716400] text-amber-100 flex flex-col items-center justify-center cursor-pointer"
            >
                <span className="bg-red-600 text-[#fff] border-b-[1px solid #ffff] font-bold p-[4px] absolute top-[34px] left-0 rotate-90">Tap to Open</span>
              <div className="text-xs tracking-widest mb-2">
                SANKALP SETU
              </div>
              <div className="text-[22px] font-bold tracking-widest mb-1 text-center">
                Making a Difference Through Collective Action
              </div>
              <div className="text-lg tracking-widest">{year}</div>

              <div className="absolute bottom-8 text-[10px] opacity-80">
                Tap to Open
              </div>
            </div>
          </motion.div>

          {/* ================= CALENDAR PAGE ================= */}
          <motion.div
            className="absolute inset-0 backface-hidden preserve-3d origin-left z-20"
            animate={{ rotateY: page === "calendar" ? 0 : 180 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Paper texture */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
              }}
            />

            <div className="relative h-full overflow-y-auto p-6 pl-10">
              {/* Date */}
              <div className="mb-6">
                <div className="text-amber-900 tracking-widest text-xs font-semibold">
                  {monthName.toUpperCase()} {year}
                </div>

                <div className="flex items-baseline gap-3">
                  <div
                    className="text-amber-800 text-[56px] font-bold leading-none"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {dayNumber}
                  </div>
                  <div
                    className="text-amber-600 text-lg"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {dayName}
                  </div>
                </div>
              </div>

              {/* Mini calendar */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {[...Array(31)].map((_, i) => {
                  const isToday = i + 1 === dayNumber;
                  return (
                    <div
                      key={i}
                      className={`text-center text-[11px] ${
                        isToday
                          ? "bg-amber-800 text-white rounded-full w-6 h-6 mx-auto flex items-center justify-center"
                          : "text-amber-700"
                      }`}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>

              {/* Events */}
              <div className="space-y-3">
                {events.map((event: any, index: number) => (
                  <div
                    key={index}
                    onClick={() => setPage("details")}
                    className="bg-blue-50 border-l-4 border-blue-500 p-2.5 rounded-r shadow-sm cursor-pointer"
                  >
                    <div className="flex gap-2.5">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-14 h-14 object-cover rounded"
                      />
                      <div>
                        <div className="text-[10px] font-semibold">
                          {event.title}
                        </div>
                        <div className="text-[8px] text-gray-600">
                          {event.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= DETAILS PAGE ================= */}
          <motion.div
            className="absolute inset-0 bg-white backface-hidden preserve-3d origin-right z-10"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: page === "details" ? 0 : 180 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="h-full overflow-y-auto p-6">
              <button
                onClick={() => setPage("calendar")}
                className="flex items-center gap-2 text-amber-800 mb-4 text-sm font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              {events.map((event: any, index: number) => (
                <div
                  key={index}
                  className="border-l-4 border-amber-700 p-4 mb-6 shadow-md"
                >
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover rounded mb-3"
                  />
                  <div className="font-bold mb-2">{event.title}</div>
                  <div className="text-xs text-gray-600 mb-3">
                    {event.description}
                  </div>

                  <div className="flex gap-2">
                    <Link href="/volunteer" className="flex-1">
                      <button className="w-full py-2 bg-amber-800 text-white rounded text-xs">
                        Volunteer
                      </button>
                    </Link>
                    <Link href="/ngo-registration" className="flex-1">
                      <button className="w-full py-2 bg-amber-600 text-white rounded text-xs">
                        NGO
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

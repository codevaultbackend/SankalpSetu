import Link from "next/link";
import { eventService } from "../../../services/event.service";
import { GetEventsResponse } from "../../../types/event";

export default async function EventsSection() {
  let data: GetEventsResponse | null = null;

  try {
    data = await eventService.getEvents();
  } catch (error) {
    console.error("Events API failed:", error);
  }

  if (!data || !data.eventdetails?.length) {
    return (
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
         
          <h2 className="text-[40px] sm:text-[34px] lg:text-[40px] font-[500] text-[#1D2130] mb-6">
            Our Events
          </h2>

          <div className="rounded-xl bg-gray-100 p-6 text-gray-600">
            Events are temporarily unavailable.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex items-center gap-6 mb-10">
           <div className=" flex  w-full items-center max-[600px]:flex-wrap max-[600px]:!flex-col">
             <h2 className="text-[40px] sm:text-[34px] lg:text-[40px] font-[500] text-[#1D2130] mb-6 whitespace-nowrap mr-[20px]">
            Our Events
          </h2>
            <div className=" h-[1px] bg-[#E5E5E5] ml-auto w-[85%]" />
          </div>
         
          <div className="h-[1px] flex-1 bg-white/70" />
        </div>

        {/* HORIZONTAL SCROLL */}
        <div className="relative">
          
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-1
              lg:grid-cols-2
              gap-6
              overflow-x-auto
              scroll-smooth
              snap-x snap-mandatory
              pb-4
              scrollbar-hide
            "
          >
            {data.eventdetails.map((event) => {
              const [day, month, year] = event.eventDate.split("-");
              const dateObj = new Date(`${year}-${month}-${day}`);

              return (
                <div key={event._id} className="snap-start">
                  <EventCard
                    date={dateObj.getDate().toString()}
                    month={dateObj
                      .toLocaleString("en-US", { month: "short" })
                      .toUpperCase()}
                    title={event.nameofevent}
                  />
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}

/* -------------------------------- */
/* EVENT CARD (UNCHANGED DESIGN) */
/* -------------------------------- */

function EventCard({
  date,
  month,
  title,
}: {
  date: string;
  month: string;
  title: string;
}) {
  return (
    <div className="bg-[#C9FBC8] rounded-xl px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 h-full">
      {/* LEFT */}
      <div className="flex flex-col sm:flex-row items-start gap-6 max-w-[520px]">
        {/* DATE */}
        <div className="shrink-0">
          <div className="text-[36px] sm:text-[44px] lg:text-[48px] font-[500] text-[#1D2130] leading-none">
            {date}
          </div>
          <div className="text-[14px] sm:text-[16px] font-semibold tracking-widest text-[#1F2937] mt-1">
            {month}
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <div className="!flex  gap-4 mb-3 ">
            <span className="text-[16px] tracking-[0.2em] leading-[100%] font-[500] text-[#1F2937] ">
              NEXT EVENTS
            </span>
            <span className="w-10 h-[2px] bg-[#1F2937]" />
          </div>

          <h3 className="text-[28px] sm:text-[26px] lg:text-[28px] font-bold text-[#1D2130] leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* ARROW */}
     
      <div className="w-[56px] h-[56px] sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shrink-0">
        <Link href='/EventPage#Diary' className="!no-underline"> <span className="text-[24px] sm:text-[28px] text-[#1D2130]">→</span></Link>
      </div>
    </div>
  );
}

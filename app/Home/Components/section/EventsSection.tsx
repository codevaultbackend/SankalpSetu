import { eventService } from "../../../services/event.service";
import { GetEventsResponse, EventItem } from "../../../types/event";

export default async function EventsSection() {
  const data: GetEventsResponse = await eventService.getEvents();

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold text-[#2E3445] whitespace-nowrap">
            Our Events
          </h2>
          <div className="h-[1px] flex-1 bg-white/70" />
        </div>

        {/* EVENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {data.eventdetails.map((event: EventItem) => {
            const today = new Date();
            const date = today.getDate().toString();
            const month = today
              .toLocaleString("en-US", { month: "short" })
              .toUpperCase();

            return (
              <EventCard
                key={event._id}
                date={date}
                month={month}
                title={event.nameofevent}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* EVENT CARD */
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
    <div className="bg-[#C9FBC8] rounded-xl px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">

      {/* LEFT */}
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 lg:gap-10 max-w-full lg:max-w-[520px]">

        {/* DATE */}
        <div className="text-left shrink-0">
          <div className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-[#1F2937] leading-none">
            {date}
          </div>
          <div className="text-[14px] sm:text-[16px] font-semibold tracking-widest text-[#1F2937] mt-1 sm:mt-2">
            {month}
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
            <span className="text-[14px] sm:text-[16px] tracking-[0.2em] font-semibold text-[#1F2937]">
              NEXT EVENTS
            </span>
            <span className="w-8 sm:w-12 h-[2px] bg-[#1F2937]" />
          </div>

          <h3 className="text-[22px] sm:text-[26px] lg:text-[32px] font-semibold text-[#1F2937] leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* ARROW */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shrink-0 self-start sm:self-auto">
        <span className="text-[24px] sm:text-[28px] text-[#1F2937]">→</span>
      </div>
    </div>
  );
}

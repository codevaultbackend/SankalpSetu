"use client";

import { useEffect, useState } from "react";
import { format, isSameDay, isBefore } from "date-fns";
import Link from "next/link";

import { eventService } from "../../services/event.service";
import { DiaryEvent } from "../data/events";

interface PageFrontProps {
  onEventClick: (e: DiaryEvent) => void;
}

export default function PageFront({ onEventClick }: PageFrontProps) {
  const [events, setEvents] = useState<DiaryEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const today = new Date();

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await eventService.getEvents();

        if (!data?.eventdetails?.length) {
          setEvents([]);
          return;
        }

        const mapped: DiaryEvent[] = data.eventdetails.map((ev) => {
          const [day, month, year] = ev.eventDate.split("-").map(Number);

          return {
            id: ev._id,
            title: ev.title || ev.nameofevent,
            description: ev.description_of_event,
            location: ev.Place,
            date: new Date(year, month - 1, day),
            image: "/WORKiCON.png",
            time: "10:00 AM",
          };
        });

        setEvents(mapped);
      } catch (err) {
        console.error("Failed to fetch events", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const presentEvents = events;
  const pastEvents = events.filter((e) => isBefore(e.date, today));

  return (
    <div className="p-10 pl-[90px] max-[768px]:pl-[40px] h-full overflow-hidden font-sans bg-[#ECFDF5] relative">
      {/* MARGIN LINE */}
      <div className="absolute left-[70px] top-0 h-full w-[2px] bg-pink-400 opacity-80 max-[768px]:left-[20px]" />

      {/* CALENDAR */}
      <div className="relative z-10">
        <h2 className="tracking-[2.27px] text-[22px] font-[600] text-[#7B3306]">
          {format(today, "MMMM yyyy").toUpperCase()}
        </h2>

        <div className="flex items-baseline gap-6 mb-8">
          <span className="text-[101px] font-serif font-bold leading-[101px] text-[#7B3306]">
            {today.getDate()}
          </span>
          <span className="text-[30px] leading-[40px] text-[#E17100]">
            {format(today, "EEEE")}
          </span>
        </div>

        {/* DAYS */}
        <div className="grid grid-cols-7 text-center text-sm mb-2 text-[#B45309]">
          {["S", "M", "T", "W", "T", "F", "S"].map((d,index) => (
            <span key={index}>{d}</span>
          ))}
        </div>

        {/* DATES */}
        <div className="grid grid-cols-7 gap-y-2 text-center text-[13px] text-[#92400E] mb-6">
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <div key={day} className="flex justify-center">
              {day === today.getDate() ? (
                <div className="w-7 h-7 rounded-full bg-[#8B3F00] text-white flex items-center justify-center text-[12px]">
                  {day}
                </div>
              ) : (
                <span>{day}</span>
              )}
            </div>
          ))}
        </div>

        <hr className="my-6" />

        {/* PRESENT EVENTS */}
        <div className="overflow-y-auto overflow-x-hidden max-h-[320px] pr-2">
          <Section title="PRESENT EVENTS">
            {presentEvents.length ? (
              presentEvents.map((e) => (
                <EventCard key={e.id} event={e} onClick={onEventClick} />
              ))
            ) : (
              <p className="text-gray-500">No events today</p>
            )}
          </Section>

          {/* PAST EVENTS */}
          <Section title="PAST EVENTS">
            {pastEvents.length ? (
              pastEvents.map((e) => (
                <EventCard key={e.id} event={e} onClick={onEventClick} />
              ))
            ) : (
              <p className="text-gray-500">No past events</p>
            )}
          </Section>
        </div>
      </div>
    </div>
  );
}

/* ---------- HELPERS ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}

function EventCard({
  event,
  onClick,
}: {
  event: DiaryEvent;
  onClick: (e: DiaryEvent) => void;
}) {
  return (
    <div
      onClick={() => onClick(event)}
      className="relative mb-6 bg-[#E9FFF4] rounded-lg p-4 pl-6 shadow-lg cursor-pointer hover:scale-[1.01] transition"
    >
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-green-500 rounded-l-lg" />

      <div className="flex gap-4">
        <img
          src={event.image}
          className="w-20 h-20 rounded object-cover"
          alt={event.title}
        />

        <div className="flex-1">
          <h4 className="font-bold text-lg max-[768px]:text-[12px]" >{event.title}</h4>
          <p className="text-sm text-gray-700 max-[768px]:text-[10px]">{event.time}</p>
          <p className="text-sm text-gray-700 max-[768px]:text-[10px]">
            {format(event.date, "MMM dd, yyyy")}
          </p>
          <p className="text-sm text-gray-700 max-[768px]:text-[10px]">{event.location}</p>

          <div className="flex gap-2 mt-3" onClick={(e) => e.stopPropagation()}>
            <Link href="/volunteer">
              <button className="px-2 py-1 max-[768px]:text-[10px] bg-[#8B3F00] text-white text-xs rounded">
                Register as Volunteer
              </button>
            </Link>

            <Link href="/ngo-registration">
              <button className="px-2 py-1 bg-[#F59E0B] max-[768px]:text-[10px] text-white text-xs rounded">
                Register as NGO
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

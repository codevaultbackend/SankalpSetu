"use client";

import { useEffect, useState } from "react";
import { ImageWithFallback } from "../../Components/figma/ImageWithFallback";
import { Clock, Calendar, MapPin, ArrowLeft, Bookmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { eventService } from "../../services/event.service";
import MobileDiary from "./MobileDiary";
import Link from "next/link";

export default function Book() {
  const currentDate = new Date();
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  const dayName = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const dayNumber = currentDate.getDate();

  const handleEventClick = () => {
    setIsPageTurned(true);
  };
  
  

  const handleBackClick = () => {
    setIsPageTurned(false);
  };

  const [isPageTurned, setIsPageTurned] = useState(false);
  const [events, setEvents] = useState<any[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  /* -------------------- MOBILE DETECTION -------------------- */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* -------------------- API INTEGRATION -------------------- */
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await eventService.getEvents();
        if (res?.success) {
          const mapped = res.eventdetails.map((e: any) => ({
            type: "upcoming",
            title: e.title || e.nameofevent,
            image:
              "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
            time: "10:00 AM",
            date: e.eventDate,
            location: e.Place,
            description: e.description_of_event,
          }));
          setEvents(mapped);
        }
      } catch (err) {
        console.error("Event fetch failed", err);
      }
    };
    fetchEvents();
  }, []);

  const presentAndUpcomingEvents = events.filter(
    (e) => e.type === "present" || e.type === "upcoming"
  );

  /* -------------------- MOBILE CLOSED DIARY -------------------- */
  if (isMobile) {
    return (
      <MobileDiary
        monthName={monthName}
        year={year}
        dayName={dayName}
        dayNumber={dayNumber}
        events={events}
      />
    );
  }

  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br  p-8">
      {/* Diary Book */}
      <div className="relative" style={{ perspective: "2000px" }}>
        {/* Book Shadow */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#716400] to-[#716400] rounded-r-lg transform translate-x-1 translate-y-1 blur-sm opacity-40"
          style={{ width: "800px", height: "600px" }}
        />

        {/* Main Diary Container */}
        <div
          className="relative flex bg-gradient-to-br from-[#716400] to-[#716400] rounded-lg shadow-2xl overflow-visible"
          style={{ width: "800px", height: "600px" }}
        >
          {/* Left Page - Cover/Binding */}
          <div className="w-1/2 bg-gradient-to-br from-[#716400] via-[#716400] to-[#716400] relative border-r-4 border-[#716400]">
            {/* Leather texture effect */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.1) 2px, rgba(0,0,0,.1) 4px)",
              }}
            />

            {/* Decorative border */}
            <div className="absolute inset-6 border-2 border-amber-600 rounded-sm opacity-40" />

            {/* Title embossing */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-amber-200">
              <div
                className="text-4xl mb-4 tracking-widest"
                style={{ fontFamily: "Georgia, serif", fontWeight: "300" }}
              >
                SANKAP SETU
              </div>
              <div
                className="text-6xl mb-4 tracking-widest"
                style={{ fontFamily: "Georgia, serif", fontWeight: "600" }}
              >
                DIARY
              </div>
              <div
                className="text-3xl tracking-widest opacity-70"
                style={{ fontFamily: "Georgia, serif", fontWeight: "300" }}
              >
                {year}
              </div>

              {/* Decorative ornament */}
              <div className="mt-8 flex gap-2 items-center opacity-50">
                <div className="w-12 h-px bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-12 h-px bg-amber-400" />
              </div>
            </div>

            {/* Binding holes */}
            <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-evenly items-center w-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-amber-950 shadow-inner"
                />
              ))}
            </div>
          </div>

          {/* Right Page - Animated */}
          <motion.div
            className="w-1/2 bg-gradient-to-br from-amber-50 to-orange-50 relative"
            style={{
              transformOrigin: "left center",
              overflow: "hidden",
            }}
            animate={{
              rotateY: isPageTurned ? -180 : 0,
            }}
            transition={{
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <div
              style={{
                transform: isPageTurned ? "scaleX(-1)" : "scaleX(1)",
                height: "100%",
              }}
            >
              <AnimatePresence mode="wait">
                {!isPageTurned ? (
                  /* First Page - Calendar */
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    {/* Paper texture */}
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage:
                          'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")',
                      }}
                    />

                    {/* Notebook lines */}
                    <div className="absolute inset-0 flex flex-col justify-between py-16 px-8">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-px bg-cyan-200 opacity-30" />
                      ))}
                    </div>

                    {/* Red margin line */}
                    <div className="absolute left-12 top-0 bottom-0 w-px bg-rose-300 opacity-40" />

                    {/* Content */}
                    <div className="relative h-full flex flex-col p-8 pl-16">
                      {/* Date Header */}
                      <div className="mb-6">
                        <div
                          className="text-amber-900 tracking-widest mb-2"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          {monthName.toUpperCase()} {year}
                        </div>
                        <div className="flex items-baseline gap-4">
                          <div
                            className="text-amber-800"
                            style={{
                              fontSize: "70px",
                              fontWeight: "700",
                              lineHeight: "1",
                              fontFamily: "Georgia, serif",
                            }}
                          >
                            {dayNumber}
                          </div>
                          <div
                            className="text-amber-600"
                            style={{
                              fontSize: "20px",
                              fontWeight: "500",
                              fontFamily: "Georgia, serif",
                            }}
                          >
                            {dayName}
                          </div>
                        </div>
                      </div>

                      {/* Mini Calendar */}
                      <div className="mt-2">
                        <div className="grid grid-cols-7 gap-1.5 mb-1.5">
                          {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                            <div
                              key={i}
                              className="text-center text-amber-700"
                              style={{ fontSize: "10px", fontWeight: "600" }}
                            >
                              {day}
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-7 gap-1.5">
                          {[...Array(31)].map((_, i) => {
                            const isToday = i + 1 === dayNumber;
                            return (
                              <div
                                key={i}
                                className={`text-center ${
                                  isToday
                                    ? "bg-amber-800 text-amber-50 rounded-full w-6 h-6 flex items-center justify-center"
                                    : "text-amber-700"
                                }`}
                                style={{
                                  fontSize: "11px",
                                  fontWeight: isToday ? "600" : "500",
                                }}
                              >
                                {i + 1}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Events Section */}
                      <div className="mt-6 flex-1 overflow-y-auto pr-2">
                        <div className="space-y-2.5">
                          {events.map((event, index) => {
                            const bgColor =
                              event.type === "present"
                                ? "bg-emerald-50"
                                : event.type === "past"
                                ? "bg-gray-50"
                                : "bg-blue-50";
                            const borderColor =
                              event.type === "present"
                                ? "border-emerald-500"
                                : event.type === "past"
                                ? "border-gray-400"
                                : "border-blue-500";
                            const titleColor =
                              event.type === "present"
                                ? "text-emerald-700"
                                : event.type === "past"
                                ? "text-gray-600"
                                : "text-blue-700";
                            const label =
                              event.type === "present"
                                ? "PRESENT EVENTS"
                                : event.type === "past"
                                ? "PAST EVENTS"
                                : "UPCOMING EVENTS";
                            const opacity =
                              event.type === "past" ? "opacity-70" : "";

                            return (
                              <div
                                key={index}
                                onClick={handleEventClick}
                                className={`${bgColor} border-l-4 ${borderColor} p-2.5 rounded-r shadow-sm ${opacity} cursor-pointer hover:shadow-md transition-shadow`}
                              >
                                <div
                                  className={`${titleColor} tracking-wide mb-1.5`}
                                  style={{
                                    fontSize: "9px",
                                    fontWeight: "600",
                                    fontFamily: "Georgia, serif",
                                  }}
                                >
                                  {label}
                                </div>

                                {/* Event content */}
                                <div className="flex gap-2.5">
                                  {/* Event image */}
                                  <div className="flex-shrink-0">
                                    <ImageWithFallback
                                      src={event.image}
                                      alt={event.title}
                                      className="w-14 h-14 object-cover rounded"
                                    />
                                  </div>

                                  {/* Event details */}
                                  <div className="flex-1 min-w-0">
                                    <div
                                      className="text-gray-900 mb-1.5"
                                      style={{
                                        fontSize: "10px",
                                        fontWeight: "600",
                                        fontFamily: "Georgia, serif",
                                      }}
                                    >
                                      {event.title}
                                    </div>

                                    {/* Time, Date, Location */}
                                    <div className="space-y-0.5">
                                      <div
                                        className="flex items-center gap-1 text-gray-600"
                                        style={{ fontSize: "8px" }}
                                      >
                                        <Clock className="w-2.5 h-2.5" />
                                        <span>{event.time}</span>
                                      </div>
                                      <div
                                        className="flex items-center gap-1 text-gray-600"
                                        style={{ fontSize: "8px" }}
                                      >
                                        <Calendar className="w-2.5 h-2.5" />
                                        <span>{event.date}</span>
                                      </div>
                                      <div
                                        className="flex items-center gap-1 text-gray-600"
                                        style={{ fontSize: "8px" }}
                                      >
                                        <MapPin className="w-2.5 h-2.5" />
                                        <span className="truncate">
                                          {event.location}
                                        </span>
                                      </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-1.5 mt-1.5">
                                      <Link href="/volunteer">
                                        <button
                                          className="px-1.5 py-0.5 bg-amber-800 text-white rounded hover:bg-amber-900 transition-colors"
                                          style={{
                                            fontSize: "7px",
                                            fontWeight: "600",
                                          }}
                                        >
                                          Register as Volunteer
                                        </button>
                                      </Link>
                                      <Link href="/ngo-registration">
                                        <button
                                          className="px-1.5 py-0.5 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                                          style={{
                                            fontSize: "7px",
                                            fontWeight: "600",
                                          }}
                                        >
                                          Register as NGO
                                        </button>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div className="absolute bottom-4 right-4 opacity-20">
                        <div className="w-10 h-10 border-2 border-amber-600 rounded-full flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-amber-600 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* Second Page - Detailed Events */
                  <motion.div
                    key="details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="h-full"
                  >
                    {/* Paper texture */}
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage:
                          'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")',
                      }}
                    />

                    {/* Notebook lines */}
                    <div className="absolute inset-0 flex flex-col justify-between py-16 px-8">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-px bg-cyan-200 opacity-30" />
                      ))}
                    </div>

                    {/* Red margin line */}
                    <div className="absolute left-12 top-0 bottom-0 w-px bg-rose-300 opacity-40" />

                    {/* Content */}
                    <div className="relative h-full flex flex-col p-8 pl-16">
                      {/* Back Button */}
                      <button
                        onClick={handleBackClick}
                        className="flex items-center gap-2 text-amber-800 hover:text-amber-900 mb-4 transition-colors"
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Calendar
                      </button>

                      {/* Header */}
                      <div className="mb-6">
                        <div
                          className="text-amber-900 tracking-widest"
                          style={{
                            fontSize: "18px",
                            fontWeight: "700",
                            fontFamily: "Georgia, serif",
                          }}
                        >
                          ACTIVE EVENTS
                        </div>
                        <div
                          className="text-amber-700 mt-1"
                          style={{
                            fontSize: "11px",
                            fontFamily: "Georgia, serif",
                          }}
                        >
                          Present & Upcoming Opportunities
                        </div>
                      </div>

                      {/* Detailed Events List */}
                      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                        {presentAndUpcomingEvents.map((event, index) => {
                          const bgColor =
                            event.type === "present"
                              ? "bg-emerald-50"
                              : "bg-blue-50";
                          const borderColor =
                            event.type === "present"
                              ? "border-emerald-500"
                              : "border-blue-500";
                          const badgeColor =
                            event.type === "present"
                              ? "bg-emerald-500"
                              : "bg-blue-500";
                          const badgeText =
                            event.type === "present"
                              ? "HAPPENING NOW"
                              : "UPCOMING";

                          return (
                            <div
                              key={index}
                              className={`${bgColor} border-l-4 ${borderColor} p-4 rounded-r shadow-md`}
                            >
                              {/* Badge */}
                              <div
                                className={`inline-block ${badgeColor} text-white px-2 py-1 rounded mb-3`}
                                style={{ fontSize: "8px", fontWeight: "700" }}
                              >
                                {badgeText}
                              </div>

                              {/* Event Image */}
                              <div className="mb-3">
                                <ImageWithFallback
                                  src={event.image}
                                  alt={event.title}
                                  className="w-full h-32 object-cover rounded"
                                />
                              </div>

                              {/* Title */}
                              <div
                                className="text-gray-900 mb-2"
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "700",
                                  fontFamily: "Georgia, serif",
                                }}
                              >
                                {event.title}
                              </div>

                              {/* Description */}
                              <div
                                className="text-gray-700 mb-3"
                                style={{
                                  fontSize: "10px",
                                  fontFamily: "Georgia, serif",
                                  lineHeight: "1.4",
                                }}
                              >
                                {event.description}
                              </div>

                              {/* Details */}
                              <div className="space-y-1.5 mb-3">
                                <div
                                  className="flex items-center gap-2 text-gray-600"
                                  style={{ fontSize: "10px" }}
                                >
                                  <Clock className="w-4 h-4" />
                                  <span style={{ fontWeight: "600" }}>
                                    Time:
                                  </span>
                                  <span>{event.time}</span>
                                </div>
                                <div
                                  className="flex items-center gap-2 text-gray-600"
                                  style={{ fontSize: "10px" }}
                                >
                                  <Calendar className="w-4 h-4" />
                                  <span style={{ fontWeight: "600" }}>
                                    Date:
                                  </span>
                                  <span>{event.date}</span>
                                </div>
                                <div
                                  className="flex items-center gap-2 text-gray-600"
                                  style={{ fontSize: "10px" }}
                                >
                                  <MapPin className="w-4 h-4" />
                                  <span style={{ fontWeight: "600" }}>
                                    Location:
                                  </span>
                                  <span>{event.location}</span>
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex gap-2">
                                <Link href="/volunteer">
                                  <button
                                    className="flex-1 px-3 py-2 bg-amber-800 text-white rounded hover:bg-amber-900 transition-colors"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Register as Volunteer
                                  </button>
                                </Link>
                                <Link href="/ngo-registration">
                                  <button
                                    className="flex-1 px-3 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Register as NGO
                                  </button>
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Page curl effect */}
        {!isPageTurned && (
          <div
            className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent via-amber-100 to-amber-200 opacity-30"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
              borderRadius: "0 0 8px 0",
            }}
          />
        )}
      </div>
    </div>
  );
}

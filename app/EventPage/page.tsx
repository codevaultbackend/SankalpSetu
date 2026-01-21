import Hero from "../Components/layout/Hero";
import DiaryBook from "./Component/DiaryBook";
import EventsCrousel from "./Component/EventsCrousel";

export default function Page() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Hero />
      <DiaryBook />

      {/* Normal layout, starts from slide 1 */}
      <EventsCrousel />

      {/* Reversed layout, starts from slide 2 */}
      <EventsCrousel reverse />

      <img
        src="/EventbottomIcon.png"
        className="absolute bottom-[-201px] left-6  w-[212px] h-auto"
        alt="eventPage"
      />
    </main>
  );
}

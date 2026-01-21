import Link from "next/link";
import { DiaryEvent } from "../data/events";

export default function PageBack({
  event,
  onBack,
}: {
  event: DiaryEvent | null;
  onBack: () => void;
}) {
  if (!event) return null;

  return (
    <div className="p-10 h-full overflow-y-auto">
      <button onClick={onBack} className="mb-6 text-sm underline">
        ← Back to Calendar
      </button>

      <h2 className="text-2xl font-bold mb-4">{event.title}</h2>

      <img
        src={event.image}
        className="w-full h-60 object-cover rounded mb-4"
        alt=""
      />

      <p className="mb-4">{event.description}</p>

      <div className="flex gap-4">
        <Link href="/ngo-registration">
          <button className="bg-[#8B3F00] text-white px-5 py-2 rounded">
            Register as Volunteer
          </button>
        </Link>
        <Link href="/volunteer">
          <button className="bg-orange-500 text-white px-5 py-2 rounded">
            Register as NGO
          </button>
        </Link>
        
      </div>
    </div>
  );
}

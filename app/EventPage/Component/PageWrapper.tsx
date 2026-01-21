"use client";

import PageFront from "./PageFront";
import PageBack from "./PageBack";
import { DiaryEvent } from "../data/events";

interface Props {
  activeEvent: DiaryEvent | null;
  setActiveEvent: (e: DiaryEvent | null) => void;
}

export default function PageWrapper({
  activeEvent,
  setActiveEvent,
}: Props) {
  const flipped = Boolean(activeEvent);

  return (
    <div className="w-full h-full perspective">
      <div
        className={`relative w-full h-full preserve-3d transition-transform duration-700 ease-in-out`}
        style={{
          transform: flipped ? "rotateY(-180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT PAGE */}
        <div className="absolute inset-0 backface-hidden">
          <PageFront onEventClick={setActiveEvent} />
        </div>

        {/* BACK PAGE */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          {activeEvent && (
            <PageBack
              event={activeEvent}
              onBack={() => setActiveEvent(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faPhone,
  faFileLines,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  { label: "Organization Details", icon: faBuilding },
  { label: "Contact Details", icon: faPhone },
  { label: "Legal Documents", icon: faFileLines },
  { label: "Review & Submit", icon: faCheck },
];

export default function Stepper({ step }: { step: number }) {
  return (
    <div className="w-full max-w-[900px] mx-auto mt-10 px-4">
      <div className="flex items-center justify-between relative">
        {/* Connector Line */}
        <div className="absolute top-5 left-0 right-0 h-[2px] bg-gray-200" />
        <div
          className="absolute top-5 left-0 h-[2px] bg-green-500 transition-all"
          style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((s, i) => {
          const isCompleted = i < step;
          const isActive = i === step;

          return (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center flex-1"
            >
              {/* Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center
                  ${
                    isCompleted
                      ? "bg-green-500 text-white"
                      : isActive
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
              >
                <FontAwesomeIcon icon={s.icon} />
              </div>

              {/* Label */}
              <span
                className={`mt-3 text-xs text-center max-w-[120px]
                  ${
                    isCompleted
                      ? "text-green-600"
                      : isActive
                      ? "text-blue-600"
                      : "text-gray-400"
                  }`}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

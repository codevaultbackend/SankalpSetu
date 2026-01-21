export default function GeometricSection() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* ROTATION WRAPPER */}
      <div className="relative rotate-45 scale-[1.05]">
        {/* ROW 1 */}
        <div className="flex gap-4 mb-4 justify-center">
          <div className="w-[90px] h-[90px] bg-[#1E1D36]" />
        </div>

        {/* ROW 2 */}
        <div className="flex gap-4 mb-4">
          <div className="w-[120px] h-[120px] bg-[#1E1D36]" />
          <div className="w-[120px] h-[120px] bg-[#1E1D36]" />
        </div>

        {/* ROW 3 */}
        <div className="flex gap-4 mb-4">
          <div className="w-[180px] h-[180px] bg-[#1E1D36]" />
          <div className="flex flex-col gap-4">
            <div className="w-[90px] h-[90px] bg-[#1E1D36]" />
            <div className="w-[90px] h-[90px] bg-[#1E1D36]" />
          </div>
          <div className="w-[180px] h-[180px] bg-[#1E1D36]" />
        </div>

        {/* ROW 4 */}
        <div className="flex gap-4 justify-center">
          <div className="w-[180px] h-[180px] bg-[#1E1D36]" />
        </div>
      </div>
    </section>
  );
}

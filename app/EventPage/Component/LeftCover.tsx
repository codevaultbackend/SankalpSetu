export default function LeftCover() {
  return (
    <div className="relative w-full h-full bg-[#716400] text-[#FFD88A] flex items-center justify-center">
      <div className="absolute inset-6 border border-[#C96A00] rounded-xl" />

      <div className="text-center z-10">
        <p className="tracking-widest text-xl mb-6">SANKAP SETU</p>
        <h1 className="text-6xl font-bold tracking-wide">DIARY</h1>
        <p className="mt-6 text-2xl tracking-widest">2026</p>
      </div>

      {/* Binding Holes */}
      <div className="absolute right-3 top-12 flex flex-col h-full justify-between gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full bg-[#4B1F00]"
          />
        ))}
      </div>
    </div>
  );
}

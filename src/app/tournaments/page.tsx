import Link from "next/link";
export default function Tournaments() {
  return (
<main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#1a1200] to-[#062b1d]">

    {/* Yellow Glow */}
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-yellow-400/30 blur-[180px]"></div>

    {/* Green Glow */}
    <div className="absolute top-60 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-green-500/25 blur-[220px]"></div>

    <div className="relative z-20 flex flex-col items-center pt-20 text-center">
        <div className="relative z-20 flex flex-col items-center pt-20 text-center">
  ...
</div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 px-4">
  Upcoming Tournaments
</h1>

<p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white px-6">
  Stay updated with the latest volleyball tournaments organised by
  Honnatty Sports Club.
</p>
    </div>
<div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
<div className="rounded-3xl border border-yellow-400/20 bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-2xl">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="px-4 py-1 rounded-full bg-yellow-400 text-black font-bold">
        REGISTRATION OPEN
      </span>

      <span className="text-gray-300">
        🏐 Volleyball
      </span>
    </div>

    <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 leading-tight">
      Honnatty Open Volleyball Tournament 2026
    </h2>

    <div className="mt-6 space-y-3 text-white text-lg">
      <p>📅 <strong>Date:</strong> 15 and 16 August 2026</p>
      <p>👥 <strong>Teams:</strong> 16 Teams Only</p>
    </div>
<p className="mt-4 rounded-lg bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 text-sm text-yellow-200">
  📌 Registration closes when all 16 slots are filled.
</p>
    <Link
  href="/tournament-details"
  className="mt-8 inline-block px-8 py-3 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
>
  Register Now
</Link>

  </div>

</div>
  </main>
  );
}

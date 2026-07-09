"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Tournaments() {
    const targetDate = new Date("2026-08-05T23:59:00");

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      clearInterval(timer);
      return;
    }

    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);
  return (
<main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#1a1200] to-[#062b1d]">

    {/* Yellow Glow */}
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-yellow-400/30 blur-[180px]"></div>

    {/* Green Glow */}
    <div className="absolute top-60 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-green-500/25 blur-[220px]"></div>

    <div className="relative z-20 flex flex-col items-center pt-0 text-center">
        <div className="relative z-20 flex flex-col items-center pt-0 text-center">
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
    <div className="mt-8 mb-0">
  <p className="text-yellow-400 font-semibold uppercase tracking-widest text-sm">
    ⏳ REGISTRATION CLOSES IN
  </p>

  <div className="mt-4 grid grid-cols-4 gap-2 justify-items-center">

    <div className="bg-white/10 rounded-2xl p-3 w-full">
      <p className="text-4xl font-bold text-yellow-400">
        {timeLeft.days}
      </p>
      <p className="text-xs text-gray-300">Days</p>
    </div>

    <div className="bg-white/10 rounded-2xl p-3 w-full">
      <p className="text-4xl font-bold text-yellow-400">
        {String(timeLeft.hours).padStart(2, "0")}
      </p>
      <p className="text-xs text-gray-300">Hours</p>
    </div>

    <div className="bg-white/10 rounded-2xl p-3 w-full">
      <p className="text-4xl font-bold text-yellow-400">
        {String(timeLeft.minutes).padStart(2, "0")}
      </p>
      <p className="text-xs text-gray-300">Min</p>
    </div>

    <div className="bg-white/10 rounded-2xl p-3 w-full">
      <p className="text-4xl font-bold text-yellow-400">
        {String(timeLeft.seconds).padStart(2, "0")}
      </p>
      <p className="text-xs text-gray-300">Sec</p>
    </div>
    <p className="mt-5 text-center text-sm text-gray-300 col-span-4">
  ⚠️ Only 16 teams accepted.
<br />
Registration closes on 5 August 2026 or when all 16 slots are filled—
<b> whichever comes first.</b>
</p>
  </div>
</div>
<div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
<div className="rounded-3xl shadow-2x1 hover:scale-[1.02] transition-all duration-300 border border-yellow-400/20 bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-2xl">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-bold">
        REGISTRATION OPEN
      </span>

      <span className="text-gray-300">
        
      </span>
    </div>

    <h2 className="text-2xl md:text-5xl font-bold text-yellow-400 leading-tight">
      Honnatty Open Volleyball Tournament 2026
    </h2>

    <div className="mt-6 space-y-3 text-white text-lg">
      <p>📅 15-16 August 2026</p>
      <p>👥 Only 16 teams accepted</p>
    </div>
<p className="mt-4 rounded-lg bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 text-sm text-yellow-200">
  📌 Registration closes when all 16 slots are filled.
</p>
<div className="mt-8 flex flex-col gap-4">
    <Link
  href="/tournament-details"
  className="w-full text-center px-8 py-3 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
>
  Register Now
</Link>
<Link
  href="/check-status"
  className="w-full text-center px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
>
  Check Registration Status
</Link>
<Link
  href="/registered-teams"
  className="w-full text-center px-8 py-3 rounded-xl border border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition"
>
  View Registered Teams
</Link>
</div>
  </div>

</div>
  </main>
  );
}

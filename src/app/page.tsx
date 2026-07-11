"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<div className="min-h-screen text-white bg-gradient-to-br from-[#062d12] via-[#0b5b28] to-[#d8b11c]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.15),transparent_60%)]"></div>
      {/* Navbar */}
<nav className="relative z-50 flex items-center justify-between px-4 py-4 md:px-10">
        <div className="flex items-center gap-2">
          
  <Image
  src="/logo-new.png"
  alt="Honnatty Logo"
  width={35}
  height={35}
  className="md:w-[55px] md:h-[55px]"
 />

  <div>
<h1 className="hidden sm:block text-yellow-400 text-lg md:text-2xl font-extrabold">     HONNATTY 
    </h1>
<p className="hidden sm:block text-yellow-300 text-xs md:text-sm tracking-[0.3em]">     SPORTS CLUB
    </p>
  </div>
</div>

        <ul className="hidden md:flex gap-8 font-medium">
          
          <li className="hover:text-yellow-400 cursor-pointer">
  <a
  href="#"
  onClick={() => setMenuOpen(false)}
  className="hover:text-yellow-400 transition-colors"
>
  Home
</a>
</li>

<li className="hover:text-yellow-400 cursor-pointer">
  <a
  href="#about"
  onClick={() => setMenuOpen(false)}
  className="hover:text-yellow-400 transition-colors"
>
  About
</a>
</li>

<li className="hover:text-yellow-400 cursor-pointer">
  <a
  href="#gallery"
  onClick={() => setMenuOpen(false)}
  className="hover:text-yellow-400 transition-colors"
>
  Gallery
</a>
</li>

<li className="hover:text-yellow-400 cursor-pointer">
  <a
  href="#teams"
  onClick={() => setMenuOpen(false)}
  className="hover:text-yellow-400 transition-colors"
>
  Teams
</a>
</li>

<li className="hover:text-yellow-400 cursor-pointer">
  <a
  href="#contact"
  onClick={() => setMenuOpen(false)}
  className="hover:text-yellow-400 transition-colors"
>
  Contact
</a>
</li>
        </ul>
<button
  className="md:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <Menu
  size={28}
  className="text-yellow-400 cursor-pointer"
/>
</button>
{menuOpen && (
  <div className="absolute top-16 right-4 bg-[#0b3d2e] rounded-1g shadow-lg p-4 flex flex-col gap-4 md:hidden z-50">
    <a href="#">Home</a>
    <a href="#about">About</a>
    <a href="#gallery">Gallery</a>
    <a href="#teams">Teams</a>
    <a href="#contact">Contact</a>
  </div>
)}
      </nav>

      {/* Hero Section */}
<section className="relative z-0 flex flex-col items-center justify-center text-center min-h-[90vh] overflow-hidden"><div className="p-4 rounded-full bg-yellow-400/10 shadow-[0_0_50px_rgba(255,215,0,0.35)]">
 
  <Image
  src="/logo-new.png"
  alt="Background Logo"
  width={900}
  height={900}
  className="absolute left-2 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none"
/>
 <div className="relative mb-6">
  <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-3xl scale-150"></div>

  <Image
    src="/logo-new.png"
    alt="Honnatty Logo"
    width={150}
    height={150}
    className="relative z-10"
  />
</div>
</div>

<h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400">
            Honnatty
        </h1>

        <h2 className="text-5xl md:text-7xl font-extrabold text-yellow-400">
          Sports Club
        </h2>

        <p className="mt-6 text-lg md:text-2xl italic px-4">
          Where Passion Meets Excellence
        </p>

        <p className="mt-4 mb-4 max-w-2xl text-base md:text-xl text-gray-300 px-6">
          Building champions through teamwork, dedication,
          discipline and sportsmanship since generations.
        </p>

        <div className="flex flex-col items-center text-center w-full max-w-sm mx-auto gap-5">

          <Link href="/tournaments" className="w-full">
  <button className="w-full md:w-52 border border-yellow-500 text-white py-4 rounded-xl transition-all duration-300 hover:bg-yellow-500 hover:text-green-900 hover:scale-105">
    Upcoming Tournaments
  </button>
</Link>
  <Link href="#teams" className="w-full">
  <button className="w-full md:w-52 border border-yellow-500 text-white py-4 rounded-xl">
    Our Team
  </button>
</Link>

  <Link href="#gallery" className="w-full">
  <button className="w-full md:w-52 border border-yellow-500 text-white py-4 rounded-xl">
    Gallery
  </button>
</Link>

  
</div>

      </section>
{/* About Section */}

<section
  id="about"
className="-mt-16 bg-gradient-to-b from-[#1b5e20] via-[#d9f0dc] to-white py-32">
    <div className="max-w-6xl mx-auto">

    <h2 className="text-6xl font-extrabold text-center">
      About Honnatty Sports Club
    </h2>
<div className="mt-5 mb-8"></div>
    <p className="text-center text-2xl leading-10 text-gray-700 max-w-3xl mx-auto">
      Honnatty Sports Club is more than just a sports organization.
      We are a family united by passion, discipline, teamwork,
      and the spirit of our village.
    </p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
<div className="bg-yellow-300  rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(234,179,8,0.35)] transition duration-300">
  <div className="text-6xl mb-4">❤️</div>
  <h3 className="text-2xl font-bold text-green-900 mb-3">Family</h3>
  <p className="text-gray-600 leading-7">
    More than a team—we are one big family.
  </p>
</div>

<div className="bg-yellow-300  rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(234,179,8,0.35)] transition duration-300">
  <div className="text-6xl mb-4">🤝</div>
  <h3 className="text-2xl font-bold text-green-900 mb-3">Teamwork</h3>
  <p className="text-gray-600 leading-7">
    Together we play, together we grow, together we win.
  </p>
</div>

<div className="bg-yellow-300  rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(234,179,8,0.35)] transition duration-300">
  <div className="text-6xl mb-4">🛡️</div>
  <h3 className="text-2xl font-bold text-green-900 mb-3">Discipline</h3>
  <p className="text-gray-600 leading-7">
Training with purpose, playing with respect, and learning from every match.  </p>
</div>

<div className="bg-yellow-300 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(234,179,8,0.35)] transition duration-300">
  <div className="text-6xl mb-4">🏆</div>
  <h3 className="text-2xl font-bold text-green-900 mb-3">Excellence</h3>
  <p className="text-gray-600 leading-7">
    Always striving to become better than we were yesterday.
  </p>
</div>
</div>
  </div>
  <div className="h-24 bg-white"></div>
  {/* Teams Section */}
<section
  id="teams"
  className="bg-green-900 text-white py-25 px-8"
>
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-extrabold text-center">
      Our Team
    </h2>

    <div className="w-24 h-1 bg-yellow-400 rounded-full mx-auto mt-5 mb-8"></div>

    <p className="text-center text-green-100 text-xl mb-16">
      The players who proudly represent Honnatty Sports Club.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/captain.jpeg"
    alt="Captain"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
    <h3 className="text-2xl font-bold min-h-[64px] flex items-center justify-center">
        Dharshan
    </h3>
    <p className="text-xl text-gray-700 mt-2 font-bold">
        Captain/Outside Hitter
    </p>
</div>
      </div>

      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/v-captain.jpeg"
    alt="Murali"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
    <h3 className="text-2xl font-bold min-h-[64px] flex items-center justify-center">
        Murali
    </h3>
    <p className="text-xl text-gray-700 mt-2 font-bold">
        V. Captain/Opposite Hitter
    </p>
</div>
      </div>

      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/vishal.jpeg"
    alt="Captain"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
    <h3 className="text-2xl font-bold min-h-[64px] flex items-center justify-center">
        Vishal Vaikunth
    </h3>
    <p className="text-xl text-gray-700 mt-2 font-bold">
        Middle Blocker
    </p>
</div>
      </div>
      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
               <div className="relative h-80">
  <Image
    src="/team/karnan.jpeg"
    alt="Captain"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
    <h3 className="text-2xl font-bold min-h-[64px] flex items-center justify-center">
        Mathan
    </h3>
    <p className="text-xl text-gray-700 mt-2 font-bold">
        Setter/Libero
    </p>
</div>
      </div>
<div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/.jpeg"
    alt="Captain"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
    <h3 className="text-2xl font-bold min-h-[64px] flex items-center justify-center">
        Sathish
    </h3>
    <p className="text-xl text-gray-700 mt-2 font-bold">
        Middle Blocker
    </p>
</div>
      </div>
      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/Rohit.jpeg"
    alt="Captain"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
    <h3 className="text-2xl font-bold min-h-[64px] flex items-center justify-center">
        Rohith
    </h3>
    <p className="text-xl text-gray-700 mt-2 font-bold">
        Outside Hitter
    </p>
</div>
      </div>
      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/shanto.jpeg"
    alt="Captain"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
    <h3 className="text-2xl font-bold min-h-[64px] flex items-center justify-center">
        Santhosh
    </h3>
    <p className="text-xl text-gray-700 mt-2 font-bold">
        Opposite Hitter
    </p>
</div>
     </div>
      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/jenith.jpeg"
    alt="Captain"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
    <h3 className="text-2xl font-bold min-h-[64px] flex items-center justify-center">
        Jenithraj
    </h3>
    <p className="text-xl text-gray-700 mt-2 font-bold">
        Opposite Hitter
    </p>
</div>
      </div>
      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/mowneesh.jpeg"
    alt="Captain"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
    <h3 className="text-2xl font-bold min-h-[64px] flex items-center justify-center">
        Mowneesh
    </h3>
    <p className="text-xl text-gray-700 mt-2 font-bold">
        Middle Blocker
    </p>
</div>
      </div>
      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/hanis.jpeg"
    alt="Captain"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
    <h3 className="text-2xl font-bold min-h-[64px] flex items-center justify-center">
        Hanish
    </h3>
    <p className="text-xl text-gray-700 mt-2 font-bold">
        Captain/Outside Hitter
    </p>
</div>
      </div>
      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/dhodapp.jpeg"
    alt="Captain"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
    <h3 className="text-2xl font-bold min-h-[64px] flex items-center justify-center">
        Shrisai
    </h3>
    <p className="text-xl text-gray-700 mt-2 font-bold">
        Opposite Hitter
    </p>
</div>
      </div>
      
      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/.jpeg"
    alt="coming soon"
    fill
    className="object-cover"
  />
</div>

<div className="p-6 text-center">
          <h3 className="text-2xl font-bold"> Player</h3>
          <p className="text-xl text-gray-700 mt-2 font-bold"> </p>
        </div>
      </div>
      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/.jpeg"
    alt="coming soon"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold"> Player</h3>
          <p className="text-xl text-gray-700 mt-2 font-bold"> </p>
        </div>
      </div>
      <div className="bg-white text-green-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative h-80">
  <Image
    src="/team/.jpeg"
    alt="coming soon"
    fill
    className="object-cover"
  />
</div>

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold">Player</h3>
          <p className="text-xl text-gray-700 mt-2 font-bold"> </p>
        </div>
      </div>
    </div>

  </div>
</section>
</section>
{/* Gallery Section */}
<section
  id="gallery"
  className="bg-gradient-to-b from-green-30 to-white py-24 px-8"
>
  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-extrabold text-center text-green-900">
      Gallery
    </h2>

    <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mt-5 mb-8"></div>

    <p className="text-center text-gray-600 text-xl mb-16">
      Moments that define Honnatty Sports Club.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl h-72 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center">

  <div className="text-6xl mb-4">📸</div>

  <p className="text-green-900 font-semibold">
    Tournament Photo
  </p>

</div>

      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl h-72 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center">

  <div className="text-6xl mb-4">📸</div>

  <p className="text-green-900 font-semibold">
    Tournament Photo
  </p>

</div>

      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl h-72 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center">

  <div className="text-6xl mb-4">📸</div>

  <p className="text-green-900 font-semibold">
    Tournament Photo
  </p>

</div>

    </div>

  </div>
  {/* Footer */}

<footer className="bg-green-950 text-white py-16">
  <div className="max-w-7xl mx-auto px-8">

    <div className="grid md:grid-cols-3 gap-10">

      {/* Club */}
      <div>
        <h3 className="text-3xl font-bold text-yellow-400">
          Honnatty Sports Club
        </h3>

        <p className="mt-4 text-gray-300 leading-8">
          Building champions through teamwork,
          discipline, family, and excellence.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-2xl font-bold mb-4">
          Quick Links
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li>Home</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Gallery</li>
        </ul>
      </div>

      {/* Contact */}
      <div id="contact">
        <h3 className="text-2xl font-bold mb-4">
          Contact
        </h3>

        <p className="text-gray-300 flex items-center gap-2">
  <span>📍</span>
  <span>Honnatty, The Nilgiris</span>
</p>

        <p className="text-gray-300 mt-3 flex items-start gap-2">
  <span>📧</span>
  <span className="break-all">honnattysportsclub@gmail.com</span>
</p>

        <p className="text-gray-300 mt-3 flex items-center gap-2">
  <span>📸</span>
  <a
    href="https://www.instagram.com/honnatty_sports_club"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 underline"
  >
    @honnatty_sports_club
  </a>
</p>

      </div>

    </div>

    <div className="border-t border-green-800 mt-12 pt-8 text-center text-gray-400">
      © 2026 Honnatty Sports Club. All Rights Reserved.
    </div>

  </div>
</footer>
</section>
    </div>
  );
}
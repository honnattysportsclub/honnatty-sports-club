"use client";
import { useState } from "react" ;
import { supabase } from "../lib/supabase";

export default function TournamentDetails() {
    const [teamName, setTeamName] = useState("");
    const [captainName, setCaptainName] = useState("");
const [captainPhone, setCaptainPhone] = useState("");
const [player2, setPlayer2] = useState("");
const [player3, setPlayer3] = useState("");
const [player4, setPlayer4] = useState("");
const [player5, setPlayer5] = useState("");
const [player6, setPlayer6] = useState("");
const [player7, setPlayer7] = useState("");
const [player8, setPlayer8] = useState("");
const [player9, setPlayer9] = useState("");
const [player10, setPlayer10] = useState("");
const [player11, setPlayer11] = useState("");
const [utrNumber, setUtrNumber] = useState("");
const [loading, setLoading] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    async function registerTeam() {
  setLoading(true);

  const { error } = await supabase
    .from("Registerations")
    .insert([
  {
    team_name: teamName,
    captain_name: captainName,
    captain_phone: captainPhone,
    player_2: player2,
    player_3: player3,
    player_4: player4,
    player_5: player5,
    player_6: player6,
    player_7: player7,
    player_8: player8,
    player_9: player9,
    player_10: player10,
    player_11: player11,
    utr_number: utrNumber,
  },
]);
  setLoading(false);

  if (error) {
    alert("Registration failed");
  } else {
    alert("Registration successful!");
    setTeamName("");
  }
}
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a1200] to-[#062b1d] text-white flex items-center justify-center">
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-20">

  <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 text-center">
    Tournament Details
  </h1>

  <p className="mt-4 text-center text-gray-300">
    Everything you need to know before registering.
  </p>

  <div className="mt-12 rounded-3xl bg-white/10 border border-yellow-400/20 backdrop-blur-md p-8">

    <h2 className="text-3xl font-bold text-yellow-400">
      Honnatty Open Volleyball Tournament 2026
    </h2>

    <div className="mt-6 space-y-4 text-white">

      <p>📅 <strong>Date:</strong> 15 & 16 August 2026</p>

      <p>📍 <strong>Venue:</strong> Honnatty Sports Ground</p>

      <p>👥 <strong>Category:</strong> Men's Open</p>


      <p>🏆 <strong>Prizes:</strong> Trophies & Medals</p>

      <p>💰 <strong>Entry Fee:</strong> ₹1,200</p>

    </div>

  </div>
<div className="mt-8 rounded-3xl bg-white/10 border border-yellow-400/20 backdrop-blur-md p-8">

  <h2 className="text-3xl font-bold text-yellow-400 mb-6">
    📜 Tournament Rules
  </h2>

  <ul className="space-y-3 text-white">

    <li>✅ Only players representing the home team are permitted to participate in the tournament. All players must submit a valid Aadhaar card for eligibility verification before playing their first match.</li>

    <li>✅ Matches will be played on a knockout basis.</li>

    <li>✅ Each match will be Best of 3 sets. If required, the deciding set may be played up to 15 points considering the time/light.</li>

    <li>✅ Standard volleyball rules will be followed.</li>

    <li>✅ Teams must report 15 minutes before their scheduled match time.</li>

    <li>✅ The referee's decision will be final and binding.</li>
    
    <li>✅ Any form of misconduct, abusive language, or unsportsmanlike behavior may lead to immediate disqualification.</li>

    <li>✅ The organizers reserve the right to modify the schedule or rules if necessary.</li>

    <li>✅ Smoking, consumption of tobacco, alcohol, and other intoxicating substances is strictly prohibited within the tournament premises. If any player or any person associated with a team is found violating this rule, the entire team will be disqualified from the tournament.</li>
  </ul>

</div>
<div className="mt-8 rounded-3xl bg-white/10 border border-yellow-400/20 backdrop-blur-md p-8">

  <h2 className="text-3xl font-bold text-yellow-400 mb-6">
    📝 Registration
  </h2>

  <div className="space-y-4 text-white">

    <p>🟢 <strong>Status:</strong> Registration Open</p>

    <div className="mb-4">
  <p>
    📞 <strong>Contact:</strong> Dharshan
  </p>

  <p className="ml-23">
    +91 63797 89130
  </p>
</div>
    <div className="flex items-center gap-3">
  <span>💰</span>
  <span>
    <strong>Registration Fee:</strong> ₹300 
  </span>
</div>

  </div>

  

</div>
<section
  id="registration-form"
  className="mt-8 rounded-3xl bg-white/10 border border-yellow-400/20 backdrop-blur-md p-6"
>
  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
    Register Your Team
  </h2>
  <p className="text-green-100 mb-6">
    Fill in the details below to register your team.
  </p>
  <div className="mt-6">
  <label className="block text-green-100 font-medium mb-2">
    Team Name
  </label>

  <input
    type="text"
    placeholder="Enter your team name"
    className="w-full rounded-xl bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
  />
</div>
<div className="mt-6">
  <label className="block text-green-100 font-medium mb-2">
    Village
  </label>

  <input
    type="text"
    placeholder="Enter your village name"
    className="w-full rounded-xl bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
  />
</div>
<div className="mt-6">
  <label className="block text-green-100 font-medium mb-2">
    Captain's Mobile Number
  </label>

  <input
  type="tel"
  placeholder="Enter 10-digit mobile number"
  value={captainPhone}
  onChange={(e) => setCaptainPhone(e.target.value)}
    className="w-full rounded-xl bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
  />
</div>

<div className="mt-10 mb-6 border-t border-yellow-400/20 pt-6">
  <h3 className="text-2xl font-bold text-yellow-400">
    Players
  </h3>

  <p className="text-green-100 mt-2 text-sm">
    Enter the names of the players representing your team.
  </p>
{/* Captain */}
<div className="mb-5">
  <label className="block text-green-100 font-medium mb-2 text-center">
    Captain
  </label>

  <input
  type="text"
  placeholder="Enter captain's name"
  value={captainName}
  onChange={(e) => setCaptainName(e.target.value)}
  className="w-full rounded-xl bg-white text-black px-4 py-3 focus:outline-none"
/>
</div>

{/* Players */}
<div className="grid grid-cols-2 gap-3 mt-5">

  {[2,3,4,5,6,7,8,9,10,11].map((player) => (
    <div key={player}>
      <label className="block text-green-100 font-medium mb-2">
        Player {player}
      </label>

      <input
  type="text"
  placeholder="Enter name"
  value={
    player === 2 ? player2 :
    player === 3 ? player3 :
    player === 4 ? player4 :
    player === 5 ? player5 :
    player === 6 ? player6 :
    player === 7 ? player7 :
    player === 8 ? player8 :
    player === 9 ? player9 :
    player === 10 ? player10 :
    player11
  }
  onChange={(e) => {
    if (player === 2) setPlayer2(e.target.value);
    else if (player === 3) setPlayer3(e.target.value);
    else if (player === 4) setPlayer4(e.target.value);
    else if (player === 5) setPlayer5(e.target.value);
    else if (player === 6) setPlayer6(e.target.value);
    else if (player === 7) setPlayer7(e.target.value);
    else if (player === 8) setPlayer8(e.target.value);
    else if (player === 9) setPlayer9(e.target.value);
    else if (player === 10) setPlayer10(e.target.value);
    else setPlayer11(e.target.value);
  }}
  className="w-full rounded-xl bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
/>
    </div>
  ))}

</div>

 <div className="mt-8 rounded-3xl bg-white/10 border border-yellow-400/20 backdrop-blur-md p-6">
  <h3 className="text-2xl font-bold text-yellow-400">
    ✅ Declaration
  </h3>

  <label className="flex items-start gap-3 mt-5 text-green-100">
    <input
      type="checkbox"
      required
      className="mt-1 h-5 w-5 accent-yellow-400"
    />

    <span>
      I confirm that all the above details are correct. Our team agrees to
      follow the tournament rules and regulations
    </span>
  </label>
</div>

<button
  type="button"
  onClick={() => setShowPayment(true)}
  className="mt-6 w-full rounded-xl bg-yellow-400 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-yellow-300 hover:scale-[1.02] active:scale-95 shadow-lg"
>
  Continue to Payment →
</button>
  

</div>
{showPayment && (
  <section className="mt-8 rounded-3xl bg-white/10 border border-yellow-400/20 backdrop-blur-md p-8">

    <h2 className="text-3xl font-bold text-yellow-400 mb-6">
      💳 Payment
    </h2>

    <p className="text-green-100">
      Registration Fee: <strong>₹500</strong>
    </p>

    <div className="mt-6 bg-white rounded-2xl p-4 text-center">
      <p className="text-black font-semibold">
        Scan to Pay
      </p>

      <div className="h-56 rounded-xl bg-white flex items-center justify-center mt-3 p-3">
  <img
    src="/upi-qr.png"
    alt="UPI QR Code"
    className="w-full h-full object-contain rounded-lg"
  />
</div>
    </div>
    <p className="mt-4 text-center text-green-100">
  Can't scan? Pay using UPI ID
</p>

<p className="mt-2 text-center text-yellow-400 font-semibold text-lg">
  9943115125@ybl
</p>

    <div className="mt-6">
      <label className="block text-green-100 font-medium mb-2">
        UTR Number
      </label>

      <input
  type="text"
  placeholder="Enter 12-digit UTR Number"
  value={utrNumber}
  onChange={(e) => setUtrNumber(e.target.value)}
  className="w-full rounded-xl bg-white text-black px-4 py-3"
 />
    </div>

    <button
    onClick={registerTeam}
      className="mt-8 w-full rounded-xl bg-yellow-400 py-4 text-black font-bold hover:bg-yellow-300 transition"
    >
      Submit Registration
    </button>

  </section>
)}

</section>
<div className="mt-8 rounded-3xl bg-white/10 border border-yellow-400/20 backdrop-blur-md p-8">

  <h2 className="text-3xl font-bold text-yellow-400 mb-6">
    📍 Tournament Venue
  </h2>

  <div className="space-y-4 text-white">

    <p>
      <strong>Venue:</strong> Honnatty Sports Ground
    </p>

    <p>
      Kotagiri, The Nilgiris, Tamil Nadu
    </p>

    <a
      href="https://maps.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
    >
      Open in Google Maps
    </a>

  </div>

</div>
</div>
    </main>
  );
}
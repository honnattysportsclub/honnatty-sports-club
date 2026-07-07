export default function TournamentDetails() {
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

    <p>📞 <strong>Contact:</strong> Dharshan (+91 63797 89130)</p>
    <div className="flex items-center gap-3">
  <span>💰</span>
  <span>
    <strong>Registration Fee:</strong> ₹300 
  </span>
</div>

  </div>

  <a
  href="https://wa.me/916379789130?text=Hello%20Honnatty%20Sports%20Club!%0A%0AI%20would%20like%20to%20register%20my%20team%20for%20the%20Honnatty%20Open%20Volleyball%20Tournament%202026.%0A%0ATeam%20Name:%0ACaptain%20Name:%0AMobile%20Number:%0ANumber%20of%20Players:"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-block px-8 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition text-white font-bold"
>
  Register via WhatsApp
</a>

</div>
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
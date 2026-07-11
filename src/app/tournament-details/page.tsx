"use client";
import {useRouter} from "next/navigation";
import { useEffect, useState } from "react" ;
import { supabase } from "../lib/supabase";

export default function TournamentDetails() {
    const [teamName, setTeamName] = useState("");
    const [village, setVillage] = useState("");
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
    const [registeredCount, setRegisteredCount] = useState(0);
    const router = useRouter();
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");
const [registrationComplete, setRegistrationComplete] = useState(false);
const [showTopButton, setShowTopButton] = useState(false);
const [agreed, setAgreed] = useState(false);
const copyUpiId = async () => {
  try {
    await navigator.clipboard.writeText("9943115125@ybl");
    alert("✅ UPI ID copied!");
  } catch {
    alert("Unable to copy. Please copy the UPI ID manually.");
  }
};
    useEffect(() => {
  async function fetchRegisteredCount() {
    const { count } = await supabase
      .from("Registerations")
      .select("*", { count: "exact", head: true });

    setRegisteredCount(count || 0);
  }

  fetchRegisteredCount();
}, []);
useEffect(() => {
  if (successMessage || errorMessage) {
    const timer = setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }
  
}, [successMessage, errorMessage]);
useEffect(() => {
  const handleScroll = () => {
    setShowTopButton(window.scrollY > 400);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
    async function registerTeam() {
 if (
  !teamName.trim() ||
  !village.trim() ||
  !captainName.trim() ||
  !captainPhone.trim() ||
  !utrNumber.trim()
) {
  setErrorMessage("⚠️ Team Name, Village, Captain Name, Captain Phone and Transaction id/UTR Number are mandatory.");
setSuccessMessage("");
  return;
}
if (!/^\d{10}$/.test(captainPhone)) {
  setErrorMessage("📱 Captain Phone Number must be exactly 10 digits.");
setSuccessMessage("");
  return;
}
if (!/^\d{12}$/.test(utrNumber)) {
  setErrorMessage("💳 UTR Number must be exactly 12 digits.");
setSuccessMessage("");
  return;
}
const { data: existingTeam } = await supabase
  .from("Registerations")
  .select("id")
  .eq("captain_phone", captainPhone)
  .maybeSingle();

if (existingTeam) {
  setErrorMessage(
    "⚠️ Registration already exists.\n\nPlease use the Check Registration Status page to view your application."
  );
  setSuccessMessage("");
  return;
}
  setLoading(true);
const { count } = await supabase
  .from("Registerations")
  .select("*", { count: "exact", head: true });

if ((count ?? 0) >= 14) {
  setErrorMessage("🚫 Registration is full. No more teams can register.");
setSuccessMessage("");
setLoading(false);
return;
}
  const { error } = await supabase
    .from("Registerations")
    .insert([
  {
    team_name: teamName,
    village: village,
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
    status: "Pending"
  },
]);
  setLoading(false);

  if (error) {
    setErrorMessage("❌ Registration failed. Please try again.");
setSuccessMessage("");
  } else {
  setRegisteredCount((prev) => prev + 1);
  setSuccessMessage(
  "🎉 Registration submitted successfully!\n\n" +
  "Your registration has been received.\n\n" +
  "Your payment is now under verification by the tournament organizers.\n\n" +
  "Once approved, your team will automatically appear on the Registered Teams page.\n\n" +
  "You can also check your registration anytime using the Check Registration Status page."
);
console.log("SUCCESS SCREEN");
setRegistrationComplete(true);
setErrorMessage("");
  setTeamName("");
  setVillage("");
setCaptainName("");
setCaptainPhone("");
setPlayer2("");
setPlayer3("");
setPlayer4("");
setPlayer5("");
setPlayer6("");
setPlayer7("");
setPlayer8("");
setPlayer9("");
setPlayer10("");
setPlayer11("");
setUtrNumber("");
}
}
if (registrationComplete) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a1200] to-[#062b1d] text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white/10 border border-green-500 rounded-2xl p-8 text-center">

        <div className="text-6xl mb-4">🎉</div>

        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Registration Submitted!
        </h1>

        <p>Your registration has been received successfully.</p>

        <p className="mt-4 text-yellow-300 font-semibold">
          ⏳ Payment Verification Under Process
        </p>

        <p className="mt-4 text-gray-300">
          Once approved, your team will automatically appear on the Registered Teams page.
        </p>

        <p className="mt-6 text-green-300 font-semibold">
          🏐 See you on 15–16 August 2026!
        </p>
<button
  onClick={() => router.push("/check-status")}
  className="mt-6 w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition"
>
  Check Registration Status
</button>
      </div>
    </main>
  );
}
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a1200] to-[#062b1d] text-white flex items-center justify-center">
      {successMessage && (
  <div className="whitespace-pre-line">
    {successMessage}
  </div>
)}

{errorMessage && (
  <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md rounded-xl bg-red-100 border border-red-500 p-4 text-red-800 shadow-xl">
    {errorMessage}
  </div>
)}
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-20">

  <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 text-center">
    Tournament Details
  </h1>

  <p className="mt-4 text-center text-gray-300">
    Everything you need to know before registering.
  </p>

  <div className="mt-12 rounded-3xl bg-white/10 border border-yellow-400/20 backdrop-blur-md p-8">

    <h2 className="text-3xl font-bold text-yellow-400">
      Honnatty District-Level Volleyball Tournament 2026
    </h2>

    <div className="mt-6 space-y-4 text-white">

      <p>📅 <strong>Date:</strong> 15 & 16 August 2026</p>

      <p>📍 <strong>Venue:</strong> Honnatty Sports Arena</p>

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
    📝 Queries
  </h2>

  <div className="space-y-4 text-white">

  

    <div className="mb-4">
  <p>
    📞 <strong>Contact:</strong> Dharshan
  </p>

  <p className="ml-23">
    +91 63797 89130
  </p>
  <p>
    📞 <strong>Contact:</strong> Murali
  </p>

  <p className="ml-23">
    +91 96269 87007 or 83449 93409
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
  <div className="mt-4 mb-5 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-center">
  


  <p className="mt-2 text-yellow-300 font-semibold text-lg">
    {registeredCount} / 14 Teams Registered
  </p>

  <p className="mt-1 text-sm text-gray-300">
    {registeredCount >= 14 ? (
  <span className="text-red-400 font-bold">
    🔴 Registrations Closed
  </span>
) : registeredCount === 13 ? (
  <span className="text-red-300 font-semibold">
    ⚠️ Only 1 Slot Available!
  </span>
) : (
  <span>
    🎯 {14 - registeredCount} Slots Available
  </span>
)}
  </p>
</div>
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
  value={teamName}
  onChange={(e) => setTeamName(e.target.value)}
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
  value={village}
  onChange={(e) => setVillage(e.target.value)}
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
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
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
      Registration Fee: <strong>₹300</strong>
    </p>


<a
  href="upi://pay?pa=9943115125@ybl&pn=Honnatty%20Sports%20Club&am=300&cu=INR"
  className="mt-4 block w-full rounded-xl bg-yellow-400 py-3 text-center font-bold text-black hover:bg-yellow-300 transition"
>
  💳 Pay ₹300 via UPI
</a>

<p className="mt-2 text-center text-sm text-gray-300">
  Tap to open PhonePe, Google Pay, Paytm or any UPI app.
</p>

<p className="text-center text-xs text-yellow-300">
  ₹300 will be pre-filled automatically.
</p>

<div className="mt-5 rounded-xl border border-yellow-400/20 bg-white/5 p-5 text-center">

  <p className="text-sm text-gray-300">
    Having trouble opening your UPI app?
  </p>

  <p className="mt-2 text-sm text-gray-300">
    Use either the UPI ID or the mobile number below.
  </p>

  {/* UPI ID */}
  <div className="mt-5">
    <p className="text-xs uppercase tracking-wide text-gray-400">
      UPI ID
    </p>

    <p className="mt-2 text-2xl font-extrabold text-yellow-400 break-all">
      9943115125@ybl
    </p>

    <button
      type="button"
      onClick={copyUpiId}
      className="mt-3 rounded-lg bg-yellow-400 px-2 py-1 font-bold text-black hover:bg-yellow-300 transition"
    >
      📋 Copy UPI ID
    </button>
  </div>

  {/* Mobile Number */}
  <div className="mt-8 border-t border-yellow-400/20 pt-6">
    <p className="text-xs uppercase tracking-wide text-gray-400">
      Mobile Number
    </p>

    <p className="mt-2 text-3xl font-extrabold text-yellow-400">
      9943115125
    </p>

    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText("9943115125");
        alert("✅ Mobile number copied!");
      }}
      className="mt-3 rounded-lg bg-yellow-400 px-2 py-1 font-bold text-black hover:bg-yellow-300 transition"
    >
      📋 Copy Mobile Number
    </button>
  </div>

</div>

    <div className="mt-6">
      <label className="block text-green-100 font-medium mb-2">
        UTR Number/Transaction ID
      </label>

      <input
  type="text"
  placeholder="Enter 12-digit UTR Number/Transaction ID"
  value={utrNumber}
  onChange={(e) => setUtrNumber(e.target.value)}
  className="w-full rounded-xl bg-white text-black px-4 py-3"
 />
    </div>

    <button
  onClick={registerTeam}
  disabled={registeredCount >= 14 || !/^\d{12}$/.test(utrNumber)}
  className={`mt-8 w-full rounded-xl py-4 font-bold transition ${
    registeredCount >= 14
  ? "bg-red-600 text-white cursor-not-allowed"
  : /^\d{12}$/.test(utrNumber)
    ? "bg-yellow-400 text-black hover:bg-yellow-300"
    : "bg-gray-500 text-gray-300 cursor-not-allowed"
  }`}
>
  {registeredCount >= 14
  ? "Registrations Closed"
  : "Submit Registration"}
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
      href="https://maps.app.goo.gl/MqBarqzbHHbERp9K7?g_st=ic"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-6 py-3 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
    >
      Open in Google Maps
    </a>

  </div>

</div>
</div>
{showTopButton && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-yellow-400 text-black text-2xl font-bold shadow-lg hover:bg-yellow-300 transition"
    title="Back to Top"
  >
    ↑
  </button>
)}
    </main>
  );
}
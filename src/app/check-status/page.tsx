"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function CheckStatusPage() {
    const [phone, setPhone] = useState("");
const [team, setTeam] = useState<any | null>(null);
const [message, setMessage] = useState("");
async function checkStatus() {
  const { data, error } = await supabase
    .from("Registerations")
    .select("*")
    .eq("captain_phone", phone)
    .single();

  if (error || !data) {
    setMessage("No registration was found for this mobile number. Please check the number and try again.");
    setTeam(null);
    return;
  }

  setTeam(data);

  if (data.status === "Pending") {
    setMessage("⏳ Registration submitted successfully. Your payment is under verification. Once approved, your team will automatically appear on the Registered Teams page. Please check back later");
  } else if (data.status === "Approved") {
    setMessage("Congratulations! Your registration has been approved. Your team is officially registered for the Honnatty Volleyball Tournament. See you on 15 August 2026 at Honnatty Sports Arena. Best of luck!");
  } else {
    setMessage("❌ Your registration could not be approved. Please contact the organizers if you believe this is an error.");
  }
}
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a1200] to-[#062b1d] text-white p-8">
      <div className="max-w-md mx-auto">
      
        <h1 className="text-3xl font-bold text-yellow-400 text-center mb-8">
          Check Registration Status
        </h1>
       <input
  type="tel"
  placeholder="Enter Captain Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full p-4 rounded-xl bg-white/10 border border-yellow-400 text-white placeholder-gray-400 mb-4"
/>

<button
  onClick={checkStatus}
  className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition"
>
  Check Status
</button>
{message && (
  <div className="mt-6 bg-white/10 border border-yellow-400 rounded-xl p-4">
    <p className="font-bold text-lg">{message}</p>

    {team && (
      <>
        <p className="mt-3">
          <strong>Team:</strong> {team.team_name}
        </p>
        <p>
          <strong>Village:</strong> {team.village}
        </p>
        <p>
          <strong>Captain:</strong> {team.captain_name}
        </p>
      </>
    )}
  </div>
)}
      </div>
    </main>
  );
}
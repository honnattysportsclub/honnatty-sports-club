"use client";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
export default function AdminPage() {
  const [teams, setTeams] = useState<any[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<any | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  fetchTeams();
}, []);

async function fetchTeams() {
  const { data, error } = await supabase
    .from("Registerations")
    .select("*")
    .order("created_at", { ascending: true });

  console.log("Data:", data);
  data?.forEach(team => console.log("Fetched ID:", JSON.stringify(team.id)));
  console.log("Error:", error);

  setTeams(data || []);
}
async function deleteTeam(id: string) {
  const confirmDelete = confirm("Delete this team?");

  if (!confirmDelete) return;

  const { error } = await supabase
    .from("Registerations")
    .delete()
    .eq("id", id);

  if (!error) {
    fetchTeams();
  }
}
async function updateStatus(id: string, status: string) {
  const { data, error } = await supabase
    .from("Registerations")
    .update({ status: status })
    .eq("id", id)
    .select();

  console.log("ID:", id);
  console.log("Status:", status);
  console.log("Data:", data);
  console.log("Error:", error);

 
  fetchTeams();
}

  return (
    
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a1200] to-[#062b1d] text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-yellow-400 text-center mb-8">
          Admin Dashboard
        </h1>

        <div className="space-y-3">
  {teams.map((team, index) => (
    <div  
  key={team.id}
  className="bg-white/10 rounded-xl p-4 border border-red-500 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
>
  <div>
    <strong>{index + 1}.</strong>{" "}
 {team.team_name} - {team.village} - {team.captain_name}
<p className="text-yellow-400">
  Status: {team.status}
</p>
  </div>

  <div className="flex flex-wrap gap-2">
    <button
  onClick={() => {
  setSelectedTeam(team);

  setTimeout(() => {
    detailsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
}}
  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg w-full sm:w-auto"
>
  View
</button>
  <button
  onClick={() => updateStatus(team.id, "Approved")}
  disabled={team.status !== "Pending"}
  className={`bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg w-full sm:w-auto ${
    team.status !== "Pending"
      ? "bg-gray-600 cursor-not-allowed"
      : "bg-green-600 hover:bg-green-700"
  }`}
>
  {team.status === "Pending"
  ? "Approve"
  : team.status === "Approved"
  ? "Approved ✓"
  : "Rejected ✗"}
</button>

  {team.status === "Pending" && (
  <button
  onClick={() => updateStatus(team.id, "Rejected")}
  disabled={team.status === "Rejected"}
  className={`bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg w-full sm:w-auto ${
    team.status === "Rejected"
      ? "bg-gray-600 cursor-not-allowed"
      : "bg-red-600 hover:bg-red-700"
  }`}
>
  {team.status === "Rejected" ? "Rejected ✗" : "Reject"}
</button>
)}
</div>
</div>

  ))}
</div>

    
      {selectedTeam && (
  <div
  ref={detailsRef}
  className="mt-8 bg-white/10 border border-yellow-400 rounded-xl p-6"
>
    <h2 className="text-2xl font-bold text-yellow-400 mb-4">
      Team Details
    </h2>

    <p><strong>Team:</strong> {selectedTeam.team_name}</p>
    <p><strong>Village:</strong> {selectedTeam.village}</p>
    <p><strong>Captain:</strong> {selectedTeam.captain_name}</p>
    <p><strong>Phone:</strong> {selectedTeam.captain_phone}</p>
    <p><strong>Player 2:</strong> {selectedTeam.player_2}</p>
<p><strong>Player 3:</strong> {selectedTeam.player_3}</p>
<p><strong>Player 4:</strong> {selectedTeam.player_4}</p>
<p><strong>Player 5:</strong> {selectedTeam.player_5}</p>
<p><strong>Player 6:</strong> {selectedTeam.player_6}</p>
<p><strong>Player 7:</strong> {selectedTeam.player_7}</p>
<p><strong>Player 8:</strong> {selectedTeam.player_8}</p>
<p><strong>Player 9:</strong> {selectedTeam.player_9}</p>
<p><strong>Player 10:</strong> {selectedTeam.player_10}</p>
<p><strong>Player 11:</strong> {selectedTeam.player_11}</p>
    <p><strong>UTR:</strong> {selectedTeam.utr_number}</p>
    <p><strong>Status:</strong> {selectedTeam.status}</p>
  </div>
)}
</div>
<button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full w-12 h-12 shadow-lg"
>
  ⬆
</button>
    </main>
  );
}
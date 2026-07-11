"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function RegisteredTeams() {
  const [teams, setTeams] = useState<any[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);

  useEffect(() => {
    fetchTeams();
  }, []);

  async function fetchTeams() {
    const { data, error } = await supabase
  .from("Registerations")
  .select("*")
  .eq("status", "Approved")
  .order("created_at", { ascending: true });

   console.log(data, error);

if (!error) {
  setTeams(data || []);
}
  }
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a1200] to-[#062b1d] text-white p-8">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-yellow-400 mb-8 text-center">
          Registered Teams
        </h1>

        <p className="text-center text-green-200 mb-8">
          {teams.length} / 14 Teams Registered
        </p>

        <div className="space-y-4">

          <div className="bg-yellow-400 text-black rounded-xl p-4 font-bold">
            ⭐ Honnatty Sports Club (HOST)
          </div>

          {teams.map((team, index) => (
            <div
  key={team.id}
  onClick={() =>
    setSelectedTeam(selectedTeam === team.id ? null : team.id)
  }
  className="bg-white/10 rounded-xl p-4 border border-green-700 cursor-pointer transition hover:bg-white/20"
>
              <div className="flex justify-between items-center">
  <span className="font-bold text-lg">
    {index + 1}. {team.team_name}
  </span>

  <span className="text-sm text-yellow-300">
    {selectedTeam === team.id ? "▲ Hide Players" : "▼ View Players"}
  </span>
</div>
{team.village && ` - ${team.village}`}
{team.captain_name && ` - ${team.captain_name}`}
{selectedTeam === team.id && (
  <div className="mt-4 border-t border-green-700 pt-4 space-y-2 text-sm text-green-100">

    <p><strong>Player 1 (Captain):</strong> {team.captain_name}</p>
    <p><strong>Player 2:</strong> {team.player_2 || "-"}</p>
    <p><strong>Player 3:</strong> {team.player_3 || "-"}</p>
    <p><strong>Player 4:</strong> {team.player_4 || "-"}</p>
    <p><strong>Player 5:</strong> {team.player_5 || "-"}</p>
    <p><strong>Player 6:</strong> {team.player_6 || "-"}</p>
    <p><strong>Player 7:</strong> {team.player_7 || "-"}</p>
    <p><strong>Player 8:</strong> {team.player_8 || "-"}</p>
    <p><strong>Player 9:</strong> {team.player_9 || "-"}</p>
    <p><strong>Player 10:</strong> {team.player_10 || "-"}</p>
    <p><strong>Player 11:</strong> {team.player_11 || "-"}</p>

  </div>
)}
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
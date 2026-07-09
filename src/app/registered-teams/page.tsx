"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function RegisteredTeams() {
  const [teams, setTeams] = useState<any[]>([]);

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
              className="bg-white/10 rounded-xl p-4 border border-green-700"
            >
              {index + 1}. {team.team_name}
{team.village && ` - ${team.village}`}
{team.captain_name && ` - ${team.captain_name}`}
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
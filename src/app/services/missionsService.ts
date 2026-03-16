import { supabase } from "../lib/supabaseClient"

export type MissionStatus = "pending" | "accepted" | "enroute" | "arrived" | "in_progress" | "completed" | "rejected"

export type Mission = {
  id: string
  rescue_team_id: string
  sos_report_id: string
  status: MissionStatus
  created_at: string
}

export async function fetchMissionsForRescueTeam(rescueTeamId: string) {
  const { data, error } = await supabase
    .from("missions")
    .select("*")
    .eq("rescue_team_id", rescueTeamId)
    .order("created_at", { ascending: false })

  if (error) {
    throw error
  }

  return data as Mission[]
}

export async function updateMissionStatus(id: string, status: MissionStatus) {
  const { data, error } = await supabase
    .from("missions")
    .update({ status })
    .eq("id", id)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data as Mission
}


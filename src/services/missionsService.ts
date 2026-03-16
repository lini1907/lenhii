import { supabase } from "./supabaseClient"

export type MissionStatus = "assigned" | "in_progress" | "completed"

export type Mission = {
  id: string
  sos_id: string
  rescue_team_id: string
  status: MissionStatus
  assigned_at: string
  completed_at: string | null
}

export async function getMissions() {
  const { data, error } = await supabase
    .from("missions")
    .select("*")
    .order("assigned_at", { ascending: false })

  if (error) throw error
  return (data ?? []) as Mission[]
}

export async function updateMissionStatus(missionId: string, status: MissionStatus) {
  const patch: Partial<Mission> =
    status === "completed" ? { status, completed_at: new Date().toISOString() } : { status, completed_at: null }

  const { data, error } = await supabase
    .from("missions")
    .update(patch)
    .eq("id", missionId)
    .select("*")
    .single()

  if (error) throw error
  return data as Mission
}


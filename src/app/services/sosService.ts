import { supabase } from "../lib/supabaseClient"

export type SOSReport = {
  id: string
  citizen_id: string
  category: string
  description: string
  victims_count: number | null
  location_type: "auto" | "manual"
  location_coordinates: string | null
  status: "pending" | "assigned" | "in_progress" | "completed" | "rejected"
  created_at: string
}

export async function createSOSReport(payload: Omit<SOSReport, "id" | "status" | "created_at">) {
  const { data, error } = await supabase
    .from("sos_reports")
    .insert({
      ...payload,
      status: "pending",
    })
    .select()
    .single()

  if (error) {
    throw error
  }

  return data as SOSReport
}

export async function fetchCitizenSOSReports(citizenId: string) {
  const { data, error } = await supabase
    .from("sos_reports")
    .select("*")
    .eq("citizen_id", citizenId)
    .order("created_at", { ascending: false })

  if (error) {
    throw error
  }

  return data as SOSReport[]
}


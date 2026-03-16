import { supabase } from "./supabaseClient"

export type SOSStatus = "pending" | "assigned" | "resolved"

export type SOSReport = {
  id: string
  citizen_id: string
  description: string
  location: string
  status: SOSStatus
  created_at: string
}

export async function createSOS(input: Pick<SOSReport, "description" | "location">) {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    throw new Error("Not authenticated")
  }

  const { data, error } = await supabase
    .from("sos_reports")
    .insert({
      citizen_id: user.id,
      description: input.description,
      location: input.location,
      status: "pending",
    })
    .select("*")
    .single()

  if (error) throw error
  return data as SOSReport
}

export async function getSOSReports() {
  const { data, error } = await supabase
    .from("sos_reports")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) throw error
  return (data ?? []) as SOSReport[]
}

export async function getMySOSReports() {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    throw new Error("Not authenticated")
  }

  const { data, error } = await supabase
    .from("sos_reports")
    .select("*")
    .eq("citizen_id", user.id)
    .order("created_at", { ascending: false })

  if (error) throw error
  return (data ?? []) as SOSReport[]
}


import { supabase } from "../lib/supabaseClient"

export type Alert = {
  id: string
  title: string
  description: string
  severity: "low" | "medium" | "high" | "critical"
  location: string
  created_at: string
}

export async function fetchAlerts() {
  const { data, error } = await supabase
    .from("alerts")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    throw error
  }

  return data as Alert[]
}

export async function fetchAlertById(id: string) {
  const { data, error } = await supabase.from("alerts").select("*").eq("id", id).single()

  if (error) {
    throw error
  }

  return data as Alert
}

export async function createAlert(payload: Omit<Alert, "id" | "created_at">) {
  const { data, error } = await supabase.from("alerts").insert(payload).select().single()

  if (error) {
    throw error
  }

  return data as Alert
}


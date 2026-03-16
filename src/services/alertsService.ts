import { supabase } from "./supabaseClient"

export type Alert = {
  id: string
  title: string
  description: string
  disaster_type: string
  severity: string
  location: string
  created_by: string
  created_at: string
}

export async function getAlerts() {
  const { data, error } = await supabase
    .from("alerts")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) throw error
  return (data ?? []) as Alert[]
}

export async function createAlert(input: Omit<Alert, "id" | "created_at" | "created_by">) {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    throw new Error("Not authenticated")
  }

  const { data, error } = await supabase
    .from("alerts")
    .insert({
      ...input,
      created_by: user.id,
    })
    .select("*")
    .single()

  if (error) throw error
  return data as Alert
}


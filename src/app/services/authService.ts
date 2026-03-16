import { supabase } from "../lib/supabaseClient"

export type UserRole = "citizen" | "coordinator" | "rescue" | "admin"

export type Profile = {
  id: string
  name: string | null
  role: UserRole
  phone: string | null
  created_at: string
}

export async function signInWithEmail({
  email,
  password,
  expectedRole,
}: {
  email: string
  password: string
  expectedRole: UserRole
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw error
  }

  const user = data.user
  if (!user) {
    throw new Error("No user returned from Supabase")
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single()

  if (profileError || !profile) {
    throw new Error("User profile not found")
  }

  if (profile.role !== expectedRole) {
    throw new Error("You do not have permission to access this portal")
  }

  localStorage.setItem("userRole", profile.role)
  localStorage.setItem("userId", user.id)

  return { user, profile: profile as Profile }
}

export async function getCurrentUserWithProfile() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    return null
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single()

  if (profileError || !profile) {
    return null
  }

  return { user, profile: profile as Profile }
}

export async function signOut() {
  await supabase.auth.signOut()
  localStorage.removeItem("citizenAuthenticated")
  localStorage.removeItem("userRole")
  localStorage.removeItem("userId")
}


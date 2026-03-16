import { Outlet, Link, useLocation, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { Settings, Users, Activity, BarChart, LogOut, LayoutDashboard } from "lucide-react"
import { getCurrentUserWithProfile, signOut } from "../services/authService"

export function AdminLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(() => {
    getCurrentUserWithProfile().then((result) => {
      if (!result || result.profile.role !== "admin") {
        navigate("/auth/admin/login", { replace: true })
      } else {
        setCheckingAuth(false)
      }
    })
  }, [navigate])

  if (checkingAuth) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <span className="text-slate-500 text-sm">Checking access…</span>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-900">
      <aside className="w-64 bg-slate-900 text-slate-300 hidden md:flex flex-col">
        <div className="flex items-center h-16 px-4 bg-slate-950 border-b border-slate-800">
          <Link to="/admin" className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">System Admin</span>
          </Link>
        </div>

        <nav className="p-4 space-y-1 flex-1">
          <Link to="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-purple-600/10 text-purple-400">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white">
            <Users className="w-5 h-5" />
            User Management
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white">
            <Activity className="w-5 h-5" />
            System Analytics
          </Link>
        </nav>
        
        <div className="p-4 border-t border-slate-800">
          <Link to="/coordinator" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 mb-2">
            Return to Ops
          </Link>
          <button
            type="button"
            onClick={() => {
              signOut().finally(() => navigate("/auth/admin/login", { replace: true }))
            }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-900/30 w-full text-left"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
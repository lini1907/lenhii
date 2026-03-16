import { Outlet, Link, useLocation, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { ShieldAlert, Navigation, BriefcaseMedical, User, LogOut, CheckCircle2, LayoutDashboard, Map, Bell } from "lucide-react"
import { getCurrentUserWithProfile, signOut } from "../services/authService"

export function RescueLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(() => {
    getCurrentUserWithProfile().then((result) => {
      if (!result || result.profile.role !== "rescue") {
        navigate("/auth/rescue/login", { replace: true })
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
    <div className="min-h-screen bg-slate-50 flex text-slate-900 overflow-hidden">
      {/* Left Sidebar (Desktop) */}
      <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col hidden md:flex shrink-0 h-screen sticky top-0">
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 h-16 shrink-0">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center shadow-sm">
            <BriefcaseMedical className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">Rescue Alpha</span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2 px-3">
          <Link 
            to="/rescue" 
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${location.pathname === "/rescue" ? "bg-red-600/10 text-red-500" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link 
            to="/rescue/missions" 
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${location.pathname.includes("/rescue/missions") ? "bg-red-600/10 text-red-500" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}
          >
            <ShieldAlert className="w-5 h-5" />
            Active Missions
          </Link>
          <Link 
            to="/rescue/notifications" 
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors font-medium ${location.pathname === "/rescue/notifications" ? "bg-red-600/10 text-red-500" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}
          >
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5" />
              Alerts
            </div>
            <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">3</span>
          </Link>
        </div>

        <div className="p-4 border-t border-slate-800">
          <button
            type="button"
            onClick={() => {
              signOut().finally(() => navigate("/auth/rescue/login", { replace: true }))
            }}
            className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800 font-medium w-full text-left"
          >
            <LogOut className="w-5 h-5" />
            Off Duty
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-6 h-16 flex items-center justify-between shrink-0 shadow-sm z-10">
          <div className="flex items-center gap-3 md:hidden">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center shadow-sm">
              <BriefcaseMedical className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">Rescue Alpha</span>
          </div>
          
          <div className="hidden md:flex items-center text-slate-500 font-medium text-sm">
            Mission Command Center
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">ON DUTY</span>
            </div>
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
              <User className="w-4 h-4 text-slate-600" />
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto w-full pb-20 md:pb-6 bg-slate-50">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation (Hidden on Desktop) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-3 pb-safe z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <Link to="/rescue" className={`flex flex-col items-center gap-1 ${location.pathname === "/rescue" ? "text-red-600" : "text-slate-500"}`}>
          <LayoutDashboard className="w-6 h-6" />
          <span className="text-[10px] font-bold">Dash</span>
        </Link>
        <Link to="/rescue/missions" className={`flex flex-col items-center gap-1 ${location.pathname.includes("/rescue/missions") ? "text-red-600" : "text-slate-500"}`}>
          <BriefcaseMedical className="w-6 h-6" />
          <span className="text-[10px] font-bold">Missions</span>
        </Link>
        <button
          type="button"
          onClick={() => {
            signOut().finally(() => navigate("/auth/rescue/login", { replace: true }))
          }}
          className="flex flex-col items-center gap-1 text-slate-500"
        >
          <LogOut className="w-6 h-6" />
          <span className="text-[10px] font-bold">Off Duty</span>
        </button>
      </nav>
    </div>
  )
}
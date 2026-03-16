import { Outlet, Link, useLocation, useNavigate } from "react-router"
import { ShieldAlert, Users, Map, Bell, AlertTriangle, Settings, LogOut, FileText, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import { getCurrentUserWithProfile, signOut } from "../services/authService"

export function CoordinatorLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(() => {
    getCurrentUserWithProfile().then((result) => {
      if (!result || result.profile.role !== "coordinator") {
        navigate("/auth/coordinator/login", { replace: true })
      } else {
        setCheckingAuth(false)
      }
    })
  }, [navigate])
  
  const navItems = [
    { name: "Incident Queue", path: "/coordinator/incidents", icon: FileText },
    { name: "Rescue Assignment", path: "/coordinator/assign", icon: Users },
    { name: "Live Map", path: "/coordinator/map", icon: Map },
    { name: "Warning System", path: "/coordinator/warnings", icon: AlertTriangle },
  ]

  if (checkingAuth) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <span className="text-slate-500 text-sm">Checking access…</span>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-900">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between h-16 px-4 bg-slate-950">
          <Link to="/coordinator" className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">Coordination</span>
          </Link>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 mt-4">Operations</div>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname.startsWith(item.path)
                  ? "bg-red-600/10 text-red-500"
                  : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
          
          <div className="border-t border-slate-800 my-6"></div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">System</div>
          
          <Link to="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
            <Settings className="w-5 h-5" />
            Admin Panel
          </Link>
          
          <button
            type="button"
            onClick={() => {
              signOut().finally(() => navigate("/auth/coordinator/login", { replace: true }))
            }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-red-900/50 hover:text-red-400 mt-auto absolute bottom-4 w-[calc(100%-2rem)] text-left"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 z-10">
          <div className="flex items-center">
            <button className="md:hidden mr-4 text-slate-500 hover:text-slate-900" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-slate-900 capitalize tracking-tight hidden sm:block">
              {location.pathname.split('/').pop()?.replace('-', ' ')}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex border-red-200 text-red-700 bg-red-50 hover:bg-red-100 font-semibold">
              <AlertTriangle className="w-4 h-4 mr-2" /> 3 Severe Alerts
            </Button>
            <button className="relative p-2 text-slate-500 hover:text-slate-900 bg-slate-100 rounded-full">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-slate-100"></span>
            </button>
            <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
              CO
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-50/50">
          <Outlet />
        </main>
      </div>
      
      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
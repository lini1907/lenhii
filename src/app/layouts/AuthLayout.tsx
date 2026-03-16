import { Outlet } from "react-router"
import { ShieldAlert } from "lucide-react"

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20">
          <ShieldAlert className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight mt-4">Disaster SOS & Rescue</h1>
        <p className="text-slate-500 max-w-sm">Official government platform for emergency coordination and rescue missions.</p>
      </div>
      <div className="w-full max-w-md">
        <Outlet />
      </div>
      <div className="mt-8 text-sm text-slate-400">
        &copy; {new Date().getFullYear()} Official Emergency Services. Secure portal.
      </div>
    </div>
  )
}
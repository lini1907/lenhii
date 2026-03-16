import { Link } from "react-router"
import { ShieldAlert, Home, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "../../components/ui/card"

export function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Error Icon */}
      <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center">
        <ShieldAlert className="w-16 h-16 text-red-500" />
      </div>

      {/* Error Message */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-white">403</h1>
        <h2 className="text-2xl font-bold text-white">Access Denied</h2>
        <p className="text-slate-400 max-w-md">
          You don't have permission to access this page. Please contact your administrator if you believe this is an error.
        </p>
      </div>

      {/* Info Card */}
      <Card className="w-full max-w-md bg-slate-800 border-0">
        <CardContent className="p-6">
          <h3 className="font-semibold text-white mb-3">Why am I seeing this?</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">•</span>
              <span>This page requires a specific role or permission level</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">•</span>
              <span>Your account may not have the necessary access rights</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">•</span>
              <span>You may need to log in with a different account</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="w-full max-w-md space-y-3 pt-4">
        <Link to="/" className="block">
          <button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30">
            <Home className="w-5 h-5" />
            Go to Home
          </button>
        </Link>
        
        <button 
          onClick={() => window.history.back()}
          className="w-full h-12 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back
        </button>
      </div>
    </div>
  )
}

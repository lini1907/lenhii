import { Link } from "react-router"
import { SearchX, Home, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "../../components/ui/card"

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Error Icon */}
      <div className="w-24 h-24 rounded-full bg-slate-700/50 flex items-center justify-center">
        <SearchX className="w-16 h-16 text-slate-400" />
      </div>

      {/* Error Message */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-white">404</h1>
        <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
        <p className="text-slate-400 max-w-md">
          The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to safety.
        </p>
      </div>

      {/* Suggestions Card */}
      <Card className="w-full max-w-md bg-slate-800 border-0">
        <CardContent className="p-6">
          <h3 className="font-semibold text-white mb-3">Try these instead:</h3>
          <div className="space-y-2">
            <Link to="/" className="block p-3 bg-slate-900/50 hover:bg-slate-900 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
              <p className="text-white font-medium">Home</p>
              <p className="text-sm text-slate-400">Return to the main page</p>
            </Link>
            <Link to="/alerts" className="block p-3 bg-slate-900/50 hover:bg-slate-900 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
              <p className="text-white font-medium">Disaster Alerts</p>
              <p className="text-sm text-slate-400">View current emergency alerts</p>
            </Link>
            <Link to="/map" className="block p-3 bg-slate-900/50 hover:bg-slate-900 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
              <p className="text-white font-medium">Live Map</p>
              <p className="text-sm text-slate-400">Check the disaster map</p>
            </Link>
          </div>
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

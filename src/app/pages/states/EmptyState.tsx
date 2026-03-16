import { Link } from "react-router"
import { Inbox, Plus, Home } from "lucide-react"
import { Card, CardContent } from "../../components/ui/card"

export function EmptyState() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Empty Icon */}
      <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center">
        <Inbox className="w-16 h-16 text-slate-500" />
      </div>

      {/* Empty Message */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-white">No Data Found</h1>
        <p className="text-slate-400 max-w-md">
          There's nothing here yet. Start by creating your first item or check back later.
        </p>
      </div>

      {/* Info Card */}
      <Card className="w-full max-w-md bg-slate-800 border-0">
        <CardContent className="p-6">
          <h3 className="font-semibold text-white mb-3">What can you do?</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                <Plus className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Create New</p>
                <p className="text-sm text-slate-400">Add your first item to get started</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                <Home className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Go Home</p>
                <p className="text-sm text-slate-400">Navigate to the main page</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="w-full max-w-md space-y-3 pt-4">
        <button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30">
          <Plus className="w-5 h-5" />
          Create New Item
        </button>
        
        <Link to="/" className="block">
          <button className="w-full h-12 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors">
            <Home className="w-5 h-5" />
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  )
}

import { Loader2 } from "lucide-react"

export function LoadingState() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Loading Spinner */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-blue-600/20 flex items-center justify-center">
          <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
        </div>
        {/* Pulse effect */}
        <div className="absolute inset-0 w-24 h-24 rounded-full bg-blue-500/20 animate-ping" />
      </div>

      {/* Loading Message */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Loading...</h2>
        <p className="text-slate-400 max-w-md">
          Please wait while we fetch the data
        </p>
      </div>

      {/* Progress indicator dots */}
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0ms" }} />
        <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "150ms" }} />
        <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  )
}

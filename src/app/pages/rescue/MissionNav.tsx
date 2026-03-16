import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { MapPin, Navigation, MessageCircle, AlertTriangle, ArrowLeft, CheckCircle } from "lucide-react"

export function MissionNav() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState("En route")

  const statuses = ["En route", "Arrived", "Rescue in progress", "Victim rescued"]

  const nextStatus = () => {
    const idx = statuses.indexOf(status)
    if (idx < statuses.length - 1) {
      setStatus(statuses[idx + 1])
    }
  }

  const complete = statuses.indexOf(status) === statuses.length - 1

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8 h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-slate-200 mb-6 shrink-0">
        <button onClick={() => navigate("/rescue")} className="p-2.5 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Active Mission Navigation</div>
          <div className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            {id || "SOS-9940"} <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 text-sm">{status}</Badge>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
        {/* Left Column: Status & Info */}
        <div className="lg:col-span-1 flex flex-col gap-6 overflow-y-auto pr-2">
          
          <Card className="bg-white border-slate-200 shadow-sm shrink-0">
            <CardContent className="p-6">
              <h3 className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-wider">Mission Status Tracker</h3>
              
              <div className="relative pl-6 space-y-8">
                <div className="absolute top-2 bottom-2 left-2.5 w-0.5 bg-slate-200 -z-10 rounded-full"></div>
                <div className="absolute top-2 left-2.5 w-0.5 bg-green-500 -z-10 rounded-full transition-all duration-500" style={{ height: `${(statuses.indexOf(status) / (statuses.length - 1)) * 100}%` }}></div>
                
                {statuses.map((step, idx) => {
                  const isCompleted = statuses.indexOf(status) >= idx;
                  const isCurrent = statuses.indexOf(status) === idx;
                  return (
                    <div key={step} className="flex items-center gap-4 relative">
                      <div className={`absolute -left-6 w-8 h-8 rounded-full flex items-center justify-center transition-colors border-2 bg-white ${
                        isCompleted ? "border-green-500 text-green-600" : "border-slate-300 text-slate-400"
                      } ${isCurrent ? "ring-4 ring-green-100" : ""}`}>
                        {isCompleted ? <CheckCircle className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-slate-300" />}
                      </div>
                      <div className={`font-bold ${isCurrent ? "text-slate-900 text-lg" : isCompleted ? "text-slate-700" : "text-slate-400"}`}>
                        {step}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                {!complete ? (
                  <button 
                    onClick={nextStatus}
                    className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center justify-center transition-transform active:scale-95 shadow-md uppercase tracking-wide gap-2"
                  >
                    UPDATE TO: {statuses[statuses.indexOf(status) + 1]}
                  </button>
                ) : (
                  <button 
                    onClick={() => navigate("/rescue")}
                    className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl flex items-center justify-center transition-transform active:scale-95 shadow-md uppercase tracking-wide gap-2"
                  >
                    <CheckCircle className="w-5 h-5" /> COMPLETE MISSION
                  </button>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-50 border-slate-200 shadow-sm shrink-0">
             <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-slate-200">
                   <div>
                     <p className="text-sm text-slate-500 font-medium">ETA to Scene</p>
                     <p className="text-3xl font-bold text-slate-900">4 min</p>
                   </div>
                   <div className="text-right">
                     <p className="text-sm text-slate-500 font-medium">Distance</p>
                     <p className="text-xl font-bold text-slate-700">2.4 km</p>
                   </div>
                </div>
                
                <button className="w-full h-12 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  Contact Dispatch
                </button>
             </CardContent>
          </Card>

        </div>

        {/* Right Column: Map Nav */}
        <div className="lg:col-span-2 bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 shadow-sm flex flex-col h-full min-h-[400px]">
          {/* Map Nav */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 opacity-80 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply" />
            
            {/* Nav Path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <path d="M 500,600 C 400,400 600,200 400,100" stroke="#ef4444" strokeWidth="6" fill="none" className="opacity-80" />
              <path d="M 500,600 C 400,400 600,200 400,100" stroke="#b91c1c" strokeWidth="6" strokeDasharray="12 12" fill="none" className="animate-[dash_2s_linear_infinite]" />
            </svg>

            {/* Current Position */}
            <div className="absolute bottom-1/4 right-1/3 -ml-8 -mt-8 bg-blue-500 w-16 h-16 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute bottom-1/4 right-1/3 -ml-4 -mt-4 w-8 h-8 bg-blue-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
              <Navigation className="w-4 h-4 text-white" />
            </div>
            
            {/* Destination */}
            <div className="absolute top-1/4 left-1/3 w-10 h-10 bg-red-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center -ml-5 -mt-5">
              <AlertTriangle className="w-5 h-5 text-white animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
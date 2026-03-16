import { Link } from "react-router"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { MapPin, Users, Clock, ArrowRight, ShieldAlert } from "lucide-react"

export function RescueMissions() {
  const missions = [
    { id: "SOS-9940", type: "Medical Emergency", location: "North Highway Bridge, Sector 4", distance: "2.4 km", status: "New Dispatch", urgency: "Critical", time: "Just now" },
    { id: "SOS-9912", type: "Flood Extraction", location: "Riverside Estate", distance: "5.1 km", status: "Completed", urgency: "High", time: "3 hours ago" },
    { id: "SOS-9908", type: "Fire Rescue", location: "Downtown Heights", distance: "8.2 km", status: "Completed", urgency: "Critical", time: "1 day ago" }
  ]

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8 space-y-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            Mission Queue <Badge className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1">1 New</Badge>
          </h1>
          <p className="text-slate-600">Review and accept your team's assigned rescue missions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {missions.map((mission) => (
          <Card key={mission.id} className={`overflow-hidden border transition-all ${mission.status === 'New Dispatch' ? 'bg-white border-red-200 ring-1 ring-red-500 shadow-md' : 'bg-slate-50 border-slate-200 opacity-80 hover:opacity-100'}`}>
            <CardContent className="p-0 flex flex-col h-full">
              <div className={`p-5 border-b ${mission.status === 'New Dispatch' ? 'border-red-100 bg-red-50/50' : 'border-slate-200 bg-white'}`}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    {mission.status === 'New Dispatch' && <ShieldAlert className="w-5 h-5 text-red-600 animate-pulse" />}
                    <span className="font-bold text-xl text-slate-900">{mission.id}</span>
                  </div>
                  <Badge variant={mission.status === 'New Dispatch' ? 'destructive' : 'secondary'} className={mission.status === 'New Dispatch' ? 'bg-red-100 text-red-700 border border-red-200 hover:bg-red-200' : 'bg-slate-100 text-slate-700 border border-slate-200'}>
                    {mission.status}
                  </Badge>
                </div>
                <h3 className={`font-semibold text-lg ${mission.status === 'New Dispatch' ? 'text-red-900' : 'text-slate-700'}`}>{mission.type}</h3>
              </div>
              
              <div className="p-5 space-y-4 flex-1 bg-white">
                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900">{mission.location}</p>
                    <p className="text-slate-500 text-sm mt-1">{mission.distance} away</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-slate-500 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <Clock className="w-4 h-4 text-slate-400" /> Dispatch time: <span className="font-medium text-slate-700">{mission.time}</span>
                </div>
              </div>

              {mission.status === 'New Dispatch' ? (
                <div className="p-5 pt-0 bg-white border-t border-slate-100 mt-auto">
                  <Link to={`/rescue/missions/${mission.id}`} className="block">
                    <button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
                      REVIEW & ACCEPT <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="p-5 pt-0 bg-white border-t border-slate-100 mt-auto">
                  <Link to={`/rescue/missions/${mission.id}`} className="block">
                    <button className="w-full h-12 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-lg flex items-center justify-center gap-2 transition-colors">
                      VIEW REPORT
                    </button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
import { useParams, Link } from "react-router"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Navigation, MapPin, Clock, Phone, Users, AlertCircle } from "lucide-react"

export function MissionEnroute() {
  const { id } = useParams()

  const missionData = {
    id: id || "SOS-9940",
    type: "Medical Emergency",
    location: "North Highway Bridge, Sector 4",
    distance: "1.2 km",
    eta: "4 minutes",
    reporter: "Rajesh Kumar",
    reporterPhone: "+91-9876543210",
    victims: 3,
    status: "En Route"
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
            Mission Status: En Route
            <Badge className="bg-blue-600 text-white hover:bg-blue-700">Active Mission</Badge>
          </h1>
          <p className="text-slate-600 mt-1">Mission ID: <span className="font-bold">{missionData.id}</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Status Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                <Navigation className="w-6 h-6 text-blue-600 animate-pulse" />
              </div>
              <div>
                <p className="font-bold text-blue-900 text-lg">Heading to Incident</p>
                <p className="text-blue-700 mt-1">Following navigation to reach the incident location</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Navigation Info */}
            <Card className="bg-blue-600 border-0 shadow-md text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">Distance Remaining</p>
                    <p className="text-3xl font-bold">{missionData.distance}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-500/50">
                  <div>
                    <p className="text-blue-100 text-sm mb-1">ETA</p>
                    <p className="text-xl font-bold">{missionData.eta}</p>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm mb-1">Status</p>
                    <p className="text-xl font-bold">{missionData.status}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Incident Info */}
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" /> Quick Info
                </h3>
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-600 font-medium">Victims</span>
                    </div>
                    <span className="font-bold text-slate-900">{missionData.victims} people</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100 mt-auto">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Reporter</p>
                      <p className="text-slate-900 font-bold">{missionData.reporterPhone}</p>
                    </div>
                    <a href={`tel:${missionData.reporterPhone}`} className="flex items-center gap-2 bg-green-50 text-green-700 hover:bg-green-100 px-3 py-2 rounded-lg font-bold transition-colors text-sm">
                      <Phone className="w-4 h-4" /> Call
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Safety Tips */}
          <Card className="bg-amber-50 border border-amber-200 shadow-sm">
            <CardContent className="p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" /> Safety Reminder
              </h3>
              <ul className="text-amber-800 space-y-1 ml-7 list-disc font-medium">
                <li>Use emergency lights and sirens as needed</li>
                <li>Maintain safe speed despite urgency</li>
                <li>Keep team informed of route changes</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <Card className="bg-white border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="bg-slate-100 h-64 relative w-full border-b border-slate-200">
              {/* Simulated Map */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center opacity-50" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="absolute -inset-2 bg-blue-500 rounded-full opacity-30 animate-ping"></span>
                <div className="bg-blue-600 text-white p-2 rounded-full relative z-10 shadow-lg">
                  <Navigation className="w-6 h-6" />
                </div>
              </div>
            </div>
            
            <CardContent className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" /> Destination
              </h3>
              <p className="text-slate-700 font-medium mb-8 bg-slate-50 p-4 rounded-lg border border-slate-100">{missionData.location}</p>
              
              <div className="mt-auto">
                <Link to={`/rescue/missions/${id}/arrived`} className="block">
                  <button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md">
                    <MapPin className="w-5 h-5" />
                    MARK AS ARRIVED
                  </button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

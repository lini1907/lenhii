import { useParams, Link } from "react-router"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { MapPin, CheckCircle, Users, AlertCircle, Camera, Play } from "lucide-react"

export function MissionArrived() {
  const { id } = useParams()

  const missionData = {
    id: id || "SOS-9940",
    type: "Medical Emergency",
    location: "North Highway Bridge, Sector 4",
    victims: 3,
    arrivalTime: "3:12 PM"
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
            Mission Status: Arrived at Scene
            <Badge className="bg-green-600 text-white hover:bg-green-700">On Site</Badge>
          </h1>
          <p className="text-slate-600 mt-1">Mission ID: <span className="font-bold">{missionData.id}</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Arrival Confirmation */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-lg shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-green-900 text-lg">Arrival Confirmed</p>
                <p className="text-green-700 mt-1">Team has reached the incident location at {missionData.arrivalTime}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission Info */}
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" /> Mission Details
                  </h3>
                  <Badge variant="destructive" className="bg-red-600 hover:bg-red-700">
                    Critical
                  </Badge>
                </div>
                
                <div className="space-y-4 pt-2">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Type</p>
                    <p className="font-bold text-slate-900">{missionData.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-slate-700 font-medium bg-slate-50 p-2 rounded-md border border-slate-100">{missionData.location}</p>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <Users className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-900 font-bold">{missionData.victims} victims reported</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="bg-amber-50 border border-amber-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" /> Protocol Reminder
                </h3>
                <p className="text-amber-800 font-medium leading-relaxed">
                  Document the scene with photos before starting rescue operations. Ensure all safety protocols are followed.
                </p>
                <div className="mt-6 space-y-3">
                  <button className="w-full h-12 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <Camera className="w-5 h-5" />
                    Take Scene Photos
                  </button>
                  <button className="w-full h-12 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 font-bold rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <AlertCircle className="w-5 h-5" />
                    Request Backup
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Scene Assessment Checklist */}
          <Card className="bg-white border-slate-200 shadow-sm flex flex-col h-full">
            <CardContent className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Scene Assessment</h3>
              <p className="text-slate-500 text-sm mb-4">Complete this checklist before starting the operation</p>
              
              <div className="space-y-3 flex-1">
                {[
                  "Scene is safe to approach",
                  "Victims located and counted",
                  "Equipment ready",
                  "Team briefed on situation"
                ].map((item, i) => (
                  <label key={i} className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors">
                    <input type="checkbox" className="w-5 h-5 accent-blue-600 rounded" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </label>
                ))}
              </div>

              {/* Start Rescue */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link to={`/rescue/missions/${id}/in-progress`} className="block">
                  <button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md">
                    <Play className="w-5 h-5 fill-current" />
                    START RESCUE OPERATION
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

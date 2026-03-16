import { useState } from "react"
import { useParams, Link } from "react-router"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Activity, Users, Clock, AlertCircle, CheckCircle, Timer } from "lucide-react"

export function RescueInProgress() {
  const { id } = useParams()
  const [elapsedTime, setElapsedTime] = useState("12:45")

  const missionData = {
    id: id || "SOS-9940",
    type: "Medical Emergency",
    location: "North Highway Bridge, Sector 4",
    victims: 3,
    startTime: "3:15 PM"
  }

  const checklistItems = [
    { id: 1, label: "Initial triage completed", completed: true },
    { id: 2, label: "Victim 1 - Stabilized", completed: true },
    { id: 3, label: "Victim 2 - Receiving treatment", completed: false },
    { id: 4, label: "Victim 3 - Awaiting assessment", completed: false }
  ]

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
            Rescue In Progress
            <Badge className="bg-amber-500 hover:bg-amber-600 text-white animate-pulse">
              Active
            </Badge>
          </h1>
          <p className="text-slate-600 mt-1">Mission ID: <span className="font-bold">{missionData.id}</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Status Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-2 rounded-lg shrink-0">
                <Activity className="w-6 h-6 text-amber-600 animate-pulse" />
              </div>
              <div>
                <p className="font-bold text-amber-900 text-lg">Rescue Operation Active</p>
                <p className="text-amber-800 mt-1">Team is performing rescue and medical assistance</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Timer Card */}
            <Card className="bg-red-600 border-0 shadow-md text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Timer className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-red-100 text-sm font-medium uppercase tracking-wider">Operation Duration</p>
                    <p className="text-3xl font-bold">{elapsedTime}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-red-500/50 flex justify-between items-center">
                  <span className="text-red-100 text-sm">Started at</span>
                  <span className="font-bold">{missionData.startTime}</span>
                </div>
              </CardContent>
            </Card>

            {/* Mission Info */}
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="destructive" className="bg-red-600">Critical</Badge>
                </div>
                <h3 className="font-bold text-slate-900 text-xl">{missionData.type}</h3>
                <p className="text-slate-600 mt-2 bg-slate-50 p-2 rounded border border-slate-100">{missionData.location}</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Updates */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Quick Update Log</h3>
              <div className="space-y-4">
                <div className="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-500 font-medium shrink-0 pt-0.5">3:27 PM</span>
                  <p className="text-slate-800 font-medium">Victim 1 stabilized, preparing for transport</p>
                </div>
                <div className="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-500 font-medium shrink-0 pt-0.5">3:22 PM</span>
                  <p className="text-slate-800">Triage completed, priorities assessed</p>
                </div>
                <div className="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-500 font-medium shrink-0 pt-0.5">3:15 PM</span>
                  <p className="text-slate-800">Rescue operation started</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Victim Status */}
          <Card className="bg-white border-slate-200 shadow-sm flex flex-col h-full">
            <CardContent className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Victim Status ({missionData.victims})
              </h3>
              
              <div className="space-y-3 flex-1">
                {checklistItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 p-4 rounded-lg border transition-colors ${
                      item.completed
                        ? "border-green-200 bg-green-50"
                        : "border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer"
                    }`}
                  >
                    {item.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300 bg-white shrink-0" />
                    )}
                    <span className={item.completed ? "text-green-800 font-medium" : "text-slate-700 font-medium"}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link to={`/rescue/missions/${id}/completed`} className="block">
                  <button className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md">
                    <CheckCircle className="w-5 h-5" />
                    MARK MISSION COMPLETE
                  </button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Safety Notice */}
          <Card className="bg-blue-50 border border-blue-200 shadow-sm">
            <CardContent className="p-5">
              <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                Reminder
              </h3>
              <p className="text-blue-800 font-medium">
                Document all actions taken. Coordinate with medical transport if evacuation is needed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

import { useParams, Link } from "react-router"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { CheckCircle, MapPin, Users, Clock, FileText, Home } from "lucide-react"

export function MissionSummary() {
  const { id } = useParams()

  const missionData = {
    id: id || "SOS-9940",
    type: "Medical Emergency",
    location: "North Highway Bridge, Sector 4",
    startTime: "3:15 PM",
    endTime: "4:02 PM",
    duration: "47 minutes",
    victimsRescued: 3,
    casualties: 0,
    status: "Completed Successfully"
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      {/* Success Icon */}
      <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>

      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-white">Mission Completed!</h1>
        <p className="text-slate-400">Report submitted successfully</p>
      </div>

      {/* Mission Summary Card */}
      <Card className="w-full bg-slate-800 border-0">
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-sm text-slate-400">Mission ID</p>
              <p className="text-xl font-bold text-white mt-1">{missionData.id}</p>
            </div>
            <Badge className="bg-green-600 text-white">
              <CheckCircle className="w-3 h-3 mr-1" />
              Completed
            </Badge>
          </div>
          
          <div className="pt-3 border-t border-slate-700 space-y-3">
            <div>
              <p className="font-semibold text-white">{missionData.type}</p>
            </div>
            
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-slate-300">{missionData.location}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time Summary */}
      <Card className="w-full bg-slate-800 border-0">
        <CardContent className="p-4">
          <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-500" />
            Time Summary
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <p className="text-xs text-slate-400">Started</p>
              <p className="text-white font-semibold">{missionData.startTime}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Ended</p>
              <p className="text-white font-semibold">{missionData.endTime}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Duration</p>
              <p className="text-white font-semibold">{missionData.duration}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Outcome */}
      <Card className="w-full bg-green-900/20 border border-green-600/30">
        <CardContent className="p-4">
          <h3 className="font-semibold text-green-200 mb-3">Mission Outcome</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-green-300 mb-1">Rescued</p>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-2xl font-bold text-green-100">{missionData.victimsRescued}</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-green-300 mb-1">Casualties</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-100">{missionData.casualties}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status */}
      <Card className="w-full bg-slate-800 border-0">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Status</p>
              <p className="text-lg font-semibold text-green-400 mt-1">{missionData.status}</p>
            </div>
            <FileText className="w-8 h-8 text-slate-600" />
          </div>
        </CardContent>
      </Card>

      {/* Info Message */}
      <div className="w-full bg-blue-900/30 border border-blue-500/50 rounded-xl p-4 text-center">
        <p className="text-sm text-blue-200">
          Your mission report has been submitted to the coordination center. Thank you for your service!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-3 pt-2">
        <Link to="/rescue" className="block">
          <button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/30">
            <Home className="w-5 h-5" />
            Return to Dashboard
          </button>
        </Link>
        
        <Link to="/rescue/missions" className="block">
          <button className="w-full h-12 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors">
            View All Missions
          </button>
        </Link>
      </div>
    </div>
  )
}

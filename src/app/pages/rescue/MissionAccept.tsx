import { useParams, Link, useNavigate } from "react-router"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { CheckCircle, MapPin, Users, Clock, Navigation, ArrowRight } from "lucide-react"

export function MissionAccept() {
  const { id } = useParams()
  const navigate = useNavigate()

  const missionData = {
    id: id || "SOS-9940",
    type: "Medical Emergency",
    location: "North Highway Bridge, Sector 4",
    distance: "2.4 km",
    victims: 3,
    eta: "8 minutes"
  }

  const handleAcceptMission = () => {
    // In a real app, this would update the mission status in the database
    setTimeout(() => {
      navigate(`/rescue/missions/${id}/nav`)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      {/* Success Icon */}
      <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>

      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-white">Accept Mission?</h1>
        <p className="text-slate-400">You're about to accept this rescue mission</p>
      </div>

      {/* Mission Summary Card */}
      <Card className="w-full bg-slate-800 border-0">
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-sm text-slate-400">Mission ID</p>
              <p className="text-xl font-bold text-white mt-1">{missionData.id}</p>
            </div>
            <Badge variant="destructive" className="bg-red-500">
              Critical
            </Badge>
          </div>
          
          <div className="pt-3 border-t border-slate-700 space-y-3">
            <div>
              <p className="font-semibold text-white">{missionData.type}</p>
            </div>
            
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white">{missionData.location}</p>
                <p className="text-slate-400">{missionData.distance} away</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300">{missionData.victims} victims</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-slate-300">ETA: {missionData.eta}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info Box */}
      <div className="w-full bg-blue-900/30 border border-blue-500/50 rounded-xl p-4">
        <p className="text-sm text-blue-200">
          By accepting this mission, you confirm your team is ready to respond immediately and proceed to the incident location.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-3 pt-2">
        <button 
          onClick={handleAcceptMission}
          className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-600/30"
        >
          <CheckCircle className="w-5 h-5" />
          Confirm & Start Navigation
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <Link to={`/rescue/missions/${id}`} className="block">
          <button className="w-full h-12 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors">
            Back to Details
          </button>
        </Link>
      </div>
    </div>
  )
}

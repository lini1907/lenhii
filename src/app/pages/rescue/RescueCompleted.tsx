import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { CheckCircle, Users, Clock, AlertCircle, FileText } from "lucide-react"

export function RescueCompleted() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [victimsTransported, setVictimsTransported] = useState("3")
  const [casualties, setCasualties] = useState("0")
  const [notes, setNotes] = useState("")

  const missionData = {
    id: id || "SOS-9940",
    type: "Medical Emergency",
    location: "North Highway Bridge, Sector 4",
    startTime: "3:15 PM",
    endTime: "4:02 PM",
    duration: "47 minutes"
  }

  const handleSubmitReport = () => {
    // In a real app, this would submit the completion report
    setTimeout(() => {
      navigate(`/rescue/missions/${id}/summary`)
    }, 1000)
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Complete Mission</h1>
        <Badge className="bg-green-600 text-white">
          Finishing
        </Badge>
      </div>

      {/* Success Banner */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-green-900 text-lg">Rescue Operation Completed</p>
            <p className="text-sm text-green-700 mt-1">Please provide final details for the mission report</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Mission Summary */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Mission ID</p>
                  <p className="text-2xl font-bold text-slate-900">{missionData.id}</p>
                </div>
                <Badge variant="destructive" className="bg-red-600">
                  Critical
                </Badge>
              </div>
              
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <p className="font-bold text-slate-900 text-lg">{missionData.type}</p>
                <p className="text-slate-600">{missionData.location}</p>
              </div>
            </CardContent>
          </Card>

          {/* Time Summary */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Time Summary
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Started</p>
                  <p className="text-slate-900 font-bold">{missionData.startTime}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Ended</p>
                  <p className="text-slate-900 font-bold">{missionData.endTime}</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <p className="text-xs text-blue-600 uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-blue-900 font-bold">{missionData.duration}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Outcome Details */}
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-bold text-slate-900 mb-4">Mission Outcome Report</h3>
              
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Victims Transported
                    </label>
                    <input
                      type="number"
                      value={victimsTransported}
                      onChange={(e) => setVictimsTransported(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Casualties
                    </label>
                    <input
                      type="number"
                      value={casualties}
                      onChange={(e) => setCasualties(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                      min="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Enter important details, observations, or follow-up actions..."
                    className="w-full h-32 bg-white border border-slate-300 rounded-lg p-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-medium"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <button 
            onClick={handleSubmitReport}
            className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <FileText className="w-5 h-5" />
            SUBMIT FINAL REPORT
          </button>
        </div>
      </div>
    </div>
  )
}

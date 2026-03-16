import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { XCircle, AlertCircle } from "lucide-react"

export function MissionReject() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedReason, setSelectedReason] = useState("")
  const [otherReason, setOtherReason] = useState("")

  const reasons = [
    "Team not available",
    "Equipment shortage",
    "Already on another mission",
    "Outside coverage area",
    "Insufficient team members",
    "Other"
  ]

  const missionData = {
    id: id || "SOS-9940",
    type: "Medical Emergency",
    location: "North Highway Bridge, Sector 4"
  }

  const handleRejectMission = () => {
    if (!selectedReason) return
    if (selectedReason === "Other" && !otherReason.trim()) return
    
    // In a real app, this would update the mission status in the database
    setTimeout(() => {
      navigate("/rescue/missions")
    }, 1000)
  }

  const isFormValid = selectedReason && (selectedReason !== "Other" || otherReason.trim())

  return (
    <div className="space-y-4 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold tracking-tight text-white">Reject Mission</h1>
      </div>

      {/* Warning Banner */}
      <div className="bg-amber-900/30 border border-amber-500/50 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-200">Important</p>
            <p className="text-sm text-amber-300 mt-1">This mission will be reassigned to another team. Please provide a reason for rejection.</p>
          </div>
        </div>
      </div>

      {/* Mission Info */}
      <Card className="bg-slate-800 border-0">
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-slate-400">Mission ID</p>
              <p className="text-xl font-bold text-white mt-1">{missionData.id}</p>
            </div>
            <Badge variant="destructive" className="bg-red-500">
              Critical
            </Badge>
          </div>
          <div className="pt-3 border-t border-slate-700">
            <p className="font-semibold text-white">{missionData.type}</p>
            <p className="text-sm text-slate-400 mt-1">{missionData.location}</p>
          </div>
        </CardContent>
      </Card>

      {/* Rejection Reasons */}
      <Card className="bg-slate-800 border-0">
        <CardContent className="p-4">
          <h3 className="font-semibold text-white mb-3">Reason for Rejection</h3>
          <div className="space-y-2">
            {reasons.map((reason) => (
              <label
                key={reason}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedReason === reason
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-slate-700 bg-slate-900/50 hover:border-slate-600"
                }`}
              >
                <input
                  type="radio"
                  name="reason"
                  value={reason}
                  checked={selectedReason === reason}
                  onChange={(e) => setSelectedReason(e.target.value)}
                  className="w-4 h-4 accent-blue-500"
                />
                <span className="text-white">{reason}</span>
              </label>
            ))}
          </div>

          {selectedReason === "Other" && (
            <div className="mt-4">
              <label className="block text-sm text-slate-400 mb-2">
                Please specify reason
              </label>
              <textarea
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
                placeholder="Enter your reason..."
                className="w-full h-24 bg-slate-900 border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <Link to={`/rescue/missions/${id}`} className="block">
          <button className="w-full h-14 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors">
            Cancel
          </button>
        </Link>
        <button
          onClick={handleRejectMission}
          disabled={!isFormValid}
          className={`w-full h-14 font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${
            isFormValid
              ? "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30"
              : "bg-slate-700 text-slate-500 cursor-not-allowed"
          }`}
        >
          <XCircle className="w-5 h-5" />
          Confirm Rejection
        </button>
      </div>
    </div>
  )
}

import { Link, useParams, useNavigate } from "react-router"
import { ArrowLeft, MapPin, Users, Clock, Camera, FileText, Check, X } from "lucide-react"

export function IncidentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const incident = {
    id: id || "INC-001",
    type: "Wildfire",
    status: "Pending Verification",
    location: "Northern Hills District",
    victims: 45,
    reportedBy: "Citizen Report",
    submittedAt: "March 14, 2026 2:30 PM",
    description: "Fast-moving wildfire threatening residential area. Multiple structures at risk.",
    photos: [1, 2, 3],
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/coordinator/incidents" className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-900 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Incidents Queue</span>
      </Link>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div className="px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Incident #{incident.id}</p>
              <h1 className="text-2xl font-bold">{incident.type}</h1>
            </div>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
              {incident.status}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="font-medium text-slate-900">{incident.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-500">Victims</p>
                <p className="font-medium text-slate-900">{incident.victims}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-500">Reported</p>
                <p className="font-medium text-slate-900">5 min ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-slate-400" />
              <div>
                <p className="text-xs text-slate-500">Source</p>
                <p className="font-medium text-slate-900">{incident.reportedBy}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-slate-900 mb-2">Description</h3>
            <p className="text-slate-700">{incident.description}</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-3">Evidence Photos</h3>
            <div className="grid grid-cols-3 gap-4">
              {incident.photos.map((_, index) => (
                <div key={index} className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                  <Camera className="w-8 h-8 text-slate-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => navigate(`/coordinator/incidents/${id}/verify`)}
          className="px-6 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2"
        >
          <Check className="w-5 h-5" />
          <span>Verify & Approve</span>
        </button>
        <button
          onClick={() => navigate(`/coordinator/incidents/${id}/reject`)}
          className="px-6 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2"
        >
          <X className="w-5 h-5" />
          <span>Reject Report</span>
        </button>
      </div>
    </div>
  )
}

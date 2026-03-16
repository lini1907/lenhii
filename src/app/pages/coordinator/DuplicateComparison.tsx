import { useNavigate, useParams } from "react-router"
import { Copy, MapPin, Users, Clock, Check, X } from "lucide-react"

export function DuplicateComparison() {
  const { id } = useParams()
  const navigate = useNavigate()

  const reports = [
    {
      id: id || "INC-001",
      type: "Wildfire",
      location: "Northern Hills, Zone A",
      victims: 45,
      reportedBy: "John Citizen",
      time: "2:30 PM",
      description: "Fast-moving wildfire threatening residential area.",
    },
    {
      id: "INC-002",
      type: "Wildfire",
      location: "Northern Hills, Zone B",
      victims: 38,
      reportedBy: "Emergency Services",
      time: "2:35 PM",
      description: "Wildfire spreading rapidly in northern region.",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Copy className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Possible Duplicate Reports</h1>
            <p className="text-slate-600">Compare reports to determine if they describe the same incident</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {reports.map((report, index) => (
          <div key={report.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Report {index + 1}</p>
                  <h2 className="text-xl font-bold text-slate-900">{report.id}</h2>
                </div>
                {index === 0 && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                    Current
                  </span>
                )}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-slate-900 mb-4">{report.type}</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-700">{report.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-700">{report.victims} victims reported</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-700">{report.time}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-slate-500 mb-1">Reported by:</p>
                <p className="font-medium text-slate-900">{report.reportedBy}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">Description:</p>
                <p className="text-slate-700">{report.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
        <h3 className="font-bold text-slate-900 mb-4">Similarity Analysis</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="text-slate-700">Location proximity</span>
            <span className="font-bold text-green-600">95% match</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="text-slate-700">Incident type</span>
            <span className="font-bold text-green-600">100% match</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <span className="text-slate-700">Victim count</span>
            <span className="font-bold text-yellow-600">85% match</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="text-slate-700">Time window</span>
            <span className="font-bold text-green-600">Within 5 minutes</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-blue-900 mb-2">Recommendation</h3>
        <p className="text-blue-900">
          These reports appear to describe the same incident. Consider merging them to avoid duplicate rescue dispatch.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => navigate(`/coordinator/incidents/${id}`)}
          className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 flex items-center justify-center space-x-2"
        >
          <X className="w-5 h-5" />
          <span>Mark as Duplicate</span>
        </button>
        <button
          onClick={() => navigate(`/coordinator/incidents/${id}/verify`)}
          className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2"
        >
          <Check className="w-5 h-5" />
          <span>Treat as Separate</span>
        </button>
      </div>
    </div>
  )
}

import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import { CheckCircle, AlertTriangle, FileText } from "lucide-react"

export function IncidentVerification() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [priority, setPriority] = useState("High")
  const [notes, setNotes] = useState("")

  const handleVerify = () => {
    navigate(`/coordinator/incidents/${id}/approve`)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Verify Incident Report</h1>
            <p className="text-slate-600">Review and validate incident details</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4">Set Priority Level</h3>
          <div className="grid grid-cols-4 gap-3">
            {["Critical", "High", "Medium", "Low"].map((level) => (
              <button
                key={level}
                onClick={() => setPriority(level)}
                className={`px-4 py-3 rounded-lg font-medium border-2 transition-all ${
                  priority === level
                    ? level === "Critical"
                      ? "bg-red-100 border-red-600 text-red-700"
                      : level === "High"
                      ? "bg-orange-100 border-orange-600 text-orange-700"
                      : level === "Medium"
                      ? "bg-yellow-100 border-yellow-600 text-yellow-700"
                      : "bg-blue-100 border-blue-600 text-blue-700"
                    : "border-slate-300 text-slate-700 hover:border-slate-400"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4">Verification Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any notes about the verification process..."
            rows={6}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
          />
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Verification Checklist</h3>
              <ul className="space-y-2 text-sm text-yellow-900">
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500" />
                  <span>Location verified and accessible</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500" />
                  <span>Victim count appears accurate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500" />
                  <span>No duplicate reports found</span>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500" />
                  <span>Evidence photos reviewed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => navigate(`/coordinator/incidents/${id}`)}
            className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={handleVerify}
            className="flex-1 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
          >
            Verify & Continue
          </button>
        </div>
      </div>
    </div>
  )
}

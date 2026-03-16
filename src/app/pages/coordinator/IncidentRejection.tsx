import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import { XCircle, AlertTriangle } from "lucide-react"

export function IncidentRejection() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [reason, setReason] = useState("")
  const [selectedReason, setSelectedReason] = useState("")

  const reasons = [
    "Duplicate report",
    "Insufficient information",
    "False alarm",
    "Already resolved",
    "Outside jurisdiction",
    "Other",
  ]

  const handleReject = () => {
    navigate("/coordinator/incidents")
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
            <XCircle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Reject Incident #{id}</h1>
            <p className="text-slate-600">Provide a reason for rejection</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 mb-4">Select Rejection Reason</h3>
          <div className="space-y-2">
            {reasons.map((r) => (
              <label key={r} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                <input
                  type="radio"
                  name="reason"
                  value={r}
                  checked={selectedReason === r}
                  onChange={(e) => setSelectedReason(e.target.value)}
                  className="w-4 h-4 text-red-600"
                />
                <span className="text-slate-900">{r}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 mb-4">Additional Notes (Optional)</h3>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Provide additional details about the rejection..."
            rows={6}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
          />
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Important Notice</h3>
              <p className="text-sm text-yellow-900">
                Rejecting this incident will notify the reporter and remove it from the active queue. Make sure this decision is justified.
              </p>
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
            onClick={handleReject}
            disabled={!selectedReason}
            className="flex-1 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            Reject Incident
          </button>
        </div>
      </div>
    </div>
  )
}

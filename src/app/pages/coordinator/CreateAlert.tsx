import { useState } from "react"
import { useNavigate } from "react-router"
import { Bell, AlertTriangle, MapPin } from "lucide-react"

export function CreateAlert() {
  const navigate = useNavigate()
  const [alertType, setAlertType] = useState("")
  const [severity, setSeverity] = useState("")
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [affectedAreas, setAffectedAreas] = useState<string[]>([])

  const areas = ["Zone A", "Zone B", "Zone C", "Zone D"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/coordinator/alert-confirmation")
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
            <Bell className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Create Disaster Alert</h1>
            <p className="text-slate-600">Send emergency warnings to affected populations</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <label className="block text-sm font-medium text-slate-700 mb-3">Alert Type</label>
          <select
            value={alertType}
            onChange={(e) => setAlertType(e.target.value)}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
          >
            <option value="">Select disaster type</option>
            <option value="wildfire">Wildfire</option>
            <option value="flood">Flood</option>
            <option value="earthquake">Earthquake</option>
            <option value="storm">Storm/Hurricane</option>
            <option value="landslide">Landslide</option>
          </select>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <label className="block text-sm font-medium text-slate-700 mb-3">Severity Level</label>
          <div className="grid grid-cols-4 gap-3">
            {["Critical", "High", "Medium", "Low"].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setSeverity(level)}
                className={`px-4 py-3 rounded-lg font-medium border-2 transition-all ${
                  severity === level
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

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <label className="block text-sm font-medium text-slate-700 mb-3">Alert Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Major Wildfire Alert - Northern Hills"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
          />
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <label className="block text-sm font-medium text-slate-700 mb-3">Alert Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe the threat and provide safety instructions..."
            rows={6}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none outline-none"
          />
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <label className="block text-sm font-medium text-slate-700 mb-3">Affected Areas</label>
          <div className="grid grid-cols-2 gap-3">
            {areas.map((area) => (
              <label key={area} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={affectedAreas.includes(area)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAffectedAreas([...affectedAreas, area])
                    } else {
                      setAffectedAreas(affectedAreas.filter((a) => a !== area))
                    }
                  }}
                  className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                />
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-slate-900">{area}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Review Before Sending</h3>
              <p className="text-sm text-yellow-900">
                This alert will be sent to all residents in the selected areas via SMS, email, and app notifications. Ensure all information is accurate.
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => navigate("/coordinator/monitoring")}
            className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
          >
            Review & Send Alert
          </button>
        </div>
      </form>
    </div>
  )
}

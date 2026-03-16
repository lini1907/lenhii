import { Link, useParams } from "react-router"
import { AlertTriangle, MapPin, Clock, Users, ArrowLeft, Navigation, Phone, Share2 } from "lucide-react"
import { useEffect, useState } from "react"
import { getAlerts, type Alert as DbAlert } from "../../../services/alertsService"

export function DisasterAlertDetail() {
  const { id } = useParams()
  const [alert, setAlert] = useState<DbAlert | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setError("Invalid alert id")
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)
    setError(null)

    getAlerts()
      .then((alerts) => {
        if (cancelled) return
        const found = alerts.find((a) => a.id === id) ?? null
        if (!found) {
          setError("Alert not found")
        }
        setAlert(found)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message ?? "Failed to load alert")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [id])

  const issuedAt = alert ? new Date(alert.created_at).toLocaleString() : ""

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/alerts"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Alerts</span>
        </Link>

        {loading && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 text-gray-600">
            Loading alert…
          </div>
        )}

        {!loading && error && (
          <div className="bg-white rounded-xl border border-red-200 p-6 mb-6 text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && alert && (
          <>
        {/* Alert Header */}
        <div className="bg-white rounded-xl border-2 border-red-300 shadow-lg overflow-hidden mb-6">
          <div
            className={`px-6 py-4 ${
              alert.severity?.toLowerCase() === "critical" ? "bg-red-600" : "bg-orange-600"
            } text-white`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-8 h-8" />
                <div>
                  <p className="text-sm font-medium opacity-90">{alert.disaster_type} Alert</p>
                  <h1 className="text-2xl font-bold">{alert.title}</h1>
                </div>
              </div>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                {alert.severity}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">{alert.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Issued</p>
                  <p className="font-medium text-gray-900">{issuedAt}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Est. Affected</p>
                  <p className="font-medium text-gray-900">—</p>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{alert.description}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
            <Navigation className="w-5 h-5" />
            <span>Navigate to Safety</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700">
            <Phone className="w-5 h-5" />
            <span>Emergency Contact</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700">
            <Share2 className="w-5 h-5" />
            <span>Share Alert</span>
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">More details</h2>
          <p className="text-gray-600">
            For this student demo, the detail page currently shows the core fields from the database.
            You can extend the `alerts` table later with fields like instructions, affected areas, and updates.
          </p>
        </div>
          </>
        )}
      </div>
    </div>
  )
}

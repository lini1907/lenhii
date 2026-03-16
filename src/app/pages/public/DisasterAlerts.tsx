import { Link } from "react-router"
import { Bell, MapPin, Clock, AlertTriangle, Filter, Search } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { getAlerts, type Alert as DbAlert } from "../../../services/alertsService"

export function DisasterAlerts() {
  const [filterSeverity, setFilterSeverity] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [alerts, setAlerts] = useState<DbAlert[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    getAlerts()
      .then((data) => {
        if (!cancelled) setAlerts(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message ?? "Failed to load alerts")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const filteredAlerts = useMemo(() => {
    return alerts.filter((alert) => {
      const severity = alert.severity?.toLowerCase()
      const type = alert.disaster_type?.toLowerCase()

      if (filterSeverity !== "all" && severity !== filterSeverity.toLowerCase()) return false
      if (filterType !== "all" && type !== filterType.toLowerCase()) return false
      return true
    })
  }, [alerts, filterSeverity, filterType])

  const formatTimeAgo = (iso: string) => {
    const created = new Date(iso).getTime()
    const diffMs = Date.now() - created
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    if (diffHours < 1) return "just now"
    if (diffHours < 24) return `${diffHours} hours ago`
    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays} days ago`
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full px-8 lg:px-20">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Bell className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Active Disaster Alerts</h1>
              <p className="text-gray-600">Real-time emergency warnings and notifications</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-bold text-gray-900">Filter Alerts</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search alerts..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Severity</label>
              <select
                value={filterSeverity}
                onChange={(e) => setFilterSeverity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="all">All Severity Levels</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Disaster Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="flood">Flood</option>
                <option value="storm">Storm</option>
                <option value="landslide">Landslide</option>
                <option value="heat">Heat</option>
              </select>
            </div>
          </div>
        </div>

        {/* Alert Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold text-gray-900">{filteredAlerts.length}</span> alerts
          </p>
        </div>

        {/* Alerts List */}
        <div className="space-y-6">
          {loading && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-gray-600">
              Loading alerts…
            </div>
          )}
          {!loading && error && (
            <div className="bg-white rounded-xl border border-red-200 p-6 text-red-700">
              {error}
            </div>
          )}
          {!loading && !error && filteredAlerts.length === 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-gray-600">
              No alerts found.
            </div>
          )}
          {filteredAlerts.map((alert) => (
            <Link
              key={alert.id}
              to={`/alerts/${alert.id}`}
              className="block bg-white rounded-xl border-2 border-gray-200 hover:border-red-300 hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        alert.severity?.toLowerCase() === "critical"
                          ? "bg-red-100"
                          : alert.severity?.toLowerCase() === "high"
                          ? "bg-orange-100"
                          : "bg-yellow-100"
                      }`}
                    >
                      <AlertTriangle
                        className={`w-6 h-6 ${
                          alert.severity?.toLowerCase() === "critical"
                            ? "text-red-600"
                            : alert.severity?.toLowerCase() === "high"
                            ? "text-orange-600"
                            : "text-yellow-600"
                        }`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            alert.severity?.toLowerCase() === "critical"
                              ? "bg-red-100 text-red-700"
                              : alert.severity?.toLowerCase() === "high"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {alert.severity}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {alert.disaster_type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">{alert.title}</h3>
                      <p className="text-gray-600 mb-4">{alert.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{alert.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{formatTimeAgo(alert.created_at)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`px-6 py-3 ${
                  alert.severity?.toLowerCase() === "critical"
                    ? "bg-red-50"
                    : alert.severity?.toLowerCase() === "high"
                    ? "bg-orange-50"
                    : "bg-yellow-50"
                }`}
              >
                <p className="text-sm font-medium text-gray-700">Click to view full details and safety instructions</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
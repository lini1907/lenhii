import { Link } from "react-router"
import { Bell, MapPin, Clock, AlertTriangle, Filter, Search } from "lucide-react"
import { useState } from "react"

export function DisasterAlerts() {
  const [filterSeverity, setFilterSeverity] = useState("all")
  const [filterType, setFilterType] = useState("all")

  const alerts = [
    {
      id: 1,
      type: "Wildfire",
      severity: "Critical",
      title: "Major Wildfire Spreading in Northern Hills",
      location: "Northern Hills District",
      affectedAreas: ["Zone A", "Zone B", "Zone C"],
      time: "2 hours ago",
      status: "Active",
      description: "Fast-moving wildfire threatening residential areas. Immediate evacuation recommended.",
    },
    {
      id: 2,
      type: "Flood",
      severity: "High",
      title: "Flash Flood Warning - Downtown Area",
      location: "Downtown District",
      affectedAreas: ["Central Plaza", "River District"],
      time: "4 hours ago",
      status: "Active",
      description: "Heavy rainfall causing rapid water level rise. Avoid low-lying areas.",
    },
    {
      id: 3,
      type: "Storm",
      severity: "Medium",
      title: "Severe Thunderstorm Approaching",
      location: "Coastal Region",
      affectedAreas: ["Beach Area", "Port District"],
      time: "6 hours ago",
      status: "Active",
      description: "Strong winds and heavy rain expected. Secure loose objects and stay indoors.",
    },
    {
      id: 4,
      type: "Earthquake",
      severity: "High",
      title: "Aftershock Alert - Eastern Region",
      location: "Eastern District",
      affectedAreas: ["East Valley", "Hill Side"],
      time: "8 hours ago",
      status: "Monitoring",
      description: "Following magnitude 6.2 earthquake. Multiple aftershocks expected in next 24 hours.",
    },
    {
      id: 5,
      type: "Landslide",
      severity: "Medium",
      title: "Landslide Risk in Mountain Areas",
      location: "Mountain Ridge",
      affectedAreas: ["Summit Road", "Valley View"],
      time: "10 hours ago",
      status: "Warning",
      description: "Unstable ground conditions due to recent rainfall. Avoid mountain roads.",
    },
  ]

  const filteredAlerts = alerts.filter((alert) => {
    if (filterSeverity !== "all" && alert.severity !== filterSeverity) return false
    if (filterType !== "all" && alert.type !== filterType) return false
    return true
  })

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
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
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
                <option value="Wildfire">Wildfire</option>
                <option value="Flood">Flood</option>
                <option value="Storm">Storm</option>
                <option value="Earthquake">Earthquake</option>
                <option value="Landslide">Landslide</option>
              </select>
            </div>
          </div>
        </div>

        {/* Alert Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold text-gray-900">{filteredAlerts.length}</span> active alerts
          </p>
        </div>

        {/* Alerts List */}
        <div className="space-y-6">
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
                        alert.severity === "Critical"
                          ? "bg-red-100"
                          : alert.severity === "High"
                          ? "bg-orange-100"
                          : "bg-yellow-100"
                      }`}
                    >
                      <AlertTriangle
                        className={`w-6 h-6 ${
                          alert.severity === "Critical"
                            ? "text-red-600"
                            : alert.severity === "High"
                            ? "text-orange-600"
                            : "text-yellow-600"
                        }`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            alert.severity === "Critical"
                              ? "bg-red-100 text-red-700"
                              : alert.severity === "High"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {alert.severity}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {alert.type}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          {alert.status}
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
                          <span>{alert.time}</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-2">Affected Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {alert.affectedAreas.map((area, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`px-6 py-3 ${
                  alert.severity === "Critical"
                    ? "bg-red-50"
                    : alert.severity === "High"
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
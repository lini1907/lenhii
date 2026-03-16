import { useState } from "react"
import { MapPin, AlertTriangle, Users, Filter, Layers, ZoomIn, ZoomOut, Navigation } from "lucide-react"

export function LiveDisasterMap() {
  const [activeLayer, setActiveLayer] = useState("all")
  const [selectedIncident, setSelectedIncident] = useState<number | null>(null)

  const incidents = [
    { id: 1, type: "Wildfire", severity: "Critical", location: "Northern Hills", lat: 34.1, lng: -118.3, victims: 45 },
    { id: 2, type: "Flood", severity: "High", location: "Downtown", lat: 34.05, lng: -118.25, victims: 78 },
    { id: 3, type: "Earthquake", severity: "Medium", location: "East Valley", lat: 34.08, lng: -118.2, victims: 12 },
    { id: 4, type: "Landslide", severity: "High", location: "Mountain Ridge", lat: 34.12, lng: -118.35, victims: 23 },
  ]

  const rescueTeams = [
    { id: 1, name: "Team Alpha", status: "En Route", lat: 34.07, lng: -118.27 },
    { id: 2, name: "Team Bravo", status: "On Site", lat: 34.1, lng: -118.3 },
    { id: 3, name: "Team Charlie", status: "Available", lat: 34.06, lng: -118.24 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full px-8 lg:px-20">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Disaster Map</h1>
              <p className="text-gray-600">Real-time view of active incidents and rescue operations</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">Live</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Map Controls */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ZoomIn className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ZoomOut className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Navigation className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-gray-400" />
                  <select
                    value={activeLayer}
                    onChange={(e) => setActiveLayer(e.target.value)}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Layers</option>
                    <option value="incidents">Incidents Only</option>
                    <option value="teams">Rescue Teams Only</option>
                    <option value="alerts">Alert Zones</option>
                  </select>
                </div>
              </div>

              {/* Simulated Map */}
              <div className="relative bg-gradient-to-br from-blue-50 to-green-50 h-[600px]">
                {/* Grid overlay to simulate map */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-10 grid-rows-10 h-full">
                    {Array.from({ length: 100 }).map((_, i) => (
                      <div key={i} className="border border-gray-400"></div>
                    ))}
                  </div>
                </div>

                {/* Incident Markers */}
                {(activeLayer === "all" || activeLayer === "incidents") &&
                  incidents.map((incident) => (
                    <button
                      key={incident.id}
                      onClick={() => setSelectedIncident(incident.id)}
                      className="absolute group"
                      style={{
                        left: `${((incident.lng + 118.4) / 0.2) * 100}%`,
                        top: `${((34.15 - incident.lat) / 0.15) * 100}%`,
                      }}
                    >
                      <div
                        className={`relative flex items-center justify-center transition-transform ${
                          selectedIncident === incident.id ? "scale-125" : "hover:scale-110"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                            incident.severity === "Critical"
                              ? "bg-red-600"
                              : incident.severity === "High"
                              ? "bg-orange-600"
                              : "bg-yellow-600"
                          }`}
                        >
                          <AlertTriangle className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                          {incident.type}
                        </div>
                      </div>
                    </button>
                  ))}

                {/* Rescue Team Markers */}
                {(activeLayer === "all" || activeLayer === "teams") &&
                  rescueTeams.map((team) => (
                    <div
                      key={team.id}
                      className="absolute group"
                      style={{
                        left: `${((team.lng + 118.4) / 0.2) * 100}%`,
                        top: `${((34.15 - team.lat) / 0.15) * 100}%`,
                      }}
                    >
                      <div className="relative">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                          <MapPin className="w-3 h-3 text-white" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                          {team.name}
                        </div>
                      </div>
                    </div>
                  ))}

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Legend</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">Critical Incident</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">High Incident</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
                      <span className="text-gray-700">Medium Incident</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Rescue Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Statistics */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Current Status</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Active Incidents</span>
                    <span className="text-2xl font-bold text-red-600">{incidents.length}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Rescue Teams</span>
                    <span className="text-2xl font-bold text-blue-600">{rescueTeams.length}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">People Affected</span>
                    <span className="text-2xl font-bold text-orange-600">158</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-600 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Incidents List */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Active Incidents</h3>
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                {incidents.map((incident) => (
                  <button
                    key={incident.id}
                    onClick={() => setSelectedIncident(incident.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedIncident === incident.id
                        ? "border-blue-300 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-medium text-gray-900">{incident.type}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold ${
                          incident.severity === "Critical"
                            ? "bg-red-100 text-red-700"
                            : incident.severity === "High"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {incident.severity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{incident.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{incident.victims}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Rescue Teams */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Rescue Teams</h3>
              <div className="space-y-3">
                {rescueTeams.map((team) => (
                  <div key={team.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{team.name}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          team.status === "On Site"
                            ? "bg-green-100 text-green-700"
                            : team.status === "En Route"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {team.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
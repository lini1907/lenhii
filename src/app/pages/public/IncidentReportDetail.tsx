import { Link, useParams } from "react-router"
import { ArrowLeft, MapPin, Clock, Users, CheckCircle, Shield, Camera, AlertTriangle } from "lucide-react"

export function IncidentReportDetail() {
  const { id } = useParams()

  // Mock data
  const incident = {
    id: id || "1",
    title: "Building Collapse - Main Street",
    type: "Structural Collapse",
    location: "Downtown District",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    reportedBy: "John Citizen",
    victims: 12,
    rescued: 8,
    status: "Verified",
    reportedAt: "March 14, 2026 2:30 PM",
    time: "1 hour ago",
    rescueStatus: "In Progress",
    severity: "High",
    description:
      "A commercial building on Main Street has partially collapsed following structural failure. Emergency services are on scene. Multiple people reported trapped inside.",
    updates: [
      { time: "1 hour ago", message: "Incident reported and verified by coordinator" },
      { time: "45 minutes ago", message: "Rescue Team Alpha dispatched to location" },
      { time: "30 minutes ago", message: "Team arrived on scene, assessment in progress" },
      { time: "15 minutes ago", message: "8 people successfully rescued, search continuing" },
    ],
    assignedTeams: [
      { name: "Rescue Team Alpha", status: "On Site", leader: "Captain Smith" },
      { name: "Medical Unit 2", status: "En Route", leader: "Dr. Johnson" },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/incidents" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Incident Reports</span>
        </Link>

        {/* Incident Header */}
        <div className="bg-white rounded-xl border-2 border-gray-200 shadow-lg overflow-hidden mb-6">
          <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium opacity-90">Incident Report #{incident.id}</p>
                  <h1 className="text-2xl font-bold">{incident.title}</h1>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className="px-4 py-2 bg-green-500 rounded-full text-sm font-bold">
                  {incident.status}
                </span>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    incident.severity === "High"
                      ? "bg-orange-500"
                      : incident.severity === "Critical"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {incident.severity} Severity
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">{incident.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Reported</p>
                  <p className="font-medium text-gray-900">{incident.time}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Victims</p>
                  <p className="font-medium text-gray-900">{incident.victims} people</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Rescued</p>
                  <p className="font-medium text-green-600">{incident.rescued} people</p>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Incident Description</h3>
              <p className="text-gray-700 leading-relaxed">{incident.description}</p>
            </div>
          </div>
        </div>

        {/* Rescue Progress */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Rescue Progress</h2>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">People Rescued</span>
              <span className="text-sm font-bold text-gray-900">
                {incident.rescued} / {incident.victims}
              </span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-600 rounded-full transition-all"
                style={{ width: `${(incident.rescued / incident.victims) * 100}%` }}
              ></div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Rescue operations ongoing. {incident.victims - incident.rescued} people still being located.
          </p>
        </div>

        {/* Assigned Teams */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Assigned Rescue Teams</h2>
          </div>
          <div className="space-y-3">
            {incident.assignedTeams.map((team, index) => (
              <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{team.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      team.status === "On Site"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {team.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Led by {team.leader}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Updates Timeline */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Live Updates</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200"></div>

            <div className="space-y-6">
              {incident.updates.map((update, index) => (
                <div key={index} className="relative flex items-start space-x-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white relative z-10"></div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm text-gray-500 mb-1">{update.time}</p>
                    <p className="text-gray-900">{update.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reporter Information */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Report Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Reported By</p>
              <p className="font-medium text-gray-900">{incident.reportedBy}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Report Time</p>
              <p className="font-medium text-gray-900">{incident.reportedAt}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Incident Type</p>
              <p className="font-medium text-gray-900">{incident.type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Rescue Status</p>
              <p className="font-medium text-blue-600">{incident.rescueStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

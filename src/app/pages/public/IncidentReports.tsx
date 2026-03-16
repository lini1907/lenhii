import { Link } from "react-router"
import { FileText, MapPin, Clock, Users, CheckCircle, AlertCircle } from "lucide-react"

export function IncidentReports() {
  const reports = [
    {
      id: 1,
      title: "Building Collapse - Main Street",
      type: "Structural Collapse",
      location: "Downtown District",
      reportedBy: "Citizen",
      victims: 12,
      status: "Verified",
      time: "1 hour ago",
      rescueStatus: "In Progress",
    },
    {
      id: 2,
      title: "Flash Flood - River Valley",
      type: "Flood",
      location: "River Valley Area",
      reportedBy: "Emergency Services",
      victims: 45,
      status: "Verified",
      time: "3 hours ago",
      rescueStatus: "Ongoing",
    },
    {
      id: 3,
      title: "Wildfire Threatening Homes",
      type: "Wildfire",
      location: "Northern Hills",
      reportedBy: "Fire Department",
      victims: 67,
      status: "Verified",
      time: "5 hours ago",
      rescueStatus: "Multiple Teams Deployed",
    },
    {
      id: 4,
      title: "Traffic Accident - Highway 101",
      type: "Vehicle Accident",
      location: "Highway 101 Mile 45",
      reportedBy: "Citizen",
      victims: 5,
      status: "Under Review",
      time: "30 minutes ago",
      rescueStatus: "Team Dispatched",
    },
    {
      id: 5,
      title: "Landslide Warning",
      type: "Landslide",
      location: "Mountain Ridge",
      reportedBy: "Geological Survey",
      victims: 23,
      status: "Verified",
      time: "7 hours ago",
      rescueStatus: "Evacuation Complete",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full px-8 lg:px-20">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Verified Incident Reports</h1>
              <p className="text-gray-600">Real-time updates on ongoing rescue operations</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Reports</p>
                <p className="text-3xl font-bold text-gray-900">{reports.length}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Verified</p>
                <p className="text-3xl font-bold text-green-600">
                  {reports.filter((r) => r.status === "Verified").length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Under Review</p>
                <p className="text-3xl font-bold text-orange-600">
                  {reports.filter((r) => r.status === "Under Review").length}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-orange-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">People Affected</p>
                <p className="text-3xl font-bold text-red-600">
                  {reports.reduce((sum, r) => sum + r.victims, 0)}
                </p>
              </div>
              <Users className="w-8 h-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {reports.map((report) => (
            <Link
              key={report.id}
              to={`/incidents/${report.id}`}
              className="block bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{report.title}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          report.status === "Verified"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {report.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>{report.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{report.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{report.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{report.victims} affected</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Reported by:</span>
                        <span className="text-sm font-medium text-gray-900">{report.reportedBy}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Rescue Status:</span>
                        <span className="text-sm font-medium text-blue-600">{report.rescueStatus}</span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-4">
                    <div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                        report.status === "Verified" ? "bg-green-100" : "bg-orange-100"
                      }`}
                    >
                      {report.status === "Verified" ? (
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      ) : (
                        <AlertCircle className="w-8 h-8 text-orange-600" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                <p className="text-sm text-gray-600">Click to view full incident details and rescue progress</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
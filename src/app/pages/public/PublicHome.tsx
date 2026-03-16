import { Link, useNavigate } from "react-router"
import { AlertTriangle, Bell, Map, Shield, Phone, FileText, ArrowRight, Activity } from "lucide-react"

export function PublicHome() {
  const navigate = useNavigate()

  const handleSOSClick = () => {
    const isCitizenLoggedIn = localStorage.getItem("citizenAuthenticated") === "true"
    if (isCitizenLoggedIn) {
      navigate("/citizen/sos/category")
    } else {
      navigate("/auth/citizen/login")
    }
  }

  const activeAlerts = [
    { id: 1, type: "Flood", severity: "High", location: "Downtown District", time: "2 hours ago" },
    { id: 2, type: "Wildfire", severity: "Critical", location: "Northern Hills", time: "4 hours ago" },
    { id: 3, type: "Storm", severity: "Medium", location: "Coastal Area", time: "6 hours ago" },
  ]

  const stats = [
    { label: "Active Incidents", value: "47", icon: Activity, color: "text-red-600" },
    { label: "Rescue Teams", value: "23", icon: Shield, color: "text-blue-600" },
    { label: "People Rescued", value: "189", icon: Bell, color: "text-green-600" },
    { label: "Active Alerts", value: "8", icon: AlertTriangle, color: "text-orange-600" },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="w-full px-8 lg:px-20 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Activity className="w-4 h-4" />
              <span className="text-sm font-medium">Live Disaster Response System</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency Assistance When You Need It Most
            </h1>
            <p className="text-xl text-red-50 mb-8">
              Real-time disaster monitoring, SOS reporting, and coordinated rescue operations
              to keep communities safe during emergencies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                type="button"
                onClick={handleSOSClick}
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 flex items-center justify-center space-x-2 shadow-xl"
              >
                <AlertTriangle className="w-5 h-5" />
                <span>Submit SOS Request</span>
              </button>
              <Link
                to="/map"
                className="px-8 py-4 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800 flex items-center justify-center space-x-2"
              >
                <Map className="w-5 h-5" />
                <span>View Disaster Map</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full px-8 lg:px-20 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Active Alerts Section */}
      <div className="w-full px-8 lg:px-20 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Active Disaster Alerts</h2>
            <p className="text-gray-600 mt-2">Stay informed about ongoing emergencies in your area</p>
          </div>
          <Link
            to="/alerts"
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeAlerts.map((alert) => (
            <Link
              key={alert.id}
              to={`/alerts/${alert.id}`}
              className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-red-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Bell className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-medium text-gray-500">{alert.time}</span>
                </div>
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
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{alert.type}</h3>
              <p className="text-gray-600 flex items-center space-x-2">
                <Map className="w-4 h-4" />
                <span>{alert.location}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="bg-gray-100 py-16">
        <div className="w-full px-8 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Quick Access</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/incidents"
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Incident Reports</h3>
              <p className="text-gray-600 mb-4">
                View verified incident reports and ongoing rescue operations in your area.
              </p>
              <span className="text-blue-600 font-medium flex items-center space-x-2">
                <span>View Reports</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/safety"
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety Guidelines</h3>
              <p className="text-gray-600 mb-4">
                Learn essential safety procedures for different types of disaster scenarios.
              </p>
              <span className="text-green-600 font-medium flex items-center space-x-2">
                <span>Read Guidelines</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/hotlines"
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Hotlines</h3>
              <p className="text-gray-600 mb-4">
                Quick access to emergency contact numbers and support services.
              </p>
              <span className="text-orange-600 font-medium flex items-center space-x-2">
                <span>View Hotlines</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-8">
        <div className="w-full px-8 lg:px-20 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">In an Emergency?</h3>
              <p className="text-red-100">Get immediate assistance by submitting an SOS request</p>
            </div>
            <button
              type="button"
              onClick={handleSOSClick}
              className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 flex items-center space-x-2 shadow-xl"
            >
              <AlertTriangle className="w-5 h-5" />
              <span>Submit SOS Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
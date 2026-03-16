import { Link } from "react-router"
import { Shield, AlertCircle, CheckCircle, Clock, Navigation, Bell } from "lucide-react"

export function RescueTeamDashboard() {
  const stats = [
    { label: "Active Missions", value: "2", icon: AlertCircle, color: "orange" },
    { label: "Pending Assignments", value: "5", icon: Clock, color: "blue" },
    { label: "Completed Today", value: "8", icon: CheckCircle, color: "green" },
    { label: "Team Members", value: "6", icon: Shield, color: "red" },
  ]

  const activeMissions = [
    { id: "M-001", type: "Wildfire", location: "Northern Hills", status: "En Route", priority: "Critical", eta: "5 min" },
    { id: "M-002", type: "Flood", location: "River Valley", status: "In Progress", priority: "High", eta: "On Site" },
  ]

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Rescue Team Dashboard</h1>
        <p className="text-slate-600">Mission Command Center - Team Alpha</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${stat.color === 'orange' ? 'text-orange-600' : stat.color === 'blue' ? 'text-blue-600' : stat.color === 'green' ? 'text-emerald-600' : 'text-red-600'}`} />
              </div>
              <p className="text-slate-600 text-sm mb-1 font-medium">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color === 'orange' ? 'text-orange-600' : stat.color === 'blue' ? 'text-blue-600' : stat.color === 'green' ? 'text-emerald-600' : 'text-red-600'}`}>
                {stat.value}
              </p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Active Missions</h2>
              <Link to="/rescue/missions" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {activeMissions.map((mission) => (
                <Link
                  key={mission.id}
                  to={`/rescue/missions/${mission.id}`}
                  className="block p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-bold text-gray-900">{mission.type}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          mission.priority === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                          {mission.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{mission.location}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-bold ${mission.status === 'En Route' ? 'text-blue-600' : 'text-green-600'}`}>
                        {mission.status}
                      </p>
                      <p className="text-xs text-gray-500">{mission.eta}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-3">
                    <span className="text-sm text-blue-600 font-medium">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                to="/rescue/notifications"
                className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">New Assignments</span>
                </div>
                <span className="px-2 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">3</span>
              </Link>
              <Link
                to="/rescue/missions"
                className="flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
              >
                <Navigation className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">View Map</span>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">Team Status</h3>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Ready for Deployment</span>
            </div>
            <p className="text-sm text-green-100">All team members available</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Link } from "react-router"
import { AlertTriangle, Users, CheckCircle, Clock, ArrowRight, Bell, Map } from "lucide-react"

export function CoordinatorDashboard() {
  const stats = [
    { label: "Pending Verification", value: "12", icon: Clock, color: "orange", link: "/coordinator/incidents" },
    { label: "Active Rescues", value: "8", icon: AlertTriangle, color: "red", link: "/coordinator/map" },
    { label: "Completed Today", value: "24", icon: CheckCircle, color: "green", link: "/coordinator/incidents" },
    { label: "Available Teams", value: "15", icon: Users, color: "blue", link: "/coordinator/assign" },
  ]

  const pendingIncidents = [
    { id: "INC-001", type: "Wildfire", location: "Northern Hills", victims: 45, time: "5 min ago", priority: "Critical" },
    { id: "INC-002", type: "Flood", location: "Downtown", victims: 23, time: "12 min ago", priority: "High" },
    { id: "INC-003", type: "Earthquake", location: "East Valley", victims: 12, time: "20 min ago", priority: "Medium" },
  ]

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Coordinator Dashboard</h1>
          <p className="text-slate-600">Emergency Response Command Center</p>
        </div>
        <Link 
          to="/coordinator/create-alert" 
          className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-bold flex items-center space-x-2 hover:bg-red-700 transition-colors shadow-sm"
        >
          <Bell className="w-5 h-5" />
          <span>Create Alert</span>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Link
              key={index}
              to={stat.link}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color === 'orange' ? 'bg-orange-100' : stat.color === 'red' ? 'bg-red-100' : stat.color === 'green' ? 'bg-emerald-100' : 'bg-blue-100'}`}>
                  <Icon className={`w-6 h-6 ${stat.color === 'orange' ? 'text-orange-600' : stat.color === 'red' ? 'text-red-600' : stat.color === 'green' ? 'text-emerald-600' : 'text-blue-600'}`} />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </div>
              <p className="text-slate-600 text-sm mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color === 'orange' ? 'text-orange-600' : stat.color === 'red' ? 'text-red-600' : stat.color === 'green' ? 'text-emerald-600' : 'text-blue-600'}`}>
                {stat.value}
              </p>
            </Link>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Incidents */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">Pending Verification</h2>
              <Link to="/coordinator/incidents" className="text-red-600 hover:text-red-700 font-medium text-sm">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {pendingIncidents.map((incident) => (
                <Link
                  key={incident.id}
                  to={`/coordinator/incidents/${incident.id}`}
                  className="block p-4 border border-slate-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-bold text-slate-900">{incident.type}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          incident.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                          incident.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {incident.priority}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{incident.location} • {incident.victims} victims</p>
                    </div>
                    <span className="text-xs text-slate-500">{incident.time}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                to="/coordinator/create-alert"
                className="flex items-center space-x-3 p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
              >
                <Bell className="w-5 h-5 text-red-600" />
                <span className="font-medium text-slate-900">Create Alert</span>
              </Link>
              <Link
                to="/coordinator/map"
                className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <Map className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-900">View Map</span>
              </Link>
              <Link
                to="/coordinator/assign"
                className="flex items-center space-x-3 p-3 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
              >
                <Users className="w-5 h-5 text-emerald-600" />
                <span className="font-medium text-slate-900">Assign Team</span>
              </Link>
            </div>
          </div>

          <div className="bg-slate-800 text-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-2">System Status</h3>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm">All Systems Operational</span>
            </div>
            <p className="text-sm text-slate-300">Last updated: Just now</p>
          </div>
        </div>
      </div>
    </div>
  )
}
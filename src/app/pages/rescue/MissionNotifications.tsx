import { Link } from "react-router"
import { Bell, AlertTriangle, MapPin, Users, Clock } from "lucide-react"

export function MissionNotifications() {
  const notifications = [
    {
      id: "M-003",
      type: "New Assignment",
      disaster: "Building Collapse",
      location: "Downtown District",
      victims: 12,
      priority: "Critical",
      time: "2 min ago",
    },
    {
      id: "M-004",
      type: "New Assignment",
      disaster: "Traffic Accident",
      location: "Highway 101",
      victims: 5,
      priority: "High",
      time: "10 min ago",
    },
    {
      id: "M-005",
      type: "New Assignment",
      disaster: "Flood",
      location: "River Valley",
      victims: 23,
      priority: "Medium",
      time: "25 min ago",
    },
  ]

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
            <Bell className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Mission Notifications</h1>
            <p className="text-slate-600">New assignment requests</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-red-200 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4 flex-1">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                  notification.priority === 'Critical' ? 'bg-red-100' : notification.priority === 'High' ? 'bg-orange-100' : 'bg-yellow-100'
                }`}>
                  <AlertTriangle className={`w-6 h-6 ${
                    notification.priority === 'Critical' ? 'text-red-600' : notification.priority === 'High' ? 'text-orange-600' : 'text-yellow-600'
                  }`} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{notification.disaster}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      notification.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                      notification.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {notification.priority}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="truncate">{notification.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span>{notification.victims} victims</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{notification.time}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      to={`/rescue/missions/${notification.id}`}
                      className="flex-1 text-center py-2 bg-blue-50 text-blue-700 font-bold rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/rescue/missions/${notification.id}/accept`}
                      className="flex-1 text-center py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-sm"
                    >
                      Accept Mission
                    </Link>
                    <Link
                      to={`/rescue/missions/${notification.id}/reject`}
                      className="flex-1 text-center py-2 border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      Decline
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

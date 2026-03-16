import { Link } from "react-router"
import { Activity, AlertTriangle, TrendingUp, Map, Bell } from "lucide-react"

export function DisasterMonitoring() {
  const risks = [
    { type: "Wildfire", region: "Northern Hills", level: "High", trend: "Increasing", color: "red" },
    { type: "Flood Risk", region: "River Valley", level: "Medium", trend: "Stable", color: "orange" },
    { type: "Storm Warning", region: "Coastal Area", level: "Low", trend: "Decreasing", color: "yellow" },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "red": return { text: "text-red-600", bg: "bg-red-100", textDark: "text-red-700" }
      case "orange": return { text: "text-orange-600", bg: "bg-orange-100", textDark: "text-orange-700" }
      case "yellow": return { text: "text-yellow-600", bg: "bg-yellow-100", textDark: "text-yellow-700" }
      case "blue": return { text: "text-blue-600", bg: "bg-blue-100", textDark: "text-blue-700" }
      case "green": return { text: "text-emerald-600", bg: "bg-emerald-100", textDark: "text-emerald-700" }
      default: return { text: "text-slate-600", bg: "bg-slate-100", textDark: "text-slate-700" }
    }
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Disaster Monitoring Dashboard</h1>
            <p className="text-slate-600">Real-time disaster risk assessment and early warning</p>
          </div>
          <Link
            to="/coordinator/create-alert"
            className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-bold flex items-center space-x-2 hover:bg-red-700 transition-colors shadow-sm"
          >
            <Bell className="w-5 h-5" />
            <span>Create Alert</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Active Alerts", value: "3", icon: Bell, color: "red" },
          { label: "Risk Areas", value: "8", icon: Map, color: "orange" },
          { label: "Monitoring Points", value: "24", icon: Activity, color: "blue" },
          { label: "Trend Analysis", value: "12", icon: TrendingUp, color: "green" },
        ].map((stat, index) => {
          const Icon = stat.icon
          const colors = getColorClasses(stat.color)
          return (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${colors.text}`} />
              </div>
              <p className="text-slate-600 text-sm mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${colors.text}`}>{stat.value}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Current Risk Levels</h2>
          <div className="space-y-4">
            {risks.map((risk, index) => {
              const colors = getColorClasses(risk.color)
              return (
                <div key={index} className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className={`w-5 h-5 ${colors.text}`} />
                      <h3 className="font-bold text-slate-900">{risk.type}</h3>
                    </div>
                    <span className={`px-3 py-1 ${colors.bg} ${colors.textDark} rounded-full text-xs font-bold`}>
                      {risk.level}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{risk.region}</span>
                    <span className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{risk.trend}</span>
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Risk Map View</h2>
            <Link to="/coordinator/risk-map" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Full Map
            </Link>
          </div>
          <div className="bg-slate-100 rounded-lg h-96 flex items-center justify-center border border-slate-200">
            <Map className="w-16 h-16 text-slate-300" />
          </div>
        </div>
      </div>
    </div>
  )
}
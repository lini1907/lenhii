import { useNavigate } from "react-router"
import { Flame, Droplets, Wind, AlertTriangle, Mountain, Car, Home, Users } from "lucide-react"

export function SOSCategorySelect() {
  const navigate = useNavigate()

  const categories = [
    { icon: Flame, label: "Wildfire", color: "orange", description: "Forest or building fire" },
    { icon: Droplets, label: "Flood", color: "blue", description: "Water flooding or flash flood" },
    { icon: Wind, label: "Storm/Hurricane", color: "gray", description: "Severe weather event" },
    { icon: AlertTriangle, label: "Earthquake", color: "red", description: "Seismic activity damage" },
    { icon: Mountain, label: "Landslide", color: "amber", description: "Ground collapse or mudslide" },
    { icon: Car, label: "Vehicle Accident", color: "purple", description: "Traffic or transportation incident" },
    { icon: Home, label: "Building Collapse", color: "slate", description: "Structural failure" },
    { icon: Users, label: "Other Emergency", color: "indigo", description: "Other disaster situation" },
  ]

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; hover: string; text: string } } = {
      orange: { bg: "bg-orange-100", hover: "hover:bg-orange-200", text: "text-orange-700" },
      blue: { bg: "bg-blue-100", hover: "hover:bg-blue-200", text: "text-blue-700" },
      gray: { bg: "bg-gray-100", hover: "hover:bg-gray-200", text: "text-gray-700" },
      red: { bg: "bg-red-100", hover: "hover:bg-red-200", text: "text-red-700" },
      amber: { bg: "bg-amber-100", hover: "hover:bg-amber-200", text: "text-amber-700" },
      purple: { bg: "bg-purple-100", hover: "hover:bg-purple-200", text: "text-purple-700" },
      slate: { bg: "bg-slate-100", hover: "hover:bg-slate-200", text: "text-slate-700" },
      indigo: { bg: "bg-indigo-100", hover: "hover:bg-indigo-200", text: "text-indigo-700" },
    }
    return colors[color]
  }

  const handleSelect = (category: string) => {
    // Store category in session/state and navigate to next step
    navigate("/citizen/sos/description")
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step 1 of 8</span>
          <span className="text-sm text-gray-500">Select Category</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-red-600 rounded-full" style={{ width: "12.5%" }}></div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">What type of emergency?</h1>
        <p className="text-gray-600">Select the category that best describes your situation</p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {categories.map((category) => {
          const Icon = category.icon
          const colors = getColorClasses(category.color)
          return (
            <button
              key={category.label}
              onClick={() => handleSelect(category.label)}
              className={`p-6 ${colors.bg} ${colors.hover} rounded-xl border-2 border-transparent hover:border-gray-300 transition-all text-left`}
            >
              <Icon className={`w-12 h-12 ${colors.text} mb-4`} />
              <h3 className="font-bold text-gray-900 mb-1">{category.label}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </button>
          )
        })}
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <p className="text-sm text-red-900">
          <strong>Life-threatening emergency?</strong> Call 911 immediately if you are in immediate danger.
        </p>
      </div>
    </div>
  )
}
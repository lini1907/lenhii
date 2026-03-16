import { Outlet, Link, useLocation, useNavigate } from "react-router"
import { AlertTriangle, Map, FileText, Heart, Phone, Bell } from "lucide-react"

export function PublicLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleSOSClick = () => {
    const isCitizenLoggedIn = localStorage.getItem("citizenAuthenticated") === "true"
    if (isCitizenLoggedIn) {
      navigate("/citizen/sos/category")
    } else {
      navigate("/auth/citizen/login")
    }
  }

  const navItems = [
    { path: "/", label: "Home", icon: Heart },
    { path: "/alerts", label: "Alerts", icon: Bell },
    { path: "/map", label: "Map", icon: Map },
    { path: "/incidents", label: "Incidents", icon: FileText },
    { path: "/safety", label: "Safety", icon: AlertTriangle },
    { path: "/hotlines", label: "Hotlines", icon: Phone },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Public Navigation Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="w-full px-8 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Disaster SOS</h1>
                <p className="text-xs text-gray-500">Public Information Portal</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center space-x-3">
              <Link
                to="/auth/citizen/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Sign In
              </Link>
              <button
                type="button"
                onClick={handleSOSClick}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg"
              >
                Submit SOS
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200">
          <nav className="flex overflow-x-auto px-4 py-2 space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center min-w-[60px] py-2 text-xs font-medium ${
                    isActive ? "text-red-600" : "text-gray-600"
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="w-full px-8 lg:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Emergency Hotlines</h3>
              <div className="space-y-2 text-gray-300">
                <p>Fire: 911</p>
                <p>Police: 911</p>
                <p>Medical: 911</p>
                <p>Disaster Response: 1-800-DISASTER</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/safety" className="block text-gray-300 hover:text-white">
                  Safety Guidelines
                </Link>
                <Link to="/alerts" className="block text-gray-300 hover:text-white">
                  Active Alerts
                </Link>
                <Link to="/map" className="block text-gray-300 hover:text-white">
                  Disaster Map
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">For Staff</h3>
              <div className="space-y-2">
                <Link to="/auth/coordinator/login" className="block text-gray-300 hover:text-white">
                  Coordinator Login
                </Link>
                <Link to="/auth/rescue/login" className="block text-gray-300 hover:text-white">
                  Rescue Team Login
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Disaster SOS Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
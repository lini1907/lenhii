import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { Shield, Mail, Lock, ArrowRight } from "lucide-react"
import { signInWithEmail } from "../../services/authService"

export function RescueTeamLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    signInWithEmail({ email, password, expectedRole: "rescue" })
      .then(() => {
        navigate("/rescue")
      })
      .catch((err) => {
        setError(err.message ?? "Login failed")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rescue Team Portal</h1>
          <p className="text-gray-600">Access mission assignments and rescue operations</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <p className="text-sm text-green-900">
            <strong>Rescue Personnel Only:</strong> This portal is for authorized rescue team members.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2 mb-2">
                {error}
              </p>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Team Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="team@rescue.org"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter secure password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/auth/forgot-password" className="text-sm text-green-600 hover:text-green-700 font-medium">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span>{loading ? "Signing in..." : "Access Missions"}</span>
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>
        </div>

        <div className="mt-6 text-center space-y-2">
          <Link to="/" className="block text-sm text-gray-600 hover:text-gray-900">
            ← Back to Public Portal
          </Link>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <Link to="/auth/citizen/login" className="text-blue-600 hover:underline">
              Citizen Login
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/auth/coordinator/login" className="text-blue-600 hover:underline">
              Coordinator Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
